import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonModule } from "./person/person.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import { EventModule } from './event/event.module';
import * as winston from 'winston';
import * as DailyRotateFile from "winston-daily-rotate-file";
import { RelationshipModule } from "./relationship/relationship.module";

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new DailyRotateFile({
          level: "debug",
          filename: "logs/gen-backend-%DATE%.log",
          datePattern: "YYYY-MM-DD-HH",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "14d"
      })
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env', '.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    PersonModule,
    EventModule,
    RelationshipModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
