function encriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputTexto").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputTexto").value = textoDesencriptado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputTexto");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}