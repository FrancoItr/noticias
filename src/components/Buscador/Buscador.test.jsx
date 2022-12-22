import { render, fireEvent } from '@testing-library/react';
import Buscador from './Buscador';

const onBuscar = jest.fn();
const renderBuscador = () => {
    const component = render(<Buscador />);
    return component;
};
describe('<Buscador />', () => {
    test('Se debe renderizar el componente', async () => {
        const component = renderBuscador();
        expect(component.main).toBeInTheDocument();
    });

    test('No Se debe llamar a onBuscar cuando el usuario hace click en el boton buscar y el contenido es menor a tres caracteres', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        fireEvent.click(button);
        expect(onBuscar).not.toBeCalled();
    });
})