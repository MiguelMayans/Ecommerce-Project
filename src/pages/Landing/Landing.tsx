import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

const Landing: FC = () => {
    return (
        <>
            <Helmet>
                <title>
                    PlanetAir Inc.
                </title>
                <html lang="en" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Website of the most important interplanetary agency on planet Earth" />
                <link rel="icon" href="./src/assets/img/Planetair-logo.png"></link>

                <meta property="og:type" content="website" />
                <meta property="og:title" content="PlanetAir Ecommerce" />
                <meta property="og:description" content="Website of the most important interplanetary agency on planet Earth" />

                <meta name="twitter:creator" content="PlanetAir Inc." />
                <meta name="twitter:title" content="PlanetAir Ecommerce" />
                <meta name="twitter:description" content="Website of the most important interplanetary agency on planet Earth" />
            </Helmet>

            <div className="flex flex-col font-custom items-center mt-16 gap-12">
                <img src="./src/assets/img/logo.png" alt="logo" width={"700px"} className='content-center transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;' />
                <img src="./src/assets/img/Planetair-logo.png" alt="logo" width={"450px"} />
            </div>
        </>
    )
}

export default Landing