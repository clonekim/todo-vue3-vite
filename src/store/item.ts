import { defineStore } from 'pinia';
import { ItemInterface } from '../models/Item.interface';

const initState = [
  { id: 1, name: 'Item 1', selected: false },
  { id: 2, name: 'Item 2', selected: false },
  { id: 3, name: 'Item 3', selected: true },
  { id: 4, name: 'Item 4', selected: false },
];

export type RootState = {
  items: ItemInterface[];
};

export const useItemStore = defineStore('itemStore', {
  state: () => {
    return {
      items: initState as ItemInterface[],
    };
  },

  actions: {
    add(data: ItemInterface) {
      this.items.push(data);
    },
  },
});
