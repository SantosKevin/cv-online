import './services.css';
import { FaDelicious, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section className='containerStickParent' id='services'>
        <h2 className="heading" data-aos="fade-down">My <span>Services</span> </h2>
        <div className="containerCardStick">
            <div className="boxStick" style={{ "--clr": "var(--violet)" } as React.CSSProperties} data-aos="zoom-in-up">
                <div className="contentStick">
                    <div className="iconStick">
                        <FaLaptopCode />
                    </div>
                    <div className="textStick">
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum beatae itaque odio iste ullam praesentium.</p>
                        <a href="https://google.com" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
            <div className="boxStick" style={{ "--clr": "var(--blue)" } as React.CSSProperties} data-aos="zoom-in-up">
                <div className="contentStick">
                    <div className="iconStick">
                        <FaDelicious />
                    </div>
                    <div className="textStick">
                        <h3>UI/UX</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum beatae itaque odio iste ullam praesentium.</p>
                        <a href="https://google.com" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
            <div className="boxStick" style={{ "--clr": "var(--green)" } as React.CSSProperties} data-aos="zoom-in-up">
                <div className="contentStick">
                    <div className="iconStick">
                        <FaMobileAlt />
                    </div>
                    <div className="textStick">
                        <h3>Mobile Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum beatae itaque odio iste ullam praesentium.</p>
                        <a href="https://google.com" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services