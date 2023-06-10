import { component$, $ } from '@builder.io/qwik';
import { BeltRank } from '~/app.models';

interface BeltBadgeProps {
  rank: BeltRank;
}

export default component$<BeltBadgeProps>((props) => {
  const BELT_COLORS_BG_TAILWIND = {
    white: 'bg-white',
    yellow: 'bg-yellow-300',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    brown: 'bg-amber-950',
    'brown-2': 'bg-amber-950',
    red: 'bg-red-600',
    'red-2': 'bg-red-600',
    'red-3': 'bg-red-600',
    'black-temp': 'bg-black',
    'black-1': 'bg-black',
    'black-2': 'bg-black',
    'black-3': 'bg-black',
    'black-4': 'bg-black',
    'black-5': 'bg-black',
    'black-6': 'bg-black',
    'black-7': 'bg-black',
    'black-8': 'bg-black',
  }

  const backgroundColor = BELT_COLORS_BG_TAILWIND[props.rank];

  return (
    <div class='flex items-center justify-center bg-gray-100 border border-gray-200 rounded h-3 w-5 '>
      <div class={`h-2 w-4 ${backgroundColor}`}></div>
    </div>
  )
});