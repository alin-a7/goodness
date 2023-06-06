"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeedService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const deed_schema_1 = require("./schemas/deed.schema");
const comment_schema_1 = require("./schemas/comment.schema");
const user_schema_1 = require("../user/user.schema");
let DeedService = class DeedService {
    constructor(deedModel, commentModel, userModel) {
        this.deedModel = deedModel;
        this.commentModel = commentModel;
        this.userModel = userModel;
    }
    async create(dto) {
        const deed = await this.deedModel.create(Object.assign(Object.assign({}, dto), { isDone: false, authorId: dto.id }));
        const author = await this.userModel.findById(dto.id);
        author.deedList.push(deed._id);
        await author.save();
        return deed;
    }
    async update(dto) {
        const deed = await this.deedModel.findById(dto.id);
        deed.text = dto.text;
        deed.isDone = dto.isDone;
        await deed.save();
        return deed;
    }
    async delete(id) {
        const deed = await this.deedModel.findByIdAndDelete(id);
        return deed._id;
    }
    async getOne(id) {
        const deed = await this.deedModel
            .findById(id)
            .populate('comments')
            .populate('authorId');
        return deed;
    }
    async getAll() {
        const deeds = await this.deedModel.find().populate('authorId');
        return deeds;
    }
    async addComment(dto) {
        const deed = await this.deedModel.findById(dto.deedId);
        const comment = await this.commentModel.create(Object.assign({}, dto));
        deed.comments.push(comment);
        await deed.save();
        return deed;
    }
};
DeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(deed_schema_1.Deed.name)),
    __param(1, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DeedService);
exports.DeedService = DeedService;
//# sourceMappingURL=deed.service.js.map