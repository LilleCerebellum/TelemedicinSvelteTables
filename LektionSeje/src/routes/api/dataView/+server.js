import { db } from '$lib/server/db';
import { patient, painValues } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function POST({ request }) {
	const { patientUsername } = await request.json();

	// Step 1: Find the patient by username
	const patientData = await db.query.patient.findFirst({
		where: eq(patient.username, patientUsername)
	});

	if (!patientData) {
		return new Response(JSON.stringify({ error: 'Patient not found' }), { status: 404 });
	}


	const values = await db
		.select()
		.from(painValues)
		.where(eq(painValues.patientId, patientData.id))
		.orderBy(painValues.createdAt);

	return new Response(JSON.stringify(values), { status: 200 });
}
