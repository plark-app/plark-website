import React from 'react';

type StickIphoneProps = {
    children: React.ReactNode;
};

export default React.memo(function StickIphone(props: StickIphoneProps): JSX.Element {
    return (
        <div>
            <div style={{ position: 'absolute', height: '100%', paddingBottom: '25vh', left: '50%', transform: 'translateX(-50%)', width: 1042,  }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh' }}>
                    <img src="/img/main-screen.png" style={{ position: 'absolute', right: 0, bottom: -90 }} />
                </div>
            </div>

            <div>{props.children}</div>
        </div>
    );
});
