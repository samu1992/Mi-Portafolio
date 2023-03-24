import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
    test('renders navbar links', () => {
        const { getAllByRole } = render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        const links = getAllByRole('link', { name: /inicio/i });

        expect(links.length).toBe(2);
    });
});
