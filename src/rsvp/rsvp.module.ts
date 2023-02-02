import { Module } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { RsvpController } from './rsvp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rsvps } from './entities/rsvps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rsvps])],
  controllers: [RsvpController],
  providers: [RsvpService]
})
export class RsvpModule {}
