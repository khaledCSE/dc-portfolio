export async function load({ cookies, fetch }) {
  const token = cookies.get('token')

  const res = await fetch(`${process.env.API_BASE}/users/dashboard`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await res.json()

  console.log('data: ', data);


  return { data }
}