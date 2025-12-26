import Header from "./header.js"
import { useState, useEffect } from "react"
import { UilSearch } from '@iconscout/react-unicons'
import Loading from "./loading.js"
// const data = [
//     {id: 1, name: "bag"},
//     {id: 2, name: "car"},
//     {id: 3, name: "ball"},
//     {id: 3, name: "bed"},
//     {id: 4, name: "bottle"},
//     {id: 5, name: "shoes"},
//     {id: 6, name: "shirt"},
// ]

// const staticDataCategories = [
//     {name: "Clothes"},
//     {name: "Electronics"},
//     {name: "Home Appliances"},
//     {name: "Books"},
//     {name: "Toys"},
//     {name: "Sports Equipment"},
//     {name: "Bags"},
//     {name: "Footwear"},
// ]
export function Home(){
    const [data, setData] = useState(null)
    const dataCategories = data ? Array.from(new Set(data.map(item => item.category))) : []
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(error => console.error(error))
    }, [])
    console.log(data)



    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const handleSearch =(event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filteredData = data.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm);
        })
        setFilteredData(filteredData);
    }
    function handleFilteredData(){
        if (searchTerm === "") {
            return <p></p>;
        }else if (filteredData.length === 0) {
            return <p>No results found</p>;
        }
        else {
            return filteredData.map((item) => (<li key={item.id}>{item.name}</li>
            ))

        }
    }
   
    return (

        <>
            { !data ? (<Loading />) : (
                <div>
                <Header />
                <div className="Home-search-container">
            <UilSearch size={20} className="UilSearch"/>
            <input type="text" placeholder="Search products, bags, shirts, items" value={searchTerm} onChange={handleSearch} className="search-bar home-search"/>
            </div>
            <ul className="filtered-data" >
                <li>{handleFilteredData()}</li>
            </ul>
            <main className="home-main-content">
            <section className="home-welcome-section">
               <h4>Categories</h4>
                <div className="home-categories">
                    {dataCategories.map(category => (
                        <button className="category-btn" key={category}>{category}</button>
                    ))}
                </div>
            </section>
            <section className="gallery">
                <div className="fashion">
                    {
                        data.map(item => (
                            <div className="card" key={item.id}>
                                <div className="img-container">
                                <img src={item.image} alt={item.title} />
                                </div>
                                <div className="product-detail">
                                <h5 title={item.title}>{item.title}</h5>
                                <div className="p-d-btm">
                                <h3>${item.price}</h3>
                                <button className="add-to-cart">Add To Cart</button>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            </main>
            </div>
)}
        </>

    )
}