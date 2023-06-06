/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ObjectId } from 'mongoose';
import { UserService } from './user.service';
import { CreateUserDto, FollowAndUnfollowDto, RatingDto, UpdateUserDto } from './dto/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(dto: CreateUserDto): Promise<import("./user.schema").User>;
    update(dto: UpdateUserDto): Promise<import("./user.schema").User>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
    getOne(id: ObjectId): Promise<import("./user.schema").User>;
    getAll(): Promise<import("./user.schema").User[]>;
    ratingUpgrade(dto: RatingDto): Promise<import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument> & Omit<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    followAndUnfollow(dto: FollowAndUnfollowDto): Promise<import("./user.schema").User>;
}
