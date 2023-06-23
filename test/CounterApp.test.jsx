import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../src/CounterApp'

describe('Pruebas en el <CounterApp>', () => {

    const initialValue = 10

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
    })

    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(12)).toBeTruthy();
    })

    test('debe decrementar con el boton -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(8)).toBeTruthy();
    })

    test('debe resetear con el boton RESET', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();
    })

})