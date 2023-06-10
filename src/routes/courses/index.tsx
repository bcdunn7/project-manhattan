import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

type Course = {
  id: number;
  level: CourseLevel;
  label: string;
}

export const useCourses = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/courses');
  return await res.json() as Course[];
})

export default component$(() => {
  const courses = useCourses();

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.value.map((course) => (
          <li class='flex items-center'>
            <span>{course.label}</span>
            {/* TODO: capitalize */}
            <span class='capitalize'>
              {course.level}
            </span>
          </li>
        ))}
      </ul>
    </div>

  )
})