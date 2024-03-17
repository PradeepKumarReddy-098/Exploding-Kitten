# 😸Exploding Kitten

# Frontend

### Set Up Instructions

- create react app by running `create-react-app my-app`
- Download dependencies by running `npm install`
- Start up the app using `npm start`

## Game Details

### Game

- user need to provide the username to start the game. If user is new to game he/she need to create the username by select the new to game from dropdown.

- There will be a button to start the game. When the game is started there will be a deck of 5 cards ordered randomly. Each time user clicks on the deck a card is revealed and that card is removed from the deck. A player wins the game once he draws all 5 cards from the deck and there is no card left to draw.

### Rules

- If the card drawn from the deck is a cat card, then the card is removed from the deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.

# Backend

### Set Up Instructions

- Clone this repository.

- Install dependencies using npm install.

- The API server starts automatically upon running node index.js (assuming the main script is named index.js).

### Dependencies

"cors": "^2.8.5", "express": "^4.18.3", "sqlite": "^5.1.1", "sqlite3": "^5.1.7"

### Database

we have a database file name kitten_game and containing table user_details

**Todo Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| username | TEXT    |
| played   | INTEGER |
| wins     | INTEGER |

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
