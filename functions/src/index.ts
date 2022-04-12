import './alias'

// ------------
// firestore

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'firestoreDeleteAllCarts') {
  exports.firestoreDeleteAllCarts = require('./triggers/firestore/delete-all-carts')
}

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'firestoreCreateCustomerId') {
  exports.firestoreCreateCustomerId = require('./triggers/firestore/create-customer-id')
}

// review

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'firestoreCreateCountProductReview') {
  exports.firestoreCreateCountProductReview = require('./triggers/firestore/count-product-review/create')
}

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'firestoreUpdateCountProductReview') {
  exports.firestoreUpdateCountProductReview = require('./triggers/firestore/count-product-review/update')
}

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'firestoreDeleteCountProductReview') {
  exports.firestoreDeleteCountProductReview = require('./triggers/firestore/count-product-review/delete')
}

// ------------
// pubsub

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'pubsubOrderCheckPayment') {
  exports.pubsubOrderCheckPayment = require('./triggers/pubsub/order-check-payment')
}

// ------------
// https

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'httpsServerAdmin') {
  exports.httpsServerAdmin = require('./triggers/https/server-admin')
}

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'httpsServerLiff') {
  exports.httpsServerLiff = require('./triggers/https/server-liff')
}

// ------------
// storage

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'storageCreate') {
  exports.storageCreate = require('./triggers/storage/create')
}
