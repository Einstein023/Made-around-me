import PrimaryBtn from '../ui/primaryBtn.js';
import { motion } from 'framer-motion';
function Header(){
    return(
        <motion.header initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
            <nav>
            <h4>Made Around Me</h4>
            <PrimaryBtn>BECOME A SELLER</PrimaryBtn>
            </nav>
        </motion.header>
    );
}

export default Header;