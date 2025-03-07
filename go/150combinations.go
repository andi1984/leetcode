package main

import (
	"fmt"
)

func combine(n int, k int) [][]int {
	var res [][]int
	var dfs func(int, int, []int)
	dfs = func(start, k int, path []int) {
		if k == 0 {
			res = append(res, append([]int(nil), path...))
			return
		}
		for i := start; i <= n; i++ {
			dfs(i+1, k-1, append(path, i))
		}
	}
	dfs(1, k, []int{})
	return res
}

func main() {
	fmt.Println("Hello, playground")
	fmt.Println(combine(10, 2))
}
