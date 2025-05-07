import React from "react";

const BackgroundVideo: React.FC = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                poster="/post.png"
                className="absolute inset-0 w-full h-full object-cover">
                <source src="/output_2.webm" type="video/webm" />
                {/*<source src="/0403.mp4" type="video/mp4" />*/}
                Do not support
            </video>
        </div>
    );
};

export default BackgroundVideo;
