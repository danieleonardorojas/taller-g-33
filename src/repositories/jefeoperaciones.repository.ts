import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Jefeoperaciones, JefeoperacionesRelations} from '../models';

export class JefeoperacionesRepository extends DefaultCrudRepository<
  Jefeoperaciones,
  typeof Jefeoperaciones.prototype.idJefeoperaciones,
  JefeoperacionesRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Jefeoperaciones, dataSource);
  }
}
