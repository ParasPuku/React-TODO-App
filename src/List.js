
export default function List({items, onEditTask, onDeleteTask}) {
  console.log('Lists..', items)
  return(
    <div className="container">
      <ul style={{listStyleType: 'none'}}>  
        {items.map((item) => {
            const {id, title} = item;
            console.log(title)
            return (
              <li 
                style={{
                  listStyleType: 'none', 
                  border: '1px solid grey',
                  padding: '5px',
                  paddingLeft: '10px',
                  width: '300px',
                  margin: '0 auto',
                  textAlign: 'left',
                  marginBottom: '10px',
                  letterSpacing: '2px'
              }}>
                {title}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}