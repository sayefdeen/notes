# notes

initiling

init npm to your project

```cmd
npm init -y
```

installing libraries

```cmd
npm i minimist uuid --save
npm i -D eslint --save
npm i -D jset
npm i @types/jest
npm i mongoose
npm i dotenv
```

run all tests

```cmd
npm test
```

You can add a new note for using cmd

```cmd
--add "This is a really cool thing that I wanted to remember for later"
--a "This is a really cool thing that I wanted to remember for later"
```

You can see all your records in mongoDB

```cmd
--list
```

You can Delete a record from DB

```cmd
--delete <Id for the record from --list>
```

OutPut of this command is

```cmd
Adding Note: this is another message
```

You can eslint your code using this command

```cmd
npm run lint
```

- Note: You can't leave the message/note empty, and for now you can use --add/-a --list and --delete

![UML](./img/UML.png 'UML Diagram')
