/**
 * ? Want to parctice the 4 nodes DWG(directive weight graph)
 */

function Floyd_Warshall_Algorithm(graph) {
  const node_count = graph.length;
  let dist = graph;

  for (let k = 0; k < node_count; k++) {
    for (let i = 0; i < node_count; i++) {
      for (let j = 0; j < node_count; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j])
          dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }

  return dist;
}

const graph = [
  [0, 1, 2, 3],
  [Infinity, 0, 5, 1],
  [5, 1, 0, Infinity],
  [1, 2, 6, 0],
];

let result = Floyd_Warshall_Algorithm(graph);

console.log(result);
