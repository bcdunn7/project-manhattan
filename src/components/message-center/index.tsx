import { component$, useSignal } from '@builder.io/qwik'
import { type Message } from '~/app.models'
import MessageCard from '../message-card'

export default component$(() => {
  const isMessageCenterOpen = useSignal(false)
  const mockMessages: Message[] = [
    {
      id: 100,
      from: 'Suzi Nanako',
      to: 'Steven Howe',
      title: 'Dropping',
      body: 'Hi Mr. Howe. I am dropping out of your course and stepping away from martial arts entirely, I think I might try tennis.'
    },
    {
      id: 101,
      from: 'Edi Valko',
      to: 'Steven Howe',
      title: 'Ready for the next level!',
      body: 'Hi Mr. Howe. I think I am ready for a challenge and would love to join your upcoming class for developing krav maga skills.'
    }
  ]

  return <>
    <button onClick$={() => { isMessageCenterOpen.value = !isMessageCenterOpen.value }} class='h-12 w-12 border rounded-full bg-purple-400 flex items-center justify-center text-white group transition'>
      <div class='group-hover:scale-125 transition'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      </div>
    </button>
    {
      isMessageCenterOpen.value && <div class='absolute bg-white border rounded drop-shadow-2xl top-24 right-8 w-96 h-5/6 p-2'>
        <h3 class='text-3xl mb-4 text-purple-700'>Messages</h3>
        <div class='flex flex-col gap-2'>
          {mockMessages.map((message) =>
            <MessageCard message={message} />
          )}
        </div>
      </div>
    }
  </>
})
