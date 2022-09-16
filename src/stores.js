import { writable } from "svelte/store";

export const quoteStore = writable([
  {
    id: 1,
    title: 'Tab 1',
  },
  {
    id: 2,
    title: 'Tab 2',
  },
  {
    id: 3,
    title: 'Tab 3',
  },
]);

// placeholder, might move active variable to App or Nav?
export const activeStore = writable(3)

// placeholder, I'll probably use UUIDv4 to generate unique IDs later
export const currentIdStore = writable(4)