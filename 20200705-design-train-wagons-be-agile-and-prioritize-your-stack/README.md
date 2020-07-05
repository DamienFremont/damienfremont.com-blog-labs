Software Architecture – “Train wagons” – Be agile and prioritize your stack
======

![softarchi-logo](screenshots/softarchi-logo.png)

You can view an application as a train, and components as wagons. It’s possible to let go some of them if needed, like features for a project backlog. But here, instead of saving now on time or cost (implementation), you mostly save on future cost (maintenance).  

![Diapositive2 - Copy](screenshots/diapositive2-Copy.jpg)

## Content:

1.  “Train Wagons” Metaphor
2.  Example – Classic Full-stack Javascript Project
3.  Step 1 – Prioritize Stack
4.  Step 2 – Identify non-essential or non-LTS parts
5.  Step 3 – Repeat until best-value is achieved

---

## The “Train Wagons” Metaphor

You can view tasks in a list, as wagons attached to a train. First wagon is the most important (a must have), last wagon is the least important (nice to have).  

![Diapositive1](screenshots/diapositive1.jpg)

…and when you can’t make it to the end in the required budget or time, you could let go some wagons from the tail (actual benefice).  

![Diapositive2](screenshots/diapositive3.jpg)

It’s also possible to view an application stack, or software architecture, in the same way. The train is the application, parts of it are wagons and you can let go some wagons. But here, instead of saving on time, you save on maintenance cost (future benefice).

![Diapositive2](screenshots/diapositive2.jpg)

## Example – Classic Full-stack Javascript Project

Here is a simple example, a Single Page App (SPA) using classic stack from 2019: a server running NodeJS, PostgreSQL, and also a browser like Firefox executing ReactJS, Bootstrap.

![README-screenshot](screenshots/readme-screenshot.png)

![README-tech-stack](screenshots/readme-tech-stack.png)

It’s obvious that’s not enough to build your project. You also need third-part library to build on top of your main components, like ExpressJS for NodeJS, and tools or even a new language, like TypeScript for JavaScript.

![README-tech-architecture](screenshots/readme-tech-architecture.png)

## Step 1 – Prioritize Stack

Not all components are equals. You need to identify which depends on which (A -> B -> C ..to show that A is the main component, and B and C some add-ons to it)

The classic way is to group them by software layers, then do the dependency graph. Usually with full-stack applications, you’ll find 2 layers (back-end server, database), up to sometimes 4 layers (+proxy, +front-end).

![Diapositive4](screenshots/diapositive4.jpg)

In this diagram, there are two layers: front-end (browser) and back-end (server). It’s obvious that the front-end is kinda bloated, specifically with add-ons!

## Step 2 – Identify non-essential or non-LTS parts

There are multiple category for identifying non-essential parts, depending on your goals and constraints (team size, budget). Ex: boilerplate is a problem for every team, but too many tools not so much if your team is large or your environment complex.

Too many tools:  SaSS, you are not FaceBook ..maybe just CSS with some overrides on Bootstrap?

Overkill delivery: Docker for standard application ..maybe just Git pull or Zip transfer?

Heavy boilerplate: small library, only using some functions, that you could write and maintained yourself!

Constant refactoring: library without Long Term Support (LTS) or community (ex: 1 developer)

Over-testing: why doing unit testing (Mocha) on front-end ? when you already do UI testing with full coverage (Selenium, Protractor)

![Diapositive5](screenshots/diapositive5.jpg)

![Diapositive6](screenshots/diapositive6.jpg)

## Step 3 – Repeat until best-value is achieved

You need to know when to stop.

Client side: maybe your users don’t need it (simple website or business application)

Tests: maybe your tests are bad (low coverage, disabled, unmaintained) or your source code is bullet-proof (generated code, simple), or site downtime is OK (non-critical app).

![Diapositive7](screenshots/diapositive7.jpg)

![Diapositive8](screenshots/diapositive8.jpg)

## Conclusion

You need to answer these questions: Are all components essentials ? and not just here for the hype ? Do I need a perfect clean project ? What is the future cost of each non-essential components ?

![Diapositive9](screenshots/diapositive9.jpg)

## Resources

*   Wikipedia
    *   [Software_architecture](https://en.wikipedia.org/wiki/Software_architecture)
    *   [MoSCoW_method](https://en.wikipedia.org/wiki/MoSCoW_method)
