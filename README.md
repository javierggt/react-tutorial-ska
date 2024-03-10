# Ska Packages proto-dashboard

This is a simple dashboard for Ska packages. It was created as a tutorial to learn react using NPM + Vite.

After the basic setup, each commit introduces one simple feature:

- Setup. Create empty vite app, add dependencies and fix formatting
- Add react-bootstrap table. A simple component using react-bootstrap.
- Make a proto-dashboard for Ska packages.
- Add custom table module. Abstract the table into a reusable component.
- Add sorting
  - Install dependencies (semver and react-icons).
  - Add a `sort` prop.
  - Sort on click.
  - Sorting semantic versions.
- Display test status with different colors
- Using the `useEffect` hook to download package list (see https://react.dev/reference/react/hooks)
- Add text input to filter on package names

# React + Vite Setup

Generated like this:

```
npm create vite@latest react-template -- --template react
cd react-template
npm install bootstrap react-bootstrap react-icons
npm install react-router-dom --save-dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
