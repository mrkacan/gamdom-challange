# Gamdom Frontend Challenge

## What I have done?
+ Installed & configured prettier.
+ Installed & configured Redux Toolkit.
  + Created store, reducers, actions.
  + Created memoized selectors.
+ Used styled-components for styling.
+ Added light & dark theme support.
+ Installed vitest and added basic unit tests for reducers, selectors, components.
+ Created a simple responsive layout.
+ Created a simple modal and used portal to render it.

## What can be improved?
+ More well-organized folder structure.
+ Tests can be improved.
+ Add more comments.


# To Run The Project
  - cd gamdom-test
  - yarn
  - yarn dev 

# To Test The Project
  - cd gamdom-test
  - yarn test

# Checklist

Requirements:
- [x] 1.Dashboard Design
  - [x] Create a responsive, grid-based dashboard that can display multiple cards.
       Each card should represent a sports game.
- [x] 2.Card Information Each card should display:
  - [x] The names of the teams playing.
  - [x] The odds for each team.
  - [x] A button to place a bet.
  - [x] The total number of bets placed on each team (this can be a simulated number for the purpose of the assignment).
- [x] 3.Interactivity
  - [x] When the “Place a bet” button is clicked, a modal should appear allowing users to select which team they want to bet on and the amount they want to bet.
  - [x] After submitting the bet, the total number of bets on the chosen team should increase (for the purpose of this assignment, no real betting mechanism or backend integration is required).
- [x] 4.Typescript Integration
  - [x] Properly type your React components, state, and props.
  - [x] Implement an interface for a sports game.
- [x] 5.Bonus (optional)
  - [x] Add a filter mechanism to show games based on sport types like Soccer, Basketball, Baseball, etc.
  - [x] Use a state management tool (like Redux or MobX) to manage the application state.
  - [x] Use CSS-in-JS libraries like styled-components or emotion for styling.
- [x] 6.Notes
  - [x] Use the code attached to bootstrap the project.
  - [x] You can use mock data for the games and odds. No need for a backend integration.
  - [x] Focus on the code quality, reusability, and readability.
  - [x] Styling can be basic, but a clean layout is preferred.