<template>
    <div class="header-search-bar layout-01">
        <form action="#" class="form-search" name="desktop-seacrh" method="get">
            <input type="text" name="s" class="input-text" value="" placeholder="Tìm kiếm ngay...">
            <select name="category" style="display: none;">
                <option value="-1" selected="">All Categories</option> 
                <option 
                    v-for="category in categories" 
                    :key="category.id" 
                    :data-value="category.name"
                >
                    {{ category.name }}
                </option>
            </select>
            <div class="nice-select" tabindex="0">
            <span class="current">All Categories</span>
                <ul class="list">
                    <li value="-1" selected="">All Categories</li> 
                    <li 
                        v-for="category in categories" 
                        :key="category.id" 
                        :data-value="category.name" 
                    >
                        {{ category.name }}
                    </li> 
                </ul>
            </div>
            <button type="submit" class="btn-submit">
                <i class="biolife-icon icon-search"></i>
            </button>
        </form>
    </div>    
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
        }
    },
    setup() {
        return {}
    }
}
</script>

<style>
</style>