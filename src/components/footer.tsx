import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class='flex bg-purple-50 w-full h-12 items-center justify-between px-4'>
      Made by Bryce Dunn
      <div class='flex items-center gap-4'>
        <span>Made With: OpenAI's ChatGPT, Qwik, Tailwind, Node, Express, Json-Server</span>
      </div>
    </div>
  )
})