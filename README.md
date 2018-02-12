# Duckhunt - retro gaming experience


### Background and Overview
Duckhunt is a retro game made popular on the original Nintendo system.

In each round you have a limited number of shots to hit three ducks flying in different patterns on the screen. Depending on your hit percentage at the end of each round determines if you move on to the next round.

Users will be able to determine the starting difficulty. Then after each successful round the speed of the ducks will increase.

### Functionality & MVP

In Duckhunt, users will be able to:
- [ ] Pick difficulty
- [ ] Hear shots, misses, and hits(using howler.js library)
- [ ] Start, pause, restart, and reset game
- [ ] Progress thru different levels

This project will also include:

- [ ] Modal to give game rules and initial difficulty.

### Wireframes

![alt text](https://preview.uxpin.com/00043e74063364151ce1f6bf1f5a03f901b55d52)

### Architecture and Technologies

* Vanilla JavaScript for overall structure and game logic
* HTML5 Canvas for DOM manipulation and rendering
* Webpack to bundle and serve up the various scripts.

### Timeline

Day 1: Setup node modules and get the skeleton setup. Start learning howler.js library

- [ ] Get webpack serving files and frame out index.html
- [ ] Have stage.js rendering the main background

Day 2: Get the physics for the ducks working. Implement sounds using howler library.

- [ ] learn how to implement sounds with howler.js library
- [ ] duck.js setup
- [ ] get duck movement working

Day 3: Create dog and gun controls. Set up beginning difficulty. Initial difficulty determines starting speed and number of shots available to the user.

- [ ] Initial difficulty based on user selection.
- [ ] Increase speed of ducks as each level is completed
- [ ] dog.js
- [ ] handle gun controls

Day 4: Game logic and difficulty controls. Incrementally make each level harder than the previous.

- [ ] level difficulty goes up by increasing speed of duck movement
- [ ] create controls
- [ ] polish game logic

### Bonus features

Allow for custom duck and bullet counts
Create a backend for user high scores
