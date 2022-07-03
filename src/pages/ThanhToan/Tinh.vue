<template>
    <select class="form-control" @change="handleTinhChange">
        <option
            v-for="tinh in tinhs"
            :key="tinh.id"
            :value="tinh.id"
        >{{ tinh.name }}</option>
    </select>
</template>

<script>
export default {
    name: "Tinh",
    props: ['tinhs'],
    setup(_, { emit }) {
        const handleTinhChange = (e) => {
            emit('thaydoitinh', e.target.value)
        }
        return {
            handleTinhChange
        }
    }
};
</script>

<style scoped>

</style>