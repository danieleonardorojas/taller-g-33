import {Entity, model, property} from '@loopback/repository';

@model()
export class Propietario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ciudadResidencia?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  listaVehiculos: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  listaNotificaciones?: string[];


  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
