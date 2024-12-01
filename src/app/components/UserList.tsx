'use client';

import React, { useState } from 'react';

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
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            });
            if (response.ok) {
                const newUser = await response.json();
                setUsers([...users, newUser]);
                setName('');
                setEmail('');
            } else {
                console.error('Failed to add user');
            }
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
