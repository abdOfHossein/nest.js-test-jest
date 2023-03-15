import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { UserEnt } from '../src/modules/user/entities/user.entity';
import { mcokUserDataSource } from '../src/modules/user/test/__mocks__/user.mock-datasource';
import { mcokUserService } from '../src/modules/user/test/__mocks__/user.service';
import { UserModule } from '../src/modules/user/user.module';
import { UserService } from '../src/modules/user/user.service';

describe('UserController (e2e)', () => {
     let app: INestApplication;

     beforeEach(async () => {
          const moduleFixture: TestingModule = await Test.createTestingModule({
               imports: [UserModule],
               providers: [UserService]
          })
               .overrideProvider(getRepositoryToken(UserEnt))
               .useValue(mcokUserDataSource())
               .overrideProvider(UserService)
               .useValue(mcokUserService())
               .compile();

          app = moduleFixture.createNestApplication();
          await app.init();
     });

     it('/user (POST)', () => {
          return request(app.getHttpServer())
               .post('/user')
               .expect(201)
     });

     it('/user (GET)', () => {
          return request(app.getHttpServer())
               .get('/user')
               .expect(200)
     });

     it('/user/:id (GET)', () => {
          return request(app.getHttpServer())
               .get('/user/:id')
               .expect(200)
     });

     it('/user/:id (UPDATE)', () => {
          return request(app.getHttpServer())
               .put('/user/:id')
               .expect(200)
     });

     it('/user/:id (DELETE)', () => {
          return request(app.getHttpServer())
               .delete('/user/:id')
               .expect(200)
     });
});
