
const BASE_URL = 'https://644667f90431e885f0110f5f.mockapi.io'

export const fetchContacts = async () => {
    const allContacts = await fetch(`${BASE_URL}/contacts`)
    return await allContacts.json()
}