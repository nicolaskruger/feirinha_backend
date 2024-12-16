import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from '../schema/role';
import { Model } from 'mongoose';
import { dbName } from 'src/constants/db_name';

const { USER: USER } = dbName;
@Injectable()
export class RoleRepository {
  constructor(@InjectModel(Role.name, USER) private roleModel: Model<Role>) {}

  async findAll() {
    return this.roleModel.find();
  }
}
