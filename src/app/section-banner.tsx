import Image from "next/image";
import bannerImage from "./static/banner.jpg"
import afterImageBanner from "./static/backgr-vonghoa.png"

export default function Banner() {
  return (
    <section>
      <div className="section-banner section-global">
        <div className="wrapper-banner">
          <div className="background-banner">
          <Image
              src={afterImageBanner}
              width={510.37}
              height={469.54}
              alt="flower"
            />
          </div>
          <div className="image-banner">
            <Image
              src={bannerImage}
              width={421.59}
              height={419.55}
              alt="Banner"
            />
          </div>
        </div>
        <div className="date-banner">03.12</div>
        <div className="name-banner">Xuân Dũng &#9829; Thuỳ Trang</div>
        <div className="desc-banner">We are getting married!</div>
        <div className="desc-banner">Ngày 03 tháng 12 năm 2023</div>
      </div>
    </section>
  );
}
