import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const { url } = useLocation();
  const isStudentsActive = url.toString().includes('students');
  const isInstructorsActive = url.toString().includes('instructors');
  const isCoursesActive = url.toString().includes('courses');

  return (
    <div class='flex w-full justify-between bg-purple-50 h-20 items-center px-4'>
      <div class='flex items-center gap-4'>
        <img src='/favicon.ico' class='h-8 w-8' />
        <a href='/' class='text-4xl'>
          Frontier Martial Arts
        </a>
      </div>

      <ul class='flex gap-4 text-xl'>
        <a
          href='/students'
          class={`hover:text-purple-600 ${isStudentsActive && 'text-purple-800 font-bold'}`}>
          Students
        </a>
        <a
          href='/instructors'
          class={`hover:text-purple-600 ${isInstructorsActive && 'text-purple-800 font-bold'}`}>
          Instructors
        </a>
        <a
          href='/courses'
          class={`hover:text-purple-600 ${isCoursesActive && 'text-purple-800 font-bold'}`}>
          Courses
        </a>
      </ul>
    </div>
  )
})