describe('Pruebas en <DemoComponent/>', ()=>{
    test("Una prueba que no puede fallar",()=>{
        //Inicializacion
        const message1 = "klk manito"
        
        // Estimulo
        const message2 = message1.trim();
       
        //Observar el comportamiento esperado
        expect(message1).toBe(message2)
    })
})
