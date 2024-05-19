import { UserModel } from 'src/user/entities/user.entity';
declare const LogInDto_base: import("@nestjs/common").Type<Pick<UserModel, "password" | "email">>;
export declare class LogInDto extends LogInDto_base {
}
export {};
