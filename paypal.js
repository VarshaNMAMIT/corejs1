function calculateProcessingFee(paymentMethod) {
    let processingFee = 200;

    switch(paymentMethod) {
        case "credit":
            processingFee *= 0.02;
            break;
        case "debit":
            processingFee *= 0.015;
            break;
        case "paypal":
            processingFee *= 0.03; 
            break;
        default:
            processingFee = "Invalid payment method";
            break;
    }

    return processingFee;
}

console.log("Processing fee for credit: " + calculateProcessingFee("credit"));
console.log("Processing fee for debit: " + calculateProcessingFee("debit"));
console.log("Processing fee for paypal: " + calculateProcessingFee("paypal"));
console.log("Processing fee for unknown method: " + calculateProcessingFee("unknown"));

