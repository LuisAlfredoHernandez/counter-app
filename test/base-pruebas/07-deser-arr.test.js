import { retornaArreglo } from "../../src/bases/07-deses-arr"

describe("Pruebas 07-deser-arr.test.js", () => {
    test("retornaArreglo() debe retornar un arreglo con 2 elementos", () => {

        const [letters, numbers] = retornaArreglo()
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect(letters).toEqual(expect.any(String));

    })
})