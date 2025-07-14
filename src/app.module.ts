import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterludesModule } from './interludes/interludes.module';

@Module({
  imports: [InterludesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
