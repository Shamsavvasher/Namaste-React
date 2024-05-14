import { LOGO_URL } from "../utils/contants";


const Header = () => {
    return (
        <div className="header" >
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="search-bar">
                <input  type="text" placeholder="Search a restaurant you want..."></input>
                <button>search</button>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <i class="ri-shopping-cart-2-fill"></i>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;