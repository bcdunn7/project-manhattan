import { deleteStudent } from "./utility/delete-students";

export const globalFunctionMap = {
  log: (message: string) => console.log(message),
  deleteStudent: deleteStudent,
}