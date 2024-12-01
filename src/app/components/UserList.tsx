'use client';

import React, { useState } from 'react';
import { addUser } from '@/api/userApi';

type User = {
    id: number;
    name: string;
    email: string;
};

type Props = {
    initialUsers: User[];
};

export function UserList({ initialUsers }: Props) {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = async (event: React.FormEvent) => {
        event.preventDefault();
        if (name && email) {
            const newUser = await addUser({ name, email });
            setUsers([...users, newUser]);
            setName('');
            setEmail('');
        }
    };

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}
