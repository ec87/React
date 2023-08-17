import cart from './assets/cartWidget.png'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <button>
            <img src={cart} className={classes.cart}/>
            0
        </button>
    )
}

export default CartWidget