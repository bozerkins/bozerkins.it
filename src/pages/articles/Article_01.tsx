// src/pages/Article.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Article.css';
import Article_01_Image from './Article_01_image.jpeg';

const tags: Array<string> = [
  "Coding",
  "Programming",
  "Technology",
  "Software Development",
  "Motivation",
];

const Article: React.FC = () => {
  return (
    <div className="article">
      <div className="article-header">
        <h1 className="article-title">Why Software Engineers often feel invisible</h1>
        <Link to="/blog" className="back-button-link">Back</Link>
      </div>
      <p className="article-date">Published on November 4, 2024</p>
      <div className="article-content">
        <img src={Article_01_Image} alt="Description of the image" className="article-image" />
        <h2>Everyday Joe</h2>
        <p>Joe’s day started like any other. As a software developer, his inbox was flooded with Jira tickets and Slack messages, all of which blurred together in a haze of requests. Today’s task was no different — fix a backend bug that had been frustrating customers for weeks. The pressure was on, and Joe, like the reliable problem-solver he was, buckled down and focused. After hours of diving deep into the codebase, he finally found the culprit, deployed the fix, and closed the ticket. It felt good — momentarily.</p>

        <p>The next week rolled around, and just when things seemed to settle, Joe stumbled upon another bug. This one wasn’t even on anyone’s radar yet, but it was a ticking time bomb. He knew he couldn’t just ignore it. So, being the thorough engineer he was, Joe dove headfirst into the issue, spending his nights tracing lines of code and untangling dependencies. Days later, he solved it. Another ticket closed. Another small win. But instead of satisfaction, all he felt was a nagging sense that something was off.</p>

        <p>A month passed, and the cycle repeated itself. This time, it wasn’t a bug — at least not in the traditional sense. The company’s financial reports were way off, and Joe had to scramble to track down why the data was miscalculated. Late nights, frantic meetings, and endless rechecks. Eventually, they got it right, but by then, Joe was starting to wonder: Is this really what I signed up for?</p>

        <p>The truth hit hard. Joe realized that while he was great at fixing things when they broke, he wasn’t building anything new. He wasn’t alone in this — his entire team seemed trapped in firefighting mode, constantly reacting but never creating. The projects he had felt passionate about, the ones that were supposed to push the company forward, were either abandoned or endlessly delayed by the daily chaos.</p>

        <p>Two years slipped by like this.</p>

        <p>Joe could count on one hand the initiatives he’d managed to deliver, all of which had been scrapped due to some “change in direction” from management. Meanwhile, the business team sent in more requests, more “urgent” asks that kept piling up. Joe tried, but the wildfires never stopped long enough for him to truly focus on building something that mattered. He was constantly drowning in problems that weren’t his to begin with.</p>

        <p>Despair crept in.</p>

        <p>It started slowly — a frustration with his team, then himself. He blamed the company, the lack of direction, the endless cycle of bugs and fixes. Eventually, Joe wanted out. He thought about quitting almost every day. All that dedication, the hours he put in, it didn’t seem to add up to anything meaningful.</p>

        <p>But was it really all pointless? Or was Joe missing something deeper?</p>

        <h2>Second thoughts</h2>
        <p>It’s easy to look at Joe’s situation and think, Well, that’s just him. But the truth is, we’ve all been Joe at some point — maybe more often than we care to admit. We inherently shy away from negative thoughts, especially when they concern our own work. Like Joe, we bury ourselves in tasks, checking off to-do lists, squashing bugs, or jumping from one request to the next. It keeps our minds busy, shielding us from the uncomfortable reality of whether all this effort is really moving the needle.</p>

        <p>But here’s the thing: feedback and course corrections aren’t just useful — they’re essential. And who better to define the direction than the people who are knee-deep in the work every single day?</p>

        <p>Software engineering, at its core, is a craft that’s beautiful in its graduality. Tiny, iterative changes compound over time to create something bigger, something meaningful. You don’t overhaul a system in one fell swoop. Instead, you refactor bit by bit — migrating a module here, updating a library there — while continuously delivering value. And software engineers excel at that. It’s common for someone like Joe to dive into the code to add a button, only to discover the whole button system is outdated. So, instead of just fixing what he was tasked with, he refines the system, optimizing the process for the future.</p>

        <p>But here’s the thing: what happens when Joe pours his heart into fixing something, only to have the whole module scrapped the next week? What happens when there’s no clear vision guiding his work?</p>

        <p>It’s not enough to just be good at your job. The work you do day in and day out has to fit into a bigger picture — a goal that everyone understands and is working toward. Without that, it’s like trying to steer a ship without a map. Why spend hours rewriting a messaging system if those messages didn’t need to exist in the first place? Or move everything to a new database if the data didn’t even need saving? Or redesign buttons when a better tool already exists?</p>

        <p>Too often, teams follow directions from product managers and business leaders, but they don’t have a clear technical vision for their systems. That’s where things start to fall apart. People like Joe will always be there, working hard, but without a sense of ownership or a clear goal, frustration kicks in. Joe feels like he’s working non-stop, but getting nowhere.</p>

        <p>It’s not that Joe’s a victim or that others are stopping him from doing interesting work. The truth is, every project and team has a direction, whether we talk about it or not. The problem is, when no one steps up to define that vision or make sure everyone is aligned, things start to go off track.</p>

        <p>Without that shared purpose, people naturally start pulling in different directions. Everyone’s busy building, refining, fixing — after all, that’s the nature of the job. Eight hours a day, every person on the team is creating something. But if those creations aren’t focused on a greater goal, then all we’re doing is adding to the noise.</p>

        <h2>Having happiness</h2>
        <p>Finding meaning in your work isn’t just about the big, flashy accomplishments. It’s about the small, consistent wins that, little by little, move you closer to a future you can get excited about. The meaning comes when you can see how even the smallest thing you do today is a step towards something bigger tomorrow.</p>

        <p>For me, the future I always dream about — no matter the job — is creating software that’s exciting to talk about, something that makes people light up when they use it. It’s that feeling of sharing something cool with others, seeing their enthusiasm, and having that sense of pride. Sounds awesome, right? It also sounds vague and far-off, like a dream that’s always just out of reach.</p>

        <p>And that’s the hard part. So many businesses and people are tangled in legacy systems, some built 10, 20, or even 30 years ago. When the software is constantly breaking, needing fixes and patches just to keep things running, it’s easy to feel like “doing cool stuff” is impossible. It’s even worse when no one really understands how these old systems work anymore. The original creators are long gone, and the knowledge is lost. How are you supposed to innovate in that kind of environment?</p>

        <p>Simple: you build a vision of a better future. A future where everything works smoothly, where the system is something to be proud of. Then, you get your team excited about it. Every small task you complete, every bug you fix, should bring you one step closer to that vision. That’s the trick. All the great things in a software developer’s life happen gradually. You can’t just ditch an old system and magically create something new and perfect. Rewriting from scratch is time-consuming and often thankless. But shaping an old system, bit by bit, into something better — that’s where the real magic happens.</p>

        <p>And it doesn’t have to be grand. You could be working on internal reports — sounds boring, right? But what if you added some color? Customizations? What if you made the data easier to understand with a heat map, or added a way to summarize trends? Maybe you could speed up the process or make the reports sharable, so teams can discuss them more easily. Suddenly, you’re creating software that people enjoy using.</p>

        <p>Even working on compliance management can be interesting if you focus on what people care about. Can they get a quick summary of what’s important? Can they click through tasks with ease? Imagine making the world’s most stress-free compliance system. How satisfying would that be?</p>

        <p>It’s about focusing on what your users need now, while planning of how to make it even better, while dreaming of it being super cool. When you picture your work that way, it doesn’t feel so daunting. You start to see the potential in the smallest of tasks.</p>

        <p>The key is to have a bold vision, make incremental changes, experiment, and let that excitement fuel you. When you do that, your work will never feel boring or meaningless again.</p>

      </div>
      
      <div className="tags">
        {tags.map(tag => {
          return <span key={tag} className="tag">{tag}</span>  
        })}
      </div>
    </div>
  );
};

export default Article;
