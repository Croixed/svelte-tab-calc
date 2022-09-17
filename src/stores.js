import { writable } from "svelte/store";

export const quoteStore = writable([
  {
    id: 1,
    title: 'Tab 1',
    type: null,
    numOne: 0,
    numTwo: 0,
  },
  {
    id: 2,
    title: 'Tab 2',
    type: null,
    numOne: 0,
    numTwo: 0,
  },
  {
    id: 3,
    title: 'Tab 3',
    type: null,
    numOne: 3,
    numTwo: 0,
  },
]);

// placeholder, might move active variable to App or Nav?
export const activeStore = writable(3)

// placeholder, I'll probably use UUIDv4 to generate unique IDs later
export const currentIdStore = writable(4)