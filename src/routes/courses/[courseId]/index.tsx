import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Course } from '../models';
import { Student } from '~/routes/students/models';
import PageTitle from '~/components/page-title';
import LevelBadge from '~/components/level-badge';

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
    <div class='m-4 w-full'>
      <PageTitle>Course</PageTitle>

      <a href='/courses' class='hover:underline'>Back to Course List</a>

      <div class='w-full px-64'>
        <div class='flex items-center gap-2'>
          <div class='text-2xl'>{courseData.value.course.name}</div>
          <div class='flex justify-center bg-gray-100 border rounded px-2 py-0.5'>
            {courseData.value.course.label}
          </div>
          <LevelBadge level={courseData.value.course.level} />
        </div>
        <div class='my-4 text-lg'>
          Instructor: {courseData.value.course.instructor?.name}
        </div>
        <div class='my-4 text-lg'>
          Students{
            !!courseData.value.students.length
            && ` (${courseData.value.students.length})`
          }:
          {
            courseData.value.students.length
              ? <ul>
                {courseData.value.students.map((student) => {
                  return <li>- {student.name}</li>
                })}
              </ul>
              : ' None 😭'
          }
        </div>
      </div>
    </div>
  )
})