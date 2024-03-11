import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/forecast-react-app/",
  plugins: [react()],
});
