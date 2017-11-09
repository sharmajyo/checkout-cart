conn = new Mongo();
db = conn.getDB("checkout-system");

db.createCollection('discount', { id: Number,
                              userId: Number,
                              minimumPurchase: Number,
                              rule: Number} )


db.createCollection('users', { id: Number,
                              email: { type: String, unique: true, lowercase: true },
                              password: String,
                              tokens: Array,
                              profile: {
                                name: { type: String, default: '' },
                                gender: { type: String, default: '' },
                                location: { type: String, default: '' },
                                website: { type: String, default: '' },
                                picture: { type: String, default: '' }
                              },
                              resetPasswordToken: String,
                              resetPasswordExpires: Date,} )


db.createCollection('purchasedItem', {  id: Number,
                                        userId: Number,
                                        adId: Number} )


db.createCollection('ad', { id: Number,
                            type: String,
                            rate: Number} )


db.ads.insert( { id: 1, type: 'classic', rate: 269.99  } )
db.ads.insert( { id: 2, type: 'standout', rate: 322.99   } )
db.ads.insert( { id: 3, type: 'premium', rate: 394.99  } )

signUpInfo = {"password" : "$2a$05$wiXRF2NOsMXuLQbS/ko2NeOmMHtyNhqSkhjB8gFL74AKf0iB1Q5Ji", "profile" : { "picture" : "", "website" : "", "location" : "", "gender" : "", "name" : "" }, "tokens" : [ ], "__v" : 0 }

db.users.insert( Object.assign({ _id: '5a02560619e6d97445be2201', id: 1, email: 'unilever@test.com'}, signUpInfo))
db.sessions.insert({ session : {cookie: {originalMaxAge:null,expires:null,secure:false,httpOnly:true,path:"/"},passport:{user:'5a02560619e6d97445be2201'}}, expires : ISODate("2017-12-22T00:43:12.768Z") })

db.users.insert( Object.assign({ _id: '5a02560619e6d97445be2202', id: 2, email: 'apple@test.com' }, signUpInfo))
db.sessions.insert({ session : {cookie: {originalMaxAge:null,expires:null,secure:false,httpOnly:true,path:"/"},passport:{user:'5a02560619e6d97445be2202'}}, expires : ISODate("2017-12-22T00:43:12.768Z") })

db.users.insert( Object.assign({ _id: '5a02560619e6d97445be2203', id: 3, email: 'nike@test.com'}, signUpInfo))
db.sessions.insert({ session : {cookie: {originalMaxAge:null,expires:null,secure:false,httpOnly:true,path:"/"},passport:{user:'5a02560619e6d97445be2203'}}, expires : ISODate("2017-12-22T00:43:12.768Z") })

db.users.insert( Object.assign({ _id: '5a02560619e6d97445be2204', id: 4, email: 'ford@test.com'}, signUpInfo))
db.sessions.insert({ session : {cookie: {originalMaxAge:null,expires:null,secure:false,httpOnly:true,path:"/"},passport:{user:'5a02560619e6d97445be2204'}}, expires : ISODate("2017-12-22T00:43:12.768Z") })

db.discounts.insert( { id: 1, userId: 1, adId: 1, minimumPurchase: 0, rule: '3 for 2'} )
db.discounts.insert( { id: 2, userId: 2, adId: 2, minimumPurchase: 0, discoutedPrice: 299.99 } )
db.discounts.insert( { id: 3, userId: 3, adId: 3, minimumPurchase: 4, discoutedPrice: 379.99 } )
db.discounts.insert( { id: 4, userId: 4, adId: 1, minimumPurchase: 0, rule: '5 for 4' } )
db.discounts.insert( { id: 5, userId: 4, adId: 2, minimumPurchase: 0, discoutedPrice: 309.99 } )
db.discounts.insert( { id: 6, userId: 4, adId: 3, minimumPurchase: 3, discoutedPrice: 389.99 } )
