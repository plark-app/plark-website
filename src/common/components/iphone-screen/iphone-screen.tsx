import React from 'react';
import cn from 'classnames';
import styles from './iphone-screen.scss';

type IphoneScreenProps = {
    src: string;
    srcset?: string;
    type: 'photo' | 'video';
    srcType?: string;
    className?: string;

    alt?: string;
    title?: string;
};

export function IPhoneScreen(props: IphoneScreenProps): JSX.Element {
    const { src, srcset, type, srcType, className } = props;

    const isVideo = type === 'video';

    return (
        <div className={cn(styles.iphone, className)}>
            <img src="/img/interfaces/00_Frame.png"
                 className={styles.iphoneFrame}
                 srcSet="/img/interfaces/00_Frame@2x.png 2x"
                 alt="iphone-frame"
                 title="Plark for iPhone"
            />

            <div className={styles.iphoneShadow} />

            <div className={styles.iphoneContent}>
                {isVideo ? (
                    <video className={cn(styles.iphoneImage, styles.isVideo)}
                           controls={false}
                           autoPlay
                           loop
                           muted
                           poster="/img/interfaces/00.png"
                    >
                        <source src={src} type={srcType} />
                        Your browser does not support HTML5 video.
                    </video>
                ) : (
                    <img src={src}
                         srcSet={srcset}
                         alt={props.alt || 'screen'}
                         title={props.title || 'scene'}
                         className={cn(styles.iphoneImage, styles.isImage)}
                    />
                )}
            </div>
        </div>
    );
}
