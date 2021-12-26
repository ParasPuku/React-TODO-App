import { useState } from 'react';
import "./styles.css";
import Lists from './Lists';

export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [edit, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(name && edit){
      setList(list.map((item) => {
        if(item.id === editID) {
          return {...item, title: name};
        }
        return item;
      })
      );
    setName('');
    setEditing(false);
    setEditID(null);
    } else {
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList({...list, newItem});
      setName('');
    }
  }

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setEditID(id);
    setEditing(true);
    setName(editItem.title);
  }

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  }

  const onClearList = () => {
    setList([]);
  }

  return (
    <div className="App">
      <h1>React TODO App</h1>
      <h3>TODO list using Locale Storage</h3>
      <div className="wrapper">
        <form onSubmit={onHandleSubmit} >
        <input
          type="text"
          style={{
            padding: '5px', 
            fontSize: '16px',
            fontFamily: 'sans-serif', 
            letterSpacing: '2px', 
            outline: '0',
            border: '2px solid blue'
          }}
          placeholder={'Enter Todays Task'}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button 
          style={{padding: '5px', letterSpacing: '2px', marginLeft: '5px', fontSize: '16px', outline: '0', border: '2px solid blue'}}
        >
          Create
        </button>
      </form>
      {list.length > 0 && (
          <div 
            style={{
              marginTop: '20px', 
              border: '1px solid #000', 
              padding: '5px'
            }}>
            <Lists items={list} editItem={editItem} deleteItem={deleteItem} />
            <button 
              style={{fontFamily: 'cursive', fontSize: '20px'}}
              onClick={onClearList}
            >
              Clear List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
