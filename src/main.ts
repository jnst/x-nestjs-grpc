import {NestFactory} from '@nestjs/core';
import {Transport} from '@nestjs/microservices';
import {join} from 'path';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const protoDir = join(__dirname, '..', 'protos');
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5000',
      package: 'rpc',
      protoPath: '/rpc/rpc.proto',
      loader: {
        keepCase: true,
        longs: Number,
        defaults: false,
        arrays: true,
        objects: true,
        includeDirs: [protoDir],
      },
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}

(async () => await bootstrap())();
