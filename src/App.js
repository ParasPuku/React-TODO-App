import { useState } from 'react';
import "./styles.css";
import List from './List';

export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handleOnSubmit = (e) => {
    
    e.preventDefault();
    
    const newItem = {id: new Date().getTime().toString(), title: name}
    setList({...list, newItem});
    console.log(list)
  }

  const onEditTask = (id) => {

  }

  const onDeleteTask = (id) => {

  }

  const onClearList = () => {

  }

  return (
    <div className="App">
      <h1>React TODO App</h1>
      <h3>TODO list using Locale Storage</h3>
      <form onSubmit={handleOnSubmit} >
        <input
          type="text"
          style={{padding: '5px', fontSize: '16px', letterSpacing: '2px', outline: '0'}}
          placeholder={'Enter Today\'s Task'}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button 
          style={{padding: '5px', letterSpacing: '2px', marginLeft: '5px', fontSize: '16px', outline: '0'}}
          type="submit"
        >
          Create
        </button>
      </form>
      {list.length > 0 &&  (
          <div style={{marginTop: '20px', border: '1px solid #000', padding: '5px'}}>
            <List items={list} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
            <button 
              style={{fontFamily: 'cursive', fontSize: '20px'}}
              onClick={onClearList}
            >
              Clear List
            </button>
          </div>
        )}
    </div>
  );
}
