import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}
