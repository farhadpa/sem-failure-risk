const risk_assessment = require('../risk_assessment');

test('risk_assessment', () => {
    expect(risk_assessment.function(100, 90)).toBe("Risky");
    expect(risk_assessment.function(90, 90)).toBe("Not Risky");
    expect(risk_assessment.function(90, 100)).toBe("Not Risky");
    expect(risk_assessment.function("a", 100)).toBe("Error: Invalid Input. Please enter a number.");
    expect(risk_assessment.function(100, "a")).toBe("Error: Invalid Input. Please enter a number.");
    expect(risk_assessment.function("a", "a")).toBe("Error: Invalid Input. Please enter a number.");
    expect(risk_assessment.function(50)).toBe("Error: Invalid Input. Please enter a number.");
    expect(risk_assessment.function()).toBe("Error: Invalid Input. Please enter a number.");
    expect(risk_assessment.function(null, 50)).toBe("Error: Invalid Input. Please enter a number.");
    });