import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getSearchString, updateSearchString } from '../../redux/store';

const SearchForm = () => {

    const dispatch = useDispatch();

    const searchString = useSelector(getSearchString);

    const [title, setTitle] = useState(searchString);
    
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