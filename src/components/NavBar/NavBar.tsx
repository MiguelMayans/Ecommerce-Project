import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center mx-6 my-2">
                <div className="w-full">
                    <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                        <NavLink to={"/"}>
                            <button className="w-full bg-stroke-color duration-200">
                                <div className=" bg-secondary-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                    <h4 className="duration-200 m-1">
                                        <div className="flex justify-start items-center">HOME _</div>
                                    </h4>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mx-6 my-2">
                <div className="w-full">
                    <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                        <NavLink to={"/travel"}>
                            <button className="w-full bg-stroke-color duration-200">
                                <div className=" bg-secondary-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                    <h4 className="duration-200 m-1">
                                        <div className="flex justify-start items-center">TRAVEL _</div>
                                    </h4>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mx-6 my-2">
                <div className="w-full">
                    <div style={{ animation: "scale-up-center, 1s, cubic-bezier(0.4, 0, 0.2, 1), both" }}>
                        <NavLink to={"/about"}>
                            <button className="w-full bg-stroke-color duration-200">
                                <div className=" bg-secondary-color active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-8 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
                                    <h4 className="duration-200 m-1">
                                        <div className="flex justify-start items-center">ABOUT _</div>
                                    </h4>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(NavBar)