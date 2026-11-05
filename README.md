# ⚡ Harshavardhan Surabhi - ECE & IoT/AI Engineering Portfolio

An interactive, futuristic, and high-performance React portfolio designed for **Surabhi Kamesh Sri Surya Harshavardhan**, Electronics & Communication Engineering graduate from Saveetha School of Engineering, Chennai.

Built with **React 18**, **Vite 6**, and **Tailwind CSS**, featuring dark cyber aesthetics, hardware/MCU telemetry widgets, interactive ML model benchmarking, an embedded CLI terminal, and instant Vercel deployment support with dynamic port allocation.

---

## 🌟 Highlights & Features

- **Cyber & Hardware Aesthetic:** Custom circuit grid patterns, interactive node canvas that responds to cursor movement, and realistic glowing indicators.
- **Hero & Interactive MCU Core Card:** Dynamic typing banner, live microcontroller cycle counter, simulated pinout mappings (UART, PWM, ADC, NPU), and frequency overclock simulation.
- **Academic Foundation Timeline:** Saveetha School of Engineering Chennai (2022–2026, CGPA 7.38), Viswasai Junior College Tirupathi, and Model Academy EM School Renigunta.
- **Categorized Skills Matrix:** Python, Embedded C, OOP, IoT, Signal Processing, Digital Electronics, and Deep Learning with proficiency progress meters and language fluency breakdown (Telugu, English, Hindi, Tamil).
- **Interactive Projects Showcase:**
  1. *Malaria Parasite Categorization (CNN vs SVM)*: Interactive live test bench comparing CNN vs SVM confidence and latency on blood cell samples.
  2. *Typhoid Parasite Detection (RNN vs CNN)*: Comparative spatial vision vs sequential temporal analysis selector.
  3. *Tennis Ball Collector Robot Integrated with AI*: Real-time autonomous robotics radar telemetry and ball collection counter simulator.
- **Interactive Retro CLI Terminal:** Execute terminal commands (`help`, `about`, `skills`, `projects`, `edu`, `specs`, `ping`, `clear`).
- **Interactive Resume Modal:** Formatted printable resume sheet with one-click print or PDF save (`window.print()`).
- **Contact & Communication:** Form validation, 1-click email copy to clipboard, and direct social links.

---

## 🚀 Dynamic Port Allocation

The app is built to automatically adapt to dynamic ports in local environments, Docker, and cloud deployments:

- In `vite.config.js`, the dev and preview servers read `process.env.PORT` dynamically.
- `strictPort: false` is configured, meaning if port 3000 is occupied, Vite will automatically find and bind to the next available free port (3001, 3002, etc.) without failing.
- You can specify any custom port on startup:
  ```bash
  # Windows PowerShell
  $env:PORT="4000"; npm run dev

  # Linux / macOS
  PORT=4000 npm run dev
  ```

---

## 📦 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## ☁️ Deploying to Vercel

This repository includes a pre-configured `vercel.json` and standard Vite build scripts for zero-configuration deployment on [Vercel](https://vercel.com):

### Option A: Via GitHub (Recommended)
1. Initialize git and push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Harsha ECE Portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**, set the build command to `npm run build`, and the output directory to `dist`.
5. Click **Deploy**!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Personalization

To update your contact details, social links, or add new projects, simply open:
👉 `src/data/portfolioData.js`

All profile data, projects, educational records, metrics, and text are centrally managed in this file.

