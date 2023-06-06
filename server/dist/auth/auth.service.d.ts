import { UserService } from '../user/user.service';
import { CreateUserDto, LoginUserDto } from '../user/dto/user.dto';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    login(userDto: LoginUserDto): Promise<import("../user/user.schema").User>;
    registration(userDto: CreateUserDto): Promise<import("../user/user.schema").User>;
    private validateUser;
}
