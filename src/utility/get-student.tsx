import { type Student } from '~/routes/students/models'

export const getStudent = async (arg: { name: string }): Promise<Student | null> => {
  console.log('getStudent', arg.name)

  return await fetch('http://localhost:3000/students').then(async (resp) => {
    return await resp.json().then((people: Student[]) => {
      const personFound = people.find((student: Student) => student.name.toLowerCase() === arg.name.toLowerCase())

      return personFound ?? null
    })
  })
}
