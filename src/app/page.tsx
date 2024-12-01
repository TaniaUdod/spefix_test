import { UserList } from './components/UserList';

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function HomePage() {
  const res = await fetch('http://localhost:3000/api/users');
  const initialUsers: User[] = await res.json();

  return (
      <div>
          <h1>Welcome to the User App</h1>
          <h2>Users List</h2>
          <UserList initialUsers={initialUsers}/>
      </div>
  );
}
