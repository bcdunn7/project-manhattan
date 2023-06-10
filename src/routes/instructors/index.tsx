import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { BeltRank } from '~/app.models';
import BeltBadge from '~/components/belt-badge';

type Instructor = {
  id: string;
  name: string;
  rank: BeltRank;
}

export const useInstructors = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/instructors');
  return await res.json() as Instructor[];
})

export default component$(() => {
  const instructors = useInstructors();

  return (
    <div>
      <h1>Instructors</h1>
      <ul>
        {instructors.value.map((instructor) => (
          <li class='flex items-center'>
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