import React from "react";
import classes from './ProfileInfo.module.css'
import preloader from '../../../assets/images/6.gif'


const ProfileInfo = (props) => {

    if(!props.profile) {
        return <img src={preloader}/>
        // return <preloader/>
    }


    return (
        <div className={classes.item}>
            <img
                src="https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae"
                alt=""/>

            <div className={classes.description}>
                <img src={props.profile.photos.large}/>
                <div>Description:</div>
                <div>{'About Me: ' + props.profile.aboutMe}</div>
                <div>{'Full name: ' + props.profile.fullName}</div>

            </div>
        </div>
    )
}
export default ProfileInfo