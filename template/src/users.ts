interface User {
	name: string;
}

export async function getUsers(): Promise<User[]> {
	return Promise.resolve([{ name: "Javi" }, { name: "Núria" }, { name: "Isma" }]);
}
