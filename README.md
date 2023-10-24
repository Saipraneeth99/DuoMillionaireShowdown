
# CPSC8710

## **DUO MILLIONAIRE SHOWDOWN**
### The game is hosted at [https://saipraneeth99.github.io/CPSC8710/](https://saipraneeth99.github.io/CPSC8710/)

**Game Objective:**

In "DUO Millionaire Showdown," teams comprising two players embark on a competitive journey to claim the million-dollar prize. The game unfolds in two distinct phases:

- **The Buzzer Round:** Multiple duo teams face off in a high-stakes buzzer round. Here, quick reflexes are as crucial as knowledge. Teams must be swift and accurate, pressing the buzzer to answer questions before their opponents. The winning team from this round progresses to the next stage.

 - **The Millionaire Challenge:** Building on their victory in the buzzer round, the triumphant duo enters this round, drawing them closer to the million-dollar grand prize. Their knowledge gets tested in this stage, and their ability to think on their feet becomes essential. Each correct answer takes them a step closer to becoming millionaires.

---

**Game Rules:**

- **Buzzer System:** The buzzer mechanism is integral to the game's competitive spirit. Here, dual teams view the chance to answer a question. The honor of responding goes to the team demonstrating knowledge and agility by hitting the buzzer first.
- **Levels of Difficulty:** The journey to the million-dollar prize is complex. The game is structured across multiple levels, with each successive level presenting questions of escalating complexity. As the stakes rise, so does the challenge.
- **Correct Answers:** Precision is rewarded. When contestants answer correctly, they proceed to the next round, where greater monetary rewards await. Every correct answer brings them closer to the million-dollar prize.
- **Incorrect Answers:** However, a misstep can be costly. An incorrect answer halts the team's progress, culminating their journey. Their final score reflects the total money accumulated up to that point.
- **Lifelines:** Players aren't left entirely to their own devices for those particularly challenging questions. They can leverage lifelines—tools that offer assistance or insights. Currently, two lifelines are available, and strategic use is advised, as they can be the difference between progression and termination.
- **Time Restriction:** A ticking clock further intensifies the pressure. Specific questions come with a stringent time limit—currently 60 seconds. Teams must be accurate and swift, answering within the stipulated timeframe.

Inspired by the suspense and strategy of the iconic "Who Wants to Be a Millionaire" game show, "DUO Millionaire Showdown" introduces the unique twist of cooperative gameplay. Here, the fusion of teamwork, profound knowledge, and nimble decision-making are the keys to unlocking victory.



---

**Technology Stack Used:**

- **Frontend Framework:**  React: The core foundation upon which your application is built, enabling the creation and management of user interfaces.
- **Styling & UI Components:** 
  - Material-UI: This React-based UI framework adheres to Google's Material Design guidelines, especially for icons.
  - Bootstrap:  Frontend framework for creating responsive designs with pre-styled components.
- **Audio Integration:** We employed Web Audio API for audio usage in the application.

---

**Build and Deployment:**

To deploy our React application, we utilized GitHub Pages because of its user-friendly nature and its seamless integration with GitHub repositories.

**Build Tools:**

1. We began by adding the `gh-pages` package, which simplifies the process of deploying to GitHub Pages:

```bash
yarn add gh-pages --dev
```
2. Our `package.json` was subsequently updated for the appropriate homepage and included scripts to aid deployment.
3. The final step was constructing and deploying the application via:
```bash
yarn deploy
```
Upon running the deploy command, our React application is compiled, and the resulting static files are pushed to the `gh-pages` branch of our GitHub repository. This action effectively makes our application live and accessible via GitHub Pages.

**Package Management:** Yarn, an npm alternative, provides efficient dependency management, ensuring consistent tool and library availability.

**Languages & Technologies:**
- JavaScript (JS): The principal programming language for building and controlling the application's behavior
- CSS: responsible for styling, theming, and the visual aesthetics of the application
- HTML: Defines the structure of your application, though, in a React context, it's largely represented via JSX.

---

**Setup and Deployment Instructions:**

**Node Package Manager (npm) Installation:** Before diving into the project, install the Node Package Manager (npm). The npm is essential as it manages the project's dependencies.

**Installing Dependencies with Yarn:** With npm operational, employ Yarn, an efficient package manager, to install the project's dependencies:
```bash
yarn install
```
**Starting the Development Server:** After ensuring all dependencies are in place, you can initiate the game's development server. :
```bash
yarn start
```
This will boot up the DUO Millionaire Showdown game on your local development server.


**Possible Errors Encountered and Fixes:**

- **Yarn Not Found:** If confronted with Yarn installation issues:
```bash
npm install -g yarn
```
- **Node Version Incompatibility:** The project depends on the right Node.js version. Confirm your Node version with `node -v`. If it isn't version 16, the Node Version Manager (nvm) comes in handy. Transition to Node version 16 with:
```bash
nvm install 16
nvm use 16
```
By following the above instructions and fixes, you should be able to successfully set up and deploy the DUO Millionaire Showdown game on your local machine.

---

**Credits for Third-Party Assets and Code:** 

Our project drew inspiration from this reference codebase:
[https://github.com/abhinavuppu7/KaunBanegaCrorepati/tree/main/public](https://github.com/abhinavuppu7/KaunBanegaCrorepati/tree/main/public)

---

**Design and Development Process:**

**Overview:** Inspired by the renowned quiz show format, our ambition for DUO Millionaire Showdown was to craft an immersive gaming experience heightened by introducing innovative features that make gameplay even more riveting.

**Design Phase:**

- **User Interface (UI) Design:** Our design, mirroring the iconic TV show, prioritized intuitive and captivating interfaces. Central design components encompassed the question presentation layout and the hallmark lifelines like "phone a friend" and "50-50". Our objective was crafting an experience mirroring the TV version yet optimized for digital platforms.
- **Game Mechanics:** Establishing the fundamental rules and gameplay mechanics was essential. Opting for a two-player team format added a unique dimension to the game, amplifying competition and camaraderie. We introduced a buzzer system to determine which team gets the opportunity to tackle the questions, adding layers of strategy and excitement to each session.
- **Question Database Creation:** A comprehensive question database is the backbone of any quiz game. This involved framing and categorizing questions and ensuring accurate answers were available. Additionally, we designed appropriate lifeline choices to assist players in navigating trickier challenges. This game's design and development journey has blended inspiration, creativity, and meticulous planning.



**Development Phase:**

- **React's Component-Centric Architecture:** Our game development strategy embraced React's component-focused architecture, dissecting complex game features into organized, modular components. This not only facilitated development but also ensured code maintainability. Component-specific creations for game features, including lifelines, timers, modals, and more, provided a well-structured, navigable, and optimizable codebase. This strategy enabled component reuse across the game, boosting our development efficiency.
- **Buzzer System:** The DUO Millionaire Showdown's buzzer system departs slightly from the conventional time-bound method. In our game, the emphasis is more on spontaneity and strategic thinking. The absence of a set timer for questions gives the host the flexibility to interact and engage with the teams more personalized during a video call, thus elevating the sense of competition and camaraderie.
- **Question Display Evolution:** The heart of any quiz game lies in question presentation. Our explorative approach saw multiple UI designs for question displays. React's prowess enabled dynamic component behavior, supporting real-time question loading and production.

**Development Challenges:**

-**UI Adaptation and Rule Integration:**
Adapting the game for group play meant reshaping both rules and UI. Transitioning from the classic Millionaire setup to a group-focused format tested our adaptability.

-**Legacy Code Navigation:**
Unpacking old, buggy code was a maze. Version incompatibilities added to the challenge, demanding a keen understanding of past and present interactions.

-**React Familiarization:**
A segment of our team was initially unfamiliar with React. Getting up to speed with this framework, especially for UI development.

-**Team Synergy:**
Blending different skills and perspectives into one unified project vision took open dialogue and some compromise. Yet, it enriched our final product with diverse inputs.