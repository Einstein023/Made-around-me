import Header from "./header.js";
// import FeaturedItem from "./components/ui/featuredItem.js";
import FeaturedItemPrototype from "../ui/featuredItemsPrototype.js";
import { Link } from 'react-router-dom';

function HeroSection(){
    return(
        <>
        <Header />
        <main className="hero-section-main-content">
            <div className="featured-items">
                <Link to={"/login"}>
                <FeaturedItemPrototype />
                </Link>
            </div>
            <div className="hero-text">
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
                
            </div>
        </main>
        </>
    )
}

export default HeroSection;