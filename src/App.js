import React from "react";

import "./App.css";

function App() {
  return (
    //  <div className="full" >
    <div className="full">
      <div style={{ flexBasis: "500px" }}>
        <div className="tren">
          <span className="profile-name">
            <span>Huyen Su </span>
          </span>
          <span className="date1">
            đã bình luận về một bài viết từ 29 tháng 6, 2016.
          </span>
          <h1> </h1>
        </div>

        <div class="flx">
          <img
            class="avatar"
            alt=""
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p40x40/65268948_1456211947860064_3891972739409379328_n.jpg?_nc_cat=104&amp;_nc_oc=AQn8M3l5E6EbX1w04tKbT_yZlGnrHscu-m83KV299WahpAYjTDPOqJ_MoPB3WAaHDIk&amp;_nc_ht=scontent.fhan2-4.fna&amp;oh=2125105d41eec2fc84b218e3c908d1b5&amp;oe=5D7CFA4A"
          />

          <div className="fl">
            <span>
              <span className="profile-name">
                <span>Huyen Su</span>
              </span>
              <span className="date1"> cùng với </span>
              <span className="profile-name-other">
                <span>Tuấn Bùi</span>
              </span>
              <span className="date1"> và </span>
              <span className="profile-name-other">
                <span>Khánh Hưng.</span>
              </span>
            </span>
            <span>
              <span className="date">29 tháng 6, 2016 . </span>

              <img
                class="emoji"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/yzxDz4ZUD49.png"
                alt=""
              />
            </span>
          </div>
        </div>

        <div className="message">
          <p>3 thanh niên hưởng thị sau tiết toán được nghỉ ngơi....</p>
        </div>
        <img
          class="food"
          alt=""
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/13509120_657488861065714_875632837256928621_n.jpg?_nc_cat=105&_nc_oc=AQknxa7xICFcbC3EWQkPVPDkcyjvpZt0GzBNiO1gM9oZWyIBXcCdqjw-ULQp_WgSaVM&_nc_ht=scontent.fhan2-4.fna&oh=e4b37e6e546be7ade2cd3ed551ca8623&oe=5DC2B719"
        />
      </div>
    </div>
  );
}

export default App;
