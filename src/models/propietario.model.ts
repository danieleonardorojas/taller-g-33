import {Entity, model, property} from '@loopback/repository';

@model()
export class Propietario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idpropietario?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  apellidos?: string;

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
  ciudadresidencia: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  listavehiculos?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  listanotificaciones?: string[];


  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
