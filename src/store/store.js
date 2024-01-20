import Vue from 'vue'
import Vuex from 'vuex'
import { updateTodoInLocalStorage,getTodoFromLocalStorage } from '../helper/updateLocalStorage';


Vue.use(Vuex)


const store = new Vuex.Store({
    state : {
        todoList : getTodoFromLocalStorage(),
    },
    actions : {
        addTodo : function({commit,state}, newTodo){
            let newTodoWithStatus = {
                id : state.todoList.length,
                todo : newTodo,
                status : false,
            };

            commit('addTodoMutation',newTodoWithStatus)
            updateTodoInLocalStorage(state.todoList)
        },
        updateTodoStatus : function({commit,state}, idToUpdate){
            commit('updateTodoStatusMutation', idToUpdate)
            updateTodoInLocalStorage(state.todoList)
        },
        deleteTodo : function({commit,state},idToDelete){
            commit('deleteTodoMutation',idToDelete)
            updateTodoInLocalStorage(state.todoList)
        },
        updateAllTodoStatus: function({commit,state}){
            let cntDoneTodo = state.todoList.reduce((accumulator,curTodo) => {
                return accumulator + (curTodo.status === true);
            },0);
            let curTodoLength = state.todoList.length;
            if(cntDoneTodo == curTodoLength) {
                commit('updateAllTodoStatusToFalseMutation')
            } else {
                commit('updateAllTodoStatusToTrueMutation')
            }
            updateTodoInLocalStorage(state.todoList)
        }
    },
    mutations : {
        addTodoMutation : function(state,newTodoWithStatus){
            state.todoList.push(newTodoWithStatus)
        },
        updateTodoStatusMutation : function(state,idToUpdate){
            state.todoList[idToUpdate].status = !state.todoList[idToUpdate].status
        },
        deleteTodoMutation : function(state,idToDelete){
            state.todoList = state.todoList.filter(item => item.id != idToDelete)
            state.todoList.forEach((item,index) =>{
                state.todoList[index].id = index;
            } )
        },
        updateAllTodoStatusToTrueMutation: function(state){
            state.todoList.forEach((item)=>{
                item.status = true
            })
        },
        updateAllTodoStatusToFalseMutation : function(state){
            state.todoList.forEach((item) => {
                item.status = false;
            })
        }
    },
    getters : {
        //name it as noun 
        doneTodo : function(state){
            return state.todoList.filter(todo => todo.status)
        },
        pendingTodo : function(state){
            return state.todoList.filter(todo => !todo.status)
        },
        allTodo : function(state){
            return state.todoList;
        }
        
    }
})

export default store;