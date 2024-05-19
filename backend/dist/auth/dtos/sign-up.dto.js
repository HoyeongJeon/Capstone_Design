"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../user/entities/user.entity");
class SignUpDto extends (0, swagger_1.PickType)(user_entity_1.UserModel, [
    'email',
    'password',
    'name',
]) {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: '비밀번호 확인을 입력해주세요.',
    }),
    (0, class_validator_1.IsStrongPassword)({ minLength: 6 }, {
        message: '비밀번호는 최소 6자리에 숫자, 영문 대문자, 영문 소문자, 특수문자가 포함되어야 합니다.',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "passwordConfirm", void 0);
//# sourceMappingURL=sign-up.dto.js.map