import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';

describe('NotFound Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });

  it('renders the error title', () => {
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('displays the error message', () => {
    expect(screen.getByText("The social media redirect you're looking for doesn't exist.")).toBeInTheDocument();
  });

  it('shows available platforms', () => {
    expect(screen.getByText('Available Redirects:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
    // Add more platform checks as needed
  });

  it('has a link to go home', () => {
    const homeLink = screen.getByText('Go to Home Page');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});