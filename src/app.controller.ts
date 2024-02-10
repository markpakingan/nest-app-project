import { Controller, Get } from "@nestjs/common";


@Controller("/app")

export class AppController {
    @Get("hi")
    getRootRoute() {
        return 'hi there! EJ & Baby <3';
    }

    @Get("hello")
    getByeThere(){
        return "bye there!"
    }
}
