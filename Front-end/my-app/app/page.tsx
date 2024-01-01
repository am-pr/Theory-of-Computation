// TODO main page of the app should be designed here
import React from "react";

import MainFrame from "@/components/MainFrame";

export default function Home() {
  const findElementIndex = (array2D: any[][], targetElement: any) => {
    for (let i = 0; i < array2D.length; i++) {
      const row = array2D[i];
      const columnIndex = row.indexOf(targetElement);
      if (columnIndex !== -1) {
        return { rowIndex: i, columnIndex };
      }
    }
    return { rowIndex: -1, columnIndex: -1 }; // اگر المان پیدا نشود
  };

  // مثال استفاده
  const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const targetElement = 7;

  const index = findElementIndex(myArray, targetElement);

  console.log(
    `المان ${targetElement} در ردیف ${index.rowIndex} و ستون ${index.columnIndex} قرار دارد.`
  );

  return (
    <main className="">
      <MainFrame>{`المان ${targetElement} در ردیف ${
        index.rowIndex + 1
      } و ستون ${index.columnIndex + 1} قرار دارد.`}</MainFrame>
    </main>
  );
}
