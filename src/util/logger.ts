import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        //new winston.transports.File({ filename: "debug.log", level: "debug" })
        new DailyRotateFile({
            level: "debug",
            filename: "logs/gen-backend-%DATE%.log",
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d"
        })
    ]
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;
