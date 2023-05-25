const mongoose = require("mongoose")
const shortId = require("shortid")

async function main() {
    await mongoose.connect(process.env.url, {
        useNewUrlParser:true, useUnifiedTopology: true
    });
    console.log('Database Connected')
  }
  
  main().catch(err => console.log(err));

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type:String,
        required: true,
        default:shortId.generate
    },
    clicks: {
        type:Number,
        required: true,
        default: 0
    }
})

exports.ShortUrl = mongoose.model("ShortUrl",shortUrlSchema)