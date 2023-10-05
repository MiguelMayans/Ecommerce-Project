import React from 'react'

type Props = {}

const Landing = () => {
    return (
        <div className="flex flex-col font-custom items-center mt-12 gap-12">
            <img src="./public/img/logo.png" alt="logo" width={"700px"} className='content-center' />
            <img src="./public/img/Planetair-logo.png" alt="logo" width={"450px"} />
        </div>
    )
}

export default Landing