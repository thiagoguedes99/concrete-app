import React from 'react'
import './Profile.scss'
import UserPhoto from '../../../components/UserPhoto/UserPhoto'
import IconText from '../../../components/IconText/IconText'
import Description from '../../../components/Description/Description'
import organizationIcon from '../../../assets/icons/organization-icon.svg'
import locationIcon from '../../../assets/icons/location-icon.svg'
import starIcon from '../../../assets/icons/star-icon.svg'
import repositorieIcon from '../../../assets/icons/repositorie-icon.svg'
import followersIcon from '../../../assets/icons/followers-icon.svg'

const Profile = (props) => {
    return (
        <div>
            {/* {props.user.map(user => ( */}
                <div>
                    <UserPhoto 
                        image='https://avatars2.githubusercontent.com/u/47835655?s=460&v=4'
                        classPicture={props.classPicture}
                    />
                    <Description
                        title='Título do babado'
                        description='Descrição do babado'
                        classTitle='profile-title'
                        classParagraph='profile-paragraph'
                    />
                    <div className='icon-box'>
                        <IconText
                            icon={organizationIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >The Galactic Empire</IconText>
                        <IconText
                            icon={locationIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >Tatooine</IconText>
                        <IconText
                            icon={starIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >1.000.000</IconText>
                        <IconText
                            icon={repositorieIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >4</IconText>
                        <IconText
                            icon={followersIcon}
                            alt='organization icon'
                            classIcon='icon'
                        >9.999.999</IconText>
                    </div>
                </div>
            {/* ))} */}
        </div>
    )
}

export default Profile