document.addEventListener('DOMContentLoaded', function() {
    // Validasi Formulir Transaksi
    const transaksiForm = document.getElementById('transaksiForm');
    if (transaksiForm) {
        transaksiForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit secara default

            let isValid = true;

            // Validasi Nama Transaksi
            const namaTransaksi = document.getElementById('namaTransaksi');
            const errorNamaTransaksi = document.getElementById('errorNamaTransaksi');
            if (namaTransaksi.value.trim() === '') {
                errorNamaTransaksi.style.display = 'block';
                isValid = false;
            } else {
                errorNamaTransaksi.style.display = 'none';
            }

            // Validasi Jumlah
            const jumlah = document.getElementById('jumlah');
            const errorJumlah = document.getElementById('errorJumlah');
            if (jumlah.value.trim() === '' || parseInt(jumlah.value) < 1) {
                errorJumlah.style.display = 'block';
                isValid = false;
            } else {
                errorJumlah.style.display = 'none';
            }

            // Validasi Kategori
            const kategori = document.getElementById('kategori');
            const errorKategori = document.getElementById('errorKategori');
            if (kategori.value === '') {
                errorKategori.style.display = 'block';
                isValid = false;
            } else {
                errorKategori.style.display = 'none';
            }

            if (isValid) {
                alert('Formulir transaksi berhasil divalidasi dan siap dikirim!');
                // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
                // Misalnya: transaksiForm.submit();
                // Atau menggunakan fetch API untuk mengirim data secara AJAX
            } else {
                alert('Harap lengkapi semua kolom yang wajib diisi.');
            }
        });
    }

    // Validasi Formulir Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit secara default

            let isValid = true;

            // Validasi Username
            const username = document.getElementById('username');
            const errorUsername = document.getElementById('errorUsername');
            if (username.value.trim() === '') {
                errorUsername.style.display = 'block';
                isValid = false;
            } else {
                errorUsername.style.display = 'none';
            }

            // Validasi Password
            const password = document.getElementById('password');
            const errorPassword = document.getElementById('errorPassword');
            if (password.value.trim() === '') {
                errorPassword.style.display = 'block';
                isValid = false;
            } else {
                errorPassword.style.display = 'none';
            }

            if (isValid) {
                alert('Login berhasil! (Ini hanya validasi sisi klien)');
                // Di sini Anda akan mengirim data login ke server untuk otentikasi
                // loginForm.submit();
            } else {
                alert('Username dan Password harus diisi.');
            }
        });
    }
});