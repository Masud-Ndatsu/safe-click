import React from "react";

const Main = () => {
  return (
    <main>
      <section className="container details-section">
        <div className="head">
          <h1 className="title">
            <span>Tahukah</span> Kamu?
          </h1>
          <p>
            Platform digital membantu meningkatkan pengumpulan donasi sebesar{" "}
          </p>
          <h1 className="percent">70% - 400%</h1>
        </div>
        <div className="body">
          <div className="left">
            <p>Donasi di Indonesia terus meningkat</p>
            <div className="img-box">
              <img src="/icons/safe-stat.JPG" alt="" />
            </div>
          </div>
          <button className="btn">meningkat 31%</button>
          <p className="right">
            Tetapi media digital hanya digunakan oleh 3.84% campaigners
          </p>
        </div>
        <p className="footer">
          source: Outlook Filantropi Indonesia 2022, Baznas, Donorbox{" "}
        </p>
      </section>
      <section className="gallery container">
        <h1 className="title">Ayo Kawan, Bantu Mereka!</h1>
        <div className="grid">
          <div className="grid-item">
            <img src="/images/img1.png" alt="" />
            <small>Bantuan untuk sekolah, kuliah dll.</small>
            <h4>Pendidikan</h4>
          </div>
          <div className="grid-item">
            <img src="/images/img2.png" alt="" />
            <small>Organisasi nirlaba, yayasan dll.</small>
            <h4>Non-profit</h4>
          </div>
          <div className="grid-item">
            <img src="/images/img3.png" alt="" />
            <small>Donasi untuk keberlangsungan politik, dll</small>
            <h4>Tempat Ibadah</h4>
          </div>
          <div className="grid-item">
            <img src="/images/img4.png" alt="" />
            <small>Zakat, wakaf, infaq, dll.</small>
            <h4>Lembaga Amal</h4>
          </div>
          <div className="grid-item">
            <img src="/images/img5.png" alt="" />
            <small>Program sosial, bantuan sosial, dll</small>
            <h4>Organisasi</h4>
          </div>
          <div className="grid-item">
            <img src="/images/img6.png" alt="" />
            <small> Komunitas, lembaga masyarakat, dll.</small>
            <h4>Komunitas</h4>
          </div>
          <div className="grid-item">
            <img src="/images/img7.png" alt="" />
            <small>Donasi untuk keberlangsungan politik, dll</small>
            <h4>
              Kampanye <br /> aksi sosial
            </h4>
          </div>
          <div className="grid-item">
            <img src="/images/img8.png" alt="" />
            <small>Program sosial perusahaan , CSR, dll.</small>
            <h4>Perusahaan</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
