import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp";

describe("Pruebas 08-imp-exp.test.js", () => {

    
    test("getHeroeById() debe retornar un objeto Heroe", () => {
        const id = 1;
        const heroe = getHeroeById(id)
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test("getHeroeById() debe retornar undefined si no existe", () => {
        const id = 100;
        const heroe = getHeroeById(id)
        expect(heroe).toBeFalsy()
    })

    test("getHeroesByOwner() debe retornar heroes de Marvel", () => {
        const ownerName = 'Marvel';
        const owner = getHeroesByOwner(ownerName)
        expect(owner).toHaveLength(2)
        expect(owner).toEqual([
            { "id": 2, "name": "Spiderman", "owner": "Marvel" },
            { "id": 5, "name": "Wolverine", "owner": "Marvel" }]
        )
    })

    test("getHeroesByOwner() debe retornar heroes de DC", () => {
        const ownerName = 'DC';
        const owner = getHeroesByOwner(ownerName)
        expect(owner).toEqual([
            { "id": 1, "name": "Batman", "owner": "DC" },
            { "id": 3, "name": "Superman", "owner": "DC" },
            { "id": 4, "name": "Flash", "owner": "DC" }]
        )
    })


})