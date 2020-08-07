     // Membuat Looping untuk Print sebuah segitiga
     //  Cek apakah yang dimasukan berupa angka atau bukan
     // Jika bukan keluarkan output yang diinputkan bukan angka
     function printSegitiga(angka) {
         if (typeof angka !== 'number') {
             console.log('Data harus number');
         }
         let kosong = '';
         for (let i = angka; i >= 0; i--) {
             for (j = 1; j <= i; j++) {
                 kosong += j;
             }
             kosong += '\n';
         }
         return kosong;
     }

     console.log(printSegitiga(6));