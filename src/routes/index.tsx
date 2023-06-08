import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>
        <h1 class="text-purple-600">Frontier Martial Arts</h1>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Frontier Martial Arts',
  meta: [
    {
      name: 'frontier martial arts',
      content: 'This is a mock martial arts website as a demo',
    },
  ],
};
