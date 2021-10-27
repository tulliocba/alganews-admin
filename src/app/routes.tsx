import {Route, Switch} from "react-router-dom";
import {HomeView} from "./views/Home.view";
import {UserCreateView} from "./views/UserCreate.view";
import {UserListView} from "./views/UserList.view";
import {PaymentListView} from "./views/PaymentList.view";
import {PaymentCreateView} from "./views/PaymentCreate.view";
import {CashFlowRevenuesView} from "./views/CashFlowRevenues.view";
import {CashFlowExpensesView} from "./views/CashFlowExpenses.view";

export const Routes = () => {
    return <Switch>
        <Route path={'/'} component={HomeView} exact/>
        <Route path={'/users/new'} component={UserCreateView} exact/>
        <Route path={'/users'} component={UserListView} exact/>
        <Route path={'/payments'} component={PaymentListView} exact/>
        <Route path={'/payments/new'} component={PaymentCreateView} exact/>
        <Route path={'/cash-flow/revenues'} component={CashFlowRevenuesView} exact/>
        <Route path={'/cash-flow/expenses'} component={CashFlowExpensesView} exact/>
    </Switch>
}