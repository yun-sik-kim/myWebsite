import { MongoClient } from "mongodb";

// !Next JS setting code
const url =  process.env.MONGODB_URI as string    // DB access URL
// const options: any = { useNewUrlParser: true }; //!!! LEGACY
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {      // 2. But in dev mode, Next js read over all js files when save one file. To prevent, this code is needed
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect()
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url).connect();    // 1. when save connect() in var, it only called once thus efficient.
                                                            
}

export {connectDB};

