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
import { DeedService } from './deed.service';
import { CreateDeedDto, UpdateDeedDto } from './dto/deed.dto';
import { CreateCommentDto } from './dto/comment.dto';
export declare class DeedController {
    private deedService;
    constructor(deedService: DeedService);
    create(dto: CreateDeedDto): Promise<import("./schemas/deed.schema").Deed>;
    update(dto: UpdateDeedDto): Promise<import("./schemas/deed.schema").Deed>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
    getOne(id: ObjectId): Promise<import("./schemas/deed.schema").Deed>;
    getAll(): Promise<import("./schemas/deed.schema").Deed[]>;
    addComment(dto: CreateCommentDto): Promise<import("./schemas/deed.schema").Deed>;
}
