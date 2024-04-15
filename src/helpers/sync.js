"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {

    // return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    const User = require('../models/user')
    const Firm = require('../models/firm')
    const Brand = require('../models/brand')
    const Category = require('../models/category')
    const Product = require('../models/product')
    const Purchase = require('../models/purchase')

    await User.insertMany(
        [{
        
        "_id": "65343222b67e9681f937f511",
        "username": "admin",
        "password": "aA?123456",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "isActive": true,
        "isStaff": false,
        "isAdmin": true
    },
    {
        "_id": "65343222b67e9681f937f512",
        "username": "staff1",
        "password": "aA?123456",
        "email": "staff1@site.com",
        "firstName": "Staff1",
        "lastName": "Staffz",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f513",
        "username": "staff2",
        "password": "aA?123456",
        "email": "staff2@site.com",
        "firstName": "Staff2",
        "lastName": "Staffz",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f514",
        "username": "Ali",
        "password": "aA?123456",
        "email": "ali@site.com",
        "firstName": "Ali",
        "lastName": "Aliz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f515",
        "username": "Veli",
        "password": "aA?123456",
        "email": "veli@site.com",
        "firstName": "Veli",
        "lastName": "Veliz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f516",
        "username": "Aydan",
        "password": "aA?123456",
        "email": "aydan@site.com",
        "firstName": "Aydan",
        "lastName": "Aydanz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f517",
        "username": "Canan",
        "password": "aA?123456",
        "email": "canan@site.com",
        "firstName": "Canan",
        "lastName": "Cananz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f518",
        "username": "Emel",
        "password": "aA?123456",
        "email": "emel@site.com",
        "firstName": "Emel",
        "lastName": "Emelz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
])
    await Brand.insertMany(
        [
            {   
                "_id": "65343222b67e9681f937f512",
                "name": "Tommy",
                "image": "https://i.pinimg.com/736x/d3/09/1a/d3091a1a5350fede679b2c7461b0745b.jpg"
            },
            {
                "_id": "65343222b67e9681f937f513",
                "name": "LG",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png"
            },
            {
                "_id": "65343222b67e9681f937f514",
                "name": "Samsung",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
            },
            {
                "_id": "65343222b67e9681f937f515",
                "name": "Apple",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
            },
            {
                "_id": "65343222b67e9681f937f516",
                "name": "Huawei",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Huawei_logo.svg/1200px-Huawei_logo.svg.png"
            },
            {
                "_id": "65343222b67e9681f937f517",
                "name": "Xiaomi",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Xiaomi_logo.svg/1200px-Xiaomi_logo.svg.png"
            },


        ]
    )


    await Firm.insertMany([
            {   
                "_id": "65343222b67e9681f937f521",
                "name": "BOYNER",
                "phone": "+90 212 123 45 67",
                "address": "Maslak, İstanbul, Türkiye",
                "image": "https://example.com/images/boyner.jpg"
            },
            {
                "_id": "65343222b67e9681f937f522",
                "name": "FİLO",
                "phone": "+90 312 234 56 78",
                "address": "Çankaya, Ankara, Türkiye",
                "image": "https://example.com/images/filo.jpg"
            },
            {
                "_id": "65343222b67e9681f937f523",
                "name": "TRENDYOL",
                "phone": "+90 216 345 67 89",
                "address": "Kadıköy, İstanbul, Türkiye",
                "image": "https://example.com/images/trendyol.jpg"
            },
            {
                "_id": "65343222b67e9681f937f524",
                "name": "MEDIAMARKT",
                "phone": "+90 232 456 78 90",
                "address": "Bornova, İzmir, Türkiye",
                "image": "https://example.com/images/mediamarkt.jpg"
            },
            {
                "_id": "65343222b67e9681f937f525",
                "name": "TEKNOSA",
                "phone": "+90 212 567 89 01",
                "address": "Beşiktaş, İstanbul, Türkiye",
                "image": "https://example.com/images/teknosa.jpg"
            },
            {
                "_id": "65343222b67e9681f937f526",
                "name": "VATAN",
                "phone": "+90 312 678 90 12",
                "address": "Yenimahalle, Ankara, Türkiye",
                "image": "https://example.com/images/vatan.jpg"
            },
            {
                "_id": "65343222b67e9681f937f527",
                "name": "N11",
                "phone": "+90 216 789 01 23",
                "address": "Ataşehir, İstanbul, Türkiye",
                "image": "https://example.com/images/n11.jpg"
            }

    ])




    await Category.insertMany([
    {
        "_id": "65343222b67e9681f937f5aa",
        "name": "Electronics"},
    {
        "_id": "65343222b67e9681f937f5bb",
        "name": "Books"},
    {
        "_id": "65343222b67e9681f937f52a",
        "name": "Clothing"},
    {
        "_id": "65343222b67e9681f937f52b",
        "name": "Home"},
    {
        "_id": "65343222b67e9681f937f52c",
        "name": "Sports"},
    {
        "_id": "65343222b67e9681f937f52d",
        "name": "Toys"},
    {
        "_id": "65343222b67e9681f937f52e",
        "name": "Food"},
    {
        "_id": "65343222b67e9681f937f52f",
        "name": "Beauty"},
    
    ])
    await Product.insertMany([
    {
        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f515",
        "name": "Apple iPhone 12 Pro Max",
        "quantity": 100,
        "price": 10000,
        "description": "Apple iPhone 12 Pro Max 512GB",
        "image": "https://example.com/images/iphone12promax.jpg",
        "category": "Electronics",
        "firm": "Apple"
    },
    {

        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f514",
        "name": "Samsung Galaxy S21 Ultra",
        "quantity": 100,  
        "price": 9000,
        "description": "Samsung Galaxy S21 Ultra 512GB",
        "image": "https://example.com/images/s21ultra.jpg",
        "category": "Electronics",
        "firm": "Samsung"
    },
    {
        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f517",
        "name": "Xiaomi Mi 11",
        "quantity": 200,
        "price": 8000,
        "description": "Xiaomi Mi 11 512GB",
        "image": "https://example.com/images/mi11.jpg",
        "category": "Electronics",
        "firm": "Xiaomi"
    },
    {   
        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f516",
        "name": "Huawei P40 Pro",
        "quantity": 140,
        "price": 7000,
        "description": "Huawei P40 Pro 512GB",
        "image": "https://example.com/images/p40pro.jpg",
        "category": "Electronics",
        "firm": "Huawei"
    },
    {   
        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f513",
        "name": "Apple MacBook Pro",
        "quantity": 50,
        "price": 11000,
        "description": "Apple MacBook Pro 16\" 1TB",
        "image": "https://example.com/images/macbookpro.jpg",
        "category": "Electronics",
        "firm": "Apple"
    },
    {   
        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f514",
        "name": "Samsung Galaxy Tab S7+",
        "quantity": 70,
        "price": 9000,
        "description": "Samsung Galaxy Tab S7+ 512GB",
        "image": "https://example.com/images/tabs7plus.jpg",
        "category": "Electronics",
        "firm": "Samsung"
    },
    {
        "categoryId": "65343222b67e9681f937f501",
        "brandId": "65343222b67e9681f937f517",
        "name": "Xiaomi Mi Pad 5",
        "quantity": 90,
        "price": 7000,
        "description": "Xiaomi Mi Pad 5 512GB",
        "image": "https://example.com/images/mipad5.jpg",
        "category": "Electronics",
        "firm": "Xiaomi"
    }
    ])
    await Purchase.insertMany([
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f521",
        "brandId": "65343222b67e9681f937f515",
        "productId": "65343222b67e9681f937f501",
        "quantity": 3,
        "price": 10000,
        "totalPrice": 30000,
    },
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f522",
        "brandId": "65343222b67e9681f937f514",
        "productId": "65343222b67e9681f937f502",
        "quantity": 2,
        "price": 9000,
        "totalPrice": 18000,
    },
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f523",
        "brandId": "65343222b67e9681f937f517",
        "productId": "65343222b67e9681f937f503",
        "quantity": 1,
        "price": 8000,
        "totalPrice": 8000,
    },
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f524",
        "brandId": "65343222b67e9681f937f516",
        "productId": "65343222b67e9681f937f504",
        "quantity": 4,
        "price": 7000,
        "totalPrice": 28000,
    },
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f525",
        "brandId": "65343222b67e9681f937f513",
        "productId": "65343222b67e9681f937f505",
        "quantity": 5,
        "price": 11000,
        "totalPrice": 55000,
    },
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f526",
        "brandId": "65343222b67e9681f937f514",
        "productId": "65343222b67e9681f937f506",
        "quantity": 3,
        "price": 9000,
        "totalPrice": 27000,
    },
    {
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f527",
        "brandId": "65343222b67e9681f937f517",
        "productId": "65343222b67e9681f937f507",
        "quantity": 2,
        "price": 8000,
        "totalPrice": 16000,
    }   
    ])


    console.log('- Database and all data SYNCED!')


}