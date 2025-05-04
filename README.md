# NarratixAI Frontend

This is the frontend for NarratixAI, an advanced AI-powered ad creation platform.

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Framer Motion
- React Query

## Features
- AI Script Generation
- Neural Avatars
- Real-time Ad Optimization
- Performance Analytics
- Advanced Customization

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/narratix-frontend.git
cd narratix-frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Connecting to Backend
The frontend is configured to connect to the NarratixAI backend hosted on Replit. Update the proxy settings in `vite.config.ts` to point to your Replit backend URL:

```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'https://your-replit-url.replit.app',
      changeOrigin: true,
      secure: false,
    },
  },
}
```

## Folder Structure

```
narratix-frontend/
├── public/               # Public assets
├── src/                  # Source files
│   ├── components/       # React components
│   │   ├── ui/           # UI components (buttons, cards, etc.)
│   │   ├── layout/       # Layout components
│   │   ├── audio/        # Audio-related components
│   │   ├── avatar/       # Avatar-related components
│   │   └── charts/       # Chart components for analytics
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and services
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── shared/               # Shared schemas and types
└── ...config files       # Various configuration files
```

## Key Files

- `vite.config.ts`: Vite configuration with path aliases and proxy settings
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `src/App.tsx`: Main application component with routing
- `src/lib/queryClient.ts`: API request handling and React Query setup
- `src/hooks/use-auth.tsx`: Authentication context and hooks

## Deployment

To build the application for production:

```bash
npm run build
```

The build will be output to the `dist` directory, which can be deployed to any static hosting service.

## Important Notes

- Update the API URL in `vite.config.ts` to point to your Replit backend
- Make sure to set up environment variables if needed
- The frontend expects certain API endpoints to be available (see `src/lib/queryClient.ts`)