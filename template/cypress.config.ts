import { defineConfig } from "cypress";

export default defineConfig({
	video: false,
	e2e: {
		baseUrl: "http://localhost:3000",
		specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
	},
});
