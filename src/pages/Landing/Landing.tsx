import React from 'react'

type Props = {}

const Landing = () => {
    return (
        <div className="flex flex-col font-custom items-center mt-16 gap-12">
            <img src="./src/assets/img/logo.png" alt="logo" width={"700px"} className='content-center transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;' />
            <img src="./src/assets/img/Planetair-logo.png" alt="logo" width={"450px"} />
        </div>
    )
}

export default Landing