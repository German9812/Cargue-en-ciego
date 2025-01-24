import { Test, TestingModule } from '@nestjs/testing';
import { NovedadService } from './novedad.service';

describe('NovedadService', () => {
  let service: NovedadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovedadService],
    }).compile();

    service = module.get<NovedadService>(NovedadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
