//@ts-nocheck
type Transition = {
    from: string;
    to: string;
    label: string;
}


export function combineLabels(array: Transition[]) {
    const result = [];
  const groupedByFromTo= {}

  array.forEach(item => {
    const key = `${item.from}-${item.to}`;

    if (!groupedByFromTo[key]) {
      groupedByFromTo[key] = { ...item, label: [item.label] };
    } else {
      groupedByFromTo[key].label.push(item.label);
    }
  });

  for (const key in groupedByFromTo) {
    const mergedItem = groupedByFromTo[key];
    mergedItem.label = mergedItem.label.join(',');
    result.push(mergedItem);
  }

  return result;
  }
  