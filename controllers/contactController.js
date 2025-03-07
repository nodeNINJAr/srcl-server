const Contact = require('../models/Contact')


// post the contact information
const addContactMessage = async(req, res) =>{

  const {name, email, phoneNumber, whatsappNumber , message} = req?.body;
     //
    if (phoneNumber.length !== 11 || whatsappNumber.length !== 11) {
      return res.status(400).json({ message: "Please enter a valid 11-digit Phone/WhatsApp number" });
    }
  // 
  try{
    // save to db
    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      whatsappNumber,
      message,
   })
   //  
   newContact.save();
   res.status(201).json({message:"Thank you for reaching out! We will contact you soon."})
  }
  catch(err){
    console.error('Error during post:', err);
    res.status(500).json({ message: 'Server error during contact post' });
  }

};

// get all contact message
const getAllContactData = async(req, res) => {
    try{
      const allMessage = Contact.find().sort({ createdAt: -1 });
      res.status(200).json({message:"contact data found", allMessage})
    }
    catch(err){
      console.error("Error fetching contacts:", err);
    }
};

module.exports={addContactMessage, getAllContactData}