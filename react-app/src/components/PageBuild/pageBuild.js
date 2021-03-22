import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserPageById } from "../../store/userPage";
import { getTemplatePageElements } from '../../store/pageElements';
import "./pageBuild.css";

const PageBuild = () => {

    const dispatch = useDispatch();
    const {userId} = useParams();

    const pageElements = useSelector((state) => state.pageElements ? state.pageElements : null)
    const userInfo = useSelector((state) => state.userPage ? state.userPage : null)
    const [backgroundImg, setBackgroundImg] = useState()

    useEffect(() => {
        if(userId) {
            dispatch(getUserPageById(userId))
            dispatch(getTemplatePageElements())
        }
    }, [dispatch, userId])

    useEffect(() => {
        if(pageElements.backgroundImages.length === 5 && userInfo.backgroundImgId !== null) {
            console.log(pageElements)
            let selectedImage = pageElements.backgroundImages.find((image) => image.id === userInfo.backgroundImgId)
            setBackgroundImg(selectedImage.imageUrl)
        }
        if(pageElements.pageLayouts) {
            
        }
    }, [pageElements, userInfo])

    return (
        <>
            <div style={{backgroundImage: `url(${backgroundImg})`}} className="site-background">

            </div>
        </>
    )
}

export default PageBuild;