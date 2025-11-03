**Tech:** Fastify + MongoDB

**Duration:** 7 Days

**Goal:** CRUD API for blog posts

---

### 🎯 KPIs

- ✅ All 5 CRUD endpoints working
- 🗃️ MongoDB connected
- 🧾 Swagger + README docs
- 🧩 Clean folder structure
- 🚀 Deployed on Render/Railway

---

Personal-Blog/
│
├── 📄 package.json
├── 📄 .env
├── 📄 .gitignore
│
└── 📂 src/
    ├── 📄 server.js              # Entry point (starts the Fastify server)
    │
    ├── 📂 config/
    │   └── db.js                 # MongoDB connection setup
    │
    ├── 📂 models/
    │   └── article.model.js      # Schema for blog articles
    │
    ├── 📂 routes/
    │   └── article.routes.js     # Defines CRUD routes (GET, POST, PUT, DELETE)
    │
    └── 📂 controllers/
        └── article.controller.js # Handles logic for each route (CRUD functions)
