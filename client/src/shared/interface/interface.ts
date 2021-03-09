export interface ILoginCredentials {
  username : string,
  password : string
}

export interface ICreateNewUser {
  username: string,
  password: string,
  age?: number
}