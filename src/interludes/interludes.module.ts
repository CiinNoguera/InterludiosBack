import { Module } from '@nestjs/common';
import { InterludesController } from './interludes.controller';
import { InterludesService } from './interludes.service';

@Module({
  controllers: [InterludesController],
  providers: [InterludesService]
})
export class InterludesModule {}
