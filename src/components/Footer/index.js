import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <div>
        {/*footer start*/}
        <footer className="footer widget-footer clearfix">
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
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/our-programs">Programs</a></li>
                    <li><a href="/shopping">F.H.E Shop</a></li>
                    <li><a href="/our-blogs">Our Blogs</a></li>
                    <li><a href="/our-team">Our Team</a></li>
                    <li><a href="/our-gallery">Gallery</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_text clearfix">
                  <h3 className="widget-title">Recent News</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <a href="#"><img src="/media/img/home/slider-4.png" style={{objectFit:'cover'}} alt="post-img" /></a>
                      <span className="post-date"><i className="fa fa-calendar" />May 01, 2019</span>
                      <a href="#">Transforming the Desert into a Food Forest With Treebog</a>
                    </li>
                    <li>
                      <a href="#"><img src="/media/img/home/slider-4.png" style={{objectFit:'cover'}} alt="post-img" /></a>
                      <span className="post-date"><i className="fa fa-calendar" />May 01, 2019</span>
                      <a href="#">Transforming the Desert into a Food Forest With Treebog</a>
                    </li>
                    <li>
                      <a href="#"><img src="/media/img/home/slider-4.png" style={{objectFit:'cover'}} alt="post-img" /></a>
                      <span className="post-date"><i className="fa fa-calendar" />May 01, 2019</span>
                      <a href="#">Transforming the Desert into a Food Forest With Treebog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget contact-widget">
                  <h3 className="widget-title">Get in touch</h3>      
                  <ul className="contact-widget-wrapper">
                    <li><i className="fa fa-map-marker" />Kakuma Refugee Camp K2, Z1, B9 Behind IOM Office<br /> Turkana Kenya</li>
                    <li><i className="fa fa-phone" /><a href='tel:+254700139636'>+254 700 139636</a> </li>
                    <li><i className="fa fa-envelope-o" /><a href="mailto:marcelinmunga19@gmail.com" target="_blank">marcelinmunga19@gmail.com</a></li>
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
                  <span>Copyright &copy; {new Date().getFullYear()}&nbsp; Made With <FavoriteIcon style={{color:'green'}}/> by <a style={{fontWeight:'bold'}} href="https://jessy-bandya.web.app/" target="_blank">Jessy Bandya</a></span>
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