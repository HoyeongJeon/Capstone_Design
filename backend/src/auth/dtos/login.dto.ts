import { PickType } from '@nestjs/swagger';
import { Dto } from 'src/lib/dto/Dto';
import { UserModel } from 'src/user/entities/user.entity';

// export class LogInDto extends PickType(UserModel, [
//   'email',
//   'password',
// ] as const) {}

export class LogInDto extends Dto<LogInDto> {
  email: string;
  password: string;
}
