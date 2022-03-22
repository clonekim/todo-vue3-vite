<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <Item
        v-for="item in items"
        :key="item.id"
        :model="item"
        @select="onItemSelect" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemInterface } from '../models/Item.interface';
import Item from './Item.vue';

export default defineComponent({
  components: { Item },

  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
    },
  },

  setup() {
    const onItemSelect = (item: ItemInterface) => {
      item.selected = !item.selected;
      console.log('onItemSelect', item.id, item.selected);
    };

    return {
      onItemSelect,
    };
  },
});
</script>
