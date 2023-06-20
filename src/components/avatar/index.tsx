import { component$ } from "@builder.io/qwik";
import { BELT_COLORS_BORDER_TAILWIND } from "~/app.constants";
import { Person } from "~/app.models";

type AvatarProps = {
  person: Person;
}

export default component$<AvatarProps>((props) => {
  const constructInitials = (name: string) => {
    const splitName = name.split(' ');
    return `${splitName[0]?.charAt(0)}${splitName[1]?.charAt(0)}`
  }

  const initials = constructInitials(props.person.name);
  const borderColor = BELT_COLORS_BORDER_TAILWIND[props.person.rank];

  return (
    <div class={`flex justify-center items-center h-10 w-10 border-4 rounded ${borderColor}`}>
      {initials}
    </div>
  )
})