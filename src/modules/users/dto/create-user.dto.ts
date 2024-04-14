import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(1)
    first_name: string;

    @IsString()
    @MinLength(1)
    last_name: string;

    @IsEmail()
    @MinLength(1)
    email: string;

    @IsString()
    @MinLength(1)
    rol: string;

    @IsString()
    @MinLength(6)
    password: string;
}
