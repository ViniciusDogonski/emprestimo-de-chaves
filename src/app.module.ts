import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 

import { ChaveModule } from './chave/chave.module';
import { ChaveSchema } from './chave/chave.model/chave.model';
import { ChaveController } from './chave/controller/chave.controller';
import { ChaveService } from './chave/service/chave/chave.service';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { EmprestimoSchema } from './emprestimo/emprestimo.model/emprestimo.model';
import { EmprestimoController } from './emprestimo/controller/controller.controller';
import { EmprestimoService } from './emprestimo/service/emprestimo/emprestimo.service';
import { ServidorModule } from './servidor/servidor.module';
import { ServidorSchema } from './servidor/servidor.model/servidor.model';
import { ServidorController } from './servidor/controller/controller.controller';
import { ServidorService } from './servidor/service/servidor/servidor.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    //ChaveModule,
    MongooseModule.forFeature([{name: 'Chave', schema : ChaveSchema}]),
    MongooseModule.forFeature([{ name: 'Emprestimo', schema: EmprestimoSchema }]),
    MongooseModule.forFeature([{ name: 'Servidor', schema: ServidorSchema }]),
  ],
  controllers: [AppController,ChaveController,EmprestimoController,ServidorController],
  providers: [AppService,ChaveService,EmprestimoService,ServidorService],
  
})
export class AppModule {}
