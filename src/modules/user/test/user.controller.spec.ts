import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';  
import { UserService } from '../user.service'; 
import { createUserDto, userSub  } from '../test/stubs/user.stub';  
import { mcokUserService } from '../test/__mocks__/user.service';  

// jest.mock('../user.service')
describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [UserService],
            controllers: [UserController],
        }).overrideProvider(UserService).useValue(mcokUserService()).compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
        jest.clearAllMocks()
    });
    it('controller must definded', () => {
        expect(userController).toBeDefined()
    })

    describe('create', () => {
        let user;
        beforeEach(async () => {
            user = await userController.create(createUserDto())
        })
        it('create method in userService must called ', async () => {
            expect(await userService.create).toBeCalled()
        });
        it('output must be userSub ', async () => {
            expect(user).toEqual(userSub())
        });
    })

    describe('findAll', () => {
        let users;
        beforeEach(async () => {
            users = await userController.findAll()
        })
        it('finAll method in userService must called ', async () => {
            expect(await userService.findAll).toBeCalled()
        });
        it('output must be array of userSub ', async () => {
            expect(users).toEqual([userSub()])
        });
    })

    describe('findOne', () => {
        let user;
        beforeEach(async () => {
            user = await userController.findOne(userSub().id)
        })
        it('finOne method in userService must called ', async () => {
            expect(await userService.findOne).toBeCalledWith(userSub().id)
        });
        it('output must be userSub ', async () => {
            expect(user).toEqual(userSub())
        });
    })

    describe('update', () => {
        let user;
        beforeEach(async () => {
            user = await userController.update(userSub().id, createUserDto())
        })
        it('updated method in userService must called ', async () => {
            expect(await userService.update).toBeCalledWith(userSub().id, createUserDto())
        });
        it('output must be userSub ', async () => {
            expect(user).toEqual(userSub())
        });
    })

    describe('remove', () => {
        let user;
        beforeEach(async () => {
            user = await userController.remove(userSub().id)
        })
        it('updated method in userService must called ', async () => {
            expect(await userService.remove).toBeCalledWith(userSub().id)
        });
        it('output must be userSub ', async () => {
            expect(user).toEqual(userSub())
        });
    })
});
