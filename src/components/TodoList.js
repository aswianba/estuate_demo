
import DataTableCustom from '../components/DataTable';
import { useSelector } from "react-redux";
import React from 'react';
import { InlineLoading} from 'carbon-components-react';

const  TodoList = (props) => {

  const todoData= useSelector((state)=>state.fetchTodoReducer);

  const columns = [{
    key: 'userId',
    header: 'User Id',
  },
  {
    key: 'title',
    header: 'Title',
  },{
    key: 'completed',
    header: 'Completed',
  }]

  return (<div>
     {todoData.inProgress?<InlineLoading description="Loading..." /> : <DataTableCustom rows={todoData.todoList}headers={columns}onEdit={(id)=>props.handleEdit(id)}/>}
     </div>
   
  );
}

export default TodoList;
