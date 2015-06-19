User.create(name: "Maxim", password: "password")
User.create(name: "Daniel", password: "password")
User.create(name: "Von", password: "password")
User.create(name: "Levy", password: "password")

Game.create(
  author_id: 1,
  author_name: 'Maxim',
  title: "Vampire Game",
  summary: "Stuck in Dracula's Castle!",
  description: "So it's Castlevania! You're all stuck in Drac's Shack and trying to get out. Big ol' mega dungeon, lot's of demon slaying, and prolly more then a few mysteries. It's gonna be a heap of fun!",
  image_url: 'http://images.pocketgamer.co.uk/FCKEditorFiles//gaming-monarchs-count-dracula.jpg',
  active: true
)
Game.create(
  author_id: 1,
  author_name: 'Maxim',
  title: "Jedi Game",
  summary: "You're all Jedis. Lightsabers and hunting down the Sith!",
  description: "Honsetly I don't know yet. But lightsabers! And aliens. And shapeships!",
  image_url: 'http://hdwallpapersfit.com/wp-content/uploads/2015/03/jedi-hd-wallpaper.jpg',
)
Game.create(
  author_id: 1,
  author_name: 'Maxim',
  title: "CAGE MATCH",
  summary: "D&D Fistacuffs Meets Wrestling Meets Luchadors",
  description: "I like Muscle Wizards. No: I LOVE Muscle Wizards. THis isn't about that though. This about one on one pvp D&D wrestling.",
  image_url: 'http://holdupnow.com/wp-content/uploads/2014/10/cage1.jpg',
)
Game.create(
  author_id: 2,
  author_name: 'Daniel',
  title: "Dragons On Black Mountain",
  summary: "It's like monster hunter, but for dragons.",
  description: "Maxim don't ruin this for me. You are not invited. As for everyone else, bring your impractical weapons and skimpy armor, because there are giant lizards to slay and fley.",
  image_url: 'http://www.dailydesigninspiration.com/diverse/di/kekaikotaki/Black-Dragon.jpg',
)
Game.create(
  author_id: 2,
  author_name: 'Daniel',
  title: "Journey To Carcosa",
  summary: "Hooray for Cthullu!",
  description: "It's Dinosaurs and Cthullu and Lasers and Skeletor. And it's your job to deliver the mail.",
  image_url: 'http://www.wired.com/wp-content/uploads/2014/12/9-credit-1.jpg',
)
Game.create(
  author_id: 3,
  author_name: 'Von',
  title: "Lacuna",
  summary: "You're all Mystery Agents! And you're going to Blue City",
  description: "Honestly I can't tell you any more. It would violate your security clearence.",
  image_url: 'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg',
)
Game.create(
  author_id: 3,
  author_name: 'Von',
  title: "Shadow Run 3rd Edition Game",
  summary: "Let's all roll a lot of d10s",
  description: "Mr. Johnson just called. He says its a Chicago just dissapeared. Are you ready to make some money?",
  image_url: 'http://wowslider.com/sliders/demo-7/data/images/ny.jpg',
)

Follow.create(user_id: 1, game_id: 4)
Follow.create(user_id: 2, game_id: 1)
Follow.create(user_id: 2, game_id: 2)
Follow.create(user_id: 4, game_id: 1)
Follow.create(user_id: 4, game_id: 2)
Follow.create(user_id: 4, game_id: 3)
Follow.create(user_id: 4, game_id: 4)
Follow.create(user_id: 4, game_id: 6)

Comment.create(game_id: 1, user_id: 2, poster_name: 'daniel', text: 'Bra Nobody Thinks Vampires Are Cool')
Comment.create(game_id: 1, user_id: 1, poster_name: 'maxim', text: 'Bra, shut your mouth. Vampires are awesome.')
Comment.create(game_id: 1, user_id: 0, poster_name: 'Alex', text: "For a couple of Bra's, you guy aren't very supportive ;)")
Comment.create(game_id: 1, user_id: 1, poster_name: 'maxim', text: 'I hate you so much. Also, wanna join the Vampire Game?')

Update.create(user_id: 1, game_id: 1, title: 'WOOH FIRST UPDATE', text: "Well look at me, borderline competent, capable of making games and updates.")
Update.create(user_id: 1, game_id: 1, title: 'Shitty Second Update', text: "Not really though. Only in the fantasy dimension this update was written in.")
