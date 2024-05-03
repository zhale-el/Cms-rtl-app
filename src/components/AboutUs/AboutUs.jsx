import React from "react";
import "./AboutUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
const AboutUs = () => {
  return (
    <div class="about-us">
      <div class="container">
        <SectionHeader
          title=" ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />
        <div className="container">
          <div className="row">
            <AboutUsBox
              title="دوره های اختصاصی"
              des="با پشتیبانی و کیفیت بالا ارايه میده"
            />
            <AboutUsBox
              title="اجازه تدریس"
              des="به هر مدرسی رو نمیده جون کیفیت براش مهمه"
            />
            <AboutUsBox
              title="دوره پولی رایگان"
              des="براش مهم نیست و به مدرسش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدین دوره ارایه بده"
            />
            <AboutUsBox
              title="اهمیت به کار"
              des="الویت اول اخر آموزش رسوند هست"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
