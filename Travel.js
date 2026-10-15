const employeeId = "EMP101";
const travelType = "Outstation";
const distance = 1000;
const claimedAmount = 12000;
const documentsSubmitted = true;

let rate = 0;
let eligibleAmount = 0;
let claimStatus = "";
let remarks = "";

if (travelType === "Local") {
    rate = 8;
} else if (travelType === "Outstation") {
    rate = 12;
} else {
    claimStatus = "Rejected";
    remarks = "Invalid travel type.";
}

if (claimStatus !== "Rejected") {
    if (distance <= 0 || claimedAmount <= 0) {
        claimStatus = "Rejected";
        remarks = "Invalid distance or claimed amount.";
    } else if (!documentsSubmitted) {
        claimStatus = "Rejected";
        remarks = "Supporting documents not submitted.";
    } else {
        eligibleAmount = Math.min(distance * rate, 10000, claimedAmount);

        if (claimedAmount <= distance * rate && claimedAmount <= 10000) {
            claimStatus = "Approved";
            remarks = "Claim approved according to company policy.";
        } else {
            claimStatus = "Partially Approved";
            remarks = "Claim exceeds the eligible reimbursement amount.";
        }
    }
}

console.log("\n===== EMPLOYEE TRAVEL EXPENSE REIMBURSEMENT =====");
console.log("Employee ID      :", employeeId);
console.log("Travel Type      :", travelType);
console.log("Distance         :", distance + " km");
console.log("Claimed Amount   : ₹" + claimedAmount);
console.log("Eligible Amount  : ₹" + eligibleAmount);
console.log("Claim Status     :", claimStatus);
console.log("Remarks          :", remarks);
console.log("=================================================");