import { component$ } from "@builder.io/qwik";
import { Course } from "~/routes/courses/models";
import LevelBadge from "../level-badge";
import avatar from "../avatar";
import Avatar from "../avatar";
import students from "~/routes/students";

type CourseCardProps = {
  course: Course;
}

export default component$<CourseCardProps>(({ course }) => {
  return (
    <div class='flex flex-col justify-between h-56 w-56 border border-gray-400 rounded bg-white p-2'>
      <div>
        <div class='flex justify-between mb-1'>
          <div class='flex justify-center bg-gray-100 border rounded px-2 py-0.5'>
            {course.label}
          </div>
          <LevelBadge level={course.level} />
        </div>
        <div class='text-xl h-16'>{course.name}</div>
        {course.instructor?.id && <span>{course.instructor.name}</span>}
        <hr class='mb-2' />
        <div class='flex gap-1 flex-wrap'>
          {course.students?.length ? course.students.map((student) => {
            return <Avatar person={student} key={student.id} />
          }) : 'No Students Enrolled 😔'}
        </div>
      </div>

      <a class='block text-right hover:underline' href={`${course.id}`}>Check Out Course</a>
    </div>
  )
})