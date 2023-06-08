import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class='flex w-full justify-between bg-gray-100 h-20 items-center px-4'>
      <div class='flex items-center gap-4'>
        <img src="/favicon.ico" class='h-8 w-8' />
        <Link href="/">
          Frontier Marial Arts
        </Link>
      </div>

      <ul class='flex gap-2'>
        <Link href='/students'>Students</Link>
        <Link href='/instructors'>Instructors</Link>
      </ul>
    </div>
  )
})