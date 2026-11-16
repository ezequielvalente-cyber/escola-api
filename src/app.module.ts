import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscolaApiModule } from './escola-api/escola-api.module';
import { AlunoApiModule } from './aluno-api/aluno-api.module';
import { AlunosApiModule } from './alunos-api/alunos-api.module';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [EscolaApiModule, AlunoApiModule, AlunosApiModule, AlunosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
