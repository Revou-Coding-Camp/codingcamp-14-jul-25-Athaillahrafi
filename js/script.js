console.log('javascript is working!');

// Fungsi untuk memanggil welcome pop up

// Fungsi untuk menampilkan welcome pop up
function showWelcomePopUp() {
    let userName = prompt('Please Enter Your Name:');
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}
