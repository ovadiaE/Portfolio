Thanks for checking out the codebase.

This project includes a couple of optional hidden components (hint: games 👀) for anyone curious enough to explore the codebase.

If you want to enable them locally, follow these steps:

1. Use Node 16

This project requires Node v16.

If you're using nvm, run:

nvm use 16

2. Start the Development Server
   npm run start

3. Enable the Hidden Components

Open src/App.tsx and locate both the imports and component usage that are commented out.

Uncomment these imports:
// Tetris,
// Chess,

Then uncomment the components inside the JSX:
{/_ <Chess/> _/}
{/_ <Tetris/> _/}

Once you remove the comments, the hidden games will appear in your local build.
A small easter egg for recruiters and anyone diving deeper into the code. Enjoy! 🎮
