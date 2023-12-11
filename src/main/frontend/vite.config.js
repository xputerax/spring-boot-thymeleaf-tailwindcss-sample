import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: ['main.js', 'main.css'],
        },
        outDir: '../resources/static',
        assetsDir: 'vite-assets'
    },
    plugins: [
        tailwindcss,
    ]
})