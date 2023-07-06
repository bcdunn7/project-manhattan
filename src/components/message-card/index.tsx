import { component$ } from '@builder.io/qwik'
import { type Message } from '~/app.models'

interface MessageCardProps {
  message: Message
}

export default component$<MessageCardProps>(({ message }) => {
  return <>
    <div class='border rounded bg-gray-100 p-2'>
      <h4 class='text-xl font-bold'>{message.title}</h4>
      <p class='text-gray-700'>From: {message.from}</p>
      <p class='text-gray-700'>To: {message.to}</p>
      <p class='border-t-2 pt-2'>{message.body}</p>
    </div>
  </>
})
