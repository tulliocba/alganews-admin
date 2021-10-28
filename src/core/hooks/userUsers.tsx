import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import * as UserActions from "../store/User.reducer";
import {User} from "cms-alganews-sdk";

export const useUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.user.list);
    const fetching = useSelector((state: RootState) => state.user.fetching);


    const fetchUsers = useCallback(() => {
        dispatch(UserActions.getAllUsers())
    }, [dispatch]);

    const toggleUserStatus = useCallback((user: User.Detailed | User.Summary ) => {
        dispatch(UserActions.toggleUserStatus(user))
    }, [dispatch]);

    return {
        users,
        fetchUsers,
        toggleUserStatus,
        fetching
    }
}