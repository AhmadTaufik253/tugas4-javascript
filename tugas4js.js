function tambah() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);

  var total;
  if (isNaN(a1 && a2)) {
    total = "Maaf angka belum terisi";
  } else {
    total = a1 + a2;
  }
  frm.hasil.value = total;
}

function kurang() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);

  var total;
  if (isNaN(a1 && a2)) {
    total = "Maaf angka belum terisi";
  } else {
    total = a1 - a2;
  }
  frm.hasil.value = total;
}

// perkalian
function kali() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);

  var total;
  if (isNaN(a1 && a2)) {
    total = "Maaf angka belum terisi";
  } else {
    total = a1 * a2;
  }
  frm.hasil.value = total;
}

// pembagian
function bagi() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);

  var total;
  if (isNaN(a1 && a2)) {
    total = "Maaf angka belum terisi";
  } else {
    total = a1 / a2;
  }
  frm.hasil.value = total;
}

// function untuk hapus var a1 dan a2
function hapus() {
  var frm = document.getElementById("kalkulator");
  frm.angka.value = "";
  frm.angka2.value = "";
  frm.hasil.value = "";
}

/* tugas 4
  1. lengkapi form dari latihan 15 menggunakan css dan table
  2. perbagus tampilannya
  3. lengkapi perhitungannya dengan pembagi dan perkalian
  4. jika form nya kosong dan user klik button, maka tampilkan " Maaf angka belum terisi"
  
  */
