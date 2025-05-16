import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";


const ThemeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state: RootState) => state.theme.сurrentTheme);


    const handleToggle = () => {
      dispatch(toggleTheme());        
};

    return (
      <>
        <button className="theme-toggle" onClick={handleToggle} aria-label="Toggle theme">
          {currentTheme === "light" ? "Dark" : "Light"}
        </button>
      </>
    );
  }



export default ThemeToggle;