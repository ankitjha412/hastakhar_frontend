# 🎨 Hastakhar Frontend

Frontend for **Hastakhar – Signature & Handwriting Forgery Detection**, built with **React, TailwindCSS, and Framer Motion**.  
This UI lets users upload two images, select a task (**signature** or **handwriting**), set a threshold, and verify authenticity using the **FastAPI backend**.

---

## 🚀 Features
- 📂 Upload **Reference** & **Test** images
- 🔄 Choose between **Signature** / **Handwriting**
- 🎚️ Adjustable **threshold slider**
- ✨ **Glowing cards & glitch animation** for futuristic look
- 🎬 Smooth animations with **Framer Motion**
- 🌐 Connects to **FastAPI backend**

---

## 📂 Folder Structure
HASTAKHAR_FRONTEND/
│── public/ # static assets
│── src/
│ ├── components/ # Reusable UI components
│ │ ├── FileUploader.jsx
│ │ ├── TaskToggle.jsx
│ │ ├── ThresholdSlider.jsx
│ │ ├── ResultCard.jsx
│ │ ├── FingerprintBackground.jsx
│ ├── services/
│ │ └── api.js # Axios calls to backend
│ ├── pages/
│ │ └── Home.jsx # Main page
│ ├── App.jsx
│ ├── index.js
│── package.json
│── tailwind.config.js
│── README.md

yaml
Copy
Edit

---

## ⚙️ Installation (Local)

1️⃣ **Clone repo**
```bash
git clone https://github.com/<your-username>/hastakhar_frontend.git
cd hastakhar_frontend
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Setup TailwindCSS (if not already configured)

bash
Copy
Edit
npx tailwindcss init -p
4️⃣ Run dev server

bash
Copy
Edit
npm run dev
App will be live at 👉 http://localhost:5173

🔌 Backend Connection
Update src/services/api.js with your backend URL:

js
Copy
Edit
const API_URL = "https://<your-backend>.onrender.com";

export async function verifyPair(task, threshold, refImg, testImg) {
  const formData = new FormData();
  formData.append("ref", refImg);
  formData.append("test", testImg);
  formData.append("task", task);
  formData.append("threshold", threshold);

  const res = await fetch(`${API_URL}/verify`, {
    method: "POST",
    body: formData,
  });

  return res.json();
}
🎨 UI Highlights
🌌 Animated fingerprint background

💡 Glowing pulsing borders

⚡ Framer Motion reveal steps

🖋️ Smooth typography with Tailwind

🌐 Deployment (Vercel)
Push code to GitHub.

Go to Vercel.

Import repo → Deploy.

Set backend API URL in environment variables if needed.

Done 🚀

📸 Demo
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/9ccbbcb0-4499-439e-91ca-45ce0d7cbb7a" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/0597e1b5-856a-477b-b487-81760b7077d1" />


📜 License
MIT License © 2025 Hastakhar Project

yaml
Copy
Edit

---

Do you want me to also create a **root README.md** that combines **frontend + backend** setup (so new developers can follow one file end-to-end)?







Ask ChatGPT
