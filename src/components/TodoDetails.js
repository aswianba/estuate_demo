
import DataTableCustom from '../components/DataTable';
import callAxios from '../api/api';
import { useSelector ,useDispatch} from "react-redux";
import React,{useEffect,useState} from 'react';
import { InlineLoading} from 'carbon-components-react';
import { TextInput,Dropdown ,Button} from 'carbon-components-react';
import updateTodo from '../actions/updateTodo';


const  TodoDetails = ({details}) => {

let initialValue = {userId:"",title:"",completed:""}
const [data , setData] = useState(details||initialValue);
const [modified,setModified] = useState(true);
const {updating}= useSelector((state)=>state.fetchTodoReducer);
const dispatch = useDispatch();



useEffect(()=>{
    if(details!==null)
    setData(details)
},[details])

useEffect(()=>{
    if(details && data  && (data.userId !=details.userId || data.title !=details.title || data.completed !=details.completed)){
        setModified(false);
    }else{
        setModified(true);
    }
},[data])

const handleUpdate = ()=>{
  dispatch(updateTodo(data));
  setModified(true)
}
  return (<>
  
   <div >
    <TextInput
      
      id="userId"
      invalidText="A valid value is required"
      labelText="User Id"
      placeholder="Placeholder text"
      value={data.userId}
      disabled={true}
      onChange={(e)=>setData({...data, userId:e.target.value})}
     
    />
    <TextInput
      
      id="title"
      invalidText="A valid value is required"
      labelText="Title"
      placeholder="title"
      value={data.title}
      onChange={(e)=>setData({...data, title:e.target.value})}
    />
     <Dropdown
      ariaLabel="Dropdown"
      id="completed"
      items={[{id:true,text:"true"},{id:false,text:"false"}]}
      itemToString={(item) => (item ? item.text : '')}
      titleText="Completed"
      onChange={({ selectedItem }) =>setData({...data, completed:selectedItem.id})}
      selectedItem={{id:data.completed,text:data.completed.toString()}}

    />
 
  <Button size="sm" disabled={modified} onClick={handleUpdate}>{updating&&modified ?<InlineLoading description="Saving..."/> :"Save" }</Button>
  </div>
     </>
   
  );
}

export default TodoDetails;
