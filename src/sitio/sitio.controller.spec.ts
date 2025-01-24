import { Test, TestingModule } from '@nestjs/testing';
import { SitioController } from './sitio.controller';
import { SitioService } from './sitio.service';

describe('SitioController', () => {
  let controller: SitioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitioController],
      providers: [SitioService],
    }).compile();

    controller = module.get<SitioController>(SitioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
