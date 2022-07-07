<template>
    <div class="d-flex tab__left--wrapper">
          <div class="nav flex-column tab__left--header" aria-orientation="vertical">
            <button
                v-for="title in titles"
                :key="title"
                class="nav-link tab__left--item"
                :class="{ 'active': title === selectedTab}"
                @click="selectedTab = title"
            >{{ title }}</button>
          </div>
          <div class="tab-content">
              <slot />
          </div>
    </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
    name: "TabLeftWrapper",
    setup(_, { slots }) {
        const titles = ref(slots.default().map(el => el.props.title));
        const selectedTab = ref(titles.value[0]);
        provide("selectedTab", selectedTab);

        return {
            titles,
            selectedTab
        }
    }
}
</script>

<style scoped>
.tab__left--header {
    margin-right: 10px;
}
.tab__left--item {
    border: none;
    margin-bottom: 10px;
    color: #333;
    text-align: left;
    padding: 8px 10px;
    background-color: transparent;
    transition: all .2s linear;
    border-radius: 2px;
    width: 200px;
}
.tab__left--item.active {
    background-color: #e73918;
    color: #fff;
    border-left: #ccc;
}
.tab-content {
    color: #000;
}
</style>
