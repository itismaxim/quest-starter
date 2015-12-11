Comment.create!([
  {game_id: 6, user_id: 6, poster_name: "Hiring Guy", text: "Are you really going to run Lacuna?"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Third"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Fourth"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "fifth"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Sixth"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Seventh"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Eight"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Post a comment"},
  {game_id: 3, user_id: 0, poster_name: "I am Ultron", text: "Hello Hello"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Tenth comment pops in at the top?"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "11"},
  {game_id: 6, user_id: 1, poster_name: "Maxim", text: "Hello there."},
  {game_id: 1, user_id: 1, poster_name: "Maxim", text: "Hallo"},
  {game_id: 1, user_id: 1, poster_name: "Maxim", text: "Hello again"},
  {game_id: 1, user_id: 0, poster_name: "Giant Jerk", text: "Your broccoli sucks"},
  {game_id: 1, user_id: 6, poster_name: "Hiring Guy", text: "Hello there"}
])
Game.create!([
  {author_id: 6, author_name: "Hiring Guy", title: "888888888", summary: "\n        jjjjjj", description: "\n    jhjhgjhgjhjhjh", image_url: "http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1447300087/kpzpw79z8k4lq6e7a52o.jpg", active: false},
  {author_id: 6, author_name: "Hiring Guy", title: "My Cool Game", summary: "Summarize your game here. Make is short but sweet!", description: "Describe your game here. This is where you can get in depth and describe what system you want to run, what the setting will be, and what kind of characters the players will have. Feel free to add anything else!", image_url: "http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1449855822/egx3ryi2adrirtwuvqzh.png", active: false},
  {author_id: 6, author_name: "Hiring Guy", title: "\n    \n    \n    \n    \n    My Cool Game\n  \n  \n  \n  \n  ", summary: "\n        \n        \n        \n        \n        Summarize your game here. Make is short but sweet!\n      \n      \n      \n      \n      ", description: "\n    \n    \n    \n    \n    Describe your game here. This is where you can get in depth and describe what system you want to run, what the setting will be, and what kind of characters the players will have. Feel free to add anything else!\n  \n  \n  \n  \n  ", image_url: "http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1449855862/lupzybz9coztmcs5opvv.jpg", active: false},
  {author_id: 6, author_name: "Hiring Guy", title: "YES YES YES", summary: "YESSSSSSS", description: "Did I mention YES?", image_url: "http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1449855885/cf8muu8srnyoiyekmwoe.jpg", active: false}
])
Update.create!([
  {user_id: 6, game_id: 1, title: "Hello there?", text: "Does it migrate down?"},
  {user_id: 6, game_id: 1, title: "Hello There", text: "Gosh I am attractive. This line was edited in after a tab switch. Wow, everything is pretty and it works too. Hello there."},
  {user_id: 6, game_id: 1, title: "THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE THE LONGEST TITLE ", text: "New"}
])
User.create!([
  {name: "Daniel", session_token: "p06odntQCs0PogbnTELruA", pass_hash: "$2a$10$w80DsPZSGn.45bE0oFRC0OLa420tf68zW2ADy1g.JHHZi3ksN.MHG"},
  {name: "Levy", session_token: "wXZvpv7hEgTrKrmYwe9QVg", pass_hash: "$2a$10$S6VGESqKqfo8Y4kHgiX8Ueuy16OHlcPkTJFlEC81kR7eotQA2Psh6"},
  {name: "Oleg", session_token: "MyCh0KZbOtYs0VJ1Q1_c-A", pass_hash: "$2a$10$WbjSoMmTycCqaXsoF3TDm.UZDlxeG/E3ylXWyiL68.GslpOFB6PcK"},
  {name: "360noscopeMLGPRO", session_token: "So15d5Qw24bohAmcHi9Zqw", pass_hash: "$2a$10$PKUkt2BzzKtkZx6w04cjpu25uSwvWR9Po7vDvWoqGxL55daIdPH1q"},
  {name: "Von", session_token: "T-BhU87znYM7sefMvpQ-7w", pass_hash: "$2a$10$iUYJQYR5ZCA68chLLdLMAeLtGtYNQC.BnyYLg/iUzO/ko2IaS5EVS"},
  {name: "Maxim", session_token: "7yeOv4tik0EuyEKu6W2VuA", pass_hash: "$2a$10$IiY0poh4ckgn77NYHy34i.U68pp3mDcIPXzUtRM5q7vMwl9P/OeEy"},
  {name: "Hiring Guy", session_token: "AINOwcb09hQQFFODvTKUMg", pass_hash: "$2a$10$iUfGs0/uI5vI6Jv5Yk0wXOgTFjpR47c1hDLCsB/gHIvjxPyVfUmrS"}
])
