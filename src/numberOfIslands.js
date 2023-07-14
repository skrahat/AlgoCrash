/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  var count = 0;

  //grid reader
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1') {
        count += 1;
        BFS(grid, i, j);
      }
    }
  }
  return count;
};

function BFS(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] == '0'
  )
    return;

  grid[i][j] = '0';
  BFS(grid, i + 1, j);
  BFS(grid, i - 1, j);
  BFS(grid, i, j - 1);
  BFS(grid, i, j + 1);
}
