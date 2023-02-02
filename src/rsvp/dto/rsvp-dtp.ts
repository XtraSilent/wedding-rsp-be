import { MaxLength, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class RsvpDto {
    
    @IsString()
    readonly id: string;

    @IsString()
    @MaxLength(100)
    readonly name: string;

    @IsString()
    @MaxLength(13)
    readonly phone: string;

    @IsBoolean()
    readonly attend: boolean;

    @IsString()
    @MaxLength(1)
    readonly from: string;

    @IsNotEmpty()
    @IsNumber()
    @MaxLength(60)
    readonly total: number;
}