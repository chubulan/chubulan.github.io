$(function() {
    const video1 = document.querySelector('.video1 video');
    const video2 = document.querySelector('.video2 video');

    let video1Playing = false;
    let video2Playing = false;

    const checkVisibility = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    const videoElement1 = $('.video1 video').get(0);
    const videoElement2 = $('.video2 video').get(0);

    if (!videoElement1 || !videoElement2) {
        console.error("Video element not found");
        return;
    }

    const maxScroll = $(document).height() - $(window).height();

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();

        if (videoElement1.duration) {
            videoElement1.currentTime = videoElement1.duration * (currentScrollPosition / maxScroll);
        } else {
            console.warn("Video 1 duration is not available");
        }

        if (videoElement2.duration) {
            videoElement2.currentTime = videoElement2.duration * (currentScrollPosition / maxScroll);
        } else {
            console.warn("Video 2 duration is not available");
        }
        
        if (checkVisibility(document.querySelector('.video1'))) {
            if (!video1Playing) {
                video1.play();
                video1Playing = true;
            }
        } else {
            if (video1Playing) {
                video1.pause();
                video1Playing = false;
            }
        }

        if (checkVisibility(document.querySelector('.video2'))) {
            if (!video2Playing) {
                video2.play();
                video2Playing = true;
            }
        } else {
            if (video2Playing) {
                video2.pause();
                video2Playing = false;
            }
        }
    });
});
