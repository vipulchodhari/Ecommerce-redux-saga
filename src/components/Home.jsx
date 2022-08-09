import { useDispatch, useSelector } from 'react-redux';
import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from '../redux/action/cartAction';
import { ProductList } from '../redux/action/productAction';

export const Home = () => {
    const { data } = useSelector((state) => ({
        data: state.productState.data
    }))

    console.warn("saga data", data);
    const dispatch = useDispatch();
    const product = {
        id: 1,
        name: 'maruti',
        model: 'shift',
        color: 'white'
    }

    const moveCart = () => {
        dispatch(Add_To_Cart(product))
    }

    const RemoveCart = () => {
        dispatch(Remove_From_Cart(product))
    }

    const EmptyCart = () => {
        dispatch(Empty_Cart())
    }

    const getProduct = () => {
        dispatch(ProductList(product))
    }
    return <div className="home-container">
        
        <button className='product-btn' onClick={EmptyCart}>Empty Cart</button>

        <button className='product-btn' onClick={getProduct}>Get Product</button>

        <div className='product-cont'>
            {data.map((el, i) => {
                return <div key={i} className='product-item'>
                    <img src={el.img} alt=''/>
                    <h3>{el.details}</h3>
                    <div className='product-details'>
                        <p>{el.price}</p>
                        <p>{el.amount}</p>
                        <p className='discount'>{el.discount} %OFF</p>
                    </div>
                    <div className='product-btn-container'>
                        <button className='product-btn' onClick={moveCart}>Add to Cart</button>
                        <button className='product-btn' onClick={RemoveCart}>Remove to Cart</button>
                    </div>
                </div>
            })}
        </div>
    </div>
}