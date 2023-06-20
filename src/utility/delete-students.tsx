import { Person } from "~/app.models";
import { Student } from "~/routes/students/models";

export const deleteStudent = async (arg: { name: string }) => {
  console.log('deleteStudent', arg.name);
  await fetch(`http://localhost:3000/students`).then((resp) => {
    resp.json().then((people: Student[]) => {
      console.log({ people })
      const personFound = people.find((student: Student) => student.name.toLowerCase() === arg.name.toLowerCase());

      console.log({ personFound })

      if (personFound) {

        fetch(`http://localhost:3000/students/${personFound.id}`, {
          method: 'DELETE',
        });
      } else {
        console.warn('No person found')
      }
    })
  });
}