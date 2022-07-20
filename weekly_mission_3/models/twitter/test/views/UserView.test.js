const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
    
    test("Devuelve un objeto de error cuando intenta crear un nuevo usuario con una carga útil nula", () => {
        const payload = null
        const result = UserView.createUser(payload)
        
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    });
})