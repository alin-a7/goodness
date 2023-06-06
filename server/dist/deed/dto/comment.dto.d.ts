import { ObjectId } from 'mongoose';
export declare class CreateCommentDto {
    readonly author: string;
    readonly text: string;
    readonly deedId: ObjectId;
}
