import React from "react";
import "./LastArticls.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

import blogImg3 from "../../assets/images/blog/3.jpg";
const LastArticls = () => {
  return (
    <div className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />

        <div class="articles__content">
          <div class="row">
            <ArticleBox
              title=" نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover={blogImg3}
              desc="بان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه"
            />{" "}
            <ArticleBox
              title=" نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover={blogImg3}
              desc="بان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه"
            />{" "}
            <ArticleBox
              title=" نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover={blogImg3}
              desc="بان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastArticls;
