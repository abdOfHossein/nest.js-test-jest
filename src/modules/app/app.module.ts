import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from '../user/user.module';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UserEnt} from "../user/entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const options: TypeOrmModuleOptions = {
                    type: 'postgres',
                    host: '127.0.0.1',
                    port: 5432,
                    database: 'user',
                    username: 'postgres',
                    password: '774936188',
                    entities: [UserEnt],
                    synchronize: true,
                }
                return options;
            },
            dataSourceFactory: async (options) => {
                const dataSource = await new DataSource(options).initialize();
                return dataSource;
            },
        }), UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
