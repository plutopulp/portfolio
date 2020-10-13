import * as segments from "./segments";
import * as headers from "./headers";
import * as buttons from "./buttons";
import * as circles from "./circles";
import * as transitions from "./transitions";

// All styles are indexed here.
// Can be imported throughout the app from this single file.
export const { LandingSegment, MainSegmentBlue, MainSegmentWhite } = segments;
export const {
  MainHeader,
  SubHeader,
  BodyHeader,
  MainHeaderWithAnimation,
  SubHeaderWithAnimation,
} = headers;

export const { ButtonWithAnimation, RotateButtonChild } = buttons;
export const {
  TranslateX,
  OpacityTransition,
  RotateChildOnHover,
  OpacityAndTranslateX,
} = transitions;
export const { Circle, SpiralCircle } = circles;
