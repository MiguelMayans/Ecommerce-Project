import { FC } from 'react'

const About: FC = () => {

    return (
        <div className='bg-stroke-color text-white w-[1000px] mx-auto px-10 py-4 mt-20'>
            <article className='w-[900px] mx-auto mt-10 font-custom ' >
                Welcome to PlanetAir, the ultimate travel agency for interplanetary adventures. Established in 2135, we are a team of passionate and experienced space travelers who want to share our love for the cosmos with you. Whether you want to visit the red sands of Mars, the icy rings of Saturn, or the stormy clouds of Jupiter, we have the perfect destination for you.
                <br />
                At PlanetAir, we believe that space travel should be accessible, affordable, and safe for everyone. That's why we use the latest technology and innovation to make your journey as smooth and comfortable as possible. We partner with leading aerospace companies such as SpaceX, Blue Origin, and Virgin Galactic to provide you with the best spacecrafts and services available. We also have a network of space stations and habitats across the solar system, where you can enjoy the amenities and activities of your choice.
                <br />
                PlanetAir offers a variety of packages and options to suit your preferences and budget.
                <br />
                <p className='font-extrabold mt-10 mb-10'>
                    So what are you waiting for? Contact us today and book your ticket to the final frontier. PlanetAir: the ultimate travel agency for interplanetary adventures.
                </p>
            </article>
        </div>
    )
}

export default About