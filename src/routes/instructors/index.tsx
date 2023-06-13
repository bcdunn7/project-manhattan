import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import BeltBadge from '~/components/belt-badge';
import { Instructor } from './models';
import PageTitle from '~/components/page-title';

export const useInstructors = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/instructors');
  return await res.json() as Instructor[];
})

export default component$(() => {
  const instructors = useInstructors();

  return (
    <div class='m-4'>
      <PageTitle>Instructors</PageTitle>

      <ul>
        {instructors.value.map((instructor) => (
          <li class='flex items-center m-2 text-2xl'>
            🧙
            <span>
              {instructor.name}
            </span>
            <BeltBadge rank={instructor.rank} />
          </li>
        ))}
      </ul>
    </div>
  )
}); 