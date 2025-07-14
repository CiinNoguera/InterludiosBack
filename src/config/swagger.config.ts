import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "src/app.module";

export function setupSwagger(app: INestApplication) : void {
    const config = new DocumentBuilder()
    .setTitle('Interludios API')
    .setDescription('Historia interactiva de decisiones, caminos y misterios')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config, {
        include:[AppModule],
    });
    SwaggerModule.setup('api', app, document);

}