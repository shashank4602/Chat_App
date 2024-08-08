import mongoose from "mongoose";
const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://anonymperson912:Shashanklucky%40123@cluster0.4vjx7bf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error:", error.message);
    }
};

export default connectToMongoDB;