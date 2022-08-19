import React,{useState} from "react";
import styles from "./latest.module.css";

const Latestposts = () => {
  const [active, setActive] = useState("");
  const [status,setStatus ]= useState(true);

  const handleClick = (event) => {
    setActive(event.target.id);
    setStatus(false)
  };
  return (
    <div>
      <div className={styles.latestposts}>
        <div className={styles.container}>
          <h2>Latest Posts</h2>
          <div className={styles.filtertext}>
            <img
              width={"24px"}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
              alt="Filter_Icon"
            />{" "}
            Filter by Category
          </div>
          <div className={styles.categoryfiltersection}>
          {status ?   <button
            key={1}
            className="active"
            id={"1"}
            onClick={handleClick}
             
          >
            All
          </button>: <button
              key={1}
              className={ active === "1" ? "active" : undefined}
              id={"1"}
              onClick={handleClick}
            >
              All
            </button>
          
            }

            <button
              key={2}
              className={active === "2" ? "active" : undefined}
              id={"2"}
              onClick={handleClick}
            >
                 Artificial Intelligence
            </button>

            <button
              key={3}
              className={active === "3" ? "active" : undefined}
              id={"3"}
              onClick={handleClick}
            >
             Cloud computing
            </button>
            <button
              key={4}
              className={active === "4" ? "active" : undefined}
              id={"4"}
              onClick={handleClick}
            >
            DevOps
            </button>
            <button
              key={5}
              className={active === "5" ? "active" : undefined}
              id={"5"}
              onClick={handleClick}
            >
             Programming language
            </button>
            <button
              key={6}
              className={active === "6" ? "active" : undefined}
              id={"6"}
              onClick={handleClick}
            >
            Mobile Application Development
            </button>
            <button
              key={7}
              className={active === "7" ? "active" : undefined}
              id={"7"}
              onClick={handleClick}
            >
             Technology and Tools
            </button>
            <button
              key={8}
              className={active === "8" ? "active" : undefined}
              id={"8"}
              onClick={handleClick}
            >
             Get a Job in aTech Company
            </button>
            <button
              key={9}
              className={active === "9" ? "active" : undefined}
              id={"9"}
              onClick={handleClick}
            >
           Other
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestposts;
