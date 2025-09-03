// you are travelling around the world and currently in London's airport. 
// you are trying to get to Tokyo to meet your friend. However, you're extremely
// short on cash and can only take cheap flights to get there. You are willing to make
// any amount of layovers as long as you get there on the cheap.
// Given a list of cheap flights from a city to a city, return if it's possible to get to Tokyo
// from London by taking any number of flights.
// Note: flights are not bidirectional. If there's a flight from London to Madrid, there may not be one
// from Madrid to London.



function validFlight(flights: object[]): boolean { 
    const hasValidFlight = false

    
    return hasValidFlight
} 

function assert(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

const flights1 = [
    { from: "London", to: "Madrid" },
    { from: "London", to: "Berlin" },
    { from: "Berlin", to: "Vladivostok" },
    { from: "Madrid", to: "London" },
    { from: "Vladivostok", to: "Tokyo" },
] // should return "true": London -> Berlin -> Vladivostok -> Tokyo
assert(true, validFlight(flights1))

const flights2 = [
    { from: "Vladivostok", to: "Tokyo" },
    { from: "London", to: "Berlin" },
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
] // should return "false"
assert(false, validFlight(flights2))

const flights3 = [
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
    { from: "Paris", to: "London" },
    { from: "Berlin", to: "New York" },
    { from: "New York", to: "Paris" },
    { from: "Tokyo", to: "London" },
]
assert(false, validFlight(flights3))

const flights4 = [
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
    { from: "Paris", to: "London" },
    { from: "Paris", to: "New York" },
    { from: "New York", to: "Paris" },
    { from: "Paris", to: "Seoul" },
    { from: "Paris", to: "Beijing" },
    { from: "Paris", to: "Singapore" },
    { from: "Singapore", to: "Tokyo" },
] // should return "true" (London -> Paris -> Singapore -> Tokyo)
assert(true, validFlight(flights4))