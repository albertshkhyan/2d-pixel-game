Here's a detailed and well-structured `README.md` file tailored for your project:

# Pixel Elf Adventures

A dynamic and interactive 2D game built with modern web technologies. Control a pixel elf and navigate through an adventurous world with animations, sprite management, and rich gameplay mechanics.

---

## Project Progress

Here, we showcase the periodic progress of the project in stages, including GIFs, screenshots, or notes.

### Stage 1: Initial Development
![Stage 1 Progress](/public/assets/gif/1-stage.gif)

- **Completed Features**:
  - Basic player sprite animations (idle, walking, attacking).
  - Initial world tileset integration.
  - Core movement mechanics.

- **Next Goals**:
  - Add enemy AI.
  - Implement collision detection.
  - Expand tilemap.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
  - [Player Movement and Animations](#player-movement-and-animations)
  - [World Management](#world-management)
  - [UI Integration](#ui-integration)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)


## Features

- Dynamic 2D animations using **Three.js** and sprite sheets.
- Modular architecture for **player**, **world**, **UI**, and **enemy** features.
- Keybindings and smooth animation transitions between states.
- Configurable gameplay using TailwindCSS, Vite, and React hooks.


## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- npm or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/your-repo/pixel-elf-adventures.git
cd pixel-elf-adventures
```

Install the dependencies:

```bash
npm install
```

### Running the Project

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

```plaintext
src/
├── app/
│   ├── features/
│   │   ├── canvas/               # Canvas rendering components
│   │   ├── enemies/              # Enemy behavior and utilities
│   │   ├── player/               # Player components, hooks, and utilities
│   │   ├── ui/                   # UI components and hooks
│   │   ├── world/                # World utilities and state management
│   ├── routes/                   # Routes for game scenes
│   ├── styles/                   # Global styles
├── assets/                       # Game assets (sprites, sounds, tiles)
├── components/                   # Common UI components
├── hooks/                        # Reusable hooks
├── store/                        # State management stores
├── utils/                        # Helper utilities
├── main.tsx                      # Application entry point
public/
├── assets/                       # Public assets served by Vite
```

---

## Key Features

### Player Movement and Animations

- Use `usePlayerState` and `usePlayerMovement` hooks for managing player direction and states like `idle`, `walking`, and `attacking`.
- Textures are preloaded using a custom hook `usePlayerTextures`.
- Sprite animations are dynamically cycled using `useFrame`.

### World Management

- Tile-based worlds created with `tilemapUtils`.
- Collision detection integrated using `useCollisionDetection`.

### UI Integration

- Modular UI with reusable hooks like `useHUDState` for managing the game HUD.
- Settings modal for configuring game behavior.

---

## Scripts

| Command          | Description                               |
|-------------------|-------------------------------------------|
| `npm install`    | Installs dependencies                    |
| `npm run dev`    | Starts the development server            |
| `npm run build`  | Builds the project for production        |
| `npm run lint`   | Lints the codebase using ESLint          |
| `npm run format` | Formats code using Prettier              |

---

## Technologies Used

- **Frameworks & Libraries**:
    - React, Three.js, Zustand (state management), TailwindCSS
- **Tooling**:
    - Vite, ESLint, Prettier
- **Assets**:
    - PNG sprites, MP3 sounds
- **Languages**:
    - TypeScript, CSS

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🚀
```

Let me know if you'd like to further customize this or add more details!
