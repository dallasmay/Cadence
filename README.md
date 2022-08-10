# Cadence
## About
Cadence is my first full-stack web app built as a means of keeping track of track of favorite quotes from books, TV shows, and movies. Cadence also serves as a filter-able database for famous quotes.
### Features
#### Home Page
When the home page loads, it queries the database for a random quote and displays it using a custom animation built using JavaScript. 
#### Find Quotes Page
The Find Quotes Page serves as the user's access to the database of famous quotes, and provides filters to browse through the different quotes. You can filter based on speaker, source, or both.
#### My Quotes Page
The My Quotes Page contains all of the quotes entered by the user, which are displayed on page load. You can add quotes via the plus button in the top right corner, which triggers the Add Quote Modal, where you enter in a speaker and their quote and press add. The submitted quote will be displayed along with the others and the database will be queried, inputting the user's submission into the database.
## Tech Stack
Cadence was built with vanilla JavaScript, HTML and CSS for the front-end, Node.js and Express.js for the back-end, as well as a PostgreSQL database.
