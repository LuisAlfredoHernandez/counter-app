import { getHeroeByIdAsync } from "../../src/bases/09-promesas"


describe('Pruebas 09-promesas.test.js', () => {

    test('getHeroeByIdAsync debe retornar un Heroe asincronicamente', (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done()
            }).catch()
    })

    test('getHeroeByIdAsync debe retornar un error de no haber encontrado el heroe asincronicamente', (done) => {
        const id = 100
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy()
                done()
            })
            .catch((err) => {
                expect(err).toBe(`No se pudo encontrar el héroe${id}`)
                done()
            })
    })
})