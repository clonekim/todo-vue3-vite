<template>
  <suspense>
    <ItemList />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, reactive, ref } from 'vue';
import { useItemStore } from './store/item';
// import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  components: {
    ItemList: defineAsyncComponent(() => import('./components/ItemList.vue')),
  },

  setup() {
    const text = ref('');
    const itemStore = useItemStore();

    const onSave = () => {
      itemStore.add({
        id: new Date().getTime(),
        name: text.value,
        selected: false,
      });

      text.value = '';
    };

    return {
      text,
      onSave,
    };
  },
};
</script>
