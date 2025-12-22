import Header from "./header.js"
import { useState } from "react"
import { UilSearch } from '@iconscout/react-unicons'
const data = [
    {id: 1, name: "bag"},
    {id: 2, name: "car"},
    {id: 3, name: "ball"},
    {id: 3, name: "bed"},
    {id: 4, name: "bottle"},
    {id: 5, name: "shoes"},
    {id: 6, name: "shirt"},
]

const dataCategories = [
    {name: "Clothes"},
    {name: "Electronics"},
    {name: "Home Appliances"},
    {name: "Books"},
    {name: "Toys"},
    {name: "Sports Equipment"},
    {name: "Bags"},
    {name: "Footwear"},
]
export function Home(){
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
                    {dataCategories.map((category, index) => <button className="category-btn" key={index}>{category.name}</button> )}
                </div>
            </section>
            </main>

        </div>

    )
}