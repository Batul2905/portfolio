import './about.css';
import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from "react-icons/hi";
import Card from '../../components/Card';
import data from './data';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Hi, I'm Batul Shahed, a passionate developer and artist. I love creating beautiful and functional web 
          experiences using React, HTML, CSS, and JavaScript. My journey into web development has been driven by my 
          curiosity and a desire to blend creativity with technology. Although I am a fresher, I am eager to learn and 
          grow in the tech industry. I have dedicated a lot of time to honing my skills through various personal projects 
          and exploring the latest trends in web development. 
          </p>
          <p>
          In addition to coding, I am an artist who enjoys painting and sketching. This artistic background allows me to 
          bring a unique perspective to my web designs, emphasizing both aesthetics and usability.I am excited about the 
          opportunity to contribute to innovative projects and collaborate with like-minded individuals. 
          Let's connect and create something amazing together!
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About
