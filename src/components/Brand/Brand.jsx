import brand from './assets/logotipo.webp'
import classes from './Brand.module.css'


//boton brand/inicio
const BrandClinok = () => {
    return (
        <button>
            <img src={brand} className={classes.brand} alt="Logo ClinOK" />
        </button>
    )
}

export default BrandClinok