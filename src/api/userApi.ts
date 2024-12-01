type NewUser = {
    name: string;
    email: string;
};

export async function addUser(newUser: NewUser) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
    });

    if (!response.ok) {
        throw new Error('Failed to add user');
    }

    return await response.json();
}
