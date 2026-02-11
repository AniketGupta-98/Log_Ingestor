import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Log extends Document {
    @Prop({ index: true })
    level: string;
    @Prop({ text: true })
    message: string;
    @Prop({ index: true })
    resourceId: string;
    @Prop({ index: true })
    timeStamp: Date;
    @Prop({ index: true })
    traceId: String;
    @Prop({ index: true })
    spanId: string;
    @Prop({ index: true })
    commit: string;
    @Prop({
        type: {
            parentResourceId: { type: String, index: true }
        }
    })
    metaData: {
        parentResourceId: string;
    }
}

export const LogSchema = SchemaFactory.createForClass(Log)