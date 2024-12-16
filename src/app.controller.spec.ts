import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleRepository } from './repository/role/role.repository';

describe('AppController', () => {
  let appController: AppController;
  const roleRepository = {} as jest.Mocked<RoleRepository>;

  beforeEach(async () => {
    roleRepository.findAll = jest.fn();
    appController = new AppController(new AppService(), roleRepository);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello Stranger!');
    });

    it('should return all roles', async () => {
      roleRepository.findAll.mockResolvedValue([]);
      expect(await appController.getRoles()).toStrictEqual([]);
    });
  });
});
