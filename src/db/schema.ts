import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const folders = pgTable('folders', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    parentId: integer('parent_id'),
    userId: text('user_id').notNull(),
});

export const notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    parentId: integer('parent_id'),
    userId: text('user_id').notNull(),
    content: text('content'),
});