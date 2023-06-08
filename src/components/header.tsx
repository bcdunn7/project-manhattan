import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class='flex w-full justify-between bg-gray-100 h-20 items-center'>
      <Link href="/">
        Frontier Marial Arts
      </Link>

      <ul class='flex gap-2'>
        <Link href='/students'>Students</Link>
        <Link href='/instructors'>Instructors</Link>
      </ul>
    </div>
  )
})