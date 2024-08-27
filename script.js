let codigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
const textArea = document.querySelector(".areaTexto");
const mensaje = document.querySelector(".mensaje");

function validarTexto (textoArea) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    if(textoArea.match(caracteres)) {
        alert("No se permiten caracteres especiales");
        return true; 
    }
    return false;
}

function encriptar(textArea) {
    if (!validarTexto(textArea)) {
        let cadenaEncriptada = textArea.toLowerCase();
        for (let i = 0; i < codigo.length; i++) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(codigo[i][0], codigo[i][1]);
            }
        return cadenaEncriptada;
    }
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
}

function desencriptar(cadenaDesencriptada){
    for (let i = 0; i < codigo.length; i++) {
        cadenaDesencriptada = cadenaDesencriptada.replaceAll(codigo[i][1], codigo[i][0]);
    }
    return cadenaDesencriptada;
}

function copiar() {
    //let texto = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}


function btnCopiar() {
    let texto = document.querySelector(".mensaje");
    navigator.clipboard.writeText(texto.value)
        .then(()=> {
            alert("Texto copiado al portapapeles!");
        })
        .catch(err=>{
            console.error("Error de copiado", err);
        });
}