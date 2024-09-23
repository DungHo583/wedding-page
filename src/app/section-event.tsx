import Image from "next/image";
import tiecnhanu from "./static/tieccuoinhanu.jpeg";
import tiecnhanam from "./static/tieccuoinhanam.jpeg";
import calendar from "./static/calendar.png";

export default function Event() {
  return (
    <section className="">
      <div className="wrapper-title-section section-event section-global">
        <Image
          src={calendar}
          className="calendar-img"
          // width={193} height={165}
          alt="Calendar"
        />
        <div className="label-title-section">Sự Kiện Cưới</div>
        <div className="desc-title-section">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
          đám cưới của chúng tôi!
        </div>
        <div className="wrapper-event-info">
          <div className="wrapper-card">
            <div className="wrapper-card-image event-girl"></div>
            <div className="wrapper-card-info">
              <div className="title-card">LỄ CƯỚI NHÀ NỮ</div>
              <div className="time-card">16:00 - 02/12/2023</div>
              <div className="address-card">
                Tư gia nhà nữ - Thôn 3, Sơn Bình, Hương Sơn, Hà Tĩnh
              </div>
            </div>
          </div>
          <div className="wrapper-card">
            <div className="wrapper-card-image event-boy"></div>
            <div className="wrapper-card-info">
              <div className="title-card">LỄ CƯỚI NHÀ NAM</div>
              <div className="time-card">11:00 - 03/12/2023</div>
              <div className="address-card">
                Nhà hàng Phố Huyện - Số 2 đường Nguyễn Tiến Tài, Khối 6A, Thị
                trấn Thanh Chương, Nghệ An
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
