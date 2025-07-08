import { useEffect, useState } from "react";
import type { AppBarProps } from "./AppBar.types";
import "./AppBar.css";

const styles = {
  sm: "min-h-[64px]",
  md: "min-h-[112px] pt-2 pb-3",
  lg: "min-h-[120px] pt-2 pb-3",
};

const titleSize = {
  sm: "text-[22px]",
  md: "text-[28px]",
  lg: "text-[36px]",
};

const subtitleSize = {
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[16px]",
};

/// TODO: currently not supporting trailing actions
/// planning to do it in future
export function AppBar(props: AppBarProps) {
  const { size = "sm", title, subtitle, leading, centered = false } = props;
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsAtTop(true);
      else setIsAtTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles[size]} appbar-common ${
        isAtTop ? "" : "appbar-scroll"
      }  transition ${size === "sm" ? "flex items-center" : ""}`}
    >
      {leading && (
        <p className="mr-1 size-12 flex items-center justify-center text-on-surface dark:text-on-surface-dark">
          {leading}
        </p>
      )}
      <div
        className={`${size !== "sm" ? "ml-4" : ""} ${
          size === "sm" ? "flex-1" : ""
        }`}
      >
        {title && (
          <p
            className={`${titleSize[size]} ${
              centered ? "text-center" : ""
            } appbar-title`}
          >
            {title}
          </p>
        )}
        {subtitle && (
          <p
            className={`${subtitleSize[size]} ${
              centered ? "text-center" : ""
            } appbar-subtitle`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
