import { component$ } from "@builder.io/qwik";
import { CourseLevel } from "~/routes/courses/models";

type LevelBadgeProps = {
  level: CourseLevel;
}

export default component$<LevelBadgeProps>(({ level }) => {
  let bg = '';
  let text = '';

  if (level === 'beginner') {
    bg = 'bg-green-100'
    text = 'text-green-800'
  } else if (level === 'intermediate') {
    bg = 'bg-orange-100'
    text = 'text-orange-800'
  } else if (level === 'advanced') {
    bg = 'bg-red-100'
    text = 'text-red-800'
  }

  return <div class={`flex justify-center px-2 py-0.5 border rounded capitalize ${bg} ${text}`}>
    {level}
  </div>
})