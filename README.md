# Web Performance Testing Automation (sitespeed.io)

Automated Web Performance Testing suite powered by **sitespeed.io**, **Docker**, **Grafana**, **Graphite**, and **GitHub Actions**.

---

## 🎯 All-In-One Visual Dashboard (Grafana + Graphite)

Launch Grafana and Graphite with **one single command**:

```powershell
docker compose up -d
```

### Access Everything in One Place (Grafana):
👉 **URL**: `http://localhost:3000`
- **Username**: `sitespeedio`
- **Password**: `hdeAga76VG6ga7plZ1`

Inside Grafana you can access **everything in 1 place**:
1. **Performance Dashboards**: Go to **Dashboards** → **Page metrics** (View LCP, CLS, TBT, Speed Index).
2. **Raw Graphite Metrics Explorer**: Go to **Explore** (left sidebar) → Query raw Graphite metrics directly inside Grafana!

---

## ⚙️ Configuration (`config.json`)

All test options are centrally managed in `config.json`:

```json
{
  "browser": "chrome",
  "iterations": 1,
  "script": "scripts/infoservices-journey.js",
  "outputFolder": "results",
  "enable_graphite": true
}
```

| Setting | Description | Options |
|---------|-------------|---------|
| `browser` | Target browser for execution | `"chrome"` / `"firefox"` |
| `iterations` | Number of test runs per page | `1`, `3`, `5` |
| `script` | Target journey script to execute | `"scripts/infoservices-journey.js"` |
| `outputFolder` | Root folder for test report outputs | `"results"` |
| `enable_graphite` | Push metrics to Graphite & Grafana | `true` / `false` |

---

## 🚀 Running Tests Locally

Ensure `docker compose up -d` is running, then execute:

```powershell
docker run --rm `
  --network host `
  -v "${PWD}:/sitespeed.io" `
  sitespeedio/sitespeed.io `
  scripts/infoservices-journey.js `
  --browser chrome -n 1 `
  --graphite.host localhost `
  --outputFolder results/latest
```

---

## ⚡ Automated CI/CD Pipeline (GitHub Actions)

The pipeline (`.github/workflows/performance-test.yml`) automatically triggers in **3 ways**:

1. **Automatic Git Push**: Whenever you push changes to any branch, the pipeline executes automatically using settings in `config.json`.
2. **Scheduled Cron**: Runs daily at 02:00 AM UTC.
3. **Manual Trigger**: Go to **Actions** → **Web Performance Test (sitespeed.io)** → **Run workflow**.

### Artifacts & Reports:
After each run, download the generated HTML report & MP4 videos directly from the **GitHub Actions Run Summary** under **Artifacts**.
