import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  DB: any
}

const app = new Hono<{ Bindings: Bindings }>()

// Add CORS so the web app can fetch data from the API
app.use('/*', cors())

app.get('/', (c) => {
  return c.text('Jugaduji API is running!')
})

// --- FAQs API ---

// 1. GET all active FAQs (Used by the public website)
app.get('/api/faqs', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM faqs WHERE is_active = 1 ORDER BY order_index ASC'
    ).all()
    return c.json(results)
  } catch (e) {
    return c.json({ error: 'Failed to fetch FAQs' }, 500)
  }
})

// 2. GET all FAQs including inactive (Used by the Admin Panel)
app.get('/api/admin/faqs', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM faqs ORDER BY order_index ASC'
    ).all()
    return c.json(results)
  } catch (e) {
    return c.json({ error: 'Failed to fetch FAQs' }, 500)
  }
})

// 3. POST a new FAQ (Used by the Admin Panel)
app.post('/api/admin/faqs', async (c) => {
  try {
    const body = await c.req.json()
    const { question, answer, order_index = 0 } = body
    
    if (!question || !answer) {
      return c.json({ error: 'Question and answer are required' }, 400)
    }

    const { success } = await c.env.DB.prepare(
      'INSERT INTO faqs (question, answer, order_index) VALUES (?, ?, ?)'
    ).bind(question, answer, order_index).run()

    if (success) {
      return c.json({ message: 'FAQ created successfully' }, 201)
    }
    return c.json({ error: 'Failed to create FAQ' }, 500)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// 4. DELETE an FAQ (Used by the Admin Panel)
app.delete('/api/admin/faqs/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const { success } = await c.env.DB.prepare(
      'DELETE FROM faqs WHERE id = ?'
    ).bind(id).run()

    if (success) {
      return c.json({ message: 'FAQ deleted successfully' })
    }
    return c.json({ error: 'Failed to delete FAQ' }, 500)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// --- SERVICES API ---

// 1. GET all active Services (Public)
app.get('/api/services', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM services WHERE is_active = 1 ORDER BY order_index ASC'
    ).all()
    return c.json(results)
  } catch (e) {
    return c.json({ error: 'Failed to fetch services' }, 500)
  }
})

// 2. GET all Services (Admin)
app.get('/api/admin/services', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM services ORDER BY order_index ASC'
    ).all()
    return c.json(results)
  } catch (e) {
    return c.json({ error: 'Failed to fetch services' }, 500)
  }
})

// 3. POST a new Service (Admin)
app.post('/api/admin/services', async (c) => {
  try {
    const body = await c.req.json()
    const { title, description, icon_name, color_theme, order_index = 0 } = body
    
    if (!title || !description || !icon_name || !color_theme) {
      return c.json({ error: 'Missing required fields' }, 400)
    }

    const { success } = await c.env.DB.prepare(
      'INSERT INTO services (title, description, icon_name, color_theme, order_index) VALUES (?, ?, ?, ?, ?)'
    ).bind(title, description, icon_name, color_theme, order_index).run()

    if (success) {
      return c.json({ message: 'Service created successfully' }, 201)
    }
    return c.json({ error: 'Failed to create service' }, 500)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// 4. DELETE a Service (Admin)
app.delete('/api/admin/services/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const { success } = await c.env.DB.prepare(
      'DELETE FROM services WHERE id = ?'
    ).bind(id).run()

    if (success) {
      return c.json({ message: 'Service deleted successfully' })
    }
    return c.json({ error: 'Failed to delete service' }, 500)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// --- BLOGS API ---

// 1. GET all blogs (Public)
app.get('/api/blogs', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM blogs ORDER BY created_at DESC'
    ).all()
    return c.json(results)
  } catch (e) {
    return c.json({ error: 'Failed to fetch blogs' }, 500)
  }
})

// 2. GET a single blog by ID (Public)
app.get('/api/blogs/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const result = await c.env.DB.prepare(
      'SELECT * FROM blogs WHERE id = ?'
    ).bind(id).first()
    if (!result) return c.json({ error: 'Blog not found' }, 404)
    return c.json(result)
  } catch (e) {
    return c.json({ error: 'Failed to fetch blog' }, 500)
  }
})

// 3. POST a new blog (Admin)
app.post('/api/admin/blogs', async (c) => {
  try {
    const body = await c.req.json()
    const { title, content, image_url, category, excerpt, read_time, author } = body
    
    if (!title || !content) {
      return c.json({ error: 'Title and content are required' }, 400)
    }

    const { success } = await c.env.DB.prepare(
      'INSERT INTO blogs (title, content, image_url, category, excerpt, read_time, author) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(title, content, image_url, category || 'Technology', excerpt || '', read_time || '5 min read', author || 'Admin').run()

    if (success) {
      return c.json({ message: 'Blog created successfully' }, 201)
    }
    return c.json({ error: 'Failed to create blog' }, 500)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// 4. DELETE a blog (Admin)
app.delete('/api/admin/blogs/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const { success } = await c.env.DB.prepare(
      'DELETE FROM blogs WHERE id = ?'
    ).bind(id).run()

    if (success) {
      return c.json({ message: 'Blog deleted successfully' })
    }
    return c.json({ error: 'Failed to delete blog' }, 500)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// --- AUTH API ---

// 1. POST login (Admin)
app.post('/api/admin/login', async (c) => {
  try {
    const body = await c.req.json()
    const { email, password } = body

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400)
    }

    const { results } = await c.env.DB.prepare(
      "SELECT * FROM settings WHERE key IN ('admin_email', 'admin_password')"
    ).all()
    
    let storedEmail = 'admin@jugaduji.com'
    let storedPassword = 'admin123'

    results.forEach((row: any) => {
      if (row.key === 'admin_email') storedEmail = row.value
      if (row.key === 'admin_password') storedPassword = row.value
    })

    if (email === storedEmail && password === storedPassword) {
      return c.json({ message: 'Login successful' })
    }

    return c.json({ error: 'Invalid credentials' }, 401)
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// 2. POST forgot password (Admin)
app.post('/api/admin/forgot-password', async (c) => {
  try {
    const body = await c.req.json()
    const { email } = body

    if (!email) {
      return c.json({ error: 'Email is required' }, 400)
    }

    const result = await c.env.DB.prepare(
      "SELECT value FROM settings WHERE key = 'admin_email'"
    ).first()
    
    const storedEmail = result ? result.value : 'admin@jugaduji.com'

    if (email === storedEmail) {
      // In a real app, send an email here.
      // We simulate success.
      return c.json({ message: 'If the email exists, a password reset link has been sent.' })
    }

    // Always return the same message to avoid email enumeration
    return c.json({ message: 'If the email exists, a password reset link has been sent.' })
  } catch (e) {
    return c.json({ error: 'Invalid request' }, 400)
  }
})

// --- SETTINGS API ---

// 1. GET settings (Admin)
app.get('/api/admin/settings', async (c) => {
  try {
    const { results } = await c.env.DB.prepare('SELECT * FROM settings').all()
    const settingsMap: Record<string, string> = {}
    results.forEach((row: any) => {
      settingsMap[row.key] = row.value
    })
    return c.json(settingsMap)
  } catch (e) {
    return c.json({ error: 'Failed to fetch settings' }, 500)
  }
})

// 2. POST update settings (Admin)
app.post('/api/admin/settings', async (c) => {
  try {
    const body = await c.req.json()
    const { admin_email, admin_password, profile_photo } = body

    if (admin_email) {
      await c.env.DB.prepare(
        'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)'
      ).bind('admin_email', admin_email).run()
    }

    if (admin_password) {
      await c.env.DB.prepare(
        'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)'
      ).bind('admin_password', admin_password).run()
    }

    if (profile_photo) {
      await c.env.DB.prepare(
        'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)'
      ).bind('profile_photo', profile_photo).run()
    }

    return c.json({ message: 'Settings updated successfully' })
  } catch (e) {
    return c.json({ error: 'Failed to update settings' }, 500)
  }
})

// --- CONTACT API ---
app.post('/api/contact', async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json()

    if (!name || !email || !message) {
      return c.json({ error: 'Name, email, and message are required' }, 400)
    }

    const emailPayload = {
      personalizations: [
        {
          to: [{ email: 'info@jugaduji.com', name: 'Jugaduji Info' }],
        },
      ],
      from: {
        email: 'noreply@jugaduji.com',
        name: 'Jugaduji Website Form',
      },
      reply_to: {
        email: email,
        name: name,
      },
      subject: `New Contact Inquiry: ${subject || 'General'}`,
      content: [
        {
          type: 'text/plain',
          value: `Name: ${name}\nEmail: ${email}\nService: ${subject}\n\nMessage:\n${message}`,
        },
      ],
    }

    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('MailChannels Error:', errorText)
      return c.json({ error: `MailChannels Error: ${errorText}` }, 500)
    }

    return c.json({ message: 'Message sent successfully' })
  } catch (e) {
    console.error('Contact Form Error:', e)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

export default app
