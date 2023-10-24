# CPSC8710 

**MILLIONAIRE DUO SHOWDOWN**

**Game Objective:**

In "DUO Millionaire Showdown," teams comprising two players embark on a competitive journey to claim the million-dollar prize. The game unfolds in two distinct phases:

- **The Buzzer Round:** Multiple duo teams face off in a high-stakes buzzer round. Here, quick reflexes are as crucial as knowledge. Teams must be swift and accurate, pressing the buzzer to answer questions before their opponents. The winning team from this round progresses to the next stage.

 - **The Millionaire Challenge:** Building on their victory in the buzzer round, the triumphant duo enters this round, drawing them closer to the million-dollar grand prize. In this stage, their knowledge gets tested, and their ability to think on their feet becomes essential. Each correct answer takes them a step closer to becoming millionaires.


### Game Rules:

- **Buzzer System:** An embodiment of the game's competitive essence. Dual teams jostle for the privilege of answering, with the right reserved for the team that showcases the perfect blend of knowledge and reflex by buzzing first.

- **Levels of Difficulty:** The path to a million is intricate. The game charts a journey across various levels, each subsequent one ratcheting up the complexity of questions. As the rewards grow, so does the challenge.

- **Correct Answers:** Precision pays. Correct answers propel contestants to subsequent rounds with loftier monetary rewards. Each right answer edges them closer to that coveted million-dollar prize.

- **Incorrect Answers:** Tread carefully. Missteps have consequences. A wrong answer truncates the team's journey, with their final score being the sum total of their winnings until that juncture.

- **Lifelines:** Not all battles are fought alone. For daunting questions, players can resort to lifelines— invaluable aids providing insights or assistance. With just two lifelines on offer, their judicious deployment is paramount.

- **Time Restriction:** The relentless march of time adds another layer of intensity. Certain questions demand answers within a tight 60-second window. Speed and accuracy, hence, are of the essence.

Drawing from the tension and tactics of the iconic "Who Wants to Be a Millionaire" game show, "DUO Millionaire Showdown" augments the experience with cooperative gameplay. Success here is a fusion of team synergy, profound knowledge, and astute decision-making.

### Technology Stack:

#### Frontend Framework:

- **React:** The bedrock of our application, facilitating seamless UI creation and management.

#### Styling & UI Components:

- **Material-UI:** A React-centric framework, mirroring Google's Material Design principles, especially for icons.
- **Bootstrap:** Esteemed for spawning responsive designs enriched with pre-styled components.

#### Routing:

- **React Router:** The linchpin for in-app navigation, enabling the structuring of multi-view applications.

#### Audio Integration:

- **Web Audio API:** The auditory soul, vital for the playback of soundtracks and melodies in our web application.

#### Build & Deployment:

Harnessing the user-friendliness of GitHub Pages, our React application was deployed with finesse. 

##### Build Tools:

1. The journey commenced with integrating the `gh-pages` package, simplifying GitHub Pages deployment:

   ```bash
   yarn add gh-pages --dev
   ```

2. The `package.json` file was then revamped to ascertain the precise homepage was designated, and scripts were incorporated to streamline deployment.

3. The culmination saw the application being built and rolled out using:

   ```bash
   yarn deploy
   ```

On executing the deploy command, our React application is transmuted into static files, nested within the `gh-pages` branch of our GitHub repository, making it readily accessible.

#### Package Management:

- **Yarn:** An efficacious npm alternative, ensuring the consistent availability of project dependencies.

#### Languages & Technologies:

- **JavaScript (JS):** The crux, directing application behavior.
- **CSS:** The stylist, defining aesthetics and themes.
- **HTML:** The skeleton, though majorly represented as JSX within our React setup.

### Setup & Deployment Instructions:

#### **Node Package Manager (npm) Installation:** 

Kickstart your journey by instating the Node Package Manager (npm), pivotal for managing dependencies.

#### **Installing Dependencies with Yarn:** 

Post npm's establishment, pivot to Yarn, and inaugurate the project dependencies with `yarn install`.

#### **Initiating the Development Server:** 

Upon satiating all dependency requisites, ignite the game server using `yarn start`.

### Potential Hitches & Remedies:

- **Yarn Not Found:** Stumble upon a Yarn discrepancy? Address it by globally instating Yarn via npm: `npm install -g yarn`.

- **Node Version Discrepancy:** Ensure Node.js compatibility. Check your current version with `node -v`. If the response isn't version 16, employ the Node Version Manager (nvm) and transition to Node version 16 via `nvm install 16` followed by `nvm use 16`.

Follow this trail, and the DUO Millionaire Showdown game should be up and running locally.

### Credits:

We've incorporated insights from the following repository:
[Reference Codebase](https://github.com/abhinavuppu7/KaunBanegaCrorepati/tree/main/public)

### Design & Development Process:

#### **Overview:**

Inspired by illustrious quiz formats, our vision for DUO Millionaire Showdown was to sculpt an engrossing experience amplified with novel features.

#### **Design Phase:**

- **UI Design:** Taking cues from its TV show progenitor, our intent was to concoct an interface that's both intuitive and visually engaging, embodying elements like question layouts and iconic lifelines, thereby mirroring the TV experience while exploiting the digital platform.

- **Game Mechanics:** The underpinning rules and mechanics were pivotal. A two-player team paradigm infused competition and camaraderie, with the buzzer system accentuating strategy and thrill.

- **Question Database:** The lifeblood of any quiz, necessitating comprehensive framing, categorization, and verification of questions and answers, alongside crafting lifelines for trickier scenarios.

The genesis and evolution of this game merged inspiration, artistry, and meticulous blueprinting.

#### **Development Phase:**

- **React's Component-Centric Design:** The game's foundation was laid on React's component-centric architecture, ensuring each feature was represented as a modular, organized component, boosting both development and maintainability.

- **Buzzer System:** A departure from conventional time-bound methods, our buzzer system focuses on spontaneity and strategy sans any set timer, fostering deeper host-team interaction.

- **Question Display:** The crux of any quiz game. Our journey was marked by iterative UI designs for question displays, leveraging React to instill real-time dynamism.