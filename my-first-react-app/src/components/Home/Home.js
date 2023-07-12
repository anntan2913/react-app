import styles from './Home.module.scss';
import Hero from '../Hero/Hero';

import Lists from '../Lists/Lists';

const Home = () => {
    return (
        <div>
            <Hero />            
            <Lists />
        </div>
    );
};

export default Home;