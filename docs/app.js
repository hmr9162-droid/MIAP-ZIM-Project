// zim sum app.js

// open home site from button click 

function openZIMSUM() {
   var zimWin = window.open("/ZimSum/index.html","",'width=900,height=675,resizable=yes,menubar=no,toolbar=no,status=yes,scrollbars=yes,top=10,left=10');
   zimWin.focus();

// leave file folder "full" after download button is clicked
   
document.querySelectorAll(".download-folder").forEach(folder => {
    folder.addEventListener("click", function(event) {
        event.preventDefault();

        const link = this;

        link.classList.add("clicked");

        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});


