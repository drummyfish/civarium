# Civarium - Civilization [Vivarium](https://en.wikipedia.org/wiki/Vivarium)

Civarium is a zero-player game concept based on ant farms. A world is generated with a number of little sprite people with needs and wants, and enough intelligence to figure out how to fulfill them. The player can interact with these citizens or just watch them going about their lives. Or at least, that's the plan - it's still pretty new.

Civarium is still in the concept/early work stage, but here's a checklist of desired and completed features:

- [x] Isometric tile grid for layout
- [x] Sprite-based animation and motion engine
- [ ] (WIP) A* search for sprite navigation
- [ ] (WIP) [GOAP](https://gamedevelopment.tutsplus.com/tutorials/goal-oriented-action-planning-for-a-smarter-ai--cms-20793)-based framework    sprite AI
- [ ] Procedural initial map generation
- [ ] Initial needs: Hunger, Thirst, Sleep, Shelter
- [ ] Initial wants: Nature
- [ ] Initial properties: Energy, Cash
- [ ] Initial capabilities: buy food, buy drink, buy/sell house, work in office/restaurant/cafe/construction yard, sleep in house/street, explore nature

All of the above are likely to change as the nature of emergent and/or procedural gameplay is to do weird things that warrant balancing.

## Running it

open `index.html` in your browser - this will pull in dist/bundle.js which contains the compiled code.

## Building it

run `webpack` or `webpack --watch` to rebuild the JS bundle!

## Contributing

If you want to contribute, awesome! This is a completely for-fun project so the more the merrier. We should have a chat first though, so drop me an email (in my profile) if you want to join in!
