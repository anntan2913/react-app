import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
//import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';

const List = () => {

    const { listId } = useParams();
    
    //const columns = useSelector(getAllColumns);
    //const listData = useSelector(state => getListById(state, 1));    //Pobranie listy o id:1 
    const listData = useSelector(state => getListById(state, listId));

    //const columns = useSelector(state => getColumnsByList(state, 1));
    const columns = useSelector(state => getColumnsByList(state, listId));

    if(!listData) return <Navigate to="/" />
      return (
          <div className={styles.list}>
            <header className={styles.header}>
              <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
              {columns.map(column =>
                <Column key={column.id} {...column} />
              )}
            </section>
            <ColumnForm listId={listId}/>
          </div>
        );
};

export default List;




//if(!listData) return <Navigate to="/" /> spr, czy listData jest: 
//tak-to render div jak zwykle,
//nie-to render <Navigate> do "/"
