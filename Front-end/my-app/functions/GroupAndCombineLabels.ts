import { combineLabels } from "@/functions/CombineLabels";
export function groupAndCombineLabels(
  transitions: { from: string; to: string; label: string }[]
) {
  const groups: {
    [key: string]: { from: string; to: string; label: string }[];
  } = {};

  // Group transitions by 'from' and 'to' values
  for (const transition of transitions) {
    const key = `${transition.from}-${transition.to}`;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(transition);
  }

  // Combine labels for each group
  const combined: { from: string; to: string; label: string }[] = [];
  for (const key in groups) {
    const group = groups[key];
    combined.push(combineLabels(group));
  }

  return combined;
}
