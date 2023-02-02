import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RsvpDto } from './dto/rsvp-dtp';
import { AttendanceRsvpDto } from './dto/get-attendance.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { Rsvps } from './entities/rsvps.entity';
import { IRsvp } from './interfaces/rsvps.interface';

@Injectable()
export class RsvpService {
  constructor(
    @InjectRepository(Rsvps)
    private readonly rsvpRepository: Repository<Rsvps>,
  ) {}

  public async create(rsvpDto: RsvpDto){
      try {
        let data = await this.rsvpRepository.save(rsvpDto);
      } catch (error) {
          throw new HttpException("Error!", HttpStatus.BAD_REQUEST);
      }
  }

  public async findAll(): Promise<Rsvps[]>  {
    return this.rsvpRepository.find();
  }

  public async findOne(id: string) {
    let data = await this.rsvpRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!data) {
      throw new NotFoundException(`Rsvp ${data} not found`);
    }

    return data;
  }

  public async update(id: string, updateRsvpDto: UpdateRsvpDto) {
    return `This action updates a #${id} rsvp`;
  }

  public async remove(id: string) {
    return `This action removes a #${id} rsvp`;
  }

  public async getAttendance(attendanceRsvpDto: AttendanceRsvpDto) {
    return await this.rsvpRepository.count({
      where: {
        attend: attendanceRsvpDto.attend
      }
    });
  }
}
