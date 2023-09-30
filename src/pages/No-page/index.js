import React from 'react'

function Nopage() {
  return (
    <div style={{marginTop:-100}}>
    <section className="error-404">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ttm-big-icon ttm-textcolor-skincolor">
                <i className="fa fa-thumbs-o-down" />
              </div>
              <header className="page-header"><h1 className="page-title">404 ERROR</h1></header>
              <div className="page-content"> <p>This page may have been moved or deleted. Be sure to check your spelling.</p></div>
              <a className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor mb-15" href="/">Back To Home</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nopage