import React, { component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            {/* <img src='https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2021/06/09/f1d4f170024149e6a62ad299314a35e6.jpg' /> */}
            <img src='https://vgtimes.ru/uploads/posts/2021-06/koncept-animeshnoy-pomoschnicy-samsung-vzorval-internet.-v-seti-uzhe-polno-artov-eroticheskogo-kospleya-i-porno-s-devushkoy-77770.jpg?1622660028' />
        </div>
        <div>
            ava + description
        </div>
        
        <MyPosts />
    </div>
}

export default Profile;