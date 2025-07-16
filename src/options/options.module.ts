import { Module } from '@nestjs/common';
import { OptionsController } from './options.controller';
import { OptionsService } from './options.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Option, OptionSchema } from 'src/schemas/option.schema';
import { Node, NodeSchema } from 'src/schemas/node.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
      { name: Option.name, schema: OptionSchema },
      { name: Node.name, schema: NodeSchema }
      ])
    ],
  controllers: [OptionsController],
  providers: [OptionsService]
})
export class OptionsModule {}
