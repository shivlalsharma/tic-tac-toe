# Tic Tac Toe - Web-Based Game

A simple, interactive, and feature-rich Tic Tac Toe game built using HTML, CSS, and JavaScript. This project provides a fun way to play the classic game with features like score tracking and game reset options.

---

## Deployment

This game is live and accessible online. Play it here: [Tic Tac Toe Game](https://tic-tac-toe30.netlify.app/)

---

## Features

- **Player Turns:** Alternate turns between Player X and Player O.
- **Winning Patterns:** Automatically detects the winner based on predefined patterns and highlights the winning combination.
- **Draw Detection:** Identifies and announces if the game ends in a draw.
- **Score Tracking:** Keeps track of Player X's and Player O's win counts using `localStorage`, ensuring scores persist across browser sessions.
- **Game Controls:**
  - **New Game:** Clears the board while retaining scores.
  - **Reset Game:** Clears the board and restarts the game from scratch.
  - **Clear History:** Resets player scores and game history stored in `localStorage`.
- **Responsive Design:** The game adjusts to different screen sizes seamlessly.
- **Winning Animation:** Highlights the winning combination with an animated line.

---

## Technologies Used

- **HTML:** Provides the structure for the game interface.
- **CSS:** Styles the game layout, animations, and visual feedback.
- **JavaScript:** Implements game logic, player interactions, score management, and `localStorage` for persistent data.

---

## How It Works

1. **Game Play:**
   - Players alternate turns by clicking on the grid cells. Player O starts first.
   - The game checks for a winner after every move. If a winning pattern is detected, the winner is declared, and their score is updated in `localStorage`.
   - If all cells are filled without a winner, the game declares a draw.
   
2. **Controls:**
   - **New Game:** Clears the grid for a new round while keeping the scores intact.
   - **Reset Game:** Resets the game and clears the grid for fresh gameplay.
   - **Clear History:** Deletes all stored scores and resets the player statistics.

3. **Winning Patterns:** The game detects winning combinations based on predefined patterns for rows, columns, and diagonals.

4. **Persistent Scores:** Player scores are saved in `localStorage`, allowing scores to persist even if the page is refreshed or reopened.

---

## Installation

follow these steps to run the Tic Tac Toe locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shivlalsharma/tic-tac-toe.git
    cd tic-tac-toe
    ```

2. **Open the `index.html` file in your browser**.

   Alternatively, you can set up a local server (e.g., using **VS Code Live Server**) to view the game in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created and deployed by **Shivlal Sharma**.  
- **GitHub**: [Shivlal Sharma's GitHub](https://github.com/shivlalsharma)
- **LinkedIn**: [Shivlal Sharma's LinkedIn](https://www.linkedin.com/in/shivlal-sharma-56ba5a284/)