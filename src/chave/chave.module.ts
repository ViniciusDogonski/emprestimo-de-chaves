import { Module } from '@nestjs/common';
import { ChaveController } from './controller/chave.controller'; 
import { ChaveService } from './service/chave/chave.service'; 



@Module({
  controllers: [ChaveController],
  providers: [ChaveService]
})
export class ChaveModule {}
