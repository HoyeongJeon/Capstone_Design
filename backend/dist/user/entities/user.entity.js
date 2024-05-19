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
exports.UserModel = void 0;
const class_validator_1 = require("class-validator");
const base_entity_1 = require("../../common/entities/base.entity");
const typeorm_1 = require("typeorm");
let UserModel = class UserModel extends base_entity_1.BaseModel {
};
exports.UserModel = UserModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: '이메일을 입력해주세요.',
    }),
    (0, class_validator_1.IsEmail)({}, {
        message: '이메일 형식에 맞게 입력해주세요.',
    }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: '이름을 입력해주세요.',
    }),
    (0, class_validator_1.IsString)({
        message: '이름은 문자열로 입력해주세요.',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserModel.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: '비밀번호를 입력해주세요.',
    }),
    (0, class_validator_1.IsStrongPassword)({ minLength: 6 }, {
        message: '비밀번호는 최소 6자리에 숫자, 영문 대문자, 영문 소문자, 특수문자가 포함되어야 합니다.',
    }),
    (0, typeorm_1.Column)({
        select: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
exports.UserModel = UserModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UserModel);
//# sourceMappingURL=user.entity.js.map