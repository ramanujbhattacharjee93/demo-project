# React + TypeScript + Material UI Starter

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Install Dependencies
```
npm install
```

### Run Locally (Development)
```
npm start
```
This will open your app in the browser at `http://localhost:8080` by default.

### Build for Production
```
npm run build
```
The output will be in the `dist/` folder.

## Performance Optimization
- This project uses Material UI and some icons, which can increase bundle size.
- For production, consider using React.lazy and Suspense to lazy-load large components or icons.
- See [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/) for more info.

## Project Structure
```
public/
  index.html
src/
  App.tsx
  index.tsx
  index.css
webpack.config.js
package.json
tsconfig.json
```

---
This project uses [Material UI](https://mui.com/) for UI components. Feel free to extend it for your needs!
