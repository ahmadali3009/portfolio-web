import { CONTACT } from "../constants";
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div  className="border-b ☐ border-neutral-900 pb-20">
            <motion.h1 whileInView={{opacity:1 , y:0}}
                initial={{opacity:0 , y:-100}}
                transition={{duration:1.5}} className="my-10 text-center text-4xl mt-15">Get in Touch</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:0}}
          transition={{duration:1 , delay : 0.5} } className="my-4">{CONTACT.address}</motion.p>
                <motion.p whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:0}}
          transition={{duration:1 , delay : 0.5} } className="my-4">{CONTACT.phone}</motion.p>
                <a href="#">{CONTACT.email}</a>
            </div>
        </div>
    );
};
export default Contact;