import React, {useState} from 'react';
import {Input, Button, AppBar, Toolbar, Typography} from '@material-ui/core';

const TodoListForm = (props) => {

    const [inpVal, newInpVal] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.addTask(inpVal)
            newInpVal('')
        }
    }



    return (
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography>
                        <input type="text" value={inpVal} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => {
                            newInpVal(e.target.value)

                        }}/>
                        <Button color="primary" onClick={() => {
                            props.addTask(inpVal)
                            newInpVal('')
                        }}>Ok</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TodoListForm;



