<template>
    <li  
        class="menu-item"
        :class="[hasChildren ? 'menu-item-has-children': '',  menuType ]" 
        >
        <a :href="menu.url" class="menu-name" :data-title="menu.name">{{ menu.name }}</a>
        <slot></slot>                  
    </li>
</template>

<script> 
import { computed } from '@vue/runtime-core'
export default { 
    props: {
        menu: {
            type: Object,
            required: true
        } 
    },
    setup(props) {
        const hasChildren = computed(() => props.menu.children.length > 0);
         
        const menuType = computed(() => {
            switch(props.menu.type) {
                case 'menu-1':
                    return 'has-megamenu';
                case 'menu-2':
                    return 'has-child';
            }
        }); 
        
        return {
            hasChildren,
            menuType, 
        }
    }
}
</script>
