const nama = "indra"
let usia =19;

const biodata = document.getElementById('biodata');


function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18 ) {
        //kondisi pertama
        generasi = " generasi remaja";
    } 
    else if (usia > 18 && usia <30) {
 console.log('anjay dah dewasa');
 generasi = " generasi tua"
    }
    else if (usia >= 19) {
        console.log('anjay sama')
        generasi = " generasi sama"
    }
    else if(usia > 2 && usia <10)
        console.log('masih icik')
    else {
        console.log('elah sapa lu')
//kondisi jika tidak terpenuhi
    }

    return biodata.innerHTML = generasi;
}

console.log(nama)
console.log(usia)

generateBiodata();