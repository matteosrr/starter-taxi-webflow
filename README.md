# Taxi Webflow Starter

A simple and lightweight starter for modern web development, combining **Vite**, **GSAP**, **Lenis**, and **Taxi.js**. This setup provides tools for smooth page transitions, animations, and scrolling, making it easy to enhance your Webflow projects with minimal effort.

## Features

- **Vite**: A fast and modern build tool for blazing-fast development.
- **GSAP**: A powerful JavaScript library for creating high-performance animations.
- **Lenis**: A smooth scrolling library for a better user experience.
- **Taxi.js**: A framework for seamless page transitions.

## Demo and Webflow Project

- **Live Demo**: [https://webflow-taxi-starter.webflow.io/](https://webflow-taxi-starter.webflow.io/)
- **Webflow Project**: [https://preview.webflow.com/preview/webflow-taxi-starter](https://preview.webflow.com/preview/webflow-taxi-starter)

## Special Thanks

Special thanks to [**Federico Valla**](https://x.com/ffmfedd), an amazing developer whose work and generously shared repositories inspired this project. His contributions to the dev community have been invaluable.

## Project Structure

```
src/
├── modules/
│   ├── renderers/
│   │   └── DefaultRenderer.js
│   ├── transitions/
│   │   └── DefaultTransition.js
│   ├── pages.js
│   ├── preloader.js
│   └── scroll.js
└── app.js
```

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/matteosrr/taxi-webflow-starter.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Using the Starter in Webflow

To use this starter in your Webflow project, add the following code to the Custom Code section of your Webflow project (in the `<head>` or `<body>` section):

```html
<script>
  function onErrorLoader() {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://your-deployment-url.netlify.app/assets/index.js'
    script.defer = 'true'
    document.head.appendChild(script)
  }
</script>

<script type="module" src="http://localhost:5173/@vite/client"></script>
<script
  type="module"
  src="http://localhost:5173/src/app.js"
  onerror="onErrorLoader()"
></script>
```

## License

This project is licensed under the [MIT License](./LICENSE).
