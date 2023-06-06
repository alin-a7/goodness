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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(dto) {
        const user = await this.userModel.create(Object.assign(Object.assign({}, dto), { rate: 0 }));
        return user;
    }
    async update(dto) {
        const deed = await this.userModel.findById(dto.id);
        deed.name = dto.name;
        await deed.save();
        return deed;
    }
    async delete(id) {
        const user = await this.userModel.findByIdAndDelete(id);
        return user._id;
    }
    async getOne(id) {
        const deed = await this.userModel
            .findById(id)
            .populate('deedList')
            .populate('friends');
        return deed;
    }
    async getAll() {
        const users = await this.userModel
            .find()
            .populate('deedList')
            .populate('friends');
        return users;
    }
    async ratingUpgrade(dto) {
        const user = await this.userModel.findById(dto.id);
        dto.increase ? (user.rate += 1) : (user.rate -= 1);
        await user.save();
        return user;
    }
    async followAndUnfollow(dto) {
        const friend = await this.userModel.findById(dto.friendId);
        const me = await this.userModel.findById(dto.myId);
        if (!me.friends.includes(friend._id)) {
            me.friends = [...me.friends, friend._id];
        }
        else {
            const newFriends = me.friends.filter((myFriend) => myFriend.toString() !== friend._id.toString());
            me.friends = [...newFriends];
        }
        await me.save();
        return me;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map