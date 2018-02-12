# Duckhunt - retro gaming experience


### Background and Overview
Duckhunt is a retro game made popular on the original Nintendo system.

In each stage you have a limited number of shots to hit a certain number of  ducks flying in different patterns on the screen. Depending on your hit percentage at the end of each round determines if you move on to the next stage.

Users will progress through each stage if they have the hit count of 70% or higher. As they progress each stage will have increasingly faster ducks and/or more ducks.

### Functionality & MVP

In Duckhunt, users will be able to:
- [ ] Hear shots, misses, and hits(using howler.js library)
- [ ] Start, pause, restart, and reset game
- [ ] Progress thru different stages

This project will also include:

- [ ] Modal to give game rules and a start button.

### Wireframes

![alt text](https://preview.uxpin.com/00043e74063364151ce1f6bf1f5a03f901b55d52)

### Architecture and Technologies

* Vanilla JavaScript for overall structure and game logic
* howler.js for sounds
* HTML5 Canvas for DOM manipulation and rendering
* Webpack to bundle and serve up the various scripts.

### Timeline

Day 1: Setup node modules and get the skeleton setup. Start learning howler.js library

- [ ] Get webpack serving files and frame out index.html
- [ ] Have stage.js rendering the main background

Day 2: Get the physics for the ducks working. Implement sounds using howler library. Get basic game logic working.

- [ ] learn how to implement sounds with howler.js library
- [ ] duck.js setup
- [ ] get duck movement working
- [ ] basics of game logic( ducks are flying and can be hit)

Day 3: Create dog and gun controls. Create starting modal and button to start the game.

- [ ] Starting modal with play game button
- [ ] Increase speed of ducks as each stage is completed
- [ ] dog.js
- [ ] handle gun controls

Day 4: Game logic and difficulty controls. Incrementally make each level harder than the previous.

- [ ] level difficulty goes up by increasing speed, and adding ducks
- [ ] create controls
- [ ] polish game logic

### Bonus features

Allow for custom duck and bullet counts
Create a backend for user high scores
