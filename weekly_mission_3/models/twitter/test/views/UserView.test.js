const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
    
    test("Devuelve un objeto de error cuando intenta crear un nuevo usuario con una carga útil nula", () => {
        const payload = null
        const result = UserView.createUser(payload)
        
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    });

    test("Devuelve un objeto de error cuando intenta crear un nuevo usuario con carga útil con propiedades no válidas", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("Devuelve un objeto de error al intentar crear un nuevo usuario con una carga útil con propiedades faltantes", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("Create an user by a given valid payload", () => {
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)

        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    });
})