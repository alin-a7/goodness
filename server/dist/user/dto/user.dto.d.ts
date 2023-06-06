import { ObjectId } from 'mongoose';
export declare class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}
export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class UpdateUserDto {
    readonly name: string;
    readonly id: ObjectId;
}
export declare class FollowAndUnfollowDto {
    readonly myId: ObjectId;
    readonly friendId: ObjectId;
}
export declare class RatingDto {
    readonly id: ObjectId;
    readonly increase: boolean;
}
