import { useDispatch, useSelector } from 'react-redux';
import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from '../redux/action/cartAction';
import { ProductList } from '../redux/action/productAction';

export const Home = () => {
    const { data } = useSelector((state) => ({
        data: state.ProductState.data
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
        <button onClick={moveCart}>Add to Cart</button>
        <button onClick={RemoveCart}>Remove to Cart</button>
        <button onClick={EmptyCart}>Empty Cart</button>

        <button onClick={getProduct}>Get Product</button>
    </div>
}