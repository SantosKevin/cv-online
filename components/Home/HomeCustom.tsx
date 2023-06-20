import Image from "next/image";
import "./home.css";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const HomeCustom = () => {
  return (
    <div className="homeParent">
      <section className="home" id="home">
        <div className="home-content">
          <h1 data-aos="fade-down">Hello! Im Kevin.</h1>
          <h3 data-aos="fade-down">
            And I am a <span>React Developer</span>
          </h3>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet adipisicing elit. Ipsa modi quis
            voluptates consequuntur possimus ex officiis? Distinctio voluptate
            consequatur repellat alias a non neque ea delectus corrupti est illo
          </p>

          <div className="social-networks" data-aos="fade-up">
            <ul className="effect02">
              <li style={{ "--clr": "var(--violet)" } as React.CSSProperties}>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="iconNetwork"/>
                  <span>Instagram</span>
                </a>
              </li>
              <li style={{ "--clr": "var(--blue)" } as React.CSSProperties}>
                <a href="https://www.linkedin.com/in/kevin-santos-444b8b243/" target="_blank">
                  <FaLinkedin className="iconNetwork"/>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li style={{ "--clr": "var(--green)" } as React.CSSProperties}>
                <a href="https://web.whatsapp.com/" target="_blank">
                  <FaWhatsapp className="iconNetwork"/>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="containerBtnHome" data-aos="fade-right">
            <ButtonCustom text="Download CV"></ButtonCustom>
          </div>
        </div>

        <div className="containerHexagon" data-aos="fade-left">
          <div className="hexagon">
            <div className="shape">
              <Image
                src="/images/profile2.jpeg"
                alt="Picture of the author"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCustom;
