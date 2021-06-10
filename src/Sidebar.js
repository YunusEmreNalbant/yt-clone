import React from 'react';
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import SidebarRow from "./SidebarRow";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <SidebarRow selected Icon={HomeIcon} title={"Home"}/>
            <SidebarRow Icon={WhatshotIcon} title={"Trending"}/>
            <SidebarRow Icon={SubscriptionsIcon} title={"Subscription"}/>
            <hr/>
            <SidebarRow  Icon={HomeIcon} title={"Home"}/>
            <SidebarRow Icon={WhatshotIcon} title={"Trending"}/>
            <SidebarRow Icon={SubscriptionsIcon} title={"Subscription"}/>
            <SidebarRow Icon={SubscriptionsIcon} title={"Subscription"}/>
            <SidebarRow Icon={SubscriptionsIcon} title={"Subscription"}/>
            <SidebarRow Icon={SubscriptionsIcon} title={"Subscription"}/>
        </div>
    );
};

export default Sidebar;
