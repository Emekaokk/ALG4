function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances to all vertices as Infinity except for the start vertex
    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
        queue.push(vertex);
    }

    while (queue.length) {
        // Sort the queue based on distances
        queue.sort((a, b) => distances[a] - distances[b]);

        const currentVertex = queue.shift();
        visited[currentVertex] = true;

        // Explore neighbors of the current vertex
        for (let neighbor in graph[currentVertex]) {
            if (!visited[neighbor]) {
                const distanceToNeighbor = distances[currentVertex] + graph[currentVertex][neighbor];
                if (distanceToNeighbor < distances[neighbor]) {
                    distances[neighbor] = distanceToNeighbor;
                }
            }
        }
    }

    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Example usage
console.log(dijkstra(graph, 'A'));
