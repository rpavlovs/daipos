const PATH = {
  // Tabbed
  TABS: '/tabs',
  INVENTORY: '/tabs/',
  SALES_REPORT: '/tabs/sales-report',
  ADD: '/tabs/add',
  EDIT: '/tabs/edit',
  SIGNIN: '/tabs/signin',
  SIGNUP: '/tabs/signup',
  ORDERS: '/tabs/orders',

  // Full-screen
  HOME: '/home',
}

const PATH_TITLE = {
  [PATH.INVENTORY]: 'Inventory',
  [PATH.SALES_REPORT]: 'Sales Report',
  [PATH.ADD]: 'Add',
  [PATH.EDIT]: 'Edit',
  [PATH.SIGNIN]: 'Sign In',
  [PATH.SIGNUP]: 'Sign Up',
  [PATH.ORDERS]: 'Orders',
}

export default {
  PATH,
  PATH_TITLE,
}
