"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmModuleOptions = void 0;
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.typeOrmModuleOptions = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: +configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USERNAME'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        synchronize: configService.get('DB_SYNC'),
        autoLoadEntities: true,
        logging: true,
    }),
};
//# sourceMappingURL=database.config.js.map