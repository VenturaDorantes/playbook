const UserService = require('./../../app/services/UserService')

describe("Tests para UserService", () => {
    test("1) Creando nuevo usario usando UserService", () => {
        const user = UserService.create(1, "venturadosa", "ventura",)

        expect(user.username).toBe("venturadosa")
        expect(user.name).toBe("ventura")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2) Obtener todos los datos de usuario en una lista", () => {
        const user = UserService.create(1, "venturadosa", "ventura")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("venturadosa")
        expect(userInfoInList[2]).toBe("ventura")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })
})