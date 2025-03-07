const Contact = require('../models/Contact')


// post the contact information
const addContactMessage = async('/', (req, res)=>{
  // 
  try{
    const {name, email, phoneNumber, whatsappNumber , message} = req?.body;
    // save to db
    const newContact = new Contact({
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      whatsappNumber: "1234567890",
      message: "Hello, I have a question about your services.",
   })
   //  
   newContact.save();
  }
  catch(err){
    console.error('Error during post:', err);
    res.status(500).json({ message: 'Server error during contact post' });
  }

})

// get all contact message
const getAllContactData = async('/contacts', (req, res)=>{
    try{
      const allMessage = Contact.find().sort({ createdAt: -1 });
      res.status(200).json({message:"contact data found", allMessage})
    }
    catch(err){
      console.error("Error fetching contacts:", err);
    }
});

module.exports={addContactMessage, getAllContactData}