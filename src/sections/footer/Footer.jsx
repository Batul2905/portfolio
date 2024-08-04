import './footer.css';

import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <div className="footer__1">
                <a href="index.html" className="footer__logo"><h4>BATUL</h4></a>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor quam veniam!
                </p>
            </div>

            <div className="footer__2">
                <h4>Permalinks</h4>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer__3">
                <h4>Primacy</h4>
                <ul className="primacy">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </ul>
            </div>

            <div className="footer__4">
                <h4>Contact Us</h4>
                <div>
                    <p>+91 7218678652</p>
                    <p>batulshahed521@gmail.com</p>
                </div>
            </div>

            <ul className="footer__socials">
                <li>
                    <a href="#"><i className="uil uil-facebook-f"></i></a>
                </li>
                <li>
                    <a href="#"><i className="uil uil-instagram-alt"></i></a>
                </li>
                <li>
                    <a href="#"><i className="uil uil-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                </li>
            </ul>
        </div>
        
        <div className="footer__copyright">
            <small>Copyright &copy; BATUL SHAHED</small>
        </div>
    </footer>

    // <!-- =========== END OF FOOTER ============= -->
  )
}

export default Footer
