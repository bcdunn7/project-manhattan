import { getCourse } from './get-course'
import { getStudent } from './get-student'

export const addStudentToCourse = async (arg: { studentName: string, courseName: string }): Promise<void> => {
  console.log('addStudentToCourse')

  const student = await getStudent({ name: arg.studentName })
  const course = await getCourse({ name: arg.courseName })

  if (student === null) {
    console.warn('No Student found')
  } else if (course === null) {
    console.warn('No Course found')
  } else {
    void fetch(`http://localhost:3000/students/${student.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        courseId: course.id
      })
    })
  }
}
