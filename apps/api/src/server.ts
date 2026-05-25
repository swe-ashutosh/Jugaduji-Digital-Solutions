import { serve } from '@hono/node-server'
import app from './index'
import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Mock D1 bindings for local Node.js development
const getD1DatabasePath = () => {
  const d1Dir = path.resolve(__dirname, '../.wrangler/state/v3/d1/miniflare-D1DatabaseObject');
  if (fs.existsSync(d1Dir)) {
    try {
      const files = fs.readdirSync(d1Dir);
      const sqliteFile = files.find(f => f.endsWith('.sqlite') && f !== 'metadata.sqlite');
      if (sqliteFile) {
        return path.join(d1Dir, sqliteFile);
      }
    } catch (err) {
      console.error('[D1 Mock] Error reading D1 directory:', err);
    }
  }
  return null;
};

const dbPath = getD1DatabasePath();
console.log(`[D1 Mock] Loading SQLite database from: ${dbPath}`);

let db: any = null;
if (dbPath) {
  try {
    db = new Database(dbPath);
  } catch (err) {
    console.error('[D1 Mock] Failed to open SQLite database:', err);
  }
} else {
  console.warn('[D1 Mock] No local D1 database file found. DB bindings will be inactive.');
}

const mockDB = {
  prepare: (query: string) => {
    return {
      bind: (...values: any[]) => {
        return {
          all: async () => {
            if (!db) return { results: [] };
            try {
              const stmt = db.prepare(query);
              const results = stmt.all(...values);
              return { results };
            } catch (err) {
              console.error(`[D1 Mock Error] Query: ${query}`, err);
              return { results: [], error: String(err) };
            }
          },
          run: async () => {
            if (!db) return { success: false };
            try {
              const stmt = db.prepare(query);
              const info = stmt.run(...values);
              return { success: info.changes > 0 };
            } catch (err) {
              console.error(`[D1 Mock Error] Query: ${query}`, err);
              return { success: false, error: String(err) };
            }
          },
          first: async () => {
            if (!db) return null;
            try {
              const stmt = db.prepare(query);
              return stmt.get(...values) || null;
            } catch (err) {
              console.error(`[D1 Mock Error] Query: ${query}`, err);
              return null;
            }
          }
        };
      },
      all: async () => {
        if (!db) return { results: [] };
        try {
          const stmt = db.prepare(query);
          const results = stmt.all();
          return { results };
        } catch (err) {
          console.error(`[D1 Mock Error] Query: ${query}`, err);
          return { results: [], error: String(err) };
        }
      },
      run: async () => {
        if (!db) return { success: false };
        try {
          const stmt = db.prepare(query);
          const info = stmt.run();
          return { success: info.changes > 0 };
        } catch (err) {
          console.error(`[D1 Mock Error] Query: ${query}`, err);
          return { success: false, error: String(err) };
        }
      },
      first: async () => {
        if (!db) return null;
        try {
          const stmt = db.prepare(query);
          return stmt.get() || null;
        } catch (err) {
          console.error(`[D1 Mock Error] Query: ${query}`, err);
          return null;
        }
      }
    };
  }
};

app.use('*', async (c, next) => {
  if (!c.env) {
    c.env = { DB: mockDB } as any;
  } else if (!c.env.DB) {
    c.env.DB = mockDB;
  }
  await next();
});

const port = 8787;
console.log(`[API] Server is running on port ${port}...`);

serve({
  fetch: app.fetch,
  port
});
