import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { LogInDto } from './dtos/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signUpDto: SignUpDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            accessToken: string;
        };
    }>;
    login(req: any, logInDto: LogInDto): {
        statusCode: HttpStatus;
        message: string;
        data: {
            accessToken: string;
        };
    };
}
