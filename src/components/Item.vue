<template>
  <li :class="{ selected: model.selected }">
    <div :class="{ item: true, selected: model.selected }">
      <input type="checkbox" v-model="model.selected" @click="onClick" />
      {{ model.name }}
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemInterface } from '../models/Item.interface';

export default defineComponent({
  props: {
    model: {
      type: Object as PropType<ItemInterface>,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const onClick = () => {
      emit('select', props.model);
    };

    return {
      onClick,
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
}

.item {
  margin: 4px;
  padding: 10px;
  border: 1px solid #efefef;
}

.selected {
  color: skyblue;
}
</style>
