const fetchEmployee = async (id) => {
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
    console.log({data})
    return data
}

const getAddressString = (address) => `${address.street}, ${address.suit}, ${address.city}, ${address.zipcode}`

const showInfo = (profile) => {
    const idElement = document.getElementById(`profile-id`)
    const nameElement = document.getElementById(`profile-name`) 
    const emailElement = document.getElementById(`profile-email`) 
    const addressElement = document.getElementById(`profile-address`)  
    const avatarElement = document.getElementById(`profile-avatar`) 
    const companyNameElement = document.getElementById(`profile-company-name`) 
    const companyBSElement = document.getElementById(`profile-company-bs`)
    
    idElement.innerHTML = profile.id
    nameElement.innerHTML = profile.name
    emailElement.innerHTML = profile.email
    addressElement.innerHTML = getAddressString(profile.address)
    companyNameElement.innerHTML = profile.company.name
    companyBSElement.innerHTML = profile.company.bs
    avatarElement.src = `https://api.dicebear.com/6.x/adventurer/svg?seed=Tinkerbell`

}
const main = async () => {
    const random = Math.floor(Math.random() * 10)+1
    const profile = await fetchEmployee(random)
    showInfo(profile)
}

main()