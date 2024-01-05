"use client";

import { useEffect, createRef } from "react";
import * as vis from "vis-network/standalone";
//@ts-ignore
const MachineDrawer = ({ transitions, states, initialState, finalStates }) => {
  const networkRef = createRef();

  useEffect(() => {
    const nodes = new vis.DataSet(states);
    // @ts-ignore
    const edges = new vis.DataSet(transitions);

    const container = networkRef.current;
    const data = { nodes, edges };
    const options = {
      nodes: {
        shadow: {
          enabled: true,
          size: 10,
        },
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        },
        shape: "circle",
        size: 300,
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
    };

    // @ts-ignore
    const network = new vis.Network(container, data, options);
    // @ts-ignore
    nodes.update([{ id: "A", color: "#56914a" }]);

    return () => {
      if (network) {
        network.destroy();
      }
    };
  }, []);

  return (
    <div
      // @ts-ignore
      ref={networkRef}
      style={{ height: "400px" }}
      className='border-2 border-darkColor bg-gray-100 rounded-xl'
    ></div>
  );
};

export default MachineDrawer;
