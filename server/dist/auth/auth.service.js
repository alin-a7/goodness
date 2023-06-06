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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        return user;
    }
    async registration(userDto) {
        const users = await this.userService.getAll();
        const candidate = users.filter(({ email }) => email === userDto.email)[0];
        if (candidate) {
            throw new common_1.HttpException('A user with this email exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.create(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return user;
    }
    async validateUser(userDto) {
        const users = await this.userService.getAll();
        const user = users.filter(({ email }) => email === userDto.email)[0];
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({
            message: 'Incorrect email or password',
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map