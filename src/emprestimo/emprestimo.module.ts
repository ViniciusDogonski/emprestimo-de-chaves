import { Module } from '@nestjs/common';
import { EmprestimoController } from './controller/controller.controller';
import { EmprestimoService } from './service/emprestimo/emprestimo.service';

@Module({
  controllers: [EmprestimoController],
  providers: [EmprestimoService]
})
export class EmprestimoModule {}
