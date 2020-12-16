import React,{useEffect, useState} from 'react';
import TodoList from './components/TodoList';
import { useDispatch } from "react-redux";
import fetchTodo from './actions/fetchTodo';
import { Grid, Row, Column } from 'carbon-components-react';
import TodoDetails from './components/TodoDetails';


const  App = () => {
  const dispatch = useDispatch();
  const [selectedRow,setSelectedRow] = useState(null);

useEffect(()=>{
  dispatch(fetchTodo());
},[]);

const handleEdit =(selectedRow) =>{
  setSelectedRow(selectedRow)
}

  return (
    <div className="App">
      <Grid>
      <Row>
        <Column lg={7}> <TodoList handleEdit={handleEdit} /></Column>
        <Column lg={5}><TodoDetails details={selectedRow}/></Column>
      </Row>
    </Grid>
    
    </div>
  );
}

export default App;
