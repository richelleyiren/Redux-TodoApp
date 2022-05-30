import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { createTodo, deleteTodo, updateTodo } from '../store/actions/actions-index'


//styled component
const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 5px 8px grey;
  position: relative;
  padding:0.9em 2em;
  display: flex;
  margin-left: 26.5rem;
  margin-bottom: 2rem;
  margin-top:2em;
  align-items: center;
  justify-content: space-between;
  width: 41%;
  border:solid black 1px;
  background-color: paleturquoise;
`;


  

const Button = styled.button`
  padding: 11px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left:1em;
  ${(props) =>
    props.completed &&
    css`
      background-color: green;
      color: white;
    `}

    

  ${(props) =>
    props.delete &&
    css`
      background-color: red;
      color: white;
    `}
`;


const ListItem = ({ task, deleteTodo, updateTodo }) => {

  const[ upd, setUpd] = useState('')

  const delFunc = ()=>{
    deleteTodo(task.text)
    
  }
   
  return (
    <Wrapper>

      <h3>{task.text}</h3>
      <div>

        {task.isCompleted ? <Button completed onClick={() => updateTodo(task.text)} > Done</Button> : <Button completed onClick={() => updateTodo(task.text)}> Pending</Button>}
        
        {/* <Button completed onClick={updFunc}>
          {task && !task.isCompleted === true ? "pending" : "done"}
        
        </Button> */}
        <Button delete onClick={delFunc}>Delete</Button>

      </div>


    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  Alltasks: state.todos,
})


const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (text) => dispatch(deleteTodo(text)),
    updateTodo: (text) => dispatch(updateTodo(text))
    
    
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateTodo: (text) => dispatch(updateTodo(text))
//   }

// }
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
