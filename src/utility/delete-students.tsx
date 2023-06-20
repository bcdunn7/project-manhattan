import { type Student } from '~/routes/students/models'

export const deleteStudent = async (arg: { name: string }): Promise<void> => {
  console.log('deleteStudent', arg.name)
  await fetch('http://localhost:3000/students').then((resp) => {
    void resp.json().then((people: Student[]) => {
      const personFound = people.find((student: Student) => student.name.toLowerCase() === arg.name.toLowerCase())

      if (personFound != null) {
        void fetch(`http://localhost:3000/students/${personFound.id}`, {
          method: 'DELETE'
        })
      } else {
        console.warn('No person found')
      }
    })
  })
}
