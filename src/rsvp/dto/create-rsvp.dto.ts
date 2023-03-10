import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateRsvpDto {
    
    @IsString()
    @MaxLength(100)
    readonly name: string;

    @IsString()
    @MaxLength(13)
    readonly phone: string;

    @IsString()
    @IsNotEmpty()
    readonly attend: string;

    @IsString()
    @MaxLength(1)
    readonly from: string;

    @IsNotEmpty()
    @IsNumber()
    @MaxLength(60)
    readonly total: number;
}
