import {useCallback, useState} from "react";
import {User, UserService} from "cms-alganews-sdk";

export const useUser = () => {
    const [user, setUser] = useState<User.Detailed>();

    const fetchUser = useCallback((userId: number) => {
        UserService.getDetailedUser(userId)
            .then(setUser);
    }, [])

    return {
        user, fetchUser
    }
}