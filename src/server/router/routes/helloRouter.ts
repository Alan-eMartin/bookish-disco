import { z } from 'zod';
import { createRouter } from '@/server/createRouter';

export const helloRouter = createRouter().query('name', {
  input: z.object({
    name: z.string(),
  }),
  async resolve({ input }) {
    /**
     * For pagination you can have a look at this docs site
     * @link https://trpc.io/docs/useInfiniteQuery
     */
    return {
      greeting: input?.name || 'world',
    };
  },
});
