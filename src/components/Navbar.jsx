import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import cartLogo from '../assets/shopping-cart.png';
import { mapToArray } from '../utils/common';
// import { Helmet } from "react-helmet";

export const Navbar = () => {
    const { data } = useSelector((state) => ({
        data: state.dataState.data
    }))

    let _quantity = 0;
    mapToArray(data).forEach(({ quantity }) => {
        _quantity += quantity

        console.log('quantity', quantity);
    })

    // console.log('redux data in cart', data);
    return (<div className='navbar-container'>
        <div className='navbar-heading'>
            <h1 >Ecommerce</h1>
            <Link className='navbar-home' to='/'><p>Home</p></Link>
            <Link className='navbar-help' to='/help'>Help</Link>
            {/* <Helmet className='navbar-home'>
                <script src="https://www.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js" type="text/javascript"
                    data-bot="287558924"></script>
            </Helmet> */}
        </div>
        <span>{_quantity}</span>
        <Link to='/cart'>< img className='cart-logo' src={cartLogo} alt='' /></Link>
        <Outlet />
    </div>)
}