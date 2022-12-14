function imgpicker() {
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "joon") {
        images.src = "joon.jpg";
        images.width = 300;
        images.alt = "Ini adalah Kim Namjoon";
        alert("Ini adalah Kim Namjoon");
    } else if (picker == "jin") {
        images.src = "jin.jpg";
        images.width = 300;
        images.alt = "Ini adalah Kim Seokjin";
        alert("Ini adalah Kim Seokjin");
    } else if (picker == "unggi") {
        images.src = "unggi.jpg";
        images.width = 300;
        images.alt = "Ini adalah Min Yonggi";
        alert("Ini adalah Min Yonggi");
    } else if (picker == "hope") {
        images.src = "hope.jpg";
        images.width = 300;
        images.alt = "Ini adalah Jung Hoseok";
        alert("Ini adalah Jung hoseok");
    } else if (picker == "jimin") {
        images.src = "jimin.jpg";
        images.width = 300;
        images.alt = "Ini adalah Park Jimin";
        alert("Ini adalah Park Jimin");
    } else if (picker == "V") {
        images.src = "tae.jpg";
        images.width = 300;
        images.alt = "Ini adalah Kim Taehyung";
        alert("Ini adalah Kim Taehyung");
    } else if (picker == "maknae") {
        images.src = "kookie.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Jeon Jungkook";
        alert("Ini adalah gambar Jeon Jungkook");
    } else {
        alert("Gagal");
    }
}