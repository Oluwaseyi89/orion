import { Module } from '@nestjs/common';
import { RateLimitingService } from './rate-limiting.service';
import { RateLimitingController } from './rate-limiting.controller';

@Module({
  providers: [RateLimitingService],
  controllers: [RateLimitingController]
})
export class RateLimitingModule {}
