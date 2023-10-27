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
   git clone https://github.com/juzgit/iTunes-Search-Api
   cd iTunesSearchBackend

# Install frontend dependencies
cd itunesFrontend
npm install

# Install backend dependencies
cd iTunesSearchBackend
npm install


# Start frontend (inside the 'itunes' directory)
npm start

# Start backend (inside the 'iTunesSearchBackend' directory)
node searchApi.js

#The application is deployed here:
https://itunes-search-ui.onrender.com


## Security Measures

### 1. CORS Configuration

CORS is configured on the backend to allow requests only from the specific origin where the frontend is hosted. This prevents unauthorized domains from accessing the API and helps mitigate cross-origin attacks.

```javascript
const corsOptions = {
  origin: "https://itunes-search-ui.onrender.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

### 2. API Key Handling
Sensitive information such as API keys is NOT hardcoded directly into the source code or exposed in the frontend JavaScript.

### 3. Secure Communication
All communications between the frontend and backend are encrypted using HTTPS.

### 4. Helmet Middleware
The helmet middleware is used to set various HTTP headers that improve the security of the application by preventing common vulnerabilities.
const helmet = require('helmet');
app.use(helmet());
