
import bcrypt from "bcryptjs";
import { user } from '$lib/server/db/schema.js';
import { db } from '$lib/server/db';


export async function POST({ request, cookies }) {
    const { username, password } = await request.json();
    const hashedPass = await bcrypt.hash(password, 10);
    const createduser = await db.insert(user).values({ username, password: hashedPass }).returning()
    return new Response(JSON.stringify(createduser), { status: 201});

}
