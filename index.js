const express = require('express');
const cowsay = require('cowsay');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require("dotenv");
const nodemailer = require('nodemailer')

dotenv.config();

//const db = 'mongodb+srv://kent:king2020@cluster0-ojmxk.mongodb.net/test?retryWrites=true&w=majority';
const db = 'mongodb://localhost/willi'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function(){
  console.log('Connection has been established!');
}).on('error', function(error){
    console.log('Error is: ', error);
});
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};


const app = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));


//serving up my front end web application
const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})




const userModel = mongoose.model('User', {
    firstname: String,
    lastname: String,
    emailAddress: String,
    password: String,
    confirmPassword: String,
    phoneNumber: String,
    country: String,
    city: String
})

const commentModel = mongoose.model('Comment', {
    emailAddress: String,
    review: String,
    bookReviewed: Number,
    complete: Boolean
})

const eventModel = mongoose.model('Event', {
    emailAddress: String,
    phoneNumber: String,
    registrationDate: String,
    phoneNumber: String,
    shortMessage: String
})

const subscriptionModel = mongoose.model('Subscription', {
    emailAddress: String,
    subscriptionDate: String
})

const contactModel = mongoose.model('Contact', {
    emailAddress: String,
    name: String,
    subject: String,
    message: String
})



//sign up
app.post('/api/register', cors(), async( req, res, next ) => {
    try {
       const user = new userModel(req.body);
       const result = await user.save()
       res.status(200).json(result)
    } catch(error){
        res.status(500).json(error)
    }
})

app.post('/api/login', cors(), async( req, res, next ) => {
    try {
        let emailAddress = req.body.emailAddress;
        let password = req.body.password;
        if(emailAddress.length > 0 && password.length > 0){
            await userModel.findOne({ emailAddress }).then( response => {
                res.status( 200 ).json( response )
            })
        }

    } catch(error){
        res.status( 500 ).json(error)
    }
})


app.post('/api/addAReview', cors(), async( req, res, next )=> {
    try {
        let emailAddress = req.body.emailAddress;
        let comment = req.body.comment;
        let bookReviewed =  req.body.bookReviewed;
        let completed = req.body.completed;

       let result = new commentModel({ 
           emailAddress, 
           comment, 
           bookReviewed,
           completed })
       const response = await result.save();
       res.status( 200 ).json( response )
    } catch( error ){
        res.status( 500 ).json( error)
    }
})

app.post('/api/getReviews', cors(), async(req, res, next) => {
    try {
       //let id = req.params.bookId;
       const comments = await commentModel.find();
       res.status( 200 ).json( comments )
    } catch( err ){
        res.status( 500 ).json( err )
    }
})


app.post('/api/registerEvent', cors(), async( req, res,next) => {
    try {
        const { emailAddress, phoneNumber, registrationDate, shortMessage } = req.body;
        const event = new eventModel({ emailAddress, phoneNumber, registrationDate, shortMessage });
        const result = await event.save();
        res.status( 200 ).json( result )
    } catch( error ){
        res.status( 500 ).json(  error )
    }
})

app.post('/api/saveContactUs', cors(), async( req, res, next) => {
    try {
        const { emailAddress, name, subject, message } = req.body;
        let contact = new contactModel({ emailAddress, name, subject, message });
        let result = await contact.save();
        res.status( 200 ).json( result )
    } catch( err ){
        res.status( 500 ).json( err )
    }
})

app.post('/api/forwardOrder', cors(), async( req, res, next ) => {
    try {
        let transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kingbecks07@gmail.com',
                pass: 'kent@#2019'
            }
        });
        const mailOptions = {
            from: 'kingbecks07@gmail.com',
            to: 'isaacnsengiyunva@gmail.com',
            subject: 'mail sent to the willibooks',
            html: '<p>This is a ecommerce mail</p>'
        };
        
        transport.sendMail( mailOptions, function(err, info){
            if(err){
                res.status( 500 ).json( err )
            }
            else {
                res.status( 200 ).json( info )
            }
        })
    } catch(err) {
        res.status( 500 ).send({ error: err })
    }
})

app.post('/api/subscribe', cors(), async( req, res, next ) => {
    try {
        const { emailAddress, subscriptionDate } = req.body;
        let subscription = new subscriptionModel.save({ emailAddress, subscriptionDate });
        let result = await subscription.save();
        res.status( 200 ).json( result );
    } catch( error ) {
        res.status( 500 ).json( error);
    }
})



const PORT = process.env.PORT || 5000
app.listen( PORT, () => {
    console.log(`Mixing it up on port ${PORT}`)
})