import React from "react";
import "./myPage.css";
import SlidingSideBar from "../SlidingSideBar";
import MyPageLayout from "./MyPageLayout";

const MyPage = () => {
    return (
        <>
            <div className="my-page-background">
                <SlidingSideBar />
                <MyPageLayout />
            </div>
        </>
    )
}

export default MyPage;
