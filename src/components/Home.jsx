import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_To_Cart } from '../redux/action/cartAction';
import { ProductList } from '../redux/action/productAction';

export const Home = () => {
    const { data, cartData } = useSelector((state) => ({
        data: state.productState.data,
        cartData: state.dataState.data
    }))
    console.warn("saga data", cartData.values());

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ProductList())
    }, [])

    const moveCart = (item) => {
        if(!cartData.has(item.id)){
            dispatch(Add_To_Cart(item))

            // alert("Your Item add to cart")
        }
    }

    return (<div className="home-container">
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
                        <button className={!cartData.has(el.id)?'product-btn':'product-btn-added'} onClick={() => moveCart(el)}>{!cartData.has(el.id) ? 'Add to Cart': 'Added'}</button>
                    </div>
                </div>
            })}
        </div>
    </div>)
}