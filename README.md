# 🔥 ThoughtBox

**ThoughtBox** is an **offline-first notes application** built with **React + Supabase** that works seamlessly even without an internet connection.  
Notes are cached locally, synced intelligently, and resolved automatically when conflicts occur.

> ✨ Built to demonstrate **custom offline architecture**, **real-time sync**, and modern backend engineering

---

## 🚀 Live Features

- 📴 **Offline-First Experience** – Write and access notes even when you’re offline  
- 🔄 **Automatic Sync on Reconnect** – Changes sync automatically when the internet is back  
- ⚡ **Real-Time Updates** – Instantly see changes via Supabase Realtime  
- 🔐 **Secure Authentication** – Login via Supabase Auth with email/magic link  
- 🧠 **Smart Conflict Resolution** – Handles concurrent edits gracefully  
- 📝 **Create, Read, Update, Delete Notes** – Full CRUD functionality  
- 📂 **Organize Notes** – Grid layout for easy navigation  
- 🤖 **RAG-Powered Chatbot (ThoughtBot)** – Ask questions about your notes, summarize, or recall info instantly  
- ✨ **Floating Chat Widget** – Minimal sticky icon that expands to a chatbot window  
- 🏷 **Note Metadata** – Timestamps, IDs, and authorship  
- ⚙ **Custom Offline Queue** – Queues edits while offline and applies them on reconnect  

---

## 🧠 Why ThoughtBox?

Most apps break when the internet drops.  
**ThoughtBox doesn’t.**

Instead of relying on built-in backend persistence, ThoughtBox implements a **custom offline-first architecture**:

- Local caching using IndexedDB  
- Write queue for offline mutations  
- Version-based conflict resolution  
- Intelligent sync engine with Supabase backend  

This makes ThoughtBox:

- Resilient  
- Predictable  
- Scalable  
- Production-ready  

---

[View the Demo](https://www.awesomescreenshot.com/video/49704855?key=7ce5cd27eeff431a58fc78dfbdbad5a4)



## 🧩 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Tailwind CSS |
| Backend | Supabase |
| Database | PostgreSQL |
| Auth | Supabase Auth |
| Offline Cache | IndexedDB |
| Realtime | Supabase Realtime |
| AI Chatbot | RAG Architecture |
| Hosting | Vercel / Netlify |

---

## 🏗 Architecture Overview

ThoughtBox follows a layered architecture:

- **UI Layer** – React components, Tailwind CSS, Chat widget  
- **Application Layer** – Hooks, state management, and orchestration (`useNotes`, `useChat`)  
- **Domain Layer** – Business logic, sync engine, conflict resolution  
- **Infrastructure Layer** – Supabase client, IndexedDB wrapper  

This separation ensures **scalability**, **maintainability**, and **clean system boundaries**.

---

## 🗂️ Project Structure
