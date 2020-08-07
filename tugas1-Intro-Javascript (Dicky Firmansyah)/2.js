// // Membuat Rata-Rata Nilai UN

function nilai(mtk, bhsIndo, bhsIngg, ipa) {
    return [
        mtk,
        bhsIndo,
        bhsIngg,
        ipa
    ]
}
let nilaiUN = nilai(100, 90, 50, 40);
let nilaiAwal = 0;
let pjgArray = nilaiUN.length;
for (let i = 0; i < nilaiUN.length; i++) {
    if (nilaiUN[i] === undefined) {
        console.log('Tidak boleh ada yang kosong');
        return false;
    }
    if (typeof nilaiUN[i] !== 'number') {

        console.log('Yang diinputkan bukan number');
        return false;
    } else {
        nilaiAwal += nilaiUN[i] / pjgArray;
    }
}
console.log(`Rata-rata = ${nilaiAwal}`);
let result = nilaiAwal;
if ((result >= 90) && (result <= 100)) {
    console.log('Grade = A');
} else if ((result >= 80) && result <= 89) {
    console.log('Grade = B');
} else if ((result >= 70) && result <= 79) {
    console.log('Grade = C');
} else if ((result >= 60) && result <= 69) {
    console.log('Grade = D');
} else {
    console.log('Grade = E');
}