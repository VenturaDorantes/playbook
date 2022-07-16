const MissionCommander = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const result = 1 + 2
        expect(result).toBe(3);
    });
});

describe("Unit Tests para Clase MissionCommander", () => {
    test(' 1) Creacion objeto de mission commander', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    });
});