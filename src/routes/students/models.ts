import { Person } from "~/app.models";

export type Student = Person & { courseId: number | null};