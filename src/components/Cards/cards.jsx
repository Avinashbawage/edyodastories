import React, { Component } from "react";
import styles from "./card.module.css";

export class Cards extends Component {
  render() {
    return (
      <div className={styles.cardcontainer}>
        {/* Card 1 */}
        <div className={styles.cards}>
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
            width={"100%px"}
            alt="cards"
          />

          <div id={styles.titles}>
            Fresh Graduate or IT professional Looking f...
          </div>
          <p className={styles.authorname}>
            <span className={styles.name}>Arman Ahmed </span> | 05 Jul 2019
          </p>
          <p className={styles.description}>
            {" "}
            If you are a fresh graduate - or new to IT - looking for the next
            job, you need to read this. The last couple of years zekeLabs gave
            me a unique opportunity to
          </p>
        </div>
        {/* Card 2 */}
        <div className={styles.cards}>
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
            width={"100%px"}
            alt="cards"
          />

          <div id={styles.titles}>Introducing you all to EdYoda -...</div>
          <p className={styles.authorname}>
            <span className={styles.name}>Arman Ahmed </span> | 05 Jul 2019
          </p>
          <p className={styles.description}>
            {" "}
            Really ecstatic and immensely proud to introduce you all to our
            latest attempt of adding value and making an impact to the world we
            are a part of.
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.cards}>
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
            width={"100%px"}
            alt="cards"
          />

          <div id={styles.titles}>
            From identity crisis to the Success Story - Th
          </div>
          <p className={styles.authorname}>
            <span className={styles.name}>Kalyan Mahalingam </span> | 05 Jul
            2019
          </p>
          <p className={styles.description}>
            {" "}
            DevOps is a paradigm shift in the way how software products are
            being built in the modern day Information Technology (IT)
            organizations. It is becoming the
          </p>
        </div>

        {/* Card 4 */}
        <div className={styles.cards}>
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
            width={"100%px"}
            alt="cards"
          />

          <div id={styles.titles}>
            Typical day of Data Scientist - An insider
          </div>
          <p className={styles.authorname}>
            <span className={styles.name}>Saurav Ghosh </span> | 05 Jul 2019
          </p>
          <p className={styles.description}>
            {" "}
            I’ve been a Data Scientist for three years now and I can only say
            that Chris Lynch was right - “ Big Data and Data Science are the
            foundation of all the trends that
          </p>
        </div>

        {/* Card 5 */}
        <div className={styles.cards}>
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
            width={"100%px"}
            alt="cards"
          />

          <div id={styles.titles}>Amazon Web Services (AWS) Cloud Day -</div>
          <p className={styles.authorname}>
            <span className={styles.name}>Kalyan Mahalingam </span> | 05 Jul
            2019
          </p>
          <p className={styles.description}>
            {" "}
            It was indeed a hectic day with back to back session sandwiched by
            good food and tea (on a lighter note, need to investigate the
            tactics behind the 5-star hotels
          </p>
        </div>

        {/* Card 6 */}
        <div className={styles.cards}>
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
            width={"100%px"}
            alt="cards"
          />

          <div id={styles.titles}>edYoda Meetup #01 : A Date with Cloud</div>
          <p className={styles.authorname}>
            <span className={styles.name}> Ashish Pandey </span> | 05 Jul 2019
          </p>
          <p className={styles.description}>
            {" "}
            I recently had the opportunity to lead the initiative to organize
            the first Cloud meetup for edYoda. Here, I recount my experience in
            organizing the very first in the
          </p>
        </div>
      </div>
    );
  }
}

export default Cards;
