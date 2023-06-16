export const deleteStudent = async (studentId: number) => {
  console.log('deleteStudent', studentId);
  await fetch(`http://localhost:3000/students/${studentId}`, {
    method: 'DELETE',
  });
}