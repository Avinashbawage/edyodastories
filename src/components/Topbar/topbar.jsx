import React, { Component } from "react";
import styles from "./styles.module.css";

export class Topbar extends Component {
  // Intialization 
  constructor(){
    super()
    console.log("constructor")
   }

   componentDidMount(){
    console.log("component did mount")
   }

  render() {
    // Updating state
    console.log("Render")
    return (
      <div className={styles.topbar}>
        {" "}
        <div className={styles.headers}>
          <div className={styles.BlogTopbar}>
            <div className={styles.logo}>EDYODA</div>
            <p className={styles.logostories}>Stories</p>
          </div>

          <div>
            <div className={styles.BlogNavigationLink}>
              Explore Categories
              <span>
                <img
                  className={styles.icon}
                  alt="Dropdown Icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                />
              </span>
            </div>
          </div>

          <div>
            <p className={styles.BlogNavigationLinks__EdyodaText}>
              EdYoda is free learning and knowledge <br /> sharing platform for
              techies
            </p>
          </div>

          <div>
            <button className={styles.Button__Button}>
              Go To Main Website
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
