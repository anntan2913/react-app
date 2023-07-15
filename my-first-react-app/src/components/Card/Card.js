import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {

    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    const handleClickRemove = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>{props.title}
            <div className='style.buttons'>
            <button onClick={handleClick} className={clsx(styles.button, props.isFavorite && styles.active)}>
                <i className="fa fa-star-o" />
            </button>
            <button onClick={handleClickRemove} className={styles.button} >
                <i className="fa fa-trash" />
            </button>
            </div>
        </li>
    );
};

export default Card;