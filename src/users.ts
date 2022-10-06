interface User {
  name: string;
}

export async function getUsers(): Promise<User[]> {
  return await [{ name: "Javi" }, { name: "Núria" }, { name: "Isma" }];
}
