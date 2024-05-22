import { UserModel } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dtos/sign-up.dto';
import { ConfigService } from '@nestjs/config';
import { LogInDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly configService;
    private readonly jwtService;
    constructor(userRepository: Repository<UserModel>, configService: ConfigService, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<{
        data: string;
    }>;
    logIn(userId: number): {
        data: string;
    };
    validateUser(logInDto: LogInDto): Promise<UserModel>;
}
