describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", { name: /🌱⚛️ Create React App Codely template example/i }).should(
			"exist"
		);
	});
});
