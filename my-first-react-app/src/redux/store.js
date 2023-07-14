import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
/*
export const getFilteredCards = (state, columnId) => state.cards.filter(card => card.columnId === columnId 
      && card.title.toLowerCase().includes(state.searchString.toLowerCase()));          /przed destrukturyzacją!/

export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId
      && card.title.toLowerCase().includes(searchString.toLowerCase()));                /po destrukturyzacji!/

export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId 
  && strContains(card.title, searchString));                                    //po zastos. funkcji str.Contains/
*/

// action creators - wydzielone do plików w  folderze redux

/*
-zamieniamy: wykorzystanie subreducerów - poniżej:

const reducer = (state, action) => {
    //if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, {id: shortid(), ...action.payload }]}
    switch(action.type){
      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, {id: shortid(), ...action.payload }]};
      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, {id: shortid(), ...action.payload }]};
      case 'UPDATE_SEARCHSTRING':
        return {...state, searchString: action.payload};
      case 'ADD_LIST':
        return {...state, lists: [...state.lists, {id: shortid(), ...action.payload}]};
      case 'TOGGLE_CARD_FAVORITE':
        return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
      default:
        return state;
    }    
};

0)Przygot. 4 osobnych funkcji (min-reducers) dla Lists, Columns, Cards i SearchString:

3) Po zastos. 'combineReducers' wycinamy do osobnych plików w f. redux
  const listsReducer, 
  const columnsReducer,
  const cardsReducer,
  const searchStringReducer.

1) Uaktualniony reducer z w/w min-reducerami:

const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};
---
2) Zamiana wpisanych na sztywno nazwaKolekcji: nazwaKolekcjiReducer(state.nazwaKolekcji, action)
   na wykorzystanie f-cji reduxa 'combineReducers':
*/
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);
  
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;