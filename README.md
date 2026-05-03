# CivicLearn - India Vote Academy 🇮🇳

CivicLearn is a premium, interactive educational platform designed to empower Indian citizens with knowledge about the electoral process, constitutional rights, and civic responsibilities. Built for the modern web, it combines deep educational content with cutting-edge AI technology.

---

## 🌟 Key Features in Detail

### 1. 🤖 Gemini AI Learning Assistant
*   **Contextual Knowledge**: Ask anything about Indian politics, the Constitution, or voting laws.
*   **Real-time Guidance**: Integrated across the platform to explain difficult terms instantly.
*   **Powered by Google Generative AI**: Uses the latest `gemini-1.5-flash` model for fast and accurate responses.

### 2. 🗳️ Interactive Voting Process
*   **Visual Roadmap**: A step-by-step journey from being a citizen to casting a vote.
*   **Phase Breakdown**: Detailed info on Registration, Verification, and Polling Day procedures.
*   **Checklists**: Clear action items for first-time voters.

### 3. 🧠 Smart Quizzes
*   **Dynamic Questions**: Multiple-choice questions covering various difficulty levels.
*   **Instant Feedback**: Learn from your mistakes with immediate answer explanations.
*   **Progress Tracking**: Visualize your score and completion status.

### 4. 📚 Educational Modules
*   **Election Detail**: Deep dives into specific election types (Lok Sabha, Rajya Sabha, Vidhan Sabha).
*   **Historical Timeline**: Explore the major milestones of Indian democracy since 1947.
*   **Rights & Duties**: Simplified explanations of your constitutional powers.

---

## 📖 How to Use CivicLearn

### Step 1: Explore the Dashboard
Start on the **Home** page to see an overview of current civic activities and featured learning paths.

### Step 2: Learn the Fundamentals
Navigate to the **Learn** section to browse through different categories of civic education. Click on any card to dive into detailed historical and procedural data.

### Step 3: Follow the Process
Visit the **Process** page for a guided walkthrough of the electoral journey. Use this as a checklist if you are preparing to vote for the first time.

### Step 4: Interact with AI
Look for the **AI Assistant** icon (bottom right) or "Explain with AI" triggers. Type your questions like:
*   *"What is the minimum age to vote in India?"*
*   *"How does the EVM system work?"*
*   *"What are the fundamental rights of an Indian citizen?"*

### Step 5: Test Your Knowledge
Head to the **Quiz** section. Select a category and start the challenge. Try to achieve a 100% score to earn your "Civic Expert" status!

---

## 🛠️ Tech Stack & Tools

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/) (@google/generative-ai)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Google Cloud Run](https://cloud.google.com/run), [Docker](https://www.docker.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- A Google Gemini API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dubeysumeet/civicIndia.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

---

## ☁️ Deployment

The project is configured for seamless deployment to **Google Cloud Run** using the included `Dockerfile` and `nginx.conf`.

```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/civicindia-495216/civiclearn --build-arg VITE_GEMINI_API_KEY=your_key

# Deploy to Cloud Run
gcloud run deploy civiclearn --image gcr.io/civicindia-495216/civiclearn --platform managed
```

---

## ❤️ Credits & Tags

Proudly built for the Indian community.

#Gemini #GoogleForDevelopers #CivicTech #IndiaElections #ReactJS #Vite #WebDevelopment
