import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { Course } from './models';
import CourseCard from '~/components/course-card';
import PageTitle from '~/components/page-title';

export const useCourses = routeLoader$(async ({ params }) => {
  const res = await fetch(`http://localhost:3000/courses?_embed=students`);
  return await res.json() as Course[];
})

export default component$(() => {
  const courses = useCourses();
  const loc = useLocation();
  // const courseLevel = loc.params.level;

  return (
    <div class='w-full m-4'>
      <PageTitle>Courses</PageTitle>

      <div>
        {/* <div>
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
        </div> */}


        <div class='flex gap-4 m-8 justify-center'>
          {courses.value.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  )
})