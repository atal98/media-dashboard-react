import React from "react";
import Top from "./components/Title/Header";
import "./App.css";
import TopCardsSection from "./components/TopCardSection/TopCardsSection";
import BottomCardsSection from "./components/BottomCardsSection/BottomCardsSection";

function App() {
  return (
    <>
      <Top />
      <main>
        <section className="container cards">
          <TopCardsSection
            platform="facebook"
            username="@ref"
            followers="1987"
            count="Followers"
            change="up"
            changeType="up"
            number="12 Today"
          />
          <TopCardsSection
            platform="twitter"
            username="@nathanf"
            followers="1044"
            count="Followers"
            change="up"
            number="99 Today"
            changeType="up"
          />
          <TopCardsSection
            platform="instagram"
            username="@realnathanf"
            followers="11k"
            count="Followers"
            change="up"
            number="1099 Today"
            changeType="up"
          />
          <TopCardsSection
            platform="youtube"
            username="Nathan F."
            followers="8239"
            count="Subscribers"
            change="down"
            number="144 Today"
            changeType="down"
          />
        </section>
        <section className="container">
          <h2>Overview - Today</h2>
          <div className="cards">
            <BottomCardsSection
              subtext="Page Views"
              platform="facebook"
              count="87"
              changeType="up"
              number="3%"
            />
            <BottomCardsSection
              subtext="Likes"
              platform="facebook"
              count="52"
              changeType="down"
              number="2%"
            />
            <BottomCardsSection
              subtext="Likes"
              platform="instagram"
              count="5462"
              changeType="up"
              number="27%"
            />
            <BottomCardsSection
              subtext="Profile Views"
              platform="instagram"
              count="52k"
              changeType="up"
              number="35%"
            />
            <BottomCardsSection
              subtext="Retweets"
              platform="twitter"
              count="117"
              changeType="up"
              number="102%"
            />
            <BottomCardsSection
              subtext="Likes"
              platform="twitter"
              count="507"
              changeType="up"
              number="23%"
            />
            <BottomCardsSection
              subtext="Likes"
              platform="youtube"
              count="107"
              changeType="down"
              number="15%"
            />
            <BottomCardsSection
              subtext="Total Views"
              platform="youtube"
              count="1407"
              changeType="down"
              number="31%"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
