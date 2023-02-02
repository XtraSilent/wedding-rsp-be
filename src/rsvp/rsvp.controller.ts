import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RsvpDto } from './dto/rsvp-dtp';

@ApiTags('Rsvp')
// @UseGuards(AuthGuard('jwt'))
@Controller('rsvp')
export class RsvpController {
  constructor(private readonly rsvpService: RsvpService) {}

  @Post()
  create(@Body() RsvpDto: RsvpDto) {
    return this.rsvpService.create(RsvpDto);
  }

  @Get()
  findAll() {
    return this.rsvpService.findAll();
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
