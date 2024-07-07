module.exports = {
    function: (cutOff, engagementScore) => {
        try {
            cutOff = parseFloat(cutOff);
            engagementScore = parseFloat(engagementScore);
            // check if input is a number. If not, return error message
            if (!( cutOff && engagementScore )) return("Error: Invalid Input. Please enter a number.");
            // logic to determine if engagement score is risky or not
            if (engagementScore >= cutOff) return "Not Risky";
            else return "Risky"
        } catch (error) {
            return "Error: " + error.message;
        }
    }
}