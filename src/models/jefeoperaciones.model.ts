import {Entity, model, property} from '@loopback/repository';

@model()
export class Jefeoperaciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idJefeoperaciones?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'date',
    required: true,
  })
  fechanacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasenia: string;

  @property({
    type: 'string',
    required: true,
  })
  tipousuario: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelestudio: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  sede?: string[];


  constructor(data?: Partial<Jefeoperaciones>) {
    super(data);
  }
}

export interface JefeoperacionesRelations {
  // describe navigational properties here
}

export type JefeoperacionesWithRelations = Jefeoperaciones & JefeoperacionesRelations;
