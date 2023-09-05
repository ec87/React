import brand from './assets/logotipo.webp'
import classes from './Brand.module.css'
import { useNavigate } from 'react-router-dom'


//boton brand/inicio
const BrandClinok = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/')}>
            <img src={brand} className={classes.brand} alt="Logo ClinOK" />
        </button>
    )
}

export default BrandClinok