import {userSub} from "../test/stubs/user.stub";

export const UserService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(userSub()),
    findAll: jest.fn().mockResolvedValue([userSub()]),
    findOne: jest.fn().mockResolvedValue(userSub()),
    update: jest.fn().mockResolvedValue(userSub()),
    remove: jest.fn().mockResolvedValue(userSub()),
})