import {useCallback, useState} from "react";
import {ResourceNotFoundError, User, UserService} from "cms-alganews-sdk";

export const useUser = () => {
    const [user, setUser] = useState<User.Detailed>();

    const [userNotFound, setUserNotFound] = useState(false);

    const fetchUser = useCallback(async (userId: number) => {
        try {
            await UserService.getDetailedUser(userId)
                .then(setUser);
        } catch (e) {
            if (e instanceof ResourceNotFoundError) {
                setUserNotFound(true);
            } else {
                throw e;
            }
        }
    }, []);

    const toggleUserStatus = useCallback(
        (user: User.Summary | User.Detailed) => {
            return user.active
                ? UserService.deactivateExistingUser(user.id)
                : UserService.activateExistingUser(user.id);
        },
        []
    );

    return {
        user, fetchUser, userNotFound, toggleUserStatus
    }
}