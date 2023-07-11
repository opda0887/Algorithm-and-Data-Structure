function Floyd_Warshall_Algorithm(graph) {
  const node_count = graph.length;
  let dist = graph; // distance matrix

  // Floyd-Warshall Algorithm
  for (let k = 0; k < node_count; k++) {
    for (let i = 0; i < node_count; i++) {
      for (let j = 0; j < node_count; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j])
          dist[i][j] = dist[i][k] + dist[k][j]; // find the shortest path combination
      }
    }
  }

  return dist;
}

// 3 nodes directive weight graph (distance matrix)
// 0 -> node cannot walk to itself (when i=j); Infinity -> cannot walk to that node
const graph = [
  [0, 2, 4],
  [2, 0, 1],
  [Infinity, Infinity, 0],
];

const result = Floyd_Warshall_Algorithm(graph);

console.log(result);
/**
 * [
 *  [ 0, 2, 3 ],
 *  [ 2, 0, 1 ],
 *  [ Infinity, Infinity, 0 ]
 * ]
 */
