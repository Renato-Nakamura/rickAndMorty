let users = []
export const createUser = (userName, password, route) => {
  const user = {
    userName,
    password,
    favorites: [],
  }
  users.push(user)
  localStorage.setItem('userRaM', JSON.stringify(user))
  route.push('/')
  // getUser(username,password,route)
}

export const getUser = (userName, password, route) => {
  const user = users.find((user) => user.userName == userName)
  if (!user) {
    console.log('erro Usuário não encontrado')
    return { message: 'Usuário não encontrado' }
  }

  if (user.password == password) {
    localStorage.setItem('userRaM', JSON.stringify(user))
    route.push('/')

    return user
  }
  console.log('erro Senha incorreta')
  return { message: 'Senha incorreta' }
}

export const isLogged = () => {
  return JSON.parse(localStorage.getItem('userRaM'))
}
