import React, {useState} from 'react';
import {  Input,Button} from '@material-ui/core';
const TodoListChangeTaskName = (props) => {
    const [inpVal, newInpVal] = useState('')

    return (
        <div>
            <Input type="text" value={inpVal} onChange={(e) => {
                newInpVal(e.target.value)
            }}/>
            <Button onClick={() => props.getChangedTaskName(inpVal)}>ok</Button>
        </div>
    );
};

export default TodoListChangeTaskName;