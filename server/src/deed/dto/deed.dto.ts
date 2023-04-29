import { ObjectId } from 'mongoose';

export class CreateDeedDto {
  readonly id: ObjectId;
  readonly text: string;
}

export class UpdateDeedDto {
  readonly isDone: boolean;
  readonly text: string;
  readonly id: ObjectId;
}
