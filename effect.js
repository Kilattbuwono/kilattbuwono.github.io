document.addEventListener('DOMContentLoaded', function() {
    const transaksiForm = document.getElementById('transaksiForm');
    if (transaksiForm) {
        transaksiForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;

            const namaTransaksi = document.getElementById('namaTransaksi');
            const errorNamaTransaksi = document.getElementById('errorNamaTransaksi');
            if (namaTransaksi.value.trim() === '') {
                errorNamaTransaksi.style.display = 'block';
                isValid = false;
            } else {
                errorNamaTransaksi.style.display = 'none';
            }

            const jumlah = document.getElementById('jumlah');
            const errorJumlah = document.getElementById('error_Jumlah');
            if (jumlah.value.trim() === '' || parseInt(jumlah.value) < 1) {
                errorJumlah.style.display = 'block';
                isValid = false;
            } else {
                errorJumlah.style.display = 'none';
            }

            const kategori = document.getElementById('kategori');
            const errorKategori = document.getElementById('errorKategori');
            if (kategori.value === '') {
                errorKategori.style.display = 'block';
                isValid = false;
                 errorMessage += 'Kategorinya Pilih Dulu! <br>'
            } else {
                errorKategori.style.display = 'none';
            }

            if (isValid) {
                alert('Formulir Udah Masuk');
            } else {
                alert('Isi Dulu Semuanya');
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;

            const username = document.getElementById('username');
            const errorUsername = document.getElementById('errorUsername');
            if (username.value.trim() === '') {
                errorUsername.style.display = 'block';
                isValid = false;
            } else {
                errorUsername.style.display = 'none';
            }

            const password = document.getElementById('password');
            const errorPassword = document.getElementById('errorPassword');
            if (password.value.trim() === '') {
                errorPassword.style.display = 'block';
                isValid = false;
            } else {
                errorPassword.style.display = 'none';
            }

            if (isValid) {
                alert('Dah Berhasil Nih');
            } else {
                alert('Username atau Password isi dulu!');
            }
        });
    }
});
