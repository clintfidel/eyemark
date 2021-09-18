import React, { useState, useCallback, useRef, useEffect } from "react";
import { LogoSmall, Add } from "assets/icons(svg)";
import { Background2 } from "assets/images(png)";
import { Helmet } from "react-helmet";
import { Button } from "components";
import { createAccountRoutes, modulesRoutes } from "routes/routes-list";
import { ArrowBack } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./style.scss";

export function Screen4({ history }) {
  const { t } = useTranslation();
  const imgRef = useRef(null);
  const [upImg, setUpImg] = useState();
  const [upload, setUpload] = useState(false);
  const [done, setDone] = useState(false);
  const [crop, setCrop] = useState({ unit: "%", width: 80, aspect: 1 });
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [image, setImage] = useState();
  const generateDownload = (canvas, crop) => {
    if (!crop || !canvas) {
      return;
    }
    const base64Canvas = canvas.toDataURL("image/jpeg");
    setImage(base64Canvas);
  };
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setUpload(true);
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  const reset = () => {
    setUpload(false);
    setDone(false);
  };

  const doneUp = () => {
    generateDownload(previewCanvasRef.current, completedCrop);
    setUpload(false);
    setDone(true);
  };

  return (
    <>
      <Helmet>
        <title>Eyemark - {t("auth:Upload Profile Picture")}</title>
      </Helmet>
      <div
        className="onboarding-container flex items-center justify-center placeholder"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="card px-8 py-8 overflow-hidden relative">
          {!upload ? (
            <>
              <div className="flex items-center justify-between mb-10">
                <img src={LogoSmall} alt="logo" />
                <div style={{ width: "139px" }}>
                  {!done ? (
                    <Button
                      text={t("auth:Skip for now")}
                      className="btn-outline btn-size-sm-h btn-no-bg"
                      onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen5}`)}
                    />
                  ) : null}
                </div>
              </div>
              <p className="text-base font-semibold mb-2.5">{t("auth:Upload a profile picture")}</p>
              <p className="text-sm font-medium mb-14 w-96 subtitle" style={{ color: "#4B5667" }}>
                Lorem ipsum dolor sit amet, nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
              </p>
              <div className="flex w-full items-center justify-center">
                <label htmlFor="upload">
                  <div className="upload-container flex items-center justify-center">
                    {done ? (
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          position: "absolute"
                        }}
                        src={image}
                        alt="profile-image"
                        className="cursor-pointer"
                      />
                    ) : null}
                    <img src={Add} alt="add" className="cursor-pointer add-image" />
                    <input
                      type="file"
                      id="upload"
                      name="upload"
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={onSelectFile}
                    />
                  </div>
                </label>
              </div>
              <div className="absolute bottom-0 inset-x-0 footer w-full h-20 px-6 flex items-center justify-end">
                {done ? (
                  <Button
                    text={t("auth:Next")}
                    className="btn-size-sm"
                    onClick={() => history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen5}`)}
                  />
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <div onClick={reset}>
                    <ArrowBack className="mr-3" style={{ cursor: "pointer" }} />
                  </div>
                  <p className="font-medium">{t("auth:Edit picture")}</p>
                </div>
                <Button text={t("auth:Apply")} className="btn-size-sm btn-no-shadow" onClick={doneUp} />
              </div>
              <div>
                <ReactCrop
                  src={upImg}
                  onImageLoaded={onLoad}
                  crop={crop}
                  circularCrop={true}
                  onChange={c => setCrop(c)}
                  onComplete={c => setCompletedCrop(c)}
                  style={{ borderRadius: "8px", height: "470px" }}
                  keepSelection={true}
                  locked={true}
                  imageStyle={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "470px" }}
                />
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    width: Math.round(completedCrop?.width ?? 0),
                    height: Math.round(completedCrop?.height ?? 0),
                    display: "none"
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Screen4;
