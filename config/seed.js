require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'gear', sortOrder: 10},
    {name: 'hardware', sortOrder: 20},
    {name: 'literature', sortOrder: 30},
    {name: 'miscellaneous', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'mechanical keyboard', emoji: 'https://i.postimg.cc/prH611gT/kawaii-keyboard-2.jpg', category: categories[0], price: 5.95},
    {name: 'wrist rest', emoji: 'https://i.postimg.cc/xCRvnxXq/cloud-wrist-rest-3.jpg', category: categories[0], price: 6.95},
    {name: 'mouse', emoji: 'https://i.postimg.cc/QtfJ34zS/mouse.jpg', category: categories[0], price: 3.95},
    {name: 'mouse pad',emoji: 'https://i.postimg.cc/mDSB2M3m/mousepad.jpg', category: categories[0], price: 14.95},
    {name: 'track pad', emoji: 'https://i.postimg.cc/jSW8xb69/apple-track-pad.jpg', category: categories[0], price: 13.95},
    {name: 'headphones', emoji: 'https://i.postimg.cc/7LQwC7f9/appleairmaxpro.jpg', category: categories[0], price: 25.95},
    {name: 'microphone', emoji: 'https://i.postimg.cc/C5pyD4YG/mic.jpg', category: categories[0], price: 1.95},
    {name: 'ring light', emoji: 'https://i.postimg.cc/xCcHHKg1/light.jpg', category: categories[0], price: 4.95},
    {name: 'speakers', emoji: 'https://i.postimg.cc/653sZTx1/speaker.jpg', category: categories[0], price: 3.95},
    
    {name: 'solid state drive', emoji: 'https://i.postimg.cc/3RxMZwDR/ssdrivebeige.jpg', category: categories[1], price: 7.95},
    {name: 'router', emoji: 'https://i.postimg.cc/286K9J6H/router.jpg', category: categories[1], price: 1.95},
    {name: 'monitor', emoji: 'https://i.postimg.cc/X7jpRKS1/monitor.jpg', category: categories[1], price: 2.95},
    
    {name: 'clean code', emoji: 'https://i.postimg.cc/fTyM78hs/cleancode.jpg', category: categories[2], price: 33},
    {name: 'introduction to algorithms', emoji: 'https://i.postimg.cc/tTvM9tvd/introtoalgos.jpg', category: categories[2], price: 33},
    {name: 'refactoring', emoji: 'https://i.postimg.cc/Gmhr3zqV/refact.jpg', category: categories[2], price: 33},
    {name: 'the pragmatic programmer', emoji: 'https://i.postimg.cc/XJnktGVf/thepp.jpg', category: categories[2], price: 33},
    {name: 'cracking the coding interview', emoji: 'https://i.postimg.cc/TPd0h7S8/ctcode.jpg', category: categories[2], price: 33},
    
    {name: 'plants', emoji: 'https://i.postimg.cc/SQ6G7ph0/plantplant.jpg', category: categories[3], price: 22},
    {name: 'note pads', emoji: 'https://i.postimg.cc/cLPvKr6Q/memobook.jpg', category: categories[3], price: 18},
    {name: 'pens', emoji: 'https://i.postimg.cc/43NwL2Xf/pens.jpg', category: categories[3], price: 11},
    {name: 'cord organizer', emoji: 'https://i.postimg.cc/QtKzmYqB/cords.jpg', category: categories[3], price: 22},
    {name: 'office chair', emoji: 'https://i.postimg.cc/zf47znsK/chair.jpg', category: categories[3], price: 400},
  ]);

  console.log(items)

  process.exit();

})();