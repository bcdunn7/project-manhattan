import { component$, $ } from '@builder.io/qwik';
import { BELT_COLORS_BG_TAILWIND } from '~/app.constants';
import { BeltRank } from '~/app.models';

interface BeltBadgeProps {
  rank: BeltRank;
}

export default component$<BeltBadgeProps>((props) => {
  const backgroundColor = BELT_COLORS_BG_TAILWIND[props.rank];

  return (
    <div class='flex items-center justify-center bg-gray-100 border border-gray-200 rounded h-3 w-5 '>
      <div class={`h-2 w-4 ${backgroundColor}`}></div>
    </div>
  )
});