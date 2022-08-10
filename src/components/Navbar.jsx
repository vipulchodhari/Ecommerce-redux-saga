import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartLogo from '../assets/shopping-cart.png';

export const Navbar = () => {
    const { data } = useSelector((state) => ({
        data: state.dataState.data
    }))


    console.log('redux data in cart', data);
    return <div className='navbar-container'>
        <div className='navbar-heading'>
            <h1 >Ecommerce</h1>
            <Link className='navbar-home' to='/'><p>Home</p></Link>
        </div>
        <span>{data.length}</span>
        <Link to='/cart'>< img className='cart-logo' src={cartLogo} alt='' /></Link>
    </div>
}