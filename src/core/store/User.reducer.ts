import {User, UserService} from "cms-alganews-sdk";
import {createAsyncThunk, createReducer, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {notification} from "antd";

interface UserState {
    list: User.Summary[];
    fetching: boolean;
}

const initialState: UserState = {
    fetching: false,
    list: []
}

export const getAllUsers = createAsyncThunk('user/getAllUsers',
    async () => UserService.getAllUsers());

export const toggleUserStatus = createAsyncThunk('user/toggleUserStatus',
        async (user: User.Summary | User.Detailed) => {
            user.active ?
                await UserService.deactivateExistingUser(user.id)
                :
                await UserService.activateExistingUser(user.id);
        }
    )
;

export const UserReducer = createReducer(initialState, builder => {
    let isSuccess = isFulfilled(getAllUsers, toggleUserStatus);
    let isError = isRejected(getAllUsers, toggleUserStatus);
    let isLoading = isPending(getAllUsers, toggleUserStatus);
    builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        .addMatcher(isSuccess, state => {
            state.fetching = false
        })
        .addMatcher(isError, (state, action) => {
            state.fetching = false
            notification.error({
                message: action.error.message
            })
        })
        .addMatcher(isLoading, state => {
            state.fetching = true
        });
});
