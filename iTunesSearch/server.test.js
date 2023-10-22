const app = require('./iTunesSearch/searchApi');

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [{ trackName: 'Song Name', artistName: 'Artist Name' }] }),
    ok: true,
  })
);

describe('Search API', () => {
  it('should return search results for valid query parameters', async () => {
    const term = 'jack johnson';
    const media = 'music';

    const response = await app.searchApiFunction(term, media);

    // Check if fetch function is called with the correct URL
    expect(fetch).toHaveBeenCalledWith(`https://itunes.apple.com/search?term=${term}&media=${media}`);

    // Check if the response is processed correctly
    expect(response.results).toHaveLength(1);
    expect(response.results[0].trackName).toBe('Song Name');
    expect(response.results[0].artistName).toBe('Artist Name');
  });

  it('should handle errors gracefully', async () => {
    // Mock fetch to simulate an error response
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error: 'Internal Server Error' }),
        ok: false,
        status: 500,
      })
    );

    const term = 'invalid term';
    const media = 'invalid media';

    const response = await app.searchApiFunction(term, media);

    // Check if fetch function is called with the correct URL
    expect(fetch).toHaveBeenCalledWith(`https://itunes.apple.com/search?term=${term}&media=${media}`);

    // Check if the error response is processed correctly
    expect(response.error).toBe('Internal Server Error');
  });
});
