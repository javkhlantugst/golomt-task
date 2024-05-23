const express = require("express");
//data base teige clienta holbono
const { Client } = require("pg");
const cors = require('cors');
const app = express();  
const port = 3000;


app.use(express.json());
app.use(cors());

//database iin info-g todorhoilj baina.
client = new Client({
    user:'postgres',
    password:'91209913',
    database:'Golomt',
    host:'localhost',
    port:5433
});

client.connect();

// create user
app.post("/createuser", async (req, res) => {
    
    try 
    {
        const { name, phonenumber, username, password } = req.body;
        const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);

        if (result.rows.length > 0) 
        {
           res.status(400).json({ error: 'Username is already registered' });
        }
        else 
        {
            const id = Math.floor(Math.random() * 100);

            await client.query('INSERT INTO users (id, name, phonenumber, username, password) VALUES ($1, $2, $3, $4, $5)', [id, name, phonenumber, username, password]);

            res.status(201).json({ message: 'User created successfully' });
        }
  } 
  catch (err) 
  {
      console.error(err);
      res.status(500).json({ error: "Server error" });
  }
});


// login
app.post('/login', async (req, res) => {
    
    try 
    {
        const { username, password } = req.body;
        const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        
        if (result.rows.length === 0) 
        {
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        
        const user = result.rows[0];
        
        if (user.password !== password) 
        {
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        
        res.status(200).json({ message: 'Login successful' });
    } 
    catch (err) 
    {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });


//shiljuuleg
app.post('/shiljuuleg', async (req, res) => {

    try{
        //
        const {
            shiljuulsen_dans,
            huleen_avsan_bank,
            huleen_avsan_dans,
            huleen_avagchiin_ner,
            guilgeenii_dun,
            valyut,
            guilgeenii_utga
        } = req.body;

        
        const id = Math.floor(Math.random()*100000);

        const query = ` INSERT INTO huulga 
        (id, shiljuulsen_dans, huleen_avsan_bank, huleen_avsan_dans, huleen_avagchiin_ner, guilgeenii_dun, valyut, guilgeenii_utga) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

        const values = [id, shiljuulsen_dans, huleen_avsan_bank, huleen_avsan_dans, huleen_avagchiin_ner, guilgeenii_dun, valyut, guilgeenii_utga];

        console.log("Shiljuuleg:", values);

        await client.query(query, values);

        res.status(201).json({ message: 'Shiljuuleg amjilttai' });
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ error: "Server error"});
    }
});


//huulga
app.get("/huulga", async (req, res) => {

    try 
    {
        const result = await client.query('SELECT guilgeenii_utga, guilgeenii_dun FROM huulga');
        console.log('Database-nees irj bui huulga:', result.rows); 

        res.status(200).json(result.rows);
    } 
    catch (err) 
    {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


//portiin medeelliig console deer delgetslene
app.listen(port, () => {
    console.log("Server is listening port: " + port);
});