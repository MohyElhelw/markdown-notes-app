import { createServerFn } from '@tanstack/react-start';
import { db } from './index';
import { folders } from './schema';

export const createFolder = createServerFn({ method: 'POST' })
    .handler(async () => {
        const result = await db.insert(folders).values({
            name: 'My First Folder',
            userId: 'test-user-123',
        }).returning();

        return result;
    })
    export const getFolders = createServerFn({ method: 'GET' }).handler(async () => {
        const result = await db.select().from(folders);
        return result;
    });