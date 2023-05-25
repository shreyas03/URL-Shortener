// const fs = require("fs")
// const mongoose = require("mongoose")
// const model = require("../model/model")
// const shortUrl = model.shortUrl

// exports.getInd = async (req,res) => {
//     const shortUrls = await shortUrl.find()
//     res.render('index', {shortUrls: shortUrls})
// }

// exports.createU = async (req,res) => {
//    await shortUrl.create({
//         full: req.body.fullUrl
//     })
//     res.redirect("/")
// }

// exports.getSh = async (req,res) => {
//     const shortUrl = await shortUrl.findOne({short: req.params.shortUrl})
//     if(shortUrl == null) return res.sendStatus(404)

//     shortUrl.clicks++
//     shortUrl.save()
//     res.redirect(shortUrl.full)
// }

const fs = require("fs");
const mongoose = require("mongoose");
const model = require("../model/model");
const ShortUrl = model.ShortUrl;

exports.getInd = async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrls });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.createU = async (req, res) => {
  try {
    await ShortUrl.create({
      full: req.body.fullUrl,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getSh = async (req, res) => {
  try {
    console.log({ short: req.params.shortUrl })
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (!shortUrl) {
      return res.sendStatus(404);
    }

    shortUrl.clicks++;
    await shortUrl.save();

    res.redirect(shortUrl.full);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
