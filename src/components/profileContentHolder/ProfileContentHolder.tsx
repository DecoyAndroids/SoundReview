'use client';

import { ProfileCover } from './profileCover/ProfileCover';

export const ProfileContentHolder: React.FC = () => {
    return (
        <div className="grow w-full h-full rounded-[9px]">
            <ProfileCover/>
        </div>
    );
};
