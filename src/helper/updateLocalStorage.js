import {TODO_LIST_KEY} from '../constants/localStorage'

export const updateTodoInLocalStorage = (todoList) => {
    localStorage.setItem(TODO_LIST_KEY,JSON.stringify(todoList))
}
export const getTodoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(TODO_LIST_KEY))
}






