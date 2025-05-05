import type { USERNAME } from '$env/static/private';

import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	USERNAME: text('username').notNull().unique(),
	password: text('password').notNull()
});
