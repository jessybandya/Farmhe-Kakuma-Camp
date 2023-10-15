import React from 'react'

function Shop() {
  return (
    <div>
    {/* page-title */}
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12"> 
            <div className="title-box text-left">
              <div className="page-title-heading">
                <h1 className="title">Product</h1>
              </div>{/* /.page-title-captions */}
              <div className="breadcrumb-wrapper">
                <span>
                  <a title="Homepage" href="/"><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                </span>
                <span className="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                <span className="ttm-textcolor-skincolor">Shop</span>
              </div>  
            </div>
          </div>{/* /.col-md-12 */}  
        </div>{/* /.row */}  
      </div>{/* /.container */}                      
    </div>{/* page-title end*/}
    {/*site-main start*/}
    <div style={{marginTop:-30}} className="site-main">
      {/* sidebar */}
      <div className="sidebar ttm-bgcolor-white clearfix">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-9 content-area">
              <div className="row">
                <div className="col-md-12">
                  <p className="products-result-count">Showing 1–9 of 14 results</p>
                  <form className="products-ordering float-sm-right" method="get">
                    <div className="form-group mb-30">
                      <select name="orderby" className="form-control border">
                        <option value="menu_order" selected="selected">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <img className="img-fluid w-100" src="images/product/product-one.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Corn Tree</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">$</span>16.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <span className="onsale">Sale!</span>
                      <img className="img-fluid w-100" src="images/product/product-two.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Beardrock Root</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">
                          <del><span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>20.00
                            </span>
                          </del>
                          <ins><span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>18.00
                            </span>
                          </ins>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <img className="img-fluid w-100" src="images/product/product-three.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Fresh Okra</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">$</span>16.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <img className="img-fluid w-100" src="images/product/product-four.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Green Broccoli</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">$</span>16.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <span className="onsale">Sale!</span>
                      <img className="img-fluid w-100" src="images/product/product-five.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Long Sleeve Tee</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">
                          <del><span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>40.00
                            </span>
                          </del>
                          <ins><span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>35.00
                            </span>
                          </ins>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <img className="img-fluid w-100" src="images/product/product-six.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Red Beet</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">$</span>16.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <img className="img-fluid w-100" src="images/product/product-seven.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Long Sleeve Tee</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">$</span>32.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <img className="img-fluid w-100" src="images/product/product-eight.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Red Beet</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">$</span>40.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product">{/* product */}
                    <div className="product-thumbnail">{/* product-thumbnail */}
                      <span className="onsale">Sale!</span>
                      <img className="img-fluid w-100" src="images/product/product-nine.jpg" alt="" />
                      <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                        <div className="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                      </div>
                    </div>{/* product-thumbnail end */}
                    <div className="product-content text-left">{/* product-content */}
                      <div className="product-title">{/* product-title */}
                        <h2><a href="product-details.html">Fresh Okra</a></h2>
                      </div>
                      <div className="ttm-ratting-star">{/* ratting-star */}
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span className="product-price">{/* product-Price */}
                        <span className="product-Price-currencySymbol">
                          <del><span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>50.00
                            </span>
                          </del>
                          <ins><span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>40.00
                            </span>
                          </ins>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="ttm-pagination">
                    <span className="page-numbers current">1</span>
                    <a className="page-numbers" href="#">2</a>
                    <a className="next page-numbers" href="#"><i className="ti ti-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 widget-area">
              <aside className="widget widget-search">
                <form role="search" method="get" className="search-form" action="#">
                  <div className="form-group">
                    <input name="search" type="text" className="form-control with-border" placeholder="Search...." />
                    <i className="fa fa-search" />
                  </div>
                </form>
              </aside>
              <aside className="widget widget-categories">
                <h3 className="widget-title">Product Categories</h3>
                <ul>
                  <li><a href="#">Dairy Farm</a><span>4</span></li>
                  <li><a href="#">Flower</a><span>2</span></li>
                  <li><a href="#">Gardening</a><span>1</span></li>
                  <li><a href="#">Tips &amp; Tricks</a><span>4</span></li>
                  <li><a href="#">Watering Plants</a><span>2</span></li>
                </ul>
              </aside>
              <aside className="widget widget-top-rated-products">
                <h3 className="widget-title">Popular Product</h3>
                <ul className>
                  <li className="clearfix">
                    <a href="#"><img src="images/product/product-one.jpg" alt="" />
                      <span className="product-title">Corn Tree</span>
                    </a>
                    <div className="ttm-ratting-star">{/* ratting-star */}
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <span className="product-Price-amount amount"><span className="product-Price-currencySymbol">$</span>33.00</span>
                  </li>
                  <li className="clearfix">
                    <a href="#"><img src="images/product/product-two.jpg" alt="" />
                      <span className="product-title">Fresh Okra</span>
                    </a>
                    <div className="ttm-ratting-star">{/* ratting-star */}
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <span className="product-Price-amount amount">
                      <span className="product-Price-currencySymbol">
                        <del><span className="product-Price-amount">
                            <span className="product-Price-currencySymbol">$</span>50.00
                          </span>
                        </del>
                        <ins><span className="product-Price-amount">
                            <span className="product-Price-currencySymbol">$</span>40.00
                          </span>
                        </ins>
                      </span>
                    </span>
                  </li>
                  <li className="clearfix">
                    <a href="#"><img src="images/product/product-eight.jpg" alt="" />
                      <span className="product-title">Green Broccoli</span>
                    </a>
                    <div className="ttm-ratting-star">{/* ratting-star */}
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <span className="product-Price-amount amount"><span className="product-Price-currencySymbol">$</span>33.00</span>
                  </li>
                </ul>
              </aside>
              <aside className="widget tagcloud-widget">
                <h3 className="widget-title">Tags</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">Bulbsplant</a>
                  <a href="#" className="tag-cloud-link">Care</a>
                  <a href="#" className="tag-cloud-link">Farm</a>
                  <a href="#" className="tag-cloud-link">Gardening</a>
                  <a href="#" className="tag-cloud-link">Gardens</a>
                  <a href="#" className="tag-cloud-link">Landscaping</a>
                  <a href="#" className="tag-cloud-link">Planting</a>
                  <a href="#" className="tag-cloud-link">Seed Saving</a>
                </div>
              </aside>
            </div>
          </div>{/* row end */}
        </div>
      </div>
      {/* sidebar end */}
    </div>{/*site-main end*/}
  </div>
  )
}

export default Shop