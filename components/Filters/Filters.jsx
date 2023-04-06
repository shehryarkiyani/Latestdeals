import React from 'react'
import CategoriesFilter from './CategoriesFilter'
import PriceFilter from './PriceFilter'

const Filters = () => {
  return (
    <div className="min-w-fit hidden lg:block py-3">
        <CategoriesFilter />
        <PriceFilter />
    </div>
  )
}

export default Filters