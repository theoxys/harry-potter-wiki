# Harry Potter Characters Explorer

A Next.js application that allows users to explore Harry Potter characters with advanced filtering, theme customization, and favorites functionality.

## Features

- **Server-Side Rendering**: Built with Next.js to provide optimal performance and SEO benefits
- **Theme System**: Custom theme implementation using CSS variables and HSL colors, allowing users to switch between Hogwarts houses themes
- **URL-based Filtering**: All filters are preserved in URL parameters for easy sharing and navigation
- **Persistent Storage**: User preferences (favorites and theme) are stored in localStorage
- **Responsive Design**: Fully responsive layout built with Tailwind CSS
- **Custom Hooks**: Organized API calls using custom React hooks
- **Centralized API Layer**: All backend calls are managed through a centralized API service

## Technologies

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Custom Theme System (CSS Variables + HSL)

## Getting Started

First, clone the repository:

### git clone https://github.com/yourusername/harry-potter-explorer.git

Install the dependencies:

### npm install
# or
### yarn install
# or
### pnpm install

Run the development server:

### npm run dev
# or
### yarn dev
# or
### pnpm dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features in Detail

### Theme System
The theme system uses CSS variables with HSL colors, controlling the hue value to create distinct themes for each Hogwarts house. This approach provides a flexible and maintainable way to manage color schemes across the application.

### URL-based Filtering
All filters (house, species, ancestry, etc.) are stored as URL parameters, making it easy to:
- Share specific character lists with friends
- Maintain filter state during navigation
- Bookmark specific filtered views

### API Integration
The application uses a centralized API layer that:
- Manages all backend communications
- Provides type safety with TypeScript
- Implements custom hooks for data fetching
- Handles error states and loading states

### Favorites System
Users can mark characters as favorites, which are:
- Stored in localStorage for persistence
- Accessible across sessions
- Manageable through a dedicated favorites page
