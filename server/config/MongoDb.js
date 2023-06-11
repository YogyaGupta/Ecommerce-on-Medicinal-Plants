import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    mongoose.connect("mongodb+srv://gyogya412:gyogya412@cluster0.ubjrb.mongodb.net/Ecommerce?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
