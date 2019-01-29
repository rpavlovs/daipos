const getItemsState = store => store.firestore.data.items
const getAuthState = store => store.firebase.auth
const getStores = store => store.firestore.data.stores
const getStoresUsers = store => store.firestore.data.storesUsers
const getOrders = store => store.firestore.ordered.orders
const getOrderItems = (store, { orderId }) =>
  store.firestore.data.orders[orderId].items
const getItem = (store, { itemId }) => store.firestore.data.items[itemId]
const getItemPrice = (store, { itemId }) =>
  store.firestore.data.items[itemId].price
const getXdaiWalletBalance = store => store.wallet.xdaiBalance
const getDaiWalletBalance = store => store.wallet.daiBalance

export default {
  getItemsState,
  getAuthState,
  getOrders,
  getOrderItems,
  getItem,
  getItemPrice,
  getStores,
  getStoresUsers,
  getDaiWalletBalance,
  getXdaiWalletBalance,
}
