import React from "react";
import styles from "./NerveCatApp.module.less";
import wxArticle from "../../assets/wxArticle.jpg";

export const NerveCat: React.FC = () => {
    return <div className={styles.WeChat}>
        <img src={wxArticle}/>
    </div>
}
