<template>
    <div class="tab-head">
        <ul class="tabs">
            <li
                v-for="tab in tabTitles"
                :key="tab"
                class="tab-element cursor-pointer"
                :class="{ 'active' : selectedTab === tab }"
                @click="selectedTab = tab"
            >
                {{ tab }}
            </li>
        </ul>
    </div>
    <div class="tab-content">
        <slot></slot>
    </div>
</template>

<script>
import { provide, reactive, ref } from "vue";

export default {
    name: "TabWrapper",
    setup(_, { slots }) {
        const tabTitles = reactive(slots.default().map(tab => tab.props.title));
        const selectedTab = ref(tabTitles[0]);

        provide("selectedTab", selectedTab);

        return {
            tabTitles,
            selectedTab
        }
    }
};
</script>

<style scoped>

.tabs {
    list-style-type: none;
    border-bottom: 2px solid #e6e6e6;
    padding: 5px 0;
}

.tab-element {
    font-family: "Cairo", sans-serif;
    font-size: 16px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    color: #222222;
    margin-right: 20px;
    position: relative;
}
.tabs li.active::before {
    content: '';
    position: absolute;
    height: 3px;
    display: block;
    bottom: -6px;
    left: 0;
    transition: all 550ms ease;
    width: 127px;
    background-color: #e73918;
}
</style>