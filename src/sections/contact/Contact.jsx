import './contact.css';
import Cont from '../../assets/contact.svg';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    
    <section id="contact">
        <div className="container contact__container">
            <aside className="contact__aside">
                <div className="aside__image">
                    <img src={Cont}/>
                </div>
                <h2>Contact</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia alias recusandae eveniet.
                </p>
                <ul className="contact__details">
                    <li>
                        <i className="uil uil-phone-times"></i>
                        <h5>+91 7218678652</h5>
                    </li>
                    <li>
                        <i className="uil uil-envelope"></i>
                        <h5>batulshahed521@gmail.com</h5>
                    </li>
                    <li>
                        <i className="uil uil-location-point"></i>
                        <h5>India</h5>
                    </li>
                </ul>
                <ul className="contact__socials">
                    <li><a href="https://instagram.com"> <AiOutlineInstagram/></a></li>
                    <li><a href="https://linkedin.com"><AiOutlineLinkedin /></a></li>
                </ul>
            </aside>
            <form action="https://formspree.io/f/mdkngarg" method="POST" className="contact__form">
                <div className="form__name">
                    <input type="text" name="First Name" placeholder="First Name" required/>
                    <input type="text" name="Last Name" placeholder="Last Name" required/>
                </div>
                <input type="email" name="Email Address" placeholder="Your Email Address" required/>
                <textarea name="Message" rows="7" placeholder="Message" required></textarea>
                <button type="submit" className="btn btn primary">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;
