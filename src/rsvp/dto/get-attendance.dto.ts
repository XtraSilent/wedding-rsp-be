import {IsNotEmpty, IsBoolean } from 'class-validator';

export class AttendanceRsvpDto {
    
    @IsBoolean()
    @IsNotEmpty()
    attend: boolean;
}
