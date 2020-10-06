import * as banners from "./banners";
import * as headers from "./headers";
import * as buttons from "./buttons";
import * as animations from "./animations";
import * as transitions from "./transitions";

// All styles are indexed here.
// Can be imported throughout the app from this single file.
export const { StyledDesktopBanner, StyledMobileBanner } = banners;
export const {
  MainHeader,
  MainHeaderWithAnimation,
  SubHeader,
  SubHeaderWithAnimation,
} = headers;

export const { ButtonWithAnimation, RotateButtonChild } = buttons;
export const { RotateChildOnHover } = transitions;
