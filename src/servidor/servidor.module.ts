import { Module } from '@nestjs/common';
import { ServidorService } from './service/servidor/servidor.service';
import { ServidorController } from './controller/controller.controller';

@Module({
  providers: [ServidorService],
  controllers: [ServidorController]
})
export class ServidorModule {}
