import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import { useState } from 'react';

const ListForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId: props.listId  }));
        setTitle('');
        setDescription('');
     };

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
           <label>Title: </label>
           <TextInput value={title} onChange={e => setTitle(e.target.value)} />
           <label>Description: </label>
           <TextInput value={description} onChange={e => setDescription(e.target.value)} />
           <Button>Add column</Button>
        </form>
	);
};

export default ListForm;