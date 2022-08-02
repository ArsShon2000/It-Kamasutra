import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../comman/preloader/Preloader'
import ProfileStatus from "./ProfileStatus"


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
            <div className={s.nameAva}>{props.profile.photos.large === null ?
                <img src='https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2021/06/09/f1d4f170024149e6a62ad299314a35e6.jpg' />
                : <img src={props.profile.photos.large} />}
                <ProfileStatus status={"Hello"}/>
</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.fullName}</div>
            <div className={s.job}>
            {props.profile.lookingForAJob === true ? <img src = 'https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTg2MDA1NjgwNDkzMTc1OTM3/alternative-ways-to-say-yes.png' />
             : <img src = 'https://www.telepolis.pl/media/cache/resolve/amp_recommended_size/images/2021/12/Spider-Man-No-Way-Home.jpg' /> }
            </div>
        </div>
    </div>
}

export default ProfileInfo;