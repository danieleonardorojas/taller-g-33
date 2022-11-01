import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  placa?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'number',
    required: true,
  })
  modelo: number;

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
  paisOrigen?: string;

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
