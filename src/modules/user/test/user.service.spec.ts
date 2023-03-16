import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mcokUserDataSource } from '../test/__mocks__/user.mock-datasource'
import { UserEnt } from '../entities/user.entity';
import { UserService } from '../user.service';

// jest.mock('../user.service')
describe('UserService', () => {
     let userService: UserService;
     beforeEach(async () => {
          const module: TestingModule = await Test.createTestingModule({
               imports: [],
               providers: [UserService, { provide: getRepositoryToken(UserEnt), useValue: mcokUserDataSource }],
          }).compile();
          userService = module.get<UserService>(UserService);
          jest.clearAllMocks()
     });

     it('controller must definded', () => {
          expect(userService).toBeDefined()
     })
});
