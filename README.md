# notes

initiling

init npm to your project

```cmd
npm init -y
```

installing libraries

```cmd
npm i minimist uuid
npm i -D eslint
npm i -D jset
npm i @types/jest
npm i mongoose
npm i dotenv
npm i @code-fellows/supergoose
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

You can eslint your code using this command

```cmd
npm run lint
```

<p style="color:red; font-size: 18px">Notes</p>

- You can't leave the message/note empty, and for now you can use --add/-a --list and --delete

- You Have to pass a valid action

- You can't keep the category empty

- if the DB is Empty --list will return nothing

- you have to pass a valid id when trying to delete

![UML](./img/UML.png 'UML Diagram')
