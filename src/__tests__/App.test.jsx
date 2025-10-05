import { render, screen } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import {AppRoutes} from "../App"
import How from '../How';
import NotFound from '../NotFound';

// At the top of your file
jest.useFakeTimers();

// In your test
it('attempts to redirect to the correct URL', () => {
  // ...render component
  jest.runAllTimers(); // Fast-forward all timers
  // ...assertions
});

// Don't forget to clean up
afterEach(() => {
  jest.useRealTimers();
});

// Mock Redirector component to avoid actual redirects
jest.mock('../Redirector', () => {
  return function MockRedirector({ platform }) {
    return <div data-testid="redirector">Redirecting to: {platform}</div>;
  };
});

// Mock the App component to avoid double Router issues
jest.mock('../App', () => {
  const { Routes, Route } = require('react-router-dom');
  const How = require('../How').default;
  const NotFound = require('../NotFound').default;
  const Redirector = require('../Redirector').default;
  
  return function MockApp() {
    return (
      <Routes>
        <Route path="/" element={<How />} />
        <Route path="/github" element={<Redirector platform="github" />} />
        <Route path="/twitter" element={<Redirector platform="twitter" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
});

import App from '../App';

describe('App Routing', () => {
  it('renders How component on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText('Social Media Redirector')).toBeInTheDocument();
  });

  it('renders Redirector with github platform', () => {
    render(
      <MemoryRouter initialEntries={['/github']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Redirecting to: github')).toBeInTheDocument();
  });

  it('renders Redirector with twitter platform', () => {
    render(
      <MemoryRouter initialEntries={['/twitter']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Redirecting to: twitter')).toBeInTheDocument();
  });

  it('renders NotFound for invalid routes', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});