import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
	const {todosList} = useSelector((state)=> state.todos)
	const completedOnes = todosList.filter(i => i.completed == true)
	return <h4 className='mt-3'>Total Complete Items: {completedOnes.length}</h4>;
};

export default TotalCompleteItems;
