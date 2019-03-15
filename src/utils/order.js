// @flow

import type { IdType, OrderType, OrderItemType } from 'constants/firebase'
import type { OrderStatusType } from 'constants/order'

import ORDER from 'constants/order'

function getTotalPrice(order?: OrderType): number {
  if (!order || !order.items) {
    return 0
  }

  return order.items.reduce(
    (totalPrice: number, item: OrderItemType) =>
      totalPrice + item.quantity * item.price,
    0
  )
}

function getItemCount(order?: OrderType): number {
  if (!order || !order.items) {
    return 0
  }

  return order.items.reduce(
    (totalCount: number, item: OrderItemType) => totalCount + item.quantity,
    0
  )
}

function getItemIds(order?: OrderType): Array<IdType> {
  if (!order || !order.items) {
    return []
  }

  return order.items.map(item => item.id)
}

function isWaitingForTransaction(order: OrderType): boolean {
  return !isConfirming(order) && !isConfirmed(order) && !isFailed(order)
}

function isConfirming(order: OrderType): boolean {
  return !!order.txHash && !isConfirmed(order) && !isFailed(order)
}

function isConfirmed(order: OrderType): boolean {
  return order.txConfirmed === '0x1'
}

function isFailed(order: OrderType): boolean {
  return order.txConfirmed === '0x0'
}

function txStatus(order: OrderType): OrderStatusType {
  if (isWaitingForTransaction(order)) return ORDER.STATUS.WAITING_FOR_SCAN
  if (isConfirming(order)) return ORDER.STATUS.CONFIRMING
  if (isConfirmed(order)) return ORDER.STATUS.CONFIRMED
  if (isFailed(order)) return ORDER.STATUS.FAILED
  return 'undefined'
}

export default {
  getTotalPrice,
  getItemCount,
  getItemIds,

  txStatus,
}
