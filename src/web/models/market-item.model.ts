import { MarketCategoryType } from '../enums/market-category-type.enum'
import { listing } from './listing.model'

export type MarketItem = {
    id: number
    name: string
    type: MarketCategoryType
    averagePrice: string
    listings: listing[]
}
