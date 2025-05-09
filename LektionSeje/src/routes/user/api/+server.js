/*
import bcrypt from "bcryptjs";
import { user } from '$lib/server/db/Schema.js';
import { db } from '$lib/server/db';


export async function POST({ request, cookies }) {
    const { username, password } = await request.json();
    const hashedPass = await bcrypt.hash(password, 10);
    const createduser = await db.insert(user).values({ username, password: hashedPass }).returning()
    return new Response(json.stringify(createduser), { status: 201});

} */

import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';

export async function POST({ request }) {
    const { username, password } = await request.json();

    // Dynamic import to avoid Vite/Rollup bundling issues
    const bcrypt = await import('bcryptjs');

    const hashedPass = await bcrypt.hash(password, 10); // Hash password
    const createdUser = await db.insert(user).values({
        username,
        password: hashedPass
    }).returning();

    return new Response(JSON.stringify(createdUser), { status: 201 });
}