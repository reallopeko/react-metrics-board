import React, { useState } from "react";
import { MetricItem } from "./types";
import { MetricsRow } from "./components/MetricsRow";

const INITIAL: MetricItem[] = [
  { id: "rev", label: "MRR", value: 48200.5, updatedAt: "2026-11-01" },
  { id: "churn", label: "Lost MRR", value: "1250.25", updatedAt: "2026-11-01" },
];

export function Dashboard() {
  const [currency, setCurrency] = useState("USD");
  return (
    <main>
      <select value={currency} onChange={e => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <MetricsRow items={INITIAL} currency={currency} />
    </main>
  );
}
