
// define flight object 

export function isOverloaded(flightAssignments, flightPassengers, capacity) {

    const overloadedGates = []
    let gateTotals = {}

    for (const flightNumber in flightAssignments) {
        const gate = flightAssignments[flightNumber]
        const passengers = flightPassengers[flightNumber]
        gateTotals[gate] = (gateTotals[gate] ?? 0) + passengers
    }
    for (const gate in gateTotals) {
        if (gateTotals[gate] > capacity) {
            overloadedGates.push(gate)
        }
    }        

    return overloadedGates
}


console.log(
    isOverloaded(
        {
            "AA101": "G1",
            "AA102": "G1",
            "BA602": "D4",
            "BA201": "G2",
            "DL303": "G3",
            "AA406": "D4",
            "AA930": "D4",
            "UA777": "H1",
            "UA778": "H1",
            "LH400": "J2"
        },
        {
            "AA101": 85,
            "AA102": 50,
            "BA201": 105,
            "DL303": 6,    
            "BA602": 10, 
            "AA406": 65,
            "AA930": 25,
            "UA777": 61,
            "UA778": 62,
            "LH400": 120
        },
        120
    )
)