import React from "react";
import nextConfig from "../next.config";


const BackgroundVideo: React.FC = () => {
    const base = nextConfig.basePath

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                poster={`${base}/post.png`}
                className="absolute inset-0 w-full h-full object-cover">
                <source src={`${base}/output_2.webm`} type="video/webm" />
                {/*<source src="/0403.mp4" type="video/mp4" />*/}
                Do not support
            </video>
        </div>
    );
};

export default BackgroundVideo;
