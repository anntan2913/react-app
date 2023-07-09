import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(title));
        setTitle('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)} />            
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;