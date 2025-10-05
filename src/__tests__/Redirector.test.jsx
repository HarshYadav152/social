// src/__tests__/Redirector.test.jsx
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Redirector from '../Redirector';

// Create a proper mock for window.location.replace
const mockReplace = jest.fn();

// Save the original implementation
const originalLocation = window.location;

describe('Redirector', () => {
  beforeEach(() => {
    // Mock the location object before each test
    delete window.location;
    window.location = { replace: mockReplace };
  });

  afterEach(() => {
    // Restore original location after each test
    window.location = originalLocation;
    jest.clearAllMocks();
  });

  it('attempts to redirect to the correct URL', async () => {
    const navigate = jest.fn();
    render(
      <MemoryRouter>
        <Redirector platform="github" navigate={navigate} />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(navigate).toHaveBeenCalledWith('https://github.com/HarshYadav152')
    );
  });
});