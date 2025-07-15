import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { InterludesModule } from './interludes/interludes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    InterludesModule,
    OptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
