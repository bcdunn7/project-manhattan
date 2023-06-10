import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { Course } from './models';

export const useCourses = routeLoader$(async ({ params }) => {
  const res = await fetch(`http://localhost:3000/courses${params.level ? '?' + params.level : ''}`);
  return await res.json() as Course[];
})

export default component$(() => {
  const courses = useCourses();
  const loc = useLocation();
  const courseLevel = loc.params.level;

  return (
    <div>
      <h1>Courses</h1>

      <div>
        <div>
          <a
            href='/courses'
            class={!courseLevel ? 'text-red-600' : 'cursor-pointer'}>
            All
          </a>
          <a
            href='/courses?level=beginner'
            class={courseLevel === 'beginner' ? 'text-red-600' : 'cursor-pointer'}
          >
            Beginner
          </a>
          <a
            href='?level=intermediate'
            class={courseLevel === 'intermediate' ? 'text-red-600' : 'cursor-pointer'}
          >
            Intermediate
          </a>
          <a
            href='/courses?level=advanced'
            class={courseLevel === 'advanced' ? 'text-red-600' : 'cursor-pointer'}>
            Advanced
          </a>
        </div>


        <ul>
          {courses.value.map((course) => (
            <a href={`${course.id}`}>
              <li class='flex items-center'>
                <span>{course.label}</span>
                <span>{course.name}</span>
                {/* TODO: capitalize */}
                <span class='capitalize'>
                  {course.level}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>

  )
})