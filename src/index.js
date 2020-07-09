import React from 'react';
import ReactDOM from 'react-dom';

const GroceryList  = (props) => {
  return (<ul>
    {props.groceries.map(item => 
      <GroceryListItems items={item} />
    )}
  </ul>)
}

// GroceryList컴포넌트에 들어갈 list를 class형식으로
class GroceryListItems extends React.Component{
  constructor (props){
    super(props);

    this.state = {
      done: false,
      isHovering: false
    };
  }

  listClick(){
    this.setState({
      done: !this.state.done
    }); // list를 클릭하면 상태가 바뀐다
  }

  listHover(){
    this.setState({
      isHovering: !this.state.isHovering
    })
  }

  render(){
    const style = {
      textDecoration : this.state.done ? 'line-through' : 'none',
      fontWeight : this.state.isHovering ? 'bold' : 'normal'
    } //textDecoration를 textDeco이런식으로하면 안됨
    // 클릭할때마다 바뀌는 state에 따라 글자에 선이 생겼다 사라졌다 계속바뀜
    // const bold = {
    //   fontWeight : this.state.isHovering ? 'bold' : 'normal'
    // }

    return (
      <ul>{console.log(this)} 
        <li style={style}
          onMouseEnter={this.listHover.bind(this)}
          onMouseLeave={this.listHover.bind(this)}
          onClick={this.listClick.bind(this)}
        >
          {this.props.items}
        </li>
      </ul>
    )
  }
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