import { NextApiRequest, NextApiResponse } from 'next';

type User = {
    id: number;
    name: string;
    email: string;
};

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

const handleGet = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(users);
};

const handlePost = (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email } = req.body;
    if (name && email) {
        const newUser = { id: users.length + 1, name, email };
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).json({ message: 'Name and email are required' });
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return handleGet(req, res);
        case 'POST':
            return handlePost(req, res);
        default:
            res.status(405).json({ message: 'Method not allowed' });
            break;
    }
}
