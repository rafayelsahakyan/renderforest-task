var parent = document.getElementsByClassName("video-gallery-content")[0],
    pictureName = 1,
    title = ["3D Explainer Video Toolkit",
            "Explainer Video Toolkit",
            "Educational Video Toolkit",
            "Teacher’s Video Message",
            "Online Education Promotion",
            "Advanced Online Educational Platform",
            "Online Educational Website Promotion",
            "Educational Platform Introduction",
            "E-Learning Platform Promotion"];

for(i=0;i<=8;i++){
    var div = document.createElement('div');
    div.innerHTML=`
    <a href="#">
        <div class="img-side">
            <img src="img/video-gallery/picture-of-video/pic-${pictureName}.png" alt="">
            <img class="play-icon" src="img/video-gallery/play-icon.svg" alt="">
            <h6 class="video-more-info">Watch full video</h6>
        </div>
        <h3>${title[i]}</h3>
        <div class="button-side">  
            <p>Create</p>
            <img src="img/video-gallery/left-arrow.svg" alt="">
        </div>
    </a>`
    $(div).attr("class", "video-block");
    parent.append(div);
    pictureName++;
}
