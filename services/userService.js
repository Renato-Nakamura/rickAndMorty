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
    console.log('erro Usuário não encontrado', user)
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
  if (!users.length) {
    localStorage.removeItem('userRaM')
    return null
  }
  return JSON.parse(localStorage.getItem('userRaM'))
}

export const addFavorite = (charId) => {
  const user = isLogged()
  const index = users.findIndex((u) => u.userName == user.userName)
  console.log(index, users[index].favorites.includes(charId))
  if (users[index].favorites.includes(charId)) console.log('já tem')
  if (index > -1) users[index].favorites.push(charId)
  console.log(users[index])
  localStorage.setItem('userRaM', JSON.stringify(users[index]))

  return users[index]
}
