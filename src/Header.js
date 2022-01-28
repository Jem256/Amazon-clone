import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
              <img className='header__logo' 
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header__nav'>
                <Link to={!user && "/login"}> 
                  <div onClick={handleAuthentication} className='header__option'>
                      {/* user?.email || 'Guest' */}
                    <span className='header__optionOne'>
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className='header__optionTwo'>
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                  </div>
                </Link>
                

                <div className='header__option'>
                    <span className='header__optionOne'>
                        Returns
                    </span>
                    <span className='header__optionTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionOne'>
                        Your
                    </span>
                    <span className='header__optionTwo'>
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingCartIcon/>
                        <span className='header__optionTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
