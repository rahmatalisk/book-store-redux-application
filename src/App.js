import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BooksContainer from './components/BooksContainer';
import Header from './components/Header';
import store from './redux/Store';

function App() {
  const [searchText,setFilterText] = useState()
  return (
    <Provider store={store} >
     <header>
      <Header setFilterText={setFilterText}/>
      <main>
        <BooksContainer searchText={searchText}/>
      </main>
     </header>
    </Provider>
  );
}

export default App;
