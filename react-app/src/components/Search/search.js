import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { findAllPages } from "../../store/userPage.js";
import { Modal } from '../../context/modal';
import "./search.css";

const Search = ({setSearching, searching}) => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [pages, setPages] = useState([]);
    let matches = [];

    const findPages = () => {
        dispatch(findAllPages(setPages))
    }

    const reset = () => {
        setSearch("")
        setSearching(false)
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
        <>  {searching &&
            <Modal>
                <div className="searchPage">
                    <div className="search-box">
                        <div className="searchBar">
                            <div className="input-container"><i  className="far fa-search"></i>
                                <input
                                onClick={findPages}
                                value={search}
                                placeholder="Search By Page Name"
                                className="search-in"
                                onChange={(e) => setSearch(e.target.value)}
                                />
                                <button id="close-button" className="close-button" onClick={(e) => setSearching(false)}>Close</button>
                            </div>
                            </div>
                        {search.length !== 0 &&
                        <div className="link-container">
                            {matches.map((match) => (
                                <NavLink className="search-link" key={match.id} to={`${match.pageName.split(" ").join("")}-${match.userId}`}>
                                    <div className="link-content" onClick={(e) => reset()}>
                                    {(match.profileImg === null || match.profileImg === "") &&
                                        <div className="thumb-images-container">
                                            <img className="thumb-image" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/bloomFavicon.ico.png" alt="poop"></img>
                                        </div>
                                    }
                                    {(match.profileImg !== null && match.profileImg !== "") &&
                                        <div className="thumb-images-container">
                                            <img className="thumb-image" src={match.profileImg} alt=""></img>
                                        </div>
                                    }
                                        <div>
                                            <div className="search-pageName">{match.pageName}</div>
                                            <div className="search-partners">{match.partnerOne && match.partnerTwo ? `${match.partnerOne} and ${match.partnerTwo}` : ""}</div>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                </NavLink>
                            ))}
                        </div>}
                    </div>
                </div>
            </Modal>}
        </>
    )

}
export default Search;
