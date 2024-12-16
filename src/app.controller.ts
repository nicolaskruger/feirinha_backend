import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RoleRepository } from './repository/role/role.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly roleRepository: RoleRepository,
  ) {}

  @Get('/roles')
  async getRoles() {
    return this.roleRepository.findAll();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
