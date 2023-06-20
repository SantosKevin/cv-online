import Image from 'next/image';
import './about.css';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

const About = () => {
  return (
    <section className='containerAboutParent' id="about">
      <h2 className="heading"  data-aos="fade-down">About <span>Me</span> </h2>
      <div className="about">
          <div className="about-img" data-aos="fade-right">
              <Image
                  src={"/images/profile1.jpeg"}
                  alt="Picture of the author"
                  width={400}
                  height={500}
              />
          </div>

          <div className="about-content" data-aos="fade-left">
              <h3>Frontend Developer</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam ipsum. Sed, magni officia! Unde repudiandae natus vero rem ut possimus earum iure in nisi est! Minus repellat architecto, sint possimus non laudantium! Sunt similique repellendus reiciendis! Libero reiciendis vel ab, nam distinctio esse velit dolorem?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam ipsum. Sed, magni officia! Unde repudiandae natus vero rem ut possimus earum iure in nisi est! Minus repellat architecto, sint possimus non laudantium! Sunt similique repellendus reiciendis! Libero reiciendis vel ab, nam distinctio esse velit dolorem?</p>

              <ButtonCustom text="Read More"></ButtonCustom>
          </div>
      </div>
    </section>
  )
}

export default About