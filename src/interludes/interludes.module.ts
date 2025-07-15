import { Module } from '@nestjs/common';
import { InterludesController } from './interludes.controller';
import { InterludesService } from './interludes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Node, NodeSchema } from 'src/schemas/node.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: Node.name, schema: NodeSchema }
    ])
  ],
  controllers: [InterludesController],
  providers: [InterludesService]
})
export class InterludesModule {}
