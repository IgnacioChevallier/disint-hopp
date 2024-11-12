import React from 'react';
import {SlideModalBox} from "../slide-modal-box/SlideModalBox";
import ProfilePicture from "../profile-picture/ProfilePicture";
import {ListItem} from "../list-item/ListItem";

interface Profile {
    name: string;
    src: string;
}

interface SlideModalShareProps {
    profiles: Profile[];
}

const SlideModalShare = ({ profiles }: SlideModalShareProps) => {
    return (
        <SlideModalBox>
            <div className={"flex flex-col gap-4"}>
                {/* Profile Pictures */}
                <div className="flex flex-row items-center gap-[8px] min-w-[350px] overflow-x-auto custom-scrollbar">
                    {profiles.map((profile, index) => (
                        <div key={index} className="flex flex-col items-center w-[100px] cursor-pointer hover:bg-gray-100" onClick={() => alert(`Clicked ${profile.name}`)}>
                            <ProfilePicture link={profile.src} size="small"/>
                            <p className="text-regular overflow-hidden line-clamp-1">{profile.name}</p>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-300"/>

                {/* Share in other applications ListItem */}
                <ListItem
                    className={"cursor-pointer hover:bg-gray-100"}
                    text="Share in other applications"
                    leadingIcon="share"
                    leadingIconSize={"small"}
                    onClick={() => alert("Share in other applications")}
                />
            </div>
        </SlideModalBox>
    );
};

export default SlideModalShare;
