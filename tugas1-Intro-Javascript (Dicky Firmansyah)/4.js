let data = {
    id: 1,
    nama: "Leanne Graham",
    username: "Bret",
    email: "sincere@april.biz",

    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}
// Edit Menggunakan Spread Operator
const dataDiri = {
    ...data,
    hoby: ['swimming', 'singing']
};
dataDiri.nama = "Dicky Firmansyah";
dataDiri.email = "dickyf147@gmail.com";
dataDiri.hoby = ['olahraga', 'bermain musik', 'membaca'];
console.log(dataDiri);

// Ambil data dengan Destructuring;
const {
    address
} = data;
const {
    street,
    suite,
    city,
    zipcode
} = address;

console.log(street);
console.log(city);