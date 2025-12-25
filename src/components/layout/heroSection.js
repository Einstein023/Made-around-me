import Header from "./header.js";
import { motion } from 'framer-motion';
import FeaturedItemPrototype from "../ui/featuredItemsPrototype.js";
import { Link } from 'react-router-dom';
import ClickSpark from "../ui/clickspark.js";
import { useEffect, useState } from 'react'
import Loading from "./loading.js";

function HeroSection(){
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return(
        <>
        {loading ? (<Loading />) : (
        <ClickSpark
  sparkColor='#FF0000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
        <Header />
        <main className="hero-section-main-content">
            <div className="featured-items">
                <Link to={"/login"}>
                <FeaturedItemPrototype />
                </Link>
            </div>
            <motion.div className="hero-text" initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
                <div className="heading">
                    <h1>Buy local, Save big, Live better</h1>
                    <h4>Support small businesses in your community</h4>
                </div>

                <div className="search-bar-container">
                    <input className="search-bar" type="text" placeholder="Browse Products"/>
                    <button>Search</button>
                </div>

                <div className="alt-btn">
                    <button>Go To Product</button>
                    <Link to={"/login"}>
                    <button>Become A Seller</button>
                    </Link>
                </div>

            </motion.div>
        </main>
        </ClickSpark>
        )}
        </>
    )
}

export default HeroSection;