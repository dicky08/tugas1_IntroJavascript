// // Membuat Rata-Rata Nilai UN

function nilai(mtk, bhsIndo, bhsIngg, ipa) {

    let nilaiUn = [mtk, bhsIndo, bhsIngg, ipa];
    let panjangArray = nilaiUn.length;
    let nilaiAwal = 0;
    for (let i = 0; i < nilaiUn.length; i++) {
        if (typeof nilaiUn[i] === 'undefined') {
            return 'Inputan tidak boleh kosong';
        } else if (typeof nilaiUn[i] !== 'number') {
            return 'Yang diinputkan bukan angka';
        } else {
            nilaiAwal += nilaiUn[i] / panjangArray;
        }
    }
    let result = nilaiAwal;
    if ((result >= 90) && (result <= 100)) {
        return (`Rata-rata = ${result}
Grade = A`);
    } else if ((result >= 80) && result <= 89) {
        return (`Rata-rata = ${result}
Grade = B`);
    } else if ((result >= 70) && result <= 79) {
        return (`Rata-rata = ${result}
Grade = E`);
    } else if ((result >= 60) && result <= 69) {
        return (`Rata-rata = ${result}
Grade = E`);
    } else {
        return (`Rata-rata = ${result}
Grade = E`);
    }
}
let diki = nilai(80, 90, 70, 100);
let budi = nilai(100, 90, 20, 80);
console.log(budi);