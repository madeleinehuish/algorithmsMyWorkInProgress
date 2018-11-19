// picked this code up from https://gist.github.com/shockalotti/d29021387e8bb3875d28

package main

import (
	"fmt"
	"math/big"
	"time"
)

func fib(n int) *big.Int {
	fn := make(map[int]*big.Int)

	for i := 0; i <= n; i++ {
		var f = big.NewInt(0)
		if i <= 2 {
			f.SetUint64(1)
		} else {
			f = f.Add(fn[i-1], fn[i-2])
		}
		fn[i] = f

	}
	return fn[n]
}

func fib2(n int) *big.Int {
	// Initialize two big ints with the first two numbers in the sequence.
	a := big.NewInt(0)
	b := big.NewInt(1)

	// Loop while a is smaller than 1e100.
	for i := 0; i <= n; i++ {
		a.Add(a, b)
		a, b = b, a
	}
	return a
}

func main() {
	start1 := time.Now()
	for i := 0; i <= 10000; i++ {
		fmt.Printf("Fin(%d) is %d \n", i, fib(i))
	}
	elapsed1 := time.Since(start1)
	start2 := time.Now()
	for i := 0; i <= 10000; i++ {
		fmt.Printf("Fin(%d) is %d \n", i, fib2(i))
	}
	elapsed2 := time.Since(start2)
	fmt.Printf("time eclibaced1 is %s \n", elapsed1)
	fmt.Printf("time eclibaced2 is %s \n", elapsed2)

}
