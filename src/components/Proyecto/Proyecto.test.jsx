import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Proyecto from './Proyecto';


test('renders project information', () => {
    const props = {
        title: 'Elegant',
        description: 'E-commerce: Desarrollo de tienda online 100% funcional.',
        text: 'Me encargué de implementar las funcionalidades del carrito de compras, integrando con una base de datos en Firebase y utilizando las librerías de React ja, React Router DOM, entre otras.',
        img: '../../imagenes/portfolio.gif',
        site: 'https://proyecto-final-ruddy.vercel.app/',
        code: 'https://github.com/samu1992/Elegant'
    };

    const { getByText, getByAltText } = render(<Proyecto {...props} />);

    expect(getByAltText(/error al cargar la imagen del proyecto/i)).toHaveAttribute('src', props.img);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByText(props.text)).toBeInTheDocument();
    expect(getByText(/ver código/i)).toHaveAttribute('href', props.code);
});
