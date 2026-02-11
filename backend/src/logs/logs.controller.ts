import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { LogService } from "./logs.service";
import { createLogs } from "./dto/create-log.dto"

@Controller('Logs')
export class LogsController {
    constructor(private readonly logService: LogService) { }
    @Post('insert')
    Logs(@Body() logs: createLogs | createLogs[]) {
        return this.logService.insertLogs(logs)
    }

    @Get('search')
    Search(@Query() query: any) {
        return this.logService.searchLog(query)
    }

}