import { writable } from "svelte/store";

export const quoteStore = writable([
  {
    title: 'Tab 1',
    id: 1,

    type: null,
    material: '',

    quantity: 0,
    height: 0,
    width: 0,
    depth: 0,

    desc: '',
    req: '',
  },
  {
    title: 'Tab 2',
    id: 2,

    type: null,
    material: '',

    quantity: 0,
    height: 0,
    width: 0,
    depth: 0,

    desc: '',
    req: '',
  },
  {
    title: 'Tab 3',
    id: 3,

    type: null,
    material: '',

    quantity: 0,
    height: 0,
    width: 0,
    depth: 0,

    desc: '',
    req: '',
  },
]);

// placeholder, might move active variable to App or Nav?
export const activeStore = writable(3)

// placeholder, I'll probably use UUIDv4 to generate unique IDs later
export const currentIdStore = writable(4)