User.create(name: "maxim", email: "itismaxim@gmail.com", password: "password")
User.create(name: "daniel", email: "itisdannyg@gmail.com", password: "password")

Game.create(author_id: 1,
            title: "Vampire Game",
            summary: "Stuck in Dracula's Castle!",
            description: "Will you survive? Will you try to claim the mantle of VAMPIRE KING?",
            image_url: 'http://images.pocketgamer.co.uk/FCKEditorFiles//gaming-monarchs-count-dracula.jpg')

Game.create(author_id: 1,
            title: "Jedi Game",
            summary: "You're all Jedis. Lightsabers and hunting down the Sith!",
            description: "Honsetly I don't know yet. But lightsabers!",
            image_url: 'http://hdwallpapersfit.com/wp-content/uploads/2015/03/jedi-hd-wallpaper.jpg')

Game.create(author_id: 2,
            title: "Dragons On Black Mountain",
            summary: "It's like monster hunter, but for dragons.",
            description: "Maxim don't ruin this for me. You are not invited.",
            image_url: 'http://www.dailydesigninspiration.com/diverse/di/kekaikotaki/Black-Dragon.jpg')
