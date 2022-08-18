import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Change_Quantity, Empty_Cart, Remove_From_Cart } from "../redux/action/cartAction";
import { mapToArray } from '../utils/common';

export const Cart = () => {
    const { data } = useSelector((state) => ({
        data: state.dataState.data,
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

    const changeQuantity = (item, change, quantity) => {
        console.log("change quantity", quantity);
        if(quantity<1){
            dispatch(Remove_From_Cart(item))
        }else{
            dispatch(Change_Quantity(item.id, change))
        }
    }

    let totalAmount = 0;
    let totalPrice = 0;
    Array.from(data.values()).forEach(({value, quantity}) => {
        totalAmount += +value.amount*quantity;
        totalPrice += +value.price*quantity;
    })

    return <div className="cart-container">
        <div className='cart-flex-top'>
            <h1>Your Cart Items</h1>
            <button className='product-btn' onClick={EmptyCart}>Empty Cart</button>
        </div>

        <div className="cart-main-cont">
            <div className="cart-left-cont">
                {mapToArray(data).map(({value: item, quantity}) => {
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
                                    <button onClick={() => changeQuantity(item, -1, quantity)}>-</button>
                                    <input type='number' placeholder={quantity} disabled/>
                                    <button onClick={() => changeQuantity(item, 1, quantity)}>+</button>
                                </div> 
                            </div>
                        </div>
                        <div className='cart-vertical-line'></div>
                        <div className='cart-right-top'>    
                            <h3>&#8377;{(item.price*quantity).toFixed(2)}</h3>
                            <p className='cart-mrp'>MRP&nbsp; &#8377;<spna className='cart-price'>{item.amount*quantity} </spna><span className='cart-off'>&nbsp; 21%OFF</span></p>
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
