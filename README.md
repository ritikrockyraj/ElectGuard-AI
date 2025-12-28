# 🛡️ ElectGuard AI
### The Digital Bodyguard for Democracy

**ElectGuard AI** is an end-to-end secure electronic voting system designed to eliminate fraud, coercion, and impersonation. It combines **Computer Vision** for security, **Voice Assistance** for accessibility, and **GenAI** for real-time auditing.

---

## 🌟 Key Features

### 🗣️ 1. Voice-Guided Voting (Accessibility)
* **Problem:** Many voters are illiterate or visually impaired.
* **Solution:** A built-in **AI Voice Assistant** guides the voter through the entire process.
    * *"Welcome! Please look at the camera."*
    * *"You have selected Party A. Confirm?"*
    * **Impact:** Makes voting accessible for everyone (Divyang-friendly).

### 🔒 2. Anti-Hack Data Security
* **Problem:** Digital votes can be tampered with.
* **Solution:**
    * **AES-256 Encryption:** Every vote is encrypted instantly.
    * **Immutable Logs:** Admin cannot change a vote without triggering a "Tamper Alert".
    * **AI Audit:** Google Gemini verifies session logs before counting.

---

## 🚀 How It Works (The 3-Layer Shield)

1.  **Identity Layer:** Face Verification & Liveness Detection (No masks/photos allowed).
2.  **Surveillance Layer:** AI monitors for phones, multiple people, or coercion attempts during voting.
3.  **Audit Layer:** Gemini AI analyzes the session log to validate the vote integrity.

---

## 📂 Project Structure (Monorepo)

```text
ElectGuard-AI/
│
├── 📂 frontend/               (React + Vite + Tailwind)
│   ├── src/
│   │   ├── 📂 components/     (UI Parts: Auth, Voting, Admin)
│   │   ├── 📂 hooks/          (Logic: useVoice, useCamera)
│   │   └── services/          (API & Encryption)
│
├── 📂 backend/                (Node.js + Express)
│   ├── 📂 controllers/        (Logic: Vote, Fraud Check)
│   ├── 📂 models/             (Database Schemas)
│   └── server.js              (Entry Point)
│
├── 📂 ml_engine/              (Python & AI Models)
│   ├── model_training.py      (Face/Object Detection Scripts)
│   └── requirements.txt       (Python Dependencies)
│
├── 📂 docs/                   (Project Diagrams & Screenshots)
└── README.md                  (You are here)
