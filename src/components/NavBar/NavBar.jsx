import CartWidget from '../CartWidget/CartWidget'
import BrandClinok from '../Brand/Brand'

const Navbar = () =>{
    return(
        <nav>
            <BrandClinok />
            <section>
                <button>Lavavajillas</button>
                <button>Detergente</button>
                <button>Jabón de manos</button>
                <button>Limpiacristales</button>
                <button>Limpiavidrios</button>
                <button>Alcohol 70%</button>
                <button>Alcohol en gel</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar