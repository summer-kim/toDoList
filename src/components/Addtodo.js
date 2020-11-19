  
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

   state = {
      title : ''
   }

   onSubmit = (e) =>{
      e.preventDefault();
      this.props.AddTodo(this.state.title);
      this.setState({title : ''})
   }

   onChange = (e) => this.setState({ [e.target.name] : e.target.value})
   

   render(){
      return(
      <form onSubmit = {this.onSubmit} style = {{display : 'flex'}}>
         <input 
         type ='text'
         placeholder ="Add to do.."
         style = {{flex: '10', padding: "5px"}}
         onChange ={this.onChange}
         name = {'title'}
         value = {this.state.title}
         />
         <input
         type = "submit"
         value = "submit"
         style = {{flex : 1}}
         className = 'btn'
         />
      </form>
      )
   }
}

AddTodo.propTypes = {
   addTodo: PropTypes.func.isRequired
}

export default AddTodo;