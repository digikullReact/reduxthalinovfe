package main

import (
	"fmt"
	"syscall/js"
)

var c chan bool

func init() {
	fmt.Println("HEllo World From Web Assembly !")
	c = make(chan bool)
}

func GetData(jsv js.Value, inputs []js.Value) {

}

func main() {
	js.Global().Set("GetData", js.FuncOf(GetData))
	<-c

}
