import { Test, TestingModule } from '@nestjs/testing';
import { EstadoMuelleController } from './estado-muelle.controller';
import { EstadoMuelleService } from './estado-muelle.service';

describe('EstadoMuelleController', () => {
  let controller: EstadoMuelleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoMuelleController],
      providers: [EstadoMuelleService],
    }).compile();

    controller = module.get<EstadoMuelleController>(EstadoMuelleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
