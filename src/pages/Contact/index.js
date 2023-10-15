import React from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function Contact() {
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
  return (
    <div className="page">
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12"> 
                <div className="title-box text-left">
                  <div className="page-title-heading">
                    <h1 className="title">Contact Us</h1>
                  </div>{/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <span>
                      <a title="Homepage" href="/"><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                    </span>
                    <span className="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span className="ttm-textcolor-skincolor">Contact</span>
                  </div>  
                </div>
              </div>{/* /.col-md-12 */}  
            </div>{/* /.row */}  
          </div>{/* /.container */}                      
        </div>{/* page-title end*/}
        {/*site-main start*/}
        <div className="site-main">
          {/* contactbox-section */}
          <section className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
            <div className="container">
              <div className="row">{/* row */}
                <div className="col-lg-4">
                  {/*  featured-icon-box */} 
                  <div className="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                    <div className="featured-icon">{/*  featured-icon */} 
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                        <i className="flaticon flaticon-phone-call" />{/*  ttm-icon */} 
                      </div>
                    </div>
                    <div className="featured-content">{/*  featured-content */}
                      <div className="featured-title">{/*  featured-title */}
                        <h5>Phone</h5>
                      </div>
                      <div className="featured-desc">{/*  featured-desc */}
                        <p><a href='tel:+254700139636'>+254 700 139636</a></p>
                      </div>
                    </div>
                  </div>{/*  featured-icon-box END */}
                </div>
                <div className="col-lg-4">
                  {/*  featured-icon-box */} 
                  <div className="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                    <div className="featured-icon">{/*  featured-icon */} 
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                        <i className="flaticon flaticon-envelope" />{/*  ttm-icon */} 
                      </div>
                    </div>
                    <div className="featured-content">{/*  featured-content */}
                      <div className="featured-title">{/*  featured-title */}
                        <h5>Email Us</h5>
                      </div>
                      <div className="featured-desc">{/*  featured-desc */}
                        <p><a href='mailto:marcelinmunga19@gmail.com'>marcelinmunga19@gmail.com</a></p>
                      </div>
                    </div>
                  </div>{/*  featured-icon-box END */}
                </div>
                <div className="col-lg-4">
                  {/*  featured-icon-box */} 
                  <div className="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                    <div className="featured-icon">{/*  featured-icon */} 
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                        <i className="flaticon flaticon-placeholder" />{/*  ttm-icon */} 
                      </div>
                    </div>
                    <div className="featured-content">{/*  featured-content */}
                      <div className="featured-title">{/*  featured-title */}
                        <h5>Address</h5>
                      </div>
                      <div className="featured-desc">{/*  featured-desc */}
                        <p>Kakuma Refugee Camp K2, Z1, B9 Behind IOM Office, Turkana Kenya</p>
                      </div>
                    </div>
                  </div>{/*  featured-icon-box END */}
                </div>
              </div>{/* row end */}
            </div>
          </section>
          {/* contactbox-section end */}
          {/* contactbox-section */}
          <section className="ttm-row contact-form-section clearfix">
            <div className="container">
              <div className="row">{/* row */}
                <div className="col-lg-6">
                  {/* section title */}
                  <div className="section-title clearfix">
                    <div className="title-header">
                      <h2 className="title">Contact Us</h2>
                    </div>
                    <div className="heading-seperator">
                      <span />
                    </div>
                  </div>{/* section title end */}
                  <p>Our Team is happy to answer your Questions. Fill out the form, and we’ll be in touch as soon as Possible.</p>
                  <div className="row">
                    <div className="col-md-12">
                      {/*  featured-icon-box */} 
                      <div className="featured-icon-box left-icon style9 ttm-bgcolor-white mb-30">
                        <div className="featured-icon">{/*  featured-icon */} 
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-agriculture" />{/*  ttm-icon */} 
                          </div>
                        </div>
                        <div className="featured-content">{/*  featured-content */}
                          <div className="featured-title">{/*  featured-title */}
                            <h5 className="mb-5">Farming Services</h5>
                          </div>
                          <div className="featured-desc">{/*  featured-desc */}
                            <p>Farming services encompass irrigation, soil testing, pest control, equipment rental, consulting, livestock care, marketing support, crop protection, software, fertilization, fence installation, agri-tourism, equipment repair, organic certification, and harvesting assistance, all aimed at optimizing agricultural practices and farm productivity.</p>
                          </div>
                        </div>
                      </div>{/*  featured-icon-box END */}
                    </div>
                    <div className="col-md-12">
                      {/*  featured-icon-box */} 
                      <div className="featured-icon-box left-icon style9 ttm-bgcolor-white">
                        <div className="featured-icon">{/*  featured-icon */} 
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-farmer" />{/*  ttm-icon */} 
                          </div>
                        </div>
                        <div className="featured-content">{/*  featured-content */}
                          <div className="featured-title">{/*  featured-title */}
                            <h5 className="mb-5">Health Education</h5>
                          </div>
                          <div className="featured-desc">{/*  featured-desc */}
                            <p>Health education involves the dissemination of information and knowledge about physical and mental well-being to promote better health and prevent diseases.
                            </p>
                          </div>
                        </div>
                      </div>{/*  featured-icon-box END */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spacing-6 ttm-bgcolor-grey mt-0 mb-0">
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
              </div>{/* row end */}
            </div>
          </section>
          {/* contactbox-section end */}
        </div>{/*site-main end*/}
      </div>
  )
}

export default Contact