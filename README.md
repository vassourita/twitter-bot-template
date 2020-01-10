# twitter-bot-template

**A node.js template to easily build Twitter Bots**

Feel free to use, copy, modify and publish your bot as you want, but **be sure to read the LICENSE file** before anything.

---

## How to create your own Twitter Bot:

### Getting the credentials

- Create a new Twitter account
- Visit [Twitter Developer Tools](developer.twitter.com)
- Assign for a developer account, answer the questions and await for a developer license
- Logged in as a developer, open the "apps" tab and click "create an app"
- Answer the questions about your app
- Inside your app tab, open "access and tokens" an copy both "consumer api keys"
- Generate both access tokens and copy them too
- In total, you should have four credentials. Save them for later

### Downloading and setting the environment

- [Install Node](https://nodejs.org/en/) in your computer
- [Download](https://github.com/vassourita/twitter-bot-template/archive/master.zip) this repository in your computer
- Open the folder in a text editor such as Visual Studio Code or Sublime Text
- Open the project root folder in a command line such as cmd or Git Bash
- run "npm install" and await for the dependencies to be installed

### Setting and running your bot

- Rename file ".env.example" as ".env" and insert your credentials in their respective fields
- Inside the "config" folder, open "track.js"
- In the "track" array enter the words you want the bot to search for and retweet, separating each by comma and inside double quotes
- Open "users.js"
- In the "bannedUsers" array enter the **@** of users whose tweets you want the bot to ignore
- Run "npm run start"

### Hosting your bot

- Running a bot on your own computer is not cpu-intensive, but I suggest to host your bot on a cloud service such as Heroku
- [This tutorial](https://www.youtube.com/watch?v=DwWPunpypNA) from [Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) can help on hosting a free service on Heroku

---

If you need help doing this or find any errors in this tutorial, please tell me on [Twitter](https://twitter.com/vass_oura) or [create an issue](https://github.com/vassourita/twitter-bot-template/issues/new) on this repo!

[Twitter api documentation](https://developer.twitter.com/en/docs/basics/getting-started) contains lots of useful info that you might want to use if you plan on customizing this bot and adding new functionalities.

Also feel free to fork this repo! I'll love to see new functionalities on the bot.
