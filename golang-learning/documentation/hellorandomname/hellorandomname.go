package main

import (
	"fmt"

	"log"

	"example.com/randomgreetings"
)

func main() {

	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	message, err := randomgreetings.Hello("Hari")

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(message)
}
