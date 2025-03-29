import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/project1/", // Change for project2 and project3 accordingly
	build: {
		outDir: `../dist/proj1`, // Change for project2 and project3
	},
});
