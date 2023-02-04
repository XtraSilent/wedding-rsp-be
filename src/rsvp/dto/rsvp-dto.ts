import { MaxLength, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class RsvpDto {
    
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    phone: string;

    @IsBoolean()
    attend: boolean;

    @IsString()
    from: string;

    @IsNotEmpty()
    @IsNumber()
    total: number;
}