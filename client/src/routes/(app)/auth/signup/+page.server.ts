/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, fetch }) => {
    const formData = await request.formData()

    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const res = await fetch(`${String(process.env.API_BASE)}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      await res.json()
      // console.log(data);

      return {
        message: 'Successfully Signed Up! Please Login'
      }
    } catch (err) {
      console.error(err);
      return { error: err }
    }
  }
}