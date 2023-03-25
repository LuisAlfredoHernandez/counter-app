import { usContext } from "../../src/bases/06-deses-obj"


describe("Pruebas 06-desec-obj.test.js", () => {
    test("useContext() debe retornar propiedades nombre, clave, anios, lat,lng", () => {
        const persona = {
            nombre: 'Cap',
            edad: 35,
            clave: 'Ironman'
        };
        const { clave, edad } = persona;
        const context = usContext(persona)
        expect(context).toStrictEqual(
            {
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        )


    })
})