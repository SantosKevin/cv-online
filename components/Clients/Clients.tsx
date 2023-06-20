import Image from 'next/image';
import './clients.css';

const clients = [
    {
        id: 0,
        name: 'Fantasy Company',
        image: 'company1.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, optio!',
    },
    {
        id: 1,
        name: 'Fantasy Company',
        image: 'company1.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, optio!',
    },
    {
        id: 2,
        name: 'Fantasy Company',
        image: 'company1.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, optio!',
    },
]

const Clients = () => {
  return (
    <section className='containerFutureParent' id='clients'>
        <h2 className="heading"  data-aos="fade-down">Some of my <span>Clients</span> </h2>
        <div className="containerFuture">
            {clients.map((c) => (
                <div className="boxFuture" style={{ "--i": c.id } as React.CSSProperties} key={c.id}  data-aos="zoom-in-up">
                    <i></i>
                    <div className="contentFuture">
                        <Image
                            src={"/images/" + c.image}
                            alt="Picture of the author"
                            width={400}
                            height={500}
                        />
                        <h2>{c.name} <br/> <span>{c.description}</span> </h2>
                        <a href="https://google.com" target='_blank'>See More</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Clients