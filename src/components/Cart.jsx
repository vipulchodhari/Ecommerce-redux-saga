import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Empty_Cart, Remove_From_Cart } from "../redux/action/cartAction";

export const Cart = () => {
    const { data } = useSelector((state) => ({
        data: state.dataState.data
    }))

    console.log("data in cart", data);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const EmptyCart = () => {
        dispatch(Empty_Cart())
    };

    const RemoveCart = (el) => {
        dispatch(Remove_From_Cart(el))
    }
    
    const increaseQuantity = (id) => {

    }

    let totalAmount = 0;
    let totalPrice = 0;
    data.forEach(item => {
        totalAmount += +item.amount;
        totalPrice += +item.price;
    })

    return <div className="cart-container">
        <div className='cart-flex-top'>
            <h1>Your Cart Items</h1>
            <button className='product-btn' onClick={EmptyCart}>Empty Cart</button>
        </div>

        <div className="cart-main-cont">
            <div className="cart-left-cont">
                {data.map(item => {
                    return <div className="cart-left-top">
                        <div>
                            <div className='cart-move'>
                                <img src={item.img} />
                                <div>
                                    <h4>{item.details}</h4>
                                    <p>Size:<span>9-12m</span></p>
                                    <p>Ideal Weight (Kgs): <span>8.9 - 9.6</span></p>
                                </div>
                            </div>
                            <hr />
                            <div className='cart-move'>
                                <p onClick={() => RemoveCart(item)}><span><RiDeleteBin6Line /></span>&nbsp;REMOVE</p>
                                <div className='cart-item-quantity'>
                                    <button>-</button>
                                    <input onChange={() => increaseQuantity(item.id)} type='number' placeholder='1'/>
                                    <button>+</button>
                                </div>    
                            </div>
                        </div>
                        <div className='cart-vertical-line'></div>
                        <div className='cart-right-top'>
                            <h3>&#8377;{item.price}</h3>
                            <p className='cart-mrp'>MRP&nbsp; &#8377;<spna className='cart-price'>{item.amount} </spna><span className='cart-off'>&nbsp; 21%OFF</span></p>
                            <p>MRP Includes all taxes</p>
                            <p></p>
                        </div>
                    </div>
                })}

                <div className='cart-place-order'>
                    <p onClick={() => {
                        // navigate("../address")
                    }} className='cart-delevery'>ADD DELIVERY ADDRESS</p>
                    <div onClick={() => {
                        // navigate("../address")
                        alert('your order is deliverd in 2 days')
                        navigate('/')
                        dispatch(Empty_Cart())
                    }} className='cart-order'>
                        <p>&#8377;{(totalPrice).toFixed(2)}</p>
                        <h5>PLACE ORDER</h5>
                    </div>
                </div>
            </div>
            <div className='cart-right-cont'>
                <h4>Payment Information</h4>
                <div>
                    <p>Value of Product(s)</p>
                    <p>&#8377;{totalAmount}</p>
                </div>
                <div>
                    <p>Discount(-)</p>
                    <p>&#8377;{(totalAmount - totalPrice).toFixed(2)}</p>
                </div>
                <div>
                    <p>Delevery Charge</p>
                    <p>&#8377;50</p>
                </div>
                <hr />
                <div>
                    <p>Total</p>
                    <p>&#8377;{(totalPrice + 50).toFixed(2)}</p>
                </div>
            </div>
        </div>
    </div>
}
