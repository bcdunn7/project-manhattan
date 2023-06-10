import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Course } from '../models';
import { Student } from '~/routes/students/models';

export const useCourse = routeLoader$(async ({ params }) => {
  const courseRes = await fetch(`http://localhost:3000/courses/${params.courseId}?_expand=instructor`);
  const studentsRes = await fetch(`http://localhost:3000/students?courseId=${params.courseId}`);

  return {
    course: await courseRes.json() as Course,
    students: await studentsRes.json() as Student[]
  };
})

export default component$(() => {
  const courseData = useCourse();

  return (
    <div>
      <h1>Course</h1>

      <span>{courseData.value.course.label}</span>
      <span>{courseData.value.course.name}</span>
      {/* TODO: capitalize */}
      <span class='capitalize'>
        {courseData.value.course.level}
      </span>
      <div>
        {courseData.value.course.instructor?.name}
      </div>
      <div>
        <ul>
          {courseData.value.students.map((student) => {
            return <li>{student.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
})