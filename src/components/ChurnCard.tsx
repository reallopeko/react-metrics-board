import React from "react";
import { MetricItem } from "../types";

export function ChurnCard({ item, currency }: { item: MetricItem; currency: string }) {
  const num = typeof item.value === "number" ? item.value : parseFloat(String(item.value || 0));
  const formatted = isNaN(num) ? "0.00" : num.toFixed(2);
  const symbol = currency === "EUR" ? "€" : currency === "GBP" ? "£" : "$";
  return <div><h3>{item.label}</h3><p>{symbol}{formatted}</p></div>;
}
