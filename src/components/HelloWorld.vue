<template>
	<div>
		
	</div>
	<div class="list">
		<todo-item 
			v-for="todo in todos" 
			:key="todo.id" 
			:todo="todo" 
			@markItComplete="handleMarkItComplete"
			@deleteTodo="handleDeleteTodo"
			/>  
	</div>   
</template>

<script>
import { computed } from '@vue/reactivity'; 
import TodoItem from './TodoItem.vue'; 
import { useStore } from "vuex" 
import * as actionPost from "../store/mutations-type/post"

export default {
  components: { TodoItem }, 
	setup() {   
		const store = useStore(); 
		// console.log(counter);
		const todos =  computed(() => store.getters.getAllPost);  
	
		
		const handleMarkItComplete = (id) => {
			todos.value.forEach(todo => {
				if(todo.id === id) {
					todo.completed = !todo.completed;
				}
			});
		} 	 
		const handleDeleteTodo = (id) => {
			const payload = {
				id: id
			}; 
			store.dispatch([actionPost.DELETE_POST], payload)
		}   
		return {
			todos,  
			handleMarkItComplete,
			handleDeleteTodo,   
		};
	}
}
</script> 

<style>
.list {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
} 
</style>