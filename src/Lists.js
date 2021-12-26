import React from 'react';
export default function Lists({ items, editItem, deleteItem }) {
  console.log('Lists..', items)
  return (
    <div className="container">
      <ul>
        {items.map((item, i) => {
          const { id, title } = item;
          return (
            <li 
              style={{
                listStyleType: 'none',
                border: '1px solid grey',
                backgroundColor: 'lightcyan',
                padding: '5px',
                paddingLeft: '10px',
                width: '300px',
                margin: '0 auto',
                textAlign: 'left',
                marginBottom: '10px',
                letterSpacing: '2px'
              }}
              key={i}
            >
            {title}
            <div style={{float: 'right'}}>
              <button
                style={{
                  color: 'lightgreen',
                  backgroundColor: 'white',
                  fontSize: '16px',
                  border: '1px solid green',
                  marginRight: '5px'
                }}
                onClick={() => editItem(id)}
              >
              Edit
              </button>
              <button
                style={{
                  color: 'red',
                  backgroundColor: 'white',
                  fontSize: '16px',
                  border: '1px solid red',
                }}
                onClick={() => deleteItem(id)}
              >
              Delete
              </button>
            </div>
            </li>
          )
        })

        }
      </ul>
    </div>
  );
}