import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

    const favoriteCards = useSelector(getFavoriteCards);

    if(favoriteCards.every(card => !card)) { 
        return (
            <div className={styles.title}>
                <PageTitle> My Favorite</PageTitle>
                <p className={styles.subtitle}>No added Favorite Cards yet. </p>
            </div>
        );
    }

    return (
        <div>
            <PageTitle> My Favorite</PageTitle>
            <div className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => <Card key={card.id} {...card} />)}
                </ul>
            </div>
        </div>
    );
};

export default Favorite;