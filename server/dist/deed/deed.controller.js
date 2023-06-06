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
exports.DeedController = void 0;
const common_1 = require("@nestjs/common");
const deed_service_1 = require("./deed.service");
const deed_dto_1 = require("./dto/deed.dto");
const comment_dto_1 = require("./dto/comment.dto");
let DeedController = class DeedController {
    constructor(deedService) {
        this.deedService = deedService;
    }
    create(dto) {
        return this.deedService.create(dto);
    }
    update(dto) {
        return this.deedService.update(dto);
    }
    delete(id) {
        return this.deedService.delete(id);
    }
    getOne(id) {
        return this.deedService.getOne(id);
    }
    getAll() {
        return this.deedService.getAll();
    }
    addComment(dto) {
        return this.deedService.addComment(dto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deed_dto_1.CreateDeedDto]),
    __metadata("design:returntype", void 0)
], DeedController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deed_dto_1.UpdateDeedDto]),
    __metadata("design:returntype", void 0)
], DeedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeedController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeedController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeedController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/comment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], DeedController.prototype, "addComment", null);
DeedController = __decorate([
    (0, common_1.Controller)('/deed'),
    __metadata("design:paramtypes", [deed_service_1.DeedService])
], DeedController);
exports.DeedController = DeedController;
//# sourceMappingURL=deed.controller.js.map