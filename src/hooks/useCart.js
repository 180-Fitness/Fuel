import { useCallback, useMemo, useReducer } from "react";

const initialCartState = { lines: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_LINE": {
      const { checkoutProductName, unitPrice } = action.payload;
      const existingIndex = state.lines.findIndex(
        (line) => line.product === checkoutProductName
      );
      if (existingIndex >= 0) {
        const next = [...state.lines];
        const line = next[existingIndex];
        next[existingIndex] = {
          ...line,
          quantity: Math.min(99, line.quantity + 1),
        };
        return { lines: next };
      }
      return {
        lines: [
          ...state.lines,
          { product: checkoutProductName, unitPrice, quantity: 1 },
        ],
      };
    }
    case "REMOVE_INDEX": {
      const next = [...state.lines];
      next.splice(action.payload.index, 1);
      return { lines: next };
    }
    case "SET_QUANTITY": {
      const { index, quantity } = action.payload;
      let qty = parseInt(quantity, 10);
      if (Number.isNaN(qty) || qty < 1) qty = 1;
      if (qty > 99) qty = 99;
      const next = [...state.lines];
      if (!next[index]) return state;
      next[index] = { ...next[index], quantity: qty };
      return { lines: next };
    }
    case "CLEAR":
      return initialCartState;
    default:
      return state;
  }
}

export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = useCallback((checkoutProductName, unitPrice) => {
    dispatch({
      type: "ADD_LINE",
      payload: { checkoutProductName, unitPrice },
    });
  }, []);

  const removeLineAtIndex = useCallback((index) => {
    dispatch({ type: "REMOVE_INDEX", payload: { index } });
  }, []);

  const setLineQuantity = useCallback((index, quantity) => {
    dispatch({ type: "SET_QUANTITY", payload: { index, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const cartUnitCount = useMemo(
    () => state.lines.reduce((sum, line) => sum + line.quantity, 0),
    [state.lines]
  );

  const grandTotal = useMemo(
    () =>
      state.lines.reduce(
        (sum, line) => sum + line.unitPrice * line.quantity,
        0
      ),
    [state.lines]
  );

  return {
    cartLines: state.lines,
    addToCart,
    removeLineAtIndex,
    setLineQuantity,
    clearCart,
    cartUnitCount,
    grandTotal,
  };
}
