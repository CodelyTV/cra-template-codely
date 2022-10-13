export interface User {
	name: string;
}

export function useUsers(): User[] {
	return [{ name: "Javi" }, { name: "Isma" }];
}
