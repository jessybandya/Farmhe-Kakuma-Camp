import React, { useEffect, useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Spinner,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../components/firebase";
import Swal from "sweetalert2";
import { updateAuthId } from "../../redux/dataSlice";
   
export default function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  const authId = useSelector((state) => state.authId);
  const dispatch = useDispatch();

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

//   if(authId){
//     history("/"); // Use 'push' method to redirect
//   }

  const signUp = async(e) => {
    e.preventDefault();
    setLoading(true);

    if(!firstName){
      setLoading(false);
      toast.error("First Name is requred!", {
        position: toast.POSITION.TOP_CENTER,
      })
    }else if(!lastName){
      setLoading(false);
      toast.error("Last Name is requred!", {
        position: toast.POSITION.TOP_CENTER,
      })
    }else if(!email){
      setLoading(false);
      toast.error("Email is requred!", {
        position: toast.POSITION.TOP_CENTER,
      })
    }else if(!phone){
      setLoading(false);
      toast.error("Phone is requred!", {
        position: toast.POSITION.TOP_CENTER,
      })
    }else if(!password){
      setLoading(false);
       toast.error("Password is required!", {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      setLoading(true)
      db.collection('users').where("email", "==", email).get().then((resultSnapShot) => {

          // resultSnapShot is an array of docs where "email" === "user_mail"
  
          if (resultSnapShot.size == 0) {                      
                auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    if (auth.user) {
                        auth.user.updateProfile({
                            photoURL: "https://avatars.githubusercontent.com/u/69303168?v=4",
                        }).then((s) => {

                            db.collection('users').doc(auth.user.uid).set({
                                uid: auth.user.uid,
                                firstName,
                                lastName,
                                email,
                                phone,
                                profilePhoto: "https://avatars.githubusercontent.com/u/69303168?v=4",
                                timestamp: Date.now(),
                            }).then((r) => {
                                  setLoading(false)
                                  Swal.fire({
                                      title: 'Success!',
                                      text: 'Your account has been created successfully!',
                                      icon: 'success',                                      
                                  })
                                  history('/')
                                })
                        })
                    }
                })
                .catch((e) => {
                        toast.error(e.message, {
                          position: toast.POSITION.TOP_CENTER
                      })
                        setLoading(false)
                });
  
          } else {
              //Already registered
              setLoading(false)
              toast.error("The email you entered already in use!", {
                position: toast.POSITION.TOP_CENTER
            })
          }
  
      })
    }
  
  };


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
        Create a new account.
      </Typography>
        </i>
        </center>
        <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
          <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          color="green" size="lg" label="First Name" />
          <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          color="green" size="lg" label="Last Name" />
            <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="green" size="lg" label="Email" />
            <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            color="green" size="lg" label="Phone" />

            <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="green" type="password" size="lg" label="Password" />
          </div>
          <Button onClick={signUp} color="green" className="mt-6" fullWidth>
          {loading ? <div style={{display:'table', margin: 'auto'}}><Spinner color="green" /></div> : 'Sign Up'}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Do you have an account already?{" "}
            <a href="/login" className="font-medium  text-green-600">
              <b>Login</b>
            </a>
          </Typography>
        </form>
      </Card>
      </div>
      </div>
    );
  }