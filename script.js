var qrtext = document.getElementById("text");
var qrbtn = document.getElementById("btn");
var qrimage = document.getElementById("image");
var errorMessage = document.getElementById("error");
var downloadLink = document.getElementById("download");
var outputContainer = document.getElementById("output");

qrbtn.addEventListener("click", function () {
    // Check if the input is not empty
    if (qrtext.value.trim().length > 0) {
        // Hide error message
        errorMessage.style.display = 'none';
        qrtext.classList.remove('error'); // Remove the red border

        // Show the output container (image + download link)
        outputContainer.style.display = 'block';

        // Generate the QR code
        var qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=275x275&data=" + qrtext.value;
        qrimage.src = qrCodeURL;

        // Set the download link
        downloadLink.href = qrCodeURL;
        downloadLink.style.display = 'inline-block'; 
    } else {
        // Hide output container if no valid input
        outputContainer.style.display = 'none';

        // Show error message and highlight input field
        errorMessage.style.display = 'block';
        qrtext.classList.add('error'); 
        qrtext.focus(); 
    }
});
