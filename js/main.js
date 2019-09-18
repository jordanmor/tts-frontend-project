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
            $sidebarAccountBtn.hide();
            $sidebarAccount.show();
            $sidebarMenuBtn.show();
            $sidebarMenu.hide();
        } else if(e.currentTarget.id === 'sidebarCollapseMenu') {
            $sidebarAccountBtn.show();
            $sidebarAccount.hide();
            $sidebarMenuBtn.hide();
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
            $sidebarAccount.show();
            $sidebarMenuBtn.show();
            $sidebarMenu.hide();
        } else if(e.currentTarget.id === 'sidebarMenuBtn') {
            $sidebarAccountBtn.show();
            $sidebarAccount.hide();
            $sidebarMenuBtn.hide();
            $sidebarMenu.show();
        }
    });

    /* Since a YouTube video doesn't stop automatically when you close the modal window, 
       the code below will prevent the video from still playing in the background 
       after the modal is closed. */

    /* Store the YouTube iframe src attribute value in a variable */
    let youtubeUrl = $("#youtubeVideo01").attr('src');
    
    /* Assign an empty url value to the iframe src attribute when
    modal hidden, which stops the video play */
    $("#videoModal").on('hide.bs.modal', function(){
        $("#youtubeVideo01").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#videoModal").on('show.bs.modal', function(){
        $("#youtubeVideo01").attr('src', youtubeUrl);
    });
});