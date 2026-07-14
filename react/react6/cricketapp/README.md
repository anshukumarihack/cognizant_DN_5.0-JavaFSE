# Cricket Application (cricketapp)

A modern, responsive, and visually stunning React Cricket Dashboard showcasing advanced ES6 features (Destructuring, Spread Operator / Merge, Arrow functions, Array.map, and Array.filter).

## Task Details

1. **Scaffold React Project**: Initialized in `react/react6/cricketapp`.
2. **ListofPlayers Component**:
   - Declares an array of 11 players with details of their names and scores.
   - Maps player details using the ES6 `Array.map` feature.
   - Filters out players with scores below 70 using ES6 arrow functions and `Array.filter` to only display top performers (score &ge; 70).
3. **IndianPlayers Component**:
   - Destructures an array of 6 players into Odd Position and Even Position team lists.
   - Merges two separate arrays representing T20 and Ranji Trophy players using the ES6 spread operator (`...`).
4. **Conditional Toggle Rendering**:
   - Both components are displayed on the home page conditionally using a state variable representing the `Flag`.
   - Includes a premium toggle control switch to toggle between the components interactively.

---

## Component Architecture

- **ListofPlayers**: Located at `src/ListofPlayers.js`
- **IndianPlayers**: Located at `src/IndianPlayers.js`
- **App**: Located at `src/App.js` (Invokes components conditionally based on flag toggle)

---

## Guide to Execute the Application

### 1. Install Dependencies
Navigate to the root of the project and install all required packages:
```bash
npm install
```

### 2. Start the Development Server
Run the application locally:
```bash
npm start
```
*(By default, this will launch on `http://localhost:3000`. If port 3000 is already in use, you can override it using `PORT=3005 npm start`).*

---

## Visual Proof / Result Screenshots

### 1. View when Flag = True (ListofPlayers)
Displays all 11 players mapped and the top performers list:

<img width="1231" height="1012" alt="image" src="https://github.com/user-attachments/assets/a4111026-ca52-4519-a419-bfbdcb1ac431" />

---

<img width="656" height="612" alt="image" src="https://github.com/user-attachments/assets/4e9c49ac-8c9f-49c5-882c-433676f182b4" />

---

### 2. View when Flag = False (IndianPlayers)
Displays destructured teams and merged T20 & Ranji lists:

<img width="671" height="856" alt="image" src="https://github.com/user-attachments/assets/36f2bc7f-f7de-4bda-a3f3-628bb6a8cb4d" />

