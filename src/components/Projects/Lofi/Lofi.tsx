import { Body } from "../../Skeleton";
import LofiFooter from "./UI/Footer/LofiFooter";
import { lazy, Suspense } from "react";
import LofiHeader from "./UI/Header/LofiHeader";

const Lofi = () => {
  const LazyHome = lazy(() => import("./UI/Home/LofiHome"));
  const LazyFooter = lazy(() => import("./UI/Footer/LofiFooter"));
  const LazySettingButton = lazy(() => import("./UI/Button/LofiSettingButton"));
  const LazyRainButton = lazy(() => import("./UI/Button/LofiRainButton"));

  return (
    <>
      <Body
        children={
          <>
            <div id="lofi-video">
              <Suspense fallback={<div>Loading...</div>}>
                <LofiHeader />
                <LazyHome />
                <LazyFooter />
                <LazySettingButton />
                <LazyRainButton />
                <LofiFooter />
              </Suspense>
            </div>
          </>
        }
      />
    </>
  );
};

export default Lofi;
