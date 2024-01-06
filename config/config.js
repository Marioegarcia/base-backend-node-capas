  
  
  
  if (process.env.NODE_ENV === undefined) {
    require("dotenv").config();
  }
  



  const URI = encodeURI(process.env.MONGO_URI_DEV);
  

  const config = {
    mongoDbUri: URI,
    dbConfigs : { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    },
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
    smtpEmail: process.env.SMTP_EMAIL,
    smtpPass: process.env.SMTP_PASS,
  };
  
  module.exports = { config };