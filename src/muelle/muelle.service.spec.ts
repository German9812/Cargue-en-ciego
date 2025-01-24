import { Test, TestingModule } from '@nestjs/testing';
import { MuelleService } from './muelle.service';

describe('MuelleService', () => {
  let service: MuelleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuelleService],
    }).compile();

    service = module.get<MuelleService>(MuelleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
