# :robot: Twitter RT Bot Template

**A node.js template to easily build Twitter RT Bots**

Feel free to use, copy, modify and publish your bot as you want, but I would be happy to receive some credits :grimacing:

If you are a programmer, remember that this repository was created thinking on people who don't code and want to create their own Twitter Retweet Bot

The first bot created with this template was my own bot, [Vassoura Bot](https://twitter.com/vass_oura_bot), but to this moment there are at least other 9 bots running based on this template.

---

### :computer: Dependencies

- Install [NodeJS](https://nodejs.org/en/)
- [Download this repository](https://github.com/vassourita/twitter-bot-template/archive/master.zip)
- Any text editor (i suggest [VS Code](https://code.visualstudio.com/))
- Twitter developer credentials. These are a little tricky to get
  - First, create a twitter account for your bot.
  - Logged on twitter on the bot account, visit [Twitter Developer Tools](developer.twitter.com)
  - Assign for a developer account, answer the questions and await for a developer license (this may take hours or weeks)
  - After getting your license, visit [Twitter Developer Tools](developer.twitter.com) again logged on your bot account, open the "apps" tab and click "create an app"
  - Answer the questions about your app
  - Inside your app tab, open "access and tokens" an copy both "consumer api keys"
  - Generate both access tokens and copy them too
  - In total, you should have four credentials. Save them for later

### :rocket: Setting and running your bot

- After downloading this repository, you should have a folder called "twitter-bot-template-master". Open it in your preferred text editor.
- Inside the file "index.js" you may find some instructions on how to setup your bot with your credentials and words
- Open a terminal and navigate to the same folder. [Learn how](https://medium.com/@adsonrocha/como-abrir-e-navegar-entre-pastas-com-o-prompt-de-comandos-do-windows-10-68750eae8f47)
- Write "npm install" without quotes and press enter. Await for the installation to finish
- Write "npm run start" without quotes and press enter. You should see a message saying the bot is starting

:tada:Congratulations!:confetti_ball: Your bot is now running on your computer. Running a bot on your own computer is not cpu-intensive, but I suggest to host your bot on a cloud service such as Heroku. [This tutorial](https://www.youtube.com/watch?v=DwWPunpypNA) from Coding Train can help on hosting a free service on [Heroku](https://heroku.com).

---

If you need help doing this or find any errors in this tutorial, please tell me on [Twitter](https://twitter.com/vass_oura) or [create an issue](https://github.com/vassourita/twitter-bot-template/issues/new) on this repo!

[Twitter api documentation](https://developer.twitter.com/en/docs/basics/getting-started) contains lots of useful info that you might want to use if you plan on customizing this bot and adding new functionalities.

Also feel free to submit a pull request on this repo! I would love to see new functionalities on the bot. Stars are also welcome!
