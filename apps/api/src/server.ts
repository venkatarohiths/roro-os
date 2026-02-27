import Fastify from 'fastify'
import cors from '@fastify/cors'
import { nanoid } from 'nanoid'
import { CommandSchema, CreateCommandInputSchema, type Command } from '@roro/shared/src/contracts'

const app = Fastify({ logger: true })
await app.register(cors, { origin: true })

const commands: Command[] = []

app.get('/health', async () => ({ ok: true, service: 'roro-api' }))

app.get('/v1/commands', async () => {
  return { items: commands }
})

app.post('/v1/commands', async (req, reply) => {
  const parsed = CreateCommandInputSchema.safeParse(req.body)
  if (!parsed.success) return reply.code(400).send({ error: parsed.error.flatten() })

  const now = new Date().toISOString()
  const cmd: Command = {
    id: nanoid(),
    userId: parsed.data.userId,
    text: parsed.data.text,
    status: 'queued',
    createdAt: now,
    updatedAt: now,
  }

  commands.unshift(cmd)
  return { item: CommandSchema.parse(cmd) }
})

app.patch('/v1/commands/:id/status', async (req, reply) => {
  const { id } = req.params as { id: string }
  const body = req.body as { status?: Command['status'] }
  const row = commands.find((c) => c.id === id)
  if (!row) return reply.code(404).send({ error: 'Not found' })
  if (!body?.status) return reply.code(400).send({ error: 'status required' })
  row.status = body.status
  row.updatedAt = new Date().toISOString()
  return { item: row }
})

const port = Number(process.env.PORT || 4010)
await app.listen({ port, host: '0.0.0.0' })
