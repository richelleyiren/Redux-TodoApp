import React, { useState } from 'react'
import "../design.scss"
import { connect } from 'react-redux'
import { createTodo } from '../store/actions/actions-index'
import { GiNotebook} from "react-icons/gi"

//connect is for connecting the store to the component
const TodoForm = ({ All, addTodo }) => {
  const [input, setInput] = useState('')
  return (
    <div className="all">
      <h2> Plan your day! <span><GiNotebook/></span></h2>
      <div className="main-card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!input}
          onClick={() => {
            addTodo(input);
            setInput("");
          }}
        >
          Add Task{" "}
        </button>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  All: state.todos,
})

// dispatching the reducer content

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(createTodo(text))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)