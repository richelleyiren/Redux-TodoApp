import React from 'react'
import TodoForm from '../components/TodoForm'
import ListItem from '../components/ListItem'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => {
    return (
        <div>
            <section>
                <TodoForm />
                {todos.map((todo, id) => (

                    <ListItem task={todo} key={id} />


                ))}
            </section>
        </div>
    )

}

const mapStateToProps = (state) => ({
    todos: state.todos,
})


export default connect(mapStateToProps)(TodoList)


