import { Module } from "@nestjs/common";
import { RelationshipController } from "./relationship.controller";
import { RelationshipService } from "./relationship.service";
import { RelationshipSchema } from "./schemas/relationship.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Relationship", schema: RelationshipSchema }]),
  ],
  controllers: [RelationshipController],
  providers: [RelationshipService],
})
export class RelationshipModule {}
