let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling() {
    var id = '';
    var nama = '';
    var tempat = '';
    var tanggal = '';
    var hoby = '';
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            id = input[i][0];
            nama = input[i][1];
            tempat = input[i][2];
            tanggal = input[i][3];
            hoby = input[i][4];   
        }
        console.log(`Nomor ID: ${id} \nNama Lengkap: ${nama} \nTTL: ${tempat}, ${tanggal} \nHobby: ${hoby}\n`)
    }
}

dataHandling();
