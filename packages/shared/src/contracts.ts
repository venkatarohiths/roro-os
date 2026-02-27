import { z } from 'zod'

export const CommandSchema = z.object({
  id: z.string(),
  userId: z.string(),
  text: z.string().min(1),
  status: z.enum(['queued', 'running', 'done', 'failed']),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const CreateCommandInputSchema = z.object({
  userId: z.string().min(1),
  text: z.string().min(1),
})

export type Command = z.infer<typeof CommandSchema>
export type CreateCommandInput = z.infer<typeof CreateCommandInputSchema>
