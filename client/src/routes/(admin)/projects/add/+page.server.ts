/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect, type LoadEvent } from "@sveltejs/kit";
import type { Actions } from "./$types";

export async function load(event: LoadEvent) {
  const { fetch } = event
  try {
    const skillRes = await fetch(`${process.env.API_BASE}/skills`)
    const skills = await skillRes.json()

    return { skills }
  } catch (error) {
    console.log(error);
    return { resp: undefined }
  }

}

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const formData = await request.formData()
    const projectName = formData.get('projectName')
    const projectDescription = formData.get('projectDescription')
    const skills = JSON.parse(formData.get('skills')!.valueOf() as string)
    const techStack = formData.get('techStack')!.toString().split(',').map((el) => el.trim())

    const skillRes = await fetch(`${process.env.API_BASE}/skills`)
    const skillData = await skillRes.json()

    const mappedSkills: any = []
    for (let i = 0; i < skills.length; i++) {
      skillData.forEach((sk: any) => {
        if (sk.name === skills[i]) {
          mappedSkills.push(sk._id)
        }
      })
    }

    const token = cookies.get('token')

    const payload = { projectName, projectDescription, skills: mappedSkills, techStack };

    const res = await fetch(`${process.env.API_BASE}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })

    await res.json()

    redirect(301, '/projects')
  }
}