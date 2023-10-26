import express from "express"; //importing the express module
import bodyParser from "body-parser"; //importing the body-parser module
const app = express(); //creating an instance of the Express application
const PORT = process.env.PORT|| 8000; //setting the port number for the server
import fetch from 'node-fetch'
import helmet from 'helmet';

app.use(bodyParser.json()); //middleware to parse json data
app.use(helmet());

app.get("/search", async (req, res) => {
    const { term, media } = req.query; //extracting the "term" and "media" query parameters from the request
    try{
        //sending a request to the iTunes search API with "term" and media being the Parameter key
        const response = await fetch(`https://itunes.apple.com/search?term=${term}&media=${media}`); 
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json(); //parsing the response data as JSON
        res.json(data); //sending the JSON response back to the program
    } catch (error){ //handling any errors that occur when the request is made
        console.error(error)
        res.status(500).json({ error: "Internal server error"});
    }
});

//starting the server on 8000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`); //display the message the server is running.
}); 

