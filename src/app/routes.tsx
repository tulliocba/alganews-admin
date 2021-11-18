import {Route, Switch} from "react-router-dom";
import {HomeView} from "./views/Home.view";
import {UserCreateView} from "./views/UserCreate.view";
import {UserListView} from "./views/UserList.view";
import {PaymentListView} from "./views/PaymentList.view";
import {PaymentCreateView} from "./views/PaymentCreate.view";
import {CashFlowRevenuesView} from "./views/CashFlowRevenues.view";
import {CashFlowExpensesView} from "./views/CashFlowExpenses.view";
import {useEffect} from "react";
import {CustomError} from "cms-alganews-sdk/dist/CustomError";
import { message, notification } from 'antd';
import {UserEditView} from "./views/UserEdit.view";

export const Routes = () => {
    useEffect(() => {
        window.onunhandledrejection = ({ reason }) => {
            if (reason instanceof CustomError) {
                if (reason.data?.objects) {
                    reason.data.objects.forEach((error) => {
                        message.error(error.userMessage);
                    });
                } else {
                    notification.error({
                        message: reason.message,
                        description:
                            reason.data?.detail === 'Network Error'
                                ? 'Erro na rede'
                                : reason.data?.detail,
                    });
                }
            } else {
                notification.error({
                    message: 'Houve um erro',
                });
            }
        };

        window.onunhandledrejection = null;
    }, []);

    return <Switch>
        <Route path={'/'} component={HomeView} exact/>
        <Route path={'/users/new'} component={UserCreateView} exact/>
        <Route path={'/users/edit/:id'} component={UserEditView} exact/>
        <Route path={'/users'} component={UserListView} exact/>
        <Route path={'/payments'} component={PaymentListView} exact/>
        <Route path={'/payments/new'} component={PaymentCreateView} exact/>
        <Route path={'/cash-flow/revenues'} component={CashFlowRevenuesView} exact/>
        <Route path={'/cash-flow/expenses'} component={CashFlowExpensesView} exact/>
    </Switch>
}