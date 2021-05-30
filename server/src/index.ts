import express from 'express'
import * as fs from 'fs';
import { IEntry } from './IEntry'
import { IAccount } from './IAccount'
import { IDay } from './IDay'
var cors = require('cors')
const app = express()
const port = 8000

app.listen(port, () => {console.log("app.listen")});
app.use(express.json);
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

app.get('/entries', (req, res) => {
    console.log("entries");
    const data = readFile('entries.json');
    console.log("data", data);
    res.send(data)
})

app.post('/addentry', (req, res) => {
    const newEntry: IEntry = {
        entryID: req.body.entryID,
        userID: req.body.userID,
        date: req.body.date,
        result: req.body.result
        
    }
    writeToFile(newEntry, 'entries.json');
    res.sendStatus(200);
})

app.get('/days', (req, res) => {
    const data = readFile('days.json');
    console.log("data", data);
    res.send(data)
})

app.post('/day', (req, res) => {
    const newEntry: IDay = {
        date: req.body.date,
        positive: req.body.positive,
        negative: req.body.negative
    }
    writeToFile(newEntry, 'days.json');
    res.sendStatus(200);
})

app.get('/accounts', (req, res) => {
    const data = readFile('accounts.json');
    console.log("data", data);
    res.send(data)
})

app.post('/account', (req, res) => {
    const newEntry: IAccount = {
        userID: req.body.userID,
        name: req.body.name,
        password: req.body.password,
        salt: req.body.salt,
        isAdmin: req.body.isAdmin
    }
    writeToFile(newEntry, 'accounts.json');
    res.sendStatus(200);
})

const writeToFile = (entry: IEntry | IDay | IAccount, path: string) => {
    const data = readFile(path);
    data.push(entry);
    console.log("Data", data, "req", entry);
    fs.writeFileSync(`${process.cwd()}/server/src/${path}`, JSON.stringify(data));
}

const readFile = (path: string) => {
    let data: any = '';
    try {
        data = fs.readFileSync(`${process.cwd()}/server/src/${path}`, 'utf8')
    } catch (err) {
        console.error(err)
    }
    return data === '' ? [] : JSON.parse(data);
}