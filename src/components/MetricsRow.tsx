import React from "react";
import { MetricItem } from "../types";
import { RevenueCard } from "./RevenueCard";
import { ChurnCard } from "./ChurnCard";

export function MetricsRow({ items, currency }: { items: MetricItem[]; currency: string }) {
  return (
    <section>
      {items[0] && <RevenueCard item={items[0]} currency={currency} />}
      {items[1] && <ChurnCard item={items[1]} currency={currency} />}
    </section>
  );
}
