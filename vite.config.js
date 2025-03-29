import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	server: {
		proxy: {
			"/proj1": {
				target: "http://localhost:5173", // Start proj1 server separately
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/proj1/, ""),
			},
			"/proj2": {
				target: "http://localhost:5174", // Start proj2 server separately
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/proj2/, ""),
			},
		},
	},
});
