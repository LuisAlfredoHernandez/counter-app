import { getSaludo } from "../../src/bases/02-template-string"


describe("Pruebas 02-template-string.test.js",()=>{
    test("getSaludo() debe retornar Hola Luis",()=>{
        const name = 'Luis'
        const message = getSaludo(name)
        expect(message).toBe(`Hola ${name}`)
    })

})