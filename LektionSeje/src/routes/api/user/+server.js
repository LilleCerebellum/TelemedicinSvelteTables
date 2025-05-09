
import bcrypt from "bcryptjs";
import { patient } from '$lib/server/db/schema.js';
import { db } from '$lib/server/db';


export async function POST({ request, cookies }) {
    const { username, password } = await request.json();
    const hashedPass = await bcrypt.hash(password, 10);
    try {
        const createduser = await db.insert(patient).values({ username, password: hashedPass }).returning();
        return new Response(JSON.stringify(createduser), { status: 201 });
    } catch (err) {
        if (err.code === '23505') { // PostgreSQL unique violation
            return new Response(JSON.stringify({ error: 'Username already taken' }), { status: 400 });
        }
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }

}
