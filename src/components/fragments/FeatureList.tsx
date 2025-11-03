import React from "react";

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-4">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-4">
          <div className="w-6 h-6 bg-green-400 rounded-full mt-1 flex-shrink-0" />
          <span className="text-base text-gray-800">{f}</span>
        </li>
      ))}
    </ul>
  );
}
