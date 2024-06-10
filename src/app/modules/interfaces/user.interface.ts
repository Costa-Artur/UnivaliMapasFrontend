export interface LoggedUserInterface
{
  userId: number,
  name: string,
  codigoPessoa: string,
  cpf: string,
  token: string
}

export interface loginInterface
{
  codigoPessoa: string,
  password: string
}

export interface loginResponseInterface
{
  token: string
}
