"use client";
import { useRef } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "../lib/hooks";
import { setProductName } from "@/lib/features/product/productSlice";

const ProductName = () => {
  // Initialize the store with the product information
  const store = useAppStore();
  const name = useAppSelector((state) => state.name);
  const initialized = useRef(false);
  const dispatch = useAppDispatch();

  if (!initialized.current) {
    store.dispatch(setProductName(name));
    initialized.current = true;
  }

  return (
    <input
      value={name}
      onChange={(e) => dispatch(setProductName(e.target.value))}
    />
  );
};
export default ProductName;
