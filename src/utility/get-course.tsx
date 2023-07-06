import { type Course } from '~/routes/courses/models'

export const getCourse = async (arg: { name: string }): Promise<Course | null> => {
  console.log('getCourse', arg.name)

  return await fetch('http://localhost:3000/courses').then(async (resp) => {
    return await resp.json().then((courses: Course[]) => {
      const courseFound = courses.find((course: Course) => course.name.toLowerCase() === arg.name.toLowerCase())

      return courseFound ?? null
    })
  })
}
