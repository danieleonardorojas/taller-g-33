import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://codeccouser:admin@clustercodecco.eayzk1k.mongodb.net/bd_g_33?retryWrites=true&w=majority',
  //url: 'mongodb%2Bsrv%3A%2F%2Fcodeccouser%3Aadmin%40clustercodecco.eayzk1k.mongodb.net%2Fbd_g_33%3FretryWrites%3Dtrue%26w%3Dmajority',
  //url: 'mongodb+srv://codeccouser:admin@clustercodecco.eayzk1k.mongodb.net/bd_g_33?retryWrites=true&w=majority',
  host:'',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
