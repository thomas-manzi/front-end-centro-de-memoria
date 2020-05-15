$(document).ready(function() {
    $('.gallery').on('click', function() {
        //alert('teste');
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#modelId').modal('show');
    });
});