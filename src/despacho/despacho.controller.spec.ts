import { Test, TestingModule } from '@nestjs/testing';
import { DespachoController } from './despacho.controller';
import { DespachoService } from './despacho.service';

describe('DespachoController', () => {
  let controller: DespachoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DespachoController],
      providers: [DespachoService],
    }).compile();

    controller = module.get<DespachoController>(DespachoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
