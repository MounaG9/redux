import {ADD,DELETE,UPDATE,COMPLETE} from'./types';

export const addTodo=(input)=>{ return{
        type: ADD,
        Payload:input
    
}
}
export const deleteTodo=(id)=>{ return{
    type: DELETE,
    Payload:id 
}

} 
 export const updateTodo=(id)=>{ return{
        type: UPDATE,
        Payload:id
    }}

export const completeTodo=(id)=>{ return{
            type:COMPLETE,
            Payload:id
        }
}