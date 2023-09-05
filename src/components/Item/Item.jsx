import { useNavigate } from "react-router-dom"
import classes from '../Item/Item.module.css'

const Item = ({ id, name, img, price }) => {
    const navigate = useNavigate()

    return (
        <div className={classes.products}>
            <h3>{name}</h3>
            <img src={img} style={{ width: 100}} />
            <h3>${price}</h3>
            <button onClick={() =>navigate(`/detail/${id}`)}>Detalle</button>
        </div>
    )
}

export default Item