import { Test, TestingModule } from '@nestjs/testing';
import { TransportadorController } from './transportador.controller';
import { TransportadorService } from './transportador.service';

describe('TransportadorController', () => {
  let controller: TransportadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportadorController],
      providers: [TransportadorService],
    }).compile();

    controller = module.get<TransportadorController>(TransportadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
