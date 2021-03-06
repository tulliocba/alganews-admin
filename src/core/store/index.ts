import {configureStore, isRejected, Middleware} from "@reduxjs/toolkit";
import {UserReducer} from "./User.reducer";
import {notification} from "antd";

const observeActions: Middleware =
    () => (next) => (action) => {
        if (isRejected(action)) {
            notification.error({
                message: action.error.message,
            });
        }

        next(action);
    };

export const store = configureStore({
    reducer: {
        user: UserReducer,
    },
    middleware: function (getDefaultMiddlewares) {
        return getDefaultMiddlewares().concat(observeActions);
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
