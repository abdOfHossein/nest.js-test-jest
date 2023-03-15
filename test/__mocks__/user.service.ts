import { userSub } from "../stubs/user.stub";

export const mcokUserService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(userSub()),
    findAll: jest.fn().mockResolvedValue([userSub()]),
    findOne: jest.fn().mockResolvedValue(userSub()),
    update: jest.fn().mockResolvedValue(userSub()),
    remove: jest.fn().mockResolvedValue(userSub()),
})