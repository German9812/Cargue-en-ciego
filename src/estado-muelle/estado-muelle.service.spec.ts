import { Test, TestingModule } from '@nestjs/testing';
import { EstadoMuelleService } from './estado-muelle.service';

describe('EstadoMuelleService', () => {
  let service: EstadoMuelleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoMuelleService],
    }).compile();

    service = module.get<EstadoMuelleService>(EstadoMuelleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
