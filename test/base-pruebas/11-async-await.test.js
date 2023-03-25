import { getImagen } from "../../src/bases/11-async-await"

describe('Pruebas 11-async-await.js', () => {

    test('getImagen debe retornar una URL de imagen', async () => {
        const resp = await getImagen()
        expect(resp).toBe('No se encontro la imagen')    
      
    })
})