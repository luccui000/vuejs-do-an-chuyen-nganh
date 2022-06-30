<template>
    <li 
        class="item" 
    >
        <span 
            :class="{'is-completed': todo.completed}" 
            @click="handleClick"  
        >{{ todo.name }}</span>
        <span
            @click="handleDelete"
        >-</span>
    </li>
</template>

<script>
export default {
    props: ['todo'],
    setup(props, context) { 
        const handleClick = () => {
            context.emit('markItComplete', props.todo.id);
        } 
        const handleDelete = () => { 
            context.emit('deleteTodo', props.todo.id);
        }
        return { 
            handleClick,
            handleDelete
        }
    }
}
</script>
<style>
.item {
	width: 600px; 
	border: 1px solid #ccc;
	padding: 10px 20px;
	cursor: pointer;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
}
.is-completed {
    text-decoration: line-through;
}
.item span:nth-child(2) {
    background-color: #f0f0f0;
    padding: 2px 10px;
    border-radius: 2px;
}
</style>