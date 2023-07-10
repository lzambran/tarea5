import { Module } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';
import { TecnicoController } from './tecnico.controller';

@Module({
  controllers: [ TecnicoController ],
  providers: [ TecnicoService ]
})
export class TecnicoModule {}
