import Types from "./Types"
export const AddTodoItem = (item) =>{
    return{
        type:Types.Add_ToDo,
        payload:item
    }
}

export const RemoveTodoItem = (item) =>{
    return{
        type:Types.Remove_Todo,
        payload:item
    }
}

export const EditTodoItem = (item) =>{
    return{
        type:Types.Edit_Todo,
        payload:item
    }
}

export const ImportantTodoItem = (item,id) =>{
    return{
        type:Types.Priority,
        payload:item,

    }
}

export const RemoveImportantItem = (item) =>{
    return{
        type:Types.Important,
        payload:item
    }
}