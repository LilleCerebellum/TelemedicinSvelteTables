import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull()
});

/*
export const feedback = pgTable('feedback', {
	id: serial('id').primaryKey(),
	userId: integer('user_id').notNull().references(() => user.id),
	rating: integer('rating').notNull(), // 1 to 5
	comment: text('comment'),
	createdAt: timestamp('created_at').defaultNow().notNull()
}); */

export const patient = pgTable('patient', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull()
});