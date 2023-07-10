import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TecnicoModule } from './tecnico/tecnico.module';

@Module({
  imports: [TecnicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
