export class createLogs {
    level: String;
    message: String;
    resourceId: String;
    timeStamp: String | any;
    traceId: String;
    spanId: String;
    commit: String;
    metaData: {
        parentResourceId: String;
    };
}