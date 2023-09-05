import CartWidget from '../CartWidget/CartWidget'
import BrandClinok from '../Brand/Brand'
import { useNavigate } from 'react-router-dom'


const Navbar = () =>{
    const navigate = useNavigate()

    return(
        <nav>
            <BrandClinok />
            <section>
                <button onClick={() => navigate('/category/lavavajillas')}>Lavavajillas</button>
                <button onClick={() => navigate('/category/detergente')}>Detergente</button>
                <button onClick={() => navigate('/category/jabonliquido')}>Jabón Líquido</button>
                <button onClick={() => navigate('/category/limpiavidrios')}>Limpiavidrios</button>
                <button onClick={() => navigate('/category/alcohol70')}>Alcohol 70%</button>
                <button onClick={() => navigate('/category/alcoholgel')}>Alcohol en gel</button>
                <button onClick={() => navigate('/category/lavandina')}>Lavandina</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar