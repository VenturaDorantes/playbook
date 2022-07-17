const UserService = require('./../../app/services/UserService')

describe("Tests para UserService", () => {
    test("1) Creando nuevo usario usando UserService", () => {
        const user = UserService.create(1, "venturadosa", "ventura",)

        expect(user.username).toBe("venturadosa")
        expect(user.name).toBe("ventura")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})