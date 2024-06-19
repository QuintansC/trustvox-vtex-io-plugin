import React, { useContext, useEffect } from 'react'
import { ProductSummaryContext } from 'vtex.product-summary'
import { injectWidgetScripts } from "./services/ScriptHandler";

import styles from './styles.css'

const RatingInline = () => {
  const { product } = useContext(ProductSummaryContext)

  if (!product) {
    return null
  }

  useEffect(() => {
    injectWidgetScripts();
  }, [])

  return (
    <div className={styles.ratingInline} data-trustvox-product-code={product.productId} />
  )
}

export default RatingInline
