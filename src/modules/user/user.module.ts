import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEnt} from "./entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserEnt])],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule {
}
