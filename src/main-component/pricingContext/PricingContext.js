import React, { createContext, useContext, useState } from 'react';

const PricingContext = createContext();

export const usePricingContext = () => useContext(PricingContext);

export const PricingProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isExtraFastDelivery, setIsExtraFastDelivery] = useState(false);
  const [gigQuantity, setGigQuantity] = useState(1);

  return (
    <PricingContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        isExtraFastDelivery,
        setIsExtraFastDelivery,
        gigQuantity,
        setGigQuantity,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};
