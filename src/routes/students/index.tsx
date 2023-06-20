import { component$ } from '@builder.io/qwik';
import { routeLoader$, } from '@builder.io/qwik-city';
import BeltBadge from '~/components/belt-badge';
import { Student } from './models';
import PageTitle from '~/components/page-title';
import { BELT_RANK_ORDER } from '~/app.constants';

export const useStudents = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/students');
  return await res.json() as Student[];
})

export default component$(() => {
  const students = useStudents();

  return (
    <div class='m-4'>
      <PageTitle>Students</PageTitle>

      <ul class='flex flex-wrap'>
        {students.value.sort((a, b) => {
          return BELT_RANK_ORDER[a.rank] - BELT_RANK_ORDER[b.rank]
        }).map((student) => (
          <li class='flex items-center my-2 text-lg gap-1 w-56' key={student.id}>
            <span>{student.name}</span>
            <BeltBadge rank={student.rank} />
          </li>
        ))}
      </ul>
    </div>
  )
})