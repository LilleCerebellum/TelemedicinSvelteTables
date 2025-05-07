import bcrypt from "bcryptjs";

export async function POST({ request, cookies }) {
    const { username, password } = await request.json();
    const hashedPass = await bcrypt.hash(password, 10);
    const createduser = await db.insert(user).values({ username, password: hashedPass }).returning()
    return new Response(json.stringify(createduser), { status: 201});

}