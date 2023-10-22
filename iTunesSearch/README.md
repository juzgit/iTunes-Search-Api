# iTunes Search App

## Description

The iTunes Search App allows users to search for various media items (such as music, movies, podcasts, etc.) from the iTunes API. Users can view search results, add items to favorites, and remove them from the favorites list.

## How to Use the App

1. **Search:**
   - Enter a search term in the search bar.
   - Select the media type you want to search for from the dropdown menu.
   - Click the "Search" button to view the search results.

2. **Add to Favorites:**
   - To add an item to favorites, click the "Add to favorites" button next to the search result.
   - The item will be added to the favorites list.

3. **Remove from Favorites:**
   - To remove an item from favorites, click the "Remove from favorites" button in the favorites section.
   - The item will be removed from the favorites list.

## Installation and Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/iTunes-Search-App.git
   cd iTunes-Search-App

# Install frontend dependencies
cd itunes
npm install

# Install backend dependencies
cd ../iTunesSearch
npm install


# Start frontend (inside the 'itunes' directory)
npm start

# Start backend (inside the 'iTunesSearch' directory)
node searchApi.js
