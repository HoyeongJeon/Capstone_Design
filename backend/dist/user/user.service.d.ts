import { Repository } from 'typeorm';
import { UserModel } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserModel>);
    findById(id: number): Promise<UserModel>;
}
