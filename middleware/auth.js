import { isLogged } from "~/services/userService"

export default ({route, store, redirect}) => {
    const user = isLogged()
    if(!user) redirect('/login')
}