import { ObjectId } from 'mongoose';
export declare class CreateDeedDto {
    readonly id: ObjectId;
    readonly text: string;
}
export declare class UpdateDeedDto {
    readonly isDone: boolean;
    readonly text: string;
    readonly id: ObjectId;
}
