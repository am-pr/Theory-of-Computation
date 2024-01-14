// @ts-nocheck
"use client";
import { useEffect, createRef } from "react";
import { groupAndCombineLabels } from "@/functions/GroupAndCombineLabels";
import * as vis from "vis-network/standalone";

type MachineDrawerProps = {
  className?: string;
  states: { id: string; label: string }[];
  finalStates: string[];
  initialState: [string];
  transitions: { from: string; to: string; label: string }[];
};

const MachineDrawer = ({
  className,
  transitions,
  states,
  initialState,
  finalStates,
}: MachineDrawerProps) => {
  const networkRef = createRef();

  const optimizedTRansitions = groupAndCombineLabels(transitions);

  useEffect(() => {
    //TODO if there are no transitions, redirect to Main page
    if (optimizedTRansitions.length === 0) {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    const nodes = new vis.DataSet(states);
    const edges = new vis.DataSet(optimizedTRansitions);

    const container = networkRef.current;
    const data = { nodes, edges };
    const options = {
      nodes: {
        shadow: {
          enabled: true,
          size: 10,
        },
        margin: {
          top: 11,
          right: 11,
          bottom: 11,
          left: 11,
        },
        shape: "circle",
        color: {
          border: "black",
          background: "white",
        },
        font: {
          size: 20,
          color: "black",
          bold: {
            color: "black",
          },
        },
      },
      edges: {
        font: {
          color: "black",
          size: 14,
          align: "top",
        },
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5,
          },
        },
      },
      interaction: {
        selectConnectedEdges: false,
      },
      physics: {
        barnesHut: {
          centralGravity: 0.1,
          springConstant: 0.01,
        },
      },
    };

    const network = new vis.Network(container, data, options);
    nodes.update([{ id: initialState[0], color: "#56914a" }]);
    finalStates.map((state) =>
      nodes.update([
        {
          id: state,
          borderWidthSelected: 2,
          color: {
            border: "black",
            highlight: { background: "white", border: "black", borderWidth: 1 },
          },
          borderWidth: 5,
        },
      ])
    );
    return () => {
      if (network) {
        network.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={networkRef}
      className={`${className} border-2 h-96 border-darkColor bg-gray-100 rounded-xl`}
    ></div>
  );
};

export default MachineDrawer;
