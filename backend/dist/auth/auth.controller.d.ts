import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signUpDto: SignUpDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            data: string;
        };
    }>;
    login(req: any): {
        statusCode: HttpStatus;
        message: string;
        data: {
            accessToken: string;
        };
    };
}
