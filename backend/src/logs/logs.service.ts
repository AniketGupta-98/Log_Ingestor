import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Log } from "./schemas/log.schema";
import { createLogs } from "./dto/create-log.dto";
import { timeStamp } from "console";

@Injectable()
export class LogService {
    constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

    async insertLogs(logs: createLogs | createLogs[]) {
        const data = Array.isArray(logs) ? logs : [logs];
        return this.logModel.insertMany(
            data.map(i => ({ ...i, timeStamp: new Date(i.timeStamp) })), { ordered: false }
        )
    }

    async searchLog(queryParams: any) {
        const {
            level,
            message,
            resourceId,
            traceId,
            spanId,
            commit,
            parentResourceId,
            startTime,
            endTime
        } = queryParams
        const query: any = {}
        if (level) query.level = level;
        if (resourceId) query.resourceId = resourceId;
        if (traceId) query.traceId = traceId;
        if (spanId) query.spanId = spanId;
        if (message) query.message = message;
        if (commit) query.level = commit;
        if (parentResourceId) query['metaData.parentResourceId'] = parentResourceId;
        if (startTime || endTime) {
            query.timeStamp = {}
            if (startTime) query.timeStamp.$gte = new Date(startTime)
            if (endTime) query.timeStamp.$lte = new Date(endTime)
        }


        return this.logModel.find(query).sort({ timeStamp: -1 })


    }




}