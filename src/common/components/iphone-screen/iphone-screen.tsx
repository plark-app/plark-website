import React from 'react';
import cn from 'classnames';
import styles from './iphone-screen.scss';

type IphoneScreenProps = {
    src: string;
    type: 'photo' | 'video';
    srcType?: string;
    className?: string;
};

export function IPhoneScreen(props: IphoneScreenProps): JSX.Element {
    const { src, type, srcType, className } = props;

    const isVideo = props.type === 'video';

    const videoRef = React.useRef<HTMLVideoElement>();
    React.useEffect(() => {
        if (!isVideo) {
            return;
        }

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.play();
            }
        }, 1000);
    }, [isVideo]);

    return (
        <div className={cn(styles.iphone, className)}>
            <img src="/img/iPhoneX_Frame.png"
                 className={styles.iphoneFrame}
                 alt="iphone-frame"
            />

            <div className={styles.iphoneShadow}/>

            <div className={styles.iphoneContent}>
                {type === 'photo' ? (
                    <img src={src} alt="screen" className={styles.iphoneImage} />
                ) : (
                    <video className={styles.iphoneImage}
                           controls={false}
                           autoPlay
                           loop
                           muted
                           ref={videoRef as any}
                    >
                        <source src={src} type={srcType} />
                        Your browser does not support HTML5 video.
                    </video>
                )}
            </div>
        </div>
    );
}
