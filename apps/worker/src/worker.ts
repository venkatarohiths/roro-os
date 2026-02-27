const API = process.env.API_BASE || 'http://127.0.0.1:4010'

async function tick() {
  try {
    const res = await fetch(`${API}/v1/commands`)
    const data = (await res.json()) as { items: Array<{ id: string; status: string }> }
    const queued = data.items.filter((x) => x.status === 'queued').slice(0, 3)

    for (const cmd of queued) {
      await fetch(`${API}/v1/commands/${cmd.id}/status`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'running' }),
      })
      await new Promise((r) => setTimeout(r, 600))
      await fetch(`${API}/v1/commands/${cmd.id}/status`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'done' }),
      })
    }
  } catch (e) {
    console.error('worker tick failed', e)
  }
}

setInterval(tick, 1500)
console.log('roro worker running')
