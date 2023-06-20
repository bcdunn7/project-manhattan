import { Instructor } from "../instructors/models";
import { Student } from "../students/models";

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export type Course = {
  id: number;
  name: string;
  level: CourseLevel;
  label: string;
  instructor?: Instructor;
  students?: Student[];
}