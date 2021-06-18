import React, {useState} from 'react';
import { Checkbox , Button, AppBar,Toolbar,Typography, Input} from '@material-ui/core';
import TodoListChangeTaskName from './TodoListChangeTaskName'
import axios from "axios";

const TodoList = (props) => {

    const [openClose,newOpenClose] = useState(false)
    const [checkboxBol,newCheckboxBol] = useState(false)

    function openCloseSettings(){
        if(openClose){
            return (
                <TodoListChangeTaskName
                    getChangedTaskName={getChangedTaskName}
                />
            )
        }
    }

    function getChangedTaskName(data){
        props.getChangedTaskName(data,props.data.id)
        newOpenClose(false)
    }

    function taskData(){
        return checkboxBol ? <del>{props.data.task}</del> : props.data.task
    }

    return (
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar className={checkboxBol ? 'bg-warning' : ''}>
                    <Typography align="center" >
                        <Checkbox onClick={() => newCheckboxBol(!checkboxBol)}/> {taskData()}
                        <Button color="primary" onClick={() => props.deleteTask(props.data.id)}>Delete</Button>
                        <Button onClick={() => newOpenClose(!openClose)} color='secondary'>Change Task Name</Button>
                    </Typography>
                    {openCloseSettings()}
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default TodoList;