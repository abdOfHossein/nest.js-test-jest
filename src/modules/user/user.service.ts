import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEnt} from "./entities/user.entity";
import {DataSource} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEnt)
        private dataSource: DataSource
    ) {
    }

    async create(createUserDto: CreateUserDto) {
        try {
            const userEnt = new UserEnt();
            userEnt.first_name = createUserDto.first_name;
            userEnt.last_name = createUserDto.last_name;
            userEnt.password = createUserDto.password;
            userEnt.username = createUserDto.username;
            return await this.dataSource.manager.save(userEnt);
        } catch (e) {
            console.log(e)
            throw  e
        }

    }

    async findAll() {
        try {
            return await this.dataSource.manager.find(UserEnt, {})
        } catch (e) {
            console.log(e)
            throw  e
        }

    }

    async findOne(id: string) {
        try {
            return await this.dataSource.manager.findOne(UserEnt, {where: {id}})
        } catch (e) {
            console.log(e)
            throw  e
        }

    }


    async update(id: string, updateUserDto: UpdateUserDto) {
        try {
            const entity = await this.dataSource.manager.findOne(UserEnt, {where: {id}})
            entity.first_name = updateUserDto.first_name;
            entity.last_name = updateUserDto.last_name;
            entity.password = updateUserDto.password;
            entity.username = updateUserDto.username;
            return await this.dataSource.manager.save(entity);
        } catch (e) {
            console.log(e)
            throw  e
        }

    }

    async remove(id: string) {
        try {
            const user = await this.dataSource.manager.findOne(UserEnt, {where: {id}})
            return await this.dataSource.manager.softRemove(user);
        } catch (e) {
            console.log(e)
            throw  e
        }

    }
}
