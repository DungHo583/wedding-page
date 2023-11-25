import Image from "next/image";
import subImage from "./static/sub_title.png";
import album1 from "./static/albums/album1.jpg";

export default function Share() {
  return (
    <section>
      <div className="section-global section-share">
        <Image
          src={subImage}
          // width={510.37}
          // height={469.54}
          alt="Sub image"
        />
        <div className="subtext-share">
          Cảm ơn tất cả những người bạn thân yêu của tôi! <br />
          Tôi biết các bạn rất bận rộn, bận rộn với công việc, bận rộn với gia đình… <br />
          Nhưng tất cả đã có mặt hôm nay để chúc mừng tinh yêu và hạnh phúc của
          chúng tôi. <br />
          Một lần nữa chân thành cảm ơn tất cả các bạn!
        </div>
        <div className="sub-name-share">
          <span>chú rể</span> Xuân Dũng &#9829; Thuỳ Trang <span>cô dâu</span>
        </div>
        <div className="sub-name-share-mobile">
          <span>chú rể</span> Xuân Dũng <br /> &#9829; <br /> Thuỳ Trang <span>cô dâu</span>
        </div>
        <Image
          src={album1}
          // width={510.37}
          // height={469.54}
          alt="Sub image"
        />
      </div>
    </section>
  );
}
