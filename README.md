# twitter-bot-template

**A node.js template to easily build Twitter Bots**

---

## How to create your own Twitter Bot:

### Getting the credentials

> - Create a new Twitter account
> - Visit [developer.twitter.com](developer.twitter.com)
> - Assign for a developer account, answer the questions and await for a developer license
> - Logged in as a developer, open the "apps" tab and click "create an app"
> - Answer the questions about your app
> - Inside your app tab, open 'access and tokens' an copy the 'consumer api keys'
> - Generate access token and copy them too
> - In total, you should have four credentials. Save them for later.

### Downloading and setting the environment

> - [https://nodejs.org/en/](Install Node) in your computer
> - [https://github.com/vassourita/twitter-bot-template/archive/master.zip](Download) this repository in your computer
> - Open the folder in a text editor such as vsCode as Sublime Text
> - Open the project root folder in a command line such as cmd or Git Bash
> - run "npm install" and await for the dependencies to be installed

### Setting and running your bot

> - Rename file '.env.example' as '.env' and insert your credentials in their respective fields
> - Inside the "config" folder, open "track.js"
> - In the "track" array enter the words you want the bot to search for and retweet, separating each by comma and inside double quotes
> - Open "users.js"
> - In the "bannedUsers" array enter the **@** of users whose tweets you want the bot to ignore
> - Run "npm run start"

### Hosting your bot

> - Running a bot on your own computer is not cpu-intensive, but I suggest to host your bot on a cloud service such as Heroku
> - [https://www.youtube.com/watch?v=DwWPunpypNA](This tutorial) from [https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw](Coding Train) can help on hosting a free service on Heroku

---

If you need any help on doing this or thinks this tutorial has errors, please tell me!
