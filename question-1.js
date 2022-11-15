function findNthTerm(n) {
    // If number is even
    if (n % 2 == 0) {
        n = Math.floor(n / 2);
        document.write(Math.pow(3, n - 1) + "<p>");
    }
    // If number is odd
    else {
        n = Math.floor(n / 2) + 1;
        document.write(Math.pow(2, n - 1) + "<p>");
    }
}
