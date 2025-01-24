import { Test, TestingModule } from '@nestjs/testing';
import { MuelleController } from './muelle.controller';
import { MuelleService } from './muelle.service';

describe('MuelleController', () => {
  let controller: MuelleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuelleController],
      providers: [MuelleService],
    }).compile();

    controller = module.get<MuelleController>(MuelleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
