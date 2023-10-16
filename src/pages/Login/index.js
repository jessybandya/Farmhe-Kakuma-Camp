import React, { useEffect, useState } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Spinner,
    Dialog,
    CardHeader,
    CardBody,
    CardFooter,
    Checkbox
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../components/firebase";
import { updateAuthId } from "../../redux/dataSlice";
   
export default function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [resetLoading, setResetLoading] = useState(false)
  const history = useNavigate()
  const authId = useSelector((state) => state.authId);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [emailReset, setEmailReset] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const idTokenResult = await user.getIdTokenResult()
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
            
          }
        })
        dispatch(updateAuthId(user?.uid))

      }
    })
    return () => unsubscribe()
  }, [])



  const handleOpen = () => setOpen((cur) => !cur);

//   if(authId){
//     history("/"); // Use 'push' method to redirect
//   }

  const signUp = async(e) => {
    e.preventDefault();
    setLoading(true);

    if(!email){
      setLoading(false);
      toast.error("Email is requred!", {
        position: toast.POSITION.TOP_CENTER,
      })
    }else if(!password){
      setLoading(false);
       toast.error("Password is required!", {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
        setLoading(true)
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
          setLoading(false)
            history('/')
          Swal.fire({
            icon: 'success',
            title: 'Logged in successfully!',
            text: 'Welcome Back!',            
          })
        })
        .catch((e) =>{
                toast.error(e.message, {
                  position: toast.POSITION.TOP_CENTER
              })      
              setLoading(false)     
        })
    }
  
  };


  const resetPassFun = async() =>{
    setResetLoading(true)

    if(!emailReset){
       toast.error("Email is required!", {
        position: toast.POSITION.TOP_CENTER
       })
       setResetLoading(false)
    }else{
        const config ={
            url: `https://farmhe-kakuma.web.app/`,
            handleCodeInApp: true
        };
      
          await auth
          .sendPasswordResetEmail(emailReset,config)
          .then(() => {
           setEmailReset('')
           setOpen(false)
           setResetLoading(false)
           Swal.fire({
            icon:"success",
            title:"Password Reset!",
            text:`A link has been sent to ${emailReset}, kindly check your inbox or spam!`,
            customClass: {
                container: "my-swal-container", // Add a custom CSS class name
              },
           })           
          })
          .catch((error)=>{
            setResetLoading(false)
           toast.error(error.message,{
              position: toast.POSITION.TOP_CENTER
          })
          })
    }
  }


    return (
        <div className="login-container">
        <div className="centered-container"
        style={{
          marginTop:10,
          backgroundColor: '#fff',
          borderRadius:10,
          border: '2px solid green',
          zIndex:1
        }}
        >
      <Card style={{
        padding:10,
      }} color="transparent" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          <center>
          <img src="/media/img/logo/logo.jpg" style={{height:80}}/>
          </center>
        </Typography>
        <center>
        <i>
        <Typography color="gray" className="mt-1 font-normal">
        Login With Registered Account.
      </Typography>
        </i>
        </center>
        <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="green" size="lg" label="Email" />

            <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="green" type="password" size="lg" label="Password" />
          </div>
          <Button onClick={signUp} color="green" className="mt-6" fullWidth>
          {loading ? <div style={{display:'table', margin: 'auto'}}><Spinner color="green" /></div> : 'Sign In'}
          </Button>

          <Typography
          
          color="green" onClick={handleOpen} className="mt-3 cursor-pointer text-center font-normal">
          Forgotten Password?
        </Typography>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account with us?{" "}
            <a href="/register" className="font-medium  text-green-600">
              <b>Register</b>
            </a>
          </Typography>
        </form>
      </Card>
      </div>

      <Dialog
      size="md"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
    <ToastContainer />
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardHeader
          variant="gradient"
          color="green"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Reset Password
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
          value={emailReset}
          onChange={(e) => setEmailReset(e.target.value)}
          color="green" label="Email" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={resetPassFun} variant="outlined" style={{color:'green', border: '1px solid green'}} fullWidth>
            {resetLoading ? <center><Spinner color="green"/></center> : "Submit"}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
      </div>
    );
  }