export type Person = {
  id: number;
  name: string;
  rank: BeltRank;
}

export type BeltRank =
  | 'white'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'blue'
  | 'green'
  | 'brown'
  | 'brown-2'
  | 'red'
  | 'red-2'
  | 'red-3'
  | 'black-temp'
  | 'black-1'
  | 'black-2'
  | 'black-3'
  | 'black-4'
  | 'black-5'
  | 'black-6'
  | 'black-7'
  | 'black-8';
