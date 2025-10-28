import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix(), // 👈 Remix plugin অবশ্যই দরকার
    tsconfigPaths(),
  ],
    css: {
    devSourcemap: true,
}
});


// import { defineConfig } from 'vite'
// import { vitePlugin as remix } from "@remix-run/dev";

// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     devSourcemap: true,
// }
// })
