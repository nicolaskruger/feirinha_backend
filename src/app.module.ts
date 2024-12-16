import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { dbName } from './constants/db_name';
import { RoleModule } from './repository/module/role.module';

const { USER: USER } = dbName;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: USER,
      connectionName: USER,
    }),
    RoleModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
