import { useLocation } from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../features/auth/UserContext'

function Home(){
const location = useLocation()
const userData = location.state ?? { username: 'Guest' }

const currentDate = new Date().toLocaleDateString('en-Ng', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});


    return(
        <div className='dashboard-container'>
            <div className="side-nav">
                <h1>Made Around Me</h1>

                <div className="nav-items">
                    <ul>
                        <li>Dashboard</li>
                        <li>Customer</li>
                        <li>Products</li>
                        <li>Delivered</li>
                    </ul>
                </div>
            </div>

            <div className="top-nav">
                <h2>Welcome, {userData.username}</h2>
                <p>{currentDate}</p>
            </div>
        </div>
    )
}

export default Home;

