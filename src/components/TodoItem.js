import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

   getstyle = () =>{
      return{
         background : "#f4f4f4",
         padding: "10px",
         borderBottom: "1px #ccc dotted",
         textDecoration: this.props.todo.completed ?
         "line-through" : "none"
      }
   }
   render(){
      const {id, title, completed} = this.props.todo

      return(
         <div style={this.getstyle()}>
            <input type='checkbox' 
            defaultChecked={completed}
            onChange= {this.props.markCompleted.bind(this, id)}
            style ={{ marginRight : '5px'}}/>{""}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
         </div>
      )
   }
}
   TodoItem.propTypes = {
      todo : PropTypes.object.isRequired,
      markCompleted : PropTypes.func.isRequired
   };

   const btnStyle = {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right",
    };
export default TodoItem;