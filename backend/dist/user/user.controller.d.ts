import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    myProfile(req: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./entities/user.entity").UserModel;
    }>;
}