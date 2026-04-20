# PMP Exam Prep — 200 Questions

A single-page, interactive PMP exam prep app with 200 questions across all ECO 2021 domains.

## Features

- 200 questions — People (42%), Process (50%), Business Environment (8%)
- Click-to-reveal answers with full explanations
- Live score tracker + domain-level breakdown
- Search by keyword, filter by domain and difficulty
- Key Concepts cheat sheet (16 topics)
- Dark / Light mode
- Add custom questions via the UI or directly in `questions.js`

## Live Demo

Hosted on GitHub Pages:  
**https://YOUR-USERNAME.github.io/pmp-exam-prep**

---

## How to Add More Questions

### Option 1 — Via the UI (session only)
Click the **"+ Add Q"** button in the header. Fill in the form and click Add. The question appears instantly but is **not saved permanently**.

### Option 2 — In `questions.js` (permanent)

Open `questions.js` and scroll to the bottom. Add a new entry to the `QUESTIONS` array before the closing `]`:

```js
{
  id: 201,                          // unique number — increment from last
  domain: "people",                 // "people" | "process" | "biz"
  subtopic: "Risk Management",      // topic label shown on card
  difficulty: "medium",             // "easy" | "medium" | "hard"
  q: "Your question text here?",   // the question
  opts: [                           // exactly 4 options
    "Option A text",
    "Option B text",
    "Option C text",
    "Option D text"
  ],
  correct: 1,   // 0=A, 1=B, 2=C, 3=D  (zero-indexed)
  exp: "Explanation with <strong>bold key terms</strong>."
},
```

Save the file — the question appears automatically on the next page load.

---

## Deploy to GitHub Pages

### Step 1 — Create a GitHub repo

1. Go to https://github.com/new
2. Name it `pmp-exam-prep`
3. Set it to **Public**
4. Do **not** add a README (you already have one)
5. Click **Create repository**

### Step 2 — Push the code

Run these commands in Terminal from the `PMP_ExamPrep` folder:

```bash
cd ~/Desktop/PMP_ExamPrep
git add .
git commit -m "Initial commit: PMP Exam Prep with 200 questions"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pmp-exam-prep.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

Your site will be live at:  
`https://YOUR-USERNAME.github.io/pmp-exam-prep`

(Takes 1–3 minutes to deploy)

---

## File Structure

```
PMP_ExamPrep/
├── index.html       — Main page (UI, styles, interaction logic)
├── questions.js     — All 200 questions (edit this to add more)
└── README.md        — This file
```

## Question Format Reference

| Field | Type | Values |
|-------|------|--------|
| `id` | number | Unique, auto-increment |
| `domain` | string | `"people"` / `"process"` / `"biz"` |
| `subtopic` | string | Any descriptive label |
| `difficulty` | string | `"easy"` / `"medium"` / `"hard"` |
| `q` | string | The question text |
| `opts` | array[4] | Exactly 4 answer strings |
| `correct` | number | Index 0–3 (A=0, B=1, C=2, D=3) |
| `exp` | string | Explanation HTML (use `<strong>` for bold) |
