DROP TABLE IF EXISTS faqs;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS settings;

CREATE TABLE faqs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO faqs (question, answer, order_index) VALUES 
('What services do you offer?', 'We offer a comprehensive suite of digital solutions including Web Development, Mobile App Development, UI/UX Design, SEO Optimization, and complete Digital Marketing strategies tailored for growth.', 1),
('How long does it take to build a website?', 'A standard landing page can take 1-2 weeks, while complex full-stack applications with custom backend systems (like E-commerce or dashboards) typically range from 4 to 12 weeks depending on your requirements.', 2);

CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  color_theme TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services (title, description, icon_name, color_theme, order_index) VALUES 
('Web Development', 'Fast, responsive and scalable web solutions.', 'Monitor', 'blue', 1),
('Mobile Apps', 'Powerful mobile apps for Android & iOS.', 'Smartphone', 'teal', 2),
('UI/UX Design', 'Beautiful, intuitive designs that convert.', 'Palette', 'orange', 3),
('Digital Marketing', 'Data-driven strategies to grow your brand online.', 'Cloud', 'purple', 4);

CREATE TABLE IF NOT EXISTS blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT DEFAULT 'Technology',
  excerpt TEXT,
  read_time TEXT DEFAULT '5 min read',
  author TEXT DEFAULT 'Admin',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT OR IGNORE INTO settings (key, value) VALUES ('admin_email', 'admin@jugaduji.com');
INSERT OR IGNORE INTO settings (key, value) VALUES ('admin_password', 'admin123');
INSERT OR IGNORE INTO settings (key, value) VALUES ('profile_photo', '/founder-avatar.png');
