# 💸 Cashlens

**Cashlens** is a personal expense tracker that helps you visualize, manage, and analyze your income and expenses effortlessly. It includes intuitive charts and summary dashboards, allowing users to monitor their financial habits and make informed decisions.

---

## 🚀 Features

- 📊 Interactive charts (using **Recharts**) for Income, Expense, and Summary views
- 🧾 Perform **CRUD operations** (Create, Read, Update, Delete) on transactions
- 🔒 User authentication using **Spring Security** (JWT support coming soon)
- 🐳 Fully containerized using **Docker** for easy deployment
- ☁️ Uses **Aiven’s DigitalOcean-managed MySQL** for secure and scalable cloud storage

---

## 🧠 Tech Stack

**Frontend:** React.js  
**Backend:** Spring Boot  
**Database:** MySQL (via Aiven Cloud)  
**Containerization:** Docker & Docker Compose

---

## 🧩 System Architecture

The project follows a **client-server architecture**:

- The **React frontend** communicates with the **Spring Boot backend** through REST APIs.
- The backend interacts with the **MySQL database** hosted on Aiven.
- Both components run inside Docker containers orchestrated by `docker-compose`.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/GareerSenpai/Cashlens.git
cd cashlens
```

### 2️⃣ Configure Environment Variables

Create a **.env.local** file in the same directory where your **application.yml** is present in the server directory based on the example below:

### .env.example

```bash
SPRING_DATASOURCE_URL=x
SPRING_DATASOURCE_USERNAME=x
SPRING_DATASOURCE_PASSWORD=x
MAIL_USERNAME=x
MAIL_PASSWORD=x
SERVER_PORT=x
```

### 3️⃣ Run with Docker

Make sure you have **Docker** and **Docker Compose** installed.

```bash
docker-compose up --build
```

**This will:**

- Spin up the Spring Boot backend on port 9000 <br>
  (mapped as 9000:9000 in Docker)

- Serve the React frontend <br>
  (mapped as 5173:80, so it runs at http://localhost:5173
  on your system)

### Visit:

**Frontend** → http://localhost:5173

**Backend API** → http://localhost:9000

---

## 📈 Roadmap

✅ Implement CRUD operations

✅ Add chart-based analytics

🔄 Integrate JWT authentication

🔜 Add user profile and budget goals

🔜 Deployment (Render / Railway / Docker Hub)

---

## 🤝 Contributing

- Fork the repository

- Create your feature branch: git checkout -b feature/awesome-feature

- Commit your changes: git commit -m 'Add awesome feature'

- Push to the branch: git push origin feature/awesome-feature

- Open a pull request

---

## 📜 License

This project is licensed under the MIT License.

---

## 🧑‍💻 Author

#### Anurag Bhattacharjee

📧 anuragbhattacharjee612@gmail.com
