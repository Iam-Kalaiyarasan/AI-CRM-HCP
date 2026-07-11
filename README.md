# 🤖 AI First CRM - HCP Module

An AI-powered Customer Relationship Management (CRM) application for Healthcare Professionals (HCPs). This project uses Artificial Intelligence to analyze doctor interaction notes, automatically extract key information, and store it in a structured CRM database.

---

## 📌 Features

- 🤖 AI-powered interaction analysis using Groq LLM
- 📝 Automatic extraction of:
  - HCP Name
  - Interaction Type
  - Voice Summary
  - Sentiment
  - Follow-up
- 💾 Save interactions to MySQL
- 📊 Dashboard with summary statistics
- 📋 Recent interactions table
- 🔍 Search interactions by HCP name
- ✏️ Edit existing interactions
- 📖 Interactive API documentation using Swagger UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Context API
- CSS

### Backend
- FastAPI
- Python
- Uvicorn
- Groq API

### Database
- MySQL

### AI
- Groq Large Language Model (LLM)

---

## 📂 Project Structure

```
AI-CRM-HCP/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── database/
│   │   ├── langgraph/
│   │   ├── tools/
│   │   └── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-CRM-HCP.git
```

```bash
cd AI-CRM-HCP
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Open a new terminal

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run React application

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Database

Create a MySQL database

```sql
CREATE DATABASE ai_crm_hcp;
```

Update database credentials in

```
backend/app/database/database.py
```

Example

```python
mysql.connector.connect(
    host="localhost",
    user="root",
    password="YOUR_PASSWORD",
    database="ai_crm_hcp"
)
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /ai | Analyze doctor interaction |
| POST | /interactions | Save interaction |
| GET | /search | Search interactions |
| PUT | /interactions/{id} | Update interaction |
| GET | /summary | Dashboard summary |
| GET | /recent | Recent interactions |

---

## Workflow

```
User enters interaction
          │
          ▼
React Frontend
          │
          ▼
FastAPI Backend
          │
          ▼
Groq AI Analysis
          │
          ▼
Structured CRM Data
          │
          ▼
Auto-fill Interaction Form
          │
          ▼
Save to MySQL Database
          │
          ▼
Dashboard & Search
```

---

## Future Enhancements

- User Authentication (JWT)
- Role-Based Access Control
- Export Reports (PDF & Excel)
- Analytics Dashboard
- Email Notifications
- Advanced Search Filters
- Responsive Mobile UI

---

## Author

**Kalaiyarasan S**

Aspiring Full Stack Python Developer

- Python
- FastAPI
- React.js
- MySQL
- AI Integration

---

## License

This project is developed for educational purposes and portfolio demonstration.
