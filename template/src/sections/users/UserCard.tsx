import styles from "./UserCard.module.scss";
import { User } from "./useUsers";

export function UserCard({ user }: { user: User }) {
	return <div className={styles.userCard}>{user.name}</div>;
}
