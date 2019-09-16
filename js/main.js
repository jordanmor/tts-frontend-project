$(document).ready(function () {
    const $sidebarMenu = $('#sidebarMenu');
    const $sidebarMenuBtn = $('#sidebarMenuBtn');
    const $sidebarAccount = $('#sidebarAccount');
    const $sidebarAccountBtn = $('#sidebarAccountBtn');

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
            $sidebarAccountBtn.show();
            $sidebarAccount.show();
            $sidebarMenuBtn.hide();
            $sidebarMenu.hide();
        } else if(e.currentTarget.id === 'sidebarCollapseMenu') {
            $sidebarAccountBtn.hide();
            $sidebarAccount.hide();
            $sidebarMenuBtn.show();
            $sidebarMenu.show();
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
    $('#sidebarAccountBtn, #sidebarMenuBtn').on('click', function (e) {
        if(e.currentTarget.id === 'sidebarAccountBtn') {
            $sidebarAccountBtn.hide();
            $sidebarAccount.hide();
            $sidebarMenuBtn.show();
            $sidebarMenu.show();
        } else if(e.currentTarget.id === 'sidebarMenuBtn') {
            $sidebarAccountBtn.show();
            $sidebarAccount.show();
            $sidebarMenuBtn.hide();
            $sidebarMenu.hide();
        }
    });

});