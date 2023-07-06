import { getStudent } from './get-student'

export const deleteStudent = async (arg: { name: string }): Promise<void> => {
  console.log('deleteStudent', arg.name)

  const student = await getStudent(arg)

  if (student != null) {
    void fetch(`http://localhost:3000/students/${student.id}`, {
      method: 'DELETE'
    })
  } else {
    console.warn('No person found')
  }
}
