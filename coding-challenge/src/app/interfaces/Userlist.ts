export interface Userlist {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
interface UserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: AddressLocation
}
interface AddressLocation {
    lat: string,
    lng: string
}