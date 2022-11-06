import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  idplaca: string;

  @property({
    type: 'string',
  })
  marca?: string;

  @property({
    type: 'number',
  })
  modelo?: number;

  @property({
    type: 'number',
  })
  capacidad?: number;

  @property({
    type: 'string',
  })
  cilindraje?: string;

  @property({
    type: 'string',
  })
  paisorigen?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
