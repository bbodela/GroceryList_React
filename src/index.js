import React from 'react';
import ReactDOM from 'react-dom';

const GroceryList  = (props) => {
  const listItemClick = (e) => {
    alert('clicked!');
  }
  return (<ul>
    {props.groceries.map(item => <li onClick={listItemClick}>{item}</li>)}
  </ul>)
}

const App = () => (
  <div>
    <h1>My Grocery List</h1>
    <GroceryList
      groceries={[
        'Kale', 'Cucumbers', 'Cabage'
      ]} />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));