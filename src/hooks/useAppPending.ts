import { useEffect, useState } from 'react';
import { useAppSelector } from './redux';

const useAppPending = () => {
  const isProductPending = useAppSelector((state) => state.product.isPending);
  const isOrderPending = useAppSelector((state) => state.order.isPending);

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const pendingStatus = isProductPending || isOrderPending;
    setIsPending(pendingStatus);
  }, [isProductPending, isOrderPending]);
  return isPending;
};

export default useAppPending;
