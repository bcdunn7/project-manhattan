import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return <h2 class='text-3xl mb-4'><Slot /></h2>
})