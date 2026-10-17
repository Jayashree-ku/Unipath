# UNIPATH

### **Your Future, Your Path.**

> *"Don't just choose where to study. Discover what you could become."*

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![Framework](https://img.shields.io/badge/Framework-React%2019%20%2B%20Vite%206-blue.svg)]()
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38bdf8.svg)]()
[![Icons](https://img.shields.io/badge/Icons-Lucide%20React-orange.svg)]()
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)]()

---

## 🌐 Live Demo & Deployment

- **Public Live Application:** https://unipath-amber.vercel.app/
- **GitHub Repository:** [https://github.com/Jayashree-ku/UNIPATH](https://github.com/Jayashree-ku/UNIPATH)
- **Target Institution:** [Sapthagiri NPS University](https://www.snpsu.edu.in/), Bengaluru, India

---

## 📌 The Problem

Choosing an engineering path is one of the most critical decisions a student and their family make, yet the current discovery experience is deeply broken:

1. **Static Marketing & Catalogues:** Traditional university websites and brochures list departments, cutoffs, and fees without explaining what a student will actually study or build.
2. **Abstract Career Projections:** Students often pick branches based on rumors or peer pressure without understanding the difference between Computer Science, AI & ML, Data Science, Electronics & Communication, and Electrical Systems.
3. **Black-Box Confusion:** Generic AI chatbots frequently hallucinate rankings, placement statistics, or fabricated facilities, misleading prospective applicants.

---

## 💡 The Solution: UNIPATH

**UNIPATH** transforms university selection from passive browsing into an **interactive engineering discovery experience**.

Focused exclusively on **Sapthagiri NPS University**, UNIPATH anchors academic decisions in who the student could become:
$$\text{Interests} \longrightarrow \text{Engineering Branch} \longrightarrow \text{Foundational Skills} \longrightarrow \text{Realistic Projects} \longrightarrow \text{Career Horizons}$$

UNIPATH is:
- **Student-Built & Independent:** Clearly identified as an independent exploration project, not the university's official admissions website.
- **Strictly Verified:** Features verified undergraduate and postgraduate engineering branches sourced directly from `snpsu.edu.in`.
- **Deterministic & Transparent:** Zero external AI API keys or black-box guesswork; logic is deterministic, reproducible, and explainable.

---

## ✨ Core Features

### 1. Discover Your Fit (Interactive Interest Quiz)
- **Target Audience:** Students in Classes 11 & 12, Class 12 graduates, and exploring parents.
- **7 Scenario-Based Questions:** Covering interests, problem-solving styles, preferred activities, breakthrough technologies, and capstone aspirations.
- **Deterministic Match Scoring:** Evaluates answers across AI, Software Systems, Data Science, Electronics & Embedded Hardware, Electrical Energy, and Broad Exploration.
- **Actionable Report:** Unveils top 3 matching disciplines, calculated alignment percentage, explicit explanation of *why* it matched, and exact matching degree programmes at Sapthagiri NPS University.

### 2. Experience Your Future (Future Simulator)
- **Custom Multi-Factor Parameters:** Calibrates roadmap according to interest domain, preferred activity (building apps, logical problem-solving, data analysis, hardware experimentation, research), starting experience level (Beginner, Intermediate, Advanced), and career ambition.
- **5-Stage Visual Roadmap:**
  - **Stage 1 (Explore):** Core mental model and philosophy in simple language.
  - **Stage 2 (Learn):** Foundational mathematical, computational, and physical skills.
  - **Stage 3 (Build):** 2–3 realistic portfolio projects graded by experience level.
  - **Stage 4 (Grow):** Git workflows, coding practice, open-source, and competitions.
  - **Stage 5 (Explore Careers):** Concrete industry roles, daily responsibilities, and relevant Sapthagiri degree programmes.
- **Native PDF Export / Print:** Built-in browser `@media print` layout allowing students to save their tailored roadmap as a PDF with a single click.

### 3. Career Path Explorer
- 5 comprehensive engineering pathways:
  - **Path A:** Artificial Intelligence & Machine Learning
  - **Path B:** Software Development & Systems Engineering
  - **Path C:** Data Science & Analytics
  - **Path D:** Electronics & Embedded Systems
  - **Path E:** Electrical Systems & Power Engineering
- Filterable interface with expandable stages from foundational skills to capstone projects and industry job titles.

### 4. Explore Sapthagiri (Verified University Hub)
- **Verified Official Resources:**
  - Official University Website: [snpsu.edu.in](https://www.snpsu.edu.in/)
  - School of Engineering: [snpsu.edu.in/engineering](https://snpsu.edu.in/engineering/)
  - Admissions Portal: [snpsu.edu.in/admissions](https://www.snpsu.edu.in/admissions)
  - Active Application Form: [snpsuadmissions.snpsu.edu.in](https://snpsuadmissions.snpsu.edu.in/)
- **Provenance Badges:** Distinct labels indicating **"Officially Sourced Information"** (from university portal) vs. **"UNIPATH Guidance"** (orientation perspectives).
- Search and category filters for B.E. and M.Tech programmes.

### 5. About UNIPATH & Integrity Standard
- Independent platform declaration.
- Zero-fabrication pledge: no artificial placement figures, fake student testimonials, or unverified claims.

---

## 📸 Screenshots & UI Showcase

```
+-----------------------------------------------------------------------------------+
|  [UNIPATH]  Home   Discover Your Fit   Future Simulator   Career Paths   [Start]  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                   Your Future Doesn't Have to Be a Guess.                         |
|   Discover your engineering interests, explore possible career paths, and plan   |
|                         your journey with UNIPATH.                                |
|                                                                                   |
|           [ Discover My Path ]              [ Explore Sapthagiri ]                |
|                                                                                   |
|    +-------------------------------------------------------------------------+    |
|    |  [01] Interest  ->  [02] Degree  ->  [03] Skills  ->  [04] Projects      |    |
|    +-------------------------------------------------------------------------+    |
+-----------------------------------------------------------------------------------+
```

*(Place actual project screenshots in `public/screenshots/` or project assets when deploying)*

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Component architecture, responsive state, and hooks |
| **Build Tool & Bundler** | [Vite 6](https://vite.dev/) | Lightning-fast HMR and optimized production bundling |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling with Deep Navy (`#0B1220`) theme |
| **Iconography** | [Lucide React](https://lucide.dev/) | Clean, accessible vector icons (no emojis as interface icons) |
| **Typography** | Plus Jakarta Sans & JetBrains Mono | Legible modern editorial typography |
| **Architecture** | Client-side deterministic engine | 100% offline-ready, zero external API keys, zero authentication barriers |

---

## 🚀 Installation & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [npm](https://www.npmjs.com/) (version 9.0.0 or higher)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jayashree-ku/UNIPATH.git
   cd UNIPATH
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📂 Project Directory Structure

```
unipath/
├── public/                       # Static public assets
│   └── favicon.svg               # Vector brand icon
├── src/
│   ├── components/               # Modular React UI components
│   │   ├── AboutSection.jsx      # Mission, philosophy, and disclaimers
│   │   ├── CareerExplorer.jsx    # 5 structured engineering pathways
│   │   ├── FitQuiz.jsx           # 7-question interest quiz & results
│   │   ├── Footer.jsx            # Footers with official links & legal disclaimers
│   │   ├── FutureSimulator.jsx   # 5-stage interactive personalized roadmap
│   │   ├── Hero.jsx              # Hero section, value props, and interactive stepper
│   │   ├── Navbar.jsx            # Sticky header with mobile drawer
│   │   └── SapthagiriHub.jsx     # Verified university information & portals
│   ├── data/
│   │   └── engineeringData.js    # Verified programmes, quiz questions, and roadmap logic
│   ├── App.jsx                   # Main layout and cross-feature orchestration
│   ├── index.css                 # Tailwind CSS v4 and print styles
│   └── main.jsx                  # React DOM entry point
├── .gitignore                    # Excludes node_modules, build outputs, and secrets
├── index.html                    # HTML entry template
├── package.json                  # Dependencies and build scripts
├── README.md                     # Project documentation
└── vite.config.js                # Vite & Tailwind plugin configuration
```

---

## 🚢 Deployment Guide

UNIPATH is designed as a standalone static Single Page Application (SPA), making it fast and simple to deploy:

### Option A: Deploy to Vercel (Recommended)
1. Visit [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import the `Jayashree-ku/UNIPATH` repository.
4. Framework Preset: **Vite** (automatically detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. Your live URL will be ready within 60 seconds.

### Option B: Deploy to Netlify
1. Visit [netlify.com](https://netlify.com) and log in with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Choose `Jayashree-ku/UNIPATH`.
4. Build command: `npm run build`, Publish directory: `dist`.
5. Click **"Deploy UNIPATH"**.

---

## ⚖️ Disclaimer & Compliance Notice

UNIPATH is an independent student-built exploratory platform. It is not an official portal of Sapthagiri NPS University. All university programme names, trademarks, and links belong to Sapthagiri NPS University. Learning path suggestions are illustrative and do not guarantee admission or career outcomes.
