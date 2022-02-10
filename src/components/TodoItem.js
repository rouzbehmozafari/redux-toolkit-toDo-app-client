import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/todoSlice';
import { removeTodo } from '../redux/todoSlice';
const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()
	const [tick,setTick] = useState(completed)
	const done = ()=>{
		dispatch(status({completed : !completed,id : id}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onClick={done} checked={completed}></input>
					{title}
				</span>
				<button onClick={()=> dispatch(removeTodo(id))} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
