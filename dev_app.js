function calculateTotal(amount, taxRate) {
    // Calculate total amount including tax
    const total = amount * (1 + taxRate);
    return total;
}

// Example usage
const amount = 100;
const taxRate = 0.1;
const totalAmount = calculateTotal(amount, taxRate);
console.log('Total Amount:', totalAmount);
