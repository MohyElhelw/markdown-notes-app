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