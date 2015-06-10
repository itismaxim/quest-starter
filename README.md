# Quest Starter

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Synopsis:

The Problem: I'm a Game Master for Dungeons and Dragons. I want to find out when my players are available and what games they think are coolest. 

So here's Quest Starter: a Doodle Clone that looks like Kickstarter. I sign up, make a game, and then write a survey. Anyone can look at my game and fill out my survey. Each game shows how many people are interested, and can see all the survey results. Scheduleing made easy, and I know who's bringing the chips!

## MVP

Note: GM stands for Game Master. Here, GMs are users: they have to register.
Note: PC stands for Player Character. Here, PCs are guests: they may, but do not have to, register.

###Required Features 

- [x] GMs can sign up and in (through Google).
- [x] GMs can make Games and Surveys.
- [ ] GMs can view their games and survey responses.
- [ ] GMs can give a game a time and mark it as started.
- [ ] The Survey has a WICKED sweet availability form.
- [ ] All the Survey responses are grouped together in an easy to read fashion.

- [ ] PCs can see all of a GM’s Games.
- [ ] PCs can see individual Game pages.
- [ ] PCs can fill out surveys.

###Stretch Features

- [ ] GMs can write Updates for Games.
- [ ] GMs and Users can Comment on Games.
- [ ] Users can search GM and Games.
- [ ] Sign up through Google.

## Design Docs
* [View Site Map][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Auth, Rewrite Readme  (~1 day)
Start up rails, make users, make auth, and re-figure out how this project is going to work and what my goals are. Third time's the charm, eh? At least my wireframes are mostly intact.

### Phase 2: Making Games, Viewing Games (~2 days)
Solidify the games model, write the views, be able to create and update games. Transition everything to backbone: hope she runs nice now.

### Phase 3: Surveys (~3 days)
This is either going to be suprisingly easy or an utter nightmare. In short: make the survey builder form. Each survey can have three(+?) types of input: schedule, fill-in-the-blank, and multiple-choice. Each survey needs a name slot. If a user is signed in, the survey is associeated with her, but you can also be anonymous.

### Phase 4: Survey Fill In and View (~1 days)
A user can visit the site, click on a game, and fill out the survey. Then the gm can view the survey, from a list of all the filled out surveys. The INTERESTED PLAYERS number on the game should go up for every unique visitor who fills out a survey.

### Phase 5: Survey Results Fancy Display (~2 days)
See the aggregate results for a survey. Has to be super awesome and easy to read.

### Phase 6: CSS (everything else)
YEEEESSSSSS LET'S MAKE IT BEAUTIFUL MWAHAHAHAHAHAHA.

Table Of Stuff I Will Have To Do

| I will use: | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |  Phase 6 |
| :---------: | :-----: | :-----: | :-----: | :-----: | :-----: | :------: |
| Rails Models                    | User | Games | Survey | Answers |  |  |
| Rails Controllers               | User, Session | Games | Surveys | Answers |  |  |
| Rails Routes and Views          | Root, User [new, create], Session [new, create, destroy] | User [show], Game [new, create, edit, update, destroy, show] | Surveys [new, create] | Answers [new, create, show] | Survey [show] |  |
| Backbone Models And Collections |  | User, Games | Survey | Answers |  |  |
| Backbone Routers                |  | Router |  |  |  |  |
| Backbone Views (Haven't Figured This Out Yet)                  |  |  |  |  |  |  |
| Backbone Templates (Ditto)              |  |  |  |  |  |  |
| CSS                             |  |  |  |  |  | ALL OF IT |
| 3rd Party Gems                  |  |  |  |  |  |  |

