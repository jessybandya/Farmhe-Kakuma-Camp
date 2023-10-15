import React from 'react'
import { Carousel, Typography, Button, Card, CardHeader, Avatar, CardBody } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Home() {
  const transition = {type: "tween", duration: 0.5}
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const submitQuote = () =>{
    setLoading(true);

    if(!fullName){
      toast.error("Please enter your full name!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);      
    }else if(!phone){
      toast.error("Please enter your phone number!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }else if(!email){
      toast.error("Please enter your email address!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }else if(!subject){
      toast.error("Please enter the subject!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }else if(!message){
      toast.error("Please enter your message!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }else{
      const recipientEmail = 'marcelinmunga19@gmail.com'
      const subject1 = encodeURIComponent(`${subject}`);
      const body = encodeURIComponent(`Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`);
  
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject1}&body=${body}`;
      
      window.open(mailtoLink, '_blank');

      setFullName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Successfully sent',
        text: 'Your message has been sent successfully',
      
      })
    }
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+254700139636`, '_blank');
  };

  return (
    <div className="page">

    <Carousel autoplay={true} loop={true} autoplayDelay={20000} transition={transition}>
    <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="/media/img/img-3.jpg"
        alt="Image 1"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-green bg-white/50 py-4 px-6 shadow-lg ">
        <div>
          <Typography variant="h5" color="blue-gray">
          Community-Based Approach
          </Typography>
          <Typography style={{color:'#007500',fontWeight:'bold'}} color="gray" className="mt-2 font-normal">
           <i>
           FHE operates as a community-based organization led by youth refugees, emphasizing the importance of engaging the community in addressing the unique challenges faced by children, families, and residents in Kakuma Refugee Camp.
           </i>
          </Typography>
        </div>
      </figcaption>
    </figure>

    <figure className="relative h-96 w-full">
    <img
      className="h-full w-full rounded-xl object-cover object-center"
      src="/media/img/home/slider-2.png"
      alt="Image 2"
    />
    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-green bg-white/50 py-4 px-6 shadow-lg ">
      <div>
        <Typography variant="h5" color="blue-gray">
        Permaculture and Agroforestry
        </Typography>
        <Typography style={{color:'#007500',fontWeight:'bold'}} color="gray" className="mt-2 font-normal">
         <i>
         FHE implements permaculture and agroforestry projects, promoting sustainable and regenerative agricultural practices. This approach not only addresses food security but also contributes to environmental sustainability.
         </i>
        </Typography>
      </div>
    </figcaption>
  </figure>

  <figure className="relative h-96 w-full">
  <img
    className="h-full w-full rounded-xl object-cover object-center"
    src="/media/img/home/slider-3.png"
    alt="Image 3"
  />
  <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-green bg-white/50 py-4 px-6 shadow-lg ">
    <div>
      <Typography variant="h5" color="blue-gray">
      Community Currency (Sarafu)
      </Typography>
      <Typography style={{color:'#007500',fontWeight:'bold'}} color="gray" className="mt-2 font-normal">
       <i>
       The utilization of community currency (Sarafu) is an innovative strategy to support the local economy within the camp. This approach can help improve access to essential goods and services, including healthcare and education, for the refugees.       </i>
      </Typography>
    </div>
  </figcaption>
</figure>

<figure className="relative h-96 w-full">
<img
  className="h-full w-full rounded-xl object-cover object-center"
  src="/media/img/home/slider-4.png"
  alt="Image 4"
/>
<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-green bg-white/50 py-4 px-6 shadow-lg ">
  <div>
    <Typography variant="h5" color="blue-gray">
    Hunger Eradication
    </Typography>
    <Typography style={{color:'#007500',fontWeight:'bold'}} color="gray" className="mt-2 font-normal">
     <i>
     FHE's primary goal is to eradicate hunger within the Kakuma Refugee Camp. By teaching residents how to grow their own fresh food, the organization empowers the community to take charge of their nutritional needs, reducing reliance on external food aid.
     </i>
    </Typography>
  </div>
</figcaption>
</figure>

<figure className="relative h-96 w-full">
<img
  className="h-full w-full rounded-xl object-cover object-center"
  src="/media/img/home/slider-5.png"
  alt="Image 5"
/>
<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-green bg-white/50 py-4 px-6 shadow-lg ">
  <div>
    <Typography variant="h5" color="blue-gray">
    Collaboration with Larger Organizations
    </Typography>
    <Typography style={{color:'#007500',fontWeight:'bold'}} color="gray" className="mt-2 font-normal">
     <i>
     While organizations like LWF and WORLD VISION provide critical support, FHE acknowledges the persistent issue of malnutrition among children and pregnant mothers. FHE complements their efforts by focusing on long-term food security and self-sufficiency.
     </i>
    </Typography>
  </div>
</figcaption>
</figure>

<figure className="relative h-96 w-full">
<img
  className="h-full w-full rounded-xl object-cover object-center"
  src="/media/img/home/slider-6.png"
  alt="Image 6"
/>
<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-green bg-white/50 py-4 px-6 shadow-lg ">
  <div>
    <Typography variant="h5" color="blue-gray">
    Holistic Approach
    </Typography>
    <Typography style={{color:'#007500',fontWeight:'bold'}} color="gray" className="mt-2 font-normal">
     <i>
     FHE recognizes that addressing the physical health, protection, and psychological well-being of individuals within the camp requires a comprehensive, community-based strategy. This holistic approach ensures that the needs of children, families, and the community are met on multiple fronts.
     </i>
    </Typography>
  </div>
</figcaption>
</figure>
    </Carousel>
    {/*site-main start*/}
    <div className="site-main">
      {/* services-section */}
      <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
        <div className="container">
          <div className="row no-gutters top-icon-row ttm-bgcolor-white mt_60 res-991-mt-0">{/* row */}
            <div className="col-lg col-sm-6 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style1 text-center ttm-bgcolor-white">
                <div className="featured-icon">{/*  featured-icon */} 
                  <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                    <i className="flaticon flaticon-gmo-1" />{/*  ttm-icon */} 
                  </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>Community-Based Approach</h5>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg col-sm-6 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style1 text-center ttm-bgcolor-white">
                <div className="featured-icon">{/*  featured-icon */} 
                  <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                    <i className="flaticon flaticon-farm" />{/*  ttm-icon */} 
                  </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>Permaculture and Agroforestry</h5>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg col-sm-6 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style1 text-center ttm-bgcolor-white">
                <div className="featured-icon">{/*  featured-icon */} 
                  <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                    <i className="flaticon flaticon-farmer-1" />{/*  ttm-icon */} 
                  </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>Community Currency (Sarafu)</h5>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg col-sm-6 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style1 text-center ttm-bgcolor-white">
                <div className="featured-icon">{/*  featured-icon */} 
                  <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                    <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                  </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>Hunger Eradication</h5>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg col-sm-12 col-md-12">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style1 text-center ttm-bgcolor-white">
                <div className="featured-icon">{/*  featured-icon */} 
                  <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                    <i className="flaticon flaticon-shovel" />{/*  ttm-icon */} 
                  </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>Collaboration with Larger Organizations</h5>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
          </div>
          {/* row end */}
        </div>
      </section>
      {/* services-section end */}
      {/* aboutus-section */}
      <section className="ttm-row third-about-section position-relative clearfix">
        <div className="container">
          <div className="row">{/* row */}
            <div className="col-lg-6">
              {/* ttm_single_image-wrapper */}
              <div className="ttm_single_image-wrapper">
                <img className="img-fluid ml-25 res-1199-ml-0" src="/media/img/img-1.png" title="single-img-two" alt="single-img-two" />
              </div>{/* ttm_single_image-wrapper end */}
              <div className="about-overlay-01">
                <img src="images/pattern.png" alt="pattern" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="res-991-mt-50">
                {/* section title */}
                <div className="section-title clearfix">
                  <div className="title-header">
                    <h5>About Farming and Health Education (FHE)</h5>
                    <h2 className="title">FHE (Farming and Health Education) is a community bassed Organisation that works in Kakuma Refugee Camp</h2>
                  </div>
                  <div className="heading-seperator">
                    <span />
                  </div>
                </div>{/* section title end */}
                <p>Addresses the desire of Health, Protection and Psychological needs of children, their families and the communities, with one of the strategy being to strengthen the community based protection mechanism. Enabling the community to active in protecton and food security. </p>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="row">
            <div className="col-xl-9 offset-xl-3">
              <div className="col-lg-12">
                <div className="row pt-15 pb-15 ttm-bgcolor-white box-shadow mt_160 res-991-mt-30">
                  <div className="col-lg-4 col-md-4">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box left-icon icon-align-top">
                      <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          <i className="flaticon flaticon-speech-bubble" />{/*  ttm-icon */} 
                        </div>
                      </div>
                      <div onClick={handleWhatsAppClick} style={{cursor:'pointer'}} className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                          <h5 className="fs-22">+254 742 161 921</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                          <p>Get A Free Estimate</p>
                        </div>
                      </div>
                    </div>{/*  featured-icon-box END */}
                  </div>
                  <div className="col-md-4 col-lg-4">
                    {/*ttm-fid*/}
                    <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                      <div className="ttm-fid-left">{/*ttm-fid-left*/}
                        <div className="ttm-fid-icon-wrapper">
                          <i className="flaticon flaticon-farmer-3" />
                        </div>
                      </div>
                      <div className="ttm-fid-contents text-left">{/*ttm-fid-contents*/}
                        <h4 className="ttm-fid-inner">
                          <span data-appear-animation="animateDigits" data-from={0} data-to={210} data-interval={5} data-before data-before-style="sup" data-after data-after-style="sub">210</span>
                        </h4>
                        <h3 className="ttm-fid-title">Happy Clients</h3>{/*ttm-fid-title*/}
                      </div>
                    </div>{/* ttm-fid end*/}
                  </div>
                  <div className="col-md-4 col-lg-4">
                    {/*ttm-fid*/}
                    <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                      <div className="ttm-fid-left">{/*ttm-fid-left*/}
                        <div className="ttm-fid-icon-wrapper">
                          <i className="flaticon flaticon-plant" />
                        </div>
                      </div>
                      <div className="ttm-fid-contents text-left">{/*ttm-fid-contents*/}
                        <h4 className="ttm-fid-inner">
                          <span data-appear-animation="animateDigits" data-from={0} data-to={12} data-interval={5} data-before data-before-style="sup" data-after data-after-style="sub">12</span>
                        </h4>
                        <h3 className="ttm-fid-title">Awards &amp; Features</h3>{/*ttm-fid-title*/}
                      </div>
                    </div>{/* ttm-fid end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* aboutus-section end */}
      {/* Experience-section */}
      <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
        <div className="container">
          <div className="row no-gutters">{/* row */}
            <div className="col-lg-7">
              {/* col-img-img-four */}
              <div className="col-bg-img-four ttm-col-bgimage-yes ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-skincolor ttm-left-span mr_80 res-991-mr-0">
                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                  <div className="ttm-bg-layer-inner" />
                </div>
                <div className="layer-content">
                  <div className="spacing-5">
                    {/* section title */}
                    <div className="section-title clearfix">
                      <div className="title-header">
                        <h5>Why Choose Us?</h5>
                        <h2 className="title">Our Vegan 7+ years experience in Agriculture & Health Education</h2>
                      </div>
                      <div className="heading-seperator">
                        <span />
                      </div>
                    </div>{/* section title end */}
                    <p>We provide marketing services to startups and small businesses to looking for a experience of their development, project and infrastructure</p>
                    <div className="row mt-30 no-gutters">
                      <div className="col-md-6">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon icon-align-top style5 border-right">
                          <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-border ttm-icon_element-style-rounded">
                              <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                            </div>
                          </div>
                          <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                              <h5 className="mb-5">Qualified Staff</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                              <p>Great explorer of truth</p>
                            </div>
                          </div>
                        </div>{/*  featured-icon-box END */}
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon icon-align-top style5 border-right">
                          <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-border ttm-icon_element-style-rounded">
                              <i className="flaticon flaticon-agronomy-1" />{/*  ttm-icon */} 
                            </div>
                          </div>
                          <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                              <h5 className="mb-5">Best Technology</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                              <p>Work with great products</p>
                            </div>
                          </div>
                        </div>{/*  featured-icon-box END */}
                      </div>
                      <div className="col-md-6">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon icon-align-top style5 pl-40 res-767-pl-0">
                          <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-border ttm-icon_element-style-rounded">
                              <i className="flaticon flaticon-tractor-1" />{/*  ttm-icon */} 
                            </div>
                          </div>
                          <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                              <h5 className="mb-5">Peak Shaving</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                              <p>Best shaving Equipment</p>
                            </div>
                          </div>
                        </div>{/*  featured-icon-box END */}
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon icon-align-top style5 pl-40 res-767-pl-0">
                          <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-border ttm-icon_element-style-rounded">
                              <i className="flaticon flaticon-sprout" />{/*  ttm-icon */} 
                            </div>
                          </div>
                          <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                              <h5 className="mb-5">Backup Source</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                              <p>Store your season crop</p>
                            </div>
                          </div>
                        </div>{/*  featured-icon-box END */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-img-img-one */}
            </div>
            <div className="col-lg-5">
              {/* col-img-img-two */}
              <div className="col-bg-img-five ttm-col-bgimage-yes ttm-bg ttm-right-span mt_60 res-991-mt-0 ptb-200">
                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                </div>
                <div className="layer-content">
                  <div className="ttm-play-icon-btn ttm-play-icon-btn-center center-right">
                    <div className="ttm-play-icon-animation">
                      <a href="https://www.youtube.com/watch?v=OZnoEpdINA0" target="_self" className="ttm_prettyphoto">
                        <div className="ttm-icon ttm-icon_element-bgcolor-white ttm-icon_element-size-md ttm-icon_element-style-round">
                          <i className="fa fa-play" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-img-img-two responsive-img*/}
            </div>
          </div>{/* row */}
        </div>
        {/*ttm-fid*/}
        <div className="ttm-fid inside without-icon ttm-highlight-fid-style-1">
          <div className="ttm-fid-contents text-left">
            <h4 className="ttm-fid-inner">
              <span data-appear-animation="animateDigits" data-from={0} data-to={5} data-interval={2} data-before data-before-style="sup" data-after data-after-style="sub">5+</span>
            </h4>
            <h3 className="ttm-fid-title">Years of Experience</h3>
          </div>
        </div>{/* ttm-fid end*/}
      </section>
      {/* Experience-section */}
      {/* services-section */}
      <section className="ttm-row second-services-section mt_60 ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img4 clearfix">
        <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
        <div className="container">
          <div className="row">{/* row */}
            <div className="col-lg-12">
              {/* section title */}
              <div className="section-title text-center clearfix">
                <div className="title-header">
                  <h5>WORKING WITH EXCELLENT</h5>
                  <h2 className="title">Our Special Services</h2>
                </div>
                <div className="heading-seperator">
                  <span />
                </div>
              </div>{/* section title end */}
            </div>
          </div>{/* row */}
          <div style={{justifyContent:'center'}} className="row">
            <div className="col-lg-3 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
                <div className="featured-icon">{/*  featured-icon */} 
                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>AGRICOLOGY</h5>
                  </div>
                  <div className="featured-desc">{/*  featured-desc */}
                    <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
                <div className="featured-icon">{/*  featured-icon */} 
                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>REFUGEE LANGUAGE ONGOING</h5>
                  </div>
                  <div className="featured-desc">{/*  featured-desc */}
                    <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
                <div className="featured-icon">{/*  featured-icon */} 
                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>COUNSELLING LEVEL i, ii and iii</h5>
                  </div>
                  <div className="featured-desc">{/*  featured-desc */}
                    <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/*  featured-icon-box */} 
              <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
                <div className="featured-icon">{/*  featured-icon */} 
                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                </div>
                </div>
                <div className="featured-content">{/*  featured-content */}
                  <div className="featured-title">{/*  featured-title */}
                    <h5>WASH or HYGIENE and SANITATION </h5>
                  </div>
                  <div className="featured-desc">{/*  featured-desc */}
                    <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
                  </div>
                </div>
              </div>{/*  featured-icon-box END */}
            </div>

            <div className="col-lg-3 col-md-6">
            {/*  featured-icon-box */} 
            <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
              <div className="featured-icon">{/*  featured-icon */} 
                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                </div>
              </div>
              <div className="featured-content">{/*  featured-content */}
                <div className="featured-title">{/*  featured-title */}
                  <h5>HIV TESTING and COUNSELLING</h5>
                </div>
                <div className="featured-desc">{/*  featured-desc */}
                  <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
                </div>
              </div>
            </div>{/*  featured-icon-box END */}
          </div>

          <div className="col-lg-3 col-md-6">
          {/*  featured-icon-box */} 
          <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
            <div className="featured-icon">{/*  featured-icon */} 
              <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
              </div>
            </div>
            <div className="featured-content">{/*  featured-content */}
              <div className="featured-title">{/*  featured-title */}
                <h5>YOGA TRAINING AND LOGISTIC MANEGEMENT</h5>
              </div>
              <div className="featured-desc">{/*  featured-desc */}
                <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
              </div>
            </div>
          </div>{/*  featured-icon-box END */}
        </div>

        <div className="col-lg-3 col-md-6">
        {/*  featured-icon-box */} 
        <div className="featured-icon-box top-icon style2 text-center ttm-bgcolor-darkgrey">
          <div className="featured-icon">{/*  featured-icon */} 
            <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
              <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
            </div>
          </div>
          <div className="featured-content">{/*  featured-content */}
            <div className="featured-title">{/*  featured-title */}
              <h5>NUTRITION AND FOOD PROCESSESING</h5>
            </div>
            <div className="featured-desc">{/*  featured-desc */}
              <p>We are exclusively reputed for our maintenance of everything specifically Schedule.</p>
            </div>
          </div>
        </div>{/*  featured-icon-box END */}
      </div>
          </div>
        </div>
      </section>

      {/* processbar-section */}
      <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
        <div className="container">
          <div className="row no-gutters">{/* row */}
            <div className="col-lg-5">
              {/* col-img-img-two */}
              <div className="col-bg-img-six ttm-col-bgimage-yes ttm-bg ttm-left-span">
                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                </div>
                <div className="layer-content">
                  <div className="align-items-center d-flex justify-content-between h-100">
                    <div className="about-overlay-02">
                      <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                        <i className="flaticon flaticon-agronomy" />{/*  ttm-icon */} 
                      </div>
                      <h6>Founded in <br /> 2018</h6>
                    </div>
                    <div className="about-overlay-03">
                      <h6>7+ Years Of Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-img-img-two responsive-img*/}
            </div>
            <div className="col-lg-7">
              <div className="spacing-6 ttm-bgcolor-grey">
                {/* section title */}
                <div className="section-title clearfix">
                  <div className="title-header">
                    <h5>Send Message</h5>
                    <h2 className="title">Get a Free Quote</h2>
                  </div>
                  <div className="heading-seperator">
                    <span />
                  </div>
                </div>{/* section title end */}
                <div id="ttm-quote-form" className="row ttm-quote-form clearfix">
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      name="name" type="text" className="form-control with-border bg-white" placeholder="Full Name*" required="required" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control with-border bg-white" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="address" type="text" placeholder="Email Address*" required="required" className="form-control with-border bg-white" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject" type="text" placeholder="Subject" required="required" className="form-control with-border bg-white" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="Massage" rows={4} placeholder="Write A Massage..." required="required" className="form-control with-border bg-white" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-left">
                      <button onClick={submitQuote} className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey w-100" >
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* row */}
        </div>
      </section>
      {/* processbar-section */}



      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Client is our priority</p>
          </div> 
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              alt="Jessy Bandya"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jessy Bandya</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Jnr. Fullstack Developer</div>
              </div>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
            "FHE's work opened my eyes to the pressing needs of children and families. Through FHE, I've contributed software solutions to track child health and nutrition, supporting their holistic approach to community well-being. FHE actively engages the community in protection and food security efforts, and it's an honor to be part of this organization."
            </Typography>
          </CardBody>
        </Card> 
        <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="Ann Diana"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Ann Diana</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">Kakuma Refugee resident</div>
            </div>
              <div className="5 flex items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
          "I'm Ann, a refugee in Kakuma. FHE has been a beacon of hope for my family. They've empowered us to take charge of our protection and food security. Through FHE, we've learned our rights, responsibilities, and received essential support. FHE is more than an organization; it's a lifeline in our challenging circumstances."
          </Typography>
        </CardBody>
      </Card> 
          </div>
        </div>
        </section>


        <section style={{marginTop:-80}} className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Our able Partners</h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
             <img src="/media/img/partners/kisumu.jpeg" style={{height:80}} alt="" />       
            </a>
            <a href="#" className="flex justify-center items-center">
            <img src="/media/img/partners/alliance.jpg" style={{height:100}} alt="" />         
            </a>
            <a href="#" className="flex justify-center items-center">
            <img src="/media/img/partners/australia.jpg" style={{height:100}} alt="" />                                                                
            </a>
            <a href="#" className="flex justify-center items-center">
            <img src="/media/img/partners/grass.jpeg" style={{height:100}} alt="" />                                                                               
            </a>
            <a href="#" className="flex justify-center items-center">
            <img src="/media/img/partners/rlo.jpeg" style={{height:100}} alt="" />                                                                               
            </a>
            <a href="#" className="flex justify-center items-center">
            <img src="/media/img/partners/rod.png" style={{height:100}} alt="" />                                                                              
            </a>
            <a href="#" className="flex justify-center items-center">
            <img src="/media/img/partners/vtc.jpeg" style={{height:100}} alt="" />                                                                         
          </a>
          <a href="#" className="flex justify-center items-center">
          <img src="/media/img/partners/ysp.jpeg" style={{height:100}} alt="" />                                                                         
          </a>
          </div>
        </div>
      </section>

    </div>{/*site-main end*/}
  </div>
  )
}

export default Home