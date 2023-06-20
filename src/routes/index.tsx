import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Frontier Martial Arts',
  meta: [
    {
      name: 'frontier martial arts',
      content: 'This is a mock martial arts website as a demo'
    }
  ]
}
