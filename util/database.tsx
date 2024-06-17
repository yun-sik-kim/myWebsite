import { MongoClient } from "mongodb";

// !Next JS setting code
const url = 'mongodb+srv://imaginebuck02:Cjswosla77@cluster0.yoqodbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' // DB access URL
const option = { useNewUrlParser: true }; //!!! LEGACY
let connectDB;

if (process.env.NODE_ENV === 'development') {               // 2. But in dev mocde, Next js read over all js files when save one file. To prevent, this code is needed
    if (!global._mongo) {
        global._mongo = new MongoClient(url, option).connect()
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();    // 1. when save connect() in var, it only called once thus efficient.
                                                            
}

export {connectDB};

