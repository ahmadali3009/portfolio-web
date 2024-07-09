import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress , SiMongodb , SiRedux  } from "react-icons/si";
import { FaNodeJs , FaPhp  } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";



const Skillsicon = () => {
    return (
        <>
            <div className="bg-gray-800 mb-12">
                <h1 className="text-center text-3xl">
                    Techno
                    <span className="text-neutral-500">logies</span>
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <RiReactjsLine className="text-4xl text-cyan-400" />
                    </div>
                    <div className="rounded-3xl border-4  border-neutral-800  p-4 ">
                        <SiExpress className="text-4xl text-white" />
                    </div><div className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <SiMongodb className="text-4xl text-green-600" />
                    </div><div className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <FaNodeJs className="text-4xl text-green-600" />
                    </div><div className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <SiRedux className="text-4xl text-purple-800" />
                    </div><div className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <FaGitAlt className="text-4xl text-orange-600" />
                    </div>
                    <div className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <FaPhp className="text-4xl text-purple-700" />
                    </div>
            </div>
        </>
    )
}

export default Skillsicon
