import {IsNotEmpty, IsString } from 'class-validator';

export class AttendanceRsvpDto {
    
    @IsString()
    @IsNotEmpty()
    attend: string;
}
