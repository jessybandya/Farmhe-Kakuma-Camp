import React from 'react'

function Team() {
  return (
    <div>
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12"> 
                <div className="title-box text-left">
                  <div className="page-title-heading">
                    <h1 className="title">Our Team</h1>
                  </div>{/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <span>
                      <a title="Homepage" href="/"><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                    </span>
                    <span className="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span className="ttm-textcolor-skincolor">Our Expert</span>
                  </div>  
                </div>
              </div>{/* /.col-md-12 */}  
            </div>{/* /.row */}  
          </div>{/* /.container */}                      
        </div>{/* page-title end*/}
        {/*site-main start*/}
        <div style={{marginTop:-30}} className="site-main">
          {/* services-section */}
          <section className="ttm-row grid-section clearfix">
            <div className="container">
              <div className="row">{/* row */}
                <div className="col-md-6 col-lg-4">
                  {/* featured-imagebox-team */}
                  <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                      <img style={{width:'100%',height:350,objectFit:'cover'}} className="img-fluid" src="/media/img/marcelle.jpg" alt="image" />
                    </div> 
                    <div className="featured-content box-shadow">
                      <div className="ttm-social-links-wrapper">
                        <ul className="social-icons list-inline">{/* social-icons */}
                          <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                          <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                          <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                      <div className="featured-title">{/* featured-title */}
                        <h5><a href="team-details.html"> Marcelin munga petro marcello</a></h5>
                      </div>
                      <p className="category">Founder & C.E.O</p>{/* category */}
                    </div>
                  </div>{/* featured-imagebox-team end*/}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* featured-imagebox-team */}
                  <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                      <img style={{width:'100%',height:350,objectFit:'cover'}} className="img-fluid" src="/media/img/titus.jpg" alt="image" />
                    </div> 
                    <div className="featured-content box-shadow">
                      <div className="ttm-social-links-wrapper">
                        <ul className="social-icons list-inline">{/* social-icons */}
                          <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                          <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                          <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                      <div className="featured-title">{/* featured-title */}
                        <h5><a href="team-details.html"> Titus Gabriel Tutu</a></h5>
                      </div>
                      <p className="category">Centre Admin</p>{/* category */}
                    </div>
                  </div>{/* featured-imagebox-team end*/}
                </div>
                <div className="col-md-6 col-lg-4">
                  {/* featured-imagebox-team */}
                  <div className="featured-imagebox featured-imagebox-team style2 mb-30">
                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                      <img style={{width:'100%',height:350,objectFit:'cover'}} className="img-fluid" src="/media/img/ashura.jpg" alt="image" />
                    </div> 
                    <div className="featured-content box-shadow">
                      <div className="ttm-social-links-wrapper">
                        <ul className="social-icons list-inline">{/* social-icons */}
                          <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                          <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                          <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                      <div className="featured-title">{/* featured-title */}
                        <h5><a href="team-details.html"> Ashura kashinde </a></h5>
                      </div>
                      <p className="category">Educational officer</p>{/* category */}
                    </div>
                  </div>{/* featured-imagebox-team end*/}
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/* services-section end */}
        </div>{/*site-main end*/}
      </div>
  )
}

export default Team