import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'
import logo from '../assets/stockmarket.jpeg'
function Navigation() {
    return (
        <header className={classes.header}>
            <img src={logo} className={classes.logo}></img>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/stock-page'>Stocks </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation