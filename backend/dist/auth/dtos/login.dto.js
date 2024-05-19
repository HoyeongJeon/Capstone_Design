"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
class LogInDto extends (0, swagger_1.PickType)(user_entity_1.UserModel, [
    'email',
    'password',
]) {
}
exports.LogInDto = LogInDto;
//# sourceMappingURL=login.dto.js.map