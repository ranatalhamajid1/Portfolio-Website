import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/ranatalhamajid1" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rana-muhammad-talha-majid-25233228b" },
    { label: "Portfolio", href: "https://drive.google.com/drive/folders/1QiHfsQXcBhuoTmY8-36GREO7RCPUklFQ?usp=drive_link" },
  ];

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:talhamajid404@gmail.com" data-cursor="disable">
                talhamajid404@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923068888847" data-cursor="disable">
                +92 306-8888847
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {social.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rana Talha Majid</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
