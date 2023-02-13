import { Test } from '@nestjs/testing';
import { ApiUsersFeatureController } from './api-users-feature.controller';

describe('ApiUsersFeatureController', () => {
  let controller: ApiUsersFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiUsersFeatureController],
    }).compile();

    controller = module.get(ApiUsersFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
