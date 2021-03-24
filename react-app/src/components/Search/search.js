import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { findAllPages } from "../../store/userPage.js";
import "./search.css";

const Search = ({setSearching}) => {

    const dispatch = useDispatch();
    const [slide, setSlide] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("Search");
    const [search, setSearch] = useState("");
    const [pages, setPages] = useState([]);
    let matches = [];

    const iconClick = () => {
        setSlide("slide-in")
    }

    const findPages = () => {
        dispatch(findAllPages(setPages))
    }

    const setFocus = () => {
        setLoading(true)
        setSlide(true)
        setMessage("Search by Page Name")
    }

    if(pages.length > 0) {
    matches = pages.filter((page) => {
        if(search === "") {
            return true
        } else if (page.pageName.toLowerCase().includes(search.toLowerCase())) {
            return true
        } else {
            return false
        }
      })
    }

    return (
        <>
            <div className="searchPage">
                <div className="searchBar">
                    <div className={!slide ? "searchIcon" : "icon-slider"}><i  className="far fa-search"></i></div>
                        <div className="input-container">
                            <input
                            onClick={findPages}
                            value={search}
                            placeholder={message}
                            className={slide ? "slide-ani" : ""}
                            onFocus={(e) => setFocus()}
                            onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    {loading &&
                    <div className="circle">
                    {search.length !== 0 &&
                    <div className="link-container">
                        {matches.map((match) => (
                            <NavLink className="" key={match.id} to={`${match.pageName.split(" ").join("")}-${match.userId}`}>
                                <div className="">
                                   {match.profileImg === null &&
                                    <div className="thumb-images-container">
                                        <img className="thumb-image" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/bloomFavicon.ico.png" alt="poop"></img>
                                    </div>
                                   }
                                   {match.profileImg !== null &&
                                    <div className="thumb-images-container">
                                         <img className="thumb-image" src={match.profileImg} alt=""></img>
                                    </div>
                                   }
                                    {/* <div>
                                        <div>{match.pageName}</div>
                                    </div> */}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    }
                </div>}
                <button id={loading ? "close-button" : ""} className="close-button" onClick={(e) => setSearching(false)}>Close Search</button>
            </div>
        </>
    )

}
export default Search;
