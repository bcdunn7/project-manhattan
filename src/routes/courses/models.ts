import { type Instructor } from '../instructors/models'
import { type Student } from '../students/models'

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Course {
  id: number
  name: string
  level: CourseLevel
  label: string
  instructor?: Instructor
  students?: Student[]
}
