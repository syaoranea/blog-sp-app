
import './Rodape.css'
export const Rodape = () => {
    return (

        <footer id="footer">
          <div className="footer-inner">
            <div className="container-fluid">
              <div className="row">
      
                <div className="col-sm-6">
                  <div className="copyright">
                    &copy; BlogAnimax / All rights reserved
                  </div>
                </div>
      
                <div className="col-sm-6">
                  <div className="social-icons">
                    <ul>
                      <li><a target="_blank" href="https://www.facebook.com" title="Follow us on Facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a target="_blank" href="https://twitter.com/" title="Follow us on Twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a target="_blank" href="https://www.pinterest.com" title="Follow us on Pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                      <li><a target="_blank" href="https://www.instagram.com" title="Follow us on Instagram"><i className="fab fa-instagram"></i></a></li>
              
                      <li><a target="_blank" href="mailto:your@email.com" title="Contact Us"><i className="fas fa-envelope"></i></a></li>
                    </ul>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
        </footer>
   
    )
}