// you are given a list of grades that students receieved on various assignments.
// students turn in assignments and can recieve up to `maxPoints` points.
// students pass the class if they get more than 70% of the points across all the 
// assignments they did. produce a list of passing students.

type GradeData = {
    maxPoints: number
    grades: Record<string, number>
}

type AssignmentData = Record<string, GradeData>

function findPassingStudents(assignments: AssignmentData): string[] {
    let maxPoints = 0
    const studentPoints = new Map<string, number>()
    for (const assignmentName in assignments) {
        const gradeData: GradeData = assignments[assignmentName]
        maxPoints += gradeData.maxPoints
        for (const studentName in gradeData.grades) {
            const studentGrade = gradeData.grades[studentName]
            studentPoints.set(studentName, (studentPoints.get(studentName) ?? 0) + studentGrade)
        }
    }

    const passing: string[] = []
    studentPoints.forEach((points, studentName) => {
        if (points / maxPoints > 0.7) {
            passing.push(studentName)
        }
    })

    // OR return [...studentPoints.keys()].filter(studentName => studentPoints.get(studentName)! / maxPoints > 0.7)

    return passing


    // define data structure 
    // iterate through assignments O(N)
    // need way to add one student's score to a running total
    // as well as add that assignment's max points to a per-student running total

    // check assignment 1, add 45 points to steve's scored points, add 50 to steve's max points
    // add 35 to john's scored, 50 to john's max

}

const assignments = {
    "proj 1": {
        maxPoints: 50,
        grades: { steve: 45, john: 35, carly: 50, maya: 25, li: 40, priya: 41, amir: 10, zoe: 50, nick: 0, ana: 42 }
    },
    "quiz 1": {
        maxPoints: 10,
        grades: { steve: 9, john: 7, carly: 9, maya: 6, li: 10, priya: 8, amir: 5, zoe: 10, nick: 8 }
    },
    "lab 1": {
        maxPoints: 20,
        grades: { steve: 18, john: 15, carly: 14, maya: 0, li: 20, priya: 19, amir: 12, zoe: 19, ana: 17 }
    },
    "proj 2": {
        maxPoints: 40,
        grades: { steve: 28, john: 30, carly: 36, maya: 32, li: 24, priya: 38, amir: 8, zoe: 40, nick: 34, ana: 0 }
    },
    "midterm": {
        maxPoints: 100,
        grades: { steve: 72, john: 69, carly: 88, maya: 70, li: 96, priya: 83, amir: 55, zoe: 94, nick: 61, ana: 77 }
    },
    "quiz 2": {
        maxPoints: 10,
        grades: { steve: 7, john: 8, carly: 10, li: 10, priya: 9, amir: 2, zoe: 10, nick: 7 }
    },
    "lab 2": {
        maxPoints: 25,
        grades: { steve: 22, john: 18, carly: 25, maya: 18, li: 25, priya: 23, amir: 16, zoe: 25, nick: 20, ana: 21 }
    },
    "proj 3": {
        maxPoints: 60,
        grades: { steve: 42, john: 54, carly: 48, maya: 30, li: 60, priya: 55, amir: 36, zoe: 60, nick: 24 }
    },
    "quiz 3": {
        maxPoints: 10,
        grades: { steve: 8, john: 7, carly: 7, maya: 7, li: 10, priya: 8, amir: 6, zoe: 10, ana: 10 }
    },
    "lab 3": {
        maxPoints: 30,
        grades: { steve: 27, john: 18, carly: 21, maya: 24, li: 30, priya: 28, amir: 0, zoe: 30, nick: 15, ana: 27 }
    },
    "final project": {
        maxPoints: 80,
        grades: { steve: 64, john: 56, carly: 80, maya: 48, li: 72, priya: 76, amir: 40, zoe: 80, nick: 52, ana: 63 }
    }
};

const expected = [ "steve", "john", "carly", "li", "priya", "zoe" ]

// Add debug output
const result = findPassingStudents(assignments);
console.log("Result:", result);
console.log("Expected:", expected);
console.log("Match:", JSON.stringify(result) === JSON.stringify(expected));