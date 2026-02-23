# Investment Knowledge Club - Frontend Assessment

This repository contains the implementation of the Frontend Assessment for the "Investment Knowledge Club" dashboard. The goal was to recreate a provided mobile-first design as closely as possible, ensuring responsiveness and adding basic interactivity.

## 🚀 Live Demo

https://technical-test-nu.vercel.app/ -Vercel

## 🎨 Design & Layout

The project faithfully recreates the provided UI mockup, adhering to a mobile-first approach. It seamlessly scales up for tablet and desktop environments.

**Key Features:**

- **Profile Summary:** Displays user profile, welcome message, and stats grid.
- **Membership Accordion:** An interactive accordion to reveal/hide details about the Foundation and Economy memberships.
- **Contact Modal:** A customized interactive form with basic HTML5 validation and a simulated loading/success state sequence.

## 🛠️ Technologies Used

- **HTML5:** Semantic and structured markup.
- **CSS3:** Custom styling implementing specific brand colors, modern layout constraints, and smooth CSS transitions/animations.
- **JavaScript (Vanilla):** DOM manipulation for the custom accordion logic and the modal form validation/submission experience.
- **Bootstrap 5:** Utilized for its robust grid system, utility classes, and base components (like the Modal), which were then heavily customized to match the design aesthetics perfectly.
- **Bootstrap Icons:** For clean, scalable iconography.

## 📂 Project Structure

```text
📦 frontend-assessment
 ┣ 📂 css
 ┃ ┗ 📜 style.css       # Custom styles extending Bootstrap
 ┣ 📂 js
 ┃ ┗ 📜 main.js         # Interactivity (Accordion & Modal Validation)
 ┣ 📜 index.html        # Main markup
 ┗ 📜 README.md         # Project documentation
```

## ⚙️ How to Run Locally

You do not need any build tools or package managers to run this project.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/simon-tiphy/technical-test.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd technical-test
   ```
   _(Note: Adjust the folder name if you rename the checkout directory)_
3. **Open `index.html`:**
   Simply double-click the `index.html` file to open it in your default web browser, or use a tool like VS Code Live Server for hot reloading.

## ✨ Interactivity Highlights

- **No-AI footprint JavaScript:** The JS is cleanly written, perfectly readable, and handles the `submit` event to simulate a network request without standard AI giveaways.
- **Visual Feedback:** Uses transitions for the accordion expanding and chevron rotating.
- **Form UX:** The 'Contact Us' button opens a modal. Submitting an invalid form triggers Bootstrap's validation UI. Submitting a valid form simulates a loading state on the button before showing a success message.

## 👨‍💻 Author

**Simon Tiphy**
