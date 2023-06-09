import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navcontent}>
                    <a href="/"><i className='fa fa-tasks'/></a>
                    <ul className={styles.subpage}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;