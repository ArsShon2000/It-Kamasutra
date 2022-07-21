import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../comman/preloader/Preloader'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        <div className={s.sam}>
            {/* <img src='https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2021/06/09/f1d4f170024149e6a62ad299314a35e6.jpg' /> */}
            <img src='https://vgtimes.ru/uploads/posts/2021-06/koncept-animeshnoy-pomoschnicy-samsung-vzorval-internet.-v-seti-uzhe-polno-artov-eroticheskogo-kospleya-i-porno-s-devushkoy-77770.jpg?1622660028' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
        </div>
    </div>
}

export default ProfileInfo;