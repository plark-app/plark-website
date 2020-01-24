import React from 'react';
import cn from 'classnames';
import styles from './iphone-screen.scss';

type IphoneScreenProps = {
    src: string;
    type: 'photo' | 'video';
    srcType?: string;
    className?: string;

    alt?: string;
    title?: string;
};

export function IPhoneScreen(props: IphoneScreenProps): JSX.Element {
    const { src, type, srcType, className } = props;

    const isVideo = type === 'video';

    return (
        <div className={cn(styles.iphone, className)}>
            <img src="/img/iPhoneX_Frame.png"
                 className={styles.iphoneFrame}
                 alt="iphone-frame"
            />

            <div className={styles.iphoneShadow} />

            <div className={styles.iphoneContent}>
                {isVideo ? (
                    <video className={styles.iphoneImage}
                           controls={false}
                           autoPlay
                           loop
                           muted
                    >
                        <source src={src} type={srcType} />
                        Your browser does not support HTML5 video.
                    </video>
                ) : (
                    <img src={src}
                         alt={props.alt || 'screen'}
                         title={props.title || 'scene'}
                         className={styles.iphoneImage}
                    />
                )}
            </div>
        </div>
    );
}
