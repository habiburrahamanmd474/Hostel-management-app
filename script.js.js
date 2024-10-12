// Initial student profile data
let student = {
    name: "John Doe",
    roomNo: "102",
    monthlyRent: 200,
    rentDue: 200
};

// Function to simulate rent payment
function payRent() {
    if (student.rentDue > 0) {
        student.rentDue = 0;
        document.getElementById('rent-due').innerText = $${student.rentDue};
        document.getElementById('payment-message').innerText = "Rent payment successful!";
    } else {
        document.getElementById('payment-message').innerText = "No rent due!";
    }
}

// Function to simulate logout
function logout() {
    alert("Logging out...");
    // You can add further logic to handle actual logout
}

// Initial render of student profile
document.getElementById('student-name').innerText = student.name;
document.getElementById('room-no').innerText = student.roomNo;
document.getElementById('monthly-rent').innerText = $${student.monthlyRent};
document.getElementById('rent-due').innerText = $${student.rentDue};
