import './App.css'
import {AppHeader} from "./components/AppHeader.tsx";
import {Layout} from "antd";
import {EmployeesDataGrid} from "./pages/EmployeesDataGrid.tsx";
import {Content} from "antd/es/layout/layout";

function App() {

    return (
        <Layout>
            <AppHeader/>
            <Content className={"content-style"}>
                <EmployeesDataGrid></EmployeesDataGrid>
            </Content>
        </Layout>
    )
}

export default App
