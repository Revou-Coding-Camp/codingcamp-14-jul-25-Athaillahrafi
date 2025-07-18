console.log('javascript is working!');

// Fungsi untuk memanggil welcome pop up
showWelcomePopUp();
// Fungsi untuk menampilkan welcome pop up
function showWelcomePopUp() {
    let userName = prompt('Please Enter Your Name:');
    // Jika tidak diisi
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

// Fungsi untuk validasi isi pesan
function validateForm() {
    const nameInput = document.getElementById('message');
    console.log(nameInput.value);

    // Jika isi pesan kosong
    if (nameInput.value === '') {
        alert('Its okay, anything is good!');
    } else {
        document.getElementById('message-output').innerHTML = 'Thank You for your message!'
    }
}