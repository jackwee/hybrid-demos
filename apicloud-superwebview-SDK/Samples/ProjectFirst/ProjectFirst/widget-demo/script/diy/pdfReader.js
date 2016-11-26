function openPdf()
{
    var pathUrl = document.getElementById("pathUrl").value;
    var iaf = api.require('pdfReader');
    iaf.open({
        path:pathUrl
    });
};