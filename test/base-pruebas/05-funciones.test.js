import { getUsuarioActivo } from "../../src/bases/05-funciones"

describe("getUsuarioActivo debe retornar un objeto", () => {
    test("getSaludo() debe retornar Hola Luis", () => {
        const name = 'Jose'
        const user = getUsuarioActivo(name)
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})