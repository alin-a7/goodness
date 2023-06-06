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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeedSchema = exports.Deed = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongosse = require("mongoose");
const user_schema_1 = require("../../user/user.schema");
let Deed = class Deed {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Deed.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Deed.prototype, "isDone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'User' }] }),
    __metadata("design:type", user_schema_1.User)
], Deed.prototype, "authorId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Deed.prototype, "comments", void 0);
Deed = __decorate([
    (0, mongoose_1.Schema)()
], Deed);
exports.Deed = Deed;
exports.DeedSchema = mongoose_1.SchemaFactory.createForClass(Deed);
//# sourceMappingURL=deed.schema.js.map