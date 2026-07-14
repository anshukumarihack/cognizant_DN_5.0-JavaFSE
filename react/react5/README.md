# Cohorts Details Dashboard (react5)

A React-based dashboard displaying ongoing and completed cohort schedules, utilizing CSS Modules for component-level styling.

## Task Details

1. **Scaffold React Project**: Initialized in `react/react5/`.
2. **CSS Module (`CohortDetails.module.css`)**:
   - Class `.box` style defined with properties:
     - `width: 300px;`
     - `display: inline-block;`
     - `margin: 10px;`
     - `padding-top: 10px; padding-bottom: 10px;`
     - `padding-left: 20px; padding-right: 20px;`
     - `border: 1px solid black;`
     - `border-radius: 10px;`
   - Scoped style for html `<dt>` element selector setting `font-weight: 500`.
   - Conditional color rules for `<h3>` element: `green` for ongoing cohort status, and `blue` for other cohort statuses.
3. **CohortDetails Component**:
   - Imports `CohortDetails.module.css` module styles.
   - Renders details using description lists (`<dl>`, `<dt>`, `<dd>`) in a clean alignment structure.
   - Dynamically maps cohort details to cards, applying conditional header classes based on status.

---

## Component Architecture

- **CohortDetails Component**: Located at `src/CohortDetails.js`
- **CSS Module**: Located at `src/CohortDetails.module.css`
- **App**: Located at `src/App.js` (Invokes the component)

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
*(By default, this will launch on `http://localhost:3000`. If port 3000 is already in use, you can override it using `PORT=3004 npm start`).*

---

## Visual Proof / Result Screenshot

Below is the screenshot of the running application displaying the cohorts list matching the expected result layout:

<img width="1208" height="945" alt="image" src="https://github.com/user-attachments/assets/acf46b4e-ec28-497b-892b-5e0bee12cd51" />

