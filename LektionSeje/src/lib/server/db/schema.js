import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull()
});



export const patient = pgTable('patient', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull()
});

export const painValues = pgTable('pain_values', {
	id: serial('id').primaryKey(),
	patientId: integer('patient_id').references(() => patient.id).notNull(),
	painValue: integer('pain_value').notNull(), // 0-5
	log: text('log').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});