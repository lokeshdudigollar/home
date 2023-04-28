import React from "react";
import PreviewDemoGallery from "../components/PreviewDemoGallery";
import useDocumentTitle from "../components/useDocumentTitle";

const Preview = () => {
  useDocumentTitle("Lokesh Dudigollar portfolio");
  return (
    <>
      <section
        className="section demo-section preview-section theme-light dark-bg"
        id="demo"
      >
        <div className="container">
          {/* End tile */}
          <div className="preview-inner">
            <PreviewDemoGallery />
          </div>
        </div>

        <span className=" preview-sticker pos-sticker react-sticker">
          <h6 className="main-name">
            Lokesh <br />
            Dudigollar
          </h6>
        </span>
      </section>
      {/* End Preview section */}
    </>
  );
};

export default Preview;
