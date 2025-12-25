import { Test, TestingModule } from '@nestjs/testing';
import { RateLimitingController } from './rate-limiting.controller';

describe('RateLimitingController', () => {
  let controller: RateLimitingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateLimitingController],
    }).compile();

    controller = module.get<RateLimitingController>(RateLimitingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
