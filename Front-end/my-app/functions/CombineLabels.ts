// // input example :
// const input = [
//   { from: "A", to: "B", label: "a" },
//   { from: "A", to: "B", label: "b" },
//   { from: "A", to: "B", label: "c" },
//   { from: "A", to: "B", label: "d" },
//   { from: "A", to: "B", label: "e" },
// ];

// // output example :
// const output = { from: "A", to: "B", label: "a,b,c,d,e" };

export function combineLabels(
  transitions: { from: string; to: string; label: string }[]
) {
  const labels = transitions.map((t) => t.label);
  const combinedLabels = labels.join(",");
  return {
    from: transitions[0].from,
    to: transitions[0].to,
    label: combinedLabels,
  };
}

// // input
// const _input = [
//   { from: "A", to: "C", label: "a" },
//   { from: "B", to: "C", label: "b" },
//   { from: "A", to: "C", label: "b" },
//   { from: "B", to: "C", label: "b" },
//   { from: "B", to: "C", label: "a" },
// ];

// // output
// const _output = [{ from: "B", to: "C", label: "a,b" },{from: 'A', to: 'C', label: 'a,b'}];
