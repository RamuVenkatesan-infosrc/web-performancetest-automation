# Web Performance Testing Automation (sitespeed.io)

Automated Web Performance Testing suite powered by **sitespeed.io**, **Docker**, and **GitHub Actions**.

---

## 📁 Repository Structure

```
web-performancetest-automation/
├── .github/
│   └── workflows/
│       └── performance-test.yml     # GitHub Actions CI/CD Pipeline
├── scripts/
│   └── infoservices-journey.js      # 7-Step User Journey Performance Script
├── .gitignore                       # Excludes test outputs and logs
└── README.md                        # Documentation
```

---

## 🚀 Running Tests Locally (via Docker)

Ensure **Docker Desktop** is running, then execute:

```powershell
docker run --rm `
  -v "${PWD}:/sitespeed.io" `
  sitespeedio/sitespeed.io `
  scripts/infoservices-journey.js `
  --browser chrome -n 1 `
  --outputFolder sitespeed-result
```

### View Results:
- Open `sitespeed-result/index.html` in your browser.
- Videos & filmstrips are located under `sitespeed-result/pages/`.

---

## ⚡ Automated CI/CD Pipeline (GitHub Actions)

The workflow (`.github/workflows/performance-test.yml`) runs automatically:
- **Scheduled**: Every day at 02:00 AM UTC.
- **Manual Trigger**: Go to **Actions** → **Web Performance Test (sitespeed.io)** → **Run workflow**.

### Artifacts & Reports:
After each run, download the generated HTML report & MP4 videos directly from the **GitHub Actions Run Summary** under **Artifacts**.

---

## ➕ Adding New Journey Tests

To add a new performance scenario (e.g. `login-journey.js`):
1. Add your script inside `scripts/new-journey.js`.
2. Update `.github/workflows/performance-test.yml` to reference `scripts/new-journey.js`.
