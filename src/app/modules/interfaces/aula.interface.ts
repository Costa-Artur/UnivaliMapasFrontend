export interface UserInterface
{
  userId: number,
  name: string,
}

export interface MateriaInterface
{
  materiaId: number,
  name: string,
  professor: UserInterface,
}

export interface BlocoInterface
{
  blocoID: number,
  letraBloco: string,
}

export interface SalaInterface
{
  salaId: number,
  number: number,
  bloco: BlocoInterface,
}

export interface AulaInterface
{
  aulaId: number,
  data: string,
  sala: SalaInterface,
  materia: MateriaInterface,
}
