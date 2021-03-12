import React from "react";
import "./myPage.css";
import SlidingSideBar from "../SlidingSideBar";
import MyPageLayouts from "./MyPageLayouts";

const MyPage = () => {
    return (
        <>
            <div className="my-page-background">
                <SlidingSideBar />
                <MyPageLayouts />
            </div>
        </>
    )
}

export default MyPage;
