import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RsvpDto } from './dto/rsvp-dto';
import { AttendanceRsvpDto } from './dto/get-attendance.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { Rsvps } from './entities/rsvps.entity';
import { IRsvp } from './interfaces/rsvps.interface';
import { PageOptionsDto } from '../pagination/page-option.dto';
import { PageDto } from '../pagination/page.dto';
import { PageMetaDto } from '../pagination/page-meta.dto';

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

  public async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<RsvpDto>> {
    const queryBuilder = this.rsvpRepository.createQueryBuilder("rsvp");

    queryBuilder
      .orderBy("created_at", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    
    return new PageDto(entities, pageMetaDto);
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

    let attendData = await this.rsvpRepository.count({
      where: {
        attend: attendanceRsvpDto.attend
      }
    });

    let totalData = attendanceRsvpDto.attend === true ? await this.rsvpRepository.createQueryBuilder("location")
                .select("SUM(total)","total")
                .where("attend = true")
                .getRawOne() : 0; 
    let res = 
      {
        attend : attendData,
        total : parseInt(totalData?.total)
      }
  
    return res 
  }
}
