import styles from './NoMatch.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NoMatch = () => {
    return (
        <div className={styles.noMatch}>
            <PageTitle>404 not found</PageTitle>
            <p className={styles.subtitle}>Oops! Something went wrong...<br/> please try again.</p>
        </div>
    );
};

export default NoMatch;