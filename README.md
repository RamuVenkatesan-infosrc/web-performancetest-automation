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
  "enable_graphite": false
}
```

| Setting | Description | Options |
|---------|-------------|---------|
| `browser` | Target browser for execution | `"chrome"` / `"firefox"` |
| `iterations` | Number of test runs per page | `1`, `3`, `5` |
| `script` | Target journey script to execute | `"scripts/infoservices-journey.js"` |
| `enable_graphite` | Push metrics to Graphite/Grafana | `true` / `false` |

---

## ⚡ Automated CI/CD Pipeline (GitHub Actions)

The pipeline (`.github/workflows/performance-test.yml`) automatically triggers in **3 ways**:

1. **Automatic Git Push**: Whenever you push changes to `main` branch, the pipeline executes automatically using settings in `config.json`.
2. **Scheduled Cron**: Runs daily at 02:00 AM UTC.
3. **Manual Trigger**: Go to **Actions** → **Web Performance Test (sitespeed.io)** → **Run workflow** (Optional UI inputs override `config.json`).

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
- Recorded MP4 videos & screenshots are under `sitespeed-result/pages/`.
