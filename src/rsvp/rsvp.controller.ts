import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RsvpDto } from './dto/rsvp-dtp';
import { AttendanceRsvpDto } from './dto/get-attendance.dto';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Rsvp')
// @UseGuards(AuthGuard('jwt'))
@Controller('rsvp')
export class RsvpController {
  constructor(private readonly rsvpService: RsvpService) {}

  @Post()
  create(@Body() rsvpDto: RsvpDto) {
    let id = uuidv4();
    rsvpDto.id = id
    return this.rsvpService.create(rsvpDto);
  }

  @Get()
  findAll() {
    return this.rsvpService.findAll();
  }

  @Post('/getAttendance')
  getAttend(@Body() attendanceRsvpDto: AttendanceRsvpDto) {
    return this.rsvpService.getAttendance(attendanceRsvpDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rsvpService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRsvpDto: UpdateRsvpDto) {
    return this.rsvpService.update(id, updateRsvpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rsvpService.remove(id);
  }
}
