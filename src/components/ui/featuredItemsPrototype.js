import { motion } from 'framer-motion';
import { useState, useEffect} from 'react'

const initialFeatured = [
    {image: '/bag1.jpg'},
    {image: '/bag2.jpg'},
    {image: '/bag3.jpg'}
]

function FeaturedItemPrototype(){
    
        const [items, setItems] = useState(initialFeatured);
    
        useEffect(() => {
            const id = setInterval(() => {
                setItems(prev => {
                    if (!prev || prev.length <= 1) return prev;
                    const next = [...prev];
                    next.push(next.shift()); // rotate left by 1
                    return next;
                });
            }, 5000);
    
            return () => clearInterval(id);
        }, []);

        return(
            <motion.section className="featured-item-container"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            >
                {items.map((item, index) => (
                    <img className="featured-img" key={index} src={item.image} alt={`Featured item ${index + 1}`} />
                ))}
                <div className="circle" />
            </motion.section>
        )
}

export default FeaturedItemPrototype;