import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import How from '../How';

describe('How Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <How />
      </MemoryRouter>
    );
  });

  it('renders the title correctly', () => {
    expect(screen.getByText('Social Media Redirector')).toBeInTheDocument();
  });

  it('displays usage information', () => {
    expect(screen.getByText('How To Use')).toBeInTheDocument();
  });

  it('displays examples', () => {
    expect(screen.getByText('Example:')).toBeInTheDocument();
    expect(screen.getByText('Direct path:')).toBeInTheDocument();
    expect(screen.getByText('Query parameter:')).toBeInTheDocument();
  });

  it('displays available platforms', () => {
    expect(screen.getByText('Available Platforms:')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    // Add more platform checks as needed
  });
});