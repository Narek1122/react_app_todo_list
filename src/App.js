
import TodoList from "./Components/TodoList";
import TodoListForm from "./Components/TodoListForm";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getData,setData,addTodoListData,deleteTodoListData,updateTodoListData} from './actions/TodoListAction'
import axios from "axios";
import {Input, Button, GridList, GridListTile, Typography,Box} from '@material-ui/core';

function App() {
    const dispatch = useDispatch()
    const data = useSelector(getData)


    useEffect(() =>{
        axios.get(process.env.REACT_APP_API_URL + '/getdata')
            .then((res) =>{
                dispatch(setData(res.data.data))
            })



    },[])

    function addTask(data){
        let today = new Date();
        let milliseconds = today.getTime() + Math.floor(Math.random() * 1000);
        let dat = {
            id:milliseconds,
            task:data
        }
        if(data != ''){
            dispatch(addTodoListData(dat))
            axios.post(process.env.REACT_APP_API_URL + '/add_task',dat)
                .then((res) => console.log(res))
        }


    }



    function deleteTask(id){
        let delDat = data.filter((item) => {
            return item.id != id
        })
        dispatch(deleteTodoListData(delDat))
        axios.delete(process.env.REACT_APP_API_URL + '/deletedata/'+ id)
            .then((res) => console.log(res))
            .catch((e) => {
                console.log(e)
            })
    }

    function getChangedTaskName(dat,id){
         for(let i =0;i<data.length;i++){
             if(data[i].id == id){
                 data[i].task = dat
             }
             dispatch(updateTodoListData(data))
         }

        axios.patch(process.env.REACT_APP_API_URL + '/changetaskname/'+ id,{task:dat})
            .then((res) => console.log(res))
            .catch((e) => {
                console.log(e)
            })


    }

    let itemsToRender
    if (data) {

        itemsToRender = data.map(item => {
            return <TodoList
                data={item}
                key={item.id}
                deleteTask={deleteTask}
                getChangedTaskName={getChangedTaskName}


            >

            </TodoList>

        })
    };

  return (
      <div className={'container'}>
        <div >
            <TodoListForm
                addTask={addTask}
            >

            </TodoListForm>
        </div>
          <div>
              {itemsToRender}
          </div>
         

      </div>

  );
}

export default App;
