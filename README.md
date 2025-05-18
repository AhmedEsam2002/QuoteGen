# QuoteGen - Random Quote Generator

A simple and elegant web application that generates random inspirational quotes with author images.

![QuoteGen Logo](/Images/Logo.png)

## Project Overview

QuoteGen is a responsive web application that displays random inspirational quotes along with the author's image. Users can generate new quotes by clicking a button or using keyboard shortcuts.

## Features

- Random quote generation with author attribution
- Author images displayed with each quote
- Responsive design for all device sizes
- Keyboard shortcuts (Space or Enter) to generate new quotes
- Social media sharing links
- Local storage to remember the last displayed quote
- Elegant animations and hover effects

## Project Structure

```
/Random Quotes
├── index.html         # Main HTML structure
├── README.md          # Project documentation
├── Images/
│   └── Logo.png       # Project logo
├── Scripts/
│   └── Script.js      # JavaScript functionality
└── Stylees/
    └── Stylee.css     # Custom styling
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.3
- Font Awesome 6.5.1
- Google Fonts (Playfair Display & Poppins)
- Local Storage API

## JavaScript Explained

The application uses vanilla JavaScript to manage quote generation and display. Here's how the code works:

### Data Structure

The quotes are stored in an array of objects, each containing:

- `text`: The quote text
- `author`: The name of the author
- `image`: URL to the author's image

```javascript
const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Oscar_Wilde_Sarony.jpg/440px-Oscar_Wilde_Sarony.jpg",
  },
  // More quotes...
];
```

### Core Functionality

1. **Initialization**: When the page loads, the application either:

   - Retrieves the previously displayed quote index from local storage
   - Or selects a random quote if no previous state exists

2. **Quote Generation**:

   - Triggered by clicking the "Generate New Quote" button
   - Also triggered by pressing the Space or Enter key
   - Selects a random quote from the array
   - Stores the selected index in local storage
   - Updates the DOM with the new quote information

3. **DOM Updates**:
   - The `changeQuote()` function updates:
     - Quote text
     - Author name
     - Author image

### Key JavaScript Functions

- `document.addEventListener("DOMContentLoaded", function() {...})`: Initializes the app when the page loads
- `Math.floor(Math.random() * quotes.length)`: Generates a random index to select quotes
- `localStorage.setItem/getItem`: Persists the current quote between page refreshes
- `changeQuote()`: Updates the DOM with the current quote's information

## CSS Styling

The application uses a combination of Bootstrap classes and custom CSS for styling:

- Typography: Custom font families (Playfair Display for quotes, Poppins for UI elements)
- Animations: Subtle hover effects on buttons and social icons
- Responsive design: Adapts to different screen sizes
- Color scheme: Clean with selective use of accent colors

## How to Use

1. Open `index.html` in a web browser
2. Click the "Generate New Quote" button or press Space/Enter to get a new quote
3. Use the social media icons to share quotes (functionality to be implemented)

## Future Enhancements

- Implement social media sharing functionality
- Add option to download quotes as images
- Include more quotes and categories
- Add dark/light mode toggle
- Implement user accounts to save favorite quotes

---

© 2025 QuoteGen | All rights reserved
