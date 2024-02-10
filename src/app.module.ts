import { Module, Get } from "@nestjs/common";
import { AppController } from "./app.controller";


@Module({
    controllers: [AppController]
})

export class AppModule {}

