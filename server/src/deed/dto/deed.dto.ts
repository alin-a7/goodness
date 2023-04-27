import { ObjectId } from "mongoose";

export class CreateDeedDto {
    readonly authorId: ObjectId;
    readonly text: string;
}

export class UpdateDeedDto {
    readonly isDone: boolean;
    readonly text: string;
    readonly deedId: ObjectId
}