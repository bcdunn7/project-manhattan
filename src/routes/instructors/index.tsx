import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type } from "os";

type Instructor = {
  id: string;
  name: string;
}

export const useInstructors = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/instructors');
  return await res.json() as Instructor[];
})

export default component$(() => {
  const instructors = useInstructors();

  return (
    <div>
      <h1>Instructors</h1>
      <ul>
        {instructors.value.map((instructor) => (
          <li>{instructor.name}</li>
        ))}
      </ul>
    </div>
  )
}); 