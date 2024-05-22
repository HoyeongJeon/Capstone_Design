import { PickType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class SignUpDto extends Dto<SignUpDto> {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty({
    message: '이메일을 입력해주세요.',
  })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: '비밀번호를 입력해주세요.',
  })
  password: string;

  @IsNotEmpty({
    message: '비밀번호 확인을 입력해주세요.',
  })
  // @IsStrongPassword(
  //   {
  //     minLength: 6,
  //   },
  //   {
  //     message:
  //       '비밀번호는 최소 6자리에 숫자, 영문 대문자, 영문 소문자, 특수문자가 포함되어야 합니다.',
  //   },
  // )
  passwordConfirm: string;
}
