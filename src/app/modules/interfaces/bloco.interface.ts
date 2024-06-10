export interface BlocoPopulatedInterface
{
  blocoID: number,
  letraBloco: string,
  salas: SalaPopulatedInterface[],
}

export interface SalaPopulatedInterface
{
  salaId: number,
  number: number,
}

export interface BlocoForDropdown
{
  value: BlocoPopulatedInterface,
}
