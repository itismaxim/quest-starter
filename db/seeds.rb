User.create(name: "maxim", email: "itismaxim@gmail.com", password: "password")
User.create(name: "daniel", email: "itisdannyg@gmail.com", password: "password")

Game.create(
  author_id: 1,
  author_name: 'maxim',
  title: "Vampire Game",
  summary: "Stuck in Dracula's Castle!",
  description: "So it's Castlevania! You're all stuck in Drac's Shack and trying to get out. Big ol' mega dungeon, lot's of demon slaying, and prolly more then a few mysteries. It's gonna be a heap of fun!",
  image_url: 'http://images.pocketgamer.co.uk/FCKEditorFiles//gaming-monarchs-count-dracula.jpg',
  active: true
)
Game.create(
  author_id: 1,
  author_name: 'maxim',
  title: "Jedi Game",
  summary: "You're all Jedis. Lightsabers and hunting down the Sith!",
  description: "Honsetly I don't know yet. But lightsabers! And aliens. And shapeships!",
  image_url: 'http://hdwallpapersfit.com/wp-content/uploads/2015/03/jedi-hd-wallpaper.jpg',
)
Game.create(
  author_id: 2,
  author_name: 'daniel',
  title: "Dragons On Black Mountain",
  summary: "It's like monster hunter, but for dragons.",
  description: "Maxim don't ruin this for me. You are not invited. As for everyone else, bring your impractical weapons and skimpy armor, because there are giant lizards to slay and fley.",
  image_url: 'http://www.dailydesigninspiration.com/diverse/di/kekaikotaki/Black-Dragon.jpg',
)

Follow.create(user_id: 1, game_id: 3)
Follow.create(user_id: 2, game_id: 1)
Follow.create(user_id: 2, game_id: 2)

Comment.create(game_id: 1, user_id: 2, poster_name: 'daniel', text: 'Bra Nobody Thinks Vampires Are Cool')
Comment.create(game_id: 1, user_id: 1, poster_name: 'maxim', text: 'Bra, shut your mouth. Vampires are awesome.')
Comment.create(game_id: 1, user_id: 0, poster_name: 'Alex', text: "For a couple of Bra's, you guy aren't very supportive ;)")
Comment.create(game_id: 1, user_id: 1, poster_name: 'maxim', text: 'I hate you so much. Also, wanna join the Vampire Game?')

Update.create(user_id: 1, game_id: 1, title: 'WOOH FIRST UPDATE', text: "Well look at me, borderline competent, capable of making games and updates.")
Update.create(user_id: 1, game_id: 1, title: 'Shitty Second Update', text: "Not really though. Only in the fantasy dimension this update was written in.")
