//this is my attempt using command line arguements

package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) > 2 {
		fmt.Println("You have entered too many arguments. It is only necessary to use one.")
	}
	num, err := strconv.Atoi(os.Args[1]) //this converts first argument from string to integer
	if err != nil {
		fmt.Println(err)
	}
	var x = fib(num)
	fmt.Println(x)
}

func fib(number int) int {
	if number == 0 || number == 1 {
		return number
	}

	return fib(number-2) + fib(number-1)
}
