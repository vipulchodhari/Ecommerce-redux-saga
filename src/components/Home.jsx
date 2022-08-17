import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from '../redux/action/cartAction';
import { ProductList } from '../redux/action/productAction';

export const Home = () => {
    const { data } = useSelector((state) => ({
        data: state.productState.data
    }))

    // console.warn("saga data", data);
    const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    // const product = {
    //     id: 1,
    //     name: 'maruti',
    //     model: 'shift',
    //     color: 'white'
    // }

    useEffect(() => {
        dispatch(ProductList())
    }, [])

    const moveCart = (item) => {
        if(show === true){
            dispatch(Add_To_Cart(item))

            // alert("Your Item add to cart")
        }
        setShow(false);
    }

    // const RemoveCart = (item) => {
    //     dispatch(Remove_From_Cart(item.id))
    // }

    // const EmptyCart = () => {
    //     dispatch(Empty_Cart())
    // }

    // const getProduct = () => {
        
    // }
    return (<div className="home-container">
        
        {/* <button className='product-btn' onClick={EmptyCart}>Empty Cart</button> */}
        {/* <button className='product-btn' onClick={getProduct}>Get Product</button> */}

        <div className='product-cont'>
            {data.map((el, i) => {
                return <div key={i} className='product-item'>
                    
                    <img src={el.img} alt=''/>
                    <h3>{el.details}</h3>
                    <div className='product-details'>
                        <p>&#8377;{el.price}</p>
                        <p>&#8377;{el.amount}</p>
                        <p className='discount'>{el.discount}%OFF</p>
                    </div>
                    <div className='product-btn-container'>
                        <button className={show===true?'product-btn':'product-btn-added'} onClick={() => moveCart(el)}>{show === true ? 'Add to Cart': 'Added'}</button>
                        {/* <button className='product-btn' onClick={() => RemoveCart(el.id)}>Remove to Cart</button> */}
                    </div>
                </div>
            })}
        </div>
    </div>)
}