var url = "https://www.google.com/";
    var qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(url) + "&size=200x200";
    var imagenQR = document.getElementById("codigoQR");
    imagenQR.src = qrApiUrl;