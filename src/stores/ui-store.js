import { autorun, observable } from "mobx";

class ToDoStore {
  @observable todos = ["datkom", "bus", "qm", "es", "mbse", "hs"]
  @observable filter = ""
}

var store = window.store = new ToDoStore

export default store

autorun(() => {
  for(let i = 0; i <= store.todos.length; i++){
    console.log(store.todos[i])
  }
})
