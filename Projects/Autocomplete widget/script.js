$(document).ready(function () {
    var brands = ['HP', 'Lenovo', 'Mac', 'Dell', 'Microsoft', 'Acer', 'Asus', 'IBM', 'Samsung'];
    $('#tags').autocomplete({ source: brands });
});