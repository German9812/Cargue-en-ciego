import { Test, TestingModule } from '@nestjs/testing';
import { NovedadController } from './novedad.controller';
import { NovedadService } from './novedad.service';

describe('NovedadController', () => {
  let controller: NovedadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovedadController],
      providers: [NovedadService],
    }).compile();

    controller = module.get<NovedadController>(NovedadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
