import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { type Course } from './models'
import CourseCard from '~/components/course-card'
import PageTitle from '~/components/page-title'

export const useCourses = routeLoader$(async ({ params }) => {
  const res = await fetch('http://localhost:3000/courses?_embed=students')
  return await res.json() as Course[]
})

export default component$(() => {
  const courses = useCourses()

  return (
    <div class='w-full m-4'>
      <PageTitle>Courses</PageTitle>

      <div>
        <div class='flex gap-4 m-8 justify-center'>
          {courses.value.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  )
})
