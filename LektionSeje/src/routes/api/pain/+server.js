import { painValues } from '$lib/server/db/schema.js';
import { db } from '$lib/server/db';
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';


export async function POST({ request, cookies }) {
	const session = cookies.get('session');
	if (!session) {
		return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
	}

	let patientData;
	try {
		patientData = jwt.verify(session, env.JWT_SECRET);
	} catch (err) {
		return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
	}

	const { painValue, log } = await request.json();

	if (typeof painValue !== 'number' || painValue < 0 || painValue > 5) {
		return new Response(JSON.stringify({ error: 'Invalid pain value' }), { status: 400 });
	}

	await db.insert(painValues).values({
		patientId: patientData.id,
		painValue,
		log
	});

	return new Response(JSON.stringify({ message: 'Pain logged' }), { status: 201 });
}