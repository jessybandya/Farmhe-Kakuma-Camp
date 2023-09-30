import React from 'react'

function Footer() {
  return (
    <div>
        {/*footer start*/}
        <footer className="footer widget-footer clearfix">
        <div className="first-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="cta_wrapper">
                  <div className="ttm-quicklink-box">
                    <div className="ttm-leftlink-box">
                      <h5 className="custom-heading"><a href="#"> <span className="ti ti-arrow-circle-left ttm-arrow-box" /> Find Our Nearest Office</a></h5>
                      <i className="flaticon flaticon-house ttm-textcolor-skincolor" />
                    </div>    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ttm-custom-ctabox">
                  <div className="cta-bg-icon"><span className="flaticon-support" /></div>
                  <h3 className="ttm-cta-heading ttm-textcolor-skincolor">Call Us On</h3>
                  <h5 className="ttm-cta-content">+254 746 7493 07</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cta_wrapper">
                  <div className="ttm-quicklink-box">
                    <div className="ttm-rightlink-box">
                      <i className="flaticon flaticon-clock ttm-textcolor-skincolor" />
                      <h5 className="custom-heading"><a href="#"> Emergency Restorations <span className="ti ti-arrow-circle-right ttm-arrow-box" /></a></h5>
                    </div>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-footer ttm-textcolor-white">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_text  clearfix">
                  <h3 className="widget-title"> About F.H.E</h3>
                  <div className>
                    <p>Addresses the desire of Health, Protection and Psychological needs of children, their families and the communities, with one of the strategy being to strengthen the community based protection mechanism. Enabling the community to active in protecton and food security.</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget link-widget clearfix">
                  <h3 className="widget-title">Useful Links</h3>
                  <ul id="menu-footer-services">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Nomadic Herding</a></li>
                    <li><a href="#">Veterinary Services</a></li>
                    <li><a href="#">Commercial Plant</a></li>
                    <li><a href="#">Farm Labor Management</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_text clearfix">
                  <h3 className="widget-title">Recent News</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <a href="single-blog.html"><img src="images/blog/01.jpg" alt="post-img" /></a>
                      <span className="post-date"><i className="fa fa-calendar" />May 01, 2019</span>
                      <a href="single-blog.html">Outdoor Vintage Flower Garden Decor</a>
                    </li>
                    <li>
                      <a href="single-blog.html"><img src="images/blog/02.jpg" alt="post-img" /></a>
                      <span className="post-date"><i className="fa fa-calendar" />May 03, 2019</span>
                      <a href="single-blog.html">Grow Your Own Yard Garden For Better Life</a>
                    </li>
                    <li>
                      <a href="single-blog.html"><img src="images/blog/03.jpg" alt="post-img" /></a>
                      <span className="post-date"><i className="fa fa-calendar" />May 05, 2019</span>
                      <a href="single-blog.html">Rural Infrastructure for Great Agriculture</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget contact-widget">
                  <h3 className="widget-title">Get in touch</h3>      
                  <ul className="contact-widget-wrapper">
                    <li><i className="fa fa-map-marker" />University Way <br /> Nairobi Kenya</li>
                    <li><i className="fa fa-phone" />(+254) 746 749 307 </li>
                    <li><i className="fa fa-envelope-o" /><a href="mailto:jessy.bandya5@gmail.com" target="_blank">jessy.bandya5@gmail.com</a></li>
                  </ul>
                  <div className="social-icons circle social-hover">
                    <ul className="list-inline">
                      <li className="social-facebook"><a className="tooltip-top" target="_blank" href="https://web.facebook.com/profile.php?id=100010990051978" data-tooltip="Facebook"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li className="social-twitter"><a className="tooltip-top" target="_blank" href="https://twitter.com/jessybandya" data-tooltip="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li className="social-linkedin"><a className=" tooltip-top" target="_blank" href="https://www.linkedin.com/in/jessybandya/" data-tooltip="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text ttm-textcolor-white">
          <div className="container">
            <div className="row copyright">
              <div className="col-md-12">
                <div className="text-center">
                  <span>Copyright &copy; {new Date().getFullYear()}&nbsp; Made With Love by <a style={{fontWeight:'bold'}} href="https://jessy-bandya.web.app/" target="_blank">Jessy Bandya</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer