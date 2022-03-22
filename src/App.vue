<template>
  <div class="home">
    <ItemList :items="items" />
    <div>
      <input type="text" v-model="text" />
      <button @click="onSave">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import ItemList from './components/ItemList.vue';
import { useItemStore } from './store/item';

export default defineComponent({
  name: 'App',
  components: {
    ItemList,
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
      items: itemStore.items,
    };
  },
});
</script>
