import { writable } from "svelte/store";

export const QuoteStore = writable([
  {
    id: 1,
    title: 'tab 1',
  },
  {
    id: 2,
    title: 'tab 2',
  },
  {
    id: 3,
    title: 'tab 3',
  },
]);