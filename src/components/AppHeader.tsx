import * as React from "react";
import {Header} from "antd/lib/layout/layout";
import type {MenuItemType} from "antd/es/menu/interface";
import {Menu} from "antd";

export const AppHeader: React.FC = () => {
    const menuItems: MenuItemType[] = [{key: "employees", label: "Employees"}];
    return (
        <>
            <Header style={{display: "flex", alignItems: "center"}}>
                <Menu theme="dark" mode="horizontal" items={menuItems} style={{flex: 1, minWidth: 0}}></Menu>
            </Header>
        </>
    );
}
