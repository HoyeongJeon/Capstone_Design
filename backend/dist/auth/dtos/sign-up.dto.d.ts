import { Dto } from 'src/lib/dto/Dto';
export declare class SignUpDto extends Dto<SignUpDto> {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}
