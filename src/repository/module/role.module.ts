import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from '../schema/role';
import { dbName } from 'src/constants/db_name';
import { RoleRepository } from '../role/role.repository';

const { USER } = dbName;

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }], USER),
  ],
  providers: [RoleRepository],
  exports: [RoleRepository],
})
export class RoleModule {}
