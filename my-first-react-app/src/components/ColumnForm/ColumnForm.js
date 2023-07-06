import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
           <label>Title: </label>
           <TextInput value={title} onChange={e => setTitle(e.target.value)} />
           <label>Icon: </label>
           <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
           <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;