import { Test, TestingModule } from '@nestjs/testing';
import { TransportadorService } from './transportador.service';

describe('TransportadorService', () => {
  let service: TransportadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportadorService],
    }).compile();

    service = module.get<TransportadorService>(TransportadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
