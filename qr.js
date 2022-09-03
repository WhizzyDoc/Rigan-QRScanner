function onScanSuccess(decodedText, decodedResult) {
	// Handle on success condition with the decoded text or result.
	console.log(`Scan result: ${decodedText}`, decodedResult);
	//stops the scanner and clear the scan area
	html5QrcodeScanner.clear();
}
function onScanError(errorMessage) {
	alert("Error Scanning QR Code! Please try again");
}
var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);