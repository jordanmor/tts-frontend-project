$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // move content to center
        $('#content').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    // Account and menu button in the main header area
    $('#sidebarCollapseAccount, #sidebarCollapseMenu').on('click', function (e) {
        // Display chosen menu in the sidebar
        if(e.currentTarget.id === 'sidebarCollapseAccount') {
            $('#sidebarAccount').show();
            $('#sidebarMenu').hide();
        } else if(e.currentTarget.id === 'sidebarCollapseMenu') {
            $('#sidebarAccount').hide();
            $('#sidebarMenu').show();
        }
        // open sidebar
        $('#sidebar').addClass('active');
        // move content to right
        $('#content').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // Account and menu button in the sidebar
    $('#sidebarAccount, #sidebarMenu').on('click', function (e) {
        if(e.currentTarget.id === 'sidebarAccount') {
            $('#sidebarMenu').show();
            $('#sidebarAccount').hide();
        } else if(e.currentTarget.id === 'sidebarMenu') {
            $('#sidebarAccount').show();
            $('#sidebarMenu').hide();
        }
    });

});