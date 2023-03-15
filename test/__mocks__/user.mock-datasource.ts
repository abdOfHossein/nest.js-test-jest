import { userSub } from "../stubs/user.stub";

export const mcokUserDataSource = jest.fn().mockReturnValue({
     create: jest.fn().mockResolvedValue((dto) => dto),
     findAll: jest.fn().mockResolvedValue([userSub()]),
     findOne: jest.fn().mockResolvedValue(userSub()),
     update: jest.fn().mockResolvedValue(userSub()),
     remove: jest.fn().mockResolvedValue(userSub()),
     save: jest.fn().mockResolvedValue((user) => { return { id: Date.now(), ...user } }),
})