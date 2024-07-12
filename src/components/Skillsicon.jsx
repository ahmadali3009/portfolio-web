import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress , SiMongodb , SiRedux  } from "react-icons/si";
import { FaNodeJs , FaPhp  } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { animate, motion } from "framer-motion"



const Skillsicon = () => {
    const iconvarient = (duration)=>({
        initial : {y:-9},
        animate : {y: [9,-9] ,
            transition:{
                duration : duration,
                ease : "linear",
                repeat : Infinity,
                repeatType: "reverse"
            }
        }
    })
    return (
        <>
            <div className="bg-custom-dark-blue my-20">
                <motion.h1 whileInView={{opacity:1 , y:0}}
                initial={{opacity:0 , y:-100}}
                transition={{duration:1.5}}
                // animate={{opacity:0 , y:-100}}
                // transition={{delay:1.2 , duration:2.5}}
                 className="text-center text-3xl text-white">
                    Techno
                    <span className="text-purple-800">logies</span>
                </motion.h1>
            </div>
            <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:0}}
          transition={{duration:1 , delay : 0.5} }  className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div variants={iconvarient(2)} animate="animate" initial="initial"  className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <RiReactjsLine className="text-4xl text-cyan-400" />
                    </motion.div>
                    <motion.div variants={iconvarient(2.5)} animate="animate" initial="initial" className="rounded-3xl border-4  border-neutral-800  p-4 ">
                        <SiExpress className="text-4xl text-white" />
                    </motion.div>
                    <motion.div variants={iconvarient(3)} animate="animate" initial="initial" className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <SiMongodb className="text-4xl text-green-600" />
                    </motion.div>
                    <motion.div variants={iconvarient(3.5)} animate="animate" initial="initial" className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <FaNodeJs className="text-4xl text-green-600" />
                    </motion.div>
                    <motion.div variants={iconvarient(4)} animate="animate" initial="initial" className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <SiRedux className="text-4xl text-purple-800" />
                    </motion.div>
                    <motion.div variants={iconvarient(4.5)} animate="animate" initial="initial" className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <FaGitAlt className="text-4xl text-orange-600" />
                    </motion.div>
                    <motion.div variants={iconvarient(5)} animate="animate" initial="initial" className="rounded-3xl border-4 ☐ border-neutral-800 p-4">
                        <FaPhp className="text-4xl text-purple-700" />
                    </motion.div>
            </motion.div>
        </>
    )
}

export default Skillsicon
