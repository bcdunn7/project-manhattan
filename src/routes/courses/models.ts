import { Instructor } from "../instructors/models";

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export type Course = {
  id: number;
  name: string;
  level: CourseLevel;
  label: string;
  instructor?: Instructor;
}