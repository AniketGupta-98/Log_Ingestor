import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LogsController } from "./logs.controller";
import { LogService } from "./logs.service";
import { Log, LogSchema } from "./schemas/log.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])
    ],
    controllers: [LogsController],
    providers: [LogService]
})
export class LogsModule { }