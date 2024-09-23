import Image from "next/image";
import qrcode from "./static/qrdung.jpg";

export default function HappyMoney() {
  return (
    <section className="">
      <div className="wrapper-title-section section-global">
        <div className="label-title-section">Hộp Mừng Cưới</div>
        <div className="desc-title-section">
          Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như
          đám cưới của chúng tôi.
        </div>
        <div className="wrapper-card-account">
          <div className="title-account">THÔNG TIN NGÂN HÀNG</div>
          <Image
            src={qrcode}
            width={150}
            height={150}
            alt="QR CODE"
          />
          <div className="info-account">
            Ngân hàng: Techcombank <br />
            Tên tài khoản: Hồ Xuân Dũng <br />
            STK: 1903 8930 7070 13
          </div>
        </div>
      </div>
    </section>
  );
}
