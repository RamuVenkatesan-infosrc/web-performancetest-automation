# Web Performance Testing Automation (sitespeed.io)

Automated Web Performance Testing suite powered by **sitespeed.io**, **Docker**, and **GitHub Actions**.

---

## ⚙️ Configuration (`config.json`)

All test options are centrally managed in `config.json`:

```json
{
  "browser": "chrome",
  "iterations": 1,
  "script": "scripts/infoservices-journey.js",
  "outputFolder": "results",
  "enable_graphite": false
}
```

| Setting | Description | Options |
|---------|-------------|---------|
| `browser` | Target browser for execution | `"chrome"` / `"firefox"` |
| `iterations` | Number of test runs per page | `1`, `3`, `5` |
| `script` | Target journey script to execute | `"scripts/infoservices-journey.js"` |
| `outputFolder` | Root folder for test report outputs | `"results"` |
| `enable_graphite` | Push metrics to Graphite/Grafana | `true` / `false` |

---

## 📊 Structured Test Results & Output Folders

Each pipeline execution automatically creates a timestamped results directory:

```
results/
└── 2026-08-11-16-56-20/           # Dynamic Timestamp Folder
    ├── index.html                 # Main Interactive HTML Report
    ├── pages/                     # Per-page Screenshots, MP4 Videos & HAR Files
    └── data/                      # Raw JSON Metrics
```

---

## ⚡ Automated CI/CD Pipeline (GitHub Actions)

The pipeline (`.github/workflows/performance-test.yml`) automatically triggers in **3 ways**:

1. **Automatic Git Push**: Whenever you push changes to any branch, the pipeline executes automatically using settings in `config.json`.
2. **Scheduled Cron**: Runs daily at 02:00 AM UTC.
3. **Manual Trigger**: Go to **Actions** → **Web Performance Test (sitespeed.io)** → **Run workflow** (Optional UI inputs override `config.json`).

### Artifacts & Reports:
After each run, download the generated HTML report & MP4 videos directly from the **GitHub Actions Run Summary** under **Artifacts** (`sitespeed-report-<timestamp>`).

---

## 🚀 Running Tests Locally (via Docker)

Ensure **Docker Desktop** is running, then execute:

```powershell
docker run --rm `
  -v "${PWD}:/sitespeed.io" `
  sitespeedio/sitespeed.io `
  scripts/infoservices-journey.js `
  --browser chrome -n 1 `
  --outputFolder results/latest
```

### View Local Results:
- Open `results/latest/index.html` in your browser.
- Recorded MP4 videos & screenshots are under `results/latest/pages/`.
