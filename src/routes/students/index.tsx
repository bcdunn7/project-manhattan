import { component$ } from "@builder.io/qwik";
import { routeLoader$, } from "@builder.io/qwik-city";

type Student = {
  id: string;
  name: string;
}

export const useStudents = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/students');
  return await res.json() as Student[];
})

export default component$(() => {
  const students = useStudents();

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.value.map((student) => (
          <li>{student.name}</li>
        ))}
      </ul>
    </div>
  )
})