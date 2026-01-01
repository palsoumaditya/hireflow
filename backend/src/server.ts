import app from './app'
import dotenv from 'dotenv'
 

dotenv.config()
const PORT = process.env.PORT || 5000;

const startServer=async()=>{
          try{
          app.listen(PORT,()=>{
                    console.log('Server Running on Port ${PORT}');
          });
}
catch(error){
          console.error('Failed to Start Server:',error);
          process.exit(1);
}
}
