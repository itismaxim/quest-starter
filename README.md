# Quest Starter

[Heroku link][heroku]

[heroku]: http://queststarter.herokuapp.com/

## Synopsis:

The Problem: I'm a Game Master for Dungeons and Dragons. I want to find out when my players are available and what games they think are coolest.

So here's Quest Starter.. I sign up, make a game, and then send players a link. Anyone can look at my game and leave a comment or sign up for it. Each game shows how many people are interested in it, and whether it is currently active or not. Easy for players, easy for me!

## MVP

Note: GM stands for Game Master. Here, GMs are users: they have to register.
Note: PC stands for Player Character. Here, PCs are guests: they may, but do not have to, register.

###Required Features

- [x] GMs can register and sign in.
- [x] GMs can make Games.
- [x] GMs can view their games.
- [ ] GMs can give mark a game as active.

- [ ] PCs can see all of a GM’s Games.
- [ ] PCs can see individual Game pages.
- [ ] PCs can leave comments, even anonymously.

###Stretch Features

- [x] GMs can write Updates for Games.
- [ ] Users can search GM and Games.
- [ ] Sign up through Google.

## Design Docs
* [View Site Map][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Auth, Rewrite Readme  (~2 day)
Start up rails, make users, make auth, and re-figure out how this project is going to work and what my goals are. Third time's the charm, eh? At least my wireframes are mostly intact.

### Phase 2: Making Games, Viewing Games (~3 days)
Solidify the games model, write the views, be able to create and update games. Transition everything to backbone: hope she runs nice now.

### Phase 3: Updates And Comments (~2 days)
Make updates and comments models, write THEIR views, and be able to add them. Make sure the interested player number goes up and down accordingly. Same with the game's active status.

### Phase 4: Game Show (~1 days)
Write Game Show as to be able to display ALL of this information. Maybe some kind of tabs functionality? I guess start working with CSS.

### Phase 5: CSS (everything else)
YEEEESSSSSS LET'S MAKE IT BEAUTIFUL MWAHAHAHAHAHAHA.

Table Of Stuff I Will Have To Do

| I will use: | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |
| :---------: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Rails Models                    | User | Games | Comments, Updates |  |  |  |
| Rails Controllers               | User, Session | Games | Comments, Updates |  |  |  |
| Rails Routes and Views          | Root, User [new, create], Session [new, create, destroy] | User [show], Game [new, create, edit, update, destroy, show] | Comment [new, create, destroy, show], Update [new, create, destroy, show] |  |  |
| Backbone Models And Collections |  | User, Games | Comments, Updates |  |  |
| Backbone Routers                |  | Router |  |  |  |
| Backbone Views                  |  |  |  | Everything, basically | And then the rest of it |
| Backbone Templates (Ditto)      |  |  |  | Comments, Updates, Show, Game Preview |  |
| CSS                             |  |  |  | Game Show | ALL OF IT |
| 3rd Party Gems                  |  |  |  |  |  |
