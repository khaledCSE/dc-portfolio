import type { LoadEvent } from "@sveltejs/kit";


export async function load(event: LoadEvent) {
  const { fetch } = event
  try {
    const res = await fetch(`${process.env.API_BASE}/skills`)
    const data = await res.json()
    return { skills: data }
  } catch (error) {
    console.log(error);
    return { resp: undefined }
  }

}