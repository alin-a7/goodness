import { ObjectId } from "mongoose";

export class CreateDeedDto {
    readonly isDone: boolean;
    readonly author: string;
    readonly text: string;
}

export class UpdateDeedDto {
    readonly isDone: boolean;
    readonly text: string;
    readonly deedId: ObjectId
}