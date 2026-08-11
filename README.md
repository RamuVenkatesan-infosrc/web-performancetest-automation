# Web Performance Testing Automation (sitespeed.io)

Automated Web Performance Testing suite powered by **sitespeed.io**, **Docker**, **GitHub Actions**, and **GitHub Pages**.

---

## 🌐 Live Web Performance Report Link

The latest performance report is published live at:
👉 **[https://RamuVenkatesan-infosrc.github.io/web-performancetest-automation/](https://RamuVenkatesan-infosrc.github.io/web-performancetest-automation/)**

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
└── 2026-08-11-16-56-20/           # Dynamic Timestamp Directory
    ├── index.html                 # Main Interactive HTML Report
    ├── pages/                     # Per-page Screenshots, MP4 Videos & HAR Files
    └── data/                      # Raw JSON Metrics
```

---

## ⚡ Automated CI/CD Pipeline (GitHub Actions)

The pipeline (`.github/workflows/performance-test.yml`) automatically triggers in **3 ways**:

1. **Automatic Git Push**: Whenever you push changes to any branch, the pipeline executes automatically using settings in `config.json`.
2. **Scheduled Cron**: Runs daily at 02:00 AM UTC.
3. **Manual Trigger**: Go to **Actions** → **Web Performance Test (sitespeed.io)** → **Run workflow**.

---

## 🛠️ One-Time Setup for GitHub Pages (Live Link)

To enable the live website URL for your team:
1. Open your repository on GitHub.com: `https://github.com/RamuVenkatesan-infosrc/web-performancetest-automation`
2. Go to **Settings** → **Pages** (in left sidebar).
3. Under **Build and deployment** → **Source**: Select **GitHub Actions**.
4. That's it! Every pipeline run will update the live URL automatically!
