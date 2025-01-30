var history = [];

function calculate() {
    var input500 = document.getElementById('input500').value || 0;
    var input200 = document.getElementById('input200').value || 0;
    var input100 = document.getElementById('input100').value || 0;
    var input50 = document.getElementById('input50').value || 0;
    var input20 = document.getElementById('input20').value || 0;
    var input10 = document.getElementById('input10').value || 0;
    var input5 = document.getElementById('input5').value || 0;
    var input2 = document.getElementById('input2').value || 0;
    var input1 = document.getElementById('input1').value || 0;

    var result500 = input500 * 500;
    var result200 = input200 * 200;
    var result100 = input100 * 100;
    var result50 = input50 * 50;
    var result20 = input20 * 20;
    var result10 = input10 * 10;
    var result5 = input5 * 5;
    var result2 = input2 * 2;
    var result1 = input1 * 1;

    document.getElementById('result500').innerText = '₹' + result500;
    document.getElementById('result200').innerText = '₹' + result200;
    document.getElementById('result100').innerText = '₹' + result100;
    document.getElementById('result50').innerText = '₹' + result50;
    document.getElementById('result20').innerText = '₹' + result20;
    document.getElementById('result10').innerText = '₹' + result10;
    document.getElementById('result5').innerText = '₹' + result5;
    document.getElementById('result2').innerText = '₹' + result2;
    document.getElementById('result1').innerText = '₹' + result1;

    var totalAmount = result500 + result200 + result100 + result50 + result20 + result10 + result5 + result2 + result1;
    document.getElementById('totalAmount').innerText = totalAmount;

    // Save history entry
    history.push(totalAmount);
}

function clearFields() {
    // Clear all input fields and results
    document.getElementById('input500').value = '';
    document.getElementById('input200').value = '';
    document.getElementById('input100').value = '';
    document.getElementById('input50').value = '';
    document.getElementById('input20').value = '';
    document.getElementById('input10').value = '';
    document.getElementById('input5').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input1').value = '';

    document.getElementById('result500').innerText = '₹0';
    document.getElementById('result200').innerText = '₹0';
    document.getElementById('result100').innerText = '₹0';
    document.getElementById('result50').innerText = '₹0';}