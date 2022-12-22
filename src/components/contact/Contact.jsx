import "./contact.scss";
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'



export default function Contact() {
  return (
    <>
      <div id="about">
        <section id="about" class="about">
          <div className="contact" id="contact">
            <div className="section-titles">
              <h2 className="cont">Reach Out To Me</h2>
              <p className="sec-title">Contact</p>
            </div>
          </div>
        </section>
        <div className="parent">
          <div className="email">
            <div className="round"><MdLocationOn className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
            <p className="loca">Location</p>
            <p className="sub">Theni, India.</p>
          </div>
          <div className="email">
            <div className="round"><MdEmail className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
            <p className="loca">E-Mail</p>
            <p className="sub" style={{ fontSize: "1rem", marginLeft: "4.5rem", textDecoration: "none" }}>
              <a style={{ textDecoration: "none", color: "#18d26e" }} href="mailto:siva29061997@gmail.com"> siva29061997@gmail.com </a></p>
          </div>
          <div className="email">
            <div className="round"><FaLinkedin className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
            <p className="loca">LinkedIn</p>
            <p className="sub" style={{ fontSize: "1rem", marginLeft: "2.2rem", textDecoration: "none" }}>
              <a style={{ textDecoration: "none", color: "#18d26e" }} href="https://www.linkedin.com/in/siva-n-a57167250/"> SIVA N </a></p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1></h1>
      </div>
    </>
  );

}
