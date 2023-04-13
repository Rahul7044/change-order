import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortOrder, setSortOrder] = useState('asc');

  const changeTitleHandler = useCallback(() => {
    setListTitle((prevTitle) => prevTitle === 'My List' ? 'New Title' : 'My List');
  }, []);

  const changeSortOrderHandler = useCallback(() => {
    setSortOrder((prevOrder) => prevOrder === 'asc' ? 'desc' : 'asc');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return listItems.slice().sort((a, b) => sortOrder === 'asc' ? a - b : b - a);
  }, [listItems, sortOrder]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortOrderHandler}>
        Change to {sortOrder === 'asc' ? 'Descending' : 'Ascending'} Order
      </Button>
    </div>
  );
}

export default App;