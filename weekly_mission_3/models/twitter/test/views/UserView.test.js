const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
    
    test("Devuelve un objeto de error cuando intenta crear un nuevo usuario con una carga útil nula", () => {
        const payload = null
        const result = UserView.createUser(payload)
        
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    });

    test("Return an error object when try to create a new user with payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
})