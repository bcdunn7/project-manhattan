import { component$ } from '@builder.io/qwik';
import { routeLoader$, } from '@builder.io/qwik-city';
import BeltBadge from '~/components/belt-badge';
import { Student } from './models';
import PageTitle from '~/components/page-title';

export const useStudents = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/students');
  return await res.json() as Student[];
})

export default component$(() => {
  const students = useStudents();

  return (
    <div class='m-4'>
      <PageTitle>Students</PageTitle>

      <ul>
        {students.value.map((student) => (
          <li class='flex items-center'>
            <span>{student.name}</span>
            <BeltBadge rank={student.rank} />
          </li>
        ))}
      </ul>
    </div>
  )
})