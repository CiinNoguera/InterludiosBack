import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InterludesModule } from './interludes/interludes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionsModule } from './options/options.module';
import { HistoryModule } from './history/history.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    InterludesModule,
    OptionsModule,
    HistoryModule,
    UserModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}