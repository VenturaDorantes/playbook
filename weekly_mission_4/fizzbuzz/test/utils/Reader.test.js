const Reader = require('../../lib/utils/Reader')

describe("Test para Reader", () => {
    test("Requerimiento 1: Leer archivo", () => {
        explorers = Reader.readJsonFile("./explorers.json");

        expect(explorers.length).toBe(15);
    })
});