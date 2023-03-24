import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

test('renders navbar information', () => {
    const { queryAllByText } = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
});