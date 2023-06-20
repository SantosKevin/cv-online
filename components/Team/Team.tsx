import Image from 'next/image';
import './team.css';

const team = [
    {
        id: 0,
        name: 'Someone Here',
        image: 'profile2.jpeg',
        description: 'UX/UI Designer',
    },
    {
        id: 1,
        name: 'Someone Here 2',
        image: 'profile1.jpeg',
        description: 'Web Developer',
    },
    {
        id: 2,
        name: 'Someone Here 3',
        image: 'profile2.jpeg',
        description: 'Mobile Developer',
    },
]

const Team = () => {
  return (
    <section className='containerCircleParent' id='team'>
        <h2 className="heading" data-aos="fade-down">My <span>Team</span> </h2>
        <div className="containerCircle">
            {team.map((c) => (
                <div className="boxCircle" key={c.id} data-aos="zoom-in-up">
                    <div className="contentCircle">
                        <Image
                            src={"/images/" + c.image}
                            alt="Picture of the author"
                            width={400}
                            height={500}
                        />
                        <h2>{c.name} <br/> <span>{c.description}</span> </h2>
                        <a href="https://www.linkedin.com/in/kevin-santos-444b8b243/" target='_blank'>Hire Him</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Team