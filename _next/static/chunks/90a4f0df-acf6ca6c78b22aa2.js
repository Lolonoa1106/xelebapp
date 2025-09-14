"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7751],
  {
    44087: (n, e, t) => {
      t.d(e, {
        F7: () => t3,
        Z3: () => sM,
        hS: () => sg,
        uP: () => r1,
        yr: () => sl,
      });
      var i,
        o,
        r,
        l,
        a = t(64461),
        s = t(12115),
        c = t(34354),
        d = t(40814),
        u = t(18010),
        p = t(32081),
        g = t(68078),
        M = t(33624),
        C = t(95155),
        h = t(76807),
        x = t(65285),
        j = t(83964),
        f = t(28050),
        y = t(62522),
        m = t(89888),
        w = t(79995),
        I = t(88178),
        N = t(47650),
        D = t(3794),
        v = t(44711),
        k = t(99652),
        L = t(98722),
        T = t(75191),
        b = t(5973),
        A = t(60709),
        z = t(79124);
      function E() {
        let n = (0, a._)([
          "\n  z-index: 4;\n  position: relative;\n  width: ",
          "px;\n  height: ",
          "px;\n  svg {\n    z-index: 3;\n    position: relative;\n    display: block;\n  }\n",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        let n = (0, a._)([
          "\n        width: 85%;\n        height: 85%;\n      ",
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        let n = (0, a._)([
          "\n  z-index: 2;\n  position: absolute;\n  overflow: hidden;\n  inset: ",
          "px;\n  border-radius: 50px;\n  background: var(--pcm-body-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg,\n  img {\n    pointer-events: none;\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n    height: 100%;\n    ",
          "\n  }\n",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function U() {
        let n = (0, a._)(["\n  position: absolute;\n  inset: -5px;\n"]);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        let n = (0, a._)([
          "\n  pointer-events: none;\n  user-select: none;\n  z-index: 1;\n  position: absolute;\n  inset: -25%;\n  background: var(--pcm-body-background);\n  div:first-child {\n    position: absolute;\n    left: 50%;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow: hidden;\n    &:before {\n      position: absolute;\n      content: '';\n      inset: 0;\n      background: var(--pcm-accent-color);\n      transform-origin: 0% 50%;\n      animation: rotateExpiringSpinner 5000ms ease-in both;\n    }\n  }\n  div:last-child {\n    position: absolute;\n    left: 0;\n    right: 50%;\n    top: 0;\n    bottom: 0;\n    overflow: hidden;\n    &:before {\n      position: absolute;\n      content: '';\n      inset: 0;\n      background: var(--pcm-accent-color);\n      transform-origin: 100% 50%;\n      animation: rotateExpiringSpinner 5000ms ease-out 5000ms both;\n    }\n  }\n  @keyframes rotateExpiringSpinner {\n    0% {\n      transform: rotate(-180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      function F() {
        let n = (0, a._)([
          "\n  pointer-events: none;\n  user-select: none;\n  z-index: 1;\n  position: absolute;\n  inset: 0;\n  svg {\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    animation: rotateSpinner 1200ms linear infinite;\n  }\n  @keyframes rotateSpinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, a._)([
          "\n  width: 100%;\n  max-width: 340px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: inline-block;\n  margin: auto;\n  width: auto;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active {\n    box-shadow: 0 0 0 60px var(--pcm-body-background) inset !important;\n    -webkit-text-fill-color: var(--pcm-body-color) !important;\n  }\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function Q() {
        let n = (0, a._)([
          "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n",
        ]);
        return (
          (Q = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        let n = (0, a._)([
          "\n  width: 42px;\n  height: 42px;\n  padding: 0;\n  margin-right: 5px;\n  margin-left: 5px;\n  border: transparent;\n  border-radius: var(--pcm-rounded-md);\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  background-clip: padding-box;\n  caret-color: var(--pcm-primary-color);\n  color: ",
          ";\n  background-color: ",
          ";\n\n  border: none;\n  &:focus,\n  &:active,\n  &:hover,\n  &:visited,\n  &:focus-visible {\n    appearance: none;\n    outline: none !important;\n    border: none !important;\n  }\n\n  &:not(:placeholder-shown) {\n    appearance: none;\n    outline: 0;\n  }\n",
        ]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      function H() {
        let n = (0, a._)([
          "\n  position: absolute;\n  top: 0;\n  opacity: ",
          ";\n  left: ",
          "px;\n  width: 42px;\n  height: 42px;\n  border: 1px solid var(--pcm-accent-color);\n  border-radius: var(--pcm-rounded-md);\n  transition:\n    left 0.3s ease,\n    opacity 0.2s ease;\n  pointer-events: none;\n  z-index: 2;\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        let n = (0, a._)(["\nfrom { opacity: 0; }\n  to { opacity: 1; }\n"]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        let n = (0, a._)(["\nfrom { opacity: 1; }\n  to { opacity: 0; }\n"]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        let n = (0, a._)([
          "\n  from{ opacity: 0; transform: scale(0.97); }\n  to{ opacity: 1; transform: scale(1); }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        let n = (0, a._)([
          "\n  from{ opacity: 1; transform: scale(1); }\n  to{ opacity: 0; transform: scale(0.97); }\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        let n = (0, a._)([
          "\n  from { transform: translate3d(0, 100%, 0); }\n  to { transform: translate3d(0, 0%, 0); }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        let n = (0, a._)(["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        let n = (0, a._)([
          "\n  z-index: 2147483646;\n  position: fixed;\n  inset: 0;\n",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      function J() {
        let n = (0, a._)([
          "\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--pcm-overlay-background, rgba(71, 88, 107, 0.24));\n  backdrop-filter: var(--pcm-overlay-backdrop-filter, blur(6px));\n  opacity: 0;\n  animation: ",
          " 150ms ease-out both;\n",
        ]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      function K() {
        let n = (0, a._)([
          "\n  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);\n  --duration: 200ms;\n  --transition: height var(--duration) var(--ease), width var(--duration) var(--ease);\n  z-index: 3;\n  display: block;\n  pointer-events: none;\n  position: ",
          ";\n  left: 50%;\n  top: 50%;\n  width: 100%;\n  height: auto;\n  transform: ",
          ";\n  backface-visibility: hidden;\n  @media only screen and (max-width: 560px) {\n    pointer-events: auto;\n    left: 0;\n    top: auto;\n    bottom: -5px;\n    transform: none;\n  }\n",
        ]);
        return (
          (K = function () {
            return n;
          }),
          n
        );
      }
      function X() {
        let n = (0, a._)([
          "\n  z-index: 2;\n  position: relative;\n  color: var(--pcm-body-color, black);\n  animation: 150ms ease both;\n  animation-name: ",
          ";\n  margin: auto;\n  height: var(--height);\n  width: 400px;\n  border-radius: var(--pcm-rounded-xl);\n  background: var(--pcm-body-background);\n  box-shadow: var(--pcm-modal-box-shadow);\n  transition: all 300ms ease;\n  overflow: hidden;\n  &.active {\n    animation-name: ",
          ";\n  }\n\n  @media only screen and (max-width: 560px) {\n    animation-name: ",
          ";\n    animation-duration: 130ms;\n    animation-timing-function: ease;\n    width: 100%;\n    transition: 200ms height cubic-bezier(0.15, 1.15, 0.6, 1);\n    will-change: height;\n    border-bottom-left-radius: ",
          ";\n    border-bottom-right-radius: ",
          ";\n\n    &.active {\n      animation-name: ",
          ";\n      animation-duration: 300ms;\n      animation-delay: 32ms;\n      animation-timing-function: cubic-bezier(0.15, 1.15, 0.6, 1);\n    }\n  }\n",
        ]);
        return (
          (X = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        let n = (0, a._)([
          "\n  z-index: 2;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n",
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      function nn() {
        let n = (0, a._)([
          "\n  width: 100%;\n  padding: 64px 0 24px 0;\n  backface-visibility: hidden;\n  box-sizing: border-box;\n",
        ]);
        return (
          (nn = function () {
            return n;
          }),
          n
        );
      }
      function ne() {
        let n = (0, a._)([
          "\n  max-width: 100%;\n  margin: 0 4px 22px;\n  padding: 12px 20px 8px;\n  overflow-x: visible;\n  max-height: var(--pcm-modal-max-height, 65vh);\n  overflow-y: auto;\n  opacity: 0;\n  animation: ",
          " 300ms ease-out both;\n",
        ]);
        return (
          (ne = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        let n = (0, a._)([
          "\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 64px;\n  transform: translateX(-50%);\n  backface-visibility: hidden;\n  width: 100%;\n  pointer-events: auto;\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function ni() {
        let n = (0, a._)([
          "\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  top: 21px;\n  left: 17px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform-origin: center center;\n  border-radius: 16px;\n  padding: 0;\n  margin: 0;\n  color: var(--pcm-body-action-color);\n  background: var(--pcm-body-background);\n  transition: background-color 200ms ease;\n  background: var(--pcm-body-background-secondary);\n  border: none;\n  svg {\n    display: block;\n    position: relative;\n    left: -1px;\n  }\n\n  &:active {\n    transform: scale(0.9);\n    svg {\n      left: 0px;\n    }\n  }\n",
        ]);
        return (
          (ni = function () {
            return n;
          }),
          n
        );
      }
      function no() {
        let n = (0, a._)([
          "\n  z-index: 3;\n  cursor: pointer;\n  position: absolute;\n  top: 21px;\n  right: 17px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 16px;\n  padding: 0;\n  margin: 0;\n  color: var(--pcm-body-action-color);\n  background: var(--pcm-body-background);\n  transition: background-color 200ms ease;\n  background: var(--pcm-body-background-secondary);\n  border: none;\n  svg {\n    display: block;\n  }\n  &:active {\n    transform: scale(0.9);\n  }\n",
        ]);
        return (
          (no = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        let n = (0, a._)([
          "\n  z-index: 3;\n  pointer-events: none;\n  user-select: none;\n  position: absolute;\n  top: 12px;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  transform: translateX(-50%);\n  width: 100%;\n  text-align: center;\n  font-size: 17px;\n  line-height: 20px;\n  padding: 0 24px;\n  font-weight: var(--pcm-modal-heading-font-weight, 600);\n  color: var(--pcm-body-color);\n  span {\n    display: inline-block;\n  }\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      function nl() {
        let n = (0, a._)([
          "\n  background: var(--pcm-error-background);\n  color: var(--pcm-error-color);\n  text-align: center;\n  height: 28px;\n  margin: 0 24px;\n  line-height: 28px;\n  border-radius: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  padding: 0 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  svg {\n    display: inline-block;\n    margin-right: 8px;\n  }\n",
        ]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function na() {
        let n = (0, a._)([
          "\n  display: ",
          ";\n  width: 100%;\n  margin: 16px auto;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  animation: ",
          " 200ms ease-out both;\n",
        ]);
        return (
          (na = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        let n = (0, a._)(["\n  position: relative;\n  padding: 0;\n"]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",
          "px;\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function nd() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: ",
          "px;\n",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function nu() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: ",
          "px;\n",
        ]);
        return (
          (nu = function () {
            return n;
          }),
          n
        );
      }
      function np() {
        let n = (0, a._)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: ",
          "px;\n",
        ]);
        return (
          (np = function () {
            return n;
          }),
          n
        );
      }
      function ng() {
        let n = (0, a._)([
          "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
        ]);
        return (
          (ng = function () {
            return n;
          }),
          n
        );
      }
      function nM() {
        let n = (0, a._)([
          "\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: ",
          ";\n  height: ",
          ";\n  margin: 6px;\n  border-style: solid;\n  border-radius: 50%;\n  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n",
        ]);
        return (
          (nM = function () {
            return n;
          }),
          n
        );
      }
      function nC() {
        let n = (0, a._)([
          "\n  text-align: center;\n  margin-top: 40px;\n  color: var(--pcm-body-color-secondary);\n  font-size: 14px;\n",
        ]);
        return (
          (nC = function () {
            return n;
          }),
          n
        );
      }
      function nh() {
        let n = (0, a._)([
          "\n  color: var(--pcm-accent-color);\n  margin-top: 6px;\n  cursor: ",
          ";\n  display: flex;\n  gap: 0px;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  position: relative;\n  height: 24px;\n",
        ]);
        return (
          (nh = function () {
            return n;
          }),
          n
        );
      }
      function nx() {
        let n = (0, a._)(["\n  position: relative;\n  padding-top: 10px;\n"]);
        return (
          (nx = function () {
            return n;
          }),
          n
        );
      }
      function nj() {
        let n = (0, a._)([
          "\n  position: relative;\n  width: 96%;\n  left: 2%;\n  top: 0;\n  margin-bottom: 30px;\n",
        ]);
        return (
          (nj = function () {
            return n;
          }),
          n
        );
      }
      function nf() {
        let n = (0, a._)([
          "\n  background: var(--pcm-error-background);\n  border-radius: 28px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  color: var(--pcm-error-color);\n  padding: 8px 8px;\n  line-height: 1.2;\n  display: flex;\n",
        ]);
        return (
          (nf = function () {
            return n;
          }),
          n
        );
      }
      function ny() {
        let n = (0, a._)(["\n  min-width: 20px;\n  width: 20px;\n"]);
        return (
          (ny = function () {
            return n;
          }),
          n
        );
      }
      function nm() {
        let n = (0, a._)(["\n  flex: 1;\n  font-size: 12px;\n"]);
        return (
          (nm = function () {
            return n;
          }),
          n
        );
      }
      function nw() {
        let n = (0, a._)(["\n  font-size: 14px;\n"]);
        return (
          (nw = function () {
            return n;
          }),
          n
        );
      }
      function nI() {
        let n = (0, a._)([
          "\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 4px;\n",
        ]);
        return (
          (nI = function () {
            return n;
          }),
          n
        );
      }
      function nN() {
        let n = (0, a._)([
          "\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n  height: 80px;\n  position: relative;\n",
        ]);
        return (
          (nN = function () {
            return n;
          }),
          n
        );
      }
      function nD() {
        let n = (0, a._)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);
        return (
          (nD = function () {
            return n;
          }),
          n
        );
      }
      function nv() {
        let n = (0, a._)([
          "\n  position: relative;\n  width: 70px;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
        ]);
        return (
          (nv = function () {
            return n;
          }),
          n
        );
      }
      function nk() {
        let n = (0, a._)([
          "\n  display: inline-block;\n  animation: spin 1.2s linear infinite;\n  position: absolute;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
        ]);
        return (
          (nk = function () {
            return n;
          }),
          n
        );
      }
      function nL() {
        let n = (0, a._)([
          "\n  z-index: 4;\n  position: relative;\n  overflow: hidden;\n  svg {\n    z-index: 3;\n    position: relative;\n    display: block;\n  }\n",
        ]);
        return (
          (nL = function () {
            return n;
          }),
          n
        );
      }
      function nT() {
        let n = (0, a._)([
          "\n  z-index: 2;\n  position: absolute;\n  overflow: hidden;\n  inset: ",
          "px;\n  border-radius: 16px;\n  background: var(--pcm-body-background);\n  svg,\n  img {\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (nT = function () {
            return n;
          }),
          n
        );
      }
      function nb() {
        let n = (0, a._)([
          "\n  position: absolute;\n  inset: 1px;\n  /* overflow: hidden; */\n",
        ]);
        return (
          (nb = function () {
            return n;
          }),
          n
        );
      }
      function nA() {
        let n = (0, a._)([
          "\n  pointer-events: none;\n  user-select: none;\n  z-index: 1;\n  position: absolute;\n  inset: -25%;\n  &:before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: conic-gradient(\n      from -90deg,\n      transparent,\n      transparent,\n      transparent,\n      transparent,\n      transparent,\n      var(--pcm-accent-color)\n    );\n    animation: rotateSpinner 1200ms linear infinite;\n  }\n  @keyframes rotateSpinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
        ]);
        return (
          (nA = function () {
            return n;
          }),
          n
        );
      }
      function nz() {
        let n = (0, a._)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n",
        ]);
        return (
          (nz = function () {
            return n;
          }),
          n
        );
      }
      function nE() {
        let n = (0, a._)([
          "\n  0%{ transform:none; }\n  25%{ transform:translateX(",
          "px); }\n  50%{ transform:translateX(-",
          "px); }\n  75%{ transform:translateX(",
          "px); }\n  100%{ transform:none; }\n",
        ]);
        return (
          (nE = function () {
            return n;
          }),
          n
        );
      }
      function nO() {
        let n = (0, a._)(["\n  0%{ opacity:1; }\n  100%{ opacity:0; }\n"]);
        return (
          (nO = function () {
            return n;
          }),
          n
        );
      }
      function nS() {
        let n = (0, a._)([
          "\n        inset: -5px;\n        border-radius: 50%;\n        background: none;\n        box-shadow: inset 0 0 0 3.5px var(--pcm-error-color);\n      ",
        ]);
        return (
          (nS = function () {
            return n;
          }),
          n
        );
      }
      function nU() {
        let n = (0, a._)([
          "\n      animation: ",
          " 220ms ease-out both;\n      &:before {\n        animation: ",
          " 220ms ease-out 750ms both;\n      }\n    ",
        ]);
        return (
          (nU = function () {
            return n;
          }),
          n
        );
      }
      function nZ() {
        let n = (0, a._)([
          "\n  user-select: none;\n  position: relative;\n  --spinner-error-opacity: 0;\n  &:before {\n    content: '';\n    position: absolute;\n    inset: 1px;\n    opacity: 0;\n    background: var(--pcm-error-color);\n    ",
          "\n  }\n  ",
          "\n",
        ]);
        return (
          (nZ = function () {
            return n;
          }),
          n
        );
      }
      function nF() {
        let n = (0, a._)([
          "\n  z-index: 5;\n  appearance: none;\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 16px;\n  cursor: pointer;\n  overflow: hidden;\n  background: none;\n  border: none;\n  color: var(--pcm-body-background);\n  transition: color 200ms ease;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n\n  &:before {\n    z-index: 3;\n    content: '';\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    transition: opacity 200ms ease;\n    background: var(--pcm-body-color);\n  }\n\n  &:hover:before {\n    opacity: 0.1;\n  }\n",
        ]);
        return (
          (nF = function () {
            return n;
          }),
          n
        );
      }
      function nP() {
        let n = (0, a._)([
          "\n  position: absolute;\n  inset: 0;\n\n  &:before {\n    z-index: 1;\n    content: '';\n    position: absolute;\n    inset: 3px;\n    border-radius: 16px;\n    background: conic-gradient(from 90deg, currentColor 10%, var(--pcm-accent-color) 80%);\n  }\n\n  svg {\n    z-index: 2;\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      function nQ() {
        let n = (0, a._)([
          "\n  position: relative;\n  padding: 0;\n  margin-top: 28px;\n  scale: 0.95;\n  opacity: 0;\n  will-change: transform, height;\n  color: var(--pcm-body-color);\n  padding-bottom: 16px;\n\n  div:first-child {\n    font-weight: 500;\n    margin-bottom: 10px;\n    font-size: 16px;\n  }\n\n  span {\n    color: var(--pcm-body-color-secondary);\n    white-space: pre-wrap;\n    font-size: 14px;\n  }\n",
        ]);
        return (
          (nQ = function () {
            return n;
          }),
          n
        );
      }
      function nV() {
        let n = (0, a._)([
          "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n",
        ]);
        return (
          (nV = function () {
            return n;
          }),
          n
        );
      }
      function nH() {
        let n = (0, a._)([
          "\n  height: 22px;\n  width: 22px;\n  border-radius: 6px;\n  overflow: hidden;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (nH = function () {
            return n;
          }),
          n
        );
      }
      function nY() {
        let n = (0, a._)([
          "\n  position: absolute;\n  margin: auto 16px;\n  right: 0;\n  height: 25px;\n  background: ",
          ";\n  color: ",
          ";\n  font-size: 12px;\n  font-weight: 300;\n  text-align: center;\n  line-height: 25px;\n  padding: 0 10px 0 21px;\n  border-radius: 25px;\n  max-width: 40%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition-property: opacity, transform;\n  opacity: 1;\n  transition-duration: 200ms;\n\n  &:before {\n    content: '';\n    position: absolute;\n    height: 7px;\n    width: 7px;\n    background: ",
          ";\n    border-radius: 50%;\n    top: 9px;\n    left: 10px;\n  }\n",
        ]);
        return (
          (nY = function () {
            return n;
          }),
          n
        );
      }
      function n_() {
        let n = (0, a._)([
          "\n  margin: auto 0;\n  position: absolute;\n  right: 26px;\n  opacity: 0;\n  transition-property: opacity, transform;\n  transition-duration: 200ms;\n  color: var(--pcm-body-color);\n",
        ]);
        return (
          (n_ = function () {
            return n;
          }),
          n
        );
      }
      function nW() {
        let n = (0, a._)([
          "\n  width: 100%;\n  height: 47px;\n  border: 1px solid var(--pcm-button-border-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  border-radius: var(--pcm-rounded-lg);\n  gap: 12px;\n  position: relative;\n  user-select: none;\n\n  @media only screen and (min-width: 560px) {\n    &:hover {\n      box-shadow: var(--pcm-button-hover-shadow);\n      ",
          " {\n        opacity: 0;\n        transform: translateX(-15px);\n      }\n\n      ",
          " {\n        opacity: 1;\n        transform: translateX(10px);\n      }\n    }\n  }\n\n  @media only screen and (max-width: 560px) {\n    &:hover:active {\n      box-shadow: var(--pcm-button-hover-shadow);\n      ",
          " {\n        opacity: 0;\n        transform: translateX(-15px);\n      }\n\n      ",
          " {\n        opacity: 1;\n        transform: translateX(10px);\n      }\n    }\n  }\n  &.all-wallets-btn {\n    background: var(--pcm-body-background-secondary);\n    border: none;\n    font-weight: 500;\n    &:hover {\n      box-shadow: none;\n    }\n  }\n",
        ]);
        return (
          (nW = function () {
            return n;
          }),
          n
        );
      }
      function nB() {
        let n = (0, a._)(["\nfrom { opacity: 0; }\n  to { opacity: 1; }\n"]);
        return (
          (nB = function () {
            return n;
          }),
          n
        );
      }
      function nR() {
        let n = (0, a._)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  transform: translateZ(0);\n  flex-wrap: wrap;\n  flex-direction: ",
          ";\n  gap: ",
          ";\n",
        ]);
        return (
          (nR = function () {
            return n;
          }),
          n
        );
      }
      function nG() {
        let n = (0, a._)([
          "\n        opacity: 0.5 !important;\n        cursor: not-allowed !important;\n        pointer-events: none !important;\n      ",
        ]);
        return (
          (nG = function () {
            return n;
          }),
          n
        );
      }
      function n$() {
        let n = (0, a._)([""]);
        return (
          (n$ = function () {
            return n;
          }),
          n
        );
      }
      function nJ() {
        let n = (0, a._)([
          "\n        padding: 0;\n        width: 46px;\n        border-radius: var(--pcm-rounded-full);\n        justify-content: center;\n      ",
        ]);
        return (
          (nJ = function () {
            return n;
          }),
          n
        );
      }
      function nK() {
        let n = (0, a._)([
          "\n      padding-left: 16px;\n      padding-right: 16px;\n      width: 100%;\n      border-radius: var(--pcm-rounded-lg);\n      justify-content: flex-start;\n      ",
          " {\n        svg {\n          height: inherit;\n          width: inherit;\n        }\n      }\n      @media only screen and (min-width: 560px) {\n        &:hover {\n          ",
          " {\n            opacity: 0;\n            transform: translateX(-15px);\n          }\n          ",
          " {\n            opacity: 1;\n            transform: translateX(10px);\n          }\n        }\n      }\n\n      @media only screen and (max-width: 560px) {\n        &:hover:active {\n          ",
          " {\n            opacity: 0;\n            transform: translateX(-15px);\n          }\n          ",
          " {\n            opacity: 1;\n            transform: translateX(10px);\n          }\n        }\n      }\n    ",
        ]);
        return (
          (nK = function () {
            return n;
          }),
          n
        );
      }
      function nX() {
        let n = (0, a._)([
          "\n          height: 30px;\n          width: 30px;\n        ",
        ]);
        return (
          (nX = function () {
            return n;
          }),
          n
        );
      }
      function nq() {
        let n = (0, a._)([
          "\n        height: 22px;\n        width: 22px;\n      ",
        ]);
        return (
          (nq = function () {
            return n;
          }),
          n
        );
      }
      function n1() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 46px;\n  border: 1px solid var(--pcm-button-border-color);\n  transition: 0.2s ease width;\n  cursor: pointer;\n  opacity: 0;\n  animation: ",
          " 300ms ease-out both;\n  position: relative;\n  user-select: none;\n\n  ",
          "\n\n  ",
          "\n\n  @media only screen and (min-width: 560px) {\n    &:hover {\n      box-shadow: var(--pcm-button-hover-shadow);\n    }\n  }\n\n  @media only screen and (max-width: 560px) {\n    &:hover:active {\n      box-shadow: var(--pcm-button-hover-shadow);\n    }\n  }\n\n  svg {\n    object-fit: cover;\n    ",
          "\n  }\n\n  span {\n    font-weight: 500;\n    font-size: 14px;\n    white-space: nowrap;\n    text-align: center;\n    text-transform: capitalize;\n    display: ",
          ";\n  }\n",
        ]);
        return (
          (n1 = function () {
            return n;
          }),
          n
        );
      }
      function n0() {
        let n = (0, a._)([
          "\n  height: 47px;\n  width: 47px;\n  cursor: pointer;\n  border-radius: var(--pcm-rounded-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--pcm-body-background-secondary);\n  opacity: 0;\n  animation: ",
          " 300ms ease-out both;\n\n  &:hover {\n    box-shadow: var(--pcm-button-hover-shadow);\n  }\n  svg {\n    height: 25px;\n    width: 25px;\n    object-fit: cover;\n  }\n",
        ]);
        return (
          (n0 = function () {
            return n;
          }),
          n
        );
      }
      function n2() {
        let n = (0, a._)([
          "\n        background: var(--pcm-primary-button-bankground);\n        color: var(--pcm-primary-button-color);\n        &:hover {\n          background: var(--pcm-primary-button-hover-background);\n        }\n      ",
        ]);
        return (
          (n2 = function () {
            return n;
          }),
          n
        );
      }
      function n4() {
        let n = (0, a._)([
          "\n        background: var(--pcm-secondary-button-bankground);\n        color: var(--pcm-secondary-button-color);\n        &:hover {\n          background: var(--pcm-secondary-button-hover-background);\n        }\n      ",
        ]);
        return (
          (n4 = function () {
            return n;
          }),
          n
        );
      }
      function n3() {
        let n = (0, a._)([
          "\n      cursor: not-allowed;\n      pointer-events: none;\n      opacity: 0.5;\n      div {\n        opacity: 0.5;\n      }\n    ",
        ]);
        return (
          (n3 = function () {
            return n;
          }),
          n
        );
      }
      function n5() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  cursor: pointer;\n  width: 100%;\n\n  border-radius: var(--pcm-rounded-lg);\n  font-weight: var(--pcm-button-font-weight);\n  height: 47px;\n  border: none;\n\n  ",
          "\n\n  ",
          "\n\n  &:hover {\n    box-shadow: var(--pcm-button-hover-shadow);\n  }\n",
        ]);
        return (
          (n5 = function () {
            return n;
          }),
          n
        );
      }
      function n6() {
        let n = (0, a._)([
          "\n  display: inline-block;\n  margin-right: 8px;\n",
        ]);
        return (
          (n6 = function () {
            return n;
          }),
          n
        );
      }
      function n9() {
        let n = (0, a._)([
          "\n        overflow: hidden;\n        border-radius: var(--pcm-rounded-sm);\n      ",
        ]);
        return (
          (n9 = function () {
            return n;
          }),
          n
        );
      }
      function n7() {
        let n = (0, a._)([
          "\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 20px;\n  max-height: 20px;\n  margin: 0 10px;\n  &:first-child {\n    margin-left: 0;\n  }\n  &:last-child {\n    margin-right: 0;\n  }\n  ",
          "\n  svg {\n    display: block;\n    position: relative;\n    max-width: 100%;\n    height: auto;\n  }\n",
        ]);
        return (
          (n7 = function () {
            return n;
          }),
          n
        );
      }
      function n8() {
        let n = (0, a._)([
          "\n  z-index: 3;\n  position: relative;\n  overflow: hidden;\n  height: 0;\n  padding-bottom: 100% !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1px 0 2px;\n  border-radius: var(--pcm-rounded-lg);\n  background: var(--pcm-body-background);\n  box-shadow: 0 0 0 1px var(--pcm-button-border-color);\n  backface-visibility: hidden;\n  svg {\n    display: block;\n    max-width: 100%;\n    width: 100%;\n    height: auto;\n  }\n",
        ]);
        return (
          (n8 = function () {
            return n;
          }),
          n
        );
      }
      function en() {
        let n = (0, a._)([
          "\n  position: absolute;\n  inset: 13px;\n  svg {\n    width: 100% !important;\n    height: auto !important;\n  }\n",
        ]);
        return (
          (en = function () {
            return n;
          }),
          n
        );
      }
      function ee() {
        let n = (0, a._)([
          "\n  0%{ background-position: 100% 0; }\n  100%{ background-position: -100% 0; }\n",
        ]);
        return (
          (ee = function () {
            return n;
          }),
          n
        );
      }
      function et() {
        let n = (0, a._)(["\n        animation: none;\n      "]);
        return (
          (et = function () {
            return n;
          }),
          n
        );
      }
      function ei() {
        let n = (0, a._)([
          "\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  > div {\n    z-index: 4;\n    position: relative;\n    width: 28%;\n    height: 28%;\n    border-radius: 20px;\n    background: #fff;\n    box-shadow: 0 0 0 7px #fff;\n  }\n  > span {\n    z-index: 4;\n    position: absolute;\n    background: var(--pcm-body-color-secondary);\n    border-radius: var(--pcm-rounded-lg);\n    width: 13.25%;\n    height: 13.25%;\n    box-shadow: 0 0 0 4px #fff;\n    &:before {\n      content: '';\n      position: absolute;\n      inset: 9px;\n      border-radius: 3px;\n      box-shadow: 0 0 0 4px #fff;\n    }\n    &:nth-child(1) {\n      top: 0;\n      left: 0;\n    }\n    &:nth-child(2) {\n      top: 0;\n      right: 0;\n    }\n    &:nth-child(3) {\n      bottom: 0;\n      left: 0;\n    }\n  }\n  &:before {\n    z-index: 3;\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: repeat;\n    background-size: 1.888% 1.888%;\n    background-image: radial-gradient(var(--pcm-body-color-secondary) 41%, transparent 41%);\n  }\n  &:after {\n    z-index: 5;\n    content: '';\n    position: absolute;\n    inset: 0;\n    transform: scale(1.6) rotate(45deg);\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 50%,\n      rgba(255, 255, 255, 1),\n      rgba(255, 255, 255, 0)\n    );\n    background-size: 200% 100%;\n    animation: ",
          " 1000ms linear infinite both;\n    ",
          "\n  }\n",
        ]);
        return (
          (ei = function () {
            return n;
          }),
          n
        );
      }
      function eo() {
        let n = (0, a._)([
          "\n  z-index: 6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: translateY(50%) scale(0.9999); // Shifting fix\n",
        ]);
        return (
          (eo = function () {
            return n;
          }),
          n
        );
      }
      function er() {
        let n = (0, a._)([
          "\n          width: 29%;\n          height: 20.5%;\n        ",
        ]);
        return (
          (er = function () {
            return n;
          }),
          n
        );
      }
      function el() {
        let n = (0, a._)([
          "\n          width: 24%;\n          height: 24%;\n          border-radius: 17px;\n          &:before {\n            pointer-events: none;\n            z-index: 2;\n            content: '';\n            position: absolute;\n            inset: 0;\n            border-radius: inherit;\n            /* box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02); */\n          }\n        ",
        ]);
        return (
          (el = function () {
            return n;
          }),
          n
        );
      }
      function ea() {
        let n = (0, a._)([
          "\n  z-index: 6;\n  position: absolute;\n  left: 50%;\n  overflow: hidden;\n\n  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix\n\n  svg {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 100% !important;\n  }\n\n  ",
          "\n",
        ]);
        return (
          (ea = function () {
            return n;
          }),
          n
        );
      }
      function es() {
        let n = (0, a._)([
          "\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  top: 50%;\n  left: 50%;\n  transform: translate(12px, 12px);\n  z-index: 10;\n  border-radius: 9999px;\n  cursor: pointer;\n  button {\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (es = function () {
            return n;
          }),
          n
        );
      }
      function ec() {
        let n = (0, a._)([
          "\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n\n  .btn-wrap {\n    display: flex;\n    gap: 14px;\n    align-items: center;\n    justify-content: center;\n    .label {\n      width: 180px;\n      text-align: left;\n      color: var(--pcm-body-color);\n    }\n    img {\n      width: 22px;\n      height: 22px;\n      object-fit: contain;\n    }\n  }\n",
        ]);
        return (
          (ec = function () {
            return n;
          }),
          n
        );
      }
      function ed() {
        let n = (0, a._)([
          "\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  margin-bottom: 36px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (ed = function () {
            return n;
          }),
          n
        );
      }
      function eu() {
        let n = (0, a._)([
          "\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 8px;\n  color: var(--pcm-body-color);\n",
        ]);
        return (
          (eu = function () {
            return n;
          }),
          n
        );
      }
      function ep() {
        let n = (0, a._)([
          "\n  color: var(--pcm-body-color-secondary);\n  margin-bottom: 32px;\n  font-weight: 400;\n",
        ]);
        return (
          (ep = function () {
            return n;
          }),
          n
        );
      }
      function eg() {
        let n = (0, a._)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 20px;\n\n  button {\n    border-radius: var(--pcm-rounded-lg);\n    border: 1px solid #eaecf0;\n    background-color: #fff;\n    color: #000;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 300;\n    height: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:hover {\n      background-color: #fff;\n    }\n  }\n",
        ]);
        return (
          (eg = function () {
            return n;
          }),
          n
        );
      }
      function eM() {
        let n = (0, a._)([
          "\n  color: var(--pcm-body-color-secondary);\n  margin-bottom: 0px;\n",
        ]);
        return (
          (eM = function () {
            return n;
          }),
          n
        );
      }
      function eC() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 30px 0;\n  margin-bottom: 20px;\n  color: var(--pcm-accent-color);\n",
        ]);
        return (
          (eC = function () {
            return n;
          }),
          n
        );
      }
      function eh() {
        let n = (0, a._)([
          "\n  text-align: center;\n  font-size: 14px;\n  color: var(--pcm-body-color);\n  margin-top: 16px;\n  margin-bottom: 40px;\n",
        ]);
        return (
          (eh = function () {
            return n;
          }),
          n
        );
      }
      function ex() {
        let n = (0, a._)(["\n  margin: 0 auto;\n"]);
        return (
          (ex = function () {
            return n;
          }),
          n
        );
      }
      function ej() {
        let n = (0, a._)([
          "\n  text-align: center;\n  color: var(--pcm-body-color-secondary);\n  margin-top: 12px;\n  width: 90%;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  line-height: 1.2;\n",
        ]);
        return (
          (ej = function () {
            return n;
          }),
          n
        );
      }
      function ef() {
        let n = (0, a._)([
          "\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 34px;\n",
        ]);
        return (
          (ef = function () {
            return n;
          }),
          n
        );
      }
      function ey() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 26px;\n  gap: 12px;\n  svg {\n    color: var(--pcm-body-color);\n    circle {\n      fill: var(--pcm-body-color-secondary);\n    }\n  }\n",
        ]);
        return (
          (ey = function () {
            return n;
          }),
          n
        );
      }
      function em() {
        let n = (0, a._)(["\n  font-size: 24px;\n  margin-right: 16px;\n"]);
        return (
          (em = function () {
            return n;
          }),
          n
        );
      }
      function ew() {
        let n = (0, a._)(["\n  flex: 1;\n"]);
        return (
          (ew = function () {
            return n;
          }),
          n
        );
      }
      function eI() {
        let n = (0, a._)(["\n  font-size: 14px;\n  margin-bottom: 4px;\n"]);
        return (
          (eI = function () {
            return n;
          }),
          n
        );
      }
      function eN() {
        let n = (0, a._)([
          "\n  color: var(--pcm-body-color-secondary);\n  line-height: 1.2;\n  margin: 0;\n  font-size: 14px;\n",
        ]);
        return (
          (eN = function () {
            return n;
          }),
          n
        );
      }
      function eD() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: flex-start;\n  border-radius: 4px;\n  margin-bottom: 34px;\n  gap: 10px;\n  line-height: 1.2;\n  font-size: 14px;\n\n  svg {\n    width: 18px;\n    height: 18px;\n    path {\n      fill: #f4940e;\n    }\n  }\n",
        ]);
        return (
          (eD = function () {
            return n;
          }),
          n
        );
      }
      function ev() {
        let n = (0, a._)(["\n  font-size: 24px;\n  margin-right: 12px;\n"]);
        return (
          (ev = function () {
            return n;
          }),
          n
        );
      }
      function ek() {
        let n = (0, a._)(["\n  margin: 0;\n"]);
        return (
          (ek = function () {
            return n;
          }),
          n
        );
      }
      function eL() {
        let n = (0, a._)([
          "\n          svg {\n            transition-delay: 0ms;\n            path:first-child {\n              opacity: 0;\n              transform: rotate(-90deg) scale(0.2);\n            }\n            rect {\n              rx: 10px;\n              fill: var(--pcm-accent-color);\n              stroke: var(--pcm-accent-color);\n              transform: rotate(-90deg) scale(1.45);\n            }\n            path:last-child {\n              transition-delay: 100ms;\n              opacity: 1;\n              transform: translate(7.75px, 9.5px);\n            }\n          }\n        ",
        ]);
        return (
          (eL = function () {
            return n;
          }),
          n
        );
      }
      function eT() {
        let n = (0, a._)([
          "\n          &:hover {\n          }\n          &:hover:active {\n          }\n        ",
        ]);
        return (
          (eT = function () {
            return n;
          }),
          n
        );
      }
      function eb() {
        let n = (0, a._)([
          "\n  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 24px;\n  svg {\n    display: block;\n  }\n  svg,\n  svg path,\n  svg rect {\n    transition: inherit;\n  }\n  svg path:first-child {\n    transform-origin: 50% 50%;\n    fill: var(--pcm-body-background);\n    stroke: var(--pcm-body-color-secondary);\n  }\n  svg rect {\n    transform-origin: 53% 63%;\n    fill: var(--pcm-body-background);\n    stroke: var(--pcm-body-color-secondary);\n  }\n  svg path:last-child {\n    opacity: 0;\n    stroke: #fff !important;\n    transform: translate(11.75px, 10px) rotate(90deg) scale(0.6);\n  }\n  ",
          "\n",
        ]);
        return (
          (eb = function () {
            return n;
          }),
          n
        );
      }
      function eA() {
        let n = (0, a._)([
          "\n          cursor: not-allowed;\n          opacity: 0.4;\n        ",
        ]);
        return (
          (eA = function () {
            return n;
          }),
          n
        );
      }
      function ez() {
        let n = (0, a._)(["\n          &:hover {\n          }\n        "]);
        return (
          (ez = function () {
            return n;
          }),
          n
        );
      }
      function eE() {
        let n = (0, a._)([
          "\n  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  ",
          "\n",
        ]);
        return (
          (eE = function () {
            return n;
          }),
          n
        );
      }
      function eO() {
        let n = (0, a._)([
          "\n  display: flex;\n  gap: 4px;\n  position: relative;\n  transition: inherit;\n  align-items: center;\n  /* svg {\n    position: absolute;\n    display: block;\n    top: -2px;\n    margin: 0;\n    margin-left: 4px;\n  } */\n",
        ]);
        return (
          (eO = function () {
            return n;
          }),
          n
        );
      }
      function eS() {
        let n = (0, a._)([
          "\n  padding: 15px 0px;\n  padding-top: 30px;\n  padding-bottom: 0;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n",
        ]);
        return (
          (eS = function () {
            return n;
          }),
          n
        );
      }
      function eU() {
        let n = (0, a._)([
          "\n  color: red;\n  font-size: 14px;\n  max-width: 90%;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n",
        ]);
        return (
          (eU = function () {
            return n;
          }),
          n
        );
      }
      function eZ() {
        let n = (0, a._)([
          "\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 100%;\n  padding: 0 30px;\n",
        ]);
        return (
          (eZ = function () {
            return n;
          }),
          n
        );
      }
      function eF() {
        let n = (0, a._)([
          "\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 14px;\n  text-align: center;\n  color: var(--pcm-body-color-secondary);\n  max-width: 80%;\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin-left: auto;\n  margin-right: auto;\n",
        ]);
        return (
          (eF = function () {
            return n;
          }),
          n
        );
      }
      function eP() {
        let n = (0, a._)([
          "\n  width: 100%;\n  margin-top: 20px;\n\n  svg {\n    .bg {\n      fill: var(--pcm-primary-button-hover-background) !important;\n      stroke: var(--pcm-primary-button-color) !important;\n    }\n    path {\n      stroke: var(--pcm-primary-button-color) !important;\n    }\n  }\n  .copied {\n    svg {\n      .bg {\n        fill: var(--pcm-accent-color) !important;\n        stroke: var(--pcm-accent-color) !important;\n      }\n    }\n  }\n",
        ]);
        return (
          (eP = function () {
            return n;
          }),
          n
        );
      }
      function eQ() {
        let n = (0, a._)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  color: var(--pcm-body-color-tertiary);\n  font-weight: 400;\n  font-size: 12px;\n  margin: 20px 0;\n  pointer-events: none;\n  user-select: none;\n  white-space: nowrap;\n\n  &:before {\n    content: '';\n    transition: all 200ms ease;\n    height: 1px;\n    width: 100%;\n    background: var(--pcm-body-background-tertiary);\n  }\n\n  &:after {\n    content: '';\n    transition: all 200ms ease;\n    height: 1px;\n    width: 100%;\n    background: var(--pcm-body-background-tertiary);\n  }\n",
        ]);
        return (
          (eQ = function () {
            return n;
          }),
          n
        );
      }
      function eV() {
        let n = (0, a._)(["\n  width: 100%;\n"]);
        return (
          (eV = function () {
            return n;
          }),
          n
        );
      }
      function eH() {
        let n = (0, a._)(["\n  position: relative;\n"]);
        return (
          (eH = function () {
            return n;
          }),
          n
        );
      }
      function eY() {
        let n = (0, a._)([
          "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 12px;\n  cursor: pointer;\n  border-radius: 100%;\n\n  ",
          "\n\n  ",
          "\n",
        ]);
        return (
          (eY = function () {
            return n;
          }),
          n
        );
      }
      function e_() {
        let n = (0, a._)([
          "\n  border-radius: var(--pcm-rounded-lg);\n  height: 47px;\n  padding: 0 12px;\n  width: 100%;\n  font-size: 15px;\n  font-weight: normal;\n  background-color: ",
          ";\n  color: ",
          ";\n  border: none;\n  &::placeholder {\n    color: var(--pcm-body-color-tertiary);\n  }\n",
        ]);
        return (
          (e_ = function () {
            return n;
          }),
          n
        );
      }
      function eW() {
        let n = (0, a._)([
          "\n  color: var(--pcm-error-color);\n  font-size: 12px;\n  display: flex;\n  padding-left: 14px;\n  margin-top: 14px;\n  align-items: center;\n  line-height: 16px;\n  div:nth-child(1) {\n    min-width: 20px;\n  }\n",
        ]);
        return (
          (eW = function () {
            return n;
          }),
          n
        );
      }
      function eB() {
        let n = (0, a._)(["\n    ", "\n  "]);
        return (
          (eB = function () {
            return n;
          }),
          n
        );
      }
      function eR() {
        let n = (0, a._)([
          "\n        @media (prefers-color-scheme: light) {\n          ",
          "\n        }\n        @media (prefers-color-scheme: dark) {\n          ",
          "\n        }\n      ",
        ]);
        return (
          (eR = function () {
            return n;
          }),
          n
        );
      }
      function eG() {
        let n = (0, a._)([
          "\n  ",
          "\n\n  ",
          "\n  \n\n  ",
          "\n\n\n  ",
          "\n\n\n  all: initial;\n  text-align: left;\n  text-direction: ltr;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: auto;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-text-stroke: 0.001px transparent;\n  text-size-adjust: none;\n  font-size: 16px;\n  color: var(--pcm-body-color);\n\n  &,\n  * {\n    font-family: var(--pcm-font-family);\n    box-sizing: border-box;\n\n    &:after,\n    &:before {\n      box-sizing: border-box;\n      border: 0 solid #e5e7eb;\n    }\n  }\n\n  img,\n  svg {\n    max-width: 100%;\n    overflow: visible;\n  }\n  strong {\n    font-weight: 600;\n  }\n  input:focus-visible,\n  a:focus-visible,\n  button:focus-visible {\n    outline: 1px solid var(--pcm-focus-color, var(--pcm-accent-color));\n  }\n\n  input {\n    caret-color: var(--pcm-focus-color, var(--pcm-accent-color));\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
        ]);
        return (
          (eG = function () {
            return n;
          }),
          n
        );
      }
      function e$() {
        let n = (0, a._)([
          "\n  position: absolute;\n  top: ",
          "px;\n  left: 0%;\n  box-shadow: var(--pcm-modal-box-shadow);\n  background: var(--pcm-body-background);\n  border-radius: var(--pcm-rounded-lg);\n  z-index: 10;\n  overflow: hidden;\n",
        ]);
        return (
          (e$ = function () {
            return n;
          }),
          n
        );
      }
      function eJ() {
        let n = (0, a._)([
          "\n  flex-shrink: 0;\n  padding: 8px;\n  overflow-y: auto;\n  position: relative;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (eJ = function () {
            return n;
          }),
          n
        );
      }
      function eK() {
        let n = (0, a._)([
          "\n  height: 36px;\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 8px;\n  padding-right: 30px;\n  position: relative;\n  border-radius: var(--pcm-rounded-sm);\n  align-items: center;\n  z-index: 2;\n  cursor: pointer;\n  ",
          "\n",
        ]);
        return (
          (eK = function () {
            return n;
          }),
          n
        );
      }
      function eX() {
        let n = (0, a._)([
          "\n  position: absolute;\n  right: 11px;\n  top: 50%;\n  transform: translateY(-60%);\n",
        ]);
        return (
          (eX = function () {
            return n;
          }),
          n
        );
      }
      function eq() {
        let n = (0, a._)(["\n  font-size: 12px;\n"]);
        return (
          (eq = function () {
            return n;
          }),
          n
        );
      }
      function e1() {
        let n = (0, a._)([
          "\n  pointer-events: none;\n  position: absolute;\n  top: ",
          "px;\n  left: 8px;\n  width: calc(100% - 16px);\n  height: ",
          ";\n  background-color: var(--pcm-accent-color);\n  opacity: 0.1;\n  border-radius: var(--pcm-rounded-sm);\n  z-index: 11;\n  display: ",
          ";\n  transition: top 0.1s;\n",
        ]);
        return (
          (e1 = function () {
            return n;
          }),
          n
        );
      }
      function e0() {
        let n = (0, a._)(["\n  width: 100%;\n"]);
        return (
          (e0 = function () {
            return n;
          }),
          n
        );
      }
      function e2() {
        let n = (0, a._)([
          "\n  border-radius: var(--pcm-rounded-lg);\n  height: 47px;\n  padding: 0;\n  background-color: ",
          ";\n  width: 100%;\n  font-size: 15px;\n  font-weight: normal;\n  display: flex;\n  align-items: center;\n  &::placeholder {\n    color: var(--pcm-body-color-tertiary);\n  }\n\n  ",
          "\n",
        ]);
        return (
          (e2 = function () {
            return n;
          }),
          n
        );
      }
      function e4() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 0 12px;\n\n  /* .phone-input {\n    flex: 1;\n    height: 100%;\n    padding-left: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n\n    input {\n      background-color: transparent;\n\n      &:focus {\n        outline: none;\n      }\n    }\n  } */\n",
        ]);
        return (
          (e4 = function () {
            return n;
          }),
          n
        );
      }
      function e3() {
        let n = (0, a._)([
          "\n  flex: 1;\n  height: 100%;\n  padding-left: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  color: ",
          ";\n\n  input {\n    background-color: transparent;\n    width: 100%;\n    color: var(--pcm-body-color);\n    border: none;\n    &:focus,\n    &:active,\n    &:focus-visible {\n      outline: none !important;\n    }\n    &::placeholder {\n      color: var(--pcm-body-color-tertiary);\n    }\n  }\n",
        ]);
        return (
          (e3 = function () {
            return n;
          }),
          n
        );
      }
      function e5() {
        let n = (0, a._)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (e5 = function () {
            return n;
          }),
          n
        );
      }
      function e6() {
        let n = (0, a._)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (e6 = function () {
            return n;
          }),
          n
        );
      }
      function e9() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  gap: 10px;\n  margin-right: 14px;\n  * {\n    font-family: system-ui !important;\n  }\n",
        ]);
        return (
          (e9 = function () {
            return n;
          }),
          n
        );
      }
      function e7() {
        let n = (0, a._)([
          "\n  position: relative;\n  top: 1px;\n  display: flex;\n  align-items: center;\n",
        ]);
        return (
          (e7 = function () {
            return n;
          }),
          n
        );
      }
      function e8() {
        let n = (0, a._)([
          "\n  position: absolute;\n  z-index: 2;\n  left: -1px;\n  width: calc(100% + 2px);\n  /* max-height: ",
          "px; */\n  border-radius: var(--pcm-rounded-lg) !important;\n  overflow: hidden;\n  background-color: var(--pcm-body-background-tertiary);\n  padding-top: 8px;\n  color: var(--pcm-body-color);\n  box-shadow: var(--pcm-modal-box-shadow);\n  padding-bottom: 8px;\n\n  /* ",
          " */\n\n  &::-webkit-scrollbar {\n    display: none;\n    width: 0;\n  }\n",
        ]);
        return (
          (e8 = function () {
            return n;
          }),
          n
        );
      }
      function tn() {
        let n = (0, a._)([
          "\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 12px 14px;\n  font-size: 14px;\n  /* position: sticky; */\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 46px;\n  top: 0;\n\n  cursor: pointer;\n\n  /* &:hover {\n    background-color: ",
          ";\n  } */\n\n  &.search-input-wrap {\n    z-index: 99;\n    padding: 0;\n    &:hover {\n      background: none !important;\n    }\n    .wrap {\n      background: var(--pcm-body-background-tertiary);\n      width: 100%;\n      padding: 0 14px;\n      padding-top: 4px;\n      padding-bottom: 10px;\n    }\n  }\n",
        ]);
        return (
          (tn = function () {
            return n;
          }),
          n
        );
      }
      function te() {
        let n = (0, a._)([
          "\n  width: 100%;\n  height: 36px;\n  padding: 0 16px;\n  border-radius: var(--pcm-rounded-lg);\n  overflow: hidden;\n  color: var(--pcm-body-color);\n  background-color: var(--pcm-body-background);\n  border: none;\n  &::placeholder {\n    color: var(--pcm-body-color-tertiary);\n  }\n",
        ]);
        return (
          (te = function () {
            return n;
          }),
          n
        );
      }
      function tt() {
        let n = (0, a._)([
          "\n  max-width: 80%;\n  display: flex;\n  align-items: center;\n",
        ]);
        return (
          (tt = function () {
            return n;
          }),
          n
        );
      }
      function ti() {
        let n = (0, a._)([
          "\n  width: 28px;\n  min-width: 28px;\n  font-family: system-ui;\n",
        ]);
        return (
          (ti = function () {
            return n;
          }),
          n
        );
      }
      function to() {
        let n = (0, a._)([
          "\n  font-weight: 500;\n  color: var(--pcm-body-color);\n",
        ]);
        return (
          (to = function () {
            return n;
          }),
          n
        );
      }
      function tr() {
        let n = (0, a._)(["\n  color: var(--pcm-body-color-secondary);\n"]);
        return (
          (tr = function () {
            return n;
          }),
          n
        );
      }
      function tl() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 47px;\n  color: var(--pcm-body-color-secondary);\n  font-size: 12px;\n",
        ]);
        return (
          (tl = function () {
            return n;
          }),
          n
        );
      }
      function ta() {
        let n = (0, a._)([
          "\n  width: 100%;\n  object-fit: contain;\n  height: 40px;\n  margin-bottom: 24px;\n  pointer-events: none;\n  user-select: none;\n",
        ]);
        return (
          (ta = function () {
            return n;
          }),
          n
        );
      }
      function ts() {
        let n = (0, a._)([
          "\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: normal;\n  margin-top: 12px;\n\n  span:first-child {\n    color: var(--pcm-body-color-secondary);\n  }\n  span:last-child {\n    color: var(--pcm-accent-color);\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (ts = function () {
            return n;
          }),
          n
        );
      }
      function tc() {
        let n = (0, a._)([
          "\n  position: relative;\n  display: inline-block;\n",
        ]);
        return (
          (tc = function () {
            return n;
          }),
          n
        );
      }
      function td() {
        let n = (0, a._)([
          "\n  display: inline-block;\n\n  border-radius: var(--pcm-rounded-lg);\n  background: var(--pcm-body-background);\n  box-shadow: var(--pcm-modal-box-shadow);\n  max-width: 400px;\n  vertical-align: middle;\n  line-height: normal;\n  padding: 5px 0px;\n  box-sizing: content-box;\n",
        ]);
        return (
          (td = function () {
            return n;
          }),
          n
        );
      }
      function tu() {
        let n = (0, a._)([
          "\n  cursor: ",
          ";\n  display: inline-block;\n  gap: 8px;\n  height: 28px;\n  margin: 0 10px;\n  padding: 0 6px;\n  border-radius: 6px;\n  background-color: var(--pcm-body-background);\n  transition: background-color 0.3s;\n\n  ",
          "\n  .wrap {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    height: 100%;\n  }\n",
        ]);
        return (
          (tu = function () {
            return n;
          }),
          n
        );
      }
      function tp() {
        let n = (0, a._)([
          "\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n",
        ]);
        return (
          (tp = function () {
            return n;
          }),
          n
        );
      }
      function tg() {
        let n = (0, a._)([
          "\n  font-size: 14px;\n  line-height: 1;\n  position: relative;\n  top: -1px;\n",
        ]);
        return (
          (tg = function () {
            return n;
          }),
          n
        );
      }
      function tM() {
        let n = (0, a._)([
          "\n  display: inline-block;\n  width: 1px;\n  height: 19px;\n  background: var(--pcm-secondary-button-bankground);\n",
        ]);
        return (
          (tM = function () {
            return n;
          }),
          n
        );
      }
      function tC() {
        let n = (0, a._)([
          "\n  display: inline-block;\n  gap: 8px;\n  height: 28px;\n  margin: 0 10px;\n  padding: 0 6px;\n  border-radius: 6px;\n  background-color: var(--pcm-body-background);\n  transition: background-color 0.3s;\n  position: relative;\n  top: 3px;\n  &:hover {\n    background-color: var(--pcm-body-background-secondary);\n  }\n  .wrap {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    height: 100%;\n  }\n",
        ]);
        return (
          (tC = function () {
            return n;
          }),
          n
        );
      }
      function th() {
        let n = (0, a._)(["\n  width: 20px;\n  height: 20px;\n"]);
        return (
          (th = function () {
            return n;
          }),
          n
        );
      }
      function tx() {
        let n = (0, a._)(["\n  font-size: 14px;\n"]);
        return (
          (tx = function () {
            return n;
          }),
          n
        );
      }
      function tj() {
        let n = (0, a._)([
          "\n  font-size: 14px;\n  color: var(--pcm-error-color);\n  display: flex;\n  gap: 6px;\n  align-items: center;\n",
        ]);
        return (
          (tj = function () {
            return n;
          }),
          n
        );
      }
      function tf() {
        let n = (0, a._)([
          "\n  color: var(--pcm-body-color-secondary);\n  width: 20px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      color: var(--pcm-body-color);\n    }\n  }\n",
        ]);
        return (
          (tf = function () {
            return n;
          }),
          n
        );
      }
      function ty() {
        let n = (0, a._)([""]);
        return (
          (ty = function () {
            return n;
          }),
          n
        );
      }
      function tm() {
        let n = (0, a._)([
          "\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  font-size: 16px;\n  color: var(--pcm-body-color);\n  overflow: hidden;\n  position: relative;\n  top: -6px;\n  .copied-0 {\n    svg {\n      /* opacity: 0.8 !important; */\n    }\n  }\n",
        ]);
        return (
          (tm = function () {
            return n;
          }),
          n
        );
      }
      function tw() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: var(--pcm-rounded-lg);\n  padding: 10px 14px;\n  margin-bottom: 30px;\n  color: var(--pcm-body-color);\n  background: var(--pcm-body-background-tertiary);\n  position: relative;\n  gap: 10px;\n",
        ]);
        return (
          (tw = function () {
            return n;
          }),
          n
        );
      }
      function tI() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 26px;\n  flex: 1;\n  overflow: hidden;\n  cursor: ",
          ";\n",
        ]);
        return (
          (tI = function () {
            return n;
          }),
          n
        );
      }
      function tN() {
        let n = (0, a._)(["\n  width: 22px;\n  height: 22px;\n"]);
        return (
          (tN = function () {
            return n;
          }),
          n
        );
      }
      function tD() {
        let n = (0, a._)([
          "\n  font-size: 14px;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  position: relative;\n  svg {\n    position: relative;\n    width: 10px;\n    top: 1px;\n  }\n",
        ]);
        return (
          (tD = function () {
            return n;
          }),
          n
        );
      }
      function tv() {
        let n = (0, a._)([
          "\n  display: flex;\n  align-items: center;\n  gap: 6px;\n",
        ]);
        return (
          (tv = function () {
            return n;
          }),
          n
        );
      }
      function tk() {
        let n = (0, a._)([
          "\n  font-size: 14px;\n  color: var(--pcm-body-color-secondary);\n  /* 强制不换行 */\n  white-space: nowrap;\n",
        ]);
        return (
          (tk = function () {
            return n;
          }),
          n
        );
      }
      function tL() {
        let n = (0, a._)(["\n  cursor: pointer;\n"]);
        return (
          (tL = function () {
            return n;
          }),
          n
        );
      }
      function tT() {
        let n = (0, a._)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: 1px solid var(--pcm-button-border-color);\n  padding-bottom: 30px;\n",
        ]);
        return (
          (tT = function () {
            return n;
          }),
          n
        );
      }
      function tb() {
        let n = (0, a._)([
          "\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n",
        ]);
        return (
          (tb = function () {
            return n;
          }),
          n
        );
      }
      function tA() {
        let n = (0, a._)([
          "\n  font-size: 16px;\n  color: var(--pcm-body-color);\n",
        ]);
        return (
          (tA = function () {
            return n;
          }),
          n
        );
      }
      function tz() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 30px;\n  margin-bottom: 10px;\n",
        ]);
        return (
          (tz = function () {
            return n;
          }),
          n
        );
      }
      function tE() {
        let n = (0, a._)(["\n  font-size: 14px;\n  cursor: pointer;\n"]);
        return (
          (tE = function () {
            return n;
          }),
          n
        );
      }
      function tO() {
        let n = (0, a._)([
          "\n  height: 26px;\n  width: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    width: 100%;\n  }\n",
        ]);
        return (
          (tO = function () {
            return n;
          }),
          n
        );
      }
      function tS() {
        let n = (0, a._)([
          "\n      opacity: 0.6;\n      pointer-events: none;\n      &:hover {\n        color: var(--pcm-body-color-secondary);\n        svg {\n          color: var(--pcm-body-color-secondary);\n        }\n      }\n    ",
        ]);
        return (
          (tS = function () {
            return n;
          }),
          n
        );
      }
      function tU() {
        let n = (0, a._)([
          "\n  color: var(--pcm-body-color-secondary);\n  svg {\n    color: var(--pcm-body-color-secondary);\n  }\n  opacity: 1;\n  cursor: pointer;\n\n  &:hover {\n    color: var(--pcm-primary-button-bankground);\n    svg {\n      color: var(--pcm-primary-button-bankground);\n    }\n  }\n\n  ",
          "\n",
        ]);
        return (
          (tU = function () {
            return n;
          }),
          n
        );
      }
      function tZ() {
        let n = (0, a._)([
          "\n  font-size: 14px;\n  color: var(--pcm-body-color);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        ]);
        return (
          (tZ = function () {
            return n;
          }),
          n
        );
      }
      function tF() {
        let n = (0, a._)([
          "\n  pointer-events: all;\n  position: absolute;\n  left: 24px;\n  bottom: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n",
        ]);
        return (
          (tF = function () {
            return n;
          }),
          n
        );
      }
      function tP() {
        let n = (0, a._)([
          "\n  position: relative;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 3px;\n",
        ]);
        return (
          (tP = function () {
            return n;
          }),
          n
        );
      }
      function tQ() {
        let n = (0, a._)([
          "\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  left: 11px;\n  transform: translate(-50%, -50%);\n",
        ]);
        return (
          (tQ = function () {
            return n;
          }),
          n
        );
      }
      function tV() {
        let n = (0, a._)([
          "\n  position: relative;\n  top: -1px;\n  left: -4px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n",
        ]);
        return (
          (tV = function () {
            return n;
          }),
          n
        );
      }
      function tH() {
        let n = (0, a._)([
          "\n  width: ",
          "px;\n  height: ",
          "px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    border-radius: 5px;\n    overflow: hidden;\n  }\n",
        ]);
        return (
          (tH = function () {
            return n;
          }),
          n
        );
      }
      function tY() {
        let n = (0, a._)([
          "\n  position: relative;\n  height: 28px;\n  align-items: center;\n  display: flex;\n",
        ]);
        return (
          (tY = function () {
            return n;
          }),
          n
        );
      }
      function t_() {
        let n = (0, a._)([
          "\n  width: ",
          "px;\n  height: ",
          "px;\n  background: var(--pcm-body-background);\n  border-radius: 100%;\n  padding: 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: -20%;\n  bottom: -2%;\n  & > svg {\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (t_ = function () {
            return n;
          }),
          n
        );
      }
      function tW() {
        let n = (0, a._)([
          "\n  padding: 15px 30px;\n  padding-top: 30px;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n",
        ]);
        return (
          (tW = function () {
            return n;
          }),
          n
        );
      }
      function tB() {
        let n = (0, a._)([
          "\n  text-align: center;\n  font-size: 18px;\n  line-height: 25px;\n  font-weight: 500;\n  margin-bottom: 30px;\n",
        ]);
        return (
          (tB = function () {
            return n;
          }),
          n
        );
      }
      function tR() {
        let n = (0, a._)([
          "\n  display: flex;\n  justify-content: space-between;\n  gap: 28px;\n  margin-top: 20px;\n\n  button {\n    border-radius: var(--pcm-rounded-lg);\n    border: 1px solid var(--pcm-button-border-color);\n    background-color: var(--pcm-body-background) !important;\n    color: var(--pcm-body-background);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    height: 36px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--pcm-body-color-secondary);\n\n    &:hover {\n      background-color: #fff;\n    }\n  }\n",
        ]);
        return (
          (tR = function () {
            return n;
          }),
          n
        );
      }
      function tG() {
        let n = (0, a._)([
          "\n  margin-top: 28px;\n  padding: 0 16px;\n  color: var(--pcm-body-color-secondary);\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n",
        ]);
        return (
          (tG = function () {
            return n;
          }),
          n
        );
      }
      function t$() {
        let n = (0, a._)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n\n  svg {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (t$ = function () {
            return n;
          }),
          n
        );
      }
      function tJ() {
        let n = (0, a._)([
          "\n  transition: width 0.3s ease;\n  overflow: hidden;\n",
        ]);
        return (
          (tJ = function () {
            return n;
          }),
          n
        );
      }
      function tK() {
        let n = (0, a._)([
          "\n  display: inline-block;\n  white-space: nowrap;\n",
        ]);
        return (
          (tK = function () {
            return n;
          }),
          n
        );
      }
      function tX() {
        let n = (0, a._)([
          "\n  height: 48px;\n  padding: 0 40px;\n  position: relative;\n  background-color: var(--pcm-primary-button-bankground);\n  border-radius: var(--pcm-rounded-lg);\n  color: var(--pcm-primary-button-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 200ms ease;\n  width: auto;\n  max-width: 360px;\n  width: 100%;\n",
        ]);
        return (
          (tX = function () {
            return n;
          }),
          n
        );
      }
      var tq = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      function t1() {
        return "undefined" != typeof window &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      function t0(n, e) {
        if (n === e) return !0;
        if (n && e && "object" == typeof n && "object" == typeof e) {
          let t, i;
          if (n.constructor !== e.constructor) return !1;
          if (Array.isArray(n) && Array.isArray(e)) {
            if ((t = n.length) !== e.length) return !1;
            for (i = t; 0 != i--; ) if (!t0(n[i], e[i])) return !1;
            return !0;
          }
          if (n.valueOf !== Object.prototype.valueOf)
            return n.valueOf() === e.valueOf();
          if (n.toString !== Object.prototype.toString)
            return n.toString() === e.toString();
          let o = Object.keys(n);
          if ((t = o.length) !== Object.keys(e).length) return !1;
          for (i = t; 0 != i--; )
            if (!Object.prototype.hasOwnProperty.call(e, o[i])) return !1;
          for (i = t; 0 != i--; ) {
            let t = o[i];
            if (t && !t0(n[t], e[t])) return !1;
          }
          return !0;
        }
        return n != n && e != e;
      }
      function t2(n) {
        let e;
        if (t0(o, n.state)) return i;
        let t = n.state.current,
          r = n.state.connections.get(t),
          l = null == r ? void 0 : r.accounts;
        (null == l ? void 0 : l.length) &&
          l.every((n) => (0, c.P)(n, { strict: !1 })) &&
          (l = l.map((n) => (0, d.o)(n)));
        let a = null == l ? void 0 : l[0],
          s = n.chains.find((n) => n.id === (null == r ? void 0 : r.chainId)),
          u = n.state.status;
        switch (u) {
          case "connected":
            e = {
              address: a,
              addresses: l,
              chain: s,
              chainId: null == r ? void 0 : r.chainId,
              connector: null == r ? void 0 : r.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: u,
            };
            break;
          case "reconnecting":
            e = {
              address: a,
              addresses: l,
              chain: s,
              chainId: null == r ? void 0 : r.chainId,
              connector: null == r ? void 0 : r.connector,
              isConnected: !!a,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: u,
            };
            break;
          case "connecting":
            e = {
              address: a,
              addresses: l,
              chain: s,
              chainId: null == r ? void 0 : r.chainId,
              connector: null == r ? void 0 : r.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: u,
            };
            break;
          case "disconnected":
            e = {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: u,
            };
        }
        return (i = e), e;
      }
      var t4 = (n) => "object" == typeof n && !Array.isArray(n);
      function t3() {
        let { config: n } = sa();
        return (function (n, e) {
          let t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t0,
            o = (0, s.useRef)([]),
            r = (0, u.useSyncExternalStoreWithSelector)(
              n,
              e,
              t,
              (n) => n,
              (n, e) => {
                if (t4(n) && t4(e) && o.current.length) {
                  for (let t of o.current) if (!i(n[t], e[t])) return !1;
                  return !0;
                }
                return i(n, e);
              }
            );
          if (t4(r)) {
            let n = { ...r },
              e = {};
            for (let [t, i] of Object.entries(n))
              e = {
                ...e,
                [t]: {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (o.current.includes(t) || o.current.push(t), i),
                },
              };
            return Object.defineProperties(n, e), n;
          }
          return r;
        })(
          (e) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n.subscribe(() => t2(n), t, {
                equalityFn(n, e) {
                  let { connector: t, ...i } = n,
                    { connector: o, ...r } = e;
                  return (
                    t0(i, r) &&
                    (null == t ? void 0 : t.id) ===
                      (null == o ? void 0 : o.id) &&
                    (null == t ? void 0 : t.uid) ===
                      (null == o ? void 0 : o.uid)
                  );
                },
              });
            })(n, { onChange: e }),
          () => t2(n)
        );
      }
      var t5 = {
          connectWallet: "Connect Wallet",
          disconnect: "Disconnect",
          connected: "Connected",
          preferPhone: "Prefer to use a phone number?",
          preferEmail: "Prefer to use an email?",
          usePhone: "Use phone",
          useEmail: "Use email",
          signupTitle: "Log in or sign up",
          connectorsTitle: "Log in or sign up",
          captchaTitle: "Confirm verification code",
          walletconnectTitle: "Connect",
          selectChainTitle: "Select Chain",
          viewAllWallets: "View all wallets",
          continueWithWallet: "Continue with a wallet",
          connectingUnavailable: "Unsupported Browser",
          connectingUnavailableDesc:
            "To connect your {0} wallet,\ninstall the extension on {0}.",
          connectingInstall: "Install {0}",
          connectingInstallDesc:
            "To connect your {0} wallet,\ninstall the browser extension.",
          connectingRequest: "Requesting Connection",
          connectingRequestDesc: "Click connect in your wallet popup.",
          connectingConnected: "Already Connected",
          connectingConnectedDesc: "It is now okay to close this popup",
          connectingRejected: "Request Cancelled",
          connectingRejectedDesc:
            "You cancelled the request.\nClick above to try again.",
          connectingFailed: "Request Failed",
          connectingFailedDesc:
            "Something went wrong. \nClick above to try again later.",
          connectingNotconnected: "Login to {0}",
          connectingNotconnectedDesc:
            "To continue, please login to your {0} extension.",
          phoneNumber: "Phone Number",
          email: "Email",
          enterEmail: "Please enter your email address.",
          enterValidEmail: "Please enter a valid email address.",
          unknownError: "An unknown error occurred",
          verificationCode: "We've sent a verification code to",
          incorrectCode: "The code you entered is incorrect. Please try again.",
          continue: "Continue",
          didNotReceiveCode: "Did not receive your code yet?",
          resendCode: "Re-send code",
          enterValidPhoneNumber: "Please enter a valid phone number",
          somethingWentWrong: "Something went wrong. Please try again.",
          somethingWentWrongLater:
            "Something went wrong. Please try again later.",
          emailFormatError: "Email format error.",
          invalidOrIncorrectNumber:
            "Invalid or incorrect number. Please try again.",
          recommended: "Recommended",
          popular: "Popular",
          installed: "Installed",
          lastUsed: "Last Used",
          multichain: "Multichain",
          enterPhoneNumber: "Please enter your phone number",
          copied: "Copied",
          linkLoginAccount: "Link Login Account",
          accountAndSecurity: "Account and Security",
          copyQRURI: "Copy QR URI",
          getWallet: "Get Wallet",
          scanQRCode:
            "Scan this QR code from your mobile wallet or phone's camera to connect.",
          connect: "Connect",
          installToConnect: "Install {0} to connect",
          selectPreferredOptions: "Select from your preferred options below:",
          installExtension: "Install {0} extension",
          refreshPageOnceInstalled: "Please refresh the page once installed.",
          walletSupportsMultipleChains: "This wallet supports multiple chains.",
          selectChainToConnect: "Select which chain you'd like to connect to.",
          scanWithPhone: "Scan with phone",
          connectingRequestAuthDesc: "Log in and grant permissions.",
          or: "OR",
          walletOnlyAvailableOnMobile:
            "This wallet is only available on mobile. Scan this QR code from your mobile phone to download this app.",
          installBrowserFirst:
            "You need to Install {0} Browser first and then use {1} Wallet.",
          wallet: "Wallet",
          buy: "Buy",
          switchNetwork: "Switch Network",
          noData: "No data",
          receive: "Receive",
          send: "Send",
          onlySupport: "Only support {0} related assets",
          copyAddress: "Copy Address",
          searchByNameOrCode: "Search by country name or code",
          invalidOrIncorrectNumberMistype:
            "Invalid or incorrect number. Did you mistype it?",
          networkError: "Network error, please try again",
          invalidCode: "Invalid code",
          codeDeleted: "Code has expired. Please send it again.",
          sessionExpired:
            "Your session has expired, please login again to continue.",
          loginWithPasskey: "Log in with passkey",
          usePasskeyToLogin: "Passkey Smart Wallet",
          usePasskeyToLoginSmartAccount:
            "Use a passkey to create or access a Smart Wallet.",
          createNewPasskey: "Create a Passkey Smart Wallet",
          gotWallet: "Log in with passkey",
          requestingPasskey: "Requesting Connection",
          passkeyPrompt: "Follow the prompts to verify your passkey.",
          setupPasskeyPrompt: "Follow the prompts to set up a passkey.",
          requestCancelled:
            "You cancelled the request.\nClick above to try again.",
          tryAgain: "Try Again",
          setupPasskey: "Set up a passkey",
          passkeyStorageInfo:
            "Passkeys are stored in your device and can only be accessed by you.",
          passkeyDeletionWarning:
            "WARNING: Please avoid bulk clean-ups and passkey deletions to avoid accidental deletion.",
          convenientAndFast: "Fast and convenient",
          biometricTransactionInfo:
            "Use Face ID or Touch ID to quickly authenticate transactions.",
          increasedSecurity: "Increased security",
          passkeySecurityInfo:
            "Passkeys are end-to-end encrypted in your device or password manager to prevent phishing attempts.",
          continueWithSmartWalletPasskey: "Continue with Passkey Smart Wallet",
          connectingPasskeyUnavailable: "Request Failed",
          connectingPasskeyUnavailableDesc:
            "Passkey is not available here. Please try another login method or change devices (e.g.browser, terminal).",
        },
        t6 = {
          connectWallet: "ウォレットの接続",
          disconnect: "接続解除",
          connected: "接続済み",
          preferPhone: "優先的に携帯番号で登録する？",
          preferEmail: "優先的にEメールで登録しますか？",
          usePhone: "携帯番号を使う",
          useEmail: "電子メールの使用",
          signupTitle: "ログインまたは登録",
          connectorsTitle: "ログインまたは登録",
          captchaTitle: "検証コードの確認",
          walletconnectTitle: "せつぞく",
          selectChainTitle: "せんたくチェーン",
          viewAllWallets: "すべてのウォレットの表示",
          continueWithWallet: "ウォレットを使用したログイン",
          connectingUnavailable: "サポートされていないブラウザ",
          connectingUnavailableDesc:
            "ウォレットに接続するには、\n拡張プログラムをインストールします。",
          connectingInstall: "インストール{0}",
          connectingInstallDesc:
            "ウォレットに接続するには、\nブラウザ拡張プログラムをインストールします。",
          connectingRequest: "要求接続",
          connectingRequestDesc:
            "ウォレットポップアップウィンドウでウォレットを接続するをクリックします。",
          connectingConnected: "完了した接続",
          connectingConnectedDesc:
            "このポップアップウィンドウを閉じることができます",
          connectingRejected: "要求がキャンセルされました",
          connectingRejectedDesc:
            "あなたは要請を取り消しました。\n上のリンクをクリックして再試行します。",
          connectingFailed: "リクエストが失敗しました",
          connectingFailedDesc:
            "エラーが発生しました。\n後でもう一度上のボタンをクリックしてください。",
          connectingNotconnected: "ログイン先{0}",
          connectingNotconnectedDesc: "あなたの{0}にログインしてください。",
          phoneNumber: "携帯番号",
          email: "メールボックス",
          enterEmail: "メールアドレスを入力してください。",
          enterValidEmail: "有効なメールボックスを入力してください。",
          unknownError: "不明なエラーが発生しました",
          verificationCode: "認証コードの送信先",
          incorrectCode:
            "入力した認証コードが正しくありません。再試行してください。",
          continue: "続行",
          didNotReceiveCode: "認証コードを受け取っていませんか？",
          resendCode: "認証コードの再送信",
          enterValidPhoneNumber: "有効な電話番号を入力してください",
          somethingWentWrong: "エラーが発生しました。再試行してください。",
          somethingWentWrongLater:
            "エラーが発生しました。後でやり直してください。",
          emailFormatError: "メールボックスフォーマット入力エラー",
          invalidOrIncorrectNumber: "携帯番号の入力ミス、再入力してください",
          recommended: "推奨",
          popular: "人気がある",
          installed: "インストール済み",
          lastUsed: "最終使用",
          multichain: "マルチチェーン",
          enterPhoneNumber: "携帯番号を入力してください",
          copied: "コピー済み",
          linkLoginAccount: "ログインアカウントへの接続",
          accountAndSecurity: "アカウントとセキュリティ",
          copyQRURI: "QR URIをコピー",
          getWallet: "ウォレットの取得",
          scanQRCode: "お財布や携帯カメラでQRコードをスキャンして接続する",
          connect: "せつぞく",
          installToConnect: "ポストコネクションをインストールしてください",
          selectPreferredOptions: "次のいずれかの方法を使用します。",
          installExtension: "拡張プログラムのインストール",
          refreshPageOnceInstalled:
            "インストール後にページを更新してください。",
          walletSupportsMultipleChains:
            "このウォレットは複数のチェーンをサポートしています。",
          selectChainToConnect: "接続するチェーンを選択します。",
          scanWithPhone: "携帯電話でスキャン",
          connectingRequestAuthDesc: "権限を付与してログインします。",
          or: "または",
          walletOnlyAvailableOnMobile:
            "この財布は携帯電話にのみ使用できます。このQRコードを携帯電話でスキャンしてこのアプリをダウンロードします。",
          installBrowserFirst:
            "ブラウザをインストールしてから、ウォレットを使用する必要があります。",
          wallet: "ウォレット",
          buy: "購入",
          switchNetwork: "ネットワークを切り替える",
          noData: "データなし",
          receive: "受け取る",
          send: "送信",
          onlySupport: "{0}関連の資産のみ対応",
          copyAddress: "アドレスをコピー",
          searchByNameOrCode: "国名またはコードで検索",
          invalidOrIncorrectNumberMistype: "無効な番号です。入力ミスですか？",
          networkError: "ネットワークエラーです。もう一度お試しください",
          invalidCode: "コードが無効です",
          codeDeleted: "コードの有効期限が切れました。再送信してください",
          sessionExpired:
            "セッションの有効期限が切れました。続行するには再度ログインしてください。",
          loginWithPasskey: "Passkeyでログイン",
          usePasskeyToLogin: "Passkeyスマートウォレット",
          usePasskeyToLoginSmartAccount:
            "Passkeyを使用してスマートウォレットを作成またはアクセスします。",
          createNewPasskey: "Passkeyスマートウォレットを作成",
          gotWallet: "Passkeyでログイン",
          requestingPasskey: "要求接続",
          passkeyPrompt: "指示に従ってPasskeyを確認してください。",
          setupPasskeyPrompt: "指示に従ってPasskeyを設定してください。",
          requestCancelled:
            "あなたは要請を取り消しました。\n上のリンクをクリックして再試行します。",
          tryAgain: "もう一度試す",
          setupPasskey: "Passkeyを設定",
          passkeyStorageInfo:
            "Passkeyはデバイスに保存され、あなただけがアクセスできます。",
          passkeyDeletionWarning:
            "警告：Passkeyを一括削除すると誤って削除される可能性があるため、避けてください。",
          convenientAndFast: "迅速で便利",
          biometricTransactionInfo:
            "Face IDまたはTouch IDを使用して、迅速に取引を認証します。",
          increasedSecurity: "セキュリティの向上",
          passkeySecurityInfo:
            "Passkeyはデバイスまたはパスワードマネージャーでエンドツーエンド暗号化され、フィッシング攻撃を防ぎます。",
          continueWithSmartWalletPasskey: "Passkeyスマートウォレットで続行",
          connectingPasskeyUnavailable: "リクエストに失敗しました",
          connectingPasskeyUnavailableDesc:
            "ここではPasskeyは利用できません。別のログイン方法を試すか、デバイスを変更してください（例：ブラウザ、端末）。",
        },
        t9 = {
          connectWallet: "지갑 연결",
          disconnect: "연결 해제",
          connected: "접속됨",
          preferPhone: "우선 핸드폰 번호로 등록하시겠습니까?",
          preferEmail: "전자 메일 등록이 우선입니까?",
          usePhone: "핸드폰 번호 사용",
          useEmail: "전자 메일 사용",
          signupTitle: "로그인 또는 등록",
          connectorsTitle: "로그인 또는 등록",
          captchaTitle: "인증 코드 확인",
          walletconnectTitle: "연결",
          selectChainTitle: "체인 선택",
          viewAllWallets: "모든 지갑 보기",
          continueWithWallet: "지갑으로 로그인",
          connectingUnavailable: "지원되지 않는 브라우저",
          connectingUnavailableDesc:
            "{0} 지갑을 연결하려면\n{0}에 확장 프로그램을 설치하십시오.",
          connectingInstall: "{0} 설치",
          connectingInstallDesc:
            "{0} 지갑에 연결하려면 \n브라우저 확장 프로그램을 설치하십시오.",
          connectingRequest: "연결 요청",
          connectingRequestDesc: "지갑 팝업 창에서 지갑 연결을 클릭합니다.",
          connectingConnected: "연결 완료",
          connectingConnectedDesc: "이제 이 팝업 창을 닫을 수 있습니다.",
          connectingRejected: "요청이 취소됨",
          connectingRejectedDesc:
            "당신은 요청을 취소했습니다.\n위의 링크를 클릭하여 다시 시도하십시오.",
          connectingFailed: "요청 실패",
          connectingFailedDesc:
            "오류가 발생했습니다. \n나중에 위 버튼을 클릭하여 다시 시도하세요.",
          connectingNotconnected: "{0}에 로그인",
          connectingNotconnectedDesc: "{0} 에 로그인하십시오.",
          phoneNumber: "핸드폰 번호",
          email: "메일박스",
          enterEmail: "이메일을 입력하십시오.",
          enterValidEmail: "올바른 메일박스를 입력하십시오.",
          unknownError: "알 수 없는 오류가 발생했습니다.",
          verificationCode: "인증 코드가 에 전송됨",
          incorrectCode:
            "입력한 인증 코드가 정확하지 않습니다. 다시 시도하십시오.",
          continue: "계속",
          didNotReceiveCode: "인증번호를 받지 못했습니까?",
          resendCode: "인증 코드 다시 보내기",
          enterValidPhoneNumber: "올바른 전화 번호를 입력하십시오.",
          somethingWentWrong: "오류가 발생했습니다. 다시 시도하십시오.",
          somethingWentWrongLater:
            "오류가 발생했습니다. 나중에 다시 시도하십시오.",
          emailFormatError: "메일박스 형식 입력 오류",
          invalidOrIncorrectNumber:
            "핸드폰 번호 입력이 잘못되었습니다. 다시 입력하십시오.",
          recommended: "추천",
          popular: "인기",
          installed: "설치됨",
          lastUsed: "마지막 사용",
          multichain: "다중 체인",
          enterPhoneNumber: "핸드폰 번호를 입력하세요.",
          copied: "복사됨",
          linkLoginAccount: "로그인 계정 연결",
          accountAndSecurity: "계정 및 보안",
          copyQRURI: "QR URI 복사",
          getWallet: "지갑 가져오기",
          scanQRCode:
            "핸드폰 지갑이나 핸드폰 카메라로 이 QR코드를 스캔하여 연결합니다",
          connect: "연결",
          installToConnect: "{0} 을 (를) 설치한 후 연결하십시오.",
          selectPreferredOptions: "다음 방법 중 하나를 사용하십시오.",
          installExtension: "확장 프로그램 설치",
          refreshPageOnceInstalled: "설치 후 페이지를 새로 고치십시오.",
          walletSupportsMultipleChains: "이 지갑은 여러 체인을 지원합니다.",
          selectChainToConnect: "연결할 체인을 선택합니다.",
          scanWithPhone: "핸드폰으로 스캔하다",
          connectingRequestAuthDesc: "라이센스를 부여하고 로그인합니다.",
          or: "또는",
          walletOnlyAvailableOnMobile:
            "이 지갑은 휴대폰에만 적용됩니다.휴대폰으로 이 QR코드를 스캔하여 이 앱을 다운로드하십시오.",
          installBrowserFirst:
            "먼저 {0} 브라우저를 설치한 다음 {1} 지갑을 사용해야 합니다.",
          wallet: "지갑",
          buy: "구매",
          switchNetwork: "네트워크 전환",
          noData: "데이터 없음",
          receive: "받기",
          send: "보내기",
          onlySupport: "{0} 관련 자산만 지원",
          copyAddress: "주소 복사",
          searchByNameOrCode: "국가 이름 또는 코드로 검색",
          invalidOrIncorrectNumberMistype:
            "유효하지 않은 번호입니다. 잘못 입력하셨나요?",
          networkError: "네트워크 오류입니다. 다시 시도해 주세요",
          invalidCode: "인증 코드가 무효입니다",
          codeDeleted: "인증 코드가 만료되었습니다. 다시 보내주세요",
          sessionExpired:
            "세션이 만료되었습니다. 계속하려면 다시 로그인해 주세요.",
          loginWithPasskey: "Passkey로 로그인",
          usePasskeyToLogin: "Passkey 스마트 지갑",
          usePasskeyToLoginSmartAccount:
            "Passkey를 사용하여 스마트 지갑을 만들거나 액세스하세요.",
          createNewPasskey: "Passkey 스마트 지갑 만들기",
          gotWallet: "Passkey로 로그인",
          requestingPasskey: "연결 요청",
          passkeyPrompt: "지시에 따라 Passkey를 확인하세요.",
          setupPasskeyPrompt: "지시에 따라 Passkey를 설정하세요.",
          requestCancelled:
            "당신은 요청을 취소했습니다.\n위의 링크를 클릭하여 다시 시도하십시오.",
          tryAgain: "다시 시도",
          setupPasskey: "Passkey 설정",
          passkeyStorageInfo:
            "Passkey는 귀하의 장치에 저장되며, 오직 귀하만 접근할 수 있습니다.",
          passkeyDeletionWarning:
            "경고: Passkey를 대량 삭제할 때 실수로 삭제되는 것을 방지하기 위해 주의해 주세요.",
          convenientAndFast: "빠르고 편리함",
          biometricTransactionInfo:
            "Face ID 또는 Touch ID를 사용하여 빠르게 거래를 인증하세요.",
          increasedSecurity: "보안 강화",
          passkeySecurityInfo:
            "Passkey는 장치 또는 비밀번호 관리 프로그램에서 엔드 투 엔드로 암호화되어 피싱 공격을 방지합니다.",
          continueWithSmartWalletPasskey: "Passkey 스마트 지갑으로 계속하기",
          connectingPasskeyUnavailable: "요청 실패",
          connectingPasskeyUnavailableDesc:
            "여기에서는 Passkey를 사용할 수 없습니다. 다른 로그인 방법을 시도하거나 기기(예: 브라우저, 터미널)를 변경해 주세요.",
        },
        t7 = {
          connectWallet: "连接钱包",
          disconnect: "断开连接",
          connected: "已连接",
          preferPhone: "优先使用手机号注册？",
          preferEmail: "优先使用邮箱注册？",
          usePhone: "使用手机号",
          useEmail: "使用邮箱",
          signupTitle: "登录或注册",
          connectorsTitle: "登录或注册",
          captchaTitle: "确认验证码",
          walletconnectTitle: "连接",
          selectChainTitle: "选择链",
          viewAllWallets: "查看所有钱包",
          continueWithWallet: "使用钱包登录",
          connectingUnavailable: "不支持的浏览器",
          connectingUnavailableDesc:
            "要连接你的 {0} 钱包，\n在 {0} 上安装扩展程序。",
          connectingInstall: "安装 {0}",
          connectingInstallDesc: "要连接你的 {0} 钱包，\n安装浏览器扩展程序。",
          connectingRequest: "请求连接",
          connectingRequestDesc: "在钱包弹出窗口中点击连接钱包。",
          connectingConnected: "已完成连接",
          connectingConnectedDesc: "现在可以关闭此弹出窗口",
          connectingRejected: "请求已取消",
          connectingRejectedDesc: "你取消了请求。\n点击上面的链接重试。",
          connectingFailed: "请求失败",
          connectingFailedDesc: "出错了。\n请稍后单击上面的按钮重试。",
          connectingNotconnected: "登录到 {0}",
          connectingNotconnectedDesc: "请登录你的 {0} 。",
          phoneNumber: "手机号",
          email: "邮箱",
          enterEmail: "请输入你的邮箱。",
          enterValidEmail: "请输入有效的邮箱。",
          unknownError: "出现未知错误",
          verificationCode: "已发送验证码到",
          incorrectCode: "你输入的验证码不正确，请重试。",
          continue: "继续",
          didNotReceiveCode: "尚未收到验证码？",
          resendCode: "重新发送验证码",
          enterValidPhoneNumber: "请输入有效的电话号码",
          somethingWentWrong: "出错了，请重试。",
          somethingWentWrongLater: "出错了，请稍后再试。",
          emailFormatError: "邮箱格式输入错误",
          invalidOrIncorrectNumber: "手机号输入错误，请重新输入",
          recommended: "推荐",
          popular: "热门",
          installed: "已安装",
          lastUsed: "上次使用",
          multichain: "多链",
          enterPhoneNumber: "请输入你的手机号",
          copied: "已复制",
          linkLoginAccount: "连接登录账户",
          accountAndSecurity: "账户与安全",
          copyQRURI: "复制 QR URI",
          getWallet: "获取钱包",
          scanQRCode: "用手机钱包或手机摄像头扫描此二维码进行连接",
          connect: "连接",
          installToConnect: "请安装 {0} 后连接",
          selectPreferredOptions: "请使用下面任意方式：",
          installExtension: "安装 {0} 扩展程序",
          refreshPageOnceInstalled: "安装后请刷新页面。",
          walletSupportsMultipleChains: "此钱包支持多个链。",
          selectChainToConnect: "选择要连接的链。",
          scanWithPhone: "用手机扫描",
          connectingRequestAuthDesc: "授权并登录。",
          or: "或",
          walletOnlyAvailableOnMobile:
            "此钱包仅适用于手机。用手机扫描此二维码下载此应用程序。",
          installBrowserFirst: "你需要先安装 {0} 浏览器，然后使用 {1} 钱包。",
          wallet: "钱包",
          buy: "购买",
          switchNetwork: "切换网络",
          noData: "无数据",
          receive: "接收",
          send: "发送",
          onlySupport: "仅支持{0}相关资产",
          copyAddress: "复制地址",
          searchByNameOrCode: "按国家名称或代码搜索",
          invalidOrIncorrectNumberMistype: "无效或错误的号码。你是否输入错误？",
          networkError: "网络错误，请重试",
          invalidCode: "验证码无效",
          codeDeleted: "验证码已过期，请重新发送",
          sessionExpired: "您的会话已过期，请重新登录以继续操作。",
          loginWithPasskey: "使用Passkey登录",
          usePasskeyToLogin: "Passkey智能钱包",
          usePasskeyToLoginSmartAccount: "使用Passkey创建或访问智能钱包。",
          createNewPasskey: "创建Passkey智能钱包",
          gotWallet: "使用Passkey登录",
          requestingPasskey: "请求连接",
          passkeyPrompt: "按照提示验证您的Passkey。",
          setupPasskeyPrompt: "按照提示设置Passkey。",
          requestCancelled: "你取消了请求。\n点击上面的链接重试。",
          tryAgain: "再试一次",
          setupPasskey: "设置Passkey",
          passkeyStorageInfo: "Passkey存储在您的设备中，仅您可以访问。",
          passkeyDeletionWarning:
            "警告：请避免批量清理和删除Passkey，以防误删。",
          convenientAndFast: "快速便捷",
          biometricTransactionInfo: "使用Face ID或Touch ID快速验证交易。",
          increasedSecurity: "提高安全性",
          passkeySecurityInfo:
            "Passkey在您的设备或密码管理器中进行端到端加密，以防止网络钓鱼攻击。",
          continueWithSmartWalletPasskey: "使用Passkey智能钱包继续",
          connectingPasskeyUnavailable: "请求失败",
          connectingPasskeyUnavailableDesc:
            "此处Passkey不可用。请尝试其他登录方式或更换设备（如浏览器、终端）。",
        },
        t8 = {
          connectWallet: "連接錢包",
          disconnect: "斷開連接",
          connected: "已連接",
          preferPhone: "優先使用手機號注册？",
          preferEmail: "優先使用郵箱注册？",
          usePhone: "使用手機號",
          useEmail: "使用郵箱",
          signupTitle: "登入或注册",
          connectorsTitle: "登入或注册",
          captchaTitle: "確認驗證碼",
          walletconnectTitle: "連接",
          selectChainTitle: "選擇鏈",
          viewAllWallets: "查看所有錢包",
          continueWithWallet: "使用錢包登入",
          connectingUnavailable: "不支持的瀏覽器",
          connectingUnavailableDesc:
            "要連接你的{0}錢包，\n在{0}上安裝擴展程式。",
          connectingInstall: "安裝{0}",
          connectingInstallDesc: "要連接你的{0}錢包，\n安裝瀏覽器擴展程式。",
          connectingRequest: "請求連接",
          connectingRequestDesc: "在錢包快顯視窗中點擊連接錢包。",
          connectingConnected: "已完成連接",
          connectingConnectedDesc: "現在可以關閉此快顯視窗",
          connectingRejected: "請求已取消",
          connectingRejectedDesc: "你取消了請求。\n點擊上面的連結重試。 ",
          connectingFailed: "請求失敗",
          connectingFailedDesc: "出錯了。\n请稍後點擊上面的按鈕重試。",
          connectingNotconnected: "登入到{0}",
          connectingNotconnectedDesc: "請登入你的{0}。",
          phoneNumber: "手機號",
          email: "郵箱",
          enterEmail: "請輸入你的郵箱。",
          enterValidEmail: "請輸入有效的郵箱。",
          unknownError: "出現未知錯誤",
          verificationCode: "已發送驗證碼到",
          incorrectCode: "你輸入的驗證碼不正確，請重試。",
          continue: "繼續",
          didNotReceiveCode: "尚未收到驗證碼？",
          resendCode: "重新發送驗證碼",
          enterValidPhoneNumber: "請輸入有效的電話號碼",
          somethingWentWrong: "出錯了，請重試。",
          somethingWentWrongLater: "出錯了，請稍後再試。",
          emailFormatError: "郵箱格式輸入錯誤",
          invalidOrIncorrectNumber: "手機號輸入錯誤，請重新輸入",
          recommended: "推薦",
          popular: "熱門",
          installed: "已安裝",
          lastUsed: "上次使用",
          multichain: "多鏈",
          enterPhoneNumber: "請輸入你的手機號",
          copied: "已複製",
          linkLoginAccount: "連接登入帳戶",
          accountAndSecurity: "帳戶與安全",
          copyQRURI: "複製QR URI",
          getWallet: "獲取錢包",
          scanQRCode: "用手機錢包或手機監視器掃描此二維碼進行連接",
          connect: "連接",
          installToConnect: "請安裝{0}後連接",
          selectPreferredOptions: "請使用下麵任意管道：",
          installExtension: "安裝{0}擴展程式",
          refreshPageOnceInstalled: "安裝後請刷新頁面。",
          walletSupportsMultipleChains: "此錢包支持多個鏈。",
          selectChainToConnect: "選擇要連接的鏈。",
          scanWithPhone: "用手機掃描",
          connectingRequestAuthDesc: "授權並登入。",
          or: "或",
          walletOnlyAvailableOnMobile:
            "此錢包僅適用於手機。 用手機掃描此二維碼下載此應用程序。",
          installBrowserFirst: "你需要先安裝{0}瀏覽器，然後使用{1}錢包。",
          wallet: "錢包",
          buy: "購買",
          switchNetwork: "切換網路",
          noData: "無數據",
          receive: "接收",
          send: "發送",
          onlySupport: "僅支持{0}相關資產",
          copyAddress: "複製地址",
          searchByNameOrCode: "按國家名稱或代碼搜索",
          invalidOrIncorrectNumberMistype: "無效或錯誤的號碼。你是否輸入錯誤？",
          networkError: "網路錯誤，請重試",
          invalidCode: "驗證碼無效",
          codeDeleted: "驗證碼已過期，請重新發送",
          sessionExpired: "您的會話已過期，請重新登入以繼續操作。",
          loginWithPasskey: "使用Passkey登入",
          usePasskeyToLogin: "Passkey智能錢包",
          usePasskeyToLoginSmartAccount: "使用Passkey創建或訪問智能錢包。",
          createNewPasskey: "創建Passkey智能錢包",
          gotWallet: "使用Passkey登入",
          requestingPasskey: "請求連接",
          passkeyPrompt: "按照提示验证您的Passkey。",
          setupPasskeyPrompt: "按照提示设置Passkey。",
          requestCancelled: "你取消了請求。\n點擊上面的連結重試。 ",
          tryAgain: "再試一次",
          setupPasskey: "設置Passkey",
          passkeyStorageInfo: "Passkey存儲在您的設備中，僅您可以訪問。",
          passkeyDeletionWarning:
            "警告：請避免批量清理和刪除Passkey，以防誤刪。",
          convenientAndFast: "快速便捷",
          biometricTransactionInfo: "使用Face ID或Touch ID快速驗證交易。",
          increasedSecurity: "提高安全性",
          passkeySecurityInfo:
            "Passkey在您的設備或密碼管理器中進行端到端加密，以防止網絡釣魚攻擊。",
          continueWithSmartWalletPasskey: "使用Passkey智能錢包繼續",
          connectingPasskeyUnavailable: "請求失敗",
          connectingPasskeyUnavailableDesc:
            "此處無法使用Passkey。請嘗試其他登入方式或更換設備（如瀏覽器、終端）。",
        },
        ie = (n) => {
          switch (n) {
            case "ja-JP":
              return t6;
            case "zh-CN":
              return t7;
            case "zh-TW":
              return t8;
            case "ko-KR":
              return t9;
            default:
              return t5;
          }
        };
      function it() {
        let { appearance: n } = sd(),
          e = (0, s.useMemo)(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.language) &&
              void 0 !== e
              ? e
              : "en-US";
          }, [n.language]),
          t = (0, s.useMemo)(() => n.overrideLocales, [n.overrideLocales]),
          i = (0, s.useMemo)(() => {
            let n = ie(e),
              i = null == t ? void 0 : t[e];
            return { ...n, ...i };
          }, [e, t]);
        if (!i) throw Error("Missing translations for ".concat(e));
        return i;
      }
      String.prototype.format = function () {
        for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        return this.replace(/\{\d+\}/g, (n) => {
          var t, i;
          return null !==
            (i =
              null === (t = e[parseInt(n.slice(1, -1), 10)]) || void 0 === t
                ? void 0
                : t.toString()) && void 0 !== i
            ? i
            : n;
        });
      };
      var ii = (0, p.vt)((n) => ({
          showError: (e) => {
            n({ error: e });
          },
          hideError: () => {
            n({ error: void 0 });
          },
        })),
        io = (0, p.vt)((n) => ({ open: !1, setOpen: (e) => n({ open: e }) })),
        ir = (n) => {
          let { ...e } = n;
          return (0, C.jsx)(M.P.svg, {
            width: 14,
            height: 14,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M1 13L13 1M1 1L13 13",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
          });
        },
        il = (n) => {
          let { ...e } = n;
          return (0, C.jsx)(M.P.svg, {
            width: 9,
            height: 16,
            viewBox: "0 0 9 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M8 1L1 8L8 15",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        ia = (n) => {
          let { ...e } = n;
          return (0, C.jsx)(M.P.svg, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M0.202807 10.872C-0.0674791 11.1292 -0.0674791 11.5499 0.202807 11.8071C0.473094 12.0643 0.915322 12.0643 1.18561 11.8071L6.79728 6.46761C7.06757 6.21043 7.06757 5.78965 6.79728 5.53248L6.79719 5.53239L1.18552 0.192883C0.91523 -0.0642945 0.473001 -0.0642945 0.202715 0.192883C-0.0675717 0.450061 -0.0675717 0.870841 0.202715 1.12802L5.32304 6L0.202807 10.872Z",
              fill: "currentColor",
            }),
          });
        },
        is = (n) => {
          let { color: e = "var(--pcm-accent-color)", ...t } = n;
          return (0, C.jsxs)(M.P.svg, {
            width: "61",
            height: "61",
            viewBox: "0 0 61 61",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [
              (0, C.jsxs)("g", {
                clipPath: "url(#clip0_0_22828)",
                children: [
                  (0, C.jsx)("path", {
                    opacity: "0.15",
                    d: "M30.5 0.399902C47.1238 0.399902 60.6 13.8761 60.6 30.4999C60.6 47.1237 47.1238 60.5999 30.5 60.5999C13.8763 60.5999 0.400024 47.1237 0.400024 30.4999C0.400024 13.8761 13.8763 0.399902 30.5 0.399902V0.399902Z",
                    fill: e,
                  }),
                  (0, C.jsx)("g", {
                    clipPath: "url(#clip1_0_22828)",
                    children: (0, C.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M40.6574 43.4989C40.8858 43.0112 41 42.4837 41 41.9166V19.1175C41 18.5503 40.8858 18.0172 40.6574 17.5181C40.429 17.019 40.115 16.5823 39.7153 16.208C39.3157 15.8337 38.8475 15.5388 38.3108 15.3233C37.7741 15.1078 37.1974 15 36.5807 15H24.4192C23.8026 15 23.2259 15.1078 22.6892 15.3233C22.1526 15.5388 21.6843 15.8337 21.2847 16.208C20.885 16.5823 20.571 17.019 20.3426 17.5181C20.1142 18.0172 20 18.5503 20 19.1175V41.9166C20 42.4837 20.1142 43.0112 20.3426 43.4989C20.571 43.9866 20.885 44.4177 21.2847 44.792C21.6843 45.1663 22.1526 45.4612 22.6892 45.6767C23.2259 45.8922 23.8026 46 24.4192 46H36.5807C37.1974 46 37.7741 45.8922 38.3108 45.6767C38.8475 45.4612 39.3156 45.1663 39.7153 44.792C40.115 44.4177 40.429 43.9866 40.6574 43.4989ZM22.7406 20.7508H38.2251V40.2492H22.7406V20.7508ZM30.4829 41.202C30.0033 41.202 29.5864 41.3721 29.2325 41.7124C28.8785 42.0527 28.7015 42.4724 28.7015 42.9715C28.7015 43.4479 28.8785 43.8619 29.2325 44.2135C29.5864 44.5651 30.0033 44.7409 30.4829 44.7409C30.9853 44.7409 31.4078 44.5651 31.7504 44.2135C32.093 43.8619 32.2643 43.4479 32.2643 42.9715C32.2643 42.4724 32.093 42.0527 31.7504 41.7124C31.4078 41.3721 30.9853 41.202 30.4829 41.202ZM33.0522 17.433C33.1664 17.5351 33.2235 17.6769 33.2235 17.8584C33.2235 18.0399 33.1664 18.1817 33.0522 18.2838C32.938 18.3858 32.8124 18.4369 32.6754 18.4369H28.3246C28.1876 18.4369 28.062 18.3858 27.9478 18.2838C27.8336 18.1817 27.7765 18.0399 27.7765 17.8584C27.7765 17.6769 27.8393 17.5351 27.9649 17.433C28.0905 17.331 28.2104 17.2799 28.3246 17.2799H32.6754C32.8124 17.2799 32.938 17.331 33.0522 17.433Z",
                      fill: e,
                    }),
                  }),
                ],
              }),
              (0, C.jsxs)("defs", {
                children: [
                  (0, C.jsx)("clipPath", {
                    id: "clip0_0_22828",
                    children: (0, C.jsx)("rect", {
                      width: "60.2",
                      height: "60.2",
                      fill: "white",
                      transform: "translate(0.400024 0.399902)",
                    }),
                  }),
                  (0, C.jsx)("clipPath", {
                    id: "clip1_0_22828",
                    children: (0, C.jsx)("rect", {
                      width: "21",
                      height: "31",
                      fill: "white",
                      transform: "translate(20 15)",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ic = (n) => {
          let { color: e = "var(--pcm-accent-color)", ...t } = n;
          return (0, C.jsxs)(M.P.svg, {
            width: "61",
            height: "61",
            viewBox: "0 0 61 61",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [
              (0, C.jsxs)("g", {
                clipPath: "url(#clip0_0_22587)",
                children: [
                  (0, C.jsx)("path", {
                    opacity: "0.15",
                    d: "M30.1 0C46.7238 0 60.2 13.4762 60.2 30.1C60.2 46.7238 46.7238 60.2 30.1 60.2C13.4762 60.2 0 46.7238 0 30.1C0 13.4762 13.4762 0 30.1 0V0Z",
                    fill: e,
                  }),
                  (0, C.jsx)("g", {
                    clipPath: "url(#clip1_0_22587)",
                    children: (0, C.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M41.9671 19.6H18.2846C16.8359 19.6 15.6573 20.7498 15.6573 22.1626V22.6978L27.1859 33.9303C27.9722 34.6944 29.0176 35.1161 30.1277 35.1161C31.2397 35.1161 32.2851 34.6944 33.0695 33.9303L44.6 22.6978V22.1626C44.6 20.7498 43.4158 19.6 41.9671 19.6ZM15.6 24.4566V36.2153L21.898 30.5928L15.6 24.4566ZM44.5445 36.1811L44.5445 24.4566L38.263 30.5766L44.5445 36.1811ZM33.9428 34.7826C32.9186 35.786 31.5249 36.3485 30.0722 36.3451C28.6106 36.3451 27.234 35.7899 26.1998 34.7826L22.8305 31.4992L15.6 37.9543V39.0355C15.6 40.4502 16.7804 41.6 18.231 41.6H41.9135C43.364 41.6 44.5445 40.4502 44.5445 39.0374V37.9201L37.3306 31.483L33.9447 34.7808L33.9428 34.7826Z",
                      fill: e,
                    }),
                  }),
                ],
              }),
              (0, C.jsxs)("defs", {
                children: [
                  (0, C.jsx)("clipPath", {
                    id: "clip0_0_22587",
                    children: (0, C.jsx)("rect", {
                      width: "60.2",
                      height: "60.2",
                      fill: "white",
                    }),
                  }),
                  (0, C.jsx)("clipPath", {
                    id: "clip1_0_22587",
                    children: (0, C.jsx)("rect", {
                      width: "29",
                      height: "22.0001",
                      fill: "white",
                      transform: "translate(15.6 19.6)",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        id = (n) => {
          let { ...e } = n;
          return (0, C.jsx)(M.P.svg, {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 14C3.13403 14 0 10.866 0 7C0 3.13403 3.13403 0 7 0C10.866 0 14 3.13403 14 7C14 10.866 10.866 14 7 14ZM7.65625 3.28125C7.65625 2.91878 7.36247 2.625 7 2.625C6.63753 2.625 6.34375 2.91878 6.34375 3.28125V8.09375C6.34375 8.45622 6.63753 8.75 7 8.75C7.36247 8.75 7.65625 8.45622 7.65625 8.09375V3.28125ZM6.34375 10.7188C6.34375 10.3563 6.63753 10.0625 7 10.0625C7.36247 10.0625 7.65625 10.3563 7.65625 10.7188C7.65625 11.0812 7.36247 11.375 7 11.375C6.63753 11.375 6.34375 11.0812 6.34375 10.7188Z",
              fill: "var(--pcm-error-color)",
            }),
          });
        },
        iu = (n) => {
          let { spin: e = !1, ...t } = n,
            { color: i = "var(--pcm-body-color-secondary)" } = t;
          return (0, C.jsxs)(M.P.svg, {
            width: "8",
            height: "8",
            viewBox: "0 0 8 5",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            animate: e ? "up" : "down",
            variants: { up: { rotate: 180 }, down: { rotate: 0 } },
            ...t,
            children: [
              (0, C.jsxs)("g", {
                clipPath: "url(#clip0_0_12077)",
                children: [
                  (0, C.jsx)("rect", {
                    x: "0.353892",
                    y: "0.708008",
                    width: "0.500478",
                    height: "5.00478",
                    transform: "rotate(-45 0.353892 0.708008)",
                    fill: i,
                    stroke: i,
                    strokeWidth: "0.500478",
                  }),
                  (0, C.jsx)("rect", {
                    x: "7.09778",
                    y: "0.354136",
                    width: "0.500478",
                    height: "5.00478",
                    transform: "rotate(45 7.09778 0.354136)",
                    fill: i,
                    stroke: i,
                    strokeWidth: "0.500478",
                  }),
                ],
              }),
              (0, C.jsx)("defs", {
                children: (0, C.jsx)("clipPath", {
                  id: "clip0_0_12077",
                  children: (0, C.jsx)("rect", {
                    width: "7.80557",
                    height: "4.60059",
                    fill: "white",
                    transform: "translate(0 0.000244141)",
                  }),
                }),
              }),
            ],
          });
        },
        ip = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)(M.P.svg, {
            fill: "none",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            animate: { rotate: 360 },
            transition: { repeat: 1 / 0, duration: 1, ease: "linear" },
            children: [
              (0, C.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
                opacity: 0.25,
              }),
              (0, C.jsx)("path", {
                opacity: 0.75,
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                fill: "currentColor",
              }),
            ],
          });
        },
        ig = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)(M.P.svg, {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("mask", {
                id: "mask0_420_32",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "14",
                height: "14",
                children: (0, C.jsx)("rect", {
                  width: "14",
                  height: "14",
                  fill: "white",
                }),
              }),
              (0, C.jsx)("g", {
                mask: "url(#mask0_420_32)",
                children: (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7 14C3.13403 14 0 10.866 0 7C0 3.13403 3.13403 0 7 0C10.866 0 14 3.13403 14 7C14 10.866 10.866 14 7 14ZM7.65625 3.28125C7.65625 2.91878 7.36247 2.625 7 2.625C6.63753 2.625 6.34375 2.91878 6.34375 3.28125V8.09375C6.34375 8.45622 6.63753 8.75 7 8.75C7.36247 8.75 7.65625 8.45622 7.65625 8.09375V3.28125ZM6.34375 10.7188C6.34375 10.3563 6.63753 10.0625 7 10.0625C7.36247 10.0625 7.65625 10.3563 7.65625 10.7188C7.65625 11.0812 7.36247 11.375 7 11.375C6.63753 11.375 6.34375 11.0812 6.34375 10.7188Z",
                  fill: "var(--pcm-error-color)",
                }),
              }),
            ],
          });
        },
        iM = (n) => {
          let { ...e } = n,
            { color: t = "var(--pcm-body-color-secondary)" } = e;
          return (0, C.jsxs)(M.P.svg, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            ...e,
            children: [
              (0, C.jsx)("path", {
                d: "M8.51997 12H3.47999C1.56119 12 0 10.4388 0 8.52003V3.48024C0 1.56144 1.5612 0.000244141 3.47999 0.000244141H5.99998C6.33135 0.000244141 6.59998 0.268873 6.59998 0.600243C6.59998 0.931614 6.33135 1.20024 5.99998 1.20024H3.47999C2.22299 1.20024 1.2 2.22304 1.2 3.48024V8.52023C1.2 9.77763 2.22299 10.8002 3.47999 10.8002H8.51997C9.77717 10.8002 10.8 9.77763 10.8 8.52023V6.00023C10.8 5.66886 11.0686 5.40024 11.4 5.40024C11.7313 5.40024 12 5.66886 12 6.00023V8.52023C12 10.439 10.439 12.0002 8.51997 12Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M5.60178 6.39823C5.36733 6.16402 5.36733 5.78404 5.60178 5.54983L10.9758 0.175837C11.21 -0.0586125 11.59 -0.0586125 11.8242 0.175837C12.0586 0.410045 12.0586 0.790028 11.8242 1.02424L6.44998 6.39823C6.21577 6.63268 5.83579 6.63268 5.60178 6.39823Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M12 0.599999C12 0.931369 11.7313 1.2 11.4 1.2H8.59997C8.26852 1.20011 7.99976 0.93145 7.99976 0.599999C7.99976 0.268548 8.26852 -0.000114395 8.59997 0H11.4C11.7313 1.37329e-07 12 0.268629 12 0.599999Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M11.4 3.99999C11.0686 3.99999 10.8 3.73136 10.8 3.39999V0.599999C10.8 0.268629 11.0686 0 11.4 0C11.7313 0 12 0.268629 12 0.599999V3.39999C12 3.73137 11.7313 3.99999 11.4 3.99999Z",
                fill: t,
              }),
            ],
          });
        },
        iC = (n) => {
          let { ...e } = n;
          return (0, C.jsx)("svg", {
            "aria-hidden": "true",
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z",
              fill: "currentColor",
            }),
          });
        },
        ih = (n) => {
          let { ...e } = n;
          return (0, C.jsx)("svg", {
            width: "11",
            height: "8",
            viewBox: "0 0 11 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M9.82722 0.217402C9.94242 0.0922846 10.1036 0.0150553 10.2768 0.00197893C10.45 -0.0110974 10.6218 0.0409999 10.7559 0.147299C10.8899 0.253597 10.9759 0.405801 10.9957 0.571855C11.0154 0.737908 10.9674 0.904851 10.8617 1.03752L10.8311 1.07314L4.64968 7.78277C4.53232 7.91014 4.36738 7.98774 4.1908 7.99867C4.01422 8.00959 3.84031 7.95295 3.70695 7.84109L3.67207 7.8096L0.195168 4.44344C0.0726009 4.3249 0.00265663 4.16522 7.41297e-05 3.99806C-0.00250837 3.83089 0.0624726 3.66929 0.181324 3.5473C0.300175 3.42531 0.463615 3.35247 0.637203 3.34412C0.810791 3.33577 0.98097 3.39257 1.11188 3.50254L1.14676 3.53402L4.11956 6.41219L9.82722 0.217402Z",
              fill: "var(--pcm-accent-color)",
            }),
          });
        },
        ix = (n) => {
          let { ...e } = n,
            { color: t = "var(--pcm-body-color)" } = e;
          return (0, C.jsx)("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M14.4477 3.16126C14.2695 2.99941 14.0347 2.91085 13.792 2.91085C13.7698 2.91085 13.7477 2.91085 13.7256 2.91237C13.7122 2.91389 13.5576 2.92309 13.316 2.92309C12.9156 2.92309 12.134 2.89561 11.3935 2.72005C10.4374 2.49255 9.33398 1.43908 9.01297 1.23145C8.85113 1.12614 8.66487 1.07422 8.47824 1.07422C8.29237 1.07422 8.1061 1.12614 7.94464 1.22994C7.90572 1.25589 6.75035 2.45131 5.62023 2.72005C4.88016 2.89561 4.08358 2.92309 3.68357 2.92309C3.44196 2.92309 3.28779 2.91389 3.27253 2.91237C3.25154 2.91085 3.23054 2.91085 3.20917 2.91085C2.96603 2.91085 2.73053 2.99939 2.55153 3.16126C2.35726 3.33681 2.24658 3.5826 2.24658 3.84063V6.16581C2.24658 14.7613 8.06186 15.8681 8.3084 15.9123C8.36491 15.9216 8.42177 15.9261 8.47864 15.9261C8.53513 15.9261 8.59276 15.9216 8.64848 15.9123C8.89541 15.8681 14.7534 14.7612 14.7534 6.16581V3.84063C14.7534 3.5826 14.6424 3.33683 14.4477 3.16126ZM12.2981 6.48641L8.26642 10.3872C8.24123 10.4284 8.21031 10.4697 8.1729 10.5048C8.05458 10.6193 7.8981 10.6742 7.74311 10.6712C7.58817 10.6742 7.43203 10.6193 7.31374 10.5048C7.27635 10.4697 7.24506 10.4284 7.21986 10.3872L5.0653 8.3017C4.83588 8.08031 4.83588 7.72156 5.0653 7.49864C5.29468 7.27731 5.66679 7.27731 5.8962 7.49864L7.74313 9.28646L11.4676 5.68342C11.697 5.46203 12.0687 5.46203 12.2981 5.68342C12.5275 5.90473 12.5275 6.26507 12.2981 6.48641Z",
              fill: t,
            }),
          });
        },
        ij = (n) => {
          let { ...e } = n,
            { color: t = "var(--pcm-body-color)" } = e;
          return (0, C.jsx)("svg", {
            width: "18",
            height: "17",
            viewBox: "0 0 18 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.698 3H14.9671C15.7675 3 16.4167 3.73292 16.4167 4.63711V5.63658H2.24837V4.63711C2.24837 3.73292 2.89862 3 3.698 3ZM3.69768 14.3536C2.8973 14.3536 2.24805 13.6207 2.24805 12.7165H2.24838V7.1041H16.4167V12.7165C16.4167 13.6207 15.7665 14.3536 14.9671 14.3536H3.69768Z",
              fill: t,
            }),
          });
        },
        iy = (n) => {
          let { ...e } = n,
            { color: t = "var(--pcm-body-color)" } = e;
          return (0, C.jsxs)("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("path", {
                d: "M9.76502 12.4105C9.16459 13.1925 7.98597 13.1925 7.38555 12.4105L4.72435 8.94469C3.96679 7.95808 4.67018 6.53116 5.91408 6.53116L11.2365 6.53116C12.4804 6.53116 13.1838 7.95808 12.4262 8.94469L9.76502 12.4105Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M8.5752 8.1626V2.00016V8.1626Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M8.5752 8.1626V2.00016",
                stroke: t,
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, C.jsx)("path", {
                d: "M12.194 15.0952H4.95667H12.194Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M12.194 15.0952H4.95667",
                stroke: t,
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          });
        },
        im = (n) => {
          let { ...e } = n,
            { color: t = "var(--pcm-body-color)" } = e;
          return (0, C.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 18 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M11.5 8.27428C10.6716 8.27428 10 8.97267 10 9.83416C10 10.6957 10.6716 11.394 11.5 11.394H15V13.7599C14.9948 14.4486 14.4548 15.0032 13.7925 15H4.2075C3.5452 15.0032 3.00522 14.4486 3 13.7599V6.22303C3.02008 5.50911 3.56409 4.93094 4.25 4.89453H13.75C14.4359 4.93094 14.9799 5.50911 15 6.22303V8.27428H11.5ZM10.509 2.1372C11.1011 1.82442 11.8247 2.06422 12.1339 2.67561L12.9613 4.32198L6.25941 4.37402L10.509 2.1372ZM11.4964 8.79199C12.0493 8.79199 12.4975 9.25807 12.4975 9.83301C12.4975 10.4079 12.0493 10.874 11.4964 10.874C10.9436 10.874 10.4954 10.4079 10.4954 9.83301C10.4954 9.25807 10.9436 8.79199 11.4964 8.79199Z",
              fill: t,
            }),
          });
        },
        iw = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("mask", {
                id: "mask0_1587_1472",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "15",
                height: "15",
                children: (0, C.jsx)("path", {
                  d: "M14.4 0H0V14.4H14.4V0Z",
                  fill: "white",
                }),
              }),
              (0, C.jsx)("g", {
                mask: "url(#mask0_1587_1472)",
                children: (0, C.jsx)("path", {
                  d: "M12.8145 6.36063H7.91994V1.4663C7.91994 1.08006 7.60698 0.76709 7.22073 0.76709C6.8345 0.76709 6.52155 1.08006 6.52155 1.4663V6.36063H1.62742C1.24118 6.36063 0.928223 6.67359 0.928223 7.05984C0.928223 7.44607 1.24118 7.75905 1.62742 7.75905H6.52157V12.6529C6.52157 13.0392 6.83452 13.3522 7.22075 13.3522C7.60699 13.3522 7.91995 13.0392 7.91995 12.6529V7.75905H12.8145C13.2007 7.75905 13.5137 7.44607 13.5137 7.05984C13.5137 6.67358 13.2007 6.36063 12.8145 6.36063Z",
                  fill: "currentColor",
                }),
              }),
            ],
          });
        },
        iI = (n) => {
          let { ...e } = n;
          return (0, C.jsx)("svg", {
            width: "15",
            height: "14",
            viewBox: "0 0 15 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              d: "M14.3609 6.85951L11.8328 4.4256C11.6306 4.23081 11.3272 4.23081 11.125 4.4256C10.9227 4.62025 10.9227 4.91233 11.125 5.10712L12.7935 6.71346H4.93951C4.63615 6.71346 4.4339 6.90813 4.4339 7.20023C4.4339 7.49234 4.63615 7.68696 4.93951 7.68696H12.7935L11.1251 9.29331C10.9228 9.48809 10.9228 9.78021 11.1251 9.97486C11.2262 10.0723 11.3273 10.1209 11.479 10.1209C11.6307 10.1209 11.7318 10.0722 11.833 9.97486L14.361 7.49232C14.361 7.45984 14.3779 7.44362 14.4116 7.44362C14.5633 7.29756 14.5632 7.00556 14.3609 6.85951ZM8.9957 10.6076C8.69232 10.6076 8.49007 10.8024 8.49007 11.0944V12.0681C8.49007 12.36 8.28783 12.5548 7.98446 12.5548H2.38892C2.08555 12.5548 1.88331 12.36 1.88331 12.0681V2.33234C1.88331 2.04035 2.08555 1.84561 2.38892 1.84561H7.98446C8.28783 1.84561 8.49007 2.04035 8.49007 2.33234V3.30598C8.49007 3.59798 8.69232 3.79275 8.9957 3.79275C9.29907 3.79275 9.50131 3.59797 9.50131 3.30598V2.33234C9.50131 1.50487 8.84409 0.87207 7.98446 0.87207H2.38892C1.52944 0.87207 0.87207 1.50487 0.87207 2.33234V12.0681C0.87207 12.8955 1.52945 13.5284 2.38892 13.5284H7.98446C8.84408 13.5284 9.50131 12.8955 9.50131 12.0681V11.0944C9.50131 10.8024 9.29907 10.6076 8.9957 10.6076Z",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: "0.3",
            }),
          });
        },
        iN = (n) => {
          let { ...e } = n,
            { color: t = "var(--pcm-body-color-secondary)" } = e;
          return (0, C.jsxs)("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.4776 1C10.1822 1 9.93719 1.245 9.93719 1.54045C9.93719 1.8359 10.1822 2.0809 10.4776 2.0809H14.2176L8.65452 7.64394C8.44554 7.85291 8.44554 8.1988 8.65452 8.40777C8.86349 8.61675 9.20938 8.61675 9.41835 8.40777L14.9814 2.84474V6.58466C14.9814 6.8801 15.2264 7.12511 15.5218 7.12511C15.8173 7.12511 16.0623 6.8801 16.0623 6.58466V1.54045C16.0623 1.245 15.8173 1 15.5218 1H10.4776ZM2.0809 5.12388C2.0809 4.62666 2.48444 4.22313 2.98165 4.22313H8.02586C8.3213 4.22313 8.56631 3.97812 8.56631 3.68267C8.56631 3.38723 8.3213 3.14222 8.02586 3.14222H2.98165C1.88634 3.14222 1 4.02856 1 5.12388V14.4917C1 15.587 1.88634 16.4733 2.98165 16.4733H12.3495C13.4448 16.4733 14.3311 15.587 14.3311 14.4917V9.44748C14.3311 9.15203 14.0861 8.90703 13.7907 8.90703C13.4952 8.90703 13.2502 9.15203 13.2502 9.44748V14.4917C13.2502 14.9889 12.8467 15.3924 12.3495 15.3924H2.98165C2.48444 15.3924 2.0809 14.9889 2.0809 14.4917V5.12388Z",
                fill: t,
              }),
              (0, C.jsx)("path", {
                d: "M14.2176 2.0809L14.3059 2.16929L14.5193 1.9559H14.2176V2.0809ZM8.65452 7.64394L8.7429 7.73233L8.65452 7.64394ZM8.65452 8.40777L8.7429 8.31939L8.65452 8.40777ZM9.41835 8.40777L9.32996 8.31939L9.41835 8.40777ZM14.9814 2.84474H15.1064V2.54296L14.893 2.75635L14.9814 2.84474ZM10.0622 1.54045C10.0622 1.31404 10.2512 1.125 10.4776 1.125V0.875C10.1132 0.875 9.81219 1.17597 9.81219 1.54045H10.0622ZM10.4776 1.9559C10.2512 1.9559 10.0622 1.76686 10.0622 1.54045H9.81219C9.81219 1.90493 10.1132 2.2059 10.4776 2.2059V1.9559ZM14.2176 1.9559H10.4776V2.2059H14.2176V1.9559ZM8.7429 7.73233L14.3059 2.16929L14.1292 1.99251L8.56613 7.55555L8.7429 7.73233ZM8.7429 8.31939C8.58275 8.15923 8.58275 7.89249 8.7429 7.73233L8.56613 7.55555C8.30834 7.81334 8.30834 8.23837 8.56613 8.49616L8.7429 8.31939ZM9.32996 8.31939C9.16981 8.47955 8.90306 8.47955 8.7429 8.31939L8.56613 8.49616C8.82392 8.75395 9.24895 8.75395 9.50674 8.49616L9.32996 8.31939ZM14.893 2.75635L9.32996 8.31939L9.50674 8.49616L15.0698 2.93313L14.893 2.75635ZM15.1064 6.58466V2.84474H14.8564V6.58466H15.1064ZM15.5218 7.00011C15.2954 7.00011 15.1064 6.81107 15.1064 6.58466H14.8564C14.8564 6.94914 15.1574 7.25011 15.5218 7.25011V7.00011ZM15.9373 6.58466C15.9373 6.81107 15.7483 7.00011 15.5218 7.00011V7.25011C15.8863 7.25011 16.1873 6.94914 16.1873 6.58466H15.9373ZM15.9373 1.54045V6.58466H16.1873V1.54045H15.9373ZM15.5218 1.125C15.7483 1.125 15.9373 1.31404 15.9373 1.54045H16.1873C16.1873 1.17597 15.8863 0.875 15.5218 0.875V1.125ZM10.4776 1.125H15.5218V0.875H10.4776V1.125ZM2.98165 4.09813C2.4154 4.09813 1.9559 4.55763 1.9559 5.12388H2.2059C2.2059 4.6957 2.55347 4.34813 2.98165 4.34813V4.09813ZM8.02586 4.09813H2.98165V4.34813H8.02586V4.09813ZM8.44131 3.68267C8.44131 3.90909 8.25227 4.09813 8.02586 4.09813V4.34813C8.39034 4.34813 8.69131 4.04716 8.69131 3.68267H8.44131ZM8.02586 3.26722C8.25227 3.26722 8.44131 3.45626 8.44131 3.68267H8.69131C8.69131 3.31819 8.39034 3.01722 8.02586 3.01722V3.26722ZM2.98165 3.26722H8.02586V3.01722H2.98165V3.26722ZM1.125 5.12388C1.125 4.0976 1.95537 3.26722 2.98165 3.26722V3.01722C1.8173 3.01722 0.875 3.95953 0.875 5.12388H1.125ZM1.125 14.4917V5.12388H0.875V14.4917H1.125ZM2.98165 16.3483C1.95537 16.3483 1.125 15.518 1.125 14.4917H0.875C0.875 15.656 1.8173 16.5983 2.98165 16.5983V16.3483ZM12.3495 16.3483H2.98165V16.5983H12.3495V16.3483ZM14.2061 14.4917C14.2061 15.518 13.3757 16.3483 12.3495 16.3483V16.5983C13.5138 16.5983 14.4561 15.656 14.4561 14.4917H14.2061ZM14.2061 9.44748V14.4917H14.4561V9.44748H14.2061ZM13.7907 9.03203C14.0171 9.03203 14.2061 9.22107 14.2061 9.44748H14.4561C14.4561 9.083 14.1551 8.78203 13.7907 8.78203V9.03203ZM13.3752 9.44748C13.3752 9.22107 13.5643 9.03203 13.7907 9.03203V8.78203C13.4262 8.78203 13.1252 9.083 13.1252 9.44748H13.3752ZM13.3752 14.4917V9.44748H13.1252V14.4917H13.3752ZM12.3495 15.5174C12.9157 15.5174 13.3752 15.0579 13.3752 14.4917H13.1252C13.1252 14.9199 12.7776 15.2674 12.3495 15.2674V15.5174ZM2.98165 15.5174H12.3495V15.2674H2.98165V15.5174ZM1.9559 14.4917C1.9559 15.0579 2.4154 15.5174 2.98165 15.5174V15.2674C2.55347 15.2674 2.2059 14.9199 2.2059 14.4917H1.9559ZM1.9559 5.12388V14.4917H2.2059V5.12388H1.9559Z",
                fill: t,
              }),
            ],
          });
        },
        iD = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)("svg", {
            "aria-hidden": "true",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("path", {
                className: "bg",
                d: "M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5",
                strokeWidth: "1.4",
              }),
              (0, C.jsx)("rect", {
                className: "bg",
                x: "10",
                y: "10",
                width: "9",
                height: "9",
                rx: "2",
                strokeWidth: "1.4",
              }),
              (0, C.jsx)("path", {
                d: "M1 3L3 5L7 1",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "#ffffff",
              }),
            ],
          });
        },
        iv = (n) => {
          let { ...e } = n;
          return (0, C.jsx)("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsxs)("g", {
              clipPath: "url(#clip0_669_1196)",
              children: [
                (0, C.jsx)("circle", { cx: "14", cy: "14", r: "14" }),
                (0, C.jsx)("path", {
                  d: "M19.3536 14.3536C19.5488 14.1583 19.5488 13.8417 19.3536 13.6464L16.1716 10.4645C15.9763 10.2692 15.6597 10.2692 15.4645 10.4645C15.2692 10.6597 15.2692 10.9763 15.4645 11.1716L18.2929 14L15.4645 16.8284C15.2692 17.0237 15.2692 17.3403 15.4645 17.5355C15.6597 17.7308 15.9763 17.7308 16.1716 17.5355L19.3536 14.3536ZM10 14.5H19V13.5H10V14.5Z",
                }),
              ],
            }),
          });
        },
        ik = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("circle", {
                opacity: "0.15",
                cx: "15",
                cy: "15",
                r: "15",
                fill: "#8B8E9F",
              }),
              (0, C.jsx)("g", {
                clipPath: "url(#clip0_1533_548)",
                children: (0, C.jsx)("path", {
                  d: "M17.4182 9.27308C17.3338 9.27308 17.2529 9.23956 17.1932 9.17989C17.1335 9.12022 17.1 9.03929 17.1 8.9549C17.1 8.87051 17.1335 8.78958 17.1932 8.72991C17.2529 8.67024 17.3338 8.63672 17.4182 8.63672H19.1109C19.7084 8.63672 20.2814 8.87406 20.7038 9.29653C21.1263 9.719 21.3636 10.292 21.3636 10.8894V12.3404C21.3636 12.4247 21.3301 12.5057 21.2704 12.5653C21.2108 12.625 21.1298 12.6585 21.0454 12.6585C20.9611 12.6585 20.8801 12.625 20.8205 12.5653C20.7608 12.5057 20.7273 12.4247 20.7273 12.3404V10.8894C20.7273 10.4608 20.557 10.0496 20.2538 9.7465C19.9507 9.44338 19.5396 9.27308 19.1109 9.27308H17.4182ZM20.7273 17.4185C20.7273 17.3342 20.7608 17.2532 20.8205 17.1935C20.8801 17.1339 20.9611 17.1004 21.0454 17.1004C21.1298 17.1004 21.2108 17.1339 21.2704 17.1935C21.3301 17.2532 21.3636 17.3342 21.3636 17.4185V19.1113C21.3636 19.7087 21.1263 20.2817 20.7038 20.7042C20.2814 21.1267 19.7084 21.364 19.1109 21.364H17.4182C17.3338 21.364 17.2529 21.3305 17.1932 21.2708C17.1335 21.2111 17.1 21.1302 17.1 21.0458C17.1 20.9614 17.1335 20.8805 17.1932 20.8208C17.2529 20.7612 17.3338 20.7276 17.4182 20.7276H19.1109C19.5396 20.7276 19.9507 20.5573 20.2538 20.2542C20.557 19.9511 20.7273 19.54 20.7273 19.1113V17.4185ZM12.34 20.7276C12.4244 20.7276 12.5053 20.7612 12.565 20.8208C12.6247 20.8805 12.6582 20.9614 12.6582 21.0458C12.6582 21.1302 12.6247 21.2111 12.565 21.2708C12.5053 21.3305 12.4244 21.364 12.34 21.364H10.8891C10.2916 21.364 9.71863 21.1267 9.29617 20.7042C8.8737 20.2817 8.63636 19.7087 8.63636 19.1113V17.4185C8.63636 17.3342 8.66988 17.2532 8.72955 17.1935C8.78922 17.1339 8.87015 17.1004 8.95454 17.1004C9.03893 17.1004 9.11986 17.1339 9.17953 17.1935C9.2392 17.2532 9.27272 17.3342 9.27272 17.4185V19.1113C9.27272 19.54 9.44302 19.9511 9.74614 20.2542C10.0493 20.5573 10.4604 20.7276 10.8891 20.7276H12.34ZM9.27272 12.3404C9.27272 12.4247 9.2392 12.5057 9.17953 12.5653C9.11986 12.625 9.03893 12.6585 8.95454 12.6585C8.87015 12.6585 8.78922 12.625 8.72955 12.5653C8.66988 12.5057 8.63636 12.4247 8.63636 12.3404V10.8894C8.63636 10.292 8.8737 9.719 9.29617 9.29653C9.71863 8.87406 10.2916 8.63672 10.8891 8.63672H12.34C12.4244 8.63672 12.5053 8.67024 12.565 8.72991C12.6247 8.78958 12.6582 8.87051 12.6582 8.9549C12.6582 9.03929 12.6247 9.12022 12.565 9.17989C12.5053 9.23956 12.4244 9.27308 12.34 9.27308H10.8891C10.4604 9.27308 10.0493 9.44338 9.74614 9.7465C9.44302 10.0496 9.27272 10.4608 9.27272 10.8894V12.3404ZM14.6818 12.7731C14.6818 12.6887 14.7153 12.6078 14.775 12.5481C14.8347 12.4884 14.9156 12.4549 15 12.4549C15.0844 12.4549 15.1653 12.4884 15.225 12.5481C15.2847 12.6078 15.3182 12.6887 15.3182 12.7731V15.0004C15.3182 15.2535 15.2176 15.4963 15.0386 15.6753C14.8596 15.8543 14.6168 15.9549 14.3636 15.9549H14.0454C13.9611 15.9549 13.8801 15.9214 13.8205 15.8617C13.7608 15.802 13.7273 15.7211 13.7273 15.6367C13.7273 15.5523 13.7608 15.4714 13.8205 15.4117C13.8801 15.3521 13.9611 15.3185 14.0454 15.3185H14.3636C14.4054 15.3185 14.4468 15.3103 14.4854 15.2943C14.524 15.2783 14.5591 15.2549 14.5886 15.2253C14.6182 15.1958 14.6416 15.1607 14.6576 15.1221C14.6736 15.0835 14.6818 15.0421 14.6818 15.0004V12.7731ZM12.1364 12.7731C12.1364 12.6887 12.1699 12.6078 12.2296 12.5481C12.2892 12.4884 12.3702 12.4549 12.4545 12.4549C12.5389 12.4549 12.6199 12.4884 12.6795 12.5481C12.7392 12.6078 12.7727 12.6887 12.7727 12.7731V14.0458C12.7727 14.1302 12.7392 14.2111 12.6795 14.2708C12.6199 14.3305 12.5389 14.364 12.4545 14.364C12.3702 14.364 12.2892 14.3305 12.2296 14.2708C12.1699 14.2111 12.1364 14.1302 12.1364 14.0458V12.7731ZM17.2273 12.7731C17.2273 12.6887 17.2608 12.6078 17.3205 12.5481C17.3801 12.4884 17.4611 12.4549 17.5454 12.4549C17.6298 12.4549 17.7108 12.4884 17.7704 12.5481C17.8301 12.6078 17.8636 12.6887 17.8636 12.7731V14.0458C17.8636 14.1302 17.8301 14.2111 17.7704 14.2708C17.7108 14.3305 17.6298 14.364 17.5454 14.364C17.4611 14.364 17.3801 14.3305 17.3205 14.2708C17.2608 14.2111 17.2273 14.1302 17.2273 14.0458V12.7731ZM12.4536 17.57C12.4225 17.542 12.3973 17.5082 12.3793 17.4705C12.3614 17.4327 12.351 17.3919 12.3488 17.3501C12.3466 17.3084 12.3527 17.2666 12.3667 17.2272C12.3806 17.1879 12.4022 17.1516 12.4302 17.1206C12.4582 17.0895 12.492 17.0643 12.5297 17.0463C12.5674 17.0283 12.6083 17.018 12.6501 17.0158C12.6918 17.0136 12.7336 17.0197 12.7729 17.0336C12.8123 17.0476 12.8486 17.0692 12.8796 17.0972C13.4683 17.6273 14.1699 17.8904 15 17.8904C15.8304 17.8904 16.532 17.6273 17.1204 17.0972C17.1831 17.0407 17.2656 17.0114 17.3499 17.0158C17.4342 17.0202 17.5133 17.0579 17.5698 17.1206C17.6263 17.1833 17.6556 17.2658 17.6512 17.3501C17.6468 17.4344 17.6091 17.5135 17.5464 17.57C16.8397 18.2067 15.9857 18.5268 15 18.5268C14.0143 18.5268 13.1603 18.2067 12.4536 17.57Z",
                  fill: "black",
                  stroke: "currentColor",
                  strokeWidth: "0.4",
                }),
              }),
              (0, C.jsx)("defs", {
                children: (0, C.jsx)("clipPath", {
                  id: "clip0_1533_548",
                  children: (0, C.jsx)("rect", {
                    width: "14",
                    height: "14",
                    fill: "white",
                    transform: "translate(8 8)",
                  }),
                }),
              }),
            ],
          });
        },
        iL = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsx)("circle", {
                opacity: "0.15",
                cx: "15",
                cy: "15",
                r: "15",
                fill: "#8B8E9F",
              }),
              (0, C.jsx)("path", {
                d: "M15 14.6945C14.6161 14.6945 14.248 14.542 13.9766 14.2706C13.7052 13.9991 13.5527 13.631 13.5527 13.2471C13.5527 12.8633 13.7052 12.4951 13.9766 12.2237C14.248 11.9523 14.6161 11.7998 15 11.7998C15.3839 11.7998 15.7522 11.9523 16.0237 12.2238C16.2951 12.4953 16.4477 12.8635 16.4477 13.2475C16.4477 13.6314 16.2951 13.9996 16.0237 14.2711C15.7522 14.5426 15.3839 14.6951 15 14.6951V16.8658",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, C.jsx)("path", {
                d: "M20.7814 14.9267V11.4067C20.7815 11.1366 20.6966 10.8733 20.5387 10.6541C20.3807 10.435 20.1577 10.2712 19.9014 10.186L16.6254 9.09337C15.5696 8.74622 14.4304 8.74622 13.3747 9.09337L10.0987 10.1854C9.84239 10.2704 9.61942 10.4341 9.46145 10.6531C9.30348 10.8721 9.21853 11.1353 9.21869 11.4054V14.9254C9.21874 15.7943 9.4391 16.649 9.85917 17.4096C10.2792 18.1702 10.8853 18.8119 11.6207 19.2747L14.3194 20.9707C14.5235 21.0982 14.7593 21.1658 15 21.1658C15.2407 21.1658 15.4766 21.0982 15.6807 20.9707L18.3787 19.2747C19.1142 18.8121 19.7203 18.1705 20.1405 17.41C20.5607 16.6495 20.7812 15.7949 20.7814 14.926",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        iT = (n) => {
          let { ...e } = n;
          return (0, C.jsxs)("svg", {
            width: "61",
            height: "61",
            viewBox: "0 0 61 61",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, C.jsxs)("g", {
                clipPath: "url(#clip0_3623_33559)",
                children: [
                  (0, C.jsx)("path", {
                    opacity: "0.15",
                    d: "M30.1 0C46.7238 0 60.2 13.4762 60.2 30.1C60.2 46.7238 46.7238 60.2 30.1 60.2C13.4762 60.2 0 46.7238 0 30.1C0 13.4762 13.4762 0 30.1 0Z",
                    fill: "var(--pcm-accent-color)",
                  }),
                  (0, C.jsx)("path", {
                    d: "M20.8001 24.3253C20.8 23.19 21.0939 22.074 21.6531 21.086C22.2124 20.098 23.0179 19.2717 23.9914 18.6874C24.9648 18.1032 26.0729 17.781 27.2078 17.7521C28.3428 17.7233 29.4658 17.9888 30.4677 18.5229C31.4695 19.0569 32.316 19.8413 32.9247 20.7996C33.5334 21.7579 33.8836 22.8576 33.9412 23.9914C33.9987 25.1252 33.7617 26.2547 33.2532 27.2697C32.7447 28.2847 31.982 29.1508 31.0394 29.7836C32.4531 30.3102 33.7364 31.1358 34.8019 32.2038C35.0994 32.5013 35.2516 32.9126 35.2534 33.3343C35.2586 34.3808 35.2551 35.4291 35.2534 36.4756L35.2499 38.3621V39.6238C35.2499 39.8559 35.1577 40.0784 34.9936 40.2425C34.8295 40.4066 34.6069 40.4988 34.3749 40.4988H18.1366C17.9644 40.491 17.7955 40.4492 17.6394 40.376C17.4834 40.3027 17.3433 40.1994 17.2273 40.072C17.1112 39.9446 17.0214 39.7955 16.9631 39.6333C16.9047 39.4711 16.8789 39.299 16.8871 39.1268C16.9852 37.0726 17.6841 35.0923 18.8969 33.4315C20.1098 31.7706 21.7835 30.5023 23.7104 29.7836C22.8144 29.1827 22.0802 28.3704 21.5726 27.4184C21.0651 26.4664 20.7998 25.4041 20.8001 24.3253Z",
                    fill: "var(--pcm-accent-color)",
                  }),
                  (0, C.jsx)("path", {
                    d: "M43.5625 28.0309C43.5625 29.5604 42.7785 30.9061 41.5903 31.6884C41.5252 31.7296 41.4715 31.7864 41.4339 31.8536C41.3963 31.9209 41.3761 31.9964 41.375 32.0734V33.1059C41.375 33.2231 41.3295 33.3334 41.2473 33.4156L40.6243 34.0386C40.6039 34.0589 40.5877 34.0831 40.5767 34.1097C40.5657 34.1362 40.56 34.1647 40.56 34.1935C40.56 34.2223 40.5657 34.2508 40.5767 34.2773C40.5877 34.3039 40.6039 34.3281 40.6243 34.3484L41.2473 34.9714C41.3295 35.0536 41.375 35.1639 41.375 35.2794V35.6836C41.375 35.8009 41.3295 35.9111 41.2473 35.9934L40.6243 36.6164C40.6039 36.6367 40.5877 36.6608 40.5767 36.6874C40.5657 36.714 40.56 36.7425 40.56 36.7712C40.56 36.8 40.5657 36.8285 40.5767 36.8551C40.5877 36.8817 40.6039 36.9058 40.6243 36.9261L41.2473 37.5491C41.3295 37.6314 41.375 37.7416 41.375 37.8589V38.3611C41.3754 38.4699 41.3348 38.5749 41.2613 38.6551L39.8613 40.1951C39.776 40.2891 39.672 40.3641 39.5559 40.4155C39.4399 40.4669 39.3144 40.4934 39.1875 40.4934C39.0606 40.4934 38.9351 40.4669 38.8191 40.4155C38.703 40.3641 38.599 40.2891 38.5137 40.1951L37.1137 38.6551C37.0402 38.5749 36.9996 38.4699 37 38.3611V32.0734C36.9991 31.9963 36.9789 31.9208 36.9413 31.8535C36.9037 31.7863 36.8499 31.7295 36.7847 31.6884C36.152 31.2725 35.6379 30.6996 35.293 30.0255C34.948 29.3515 34.7838 28.5994 34.8166 27.8429C34.8494 27.0865 35.0779 26.3514 35.4799 25.7097C35.8818 25.068 36.4435 24.5416 37.1098 24.1821C37.7762 23.8225 38.5245 23.642 39.2815 23.6582C40.0385 23.6745 40.7784 23.887 41.4287 24.2749C42.079 24.6627 42.6175 25.2128 42.9915 25.8711C43.3655 26.5295 43.5623 27.2737 43.5625 28.0309ZM40.5 27.3746C40.5 27.0265 40.3617 26.6927 40.1156 26.4465C39.8694 26.2004 39.5356 26.0621 39.1875 26.0621C38.8394 26.0621 38.5056 26.2004 38.2594 26.4465C38.0133 26.6927 37.875 27.0265 37.875 27.3746C37.875 27.7227 38.0133 28.0566 38.2594 28.3027C38.5056 28.5488 38.8394 28.6871 39.1875 28.6871C39.5356 28.6871 39.8694 28.5488 40.1156 28.3027C40.3617 28.0566 40.5 27.7227 40.5 27.3746Z",
                    fill: "var(--pcm-accent-color)",
                  }),
                ],
              }),
              (0, C.jsx)("defs", {
                children: (0, C.jsx)("clipPath", {
                  id: "clip0_3623_33559",
                  children: (0, C.jsx)("rect", {
                    width: "60.2",
                    height: "60.2",
                    fill: "white",
                  }),
                }),
              }),
            ],
          });
        },
        ib = (0, x.I4)(M.P.div)(
          E(),
          (n) => {
            var e;
            return null !== (e = n.width) && void 0 !== e ? e : 60;
          },
          (n) => {
            var e;
            return null !== (e = n.height) && void 0 !== e ? e : 60;
          }
        ),
        iA = (0, x.I4)(M.P.div)(
          S(),
          (n) => {
            var e;
            return null !== (e = n.inset) && void 0 !== e ? e : 6;
          },
          (n) => n.$small && (0, x.AH)(O())
        ),
        iz = (0, x.I4)(M.P.div)(U()),
        iE = (0, x.I4)(M.P.div)(Z()),
        iO = (0, x.I4)(M.P.div)(F()),
        iS = (n) => {
          let {
            logo: e,
            smallLogo: t,
            connecting: i = !0,
            unavailable: o = !1,
            countdown: r = !1,
            width: l = 60,
            height: a = 60,
            inset: s = 4,
          } = n;
          return (0, C.jsxs)(ib, {
            transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 0.98] },
            width: l,
            height: a,
            children: [
              (0, C.jsx)(iA, {
                $small: !o && t,
                style: {
                  background: "none",
                  ...(o ? { borderRadius: 0 } : {}),
                },
                inset: s,
                children: e,
              }),
              (0, C.jsx)(iz, {
                children: (0, C.jsxs)(h.N, {
                  children: [
                    i &&
                      (0, C.jsx)(
                        iO,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: r ? 1 : 0 },
                          },
                          children: (0, C.jsxs)("svg", {
                            "aria-hidden": "true",
                            width: l + 2,
                            height: a + 2,
                            viewBox: "0 0 102 102",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, C.jsx)("path", {
                                d: "M52 100C24.3858 100 2 77.6142 2 50",
                                stroke: "url(#paint0_linear_1943_4139)",
                                strokeWidth: "3.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                              (0, C.jsx)("defs", {
                                children: (0, C.jsxs)("linearGradient", {
                                  id: "paint0_linear_1943_4139",
                                  x1: "2",
                                  y1: "48.5",
                                  x2: "53",
                                  y2: "100",
                                  gradientUnits: "userSpaceOnUse",
                                  children: [
                                    (0, C.jsx)("stop", {
                                      stopColor: "var(--pcm-accent-color)",
                                    }),
                                    (0, C.jsx)("stop", {
                                      offset: "1",
                                      stopColor: "var(--pcm-accent-color)",
                                      stopOpacity: "0",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        "Spinner"
                      ),
                    r &&
                      (0, C.jsxs)(
                        iE,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 0.25 },
                          children: [
                            (0, C.jsx)("div", {}),
                            (0, C.jsx)("div", {}),
                          ],
                        },
                        "ExpiringSpinner"
                      ),
                  ],
                }),
              }),
            ],
          });
        },
        iU = x.I4.div(P()),
        iZ = x.I4.div(Q()),
        iF = x.I4.input(
          V(),
          (n) => {
            let { error: e } = n;
            return e ? "var(--pcm-error-color)" : "var(--pcm-body-color)";
          },
          (n) => {
            let { error: e } = n;
            return e
              ? "var(--pcm-error-background)"
              : "var(--pcm-body-background-secondary)";
          }
        ),
        iP = x.I4.div(
          H(),
          (n) => {
            let { $showFocusBorder: e } = n;
            return e ? 1 : 0;
          },
          (n) => {
            let { $focusIndex: e } = n;
            return 5 + 52 * e;
          }
        ),
        iQ = ["alpha", "numeric", "alphanumeric"],
        iV = {
          alpha: { type: "text", inputMode: "text", pattern: "[a-zA-Z]{1}" },
          alphanumeric: {
            type: "text",
            inputMode: "text",
            pattern: "[a-zA-Z0-9]{1}",
          },
          numeric: {
            type: "tel",
            inputMode: "numeric",
            pattern: "[0-9]{1}",
            min: "0",
            max: "9",
          },
        },
        iH = (0, s.forwardRef)((n, e) => {
          let {
            allowedCharacters: t = "alphanumeric",
            ariaLabel: i,
            autoFocus: o = !0,
            disabled: r,
            isPassword: l = !1,
            length: a = 6,
            placeholder: c,
            onChange: d,
            code: u = "",
            error: p = "",
          } = n;
          if (isNaN(a) || a < 1)
            throw Error("Length should be a number and greater than 0");
          if (!iQ.some((n) => n === t))
            throw Error(
              "Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric"
            );
          let [g, M] = s.useState(0),
            [h, x] = s.useState(!1),
            j = (0, s.useRef)([]),
            f = iV[t],
            y = (0, s.useRef)(null);
          (0, s.useImperativeHandle)(e, () => ({
            focus: () => {
              if (j.current) {
                var n;
                null === (n = j.current[0]) || void 0 === n || n.focus();
              }
            },
            clear: () => {
              if (j.current) {
                for (let e = 0; e < j.current.length; e++) {
                  var n;
                  (null === (n = j.current) || void 0 === n ? void 0 : n[e]) &&
                    (j.current[e].value = "");
                }
                j.current[0].focus();
              }
              w();
            },
          })),
            (0, s.useEffect)(() => {
              if (u) {
                for (let n = 0; n < j.current.length; n++)
                  j.current[n].value = "";
                for (let e = 0; e < u.length; e++) {
                  var n;
                  (null === (n = j.current) || void 0 === n ? void 0 : n[e]) &&
                    (j.current[e].value = u[e] || "");
                }
                w();
              }
            }, [u]);
          let m = j.current.map((n) => n.value).join("") || "",
            w = () => {
              let n = j.current.map((n) => n.value).join("");
              m !== n &&
                (6 === n.length &&
                  setTimeout(() => {
                    j.current.forEach((n) => {
                      n.blur();
                    });
                  }, 400),
                d && d(n),
                (m = n));
            },
            I = (n) => {
              let {
                target: { value: e, nextElementSibling: t },
              } = n;
              if (1 == e.length)
                e.match(f.pattern)
                  ? null !== t && t.focus()
                  : (n.target.value = "");
              else if (e.length > 1) {
                let t = Number(n.target.getAttribute("data-index")) || 0;
                for (let n = 0; n < e.length; n++) {
                  var i;
                  let o = e.charAt(n);
                  o.match(f.pattern) &&
                    (null === (i = j.current) || void 0 === i
                      ? void 0
                      : i[t]) &&
                    ((j.current[t].value = o),
                    null !== j.current[t].nextElementSibling &&
                      (j.current[t].nextElementSibling.focus(), t++));
                }
              }
              setTimeout(() => {
                w();
              });
            },
            N = (n) => {
              let { key: e } = n,
                t = n.target;
              if ("Backspace" === e) {
                if ("" === t.value) {
                  if (null !== t.previousElementSibling) {
                    let e = t.previousElementSibling;
                    (e.value = ""), e.focus(), n.preventDefault();
                  }
                } else t.value = "";
                setTimeout(() => {
                  w();
                });
              }
            },
            D = (n) => {
              n.target.select();
            },
            v = (n) => {
              var e;
              let t =
                null !== (e = n.clipboardData.getData("Text")) && void 0 !== e
                  ? e
                  : "";
              t = t.replace(/\s/g, "").substring(0, 6);
              let i = g;
              for (let n = 0; n < t.length; n++) {
                let e = t.charAt(n),
                  o = j.current[i];
                if (!o) break;
                let r = null == o ? void 0 : o.value;
                e.match(f.pattern) &&
                  !r &&
                  ((j.current[i].value = e),
                  null !== j.current[i].nextElementSibling &&
                    (j.current[i].nextElementSibling.focus(), i++));
              }
              w(), n.preventDefault();
            };
          return (0, C.jsxs)(iU, {
            ref: y,
            children: [
              (0, C.jsx)(iP, { $focusIndex: g, $showFocusBorder: h }),
              Array(6)
                .fill(0)
                .map((n, e) =>
                  (0, C.jsx)(
                    iF,
                    {
                      "data-index": e,
                      onChange: I,
                      onKeyDown: N,
                      onFocus: (n) => {
                        x(!0), M(e), D(n);
                      },
                      autoFocus: o && 0 === e,
                      onBlur: () => {
                        x(!1);
                      },
                      onPaste: v,
                      ...f,
                      type: l ? "password" : f.type,
                      ref: (n) => {
                        j.current[e] = n;
                      },
                      autoComplete: 0 === e ? "one-time-code" : "off",
                      "aria-label": i
                        ? "".concat(i, ". Character ").concat(e + 1, ".")
                        : "Character ".concat(e + 1, "."),
                      disabled: r,
                      placeholder: c,
                      error: p,
                    },
                    e
                  )
                ),
              (0, C.jsx)(iZ, {
                onClick: (n) => {
                  n.preventDefault(), n.stopPropagation();
                  for (let n = j.current.length - 1; n >= 0; n--)
                    if (
                      (n > 0 &&
                        !j.current[n].value &&
                        j.current[n - 1].value) ||
                      (0 === n && !j.current[n].value) ||
                      (n == j.current.length - 1 && j.current[n].value)
                    ) {
                      j.current[n].focus(),
                        j.current[n].setSelectionRange(
                          j.current[n].value.length,
                          j.current[n].value.length
                        );
                      break;
                    }
                },
              }),
            ],
          });
        }),
        iY = (0, x.i7)(Y()),
        i_ = (0, x.i7)(_()),
        iW = (0, x.i7)(W()),
        iB = (0, x.i7)(B()),
        iR = (0, x.i7)(R()),
        iG = (0, x.i7)(G()),
        i$ = x.I4.div($()),
        iJ = (0, x.I4)(M.P.div)(J(), (n) => (n.$active ? iY : i_)),
        iK = (0, x.I4)(M.P.div)(
          K(),
          (n) => (n.$positionInside ? "unset" : "absolute"),
          (n) => (n.$positionInside ? "none" : "translate(-50%, -50%)")
        ),
        iX = (0, x.I4)(M.P.div)(
          X(),
          (n) => (n.$positionInside ? null : iB),
          (n) => (n.$positionInside ? null : iW),
          (n) => (n.$positionInside ? null : iG),
          (n) => (n.$positionInside ? null : 0),
          (n) => (n.$positionInside ? null : 0),
          (n) => (n.$positionInside ? null : iR)
        ),
        iq = (0, x.I4)(M.P.div)(q()),
        i1 = (0, x.I4)(M.P.div)(nn()),
        i0 = (0, x.I4)(M.P.div)(ne(), iY),
        i2 = (0, x.I4)(M.P.div)(nt()),
        i4 = (0, x.I4)(M.P.button)(ni()),
        i3 = (0, x.I4)(M.P.button)(no()),
        i5 = (0, x.I4)(M.P.div)(nr()),
        i6 = (0, x.I4)(M.P.div)(nl()),
        i9 = (0, x.I4)(M.P.div)(
          na(),
          (n) => (n.$display ? "flex" : "none"),
          (n) => (n.$display ? iY : i_)
        );
      (0, x.I4)(M.P.div)(ns());
      var i7 = x.I4.div(nc(), (n) => n.gap || 0),
        i8 = x.I4.div(nd(), (n) => n.gap || 0);
      x.I4.div(nu(), (n) => n.gap || 0);
      var on = x.I4.div(np(), (n) => n.gap || 0),
        oe = (0, x.I4)(M.P.div)(ng()),
        ot = (0, x.I4)(M.P.div)(
          nM(),
          (n) => n.width,
          (n) => n.height
        ),
        oi = (n) => {
          let {
            size: e = "50%",
            borderColor: t = "#a748ff",
            borderWidth: i = 3,
            spin: o = !1,
            children: r,
          } = n;
          return (0, C.jsxs)(oe, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: [
              o &&
                (0, C.jsx)(C.Fragment, {
                  children: [void 0, void 0, void 0, void 0].map((n, o) =>
                    (0, C.jsx)(
                      ot,
                      {
                        width: e,
                        height: e,
                        style: {
                          animationDelay: "-".concat(0.15 * o, "s"),
                          borderWidth: i,
                          borderColor: "".concat(
                            t,
                            " transparent transparent transparent"
                          ),
                        },
                      },
                      o
                    )
                  ),
                }),
              (0, C.jsx)("div", {
                style: { opacity: o ? 0.05 : 1 },
                children: r,
              }),
            ],
          });
        },
        oo = x.I4.div(nC()),
        or = x.I4.div(nh(), (n) => {
          let { $pointer: e } = n;
          return e ? "pointer" : "default";
        }),
        ol = (n) => {
          let { reSendCode: e } = n,
            t = it(),
            [i, o] = (0, s.useState)(0),
            { showError: r } = ii(),
            [l, a] = (0, s.useState)(60),
            [c, d] = (0, s.useState)(!1),
            u = (0, s.useRef)(null),
            p = () => {
              a(60),
                o(1),
                (u.current = setInterval(() => {
                  a((n) => {
                    let e = n - 1;
                    return 0 === e && (o(2), clearInterval(u.current)), e;
                  });
                }, 1e3));
            },
            g = async () => {
              try {
                if (c) return;
                d(!0), 2 === i && (await e(), p());
              } catch (n) {
                r((null == n ? void 0 : n.message) || "");
              }
              setTimeout(() => {
                d(!1);
              }, 100);
            };
          return (
            (0, s.useEffect)(
              () => (
                p(),
                () => {
                  clearInterval(u.current);
                }
              ),
              []
            ),
            (0, C.jsx)(oo, {
              children:
                0 !== i &&
                (0, C.jsxs)("div", {
                  children: [
                    t.didNotReceiveCode,
                    (0, C.jsx)(or, {
                      $pointer: 2 === i,
                      children:
                        1 === i || 3 === i
                          ? "".concat(l, " s")
                          : 2 === i
                          ? (0, C.jsxs)(C.Fragment, {
                              children: [
                                c &&
                                  (0, C.jsx)("div", {
                                    style: {
                                      width: "24px",
                                      height: "24px",
                                      top: "1px",
                                      position: "relative",
                                    },
                                    children: (0, C.jsx)(oi, {
                                      spin: !0,
                                      borderWidth: 2,
                                    }),
                                  }),
                                (0, C.jsx)("div", {
                                  onClick: g,
                                  children: t.resendCode,
                                }),
                              ],
                            })
                          : "",
                    }),
                  ],
                }),
            })
          );
        };
      async function oa(n, e) {
        let t = e.connector;
        if (t.uid === n.state.current) throw new j.nM();
        try {
          var i;
          n.setState((n) => ({ ...n, status: "connecting" })),
            t.emitter.emit("message", { type: "connecting" });
          let o = await t.connect({
              chainId: e.chainId,
              ...e.authParams,
              ...e.passkeyParams,
            }),
            r = o.accounts;
          return (
            t.emitter.off("connect", n._internal.events.connect),
            t.emitter.on("change", n._internal.events.change),
            t.emitter.on("disconnect", n._internal.events.disconnect),
            await (null === (i = n.storage) || void 0 === i
              ? void 0
              : i.setItem("recentConnectorId", t.id)),
            n.setState((n) => ({
              ...n,
              connections: new Map(n.connections).set(t.uid, {
                accounts: r,
                chainId: o.chainId,
                connector: t,
              }),
              current: t.uid,
              status: "connected",
            })),
            { accounts: r, chainId: o.chainId }
          );
        } catch (e) {
          throw (
            (n.setState((n) => ({
              ...n,
              status: n.current ? "connected" : "disconnected",
            })),
            e)
          );
        }
      }
      var os =
          "undefined" != typeof window
            ? localStorage.getItem("pcm-recent")
            : void 0,
        oc = (0, p.vt)((n) => ({
          lastConnectorId: os,
          updateLastConnectorId: (e) => {
            let t = e.replace("solana_", "");
            localStorage.setItem("pcm-recent", t), n({ lastConnectorId: t });
          },
        })),
        od = (n, e) => {
          let [t, i] = (0, s.useState)("idle"),
            [o, r] = (0, s.useState)(null),
            [l, a] = (0, s.useState)(null),
            c = (0, s.useCallback)(
              async (t) => {
                (null == e ? void 0 : e.onMutate) && e.onMutate(t),
                  i("loading"),
                  r(null),
                  a(null);
                try {
                  let o = await n(t);
                  return (
                    r(o),
                    i("success"),
                    (null == e ? void 0 : e.onSuccess) && e.onSuccess(o),
                    (null == e ? void 0 : e.onSettled) && e.onSettled(o, null),
                    o
                  );
                } catch (n) {
                  throw (
                    (a(n),
                    i("error"),
                    (null == e ? void 0 : e.onError) && e.onError(n),
                    (null == e ? void 0 : e.onSettled) && e.onSettled(null, n),
                    n)
                  );
                }
              },
              [n, e]
            );
          return {
            status: t,
            data: o,
            error: l,
            mutate: (0, s.useCallback)(
              (n) => {
                c(n).catch(() => {});
              },
              [c]
            ),
            mutateAsync: c,
          };
        };
      function ou(n) {
        let { config: e, options: t } = sa(),
          { updateLastConnectorId: i } = oc(),
          {
            status: o,
            data: r,
            error: l,
            mutate: a,
            mutateAsync: s,
          } = od(async (n) => {
            let { connector: o, chainId: r } = n,
              l = r;
            if (!l) {
              var a, s, c, d;
              "evm" === o.chainType
                ? (l =
                    null === (a = t.initialChainId) || void 0 === a
                      ? void 0
                      : a.evm) ||
                  (l =
                    null === (s = e.chains.find(g.GV)) || void 0 === s
                      ? void 0
                      : s.id)
                : (l =
                    null === (c = t.initialChainId) || void 0 === c
                      ? void 0
                      : c.solana) ||
                  (l =
                    null === (d = e.chains.find(g.ES)) || void 0 === d
                      ? void 0
                      : d.id);
            }
            let u = await oa(e, { ...n, chainId: l });
            return "walletConnect" !== o.id && i(o.id), u;
          }, n);
        return { status: o, data: r, error: l, connect: a, connectAsync: s };
      }
      var op = [];
      function og(n) {
        let e = n.connectors;
        return t0(op, e) ? op : ((op = e), e);
      }
      var oM = () => {
        let { config: n } = sa();
        return (0, s.useSyncExternalStore)(
          (e) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n._internal.connectors.subscribe((n, e) => {
                t(Object.values(n), e);
              });
            })(n, { onChange: e }),
          () => og(n),
          () => og(n)
        );
      };
      function oC(n) {
        return oM().find((e) => e.id === n);
      }
      var oh = () => {
          let { setOpen: n, open: e } = io(),
            t = a1((n) => n.setRoute),
            { isConnected: i } = t3();
          return {
            navigate: (o, r) => {
              let l = o;
              aJ.includes(o) || (l = i ? "wallet-info" : "signup"),
                i
                  ? a$.connected.includes(o) || (l = "wallet-info")
                  : a$.disconnected.includes(o) || (l = "signup"),
                e || n(!0),
                t({ path: l, state: r });
            },
            close: (0, s.useCallback)(() => {
              n(!1);
            }, [n]),
            isOpen: e,
          };
        },
        ox = () => {
          let { config: n } = sa();
          return n.walletConnectors;
        },
        oj = (n) => ox().find((e) => e.type === n),
        of = x.I4.div(nx());
      x.I4.div(nj()), x.I4.div(nf()), x.I4.div(ny()), x.I4.div(nm());
      var oy = x.I4.div(nw()),
        om = x.I4.div(nI()),
        ow = x.I4.div(nN()),
        oI = x.I4.div(nD()),
        oN = x.I4.div(nv());
      x.I4.div(nk());
      var oD = (0, x.I4)(M.P.div)(nL()),
        ov = (0, x.I4)(M.P.div)(nT(), (n) => {
          var e;
          return null !== (e = n.inset) && void 0 !== e ? e : 3;
        }),
        ok = (0, x.I4)(M.P.div)(nb()),
        oL = (0, x.I4)(M.P.div)(nA()),
        oT = (n) => {
          let { logo: e, connecting: t = !0 } = n;
          return (0, C.jsxs)(oD, {
            transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 0.98] },
            children: [
              (0, C.jsx)(ov, { children: e }),
              (0, C.jsx)(ok, {
                children: (0, C.jsx)(h.N, {
                  children:
                    t &&
                    (0, C.jsx)(
                      oL,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0, transition: { duration: 0 } },
                      },
                      "Spinner"
                    ),
                }),
              }),
              (0, C.jsxs)("svg", {
                "aria-hidden": "true",
                width: "64",
                height: "64",
                viewBox: "0 0 102 102",
                fill: "none",
                children: [
                  (0, C.jsx)("rect", {
                    x: "7.57895",
                    y: "7.57895",
                    width: "86.8421",
                    height: "86.8421",
                    rx: "19.2211",
                    stroke: "black",
                    strokeOpacity: "0.02",
                    strokeWidth: "1.15789",
                  }),
                  (0, C.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 0H102V102H0V0ZM7 38.284C7 27.5684 7 22.2106 9.01905 18.0892C10.9522 14.1431 14.1431 10.9522 18.0892 9.01905C22.2106 7 27.5684 7 38.284 7H63.716C74.4316 7 79.7894 7 83.9108 9.01905C87.8569 10.9522 91.0478 14.1431 92.9809 18.0892C95 22.2106 95 27.5684 95 38.284V63.716C95 74.4316 95 79.7894 92.9809 83.9108C91.0478 87.8569 87.8569 91.0478 83.9108 92.9809C79.7894 95 74.4316 95 63.716 95H38.284C27.5684 95 22.2106 95 18.0892 92.9809C14.1431 91.0478 10.9522 87.8569 9.01905 83.9108C7 79.7894 7 74.4316 7 63.716V38.284ZM41.5 0.5H41.4325C34.7246 0.499996 29.6023 0.499994 25.5104 0.823325C21.388 1.14906 18.1839 1.80986 15.3416 3.20227C10.0602 5.78959 5.78959 10.0602 3.20227 15.3416C1.80986 18.1839 1.14906 21.388 0.823325 25.5104C0.499994 29.6023 0.499996 34.7246 0.5 41.4325V41.5V55.5938C0.5 55.6808 0.507407 55.766 0.521624 55.849C0.507407 55.9319 0.5 56.0172 0.5 56.1042V60.5V60.5675C0.499996 67.2754 0.499994 72.3977 0.823325 76.4896C1.14906 80.612 1.80986 83.8161 3.20227 86.6584C5.78959 91.9398 10.0602 96.2104 15.3416 98.7977C18.1839 100.19 21.388 100.851 25.5104 101.177C29.6022 101.5 34.7244 101.5 41.432 101.5H41.4324H41.5H43.4227H60.5H60.5675H60.568C67.2756 101.5 72.3977 101.5 76.4896 101.177C80.612 100.851 83.8161 100.19 86.6584 98.7977C91.9398 96.2104 96.2104 91.9398 98.7977 86.6584C100.19 83.8161 100.851 80.612 101.177 76.4896C101.5 72.3978 101.5 67.2756 101.5 60.568V60.5676V60.5V41.5V41.4324V41.432C101.5 34.7244 101.5 29.6022 101.177 25.5104C100.851 21.388 100.19 18.1839 98.7977 15.3416C96.2104 10.0602 91.9398 5.78959 86.6584 3.20227C83.8161 1.80986 80.612 1.14906 76.4896 0.823325C72.3977 0.499994 67.2754 0.499996 60.5675 0.5H60.5H41.5ZM3.5 56.1042C3.5 56.0172 3.49259 55.9319 3.47838 55.849C3.49259 55.766 3.5 55.6808 3.5 55.5938V41.5C3.5 34.7112 3.50109 29.7068 3.814 25.7467C4.1256 21.8032 4.73946 19.0229 5.89635 16.6614C8.19077 11.9779 11.9779 8.19077 16.6614 5.89635C19.0229 4.73946 21.8032 4.1256 25.7467 3.814C29.7068 3.50109 34.7112 3.5 41.5 3.5H60.5C67.2888 3.5 72.2932 3.50109 76.2533 3.814C80.1968 4.1256 82.977 4.73946 85.3386 5.89635C90.022 8.19077 93.8092 11.9779 96.1036 16.6614C97.2605 19.0229 97.8744 21.8032 98.186 25.7467C98.4989 29.7068 98.5 34.7112 98.5 41.5V60.5C98.5 67.2888 98.4989 72.2932 98.186 76.2533C97.8744 80.1968 97.2605 82.9771 96.1036 85.3386C93.8092 90.022 90.022 93.8092 85.3386 96.1036C82.977 97.2605 80.1968 97.8744 76.2533 98.186C72.2932 98.4989 67.2888 98.5 60.5 98.5H43.4227H41.5C34.7112 98.5 29.7068 98.4989 25.7467 98.186C21.8032 97.8744 19.0229 97.2605 16.6614 96.1036C11.9779 93.8092 8.19077 90.022 5.89635 85.3386C4.73946 82.9771 4.1256 80.1968 3.814 76.2533C3.50109 72.2932 3.5 67.2888 3.5 60.5V56.1042Z",
                    fill: "var(--pcm-body-background)",
                  }),
                ],
              }),
            ],
          });
        },
        ob = (n) => {
          let { ...e } = n;
          return (0, C.jsx)("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, C.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z",
              fill: "#CCCCCC",
            }),
          });
        },
        oA = {
          Injected: ob,
          WalletConnect: (n) => {
            let { ...e } = n;
            return (0, C.jsx)("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: (0, C.jsx)("path", {
                d: "M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z",
                fill: "#3B99FC",
              }),
            });
          },
          Coinbase: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, C.jsx)("circle", {
                  cx: "10",
                  cy: "10",
                  r: "10",
                  fill: "#0052FF",
                }),
                (0, C.jsx)("rect", {
                  rx: "27%",
                  width: "20",
                  height: "20",
                  fill: "#0052FF",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z",
                  fill: "white",
                }),
              ],
            });
          },
          Trust: (n) => {
            let { ...e } = n,
              { currentMode: t } = su(),
              i = (0, s.useMemo)(
                () => Math.random().toString(36).substring(7),
                []
              ),
              o = (0, s.useMemo)(
                () => Math.random().toString(36).substring(7),
                []
              );
            return "light" === t
              ? (0, C.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "22",
                  height: "24",
                  viewBox: "0 0 22 24",
                  fill: "none",
                  ...e,
                  children: [
                    (0, C.jsx)("path", {
                      d: "M0.286133 3.46686L10.9995 0V24C3.34699 20.7997 0.286133 14.6664 0.286133 11.2003V3.46686Z",
                      fill: "#0500FF",
                    }),
                    (0, C.jsx)("path", {
                      d: "M21.7137 3.46686L11.0004 0V24C18.6529 20.7997 21.7137 14.6664 21.7137 11.2003V3.46686Z",
                      fill: "url(#".concat(i, ")"),
                    }),
                    (0, C.jsx)("defs", {
                      children: (0, C.jsxs)("linearGradient", {
                        id: i,
                        x1: "18.8679",
                        y1: "-1.68063",
                        x2: "10.8399",
                        y2: "23.6925",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, C.jsx)("stop", {
                            offset: "0.02",
                            stopColor: "#0000FF",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.08",
                            stopColor: "#0094FF",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.16",
                            stopColor: "#48FF91",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.42",
                            stopColor: "#0094FF",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.68",
                            stopColor: "#0038FF",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.9",
                            stopColor: "#0500FF",
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, C.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "22",
                  height: "24",
                  viewBox: "0 0 22 24",
                  fill: "none",
                  ...e,
                  children: [
                    (0, C.jsx)("path", {
                      d: "M0.269531 3.46687L10.9994 0V24C3.33511 20.7997 0.269531 14.6664 0.269531 11.2003V3.46687Z",
                      fill: "#48FF91",
                    }),
                    (0, C.jsx)("path", {
                      d: "M21.7305 3.46687L11.0006 0V24C18.6649 20.7997 21.7305 14.6664 21.7305 11.2003V3.46687Z",
                      fill: "url(#".concat(o, ")"),
                    }),
                    (0, C.jsx)("defs", {
                      children: (0, C.jsxs)("linearGradient", {
                        id: o,
                        x1: "10.5475",
                        y1: "27.0164",
                        x2: "19.2341",
                        y2: "-4.58841",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, C.jsx)("stop", {
                            offset: "0.26",
                            stopColor: "#48FF91",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.66",
                            stopColor: "#0094FF",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.8",
                            stopColor: "#0038FF",
                          }),
                          (0, C.jsx)("stop", {
                            offset: "0.89",
                            stopColor: "#0500FF",
                          }),
                        ],
                      }),
                    }),
                  ],
                });
          },
          Rainbow: (n) => {
            let { ...e } = n;
            return (0, C.jsx)("svg", {
              width: "120",
              height: "120",
              viewBox: "0 0 120 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                backgroundSize: "100% 100%",
                backgroundImage: 'url("'.concat(
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
                  '")'
                ),
              },
              ...e,
            });
          },
          Ledger: (n) => {
            let { ...e } = n;
            return (0, C.jsx)("svg", {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { background: "black" },
              ...e,
              children: (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z",
                fill: "white",
              }),
            });
          },
          ONTO: (n) => {
            let { ...e } = n;
            return (0, C.jsx)("svg", {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { background: "white" },
              ...e,
              children: (0, C.jsx)("path", {
                d: "M20 16L28.675 24.677C32.1885 21.8644 36.4154 20.0873 40.8816 19.545C45.348 19.0026 49.8769 19.7164 53.9604 21.6063C58.0438 23.4963 61.5207 26.4876 64.0005 30.2447C66.4804 34.0019 67.8653 38.3763 68 42.8772V43.5854V72L59.3367 63.3231C55.8263 66.1389 51.6014 67.9196 47.1361 68.4655C42.6708 69.0112 38.1419 68.3007 34.0577 66.4135C29.9734 64.5262 26.4956 61.537 24.0144 57.7813C21.5333 54.0255 20.1472 49.6521 20.0115 45.1515V44.4433L20 16ZM25.931 30.3311V44.4146C25.9323 47.7294 26.8335 50.9817 28.5384 53.8236C30.2432 56.6655 32.6875 58.9902 35.6101 60.5497C38.5328 62.1089 41.8238 62.8439 45.1313 62.6764C48.439 62.5087 51.639 61.4445 54.3894 59.5978L54.8611 59.2754L27.0873 31.4884L25.931 30.3311ZM33.6223 28.4022L33.1505 28.7304L60.9186 56.5117L62.069 57.6632V43.5854C62.0683 40.2717 61.1679 37.0204 59.464 34.179C57.7603 31.3377 55.3171 29.0132 52.3957 27.4539C49.4742 25.8946 46.1844 25.1592 42.8777 25.3262C39.5712 25.4933 36.372 26.5565 33.6223 28.4022Z",
                fill: "#23262F",
              }),
            });
          },
          Slope: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { background: "#6C67F1" },
              ...e,
              children: [
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M50.6667 24.3696L34.8872 40.1864L24.0001 37.7402L37.3334 24.3696L48.4438 13.3798C49.268 12.5646 50.6667 13.1484 50.6667 14.3077V24.3696ZM37.3339 51.0358L50.6672 37.74V24.3694L35.2001 39.8737L37.3339 51.0358Z",
                  fill: "url(#paint0_linear_2593_6077)",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.3337 64.2947V50.9617L50.667 37.6284L55.7849 45.8435L55.9822 45.6463L64 50.9616L39.5582 75.2343C38.7347 76.0521 37.3336 75.4687 37.3336 74.3082V64.2949L37.3337 64.2947Z",
                  fill: "url(#paint1_linear_2593_6077)",
                }),
                (0, C.jsx)("path", {
                  d: "M24 37.7405H32.573C35.202 37.7405 37.3333 39.8718 37.3333 42.5009V51.0359H28.7602C26.1313 51.0359 24 48.9046 24 46.2757V37.7405Z",
                  fill: "#F1F0FF",
                }),
                (0, C.jsx)("path", {
                  d: "M50.6667 37.7405H59.2398C61.8688 37.7405 64 39.8718 64 42.5009V51.0359H55.4271C52.798 51.0359 50.6667 48.9046 50.6667 46.2757V37.7405Z",
                  fill: "#F1F0FF",
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("linearGradient", {
                      id: "paint0_linear_2593_6077",
                      x1: "37.3336",
                      y1: "13",
                      x2: "37.3336",
                      y2: "51.0358",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#A8ADFF" }),
                        (0, C.jsx)("stop", {
                          offset: "0.648556",
                          stopColor: "white",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint1_linear_2593_6077",
                      x1: "50.6668",
                      y1: "37.6284",
                      x2: "50.6668",
                      y2: "75.616",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.260784",
                          stopColor: "#B6BAFF",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#E4E2FF",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          Frontier: (n) => {
            let { ...e } = n;
            return (0, C.jsx)("svg", {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { background: "#CC703C" },
              ...e,
              children: (0, C.jsx)("path", {
                d: "M63.6429 20L63.3645 20.7254L62.4521 23.0445L61.8461 24.5395C57.2427 35.7491 53.6629 41.0688 49.8557 41.0688C48.8938 41.0936 47.9371 40.9212 47.0465 40.5625C46.156 40.2038 45.3512 39.6667 44.6834 38.9852L44.1979 38.5518C42.9885 37.4538 42.4799 37.1831 41.3154 37.1832C40.7094 37.1832 39.6238 37.9435 38.2521 39.7303C36.4147 42.2912 34.8522 45.0327 33.59 47.9106L33.4353 48.2482L49.7645 48.2483L47.7312 52.4075H32.4845L32.4843 69.44L28 69.44L28.0001 20L63.6429 20ZM57.2889 24.1518L32.4843 24.1518L32.4843 40.6262C35.4564 35.5545 38.2816 33.0086 41.32 33.0086C42.3421 32.9765 43.3595 33.1534 44.3082 33.5284C45.2569 33.9034 46.1159 34.468 46.8311 35.1865L47.3323 35.6335C48.4611 36.6585 48.8956 36.8941 49.8604 36.8941C50.9211 36.8957 53.7433 32.4855 57.2889 24.1518Z",
                fill: "white",
              }),
            });
          },
          Zerion: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                background:
                  "linear-gradient(120.22deg, #2962EF 0%, #255CE5 100%)",
              },
              ...e,
              children: [
                (0, C.jsx)("path", {
                  d: "M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z",
                  fill: "white",
                }),
              ],
            });
          },
          Phantom: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, C.jsx)("rect", {
                  rx: "27%",
                  width: "88",
                  height: "88",
                  fill: "#AB9FF2",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.7425 57.0705C34.1942 62.3362 28.2483 69 20.3366 69C16.5965 69 13.0001 67.5093 13 61.0322C12.9997 44.5362 36.2555 19.0003 57.8334 19C70.1084 18.9998 75 27.2474 75 36.6136C75 48.6357 66.9442 62.3824 58.9368 62.3824C56.3955 62.3824 55.1487 61.031 55.1487 58.888C55.1487 58.3288 55.2442 57.7228 55.4365 57.0705C52.7029 61.5902 47.4285 65.7849 42.4896 65.7849C38.8933 65.7849 37.0713 63.5944 37.0713 60.5187C37.0713 59.4003 37.311 58.2357 37.7425 57.0705ZM53.7586 31.6834C51.8054 31.6868 50.4738 33.2938 50.478 35.5864C50.4822 37.879 51.8198 39.5273 53.7729 39.5241C55.6789 39.5208 57.0099 37.8679 57.0058 35.5752C57.0016 33.2827 55.6646 31.6802 53.7586 31.6834ZM64.1193 31.6725C62.1661 31.6759 60.8345 33.2829 60.8387 35.5755C60.8429 37.868 62.1798 39.5164 64.1336 39.5131C66.0396 39.5099 67.3706 37.8569 67.3664 35.5643C67.3622 33.2718 66.0253 31.6693 64.1193 31.6725Z",
                  fill: "#ffffff",
                }),
              ],
            });
          },
          InfinityWallet: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              version: "1.1",
              id: "e551690a-81c0-4880-9b93-334a37ce6796",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 1025 1025",
              ...e,
              children: [
                (0, C.jsx)("style", {
                  type: "text/css",
                  children:
                    "\n        .infinityWallet-st0{fill:url(#ID_InfinityWallet_1);}\n        .infinityWallet-st1{fill:url(#ID_InfinityWallet_2);}\n        .infinityWallet-st2{opacity:0.49;fill:url(#ID_InfinityWallet_3);enable-background:new;}\n        .infinityWallet-st3{opacity:0.49;fill:url(#ID_InfinityWallet_4);enable-background:new;}\n        .infinityWallet-st4{opacity:0.49;fill:url(#ID_InfinityWallet_5);enable-background:new;}\n        .infinityWallet-st5{fill:url(#ID_InfinityWallet_6);}\n        .infinityWallet-st6{opacity:0.49;fill:url(#ID_InfinityWallet_7);enable-background:new;}\n        .infinityWallet-st7{opacity:0.49;fill:url(#ID_InfinityWallet_8);enable-background:new;}\n        .infinityWallet-st8{opacity:0.49;fill:url(#ID_InfinityWallet_9);enable-background:new;}\n      ",
                }),
                (0, C.jsxs)("linearGradient", {
                  id: "ID_InfinityWallet_1",
                  gradientUnits: "userSpaceOnUse",
                  x1: "512.5",
                  y1: "1056.1801",
                  x2: "512.5",
                  y2: "317.03",
                  gradientTransform: "matrix(1 0 0 -1 0 1260)",
                  children: [
                    (0, C.jsx)("stop", {
                      offset: "0",
                      style: { stopColor: "#1D2643" },
                    }),
                    (0, C.jsx)("stop", {
                      offset: "1",
                      style: { stopColor: "#12142C" },
                    }),
                  ],
                }),
                (0, C.jsx)("path", {
                  className: "infinityWallet-st0",
                  d: "M130,0H895c71.8,0,130,58.2,130,130V895c0,71.8-58.2,130-130,130H130C58.2,1025,0,966.8,0,895V130\n    	C0,58.2,58.2,0,130,0z",
                }),
                (0, C.jsxs)("g", {
                  children: [
                    (0, C.jsxs)("g", {
                      children: [
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_2",
                          gradientUnits: "userSpaceOnUse",
                          x1: "326.0557",
                          y1: "-1280.3162",
                          x2: "326.0557",
                          y2: "-296.3967",
                          gradientTransform: "matrix(1 0 0 1 0 1474)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "1.000000e-02",
                              style: { stopColor: "#00BFE1" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "0.97",
                              style: { stopColor: "#2738AB" },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st1",
                          d: "M550.9,380.8c-0.7-2-2.4-3.4-4.4-3.9c-2.3-0.6-4.7,0-6.4,1.7l-13.4,13.4l-2.2,2.2L418.3,288.5\n    			c-40.2-40-105.2-40-145.4,0L121.7,439.9c-40,40.5-40,105.6,0,146.1l151.4,150.5c40.2,40,105.1,40,145.3,0l34.4-34.4\n    			c4.5-4.5,9.9-10.7,12.9-18.7c4.7-13.1,2.8-27.7-5.2-39.1c-1.5-2.2-3.2-4.2-5.1-6c-16.9-16.5-43.9-16.3-60.7,0.3l-37.2,37.1\n    			c-2.2,2.3-5,3.8-8.1,4.5c-2.9,0.7-6,0.5-8.8-0.6c-2.9-1-5.5-2.7-7.7-5L182.6,524.2c-2.3-2.3-3.9-5.2-4.6-8.4\n    			c-0.8-4-0.1-8.2,2.1-11.8l0.8-0.9L334,350.3c2.4-2.4,5.4-4,8.7-4.6c1-0.2,2.1-0.3,3.1-0.3c4.4-0.1,8.7,1.7,11.7,5l105.8,105.2\n    			l-5.3,5.3l-10.4,10.6c-1.7,1.7-2.3,4.1-1.7,6.4c0.5,2,2,3.7,3.9,4.4l95.7,11.7c8.2-0.1,14.8-6.7,15-15L550.9,380.8z",
                        }),
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_3",
                          gradientUnits: "userSpaceOnUse",
                          x1: "137.7126",
                          y1: "-935.1906",
                          x2: "201.098",
                          y2: "-882.1746",
                          gradientTransform: "matrix(1 0 0 1 -0.94 1473.3899)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "3.000000e-02",
                              style: { stopColor: "#1B1464" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "1",
                              style: { stopColor: "#1B1464", stopOpacity: 0 },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st2",
                          d: "M181.4,522.9c-4.3-4.9-5.1-13.3-1.3-19c0,0-49.7,54.3-25.8,114.4l31.5,31.3l45.8-76.2L181.4,522.9z",
                        }),
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_4",
                          gradientUnits: "userSpaceOnUse",
                          x1: "4132.3252",
                          y1: "1674.2513",
                          x2: "4102.1333",
                          y2: "1717.0756",
                          gradientTransform: "matrix(-1 0 0 -1 4515 2382.0898)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "3.000000e-02",
                              style: { stopColor: "#1B1464" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "1",
                              style: { stopColor: "#1B1464", stopOpacity: 0 },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st3",
                          d: "M336.4,677.7c56.1,51.6,117.9,22.9,117.9,22.9s8.1-7.5,11.4-17.4c-8.3-4-68.6-47.2-68.6-47.2l-35.6,35.6\n    			C348.6,687.1,336.4,677.7,336.4,677.7z",
                        }),
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_5",
                          gradientUnits: "userSpaceOnUse",
                          x1: "4217.4238",
                          y1: "2067.1885",
                          x2: "4240.0796",
                          y2: "2011.1337",
                          gradientTransform: "matrix(-1 0 0 -1 4515 2382.0898)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "3.000000e-02",
                              style: { stopColor: "#1B1464" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "1",
                              style: { stopColor: "#1B1464", stopOpacity: 0 },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st4",
                          d: "M299.4,385c0,0,35.9-36.2,36-36c0,0,9.6-7.7,19.7-0.7c0,0-59.7-49.2-123.6-18.3l-18.6,18.7L299.4,385z",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("g", {
                      children: [
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_6",
                          gradientUnits: "userSpaceOnUse",
                          x1: "698.9443",
                          y1: "-1280.3162",
                          x2: "698.9443",
                          y2: "-296.3967",
                          gradientTransform: "matrix(1 0 0 1 0 1474)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "1.000000e-02",
                              style: { stopColor: "#00BFE1" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "0.97",
                              style: { stopColor: "#2738AB" },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st5",
                          d: "M474.1,644.3c0.7,2,2.4,3.4,4.4,3.9c2.3,0.6,4.7,0,6.4-1.7l13.4-13.4l2.2-2.2l106.2,105.6\n    			c40.2,40,105.2,40,145.4,0l151.2-151.4c40-40.5,40-105.6,0-146.1L751.9,288.5c-40.2-40-105.1-40-145.3,0l-34.4,34.4\n    			c-4.5,4.5-9.9,10.7-12.9,18.7c-4.7,13.1-2.8,27.7,5.2,39.1c1.5,2.2,3.2,4.2,5.1,6c16.9,16.5,43.9,16.3,60.7-0.3l37.2-37.1\n    			c2.2-2.3,5-3.8,8.1-4.5c2.9-0.7,6-0.5,8.8,0.6c2.9,1,5.5,2.7,7.7,5l150.3,150.3c2.3,2.3,3.9,5.2,4.6,8.4c0.8,4,0.1,8.2-2.1,11.8\n    			l-0.8,0.9L691,674.5c-2.4,2.4-5.4,4-8.7,4.6c-1,0.2-2.1,0.3-3.1,0.3c-4.4,0.1-8.7-1.7-11.7-5L561.6,569.7l5.3-5.3l10.4-10.6\n    			c1.7-1.7,2.3-4.1,1.7-6.4c-0.5-2-2-3.7-3.9-4.4l-95.6-11.7c-8.2,0.1-14.8,6.7-15,15L474.1,644.3z",
                        }),
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_7",
                          gradientUnits: "userSpaceOnUse",
                          x1: "3824.9182",
                          y1: "1469.7789",
                          x2: "3888.3037",
                          y2: "1522.7949",
                          gradientTransform:
                            "matrix(-1 0 0 -1 4713.1299 1956.6599)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "3.000000e-02",
                              style: { stopColor: "#1B1464" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "1",
                              style: { stopColor: "#1B1464", stopOpacity: 0 },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st6",
                          d: "M843.6,502.2c4.3,4.9,5.1,13.3,1.3,19c0,0,49.7-54.3,25.8-114.4l-31.5-31.3l-45.8,76.2L843.6,502.2z",
                        }),
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_8",
                          gradientUnits: "userSpaceOnUse",
                          x1: "445.1279",
                          y1: "-730.6945",
                          x2: "414.9359",
                          y2: "-687.8702",
                          gradientTransform: "matrix(1 0 0 1 197.19 1047.96)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "3.000000e-02",
                              style: { stopColor: "#1B1464" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "1",
                              style: { stopColor: "#1B1464", stopOpacity: 0 },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st7",
                          d: "M688.6,347.4c-56.1-51.6-117.9-22.9-117.9-22.9s-8.1,7.5-11.4,17.4c8.3,4,68.6,47.2,68.6,47.2l35.6-35.6\n    			C676.4,338,688.6,347.4,688.6,347.4z",
                        }),
                        (0, C.jsxs)("linearGradient", {
                          id: "ID_InfinityWallet_9",
                          gradientUnits: "userSpaceOnUse",
                          x1: "530.1512",
                          y1: "-337.7953",
                          x2: "552.8069",
                          y2: "-393.8502",
                          gradientTransform: "matrix(1 0 0 1 197.19 1047.96)",
                          children: [
                            (0, C.jsx)("stop", {
                              offset: "3.000000e-02",
                              style: { stopColor: "#1B1464" },
                            }),
                            (0, C.jsx)("stop", {
                              offset: "1",
                              style: { stopColor: "#1B1464", stopOpacity: 0 },
                            }),
                          ],
                        }),
                        (0, C.jsx)("path", {
                          className: "infinityWallet-st8",
                          d: "M725.5,640.1c0,0-35.9,36.2-36,36c0,0-9.6,7.7-19.7,0.7c0,0,59.7,49.2,123.6,18.3l18.6-18.7L725.5,640.1z",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          Rabby: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "88",
              height: "88",
              viewBox: "0 0 88 88",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { background: "#8697FF" },
              ...e,
              children: [
                (0, C.jsx)("path", {
                  d: "M76.2062 48.0657C78.7621 42.356 66.1267 26.404 54.0555 19.7581C46.4467 14.6095 38.5183 15.3169 36.9125 17.5775C33.3886 22.5385 48.5814 26.7423 58.742 31.6478C56.5579 32.5964 54.4996 34.2987 53.2893 36.4758C49.5013 32.3404 41.1872 28.7791 31.4315 31.6478C24.8574 33.5809 19.3937 38.1382 17.2821 45.0216C16.7689 44.7936 16.2009 44.6669 15.6032 44.6669C13.3176 44.6669 11.4648 46.5197 11.4648 48.8052C11.4648 51.0908 13.3176 52.9435 15.6032 52.9435C16.0268 52.9435 17.3514 52.6594 17.3514 52.6594L38.5183 52.8128C30.0532 66.2418 23.3634 68.2049 23.3634 70.5314C23.3634 72.8579 29.7643 72.2274 32.1678 71.3602C43.6732 67.2088 56.0306 54.2706 58.1511 50.5462C67.056 51.6572 74.5397 51.7886 76.2062 48.0657Z",
                  fill: "url(#paint0_linear_60607_36577)",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M58.65 31.6053C58.682 31.6193 58.7139 31.6332 58.7458 31.6471C59.2168 31.4616 59.1406 30.766 59.0113 30.2198C58.714 28.9643 53.5856 23.9001 48.7696 21.6318C42.1984 18.5367 37.3618 18.7007 36.6582 20.1307C37.9975 22.8695 44.1927 25.441 50.663 28.1266C53.3909 29.2589 56.1676 30.4114 58.65 31.6053Z",
                  fill: "url(#paint1_linear_60607_36577)",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M50.4154 59.2247C49.0895 58.7182 47.592 58.2536 45.8898 57.8319C47.707 54.5801 48.0884 49.7663 46.3721 46.7226C43.9635 42.4512 40.9399 40.1777 33.9139 40.1777C30.0495 40.1777 19.6451 41.4794 19.4603 50.1648C19.441 51.0763 19.4599 51.9118 19.5259 52.68L38.5175 52.8176C35.9568 56.8798 33.5586 59.8928 31.4589 62.1841C33.9831 62.8309 36.0657 63.3738 37.9775 63.8722C39.7885 64.3443 41.4462 64.7764 43.1809 65.2191C45.8007 63.3102 48.2635 61.2288 50.4154 59.2247Z",
                  fill: "url(#paint2_linear_60607_36577)",
                }),
                (0, C.jsx)("path", {
                  d: "M17.0296 51.7821C17.8058 58.38 21.5555 60.9657 29.2177 61.7309C36.8799 62.4961 41.2751 61.9828 47.1265 62.5151C52.0136 62.9598 56.3772 65.4502 57.996 64.5895C59.4529 63.815 58.6378 61.0167 56.6884 59.2214C54.1614 56.8943 50.6641 55.2763 44.5104 54.7021C45.7368 51.3443 45.3931 46.6362 43.4885 44.0748C40.7345 40.3711 35.6513 38.6967 29.2177 39.4282C22.4962 40.1926 16.0556 43.5018 17.0296 51.7821Z",
                  fill: "url(#paint3_linear_60607_36577)",
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("linearGradient", {
                      id: "paint0_linear_60607_36577",
                      x1: "30.666",
                      y1: "43.0094",
                      x2: "75.6558",
                      y2: "55.7677",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "white" }),
                        (0, C.jsx)("stop", { offset: "1", stopColor: "white" }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint1_linear_60607_36577",
                      x1: "68.0842",
                      y1: "42.1521",
                      x2: "35.6221",
                      y2: "9.60636",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#7258DC" }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#797DEA",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint2_linear_60607_36577",
                      x1: "51.3184",
                      y1: "60.3591",
                      x2: "20.1383",
                      y2: "42.4347",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#7461EA" }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#BFC2FF",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint3_linear_60607_36577",
                      x1: "33.3531",
                      y1: "42.6732",
                      x2: "54.4308",
                      y2: "69.4547",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "white" }),
                        (0, C.jsx)("stop", {
                          offset: "0.983895",
                          stopColor: "#D5CEFF",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          TokenPocket: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "88px",
              height: "88px",
              viewBox: "0 0 88 88",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, C.jsx)("defs", {
                  children: (0, C.jsxs)("linearGradient", {
                    x1: "107.511425%",
                    y1: "50.0147427%",
                    x2: "0.0459570557%",
                    y2: "50.0147427%",
                    id: "linearGradient-1",
                    children: [
                      (0, C.jsx)("stop", {
                        stopColor: "#FFFFFF",
                        offset: "0%",
                      }),
                      (0, C.jsx)("stop", {
                        stopColor: "#FFFFFF",
                        stopOpacity: "0.3233",
                        offset: "96.67%",
                      }),
                      (0, C.jsx)("stop", {
                        stopColor: "#FFFFFF",
                        stopOpacity: "0.3",
                        offset: "100%",
                      }),
                    ],
                  }),
                }),
                (0, C.jsx)("g", {
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  children: (0, C.jsxs)("g", {
                    id: "tokenpocket",
                    fillRule: "nonzero",
                    children: [
                      (0, C.jsx)("polygon", {
                        fill: "#2980FE",
                        points: "87.9604864 0 0 0 0 88 87.9604864 88",
                      }),
                      (0, C.jsxs)("g", {
                        transform: "translate(16.052385, 23.804688)",
                        children: [
                          (0, C.jsx)("path", {
                            d: "M19.6653508,13.8911953 L19.6784508,13.8911953 C19.6653508,13.8236484 19.6653508,13.7448437 19.6653508,13.6772969 L19.6653508,13.8911953 Z",
                            fill: "#29AEFF",
                          }),
                          (0, C.jsx)("path", {
                            d: "M41.1271993,16.0301797 L29.2440711,16.0301797 L29.2440711,38.4205938 C29.2440711,39.4787422 30.0635659,40.3343359 31.0771712,40.3343359 L39.2940168,40.3343359 C40.3077044,40.3343359 41.1271993,39.4787422 41.1271993,38.4205938 L41.1271993,16.0301797 Z",
                            fill: "#FFFFFF",
                          }),
                          (0, C.jsx)("path", {
                            d: "M23.5075248,0 L23.1085201,0 L1.83318241,0 C0.819494855,0 0,0.855507812 0,1.91374219 L0,9.68111719 C0,10.7393516 0.819494855,11.5948594 1.83318241,11.5948594 L6.82580355,11.5948594 L8.80996071,11.5948594 L8.80996071,13.8912813 L8.80996071,38.4768828 C8.80996071,39.5351172 9.62945557,40.390625 10.6430608,40.390625 L18.4502002,40.390625 C19.4638054,40.390625 20.2833003,39.5351172 20.2833003,38.4768828 L20.2833003,13.8912813 L20.2833003,13.6774688 L20.2833003,11.5948594 L22.2674574,11.5948594 L23.0761684,11.5948594 L23.4751731,11.5948594 C26.5376389,11.5948594 29.0285575,8.99447656 29.0285575,5.79742969 C29.0609093,2.60038281 26.5699906,0 23.5075248,0 Z",
                            fill: "#FFFFFF",
                          }),
                          (0, C.jsx)("path", {
                            d: "M41.1381478,16.0301797 L41.1381478,31.6550781 C41.5479364,31.7563984 41.9684266,31.8352031 42.399783,31.90275 C43.0036819,31.9928125 43.6290664,32.0491016 44.2545332,32.0603594 C44.2868849,32.0603594 44.3192367,32.0603594 44.3623723,32.0603594 L44.3623723,19.6324219 C42.5615416,19.5085859 41.1381478,17.9438359 41.1381478,16.0301797 Z",
                            fill: "url(#linearGradient-1)",
                          }),
                          (0, C.jsx)("path", {
                            d: "M44.5993714,0 C36.1237942,0 29.2440711,7.18205469 29.2440711,16.0301797 C29.2440711,23.6400312 34.3229635,30.0115234 41.1379832,31.6550781 L41.1379832,16.0301797 C41.1379832,14.0376328 42.6907839,12.4165937 44.5993714,12.4165937 C46.5080412,12.4165937 48.0608419,14.0376328 48.0608419,16.0301797 C48.0608419,17.7075078 46.9717493,19.1146484 45.483652,19.5198437 C45.2032703,19.5986484 44.9013209,19.6436797 44.5993714,19.6436797 L44.5993714,32.0603594 C44.9013209,32.0603594 45.1924864,32.0491016 45.483652,32.0378438 C53.5495229,31.5537578 59.9547666,24.5743438 59.9547666,16.0301797 C59.9655379,7.18205469 53.0858148,0 44.5993714,0 Z",
                            fill: "#FFFFFF",
                          }),
                          (0, C.jsx)("path", {
                            d: "M44.5992891,32.0603594 L44.5992891,19.6436797 C44.5131001,19.6436797 44.4376127,19.6436797 44.3513414,19.6324219 L44.3513414,32.0603594 C44.4376127,32.0603594 44.523884,32.0603594 44.5992891,32.0603594 Z",
                            fill: "#FFFFFF",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          Talisman: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "82",
              height: "82",
              viewBox: "0 0 82 82",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, C.jsx)("rect", {
                  width: "82",
                  height: "82",
                  rx: "12",
                  fill: "#D5FF5C",
                }),
                (0, C.jsx)("path", {
                  d: "M35.04 55C35.04 58.2905 37.6887 60.9623 40.9703 60.9996C44.2519 60.9623 46.9006 58.2905 46.9006 55C46.9006 51.7096 44.2519 49.0377 40.9703 49.0004C37.6887 49.0377 35.04 51.7096 35.04 55Z",
                  fill: "#FD4848",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8544 44.6623C22.2462 45.9868 20.4553 46.4546 19.4248 45.4241L17.5356 43.5349C15.583 41.5823 12.4171 41.5823 10.4645 43.5349C8.51184 45.4875 8.51184 48.6534 10.4645 50.606L25.7391 65.8807C29.3942 70.2176 34.8595 72.9788 40.9703 72.9994C47.0811 72.9788 52.5464 70.2176 56.2014 65.8807L71.4761 50.606C73.4287 48.6534 73.4287 45.4875 71.4761 43.5349C69.5234 41.5823 66.3576 41.5823 64.4049 43.5349L62.5158 45.4241C61.4852 46.4546 59.6943 45.9868 59.0861 44.6623C58.9663 44.4013 58.901 44.1213 58.901 43.8341L58.901 20.9995C58.901 18.2381 56.6624 15.9995 53.901 15.9995C51.1396 15.9995 48.901 18.2381 48.901 20.9995L48.901 32.5568C48.901 33.5506 47.8829 34.2252 46.9353 33.9257C46.3356 33.7361 45.9023 33.1901 45.9023 32.5611L45.9023 13.9996C45.9023 11.2608 43.7004 9.03637 40.9703 9C38.2402 9.03637 36.0382 11.2608 36.0382 13.9996L36.0382 32.5611C36.0382 33.1901 35.605 33.7361 35.0052 33.9257C34.0576 34.2252 33.0395 33.5506 33.0395 32.5568L33.0396 20.9995C33.0396 18.2381 30.801 15.9995 28.0395 15.9995C25.2781 15.9995 23.0395 18.2381 23.0395 20.9995L23.0395 43.8341C23.0395 44.1213 22.9743 44.4013 22.8544 44.6623ZM40.9703 44.9999C32.1659 45.0525 25.0403 54.9997 25.0403 54.9997C25.0403 54.9997 32.1659 64.9469 40.9703 64.9995C49.7746 64.9469 56.9002 54.9997 56.9002 54.9997C56.9002 54.9997 49.7746 45.0525 40.9703 44.9999Z",
                  fill: "#FD4848",
                }),
              ],
            });
          },
          ImToken: (n) => {
            let { ...e } = n;
            return (0, C.jsx)("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: {
                background:
                  "linear-gradient(\n      180deg,\n      #11C4D1 0%,\n      #0062AD 100%\n    )",
              },
              ...e,
              children: (0, C.jsx)("path", {
                d: "M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509",
                fill: "white",
              }),
            });
          },
          MetaMask: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, C.jsx)("path", {
                  d: "M21.9127 2L13.316 8.37777L14.9126 4.61504L21.9127 2Z",
                  fill: "#E17726",
                  stroke: "#E17726",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M2.08728 2L10.6057 8.43813L9.08735 4.61504L2.08728 2Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M18.8225 16.7848L16.5356 20.2891L21.4291 21.6349L22.8275 16.8622L18.8225 16.7848Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M1.18115 16.8622L2.57113 21.6349L7.46455 20.2891L5.18617 16.7848L1.18115 16.8622Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.197 10.8636L5.83337 12.9269L10.6843 13.1428L10.5202 7.92041L7.197 10.8636Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M16.8033 10.8635L13.4283 7.85999L13.316 13.1428L18.167 12.9268L16.8033 10.8635Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.46472 20.289L10.3909 18.8642L7.87024 16.897L7.46472 20.289Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.6093 18.8642L16.5354 20.289L16.1299 16.897L13.6093 18.8642Z",
                  fill: "#E27625",
                  stroke: "#E27625",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M16.5354 20.2891L13.6093 18.8643L13.8422 20.772L13.8167 21.5745L16.5354 20.2891Z",
                  fill: "#D5BFB2",
                  stroke: "#D5BFB2",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.46472 20.2891L10.1835 21.5745L10.1665 20.772L10.3909 18.8643L7.46472 20.2891Z",
                  fill: "#D5BFB2",
                  stroke: "#D5BFB2",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M10.2352 15.6362L7.80127 14.9204L9.51856 14.1349L10.2352 15.6362Z",
                  fill: "#233447",
                  stroke: "#233447",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.7649 15.6362L14.4816 14.1349L16.2074 14.9204L13.7649 15.6362Z",
                  fill: "#233447",
                  stroke: "#233447",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.46466 20.2891L7.88718 16.7848L5.18628 16.8622L7.46466 20.2891Z",
                  fill: "#CC6228",
                  stroke: "#CC6228",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M16.113 16.7848L16.5356 20.2891L18.8224 16.8622L16.113 16.7848Z",
                  fill: "#CC6228",
                  stroke: "#CC6228",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M18.167 12.9268L13.316 13.1428L13.7649 15.6362L14.4816 14.1349L16.2074 14.9204L18.167 12.9268Z",
                  fill: "#CC6228",
                  stroke: "#CC6228",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.80146 14.9204L9.51874 14.1349L10.2354 15.6362L10.6843 13.1428L5.83337 12.9268L7.80146 14.9204Z",
                  fill: "#CC6228",
                  stroke: "#CC6228",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M5.83337 12.9268L7.87032 16.897L7.80146 14.9204L5.83337 12.9268Z",
                  fill: "#E27525",
                  stroke: "#E27525",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M16.2074 14.9204L16.13 16.897L18.1669 12.9268L16.2074 14.9204Z",
                  fill: "#E27525",
                  stroke: "#E27525",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M10.684 13.1428L10.2351 15.6363L10.8047 18.5795L10.9254 14.7045L10.684 13.1428Z",
                  fill: "#E27525",
                  stroke: "#E27525",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.3159 13.1428L13.083 14.696L13.1952 18.5795L13.7648 15.6363L13.3159 13.1428Z",
                  fill: "#E27525",
                  stroke: "#E27525",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.7648 15.6362L13.1952 18.5794L13.6092 18.8642L16.1299 16.897L16.2072 14.9204L13.7648 15.6362Z",
                  fill: "#F5841F",
                  stroke: "#F5841F",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.80127 14.9204L7.87013 16.897L10.3908 18.8642L10.8048 18.5794L10.2352 15.6362L7.80127 14.9204Z",
                  fill: "#F5841F",
                  stroke: "#F5841F",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.817 21.5745L13.8425 20.7719L13.6274 20.5824H10.3731L10.1665 20.7719L10.1835 21.5745L7.46472 20.2891L8.41433 21.0652L10.3476 22.4034H13.6529L15.5861 21.0652L16.5357 20.2891L13.817 21.5745Z",
                  fill: "#C0AC9D",
                  stroke: "#C0AC9D",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.6092 18.8642L13.1952 18.5794H10.8046L10.3906 18.8642L10.1661 20.7719L10.3727 20.5823H13.6271L13.8422 20.7719L13.6092 18.8642Z",
                  fill: "#161616",
                  stroke: "#161616",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M22.2748 8.79264L22.9999 5.27135L21.9126 2L13.6093 8.16268L16.8032 10.8636L21.3166 12.1847L22.3096 11.0192L21.8777 10.7089L22.5681 10.0781L22.0418 9.66403L22.7321 9.13779L22.2748 8.79264Z",
                  fill: "#763E1A",
                  stroke: "#763E1A",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M1 5.27135L1.73367 8.79264L1.2678 9.13779L1.95811 9.66403L1.43187 10.0781L2.12219 10.7089L1.69032 11.0192L2.68328 12.1847L7.19669 10.8636L10.3907 8.16268L2.08733 2L1 5.27135Z",
                  fill: "#763E1A",
                  stroke: "#763E1A",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M21.3167 12.1848L16.8033 10.8636L18.1669 12.9269L16.13 16.8971L18.8224 16.8623H22.8274L21.3167 12.1848Z",
                  fill: "#F5841F",
                  stroke: "#F5841F",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M7.19676 10.8636L2.68335 12.1848L1.18115 16.8623H5.18617L7.87007 16.8971L5.83313 12.9269L7.19676 10.8636Z",
                  fill: "#F5841F",
                  stroke: "#F5841F",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, C.jsx)("path", {
                  d: "M13.316 13.1428L13.6093 8.1627L14.9126 4.61505H9.0874L10.3907 8.1627L10.684 13.1428L10.7962 14.713L10.8047 18.5795H13.1953L13.2038 14.713L13.316 13.1428Z",
                  fill: "#F5841F",
                  stroke: "#F5841F",
                  strokeWidth: "0.0850142",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            });
          },
          OKX: (n) => {
            let { ...e } = n,
              t = (0, s.useMemo)(
                () =>
                  "okx_".concat(Math.random().toString(36).substring(7), "_1"),
                []
              );
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsxs)("g", {
                  clipPath: "url(#".concat(t, ")"),
                  children: [
                    (0, C.jsx)("path", {
                      d: "M24 0H0V24H24V0Z",
                      fill: "black",
                    }),
                    (0, C.jsx)("path", {
                      d: "M14.0448 9.74402H10.1664C10.0032 9.74402 9.86877 9.87842 9.86877 10.0416V13.92C9.86877 14.0832 10.0032 14.2176 10.1664 14.2176H14.0448C14.208 14.2176 14.3424 14.0832 14.3424 13.92V10.0416C14.3424 9.87842 14.208 9.74402 14.0448 9.74402Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M9.56162 5.27039H5.68322C5.52002 5.27039 5.38562 5.40479 5.38562 5.56799V9.44639C5.38562 9.60959 5.52002 9.74399 5.68322 9.74399H9.56162C9.72482 9.74399 9.85922 9.60959 9.85922 9.44639V5.56799C9.85922 5.40479 9.72482 5.27039 9.56162 5.27039Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M18.5281 5.27039H14.6497C14.4865 5.27039 14.3521 5.40479 14.3521 5.56799V9.44639C14.3521 9.60959 14.4865 9.74399 14.6497 9.74399H18.5281C18.6913 9.74399 18.8257 9.60959 18.8257 9.44639V5.56799C18.8257 5.40479 18.6913 5.27039 18.5281 5.27039Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M9.56162 14.2272H5.68322C5.52002 14.2272 5.38562 14.3616 5.38562 14.5248V18.4032C5.38562 18.5664 5.52002 18.7008 5.68322 18.7008H9.56162C9.72482 18.7008 9.85922 18.5664 9.85922 18.4032V14.5248C9.85922 14.3616 9.72482 14.2272 9.56162 14.2272Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M18.5281 14.2272H14.6497C14.4865 14.2272 14.3521 14.3616 14.3521 14.5248V18.4032C14.3521 18.5664 14.4865 18.7008 14.6497 18.7008H18.5281C18.6913 18.7008 18.8257 18.5664 18.8257 18.4032V14.5248C18.8257 14.3616 18.6913 14.2272 18.5281 14.2272Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, C.jsx)("defs", {
                  children: (0, C.jsx)("clipPath", {
                    id: t,
                    children: (0, C.jsx)("rect", {
                      width: "24",
                      height: "24",
                      rx: "6",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            });
          },
          BitKeep: (n) => {
            let { ...e } = n,
              t = (0, s.useMemo)(
                () =>
                  "bitKeep_".concat(
                    Math.random().toString(36).substring(7),
                    "_1"
                  ),
                []
              ),
              i = (0, s.useMemo)(
                () =>
                  "bitKeep_".concat(
                    Math.random().toString(36).substring(7),
                    "_2"
                  ),
                []
              ),
              o = (0, s.useMemo)(
                () =>
                  "bitKeep_".concat(
                    Math.random().toString(36).substring(7),
                    "_3"
                  ),
                []
              ),
              r = (0, s.useMemo)(
                () =>
                  "bitKeep_".concat(
                    Math.random().toString(36).substring(7),
                    "_4"
                  ),
                []
              ),
              l = (0, s.useMemo)(
                () =>
                  "bitKeep_".concat(
                    Math.random().toString(36).substring(7),
                    "_5"
                  ),
                []
              ),
              a = (0, s.useMemo)(
                () =>
                  "bitKeep_".concat(
                    Math.random().toString(36).substring(7),
                    "_6"
                  ),
                []
              );
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsxs)("g", {
                  clipPath: "url(#".concat(l, ")"),
                  children: [
                    (0, C.jsx)("mask", {
                      id: a,
                      style: { maskType: "luminance" },
                      maskUnits: "userSpaceOnUse",
                      x: "0",
                      y: "0",
                      width: "24",
                      height: "24",
                      children: (0, C.jsx)("path", {
                        d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z",
                        fill: "white",
                      }),
                    }),
                    (0, C.jsxs)("g", {
                      mask: "url(#".concat(a, ")"),
                      children: [
                        (0, C.jsx)("path", {
                          d: "M23.9998 12C23.9998 5.37258 18.6272 0 11.9998 0C5.37234 0 -0.000244141 5.37258 -0.000244141 12C-0.000244141 18.6274 5.37234 24 11.9998 24C18.6272 24 23.9998 18.6274 23.9998 12Z",
                          fill: "#54FFF5",
                        }),
                        (0, C.jsx)("g", {
                          filter: "url(#".concat(t, ")"),
                          children: (0, C.jsx)("path", {
                            d: "M1.26413 18.6186C-2.74913 29.9096 18.7186 26.7206 29.9541 23.7147C41.4533 19.8986 33.5053 3.07684 25.2579 2.70455C17.0106 2.33226 26.2805 10.4828 19.2749 12.8108C12.2692 15.1387 6.28071 4.50479 1.26413 18.6186Z",
                            fill: "white",
                          }),
                        }),
                        (0, C.jsx)("g", {
                          filter: "url(#".concat(i, ")"),
                          children: (0, C.jsx)("path", {
                            d: "M8.01731 -4.29657C5.9121 -10.0485 -1.58557 -2.25027 -5.07125 2.36782C-8.39615 7.39127 0.282708 11.7323 3.68691 9.3778C7.09111 7.02327 0.72944 6.5652 2.75409 3.50353C4.77875 0.441861 10.6488 2.89331 8.01731 -4.29657Z",
                            fill: "#00FFF0",
                            fillOpacity: "0.67",
                          }),
                        }),
                        (0, C.jsx)("g", {
                          filter: "url(#".concat(o, ")"),
                          children: (0, C.jsx)("path", {
                            d: "M9.045 21.1328C6.17347 11.4709 -6.19516 16.5591 -12.0205 20.3109C-17.6241 24.7533 -4.31916 37.532 1.2068 36.8783C6.73273 36.2246 -3.2261 30.6617 0.186289 27.9528C3.59867 25.2439 12.6343 33.2102 9.045 21.1328Z",
                            fill: "#9D81FF",
                          }),
                        }),
                        (0, C.jsx)("g", {
                          filter: "url(#".concat(r, ")"),
                          children: (0, C.jsx)("path", {
                            d: "M26.4494 -10.0657C20.2551 -17.4417 11.3877 -11.3422 7.72841 -7.37045C4.52633 -2.87421 21.0264 5.36415 25.6058 3.95229C30.1851 2.54044 19.3611 -0.380992 21.3097 -3.12201C23.2583 -5.86303 34.1923 -0.845547 26.4494 -10.0657Z",
                            fill: "#4D94FF",
                          }),
                        }),
                        (0, C.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M8.7373 14.3283H12.814L8.17663 9.66107L12.8736 4.99371L14.1529 3.75H9.92143L4.53233 9.1666C4.26036 9.4396 4.26176 9.8814 4.53512 10.153L8.7373 14.3283ZM11.188 9.672L15.825 14.3389L11.128 19.0063L9.84877 20.25H14.0802L19.4693 14.8337C19.7413 14.5607 19.7399 14.1189 19.4666 13.8473L15.2644 9.672H11.188Z",
                          fill: "black",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("filter", {
                      id: t,
                      x: "-8.45978",
                      y: "-6.53857",
                      width: "53.3961",
                      height: "42.3217",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, C.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, C.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape",
                        }),
                        (0, C.jsx)("feGaussianBlur", {
                          stdDeviation: "4.61539",
                          result: "effect1_foregroundBlur_795_35",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("filter", {
                      id: i,
                      x: "-15.0473",
                      y: "-15.5621",
                      width: "32.9622",
                      height: "34.8289",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, C.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, C.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape",
                        }),
                        (0, C.jsx)("feGaussianBlur", {
                          stdDeviation: "4.61539",
                          result: "effect1_foregroundBlur_795_35",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("filter", {
                      id: o,
                      x: "-22.601",
                      y: "6.34082",
                      width: "41.7048",
                      height: "39.7924",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, C.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, C.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape",
                        }),
                        (0, C.jsx)("feGaussianBlur", {
                          stdDeviation: "4.61539",
                          result: "effect1_foregroundBlur_795_35",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("filter", {
                      id: r,
                      x: "-1.91156",
                      y: "-22.7599",
                      width: "40.3304",
                      height: "36.1036",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, C.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, C.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape",
                        }),
                        (0, C.jsx)("feGaussianBlur", {
                          stdDeviation: "4.61539",
                          result: "effect1_foregroundBlur_795_35",
                        }),
                      ],
                    }),
                    (0, C.jsx)("clipPath", {
                      id: l,
                      children: (0, C.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          SafePal: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsx)("rect", {
                  width: "24",
                  height: "24",
                  rx: "12",
                  fill: "#4A21EF",
                }),
                (0, C.jsx)("path", {
                  d: "M11.1721 5.27997C10.763 5.27997 10.3707 5.44246 10.0815 5.73171L5.53815 10.2751C5.36607 10.4472 5.28003 10.6728 5.28003 10.8983C5.28003 11.1239 5.36607 11.3494 5.53816 11.5215L8.51555 14.4989V9.22782C8.51555 8.83444 8.83194 8.51555 9.22531 8.51555C10.8872 8.51555 14.9326 8.51555 15.4844 8.51555L18.7199 5.28001L11.1721 5.27997Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M8.51569 15.4844H14.7722C15.1656 15.4844 15.4845 15.1655 15.4845 14.7721V9.501L18.4619 12.4784C18.634 12.6505 18.72 12.8761 18.72 13.1016C18.72 13.3272 18.634 13.5527 18.4619 13.7248L13.9186 18.2682C13.6293 18.5575 13.237 18.72 12.828 18.72L5.28017 18.7199L8.51569 15.4844Z",
                  fill: "white",
                }),
              ],
            });
          },
          Coin98: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsxs)("g", {
                  clipPath: "url(#clip0_1110_104)",
                  children: [
                    (0, C.jsx)("path", {
                      d: "M19.6159 0.00292969H4.38378C1.96431 0.00292969 0.00292969 1.96389 0.00292969 4.38285V19.6117C0.00292969 22.0307 1.96431 23.9916 4.38378 23.9916H19.6159C22.0354 23.9916 23.9968 22.0307 23.9968 19.6117V4.38285C23.9968 1.96389 22.0354 0.00292969 19.6159 0.00292969Z",
                      fill: "url(#paint0_linear_1110_104)",
                    }),
                    (0, C.jsx)("path", {
                      d: "M8.08083 5.99238C7.33996 5.99299 6.61589 6.21315 6.00013 6.62505C5.38438 7.03695 4.90456 7.62209 4.62132 8.30654C4.33809 8.99098 4.26414 9.74401 4.40882 10.4705C4.55351 11.1969 4.91034 11.8642 5.43421 12.3879C5.95809 12.9117 6.6255 13.2685 7.3521 13.4131C8.07871 13.5578 8.8319 13.4838 9.51649 13.2007C10.2011 12.9175 10.7864 12.4378 11.1983 11.8221C11.6103 11.2065 11.8305 10.4826 11.8311 9.7419C11.8306 8.74763 11.4353 7.79424 10.7321 7.09119C10.0289 6.38813 9.07531 5.99292 8.08083 5.99238ZM8.08083 11.9505C7.64349 11.9505 7.21597 11.8209 6.85234 11.5779C6.48871 11.335 6.20531 10.9897 6.03796 10.5858C5.87061 10.1818 5.82684 9.73727 5.91219 9.30843C5.99754 8.8796 6.20816 8.48569 6.51743 8.17654C6.8267 7.86738 7.22072 7.65686 7.64966 7.5716C8.07861 7.48634 8.52321 7.53017 8.92723 7.69754C9.33126 7.86491 9.67657 8.14832 9.9195 8.5119C10.1624 8.87549 10.292 9.30294 10.292 9.74018C10.29 10.3258 10.0564 10.887 9.64213 11.3011C9.22788 11.7151 8.66662 11.9486 8.08083 11.9505ZM19.1277 9.19744C19.1289 9.73362 18.9933 10.2612 18.7338 10.7305C18.3334 10.4047 17.8777 10.1536 17.3885 9.98912C17.5189 9.74557 17.5876 9.47373 17.5885 9.19744C17.5885 8.75508 17.4127 8.33083 17.0999 8.01804C16.787 7.70524 16.3627 7.52951 15.9202 7.52951C15.4777 7.52951 15.0534 7.70524 14.7405 8.01804C14.4277 8.33083 14.2519 8.75508 14.2519 9.19744C14.2498 9.47409 14.3187 9.74666 14.4519 9.98912C13.9626 10.1537 13.5068 10.4048 13.1063 10.7305C12.8392 10.2425 12.7039 9.69338 12.7137 9.13722C12.7235 8.58105 12.8781 8.03705 13.1622 7.5588C13.4463 7.08056 13.8502 6.68458 14.334 6.40991C14.8178 6.13523 15.3649 5.99132 15.9212 5.99238C16.7712 5.99328 17.5862 6.33123 18.1873 6.93208C18.7884 7.53293 19.1266 8.34762 19.1277 9.19744ZM15.9212 10.4945C15.1801 10.4939 14.4555 10.713 13.8389 11.1242C13.2224 11.5353 12.7416 12.12 12.4574 12.8043C12.1732 13.4886 12.0983 14.2418 12.2423 14.9686C12.3862 15.6954 12.7425 16.3633 13.266 16.8877C13.7896 17.4121 14.4569 17.7695 15.1837 17.9147C15.9104 18.06 16.6639 17.9865 17.3488 17.7036C18.0338 17.4207 18.6195 16.9411 19.0318 16.3254C19.4442 15.7098 19.6646 14.9857 19.6654 14.2447C19.6644 13.2516 19.2698 12.2994 18.5681 11.5965C17.8663 10.8936 16.9146 10.4973 15.9212 10.4945ZM15.9212 16.4486C15.4845 16.448 15.0577 16.318 14.6948 16.0749C14.332 15.8319 14.0494 15.4867 13.8828 15.083C13.7162 14.6794 13.6731 14.2354 13.7589 13.8072C13.8448 13.3791 14.0556 12.986 14.3649 12.6777C14.6742 12.3694 15.068 12.1597 15.4965 12.0751C15.925 11.9906 16.369 12.035 16.7722 12.2028C17.1754 12.3705 17.5199 12.6541 17.7619 13.0175C18.004 13.381 18.1328 13.8081 18.132 14.2447C18.1303 14.8298 17.8966 15.3904 17.4822 15.8035C17.0678 16.2166 16.5064 16.4486 15.9212 16.4486ZM11.2873 14.7817C11.2873 15.6321 10.9493 16.4478 10.3478 17.0492C9.7463 17.6506 8.93047 17.9884 8.0798 17.9884C7.22913 17.9884 6.41329 17.6506 5.81178 17.0492C5.21026 16.4478 4.87233 15.6321 4.87233 14.7817H6.41151C6.41151 15.224 6.58727 15.6483 6.90014 15.9611C7.213 16.2739 7.63734 16.4496 8.0798 16.4496C8.52226 16.4496 8.94659 16.2739 9.25946 15.9611C9.57233 15.6483 9.74809 15.224 9.74809 14.7817H11.2873Z",
                      fill: "#252525",
                    }),
                  ],
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("linearGradient", {
                      id: "paint0_linear_1110_104",
                      x1: "22.7734",
                      y1: "1.22606",
                      x2: "1.5624",
                      y2: "22.4416",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#F1D961" }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#CDA146",
                        }),
                      ],
                    }),
                    (0, C.jsx)("clipPath", {
                      id: "clip0_1110_104",
                      children: (0, C.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: "white",
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          Onekey: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsx)("path", {
                  d: "M24 12C24 20.2843 20.2843 24 12 24C3.71573 24 0 20.2843 0 12C0 3.71573 3.71573 0 12 0C20.2843 0 24 3.71573 24 12Z",
                  fill: "#44D62C",
                }),
                (0, C.jsx)("path", {
                  d: "M13.0842 5.0885H9.74582L9.16016 6.85933H11.0143V10.5897H13.0842V5.0885Z",
                  fill: "black",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15.8074 15.1043C15.8074 17.207 14.1027 18.9115 12 18.9115C9.89737 18.9115 8.19287 17.207 8.19287 15.1043C8.19287 13.0017 9.89737 11.2972 12 11.2972C14.1027 11.2972 15.8074 13.0017 15.8074 15.1043ZM14.0789 15.1043C14.0789 16.2525 13.1482 17.1832 12 17.1832C10.852 17.1832 9.92137 16.2525 9.92137 15.1043C9.92137 13.9563 10.852 13.0255 12 13.0255C13.1482 13.0255 14.0789 13.9563 14.0789 15.1043Z",
                  fill: "black",
                }),
              ],
            });
          },
          Bybit: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsxs)("g", {
                  clipPath: "url(#clip0_1110_94)",
                  children: [
                    (0, C.jsx)("path", {
                      d: "M0 5.1C0 2.28335 2.28335 0 5.1 0H18.9C21.7166 0 24 2.28335 24 5.1V18.9C24 21.7166 21.7166 24 18.9 24H5.1C2.28335 24 0 21.7166 0 18.9V5.1Z",
                      fill: "#404347",
                    }),
                    (0, C.jsx)("path", {
                      d: "M2.06625 7.31091C1.85052 6.56691 2.31207 5.79629 3.06981 5.63536L15.7115 2.95017C16.3116 2.82272 16.9212 3.12117 17.1886 3.67333L22.8667 15.3997L6.86664 23.8664L2.06625 7.31091Z",
                      fill: "url(#paint0_linear_1110_94)",
                    }),
                    (0, C.jsx)("path", {
                      d: "M2.2316 8.22593C2.00471 7.44102 2.53073 6.63852 3.34099 6.53341L20.0963 4.36038C20.7925 4.2701 21.4394 4.73502 21.5758 5.42363L24.0001 17.6665L6.73345 23.7999L2.2316 8.22593Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M0 9.33333C0 7.86058 1.19391 6.66669 2.66667 6.66669H18.6667C21.6122 6.66669 24 9.0545 24 12V18.6667C24 21.6122 21.6122 24 18.6667 24H5.33335C2.38781 24 0 21.6122 0 18.6667V9.33333Z",
                      fill: "black",
                    }),
                    (0, C.jsx)("path", {
                      d: "M15.8782 16.6898V11.6933H16.8528V16.6898H15.8782Z",
                      fill: "#F7A600",
                    }),
                    (0, C.jsx)("path", {
                      d: "M4.75626 18.181H2.66675V13.1846H4.67221C5.64683 13.1846 6.21478 13.732 6.21478 14.588C6.21478 15.1422 5.85014 15.5003 5.59795 15.6197C5.89953 15.7601 6.2852 16.0756 6.2852 16.7423C6.2852 17.6757 5.64683 18.181 4.75626 18.181ZM4.59497 14.0548H3.64138V15.2059H4.59497C5.00845 15.2059 5.24016 14.9745 5.24016 14.6306C5.24016 14.2862 5.009 14.0548 4.59497 14.0548ZM4.65803 16.083H3.64138V17.3108H4.65803C5.09987 17.3108 5.31003 17.03 5.31003 16.6934C5.31058 16.3564 5.09987 16.083 4.65803 16.083Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M8.97067 16.1319V18.181H8.00287V16.1319L6.50232 13.1846H7.56102L8.49358 15.1985L9.41199 13.1846H10.4707L8.97067 16.1319Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M13.2446 18.181H11.155V13.1846H13.1605C14.1351 13.1846 14.7031 13.732 14.7031 14.588C14.7031 15.1422 14.3384 15.5003 14.0862 15.6197C14.3878 15.7601 14.7735 16.0756 14.7735 16.7423C14.7729 17.6757 14.1346 18.181 13.2446 18.181ZM13.0833 14.0548H12.1296V15.2059H13.0833C13.4967 15.2059 13.7285 14.9745 13.7285 14.6306C13.7279 14.2862 13.4967 14.0548 13.0833 14.0548ZM13.1463 16.083H12.1296V17.3108H13.1463C13.5882 17.3108 13.7983 17.03 13.7983 16.6934C13.7983 16.3564 13.5876 16.083 13.1463 16.083Z",
                      fill: "white",
                    }),
                    (0, C.jsx)("path", {
                      d: "M20.0288 14.0548V18.181H19.0542V14.0548H17.7501V13.1846H21.3333V14.0548H20.0288Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("linearGradient", {
                      id: "paint0_linear_1110_94",
                      x1: "1.99995",
                      y1: "6.98018",
                      x2: "23.0831",
                      y2: "5.92407",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#FFD748" }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#F7A600",
                        }),
                      ],
                    }),
                    (0, C.jsx)("clipPath", {
                      id: "clip0_1110_94",
                      children: (0, C.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          Brave: (n) => {
            let { ...e } = n;
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "24",
              viewBox: "0 0 22 24",
              fill: "none",
              ...e,
              children: [
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M20.522 5.75747L21.0808 4.3761C21.0808 4.3761 20.3638 3.60633 19.4991 2.74165C18.6239 1.87698 16.7891 2.38313 16.7891 2.38313L14.6801 0H7.30932L5.2109 2.38313C5.2109 2.38313 3.36556 1.86643 2.50088 2.74165C1.62566 3.60633 0.919159 4.3761 0.919159 4.3761L1.47803 5.75747L0.760986 7.80316C0.760986 7.80316 2.86995 15.7856 3.11248 16.7557C3.59754 18.6749 3.93498 19.413 5.31635 20.3831C6.69772 21.3533 9.20738 23.0404 9.61863 23.304C10.0299 23.5571 10.536 24 11 24C11.464 24 11.9701 23.5677 12.3814 23.304C12.7926 23.051 15.3023 21.3638 16.6837 20.3831C18.065 19.413 18.4025 18.6643 18.8875 16.7557C19.1301 15.7856 21.239 7.80316 21.239 7.80316L20.522 5.75747Z",
                  fill: "url(#paint0_linear_1218_131)",
                }),
                (0, C.jsx)("path", {
                  d: "M13.6046 4.32337C13.9104 4.32337 16.1881 3.89103 16.1881 3.89103C16.1881 3.89103 18.8875 7.14938 18.8875 7.84534C18.8875 8.54129 18.6555 8.64674 18.3814 8.91036C18.3287 8.96309 18.2654 9.02635 18.2021 9.08962L16.1775 11.2408C16.1564 11.2619 16.1353 11.2829 16.1142 11.304C15.9139 11.5044 15.6186 11.8102 15.8295 12.3058C15.8401 12.3374 15.8612 12.3691 15.8717 12.4112C16.1037 12.949 16.3884 13.6133 16.0193 14.2882C15.6397 15.0053 14.9754 15.4798 14.5536 15.406C14.1318 15.3322 13.1406 14.8049 12.7715 14.5729C12.4025 14.3409 11.2531 13.3814 11.2531 13.0228C11.2531 12.6643 12.0861 12.2109 12.4868 11.9684C12.5712 11.9156 12.6345 11.884 12.6661 11.8524C12.7083 11.8207 12.7821 11.7786 12.8664 11.7258C13.2355 11.4938 13.8998 11.0826 13.9209 10.9033C13.942 10.6819 13.9315 10.6081 13.6362 10.0492C13.5729 9.93321 13.4991 9.80667 13.4253 9.66959C13.1406 9.18453 12.8243 8.6362 12.8981 8.24604C12.9824 7.80316 13.6679 7.55008 14.2478 7.33918C14.3216 7.30755 14.3954 7.28646 14.4587 7.26537C14.6274 7.2021 14.8489 7.11774 15.0703 7.03338C15.6503 6.81194 16.3041 6.56941 16.4095 6.52723C16.5571 6.46396 16.515 6.39015 16.0721 6.34797C16.0088 6.34797 15.935 6.33743 15.8506 6.32688C15.2918 6.26361 14.2689 6.15816 13.7733 6.29525C13.6784 6.32688 13.5624 6.34797 13.4464 6.37961C12.8875 6.52723 12.2021 6.71704 12.1389 6.82249C12.1283 6.84358 12.1178 6.85412 12.1072 6.87521C12.044 6.95957 12.0018 7.02284 12.0756 7.40245C12.0967 7.51845 12.1389 7.73989 12.1916 8.01405C12.3498 8.826 12.5923 10.0808 12.6134 10.3655C12.6134 10.4077 12.6134 10.4394 12.6239 10.4815C12.6661 10.7979 12.6872 11.0088 12.3181 11.0931C12.2865 11.0931 12.2548 11.1037 12.2232 11.1142C11.812 11.2091 11.2004 11.3462 10.9789 11.3462C10.7575 11.3462 10.1564 11.2091 9.73464 11.1142C9.703 11.1142 9.67137 11.1037 9.63973 11.0931C9.27066 11.0088 9.3023 10.7979 9.33393 10.4815C9.33393 10.4499 9.33393 10.4077 9.34448 10.3655C9.37611 10.0808 9.61864 8.826 9.76627 8.01405C9.81899 7.73989 9.86117 7.51845 9.88226 7.40245C9.95608 7.02284 9.9139 6.95957 9.85063 6.87521C9.84008 6.86467 9.82954 6.84358 9.81899 6.82249C9.75573 6.71704 9.07031 6.52723 8.51144 6.37961C8.39544 6.34797 8.29 6.31634 8.18455 6.29525C7.68894 6.15816 6.66609 6.26361 6.10722 6.32688C6.02286 6.32688 5.94905 6.34797 5.88578 6.34797C5.43235 6.39015 5.40072 6.45342 5.54834 6.52723C5.65379 6.57996 6.30757 6.82249 6.88754 7.03338C7.10898 7.11774 7.33042 7.2021 7.49914 7.26537C7.5624 7.28646 7.63622 7.31809 7.71003 7.33918C8.29 7.55008 8.98595 7.80316 9.05977 8.24604C9.13358 8.6362 8.81724 9.18453 8.53253 9.66959C8.45871 9.79613 8.3849 9.93321 8.32163 10.0492C8.02638 10.6081 8.01583 10.6713 8.03692 10.9033C8.05801 11.0826 8.72233 11.5044 9.0914 11.7258C9.17576 11.7786 9.24957 11.8207 9.29175 11.8524C9.32339 11.8735 9.38666 11.9156 9.47102 11.9684C9.87172 12.2109 10.7048 12.717 10.7048 13.0228C10.7048 13.3286 9.54483 14.3409 9.18631 14.5729C8.81724 14.8049 7.82602 15.3322 7.40423 15.406C6.98244 15.4798 6.31812 15.0053 5.9385 14.2882C5.57998 13.6133 5.86469 12.949 6.08613 12.4112C6.09667 12.3796 6.11776 12.348 6.12831 12.3058C6.33921 11.8102 6.04395 11.5149 5.8436 11.304C5.82251 11.2829 5.80142 11.2619 5.78033 11.2408L3.75573 9.08962C3.69246 9.02635 3.63973 8.97363 3.57646 8.91036C3.3023 8.64674 3.07031 8.41476 3.07031 7.84534C3.07031 7.27592 5.76979 3.89103 5.76979 3.89103C5.76979 3.89103 8.04747 4.32337 8.35327 4.32337C8.65907 4.32337 9.07031 4.16519 9.56592 3.98593C9.69246 3.94375 9.81899 3.90157 9.94553 3.85939C10.5571 3.65904 10.9684 3.6485 10.9684 3.6485C10.9684 3.6485 11.3796 3.6485 11.9912 3.85939C12.1178 3.90157 12.2443 3.94375 12.3708 3.98593C12.8664 4.15465 13.341 4.32337 13.5835 4.32337H13.6046Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M13.2144 15.8594C13.6995 16.1125 14.0369 16.2812 14.1634 16.3656C14.3321 16.471 14.2267 16.6714 14.0791 16.7768C13.9314 16.8823 11.8858 18.464 11.6854 18.6432C11.6643 18.6643 11.6327 18.6854 11.601 18.7171C11.4112 18.8858 11.1687 19.1072 10.9894 19.1072C10.8102 19.1072 10.5677 18.8858 10.3778 18.7171C10.3462 18.696 10.3251 18.6643 10.2935 18.6432C10.0931 18.464 8.04744 16.8823 7.89981 16.7768C7.75218 16.6714 7.64674 16.471 7.81545 16.3656C7.94199 16.2812 8.28997 16.1125 8.76449 15.8594C8.90157 15.7856 9.05974 15.7118 9.21791 15.6274C9.93496 15.2584 10.8418 14.942 10.9789 14.942C11.116 14.942 12.0228 15.2584 12.7399 15.6274C12.9086 15.7118 13.0562 15.7961 13.2039 15.8594H13.2144Z",
                  fill: "white",
                }),
                (0, C.jsx)("defs", {
                  children: (0, C.jsxs)("linearGradient", {
                    id: "paint0_linear_1218_131",
                    x1: "0.760986",
                    y1: "12",
                    x2: "21.239",
                    y2: "12",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, C.jsx)("stop", { stopColor: "#FF5601" }),
                      (0, C.jsx)("stop", {
                        offset: "0.5",
                        stopColor: "#FF4000",
                      }),
                      (0, C.jsx)("stop", { offset: "1", stopColor: "#FF1F01" }),
                    ],
                  }),
                }),
              ],
            });
          },
        },
        oz = {
          "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
          "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
          "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
          "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
          "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
          "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
          "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
          "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
          "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
          "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
          "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
          "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
          "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
          "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
          "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
          "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
          "ar-TN": /^(\+?216)?[2459]\d{7}$/,
          "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
          "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
          "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
          "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
          "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
          "ca-AD": /^(\+376)?[346]\d{5}$/,
          "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
          "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
          "de-DE":
            /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
          "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
          "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
          "de-LU": /^(\+352)?((6\d1)\d{6})$/,
          "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
          "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
          "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
          "en-AI":
            /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
          "en-AU": /^(\+?61|0)4\d{8}$/,
          "en-AG":
            /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
          "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
          "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
          "en-GB": /^(\+?44|0)7[1-9]\d{8}$/,
          "en-GG": /^(\+?44|0)1481\d{6}$/,
          "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
          "en-GY": /^(\+592|0)6\d{6}$/,
          "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
          "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
          "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
          "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
          "en-JM": /^(\+?876)?\d{7}$/,
          "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
          "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
          "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
          "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
          "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
          "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
          "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
          "en-MU": /^(\+?230|0)?\d{8}$/,
          "en-MW":
            /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
          "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
          "en-NG": /^(\+?234|0)?[789]\d{9}$/,
          "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
          "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
          "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
          "en-PH": /^(09|\+639)\d{9}$/,
          "en-RW": /^(\+?250|0)?[7]\d{8}$/,
          "en-SG": /^(\+65)?[3689]\d{7}$/,
          "en-SL": /^(\+?232|0)\d{8}$/,
          "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
          "en-UG": /^(\+?256|0)?[7]\d{8}$/,
          "en-US":
            /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
          "en-ZA": /^(\+?27|0)\d{9}$/,
          "en-ZM": /^(\+?26)?09[567]\d{7}$/,
          "en-ZW": /^(\+263)[0-9]{9}$/,
          "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
          "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
          "es-BO": /^(\+?591)?(6|7)\d{7}$/,
          "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
          "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
          "es-CR": /^(\+506)?[2-8]\d{7}$/,
          "es-CU": /^(\+53|0053)?5\d{7}$/,
          "es-DO": /^(\+?1)?8[024]9\d{7}$/,
          "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
          "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
          "es-ES": /^(\+?34)?[6|7]\d{8}$/,
          "es-GT": /^(\+?502)?[2|6|7]\d{7}$/,
          "es-PE": /^(\+?51)?9\d{8}$/,
          "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
          "es-NI": /^(\+?505)\d{7,8}$/,
          "es-PA": /^(\+?507)\d{7,8}$/,
          "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
          "es-SV": /^(\+?503)?[67]\d{7}$/,
          "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
          "es-VE": /^(\+?58)?(2|4)\d{9}$/,
          "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
          "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
          "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
          "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
          "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
          "fr-BF": /^(\+226|0)[67]\d{7}$/,
          "fr-BJ": /^(\+229)\d{8}$/,
          "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
          "fr-CM": /^(\+?237)6[0-9]{8}$/,
          "fr-FR": /^(\+?33|0)[67]\d{8}$/,
          "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
          "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
          "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
          "fr-PF": /^(\+?689)?8[789]\d{6}$/,
          "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
          "fr-WF": /^(\+681)?\d{6}$/,
          "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
          "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
          "id-ID":
            /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
          "ir-IR": /^(\+98|0)?9\d{9}$/,
          "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
          "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
          "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
          "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
          "kk-KZ": /^(\+?7|8)?7\d{9}$/,
          "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
          "ko-KR":
            /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
          "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
          "lt-LT": /^(\+370|8)\d{8}$/,
          "lv-LV": /^(\+?371)2\d{7}$/,
          "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
          "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
          "my-MM":
            /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
          "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
          "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
          "nb-NO": /^(\+?47)?[49]\d{7}$/,
          "ne-NP": /^(\+?977)?9[78]\d{8}$/,
          "nl-BE": /^(\+?32|0)4\d{8}$/,
          "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
          "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
          "nn-NO": /^(\+?47)?[49]\d{7}$/,
          "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
          "pt-BR":
            /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
          "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
          "pt-AO": /^(\+244)\d{9}$/,
          "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
          "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
          "ru-RU": /^(\+?7|8)?9\d{9}$/,
          "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
          "sl-SI":
            /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
          "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
          "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
          "sq-AL": /^(\+355|0)6[789]\d{6}$/,
          "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
          "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
          "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
          "th-TH": /^(\+66|66|0)\d{9}$/,
          "tr-TR": /^(\+?90|0)?5\d{9}$/,
          "tk-TM": /^(\+993|993|8)\d{8}$/,
          "uk-UA": /^(\+?38)?0(50|6[36-8]|7[357]|9[1-9])\d{7}$/,
          "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
          "vi-VN":
            /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
          "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
          "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
          "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
          "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
          "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
          "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/,
        };
      (oz["en-CA"] = oz["en-US"]),
        (oz["fr-CA"] = oz["en-CA"]),
        (oz["fr-BE"] = oz["nl-BE"]),
        (oz["zh-HK"] = oz["en-HK"]),
        (oz["zh-MO"] = oz["en-MO"]),
        (oz["ga-IE"] = oz["en-IE"]),
        (oz["fr-CH"] = oz["de-CH"]),
        (oz["it-CH"] = oz["fr-CH"]);
      var oE = Object.keys(oz),
        oO = () => {
          var n;
          let e = (0, y.o0)();
          return null !== (n = null == e ? void 0 : e.os) && void 0 !== n
            ? n
            : "";
        },
        oS = () => oO().toLowerCase().includes("ios"),
        oU = () => oO().toLowerCase().includes("android"),
        oZ = () => oU() || oS(),
        oF = (n, e, t, i) => {
          if (
            oE
              .filter((e) => {
                var t;
                return (
                  (null === (t = e.split("-")[1]) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) ===
                  (null == n ? void 0 : n.toLowerCase())
                );
              })
              .some((n) =>
                (function (n, e, t) {
                  if (
                    (!(function (n) {
                      if (!("string" == typeof n || n instanceof String)) {
                        let e = typeof n;
                        throw (
                          (null === n
                            ? (e = "null")
                            : "object" === e && (e = n.constructor.name),
                          TypeError(
                            "Expected a string but received a ".concat(e)
                          ))
                        );
                      }
                    })(n),
                    t && t.strictMode && !n.startsWith("+"))
                  )
                    return !1;
                  if (Array.isArray(e))
                    return e.some(
                      (e) => !!(oz.hasOwnProperty(e) && oz[e].test(n))
                    );
                  if (e in oz) return oz[e].test(n);
                  if (!e || "any" === e) {
                    for (let e in oz)
                      if (oz.hasOwnProperty(e) && oz[e].test(n)) return !0;
                    return !1;
                  }
                  throw Error("Invalid locale '".concat(e, "'"));
                })("+".concat(e).concat(t), n, { strictMode: !0 })
              )
          )
            return !0;
          throw Error((null == i ? void 0 : i.invalidOrIncorrectNumber) || "");
        },
        oP = (n, e) => {
          let t = 0,
            i = 0,
            o = 0;
          return (
            4 === n.length
              ? ((t = parseInt(n[1] + n[1], 16)),
                (i = parseInt(n[2] + n[2], 16)),
                (o = parseInt(n[3] + n[3], 16)))
              : 7 === n.length &&
                ((t = parseInt(n[1] + n[2], 16)),
                (i = parseInt(n[3] + n[4], 16)),
                (o = parseInt(n[5] + n[6], 16))),
            "rgba("
              .concat(t, ", ")
              .concat(i, ", ")
              .concat(o, ", ")
              .concat(e, ")")
          );
        },
        oQ = (n) =>
          n
            ? n.length <= 10
              ? n
              : "".concat(n.slice(0, 6), "...").concat(n.slice(-4))
            : "",
        oV = (n) => {
          if (n.startsWith("http")) {
            let e = document.createElement("a");
            (e.href = n),
              (e.target = "_blank"),
              (e.rel = "noreferrer noopener"),
              e.click();
          } else window.location.href = n;
        },
        oH = (n) => {
          var e, t, i, o, r;
          return !!(
            (null === (e = n.downloadUrls) || void 0 === e
              ? void 0
              : e.chrome) ||
            (null === (t = n.downloadUrls) || void 0 === t
              ? void 0
              : t.brave) ||
            (null === (i = n.downloadUrls) || void 0 === i ? void 0 : i.edge) ||
            (null === (o = n.downloadUrls) || void 0 === o
              ? void 0
              : o.firefox) ||
            (null === (r = n.downloadUrls) || void 0 === r ? void 0 : r.safari)
          );
        },
        oY = function (n, e) {
          let t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 9;
          if (!n) return "0";
          ("string" == typeof n || "number" == typeof n) && (n = BigInt(n));
          let i = (0, m.J)(n, e),
            [o, r] = i.split(".");
          return t >= 5 &&
            "0" === o &&
            (null == r ? void 0 : r.startsWith("".padEnd(t, "0")))
            ? "<0.".padEnd(t + 3 - 1, "0") + "1"
            : (i = (function (n, e) {
                let [t, i] = n.split(".");
                return i && "" !== (i = (i = i.slice(0, e)).replace(/0+$/, ""))
                  ? "".concat(t, ".").concat(i)
                  : t;
              })(i, t));
        },
        o_ = (n) => 2 * Math.floor(n / 2),
        oW = () =>
          "completed" !== localStorage.getItem("passkeyRegistrationStatus"),
        oB = () => {
          localStorage.setItem("passkeyRegistrationStatus", "completed");
        },
        oR = {
          "particleEVM, particleSolana, network.particle": {
            name: "Particle Auth",
            iconShape: "circle",
          },
          "coinbaseWallet, coinbaseWalletSDK, com.coinbase.wallet": {
            name: "Coinbase Wallet",
            shortName: "Coinbase",
            icon: (0, C.jsx)(oA.Coinbase, {}),
            iconShape: "squircle",
            downloadUrls: {
              website:
                "https://www.coinbase.com/wallet/getting-started-extension",
              chrome:
                "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
              brave:
                "https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
              android:
                "https://play.google.com/store/apps/details?id=org.toshi",
              ios: "https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",
            },
            getWalletConnectDeeplink: (n) => n,
            getDAppBrowserDeeplink: (n) =>
              "https://go.cb-w.com/dapp?cb_url=".concat(encodeURIComponent(n)),
          },
          "metaMask, io.metamask, io.metamask.mobile": {
            name: "MetaMask",
            icon: (0, C.jsx)(oA.MetaMask, {}),
            iconShouldShrink: !0,
            downloadUrls: {
              website: "https://metamask.io/download/",
              chrome:
                "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
              firefox:
                "https://addons.mozilla.org/firefox/addon/ether-metamask/",
              brave:
                "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
              edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
              android:
                "https://play.google.com/store/apps/details?id=io.metamask",
              ios: "https://apps.apple.com/app/metamask/id1438144202",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "metamask://wc?uri=".concat(encodeURIComponent(n))
                : "https://metamask.app.link/wc?uri=".concat(
                    encodeURIComponent(n)
                  ),
          },
          "phantom, app.phantom": {
            name: "Phantom",
            iconShape: "squircle",
            icon: (0, C.jsx)(oA.Phantom, {}),
            downloadUrls: {
              website: "https://phantom.app/download",
              chrome:
                "https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",
              brave:
                "https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",
              firefox:
                "https://addons.mozilla.org/en-US/firefox/addon/phantom-app/",
              android:
                "https://play.google.com/store/apps/details?id=app.phantom",
              ios: "https://apps.apple.com/us/app/phantom-crypto-wallet/id1598432977",
            },
            getDAppBrowserDeeplink: (n) =>
              "https://phantom.app/ul/browse/"
                .concat(encodeURIComponent(n), "?ref=")
                .concat(encodeURIComponent(window.location.origin)),
          },
          "okxWallet, oKExWallet, com.okex.wallet": {
            name: "OKX Wallet",
            shortName: "OKX",
            iconShape: "squircle",
            icon: (0, C.jsx)(oA.OKX, {}),
            downloadUrls: {
              website: "https://www.okx.com/download",
              chrome:
                "https://chromewebstore.google.com/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/mcohilncbfahbmgdjkbpemcciiolgcge",
              edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
              brave:
                "https://chromewebstore.google.com/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/mcohilncbfahbmgdjkbpemcciiolgcge",
              android:
                "https://play.google.com/store/apps/details?id=com.okinc.okex.gp",
              ios: "https://apps.apple.com/us/app/okx-buy-bitcoin-btc-crypto/id1327268470",
            },
            getWalletConnectDeeplink: (n) =>
              "okex://main/wc?uri=".concat(encodeURIComponent(n)),
            getDAppBrowserDeeplink: (n) => {
              let e = "okx://wallet/dapp/url?dappUrl=".concat(
                encodeURIComponent(n)
              );
              return "https://www.okx.com/download?deeplink=".concat(
                encodeURIComponent(e)
              );
            },
          },
          "bitKeep, bitget, com.bitget.web3": {
            name: "Bitget Wallet",
            shortName: "Bitget",
            iconShape: "circle",
            icon: (0, C.jsx)(oA.BitKeep, {}),
            downloadUrls: {
              website: "https://web3.bitget.com/wallet-download",
              chrome:
                "https://chromewebstore.google.com/detail/bitget-wallet-formerly-bi/jiidiaalihmmhddjgbnbgdfflelocpak",
              android:
                "https://play.google.com/store/apps/details?id=com.bitkeep.wallet",
              ios: "https://apps.apple.com/us/app/bitget-wallet-ex-bitkeep/id1395301115",
            },
            getWalletConnectDeeplink: (n) =>
              "bitkeep://wc?uri=".concat(encodeURIComponent(n)),
            getDAppBrowserDeeplink: (n) =>
              "https://bkcode.vip?action=dapp&url=".concat(
                encodeURIComponent(n)
              ),
          },
          "rabby, io.rabby": {
            name: "Rabby Wallet",
            shortName: "Rabby",
            icon: (0, C.jsx)(oA.Rabby, {}),
            downloadUrls: {
              website: "https://rabby.io",
              chrome:
                "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
            },
          },
          "rainbow, me.rainbow": {
            name: "Rainbow Wallet",
            shortName: "Rainbow",
            icon: (0, C.jsx)(oA.Rainbow, {}),
            iconShape: "squircle",
            downloadUrls: {
              website: "https://rainbow.me/?utm_source=connectkit",
              chrome:
                "https://chrome.google.com/webstore/detail/opfgelmcmbiajamepnmloijbpoleiama",
              edge: "https://microsoftedge.microsoft.com/addons/detail/cpojfbodiccabbabgimdeohkkpjfpbnf",
              firefox:
                "https://addons.mozilla.org/firefox/addon/rainbow-extension",
              brave: "https://rainbow.me/extension?utm_source=connectkit",
              android:
                "https://play.google.com/store/apps/details?id=me.rainbow",
              ios: "https://apps.apple.com/app/id1457119021",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "rainbow://wc?uri=".concat(
                    encodeURIComponent(n),
                    "&connector=rainbowkit"
                  )
                : "https://rnbwapp.com/wc?uri=".concat(
                    encodeURIComponent(n),
                    "&connector=rainbowkit"
                  ),
          },
          "talisman, xyz.talisman": {
            name: "Talisman",
            shortName: "Talisman",
            icon: (0, C.jsx)(oA.Talisman, {}),
            iconShape: "squircle",
            downloadUrls: {
              website: "https://talisman.xyz",
              chrome:
                "https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",
              firefox:
                "https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/",
              brave:
                "https://chromewebstore.google.com/detail/talisman-ethereum-and-pol/fijngjgcjhjmmpcmkeiomlglpeiijkld",
            },
          },
          "trust, trustWallet, com.trustwallet.app": {
            name: "Trust Wallet",
            shortName: "Trust",
            icon: (0, C.jsx)(oA.Trust, {}),
            iconShouldShrink: !0,
            downloadUrls: {
              website: "https://trustwallet.com/download",
              chrome:
                "https://chromewebstore.google.com/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
              android:
                "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
              ios: "https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "trust://wc?uri=".concat(encodeURIComponent(n))
                : "https://link.trustwallet.com/wc?uri=".concat(
                    encodeURIComponent(n)
                  ),
            getDAppBrowserDeeplink: (n) =>
              "https://link.trustwallet.com/open_url?url=".concat(
                encodeURIComponent(n)
              ),
          },
          "com.crypto.wallet": { name: "Crypto.com", shortName: "Crypto" },
          "frontier, xyz.frontier.wallet": {
            name: "Frontier Wallet",
            shortName: "Frontier",
            icon: (0, C.jsx)(oA.Frontier, {}),
            downloadUrls: {
              website: "https://www.frontier.xyz/download",
              chrome:
                "https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd",
              brave:
                "https://chromewebstore.google.com/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd",
              android:
                "https://play.google.com/store/apps/details?id=com.frontierwallet",
              ios: "https://apps.apple.com/app/frontier-crypto-defi-wallet/id1482380988",
            },
            getWalletConnectDeeplink: (n) =>
              "frontier://wc?uri=".concat(encodeURIComponent(n)),
          },
          infinityWallet: {
            name: "Infinity Wallet",
            icon: (0, C.jsx)(oA.InfinityWallet, {}),
            downloadUrls: {
              website: "https://infinitywallet.io/download",
              chrome: "https://infinitywallet.io/download",
              firefox: "https://infinitywallet.io/download",
              brave: "https://infinitywallet.io/download",
              edge: "https://infinitywallet.io/download",
            },
          },
          imToken: {
            name: "imToken",
            icon: (0, C.jsx)(oA.ImToken, {}),
            downloadUrls: {
              website: "https://token.im/download",
              android:
                "https://play.google.com/store/apps/details?id=im.token.app",
              ios: "https://itunes.apple.com/us/app/imtoken2/id1384798940",
            },
            getWalletConnectDeeplink: (n) =>
              "imtokenv2://wc?uri=".concat(encodeURIComponent(n)),
          },
          onto: {
            name: "ONTO",
            icon: (0, C.jsx)(oA.ONTO, {}),
            downloadUrls: {
              website: "https://onto.app/en/download/",
              chrome:
                "https://chromewebstore.google.com/detail/onto-wallet/ifckdpamphokdglkkdomedpdegcjhjdp",
              ios: "https://apps.apple.com/app/onto-an-ontology-dapp/id1436009823",
              android:
                "https://play.google.com/store/apps/details?id=com.github.ontio.onto",
            },
            getWalletConnectDeeplink: (n) =>
              oU()
                ? n
                : "https://onto.app/wc?uri=".concat(encodeURIComponent(n)),
          },
          ledger: {
            name: "Ledger Live",
            shortName: "Ledger",
            icon: (0, C.jsx)(oA.Ledger, {}),
            downloadUrls: {
              website:
                "https://www.ledger.com/ledger-live/download#download-device-2",
              android:
                "https://play.google.com/store/apps/details?id=com.ledger.live",
              ios: "https://apps.apple.com/app/ledger-live-web3-wallet/id1361671700",
            },
            getWalletConnectDeeplink: (n) =>
              "ledgerlive://wc?uri=".concat(encodeURIComponent(n)),
          },
          "zerion, io.zerion.wallet": {
            name: "Zerion",
            icon: (0, C.jsx)(oA.Zerion, {}),
            downloadUrls: {
              website: "https://zerion.io/download",
              chrome:
                "https://chromewebstore.google.com/detail/zerion-wallet-for-web3-nf/klghhnkeealcohjjanjjdaeeggmfmlpl",
              brave:
                "https://chromewebstore.google.com/detail/zerion-wallet-for-web3-nf/klghhnkeealcohjjanjjdaeeggmfmlpl",
              ios: "https://apps.apple.com/app/apple-store/id1456732565",
              android:
                "https://play.google.com/store/apps/details?id=io.zerion.android",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "zerion://wc?uri=".concat(encodeURIComponent(n))
                : "https://app.zerion.io/wc?uri=".concat(encodeURIComponent(n)),
          },
          slope: {
            name: "Slope",
            icon: (0, C.jsx)(oA.Slope, {}),
            downloadUrls: {
              website: "https://slope.finance/",
              chrome:
                "https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo",
              ios: "https://apps.apple.com/app/slope-wallet/id1574624530",
              android:
                "https://play.google.com/store/apps/details?id=com.wd.wallet",
            },
            getWalletConnectDeeplink: (n) =>
              oU()
                ? n
                : "https://slope.finance/app/wc?uri=".concat(
                    encodeURIComponent(n)
                  ),
          },
          "tokenPocket, pro.tokenpocket": {
            name: "TokenPocket",
            icon: (0, C.jsx)(oA.TokenPocket, {}),
            downloadUrls: {
              website: "https://www.tokenpocket.pro/en/download/app",
              chrome:
                "https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii",
              android:
                "https://play.google.com/store/apps/details?id=vip.mytokenpocket",
              ios: "https://apps.apple.com/us/app/tp-global-wallet/id6444625622",
            },
            getWalletConnectDeeplink: (n) =>
              "tpoutside://wc?uri=".concat(encodeURIComponent(n)),
          },
          "safePal, https://www.safepal.com/download": {
            name: "SafePal",
            icon: (0, C.jsx)(oA.SafePal, {}),
            iconShape: "circle",
            downloadUrls: {
              website: "https://www.safepal.com/download",
              chrome:
                "https://chrome.google.com/webstore/detail/lgmpcpglpngdoalbgeoldeajfclnhafa",
              edge: "https://microsoftedge.microsoft.com/addons/detail/apenkfbbpmhihehmihndmmcdanacolnh",
              firefox:
                "https://addons.mozilla.org/firefox/addon/safepal-extension-wallet",
              android:
                "https://play.google.com/store/apps/details?id=io.safepal.wallet",
              ios: "https://apps.apple.com/app/id1548297139",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "safepalwallet://wc?uri=".concat(encodeURIComponent(n))
                : "https://link.safepal.io/wc?uri=".concat(
                    encodeURIComponent(n)
                  ),
          },
          "coin98, coin98.com": {
            name: "Coin98",
            shortName: "Coin98",
            icon: (0, C.jsx)(oA.Coin98, {}),
            iconShape: "circle",
            downloadUrls: {
              website: "https://coin98.com/wallet",
              chrome:
                "https://chrome.google.com/webstore/detail/aeachknmefphepccionboohckonoeemg",
              android:
                "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
              ios: "https://apps.apple.com/app/id1561969966",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "coin98://wc?uri=".concat(encodeURIComponent(n))
                : "https://coin98.com/wc?uri=".concat(encodeURIComponent(n)),
          },
          "onekey, so.onekey.app.wallet": {
            name: "OneKey",
            icon: (0, C.jsx)(oA.Onekey, {}),
            iconShape: "squircle",
            downloadUrls: {
              website: "https://onekey.so/download/",
              chrome:
                "https://chrome.google.com/webstore/detail/jnmbobjmhlngoefaiojfljckilhhlhcj",
              android:
                "https://play.google.com/store/apps/details?id=so.onekey.app.wallet",
              ios: "https://apps.apple.com/app/id1609559473",
            },
            getWalletConnectDeeplink: (n) =>
              oU() || oS()
                ? "onekey-wallet://wc?uri=".concat(encodeURIComponent(n))
                : "https://app.onekey.so/wc/connect/wc?uri=".concat(
                    encodeURIComponent(n)
                  ),
          },
          "bybitWallet, com.bybit": {
            name: "Bybit Wallet",
            icon: (0, C.jsx)(oA.Bybit, {}),
            iconShape: "squircle",
            downloadUrls: {
              website: "https://www.bybit.com/en/download/",
              chrome:
                "https://chrome.google.com/webstore/detail/pdliaogehgdbhbnmkklieghmmjkpigpa",
              android:
                "https://play.google.com/store/apps/details?id=com.bybit.app",
              ios: "https://apps.apple.com/app/id1488296980",
            },
            getWalletConnectDeeplink: (n) =>
              "bybitapp://open/route?targetUrl=by://web3/walletconnect/wc?uri=".concat(
                encodeURIComponent(n)
              ),
          },
          "braveWallet, com.brave.wallet": {
            name: "Brave Wallet",
            shortName: "Brave",
            icon: (0, C.jsx)(oA.Brave, {}),
            iconShape: "squircle",
            downloadUrls: { website: "https://brave.com/download/" },
            getDAppBrowserDeeplink: (n) =>
              "brave://open-url?url=".concat(encodeURIComponent(n)),
          },
          "mantaWallet,manta.network": {
            name: "Manta Wallet",
            iconShape: "circle",
          },
          walletConnect: {
            name: "WalletConnect",
            icon: (0, C.jsx)(oA.WalletConnect, {}),
            iconShape: "square",
            getWalletConnectDeeplink: (n) => n,
          },
          injected: {
            name: "Browser Wallet",
            shortName: "Browser",
            icon: (0, C.jsx)(oA.Injected, {}),
          },
          passkeySmartWallet: {
            name: "Passkey Smart Wallet",
            shortName: "Passkey",
            iconShape: "circle",
            icon: (0, C.jsx)(iT, {}),
          },
        },
        oG = (n) =>
          [
            "coinbaseWallet",
            "coinbaseWalletSDK",
            "com.coinbase.wallet",
          ].includes(n),
        o$ = (n) => "walletConnect" === n,
        oJ = (n) => "passkeySmartWallet" === n;
      function oK() {
        let [n, e] = (0, s.useState)(oZ());
        return (
          (0, s.useEffect)(() => {
            let n = () => {
              e(oZ());
            };
            return (
              window.addEventListener("resize", n),
              () => window.removeEventListener("resize", n)
            );
          }, []),
          n
        );
      }
      function oX(n) {
        let e = oC("walletConnect"),
          { connectAsync: t } = ou(),
          { updateLastConnectorId: i } = oc(),
          [o, r] = (0, s.useState)(),
          [l, a] = (0, s.useState)(),
          c = (0, s.useCallback)((n) => {
            let { type: e, data: t } = n;
            "display_uri" === e && r(t);
          }, []),
          d = (0, s.useCallback)(
            async (e) => {
              a(void 0);
              try {
                await t({ connector: e }), n && i(n);
              } catch (n) {
                a(n);
              }
            },
            [t, n, i]
          ),
          u = (0, s.useCallback)(() => {
            e && (d(e), e.emitter.on("message", c));
          }, [e, d, c]);
        return { available: !!e, uri: o, error: l, requestUri: u };
      }
      var oq = (0, x.I4)(M.P.div)(nz()),
        o1 = (0, x.i7)(nE(), 2, 2, 2),
        o0 = (0, x.i7)(nO()),
        o2 = (0, x.I4)(M.P.div)(
          nZ(),
          (n) => n.$circle && (0, x.AH)(nS()),
          (n) => n.$shake && (0, x.AH)(nU(), o1, o0)
        ),
        o4 = (0, x.I4)(M.P.button)(nF()),
        o3 = (0, x.I4)(M.P.div)(nP()),
        o5 = (0, x.I4)(M.P.div)(nQ()),
        o6 = {
          CONNECTED: "connected",
          CONNECTING: "connecting",
          FAILED: "failed",
          REJECTED: "rejected",
          NOTCONNECTED: "notconnected",
          UNAVAILABLE: "unavailable",
        },
        o9 = {
          initial: { opacity: 0, scale: 0.95 },
          animate: {
            opacity: 1,
            scale: 1,
            transition: { ease: [0.16, 1, 0.3, 1], duration: 0.25 },
          },
        },
        o7 = () =>
          (0, C.jsx)(M.P.svg, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            children: (0, C.jsx)("path", {
              d: "M5.20833 10.4167C4.0625 10.4167 3.125 11.3542 3.125 12.5C3.125 13.6459 4.0625 14.5834 5.20833 14.5834C6.35417 14.5834 7.29167 13.6459 7.29167 12.5C7.29167 11.3542 6.35417 10.4167 5.20833 10.4167ZM19.7917 10.4167C18.6458 10.4167 17.7083 11.3542 17.7083 12.5C17.7083 13.6459 18.6458 14.5834 19.7917 14.5834C20.9375 14.5834 21.875 13.6459 21.875 12.5C21.875 11.3542 20.9375 10.4167 19.7917 10.4167ZM12.5 10.4167C11.3542 10.4167 10.4167 11.3542 10.4167 12.5C10.4167 13.6459 11.3542 14.5834 12.5 14.5834C13.6458 14.5834 14.5833 13.6459 14.5833 12.5C14.5833 11.3542 13.6458 10.4167 12.5 10.4167Z",
              fill: "var(--pcm-body-action-color)",
            }),
          }),
        o8 = () => {
          let { navigate: n } = oh(),
            e = oK(),
            t = oC("walletConnect");
          return (i, o) => {
            i.isInstalled
              ? n("connecting", {
                  wallet: i,
                  passkeyParams: null == o ? void 0 : o.passkeyParams,
                  authParams: null == o ? void 0 : o.authParams,
                })
              : "walletConnect" === i.connector.id
              ? e
                ? n("connecting", { wallet: i })
                : n("walletconnect", { wallet: i })
              : "evm" === i.connector.chainType &&
                i.getWalletConnectDeeplink &&
                t
              ? e
                ? n("connecting", { wallet: i })
                : n("walletconnect", { wallet: i })
              : i.getDAppBrowserDeeplink && e
              ? oV(i.getDAppBrowserDeeplink(window.location.href))
              : !e && (oH(i) || "braveWallet" === i.id)
              ? n("download-app", { wallet: i })
              : n("connecting", { wallet: i });
          };
        },
        rn = () =>
          oM()
            .map((n) => {
              var e, t, i;
              let o = n.id.replace("solana_", ""),
                r = Object.keys(oR).find(
                  (n) =>
                    -1 !==
                    n
                      .split(",")
                      .map((n) => n.trim())
                      .indexOf(o)
                ),
                l = {
                  id: n.id,
                  name:
                    null !==
                      (i = null !== (t = n.name) && void 0 !== t ? t : n.id) &&
                    void 0 !== i
                      ? i
                      : n.type,
                  icon: (0, C.jsx)("img", {
                    src: n.icon,
                    alt: n.name,
                    width: "100%",
                    height: "100%",
                  }),
                  connector: n,
                  iconShape: "squircle",
                  isInstalled:
                    null === (e = n.isInstalled) || void 0 === e
                      ? void 0
                      : e.call(n),
                  getConnector: () => n,
                };
              if (r) {
                let n = oR[r];
                return { ...l, ...n, groupId: r };
              }
              return n.icon || (l.icon = (0, C.jsx)(ob, {})), l;
            })
            .filter(
              (n, e, t) =>
                t.findIndex(
                  (e) =>
                    e.id === n.id &&
                    e.connector.chainType === n.connector.chainType
                ) === e
            )
            .filter((n, e, t) => {
              if ("solana" === n.connector.chainType) return !0;
              let i = n.groupId;
              if (i && i.includes(",")) {
                if (n.connector.id.includes(".")) return !0;
                let e = i
                  .split(",")
                  .map((n) => n.trim())
                  .filter((n) => n.includes("."));
                return !t.find((n) => e.includes(n.connector.id));
              }
              return !0;
            })
            .sort((n, e) =>
              n.isInstalled && !e.isInstalled
                ? -1
                : !n.isInstalled && e.isInstalled
                ? 1
                : 0
            )
            .sort((n, e) =>
              "walletConnect" === n.id ? 1 : "walletConnect" === e.id ? -1 : 0
            ),
        re = (n) => rn().find((e) => e.id === n) || null,
        rt = [
          "facebook",
          "google",
          "apple",
          "twitter",
          "discord",
          "github",
          "twitch",
          "microsoft",
          "linkedin",
        ],
        ri = (n) => rt.includes(n),
        ro = (0, x.I4)(M.P.div)(nV()),
        rr = (0, x.I4)(M.P.div)(nH()),
        rl = (0, x.I4)(M.P.div)(
          nY(),
          (n) =>
            n.$customLable
              ? "var(--pcm-wallet-lable-background)"
              : "var(--pcm-body-background-secondary)",
          (n) =>
            n.$customLable
              ? "var(--pcm-wallet-lable-color)"
              : "var(--pcm-body-color-secondary)",
          (n) =>
            n.$customLable
              ? "var(--pcm-wallet-lable-color)"
              : "var(--pcm-accent-color)"
        ),
        ra = (0, x.I4)(M.P.div)(n_()),
        rs = (0, x.I4)(M.P.div)(nW(), rl, ra, rl, ra),
        rc = (0, x.i7)(nB()),
        rd = (0, x.I4)(M.P.div)(
          nR(),
          (n) => (n.$felxRow ? "row" : "column"),
          (n) => (n.$felxRow ? "0px" : "12px")
        ),
        ru = (0, x.I4)(M.P.div)(
          n1(),
          rc,
          (n) => (n.$isDisabled ? (0, x.AH)(nG()) : (0, x.AH)(n$())),
          (n) =>
            n.$felxRow ? (0, x.AH)(nJ()) : (0, x.AH)(nK(), ra, rl, ra, rl, ra),
          (n) => (n.$felxRow ? (0, x.AH)(nX()) : (0, x.AH)(nq())),
          (n) => (n.$felxRow ? "none" : "block")
        ),
        rp = (0, x.I4)(M.P.div)(n0(), rc),
        rg = (n) => {
          let { expandList: e } = n,
            { config: t } = sa(),
            { navigate: i } = oh(),
            o = it(),
            { appearance: r } = sd(),
            l = re((0, g.GV)(t.chains[0]) ? "particleEVM" : "particleSolana"),
            a = oj("particleAuth"),
            c = oj("evmWallet"),
            { lastConnectorId: d } = oc(),
            u = o8(),
            p = (0, s.useMemo)(
              () =>
                "particleSolana" !== d && "particleEVM" !== d
                  ? d
                  : a.auth.getLatestAuthType(),
              [d, a.auth]
            ),
            M = (0, s.useMemo)(() => {
              if (!a) return [];
              let n =
                null == c
                  ? void 0
                  : c.connectors.some((n) => "passkeySmartWallet" === n.id);
              return t.plugins.some((n) => "aa" === n.id) &&
                n &&
                "as-social" === r.collapsePasskeyButton
                ? a.supportAuthTypes.concat("passkeySmartWallet")
                : a.supportAuthTypes;
            }, [a, c, r.collapsePasskeyButton, t.plugins]),
            h = (0, s.useMemo)(
              () => M.filter((n) => ri(n) || "passkeySmartWallet" === n),
              [M]
            ),
            x = (0, s.useMemo)(() => {
              let n = t.getWalletConnector("evmWallet"),
                i = t.getWalletConnector("solanaWallet");
              return (
                e || (!M.includes("email") && !M.includes("phone") && !n && !i)
              );
            }, [e, M, t]),
            j = (0, s.useMemo)(
              () => (x ? h : h.length > 5 ? h.slice(0, 4) : h),
              [x, h]
            ),
            f = (n) => {
              if (l && ri(n)) {
                let e = n.charAt(0).toUpperCase() + n.slice(1),
                  t = sp[n];
                u(
                  {
                    ...l,
                    name: e,
                    shortName: e,
                    iconShape:
                      "microsoft" === n || "twitch" === n
                        ? "squircle"
                        : "circle",
                    icon: (0, C.jsx)(t, {}),
                  },
                  { authParams: { socialType: n, prompt: "select_account" } }
                );
              } else "passkeySmartWallet" === n && i("login-passkey");
            },
            y = (0, s.useMemo)(() => !x && h.length > 3, [x, h]);
          return (0, C.jsx)(rd, {
            $felxRow: y,
            children: j.map((n, e) => {
              let t = sp[n];
              return (0, C.jsxs)(
                s.Fragment,
                {
                  children: [
                    (0, C.jsxs)(ru, {
                      $felxRow: y,
                      onClick: () => f(n),
                      children: [
                        (0, C.jsx)(t, {}),
                        (0, C.jsx)("span", {
                          children: "passkeySmartWallet" === n ? "Passkey" : n,
                        }),
                        !y &&
                          (0, C.jsxs)(C.Fragment, {
                            children: [
                              p === n &&
                                (0, C.jsx)(rl, { children: o.lastUsed }),
                              (0, C.jsx)(ra, { children: (0, C.jsx)(ia, {}) }),
                            ],
                          }),
                      ],
                    }),
                    !x &&
                      3 == e &&
                      h.length > 5 &&
                      (0, C.jsx)(rp, {
                        onClick: () => i("connectors", { type: "social" }),
                        children: (0, C.jsx)(o7, {}),
                      }),
                  ],
                },
                n
              );
            }),
          });
        },
        rM = x.I4.button(
          n5(),
          (n) => {
            let { $color: e } = n;
            return "primary" === e
              ? (0, x.AH)(n2())
              : "secondary" === e
              ? (0, x.AH)(n4())
              : void 0;
          },
          (n) => {
            let { $disabled: e, $loading: t } = n;
            return (e || t) && (0, x.AH)(n3());
          }
        );
      x.I4.div(n6());
      var rC = (0, x.I4)(M.P.div)(n7(), (n) => n.$rounded && (0, x.AH)(n9())),
        rh = (n) => {
          let {
            children: e,
            style: t,
            loading: i = !1,
            disabled: o = !1,
            color: r = "primary",
            roundedIcon: l,
            onClick: a,
            icon: s,
            ...c
          } = n;
          return (0, C.jsxs)(rM, {
            style: t,
            onClick: (n) => {
              o || i || !a || a(n);
            },
            $loading: !!i,
            $disabled: o,
            $color: r,
            ...c,
            children: [
              i &&
                (0, C.jsx)(ip, {
                  style: { width: "20px", marginRight: "6px" },
                }),
              (0, C.jsxs)(i7, {
                gap: 6,
                children: [
                  s && (0, C.jsx)(rC, { $rounded: l, children: s }),
                  e,
                ],
              }),
            ],
          });
        },
        rx = (n) => {
          let { expandList: e } = n,
            { navigate: t } = oh(),
            i = rn(),
            o = it(),
            { lastConnectorId: r } = oc(),
            l = o8(),
            { appearance: a } = sd(),
            c = (0, s.useMemo)(() => {
              let n = i.filter(
                  (n) =>
                    "particleAuth" !== n.connector.type &&
                    "passkeySmartWallet" !== n.connector.id
                ),
                e = [];
              for (let t of n) {
                let n = t.groupId || t.connector.id,
                  i = e.find((e) => e.key === n);
                i
                  ? i.props.push(t)
                  : e.push({ key: n, props: [t], rankingWeight: 0 });
              }
              let t = (null == a ? void 0 : a.recommendedWallets) || [];
              return (
                e.forEach((n) => {
                  let e = n.key.split(",").map((n) => n.trim());
                  n.props.length > 1 && (n.lable = o.multichain),
                    n.props.some((n) => n.isInstalled) &&
                      ((n.lable = o.installed), (n.rankingWeight = 100));
                  let i = t.find((n) => e.includes(n.walletId));
                  if (i) {
                    if ("none" !== i.label) {
                      var l, a;
                      (null === (l = i.label) || void 0 === l
                        ? void 0
                        : l.toLowerCase()) === "recommended"
                        ? (n.lable = o.recommended)
                        : (null === (a = i.label) || void 0 === a
                            ? void 0
                            : a.toLowerCase()) === "popular"
                        ? (n.lable = o.popular)
                        : (n.lable = i.label || o.recommended),
                        (n.customLable = !0);
                    } else n.customLable = void 0;
                    let e = t.indexOf(i);
                    n.rankingWeight = 200 + (99 - e);
                  }
                  r &&
                    e.includes(r) &&
                    ((n.lable = o.lastUsed),
                    (n.rankingWeight = 500),
                    (n.customLable = void 0));
                }),
                e.sort((n, e) =>
                  n.rankingWeight > e.rankingWeight
                    ? -1
                    : n.rankingWeight < e.rankingWeight
                    ? 1
                    : 0
                ),
                e
              );
            }, [o, i, null == a ? void 0 : a.recommendedWallets, r]),
            d = (0, s.useMemo)(
              () =>
                e
                  ? c
                  : (null == a ? void 0 : a.collapseWalletList)
                  ? []
                  : c.length > 3
                  ? c.slice(0, 3)
                  : c,
              [c, e, null == a ? void 0 : a.collapseWalletList]
            ),
            u = (0, s.useMemo)(
              () =>
                !e &&
                ((null == a ? void 0 : a.collapseWalletList) || c.length > 3),
              [e, null == a ? void 0 : a.collapseWalletList, c]
            ),
            p = (n) => {
              n.props.length > 1
                ? t("select-chain", { walletData: n })
                : l(n.props[0]);
            };
          return (0, C.jsxs)(ro, {
            children: [
              d.map((n) =>
                (0, C.jsxs)(
                  rs,
                  {
                    onClick: () => p(n),
                    children: [
                      (0, C.jsx)(rr, { children: n.props[0].icon }),
                      n.props[0].name,
                      n.lable &&
                        (0, C.jsx)(rl, {
                          $customLable: n.customLable,
                          children: n.lable,
                        }),
                      (0, C.jsx)(ra, { children: (0, C.jsx)(ia, {}) }),
                    ],
                  },
                  n.key
                )
              ),
              u &&
                (0, C.jsx)(rh, {
                  onClick: () => {
                    t("connectors");
                  },
                  color: "secondary",
                  children: (null == a ? void 0 : a.collapseWalletList)
                    ? o.continueWithWallet
                    : o.viewAllWallets,
                }),
            ],
          });
        },
        rj = () =>
          (0, C.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, C.jsxs)("g", {
                clipPath: "url(#clip0_250_292)",
                children: [
                  (0, C.jsx)("mask", {
                    id: "mask0_250_292",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "30",
                    height: "30",
                    children: (0, C.jsx)("rect", {
                      width: "30",
                      height: "30",
                      fill: "white",
                    }),
                  }),
                  (0, C.jsx)("g", {
                    mask: "url(#mask0_250_292)",
                    children: (0, C.jsx)("circle", {
                      opacity: "0.15",
                      cx: "15",
                      cy: "15",
                      r: "15",
                      fill: "#8B8E9F",
                    }),
                  }),
                  (0, C.jsxs)("g", {
                    clipPath: "url(#clip1_250_292)",
                    children: [
                      (0, C.jsx)("rect", {
                        x: "9.92371",
                        y: "11.415",
                        width: "1.36759",
                        height: "12.9921",
                        rx: "0.683795",
                        transform: "rotate(-45 9.92371 11.415)",
                        fill: "black",
                      }),
                      (0, C.jsx)("rect", {
                        x: "19.1113",
                        y: "10.4482",
                        width: "1.36759",
                        height: "12.9921",
                        rx: "0.683795",
                        transform: "rotate(45 19.1113 10.4482)",
                        fill: "black",
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)("defs", {
                children: [
                  (0, C.jsx)("clipPath", {
                    id: "clip0_250_292",
                    children: (0, C.jsx)("rect", {
                      width: "30",
                      height: "30",
                      fill: "white",
                    }),
                  }),
                  (0, C.jsx)("clipPath", {
                    id: "clip1_250_292",
                    children: (0, C.jsx)("rect", {
                      width: "12.9921",
                      height: "12.9921",
                      fill: "white",
                      transform: "translate(5.81445 15.5249) rotate(-45)",
                    }),
                  }),
                ],
              }),
            ],
          }),
        rf = {
          brave: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M21.3417 5.7573L21.8942 4.37574C21.8942 4.37574 21.191 3.6082 20.3372 2.73832C19.4834 1.86844 17.6754 2.38014 17.6754 2.38014L15.6162 0H12H8.38389L6.3247 2.38014C6.3247 2.38014 4.51663 1.86844 3.66282 2.73832C2.80901 3.6082 2.10587 4.37574 2.10587 4.37574L2.65834 5.7573L1.9552 7.80407C1.9552 7.80407 4.02318 15.7842 4.26551 16.7587C4.74264 18.6775 5.0691 19.4195 6.42515 20.3917C7.7812 21.3639 10.2422 23.0525 10.644 23.3083C11.0458 23.5642 11.548 24 12 24C12.452 24 12.9543 23.5642 13.3561 23.3083C13.7579 23.0525 16.2189 21.3639 17.5749 20.3917C18.931 19.4195 19.2574 18.6775 19.7345 16.7587C19.9768 15.7842 22.0449 7.80407 22.0449 7.80407L21.3417 5.7573Z",
                  fill: "url(#paint0_linear_254_541)",
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 14.9357C12.1377 14.9357 13.0197 15.253 13.7275 15.6261C14.4353 15.9993 14.9482 16.2631 15.1122 16.3677C15.2761 16.4723 15.1761 16.6694 15.0268 16.777C14.8775 16.8845 12.8705 18.4679 12.6757 18.6429C12.4809 18.818 12.1946 19.107 12 19.107C11.8054 19.107 11.5191 18.818 11.3244 18.6429C11.1295 18.4679 9.12258 16.8845 8.97321 16.777C8.82385 16.6694 8.7239 16.4723 8.88783 16.3677C9.05181 16.2631 9.56475 15.9993 10.2726 15.6261C10.9803 15.253 11.8624 14.9357 12 14.9357ZM12.0108 3.6582C12.0784 3.66011 12.4592 3.67897 13.0045 3.86415C13.6072 4.06883 14.2601 4.32467 14.5615 4.32467C14.8628 4.32467 17.0978 3.88973 17.0978 3.88973C17.0978 3.88973 19.7464 7.15177 19.7464 7.84895C19.7464 8.54613 19.4132 8.73014 19.0782 9.09257C18.7432 9.455 17.2801 11.0379 17.0923 11.2411C16.9044 11.4444 16.5132 11.7526 16.7433 12.3073C16.9734 12.8621 17.3128 13.5679 16.9354 14.2839C16.5579 14.9998 15.9112 15.4777 15.4969 15.3987C15.0825 15.3197 14.1094 14.8016 13.7516 14.5649C13.3938 14.3283 12.2596 13.3753 12.2596 13.0106C12.2596 12.6461 13.432 11.9914 13.6485 11.8427C13.8652 11.694 14.8531 11.1183 14.8734 10.8923C14.8935 10.6663 14.8859 10.6 14.5943 10.0417C14.3028 9.48325 13.7777 8.73812 13.8651 8.24234C13.9525 7.74661 14.7993 7.48882 15.4036 7.25631C16.0078 7.02385 17.1712 6.58477 17.3165 6.51651C17.4619 6.44819 17.4243 6.38316 16.984 6.34064C16.5438 6.29812 15.2944 6.12915 14.7312 6.28911C14.1679 6.44906 13.2056 6.69243 13.1277 6.82147C13.0497 6.95052 12.981 6.95487 13.061 7.40004C13.141 7.84522 13.5532 9.98133 13.5931 10.3607C13.6332 10.7402 13.7114 10.991 13.3099 11.0845C12.9083 11.1781 12.2323 11.3405 12 11.3405C11.7677 11.3405 11.0917 11.1781 10.6902 11.0845C10.2886 10.991 10.3668 10.7402 10.4069 10.3607C10.4469 9.98133 10.859 7.84522 10.939 7.40004C11.0191 6.95487 10.9503 6.95052 10.8724 6.82147C10.7945 6.69243 9.83211 6.44906 9.26884 6.28911C8.70558 6.12915 7.45625 6.29812 7.01599 6.34064C6.57572 6.38316 6.53816 6.44819 6.68351 6.51651C6.82885 6.58477 7.9923 7.02385 8.59649 7.25631C9.20074 7.48882 10.0476 7.74661 10.135 8.24234C10.2223 8.73812 9.69725 9.48325 9.40575 10.0417C9.1142 10.6 9.10647 10.6663 9.12671 10.8923C9.1469 11.1183 10.1349 11.694 10.3515 11.8427C10.5681 11.9914 11.7404 12.6461 11.7404 13.0106C11.7404 13.3753 10.6063 14.3283 10.2485 14.5649C9.89062 14.8016 8.91752 15.3197 8.50318 15.3987C8.08883 15.4777 7.44219 14.9998 7.06471 14.2839C6.68727 13.5679 7.02669 12.8621 7.25671 12.3073C7.48679 11.7526 7.09569 11.4444 6.90776 11.2411C6.71992 11.0379 5.25679 9.455 4.92179 9.09257C4.5868 8.73014 4.25366 8.54613 4.25366 7.84895C4.25366 7.15177 6.90228 3.88973 6.90228 3.88973C6.90228 3.88973 9.13726 4.32467 9.4386 4.32467C9.73994 4.32467 10.3929 4.06883 10.9955 3.86415C11.5408 3.67897 11.9217 3.66011 11.9893 3.6582H12.0108Z",
                  fill: "white",
                }),
                (0, C.jsx)("mask", {
                  id: "mask0_254_541",
                  maskUnits: "userSpaceOnUse",
                  x: "3",
                  y: "0",
                  width: "18",
                  height: "5",
                  children: (0, C.jsx)("path", {
                    d: "M17.6754 2.38014L15.6162 0H12H8.38391L6.32472 2.38014C6.32472 2.38014 4.51665 1.86844 3.66284 2.73832C3.66284 2.73832 6.0736 2.5166 6.9023 3.88963C6.9023 3.88963 9.13727 4.32457 9.43862 4.32457C9.73996 4.32457 10.3929 4.06872 10.9956 3.86404C11.5983 3.65937 12 3.65788 12 3.65788C12 3.65788 12.4018 3.65937 13.0045 3.86404C13.6072 4.06872 14.2601 4.32457 14.5615 4.32457C14.8628 4.32457 17.0978 3.88963 17.0978 3.88963C17.9265 2.5166 20.3373 2.73832 20.3373 2.73832C19.4834 1.86844 17.6754 2.38014 17.6754 2.38014Z",
                    fill: "white",
                  }),
                }),
                (0, C.jsx)("g", {
                  mask: "url(#mask0_254_541)",
                  children: (0, C.jsx)("path", {
                    d: "M17.6754 2.38014L15.6162 0H12H8.38391L6.32472 2.38014C6.32472 2.38014 4.51665 1.86844 3.66284 2.73832C3.66284 2.73832 6.0736 2.5166 6.9023 3.88963C6.9023 3.88963 9.13727 4.32457 9.43862 4.32457C9.73996 4.32457 10.3929 4.06872 10.9956 3.86404C11.5983 3.65937 12 3.65788 12 3.65788C12 3.65788 12.4018 3.65937 13.0045 3.86404C13.6072 4.06872 14.2601 4.32457 14.5615 4.32457C14.8628 4.32457 17.0978 3.88963 17.0978 3.88963C17.9265 2.5166 20.3373 2.73832 20.3373 2.73832C19.4834 1.86844 17.6754 2.38014 17.6754 2.38014Z",
                    fill: "url(#paint1_linear_254_541)",
                  }),
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("linearGradient", {
                      id: "paint0_linear_254_541",
                      x1: "1.9552",
                      y1: "12.1693",
                      x2: "22.0449",
                      y2: "12.1693",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#FF5500" }),
                        (0, C.jsx)("stop", {
                          offset: "0.409877",
                          stopColor: "#FF5500",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.581981",
                          stopColor: "#FF2000",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#FF2000",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint1_linear_254_541",
                      x1: "4.02108",
                      y1: "2.19279",
                      x2: "20.3373",
                      y2: "2.19279",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#FF452A" }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#FF2000",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          chrome: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M11.9688 0.00214432C11.9688 0.00214432 19.0439 -0.315123 22.7937 6.76868H11.3671C11.3671 6.76868 9.2091 6.69796 7.36952 9.30633C6.83899 10.399 6.2731 11.5268 6.90975 13.7467C5.99004 12.1964 2.02783 5.32383 2.02783 5.32383C2.02783 5.32383 4.82286 0.283971 11.9688 0.00214432Z",
                  fill: "#C6352E",
                }),
                (0, C.jsx)("path", {
                  d: "M22.4254 17.9878C22.4254 17.9878 19.1627 24.2499 11.1298 23.9421C12.1207 22.2333 16.8444 14.0844 16.8444 14.0844C16.8444 14.0844 17.9848 12.2581 16.6382 9.36675C15.9536 8.3625 15.2565 7.31019 13.0081 6.74912C14.8164 6.73123 22.771 6.75027 22.771 6.75027C22.771 6.75027 25.754 11.6819 22.4254 17.9878Z",
                  fill: "#F4D911",
                }),
                (0, C.jsx)("path", {
                  d: "M1.56249 18.0352C1.56249 18.0352 -2.24961 12.0884 2.03498 5.31226C3.02506 7.02176 7.74618 15.1721 7.74618 15.1721C7.74618 15.1721 8.76325 17.0691 11.9502 17.3532C13.1651 17.2649 14.4287 17.1896 16.0407 15.5305C15.1519 17.0992 11.1575 23.953 11.1575 23.953C11.1575 23.953 5.37921 24.0603 1.56249 18.0352Z",
                  fill: "#81B354",
                }),
                (0, C.jsx)("path", {
                  d: "M11.1298 23.9999L12.7371 17.318C12.7371 17.318 14.5043 17.1807 15.9851 15.5615C15.0659 17.1726 11.1298 23.9999 11.1298 23.9999Z",
                  fill: "#7BAA50",
                }),
                (0, C.jsx)("path", {
                  d: "M6.58582 12.0749C6.58582 9.12933 8.98242 6.74146 11.9393 6.74146C14.896 6.74146 17.2928 9.12928 17.2928 12.0749C17.2928 15.0206 14.8961 17.4085 11.9393 17.4085C8.98242 17.4085 6.58582 15.0206 6.58582 12.0749Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M7.48169 12.0749C7.48169 9.62243 9.47728 7.63428 11.9392 7.63428C14.4007 7.63428 16.3965 9.62243 16.3965 12.0749C16.3965 14.5274 14.4007 16.5157 11.9392 16.5157C9.47728 16.5157 7.48169 14.5273 7.48169 12.0749Z",
                  fill: "url(#paint0_linear_250_519)",
                }),
                (0, C.jsx)("path", {
                  d: "M22.7711 6.75027L16.1527 8.68345C16.1527 8.68345 15.1547 7.22433 13.0081 6.74912C14.8681 6.74281 22.7711 6.75027 22.7711 6.75027Z",
                  fill: "#E7CE12",
                }),
                (0, C.jsx)("path", {
                  d: "M6.78096 13.507C5.85084 11.9023 2.02795 5.32373 2.02795 5.32373L6.93069 10.1554C6.93069 10.1554 6.42686 11.1879 6.6179 12.6626L6.78096 13.507Z",
                  fill: "#BC332C",
                }),
                (0, C.jsx)("defs", {
                  children: (0, C.jsxs)("linearGradient", {
                    id: "paint0_linear_250_519",
                    x1: "11.9391",
                    y1: "7.69709",
                    x2: "11.9391",
                    y2: "16.25",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, C.jsx)("stop", { stopColor: "#A2C0E6" }),
                      (0, C.jsx)("stop", { offset: "1", stopColor: "#406CB1" }),
                    ],
                  }),
                }),
              ],
            }),
          edge: () => {
            let { background: n } = su();
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M22.1078 18.5214C19.3512 22.7809 14.8855 23.9426 13.1213 23.8319C2.5912 23.3341 4.19002 9.33864 10.5301 9.39396C6.00936 12.2705 12.1841 21.7852 21.2808 18.0789C22.218 17.415 22.3834 18.2448 22.1078 18.5214Z",
                  fill: "url(#paint0_radial_254_542)",
                }),
                (0, C.jsx)("path", {
                  d: "M15.0509 11.9384C16.0433 7.40236 13.3418 4.47051 7.93895 4.47051C2.53605 4.47051 0 9.55975 0 12.1597C0 19.0191 6.89145 26.1551 15.8228 23.3892C8.43513 25.5466 4.0246 16.9723 7.77355 11.7725C10.3096 8.12149 14.5547 8.01085 15.0509 11.9384ZM20.5641 3.30884H20.6192H20.5641Z",
                  fill: "url(#paint1_radial_254_542)",
                }),
                (0, C.jsx)("path", {
                  d: "M0.0551758 11.8279C0.716755 -2.99729 21.0052 -3.82706 23.9271 9.00668C24.699 14.9257 19.1858 17.249 14.7753 15.3682C12.4598 13.93 16.2087 14.2619 14.6099 9.89177C11.9636 3.69617 0.771886 4.19403 0.0551758 11.8279Z",
                  fill: "url(#paint2_linear_254_542)",
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("radialGradient", {
                      id: "paint0_radial_254_542",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(15.5346 16.6164) scale(8.36722 7.22259)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.8",
                          stopColor: "#114488",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#113377",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint1_radial_254_542",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(10.3096 15.7235) scale(10.3096 10.3455)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.8",
                          stopColor: "#3388CC",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#226699",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint2_linear_254_542",
                      x1: "0.0551759",
                      y1: "8.00314",
                      x2: "19.2482",
                      y2: "22.3592",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.1",
                          stopColor: "#55AADD",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.6",
                          stopColor: "#55CC88",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.8",
                          stopColor: "#77DD55",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          firefox: () => {
            let { background: n } = su();
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M22.771 8.05713C22.2613 6.83832 21.2417 5.52645 20.438 5.11517C21.0103 6.22305 21.4078 7.41292 21.6165 8.64252V8.66353C20.3061 5.38235 18.0781 4.06147 16.2579 1.17955C16.1619 1.03546 16.072 0.888361 15.982 0.735259C15.931 0.645199 15.892 0.567147 15.853 0.495099C15.7772 0.348322 15.7189 0.193163 15.6791 0.0327917C15.6793 0.0257687 15.6769 0.0189183 15.6726 0.0134331C15.6682 0.00794791 15.662 0.00417522 15.6551 0.00277175C15.6455 -0.000923918 15.6348 -0.000923918 15.6251 0.00277175V0.00877574C15.6251 0.0147797 15.6161 0.00877574 15.6161 0.00877574V0.00277175C12.7014 1.71391 11.7089 4.88402 11.6189 6.46607C10.4524 6.54707 9.33742 6.97809 8.41928 7.70289C8.32352 7.62148 8.22341 7.54531 8.11941 7.47474C7.85404 6.54402 7.84368 5.55896 8.08943 4.62284C7.01589 5.14322 6.06212 5.88131 5.28865 6.79029C4.82385 6.2079 4.85683 4.28062 4.88382 3.87835C4.74703 3.93239 4.61635 4.00082 4.49399 4.08248C4.08608 4.37332 3.70475 4.69982 3.35449 5.05813C2.95893 5.46256 2.59783 5.89937 2.27496 6.364C1.52784 7.42419 0.997872 8.62202 0.715636 9.88834L0.694645 9.9694C0.673654 10.0685 0.592689 10.5818 0.580694 10.6899V10.7199C0.479913 11.249 0.417775 11.7848 0.394775 12.323L0.394775 12.383C0.399466 15.2947 1.49441 18.0987 3.46344 20.2417C5.43247 22.3846 8.13248 23.7106 11.0304 23.9579C13.9284 24.2052 16.8136 23.3559 19.1166 21.5776C21.4195 19.7992 22.9728 17.2212 23.4697 14.3523C23.4907 14.2022 23.5057 14.0521 23.5237 13.902C23.7644 11.9216 23.5067 9.9124 22.774 8.05713H22.771ZM9.37587 17.1622C9.42984 17.1922 9.48082 17.2222 9.5348 17.2432L9.54379 17.2492C9.48982 17.2212 9.43484 17.1912 9.37886 17.1592L9.37587 17.1622ZM21.6195 8.66053V8.65152V8.66353V8.66053Z",
                  fill: "url(#paint0_linear_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M22.771 8.05719C22.2613 6.83838 21.2417 5.52651 20.438 5.11523C21.0103 6.22312 21.4078 7.41298 21.6165 8.64258V8.6666C22.5131 11.2328 22.3841 14.0466 21.2567 16.5198C19.9253 19.3807 16.6987 22.3137 11.6519 22.1696C6.20025 22.0195 1.39634 17.9668 0.496731 12.6593C0.334801 11.8187 0.496731 11.3984 0.580694 10.717C0.469069 11.2444 0.406826 11.781 0.394775 12.32L0.394775 12.3801C0.399466 15.2917 1.49441 18.0958 3.46344 20.2387C5.43247 22.3816 8.13248 23.7077 11.0304 23.955C13.9284 24.2023 16.8136 23.353 19.1166 21.5746C21.4195 19.7963 22.9728 17.2182 23.4697 14.3494C23.4907 14.1993 23.5057 14.0492 23.5237 13.8991C23.7644 11.9187 23.5067 9.90946 22.774 8.05419L22.771 8.05719Z",
                  fill: "url(#paint1_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M22.771 8.05719C22.2613 6.83838 21.2417 5.52651 20.438 5.11523C21.0103 6.22312 21.4078 7.41298 21.6165 8.64258V8.6666C22.5131 11.2328 22.3841 14.0466 21.2567 16.5198C19.9253 19.3807 16.6987 22.3137 11.6519 22.1696C6.20025 22.0195 1.39634 17.9668 0.496731 12.6593C0.334801 11.8187 0.496731 11.3984 0.580694 10.717C0.469069 11.2444 0.406826 11.781 0.394775 12.32L0.394775 12.3801C0.399466 15.2917 1.49441 18.0958 3.46344 20.2387C5.43247 22.3816 8.13248 23.7077 11.0304 23.955C13.9284 24.2023 16.8136 23.353 19.1166 21.5746C21.4195 19.7963 22.9728 17.2182 23.4697 14.3494C23.4907 14.1993 23.5057 14.0492 23.5237 13.8991C23.7644 11.9187 23.5067 9.90946 22.774 8.05419L22.771 8.05719Z",
                  fill: "url(#paint2_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M17.1216 9.42295C17.1515 9.44096 17.1695 9.45897 17.1935 9.47698C16.9017 8.95822 16.5383 8.48323 16.114 8.06605C12.5036 4.45164 15.1694 0.224833 15.6192 0.0116915V0.00268555C12.7045 1.71382 11.7119 4.88393 11.6219 6.46598C11.7569 6.45698 11.8918 6.44797 12.0298 6.44797C13.065 6.44946 14.0813 6.72521 14.9756 7.24719C15.8699 7.76918 16.6103 8.51881 17.1216 9.41995V9.42295Z",
                  fill: "url(#paint3_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M12.0386 10.1495C12.0177 10.4347 10.9981 11.4343 10.6383 11.4343C7.33369 11.4343 6.79993 13.4337 6.79993 13.4337C6.94386 15.1208 8.11935 16.5077 9.53474 17.2462L9.73265 17.3363C9.8466 17.3863 9.96055 17.4333 10.0745 17.4774C10.5608 17.6504 11.0702 17.7496 11.5858 17.7716C17.3793 18.0417 18.5008 10.8369 14.3207 8.74455C15.3067 8.61744 16.3048 8.86135 17.1214 9.42901C16.6102 8.52787 15.8698 7.77824 14.9755 7.25625C14.0812 6.73427 13.0649 6.45852 12.0297 6.45703C11.8917 6.45703 11.7598 6.46304 11.6218 6.47204C10.4554 6.55305 9.34036 6.98406 8.42222 7.70886C8.60214 7.85896 8.80006 8.0571 9.22287 8.47437C10.0115 9.25489 12.0326 10.0564 12.0416 10.1555L12.0386 10.1495Z",
                  fill: "url(#paint4_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M12.0386 10.1495C12.0177 10.4347 10.9981 11.4343 10.6383 11.4343C7.33369 11.4343 6.79993 13.4337 6.79993 13.4337C6.94386 15.1208 8.11935 16.5077 9.53474 17.2462L9.73265 17.3363C9.8466 17.3863 9.96055 17.4333 10.0745 17.4774C10.5608 17.6504 11.0702 17.7496 11.5858 17.7716C17.3793 18.0417 18.5008 10.8369 14.3207 8.74455C15.3067 8.61744 16.3048 8.86135 17.1214 9.42901C16.6102 8.52787 15.8698 7.77824 14.9755 7.25625C14.0812 6.73427 13.0649 6.45852 12.0297 6.45703C11.8917 6.45703 11.7598 6.46304 11.6218 6.47204C10.4554 6.55305 9.34036 6.98406 8.42222 7.70886C8.60214 7.85896 8.80006 8.0571 9.22287 8.47437C10.0115 9.25489 12.0326 10.0564 12.0416 10.1555L12.0386 10.1495Z",
                  fill: "url(#paint5_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M7.88262 7.31559C7.97258 7.37563 8.05355 7.42667 8.12252 7.4747C7.85714 6.54397 7.84678 5.55891 8.09253 4.6228C7.01899 5.14318 6.06522 5.88127 5.29175 6.79024C5.35172 6.79024 7.03099 6.76022 7.88262 7.31259V7.31559Z",
                  fill: "url(#paint6_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M0.499754 12.6594C1.39936 17.9639 6.19727 22.0166 11.6549 22.1697C16.7017 22.3138 19.9253 19.3778 21.2567 16.5199C22.3842 14.0467 22.5131 11.2329 21.6166 8.6667V8.65469V8.64269L21.6226 8.6637C22.0304 11.3595 20.663 13.9682 18.5219 15.7334L18.5129 15.7484C14.3447 19.1497 10.3565 17.8018 9.54682 17.2494C9.48684 17.2234 9.42987 17.1954 9.37589 17.1654C6.94695 16.0036 5.93939 13.7851 6.15529 11.8818C5.57827 11.8906 5.0111 11.7316 4.52251 11.4241C4.03391 11.1167 3.64486 10.674 3.40249 10.1497C4.0409 9.7583 4.76879 9.5371 5.51681 9.50715C6.26482 9.47719 7.00803 9.63949 7.67563 9.97857C9.05103 10.6029 10.6157 10.6643 12.0357 10.1497C12.0297 10.0536 10.0086 9.24909 9.21696 8.46857C8.79714 8.05429 8.59923 7.85616 8.41931 7.70606C8.32354 7.62465 8.22344 7.54848 8.11944 7.47791C8.05047 7.42988 7.9755 7.37885 7.87954 7.31881C7.03391 6.76644 5.34864 6.79646 5.29167 6.79646H5.28567C4.82687 6.21407 4.85686 4.28679 4.88385 3.88452C4.74705 3.93857 4.61638 4.00699 4.49402 4.08866C4.08598 4.38044 3.70464 4.70795 3.35451 5.06731C2.95598 5.47042 2.59186 5.90623 2.26599 6.37017C1.51887 7.43036 0.9889 8.62819 0.706664 9.89452C0.700667 9.91853 0.286847 11.7257 0.490758 12.6624L0.499754 12.6594Z",
                  fill: "url(#paint7_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M16.1169 8.06614C16.5412 8.48332 16.9047 8.95831 17.1965 9.47707C17.2565 9.52811 17.3164 9.57614 17.3704 9.62117C20.0093 12.0528 18.6299 15.4901 18.5249 15.7362C20.663 13.9711 22.0334 11.3623 21.6226 8.66654C20.3031 5.38535 18.0781 4.06447 16.2549 1.18256C16.1649 1.03846 16.075 0.891363 15.985 0.738261C15.934 0.648201 15.895 0.570149 15.8561 0.498101C15.779 0.350507 15.7196 0.194323 15.6791 0.0327917C15.6793 0.0257687 15.677 0.0189183 15.6726 0.0134331C15.6682 0.00794791 15.662 0.00417522 15.6551 0.00277175C15.6455 -0.000923918 15.6348 -0.000923918 15.6252 0.00277175V0.00877575C15.6252 0.0147797 15.6162 0.00877575 15.6162 0.00877575C15.1664 0.22492 12.4975 4.45173 16.1139 8.06614H16.1169Z",
                  fill: "url(#paint8_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M17.3674 9.6213C17.3165 9.57326 17.2565 9.52523 17.1935 9.4772L17.1215 9.42316C16.3037 8.85583 15.3044 8.61296 14.3178 8.74171C18.4979 10.8371 17.3764 18.0479 11.583 17.7717C11.0685 17.7504 10.5601 17.6523 10.0746 17.4805C9.96066 17.4405 9.84671 17.3945 9.73276 17.3424C9.66679 17.3124 9.60381 17.2824 9.53784 17.2524H9.54684C10.3565 17.8047 14.3447 19.1556 18.5189 15.7514L18.5249 15.7394C18.6299 15.4992 20.0093 12.0559 17.3734 9.6273L17.3674 9.6213Z",
                  fill: "url(#paint9_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M6.79706 13.4337C6.79706 13.4337 7.33682 11.4344 10.6354 11.4344C10.9952 11.4344 12.0148 10.4347 12.0388 10.1435C10.6174 10.6608 9.0502 10.6004 7.67268 9.97542C7.00508 9.63634 6.26186 9.47404 5.51385 9.504C4.76584 9.53395 4.03795 9.75516 3.39954 10.1465C3.64276 10.6712 4.03293 11.1139 4.52267 11.4209C5.0124 11.7278 5.58062 11.8858 6.15833 11.8757C5.93943 13.779 6.94399 15.9974 9.37594 17.1592C9.42991 17.1892 9.48089 17.2132 9.53487 17.2403C8.11648 16.5048 6.94399 15.1178 6.79706 13.4277V13.4337Z",
                  fill: "url(#paint10_radial_254_560)",
                }),
                (0, C.jsx)("path", {
                  d: "M22.7711 8.05713C22.2613 6.83832 21.2417 5.52645 20.4381 5.11517C21.0103 6.22305 21.4078 7.41292 21.6166 8.64252V8.66353C20.3061 5.38235 18.0781 4.06147 16.2579 1.17955C16.1619 1.03546 16.072 0.888361 15.982 0.735259C15.931 0.645199 15.892 0.567147 15.8531 0.495099C15.7773 0.348322 15.7189 0.193163 15.6791 0.0327917C15.6793 0.0257687 15.677 0.0189183 15.6726 0.0134331C15.6682 0.00794791 15.662 0.00417522 15.6551 0.00277175C15.6455 -0.000923918 15.6348 -0.000923918 15.6252 0.00277175V0.00877574C15.6252 0.0147797 15.6162 0.00877574 15.6162 0.00877574V0.00277175C12.7014 1.71391 11.7089 4.88402 11.6189 6.46607C11.7538 6.45706 11.8888 6.44806 12.0267 6.44806C13.0619 6.44955 14.0783 6.72529 14.9726 7.24728C15.8669 7.76926 16.6073 8.5189 17.1185 9.42003C16.301 8.85448 15.303 8.61273 14.3177 8.74158C18.4979 10.837 17.3764 18.0478 11.5829 17.7716C11.0674 17.7506 10.558 17.6525 10.0716 17.4804C9.95763 17.4404 9.84368 17.3943 9.72973 17.3423L9.53181 17.2522H9.54081C9.48683 17.2262 9.43186 17.1982 9.37588 17.1682C9.42986 17.1982 9.48084 17.2282 9.53481 17.2492C8.11643 16.5138 6.94394 15.1268 6.797 13.4367C6.797 13.4367 7.33677 11.4404 10.6353 11.4404C10.9952 11.4404 12.0147 10.4407 12.0387 10.1495C12.0327 10.0595 10.0116 9.24892 9.21995 8.47441C8.80013 8.05413 8.59922 7.859 8.4223 7.7089C8.32653 7.62748 8.22643 7.55132 8.12243 7.48074C7.85705 6.55002 7.84669 5.56496 8.09244 4.62885C7.0189 5.14923 6.06514 5.88732 5.29166 6.79629C4.82686 6.2139 4.85985 4.28662 4.88684 3.88435C4.75004 3.9384 4.61937 4.00683 4.49701 4.08849C4.08909 4.37932 3.70776 4.70582 3.3575 5.06414C2.96195 5.46856 2.60085 5.90537 2.27797 6.37001C1.53086 7.4302 1.00089 8.62802 0.71865 9.89435L0.694661 9.9694C0.67367 10.0685 0.574713 10.5908 0.55972 10.7019C0.470273 11.2383 0.413194 11.7797 0.388794 12.323V12.383C0.393485 15.2947 1.48843 18.0987 3.45746 20.2417C5.42649 22.3846 8.1265 23.7106 11.0244 23.9579C13.9224 24.2052 16.8076 23.3559 19.1106 21.5776C21.4135 19.7992 22.9668 17.2212 23.4637 14.3523C23.4847 14.2022 23.4997 14.0521 23.5177 13.902C23.7584 11.9216 23.5007 9.9124 22.7681 8.05713H22.7711ZM21.6166 8.65753V8.66653V8.65753Z",
                  fill: "url(#paint11_linear_254_560)",
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsxs)("linearGradient", {
                      id: "paint0_linear_254_560",
                      x1: "21.2432",
                      y1: "3.72",
                      x2: "1.33211",
                      y2: "21.6846",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.048",
                          stopColor: "#FFF44F",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.111",
                          stopColor: "#FFE847",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.225",
                          stopColor: "#FFC830",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.368",
                          stopColor: "#FF980E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.401",
                          stopColor: "#FF8B16",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.462",
                          stopColor: "#FF672A",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.534",
                          stopColor: "#FF3647",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.705",
                          stopColor: "#E31587",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint1_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(20.7298 2.66831) scale(24.2286 24.2552)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.129",
                          stopColor: "#FFBD4F",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.186",
                          stopColor: "#FFAC31",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.247",
                          stopColor: "#FF9D17",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.283",
                          stopColor: "#FF980E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.403",
                          stopColor: "#FF563B",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.467",
                          stopColor: "#FF3750",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.71",
                          stopColor: "#F5156C",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.782",
                          stopColor: "#EB0878",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.86",
                          stopColor: "#E50080",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint2_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(11.8765 12.5845) scale(24.2286 24.2552)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.3",
                          stopColor: "#960E18",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.351",
                          stopColor: "#B11927",
                          stopOpacity: "0.74",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.435",
                          stopColor: "#DB293D",
                          stopOpacity: "0.343",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.497",
                          stopColor: "#F5334B",
                          stopOpacity: "0.094",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.53",
                          stopColor: "#FF3750",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint3_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(14.7976 -2.8363) scale(17.5526 17.5719)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.132",
                          stopColor: "#FFF44F",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.252",
                          stopColor: "#FFDC3E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.506",
                          stopColor: "#FF9D12",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.526",
                          stopColor: "#FF980E",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint4_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(9.19648 18.9201) scale(11.5363 11.549)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.353",
                          stopColor: "#3A8EE6",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.472",
                          stopColor: "#5C79F0",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.669",
                          stopColor: "#9059FF",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "1",
                          stopColor: "#C139E6",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint5_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(13.2004 10.5966) rotate(-13.606) scale(6.11684 7.1683)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.206",
                          stopColor: "#9059FF",
                          stopOpacity: "0",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.278",
                          stopColor: "#8C4FF3",
                          stopOpacity: "0.064",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.747",
                          stopColor: "#7716A8",
                          stopOpacity: "0.45",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.975",
                          stopColor: "#6E008B",
                          stopOpacity: "0.6",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint6_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(11.5707 1.67574) scale(8.29919 8.30832)",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#FFE226" }),
                        (0, C.jsx)("stop", {
                          offset: "0.121",
                          stopColor: "#FFDB27",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.295",
                          stopColor: "#FFC82A",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.502",
                          stopColor: "#FFA930",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.732",
                          stopColor: "#FF7E37",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.792",
                          stopColor: "#FF7139",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint7_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(18.094 -3.59375) scale(35.4089 35.4479)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.113",
                          stopColor: "#FFF44F",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.456",
                          stopColor: "#FF980E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.622",
                          stopColor: "#FF5634",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.716",
                          stopColor: "#FF3647",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.904",
                          stopColor: "#E31587",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint8_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(15.1096 -1.62294) rotate(83.9826) scale(25.9803 17.0323)",
                      children: [
                        (0, C.jsx)("stop", { stopColor: "#FFF44F" }),
                        (0, C.jsx)("stop", {
                          offset: "0.06",
                          stopColor: "#FFE847",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.168",
                          stopColor: "#FFC830",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.304",
                          stopColor: "#FF980E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.356",
                          stopColor: "#FF8B16",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.455",
                          stopColor: "#FF672A",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.57",
                          stopColor: "#FF3647",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.737",
                          stopColor: "#E31587",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint9_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(11.3751 4.75326) scale(22.1064 22.1307)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.137",
                          stopColor: "#FFF44F",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.48",
                          stopColor: "#FF980E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.592",
                          stopColor: "#FF5634",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.655",
                          stopColor: "#FF3647",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.904",
                          stopColor: "#E31587",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("radialGradient", {
                      id: "paint10_radial_254_560",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(17.2106 6.04851) scale(24.1953 24.2219)",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.094",
                          stopColor: "#FFF44F",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.231",
                          stopColor: "#FFE141",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.509",
                          stopColor: "#FFAF1E",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.626",
                          stopColor: "#FF980E",
                        }),
                      ],
                    }),
                    (0, C.jsxs)("linearGradient", {
                      id: "paint11_linear_254_560",
                      x1: "21.005",
                      y1: "3.624",
                      x2: "4.04177",
                      y2: "19.4772",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, C.jsx)("stop", {
                          offset: "0.167",
                          stopColor: "#FFF44F",
                          stopOpacity: "0.8",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.266",
                          stopColor: "#FFF44F",
                          stopOpacity: "0.634",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.489",
                          stopColor: "#FFF44F",
                          stopOpacity: "0.217",
                        }),
                        (0, C.jsx)("stop", {
                          offset: "0.6",
                          stopColor: "#FFF44F",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          android: () =>
            (0, C.jsxs)("svg", {
              width: "30",
              height: "30",
              viewBox: "0 0 30 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsxs)("g", {
                  clipPath: "url(#clip0_250_292)",
                  children: [
                    (0, C.jsx)("mask", {
                      id: "mask0_250_292",
                      maskUnits: "userSpaceOnUse",
                      x: "0",
                      y: "0",
                      width: "30",
                      height: "30",
                      children: (0, C.jsx)("rect", {
                        width: "30",
                        height: "30",
                        fill: "white",
                      }),
                    }),
                    (0, C.jsx)("g", {
                      mask: "url(#mask0_250_292)",
                      children: (0, C.jsx)("circle", {
                        opacity: "0.15",
                        cx: "15",
                        cy: "15",
                        r: "15",
                        fill: "#8B8E9F",
                      }),
                    }),
                    (0, C.jsxs)("g", {
                      clipPath: "url(#clip1_250_292)",
                      children: [
                        (0, C.jsx)("rect", {
                          x: "9.92371",
                          y: "11.415",
                          width: "1.36759",
                          height: "12.9921",
                          rx: "0.683795",
                          transform: "rotate(-45 9.92371 11.415)",
                          fill: "black",
                        }),
                        (0, C.jsx)("rect", {
                          x: "19.1113",
                          y: "10.4482",
                          width: "1.36759",
                          height: "12.9921",
                          rx: "0.683795",
                          transform: "rotate(45 19.1113 10.4482)",
                          fill: "black",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsx)("clipPath", {
                      id: "clip0_250_292",
                      children: (0, C.jsx)("rect", {
                        width: "30",
                        height: "30",
                        fill: "white",
                      }),
                    }),
                    (0, C.jsx)("clipPath", {
                      id: "clip1_250_292",
                      children: (0, C.jsx)("rect", {
                        width: "12.9921",
                        height: "12.9921",
                        fill: "white",
                        transform: "translate(5.81445 15.5249) rotate(-45)",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ios: () =>
            (0, C.jsxs)("svg", {
              width: "30",
              height: "30",
              viewBox: "0 0 30 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsxs)("g", {
                  clipPath: "url(#clip0_250_292)",
                  children: [
                    (0, C.jsx)("mask", {
                      id: "mask0_250_292",
                      maskUnits: "userSpaceOnUse",
                      x: "0",
                      y: "0",
                      width: "30",
                      height: "30",
                      children: (0, C.jsx)("rect", {
                        width: "30",
                        height: "30",
                        fill: "white",
                      }),
                    }),
                    (0, C.jsx)("g", {
                      mask: "url(#mask0_250_292)",
                      children: (0, C.jsx)("circle", {
                        opacity: "0.15",
                        cx: "15",
                        cy: "15",
                        r: "15",
                        fill: "#8B8E9F",
                      }),
                    }),
                    (0, C.jsxs)("g", {
                      clipPath: "url(#clip1_250_292)",
                      children: [
                        (0, C.jsx)("rect", {
                          x: "9.92371",
                          y: "11.415",
                          width: "1.36759",
                          height: "12.9921",
                          rx: "0.683795",
                          transform: "rotate(-45 9.92371 11.415)",
                          fill: "black",
                        }),
                        (0, C.jsx)("rect", {
                          x: "19.1113",
                          y: "10.4482",
                          width: "1.36759",
                          height: "12.9921",
                          rx: "0.683795",
                          transform: "rotate(45 19.1113 10.4482)",
                          fill: "black",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsxs)("defs", {
                  children: [
                    (0, C.jsx)("clipPath", {
                      id: "clip0_250_292",
                      children: (0, C.jsx)("rect", {
                        width: "30",
                        height: "30",
                        fill: "white",
                      }),
                    }),
                    (0, C.jsx)("clipPath", {
                      id: "clip1_250_292",
                      children: (0, C.jsx)("rect", {
                        width: "12.9921",
                        height: "12.9921",
                        fill: "white",
                        transform: "translate(5.81445 15.5249) rotate(-45)",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          website: rj,
        },
        ry = (n) => rf[n] || rj,
        rm = (n, e) => {
          let t = Array.prototype.slice.call(
              w.create(n, { errorCorrectionLevel: e }).modules.data,
              0
            ),
            i = Math.sqrt(t.length);
          return t.reduce(
            (n, e, t) =>
              (t % i == 0 ? n.push([e]) : n[n.length - 1].push(e)) && n,
            []
          );
        };
      function rw(n) {
        let {
            ecl: e = "M",
            size: t = 200,
            uri: i,
            clearArea: o = !1,
            image: r,
            imageBackground: l = "transparent",
          } = n,
          a = o ? 76 : 0,
          c = t - 20,
          d = (0, s.useMemo)(() => {
            let n = [],
              t = rm(i, e),
              o = c / t.length;
            if (
              ([
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ].forEach((e) => {
                let { x: i, y: r } = e,
                  l = (t.length - 7) * o * i,
                  a = (t.length - 7) * o * r;
                for (let e = 0; e < 3; e++)
                  n.push(
                    (0, C.jsx)(
                      "rect",
                      {
                        fill:
                          e % 2 != 0
                            ? "var(--pcm-body-background)"
                            : "var(--pcm-body-color)",
                        rx: -((e - 2) * 5) + (0 === e ? 2 : 3),
                        ry: -((e - 2) * 5) + (0 === e ? 2 : 3),
                        width: o * (7 - 2 * e),
                        height: o * (7 - 2 * e),
                        x: l + o * e,
                        y: a + o * e,
                      },
                      "".concat(e, "-").concat(i, "-").concat(r)
                    )
                  );
              }),
              r)
            ) {
              let e = (t.length - 7) * o * 1,
                i = (t.length - 7) * o * 1;
              n.push(
                (0, C.jsxs)(C.Fragment, {
                  children: [
                    (0, C.jsx)("rect", {
                      fill: l,
                      rx: 12,
                      ry: 12,
                      width: 7 * o,
                      height: 7 * o,
                      x: e + 0 * o,
                      y: i + 0 * o,
                    }),
                    (0, C.jsx)("foreignObject", {
                      width: 7 * o,
                      height: 7 * o,
                      x: e + 0 * o,
                      y: i + 0 * o,
                      children: (0, C.jsx)("div", {
                        style: { borderRadius: 12, overflow: "hidden" },
                        children: r,
                      }),
                    }),
                  ],
                })
              );
            }
            let s = Math.floor((a + 25) / o),
              d = t.length / 2 - s / 2,
              u = t.length / 2 + s / 2 - 1;
            return (
              t.forEach((e, i) => {
                e.forEach((e, l) => {
                  t[i][l] &&
                    !(
                      (i < 7 && l < 7) ||
                      (i > t.length - 8 && l < 7) ||
                      (i < 7 && l > t.length - 8)
                    ) &&
                    (r || !(i > d && i < u && l > d && l < u)) &&
                    n.push(
                      (0, C.jsx)(
                        "circle",
                        {
                          cx: i * o + o / 2,
                          cy: l * o + o / 2,
                          fill: "var(--pcm-body-color)",
                          r: o / 3,
                        },
                        "circle-".concat(i, "-").concat(l)
                      )
                    );
                });
              }),
              n
            );
          }, [e, c, i]);
        return (0, C.jsxs)("svg", {
          height: c,
          width: c,
          viewBox: "0 0 ".concat(c, " ").concat(c),
          style: { width: c, height: c },
          children: [
            (0, C.jsx)("rect", { fill: "transparent", height: c, width: c }),
            d,
          ],
        });
      }
      var rI = (0, x.I4)(M.P.div)(n8()),
        rN = (0, x.I4)(M.P.div)(en()),
        rD = (0, x.i7)(ee()),
        rv = (0, x.I4)(M.P.div)(ei(), rD, (n) => n.$failed && (0, x.AH)(et())),
        rk = (0, x.I4)(M.P.div)(eo()),
        rL = (0, x.I4)(M.P.div)(ea(), (n) =>
          n.$wcLogo ? (0, x.AH)(er()) : (0, x.AH)(el())
        ),
        rT = x.I4.div(es());
      function rb(n) {
        let {
          value: e,
          image: t,
          imageBackground: i,
          ecl: o = "M",
          imagePosition: r = "center",
          failed: l,
          failedCallback: a,
        } = n;
        return (0, C.jsxs)(rI, {
          children: [
            l &&
              (0, C.jsx)(rT, {
                children: (0, C.jsx)(o4, {
                  "aria-label": "Retry",
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.8 },
                  whileTap: { scale: 0.9 },
                  transition: { duration: 0.1 },
                  onClick: a,
                  children: (0, C.jsx)(o3, { children: (0, C.jsx)(iC, {}) }),
                }),
              }),
            (0, C.jsxs)(rN, {
              children: [
                t &&
                  (0, C.jsx)(rk, {
                    children: (0, C.jsx)(rL, {
                      $wcLogo: "center" !== r,
                      style: { background: "center" === r ? i : void 0 },
                      children: t,
                    }),
                  }),
                (0, C.jsx)(h.N, {
                  initial: !1,
                  children: e
                    ? (0, C.jsx)(
                        M.P.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            position: "absolute",
                            inset: [0, 0],
                          },
                          transition: { duration: 0.2 },
                          children: (0, C.jsx)(rw, {
                            uri: e,
                            size: 288,
                            ecl: o,
                            clearArea: !!("center" === r && t),
                          }),
                        },
                        e
                      )
                    : (0, C.jsxs)(rv, {
                        initial: { opacity: 0.2 },
                        animate: { opacity: 0.2 },
                        exit: {
                          opacity: 0,
                          position: "absolute",
                          inset: [0, 0],
                        },
                        transition: { duration: 0.2 },
                        $failed: l,
                        children: [
                          (0, C.jsx)("span", {}),
                          (0, C.jsx)("span", {}),
                          (0, C.jsx)("span", {}),
                          (0, C.jsx)("div", {}),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      rb.displayName = "CustomQRCode";
      var rA = (0, x.I4)(M.P.div)(ec()),
        rz = (0, x.I4)(M.P.div)(ed()),
        rE = x.I4.div(eu()),
        rO = (0, x.I4)(rE)(ep()),
        rS = x.I4.div(eg()),
        rU = (0, x.I4)(rO)(eM()),
        rZ = x.I4.div(eC()),
        rF = x.I4.div(eh()),
        rP = x.I4.div(ex()),
        rQ = x.I4.p(ej()),
        rV = x.I4.ul(ef()),
        rH = x.I4.li(ey());
      x.I4.span(em());
      var rY = x.I4.div(ew()),
        r_ = x.I4.h3(eI()),
        rW = x.I4.p(eN()),
        rB = x.I4.div(eD());
      x.I4.span(ev());
      var rR = x.I4.p(ek()),
        rG = (0, x.I4)(M.P.div)(eb(), (n) =>
          n.$clipboard ? (0, x.AH)(eL()) : (0, x.AH)(eT())
        ),
        r$ = (n) => {
          let { copied: e, small: t } = n;
          return (0, C.jsx)(rG, {
            $clipboard: e,
            children: (0, C.jsx)(iD, {
              style: {
                transform: t ? "scale(1)" : "translateX(3px) scale(1.5)",
                opacity: t || e ? 1 : 0.6,
              },
            }),
          });
        },
        rJ = x.I4.div(eE(), (n) =>
          n.$disabled ? (0, x.AH)(eA()) : (0, x.AH)(ez())
        ),
        rK = x.I4.div(eO()),
        rX = (n) => {
          let e,
            { string: t, children: i, variant: o } = n,
            [r, l] = (0, s.useState)(!1),
            [a, c] = (0, s.useState)("copied-0"),
            d = () => {
              t &&
                (!(function (n) {
                  if (navigator.clipboard && window.isSecureContext)
                    return navigator.clipboard
                      .writeText(n)
                      .then(() => {})
                      .catch((n) => {});
                  {
                    let e = document.createElement("textarea");
                    (e.value = n),
                      (e.style.position = "fixed"),
                      (e.style.left = "-999999px"),
                      (e.style.top = "-999999px"),
                      document.body.appendChild(e),
                      e.focus(),
                      e.select(),
                      new Promise((n, t) => {
                        try {
                          document.execCommand("copy"),
                            document.body.removeChild(e),
                            n(!0);
                        } catch (n) {
                          document.body.removeChild(e), t(n);
                        }
                      });
                  }
                })(t.trim()),
                l(!0),
                c("copied"),
                clearTimeout(e),
                (e = setTimeout(() => {
                  l(!1), c("copied-0");
                }, 1e3)));
            };
          return "button" === o
            ? (0, C.jsx)(rh, {
                disabled: !t,
                onClick: d,
                className: a,
                children: (0, C.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    overflow: "hidden",
                  },
                  children: [
                    (0, C.jsx)("div", {
                      style: { width: "16px" },
                      children: (0, C.jsx)(r$, { copied: r }),
                    }),
                    i,
                  ],
                }),
              })
            : (0, C.jsx)(rJ, {
                onClick: d,
                $disabled: !t,
                className: a,
                children: (0, C.jsxs)(rK, {
                  children: [
                    i,
                    (0, C.jsx)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                      },
                      children: (0, C.jsx)(r$, { copied: r, small: !0 }),
                    }),
                  ],
                }),
              });
        };
      async function rq(n) {
        let e,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = t.connector
          ? [t.connector]
          : [...n.state.connections.values()].map((n) => n.connector);
        let i = n.state.connections;
        if (e && e.length)
          for (let t of e)
            await t.disconnect(),
              t.emitter.off("change", n._internal.events.change),
              t.emitter.off("disconnect", n._internal.events.disconnect),
              t.emitter.on("connect", n._internal.events.connect),
              i.delete(t.uid);
        n.setState((n) => {
          if (0 === i.size)
            return {
              ...n,
              connections: new Map(),
              current: null,
              status: "disconnected",
            };
          let e = i.values().next().value;
          return { ...n, connections: new Map(i), current: e.connector.uid };
        });
        {
          var o, r;
          let e = n.state.current;
          if (!e) return;
          let t =
            null === (o = n.state.connections.get(e)) || void 0 === o
              ? void 0
              : o.connector;
          if (!t) return;
          await (null === (r = n.storage) || void 0 === r
            ? void 0
            : r.setItem("recentConnectorId", t.id));
        }
      }
      function r1(n) {
        let { config: e } = sa(),
          {
            status: t,
            data: i,
            error: o,
            mutate: r,
            mutateAsync: l,
          } = od(
            (0, s.useCallback)(async (n) => {
              await rq(e, null != n ? n : void 0);
            }, []),
            n
          );
        return {
          status: t,
          data: i,
          error: o,
          disconnect: r,
          disconnectAsync: l,
        };
      }
      var r0 = (0, p.vt)((n) => ({
          smartAccount: null,
          setSmartAccount: (e) => {
            n({ smartAccount: e });
          },
        })),
        r2 = () => r0((n) => n.smartAccount),
        r4 = () => {
          let { address: n, chain: e } = t3(),
            t = r2(),
            { disconnect: i } = r1(),
            { showError: o } = ii(),
            [r, l] = (0, s.useState)();
          return (
            (0, s.useEffect)(() => {
              t && n && n.startsWith("0x")
                ? (l(void 0),
                  e
                    ? t
                        .getAddress()
                        .then((e) => {
                          t
                            ? e
                              ? l((0, d.o)(e))
                              : l(void 0)
                            : "0x0000000000000000000000000000000000000000" === n
                            ? l(void 0)
                            : l(n);
                        })
                        .catch((n) => {
                          i(), setTimeout(() => o(n.message), 10);
                        })
                    : l(void 0))
                : "0x0000000000000000000000000000000000000000" === n
                ? l(void 0)
                : l(n);
            }, [n, t, i, e]),
            r
          );
        },
        r3 = (n) =>
          (null == n ? void 0 : n.name)
            ? n.name
                .replace(" Mainnet", "")
                .replace("BNB Smart Chain", "BNB Chain")
                .replace("Binance Smart Chain", "BNB Chain")
            : "",
        r5 = x.I4.div(eS()),
        r6 = x.I4.div(eU()),
        r9 = x.I4.div(eZ()),
        r7 = x.I4.div(eF()),
        r8 = x.I4.div(eP()),
        ln = () =>
          (0, C.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 21 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            children: [
              (0, C.jsx)("rect", {
                width: "21",
                height: "21",
                fill: "url(#pattern0_23_44)",
              }),
              (0, C.jsxs)("defs", {
                children: [
                  (0, C.jsx)("pattern", {
                    id: "pattern0_23_44",
                    patternContentUnits: "objectBoundingBox",
                    width: "1",
                    height: "1",
                    children: (0, C.jsx)("use", {
                      xlinkHref: "#image0_23_44",
                      transform: "scale(0.0138889)",
                    }),
                  }),
                  (0, C.jsx)("image", {
                    id: "image0_23_44",
                    width: "72",
                    height: "72",
                    xlinkHref:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABAQSURBVHicvZx/cFzVdcc/970nybKFvP4ly5ax18TxDwxYEDAEcJETmpqQmcJ/mU6nFjPpFNJ2kKfTTNp0arstDZB25NBQSDtTm4TEhtKxwwSSdEotB2ihEBCJMTXUeI1l2ZZsa23r1+6+d0//ePvj/dxfWufOyPK+d+8953zvOd93zr1vpfg1tyefl27HoRvFBjRJLZIUSIiQQEgIgghphLSg0iKkBElpkfdM9ODXHmge/HXqq660gKf2SjIHPYZiq4ZuhISIIAACIiC4v8lfl/x1APFcw+2bRhjQog/ZVtOeHQ+o9JXU/4oB9MRe6TUUWwV6oGB0FDAuEuK5hkQCU5yj2N8VNaAdeWbHQ817roQdDQXI4y3bBZLgNVoC3lICKBI0Hyju/OKZwzfenS8tIt82ss27dmxrnFc1DKC8x/iAcX8HjBLI8wyFfoVr4ZAr9fX1Jw5EQUSlBb3zkT+atasRds0YoCefl27R7C8AA+XCCT/P+O6LB5SIcPJ6IoRBC8pTDIqttz26rXVgJvbNCKB/2Cs7UGwvfA4pCoHVrZJnIr2pCmAi5AG7Huubta1eG+sC6Km9knQUByvyDHEhFg6RhnOSp68oBi3k/ke3taauOEBPPi/dWnMQN3ch0jPiFM1/iOWZqoCpV56ktdabd32traY8yqil8xN7pVdr3i2AIwJaPAoVPwvh+4KIRPQv9W2yAOXtH5gfz3hqkAeIqAQYB/sen+q9IgB9Z5/0KcXuklESYUReKe0xSosPBL9R/vGbbjS4usNx++sgiKVrOj9v1fJ0EcSE1rL7jx+b7GsoQE/slV4t9MeubMAT4j2rBGTw/qL5cOt1Bld3Cq0tEgC90nw1eq6m/6vfHO9tCEBP/kC6EfpdIXlBugSK1h5P0B5Ftad/ARTv6ub7ahEUwpY7DEwTTAM+vdwVUFFewJt1ABhXHiF5IgJa7f7qI+PdMwKof68kbcVBQYqcI+Jf2djrVN/3htUGK5aUVJnfDh3zg2Pi5iijQ+ha4Lrm4IPfnEqWw8Aqi56wX0QSBWPry2xLfUK5DzBnFnx+o+F7nCoFq5YLo2OKrB0lLyqprE5e6b6AkJCscxBYGYtB3I1d+6RfRLrrWpkaVvxzG03aZoezjdYWuGaZ3+CqPDf4Q8W+ya/suLyjJoD6vy89YktfMWa1J8Z1SUiYI4jgiBKIQU5a0Qnda+OjfHmn0D6nEA7VclJAnlffGA4UYfvv74jmo2jtlPR7EffnInFPrKjHPkVgg/1NA7bcaWGWYUHDgHUr3diIlhehX6S8uCdsSV9bs78qgP7+WadPi3RrkQglCt6EZyUjchGf5+U/e1ZStLDxeoMlCysn8vPmwtWLJSwvCoSQvDK5mhc0DVrrZO+fX+otC1D/bkmg1fZGrox/vHs9cZWi52YTVUWho4A1K6GlGTQz99yy+sL23q+PJWMBsg3dp0USpdyhEPdSZ9zjj/t8iN5zp0FrS/VlYEsTrL8G0B55kbwYlufnRYnP1dzrySxmTyxAwMOVvaPAQ9WsVpgn1iQVa1eaVYNTaF0dsHBeJW+Oy6Srz8QR2R4J0OO77V5d2FCP45mCAh5vio17HTRCaDKFL95RnpjjmmHADavBIAhCmRDz6OZ6SIUa0v2c/PKflrjIo6qxdcY84/Uswp60+RaTBYn69+ja2xSrVqgKnlurJ4XtQ/RWH0D9uyXhiO7xxW0AaX/cB3im4F0ezwvG/ZKFitu7raqIOa4pYN1KRdvsIC8SUxMSURN6eUo8+VDJPkfo+XKfS9YGwJTO9YoP6Voy48p9lYJ7Nlk0N9UPTqE1WbBhjev4jdDNd90zZ9Zwj6vyIWbcVbb69XmG173jMlu/J25YbbDq6jqIJ6YtXaRY1hEvr57q3u95gtJsLQIkQo/EoerhE/f/tXnY7Ba4d5OF0cATOEPBjWsNmqwonWvxpHg7tNANYDzyT9lurWNyn2LMEhOzHk+K4aQtdzbR3tb4A9yr5iiuX2VUzYHlOSnSvsR9fWPdhgPdJcOCDF/uCVBuK9X9nOwyuPnayjmPCIxd0hz+KMv7x7KkL2t3u6JCW500WDBXValvHgSi9I22z3GcbgtRG4IEBR5BQOikwdO3dL80BwKWCV+6y3I34mOa1jA65jB01mZi0h1/Lu1w/qJD22yDZR0WCxMmRgx9NVlw83rFT1/3L05Rv4K+AZoAP33E2YeYGywNST8ohUF+/qn1eOazG0xWdEZblrOF06MOw6MOmWzYV0Tg8oTmg+NZZrUouhaZdC6wsKxwqHYuNFi1XPjf40540UKglHg0fDAZtg8haYlIsvxAj3f5gBHPxF5FhPntit/8bDjnmZoWTo3YnDnv4DiR2IXadEY4NmRz4rRN5wKLrg6LWZ46Tin4zDqDE8MO41MBQytGg3shHA15LCBpiS6ccUkAzQj0o0ALKIGCe3+jiTmtJSMuXtYMjdicT+ti/1qb7cDQiM2pUZuFCZNliy3a57geOrtVcfN6k4G3HeLpIsqzoujCGzmSsLR23+qqPDAORP/KrLvGYMNqEy1wLs8vlyfqRCWiibi8NTrmMLfNoGuxxcK5Jp9ebnI0pRk6K6FFqx2Y4viEJd5N+YLBVfJMUUj+96wm+NImi9PnbE6NOExnGgdMVLs4rrk4nqW1RdHVYbHxOpMz5zTZXAxdlLXPY08JtISl6wImqq8wt11xNJXDqn03Y0ZtKiP838kcWitamhWZbNDTozjJA2KUbfnrFkJavOdeRaPjOMnjnoH7wyPCSz8X1n9KsXKZqmtbo57mpguK0QtgO3XQReR9EEhbWiQtQqLywAiXjSDEqYzw1hHho5Nw4xqDxQvUjCr4ck0ELo3D8Kgik2UGwMQ94UhbIqTLE1X1oTerBXI5yDlw4SL855uaZUuge7XR8HJjahpOjyouT5R0MJT7k7MblDAq0oZAyrsDWFX1G6ru8/sojnD/55pZvdxEITgipE4JL/3c4Z0PHHL2zIGxbTh1VvHRCcWlicIGF3QuUNx0rRVd3cftRoTs8+wTCYijUpZoUgUhRXSrDKegK09n4dV3bf7k92bxwXGL/a9kGbmgydrwyw+FYydtblpnkOwyauYnETifhrPnFbadl61gTivcdoPFiqUmL/x7prgIBTvKcmil0ENS5m2/9Y0lItwXxeC1cxJcmtCMTwpfvLOZTTdZmCYcP6XJ2UI2C6lh4cw5IXGVYvasMD+dOO13MxGYmIQTpxUX0grHceWZJnSvNrnnzmY6F5m88kaOk2d0HQ+XMlm34rvmrXdvB+TB2MLU51kRoHn6FoScPKtZvMBgxVKTdSstbr3BYuyycOacRmu4PAEfnnBLg0UJRXNTCSUvQJksDI0oTo8qcnaJZ1YsNbh3UxPXfsqtzw5/ZPPmYZtQJMTxTFlvKvXVip0K4OHHJsdE8iVHzQlWFIjCnFbFX/zBbDoXlLZHjxyzee5nGT4eclwuAJqb4Ka1JutXmTRZcOgXUzhO6bHtaIpC57Ub3HGTxTVdpUPHkQuafT/JMJ2pIveJ0jcexPTr3++YZwJsvPsbWxC3qq8lnKKre/daNgsnz2g2XmdhmW4odcw32PSZZua1w8cnNVMZsG3hkzOaj4c0bbMVqWGH1LDi0jhFEFua4dbrm/jC7c0sTBhFcLI54cWBLBcuxRkd8Pxy4RRyCvXTk7/81nMmwK2f/zOlizxUCZjqq/tzY4JhwNqVpcreMOCaZRY9tzSTzQmfnHawbZichg8/cbh4ycMzBqxbaXLvpmZWLvPvC2mBQ2/nOHrcCXlv3ELWwkmgvzv0q797wwIwMQcc0VXwTJTLBkDzuizw4kCG1ctNrl/t3zlrm63o/e1Wem5p5ocvTTF41MF28uGkoGuRe0zU1RFdtxz7xOGdI7YvdCI9IVK3oGeFQZvV3LIHPO9JP/Q3kwdFpKfu6reMoovnK/7qD+fQ3hb9bNcCbx/O8eyPp7g4obnthibWJuN3Ei9PCN97cZpLExIDTFzIRZF1sPoHkIE393ZuBs8reKL1M0L+dIMyk0aCUpw40mVPnxP++d+mePh350QWsoaCjdc3sWGNxaG3p2lpjs+6bUf4yWsZLo5LrLxob5Gw/r77XvvkmaJuhf88/Zdte0TcpLHgNbFn27Fn96W+xU39fOb6P7+yGXgrW1QsqrU0q7LgiMAvjtgcO+lUlFfUr6CzBDf1Y+1Lv7VvyZ4QQHkFdgbPiyJPCjzIx7+z4x/vaNjzoylSw1XutUa04RHNobezgSOmaHmhRSvej9LXO4d82yvTB5CJOSCiUjM9244+gRUmp4Snnptkqo6NtOmM8PKrGbLZYI1Vx7uT8e9zp+2s/3tmPoCe3tGaQvRO7wpIYAXiTlCr7fvhCYdnfzyN1tWDozX8xxtZzp7XMbIr6VClHVrvHDwwz/dtxdBz4l/+un2PiKSKyAc4qezZdiDuo09ghZdfneat98vzkbcdOWbz3lE7VG3HnsXHnviW05fBd15YGvqWYuSDVIlxf0NXJvBj2/Dk3ilGxyq70fm05mf/lcVxKs87Iy9HIr90FwnQnr9tGxQtRcKeOSdJiCPOpR2+88MJNzmMaTkbXjqUYXxSN4QD4zhJULsGX1gyUDVAAM8+OneHFlJetCudxYfP7onoX/p56/0c+1+Zigw1AV57J8vxYad6eXg+U05f7xNZDQ6+0Bn7lc2y21ai9GZ3zzomlwhwUgnEoBF+nij21cL3XpziaCq81Zgacnjt3azPEyrKCzydivJj3+eWtHLk/nIYlAVo36PzUhrZXF0uEQViOU9y+05nhMd3jzM+WXKj8UnhRwPTxZ3DxsgLjU8bWm8ePLAkVTdAAP/6rXmDiDxQVdx7Vrd83PvfVz4xbPOP+8aLBrz8aoYLaV2DvBieCXiuH1i1bfDAsorfX63qiO/Ifz82uO62r18U2CICsYVe/lr1hWLp/rEhh6UdBu9+kOP1d3Oe+QLyCuOrkRcaXxy37fCBpU9XY3tNZzH39Y31iqZfRBJFUIpGV1/dS/6foFFtsxXTGSGTE2IXoS55pfk06oEjB0q1VkMByoPU7dhyUCBRbrNM8lqGjai12g54Xpy8qPH+vmmt9OYjVYTVjADKg5TMZWW/4H7hLnbvqBZgooD1ARMTMhWAyctLNSlVkZAbBlCh3fPQ+X4R+spzEpHhFM8RHoDjAPL0LRdOIqCU7Dx8oGtHvTbO+Dx4y4OjPVob/YJ0z4w8o4AJhCjVAwOkROn7aw2pYGvYgfndXxntA7Vd8i9CRAN0hTnJ7ZcSpXceObBsTyPsaugbBT29YwnDsPtEeFgovdoHVXISFYCtAphmzIF6uCauXbE/0dXTO9IrorZqpKfqcIIIbyqfJgADGv1Mozwm2K74H3nr6R1L5By7V4S7QHpESi9rQV1knRYY1OhnGu0tUe2KAxRst//OSLd23+7fIEhSNEmQhJb8nwoExP17ZGmUSuMeJKQE+z1TM1hNedDI9v88acX2btUl0gAAAABJRU5ErkJggg==",
                  }),
                ],
              }),
            ],
          }),
        le = {
          eth: ln,
          sol: () => {
            let { background: n } = su();
            return (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 26 26",
              fill: "none",
              children: [
                (0, C.jsx)("rect", {
                  width: "26",
                  height: "26",
                  rx: "13",
                  fill: n,
                }),
                (0, C.jsx)("mask", {
                  id: "mask0_1045_88",
                  maskUnits: "userSpaceOnUse",
                  x: "2",
                  y: "2",
                  width: "22",
                  height: "22",
                  children: (0, C.jsx)("rect", {
                    x: "2",
                    y: "2",
                    width: "22",
                    height: "22",
                    fill: "white",
                  }),
                }),
                (0, C.jsxs)("g", {
                  mask: "url(#mask0_1045_88)",
                  children: [
                    (0, C.jsx)("path", {
                      d: "M7.63931 16.6911C7.73831 16.5921 7.87031 16.5371 8.01331 16.5371H20.9493C21.1803 16.5371 21.3013 16.8231 21.1363 16.9881L18.5843 19.5401C18.4853 19.6391 18.3533 19.6941 18.2103 19.6941H5.26331C5.03231 19.6941 4.91131 19.4081 5.07631 19.2431L7.63931 16.6911Z",
                      fill: "#C931F7",
                    }),
                    (0, C.jsx)("path", {
                      d: "M7.63931 7.154C7.73831 7.055 7.87031 7 8.01331 7H20.9493C21.1803 7 21.3013 7.286 21.1363 7.451L18.5843 10.003C18.4853 10.102 18.3533 10.157 18.2103 10.157H5.26331C5.03231 10.157 4.91131 9.871 5.07631 9.706L7.63931 7.154Z",
                      fill: "#1CE2AF",
                    }),
                    (0, C.jsx)("path", {
                      d: "M18.5733 11.8952C18.4743 11.7962 18.3423 11.7412 18.1993 11.7412H5.26331C5.03231 11.7412 4.91131 12.0272 5.07631 12.1922L7.62831 14.7442C7.72731 14.8432 7.85931 14.8982 8.00231 14.8982H20.9383C21.1693 14.8982 21.2903 14.6122 21.1253 14.4472L18.5733 11.8952Z",
                      fill: "#6697CE",
                    }),
                  ],
                }),
              ],
            });
          },
        },
        lt = (n) => le[n] || ln,
        li = { evm: lt("eth"), solana: lt("sol") },
        lo = (0, x.I4)(M.P.div)(eQ()),
        lr = (n) => {
          let { children: e, style: t } = n;
          return (0, C.jsx)(lo, { style: t, children: e });
        },
        ll = x.I4.div(eV()),
        la = x.I4.div(eH()),
        ls = x.I4.div(
          eY(),
          (n) => {
            let { $canClick: e, $isError: t } = n;
            return e
              ? "\n      .icon-0x7ff{     \n        path {\n          fill: #fff !important;\n        }\n          circle {\n            fill: ".concat(
                  t
                    ? "var(--pcm-error-color) !important"
                    : "var(--pcm-accent-color) !important",
                  "  ;\n          }\n      }\n   \n      "
                )
              : "\n        cursor: default;\n       .icon-0x7ff{\n        path {\n          fill: #fff !important;\n        }\n          circle {\n          fill: var(--pcm-body-background-secondary) !important;\n          }}\n      ";
          },
          (n) => {
            let { disabled: e, $canClick: t } = n;
            return e && t && "\n    cursor: default;\n    opacity: 0.5;\n  ";
          }
        ),
        lc = x.I4.input(
          e_(),
          (n) => {
            let { error: e } = n;
            return e
              ? "var(--pcm-error-background)"
              : "var(--pcm-body-background-tertiary)";
          },
          (n) => {
            let { error: e } = n;
            return e ? "var(--pcm-error-color)" : "var(--pcm-body-color)";
          }
        ),
        ld = x.I4.div(eW()),
        lu = () => {
          let { navigate: n } = oh(),
            e = (0, s.useRef)(null),
            t = it(),
            { appearance: i } = sd(),
            [o, r] = (0, s.useState)(""),
            [l, a] = (0, s.useState)(""),
            [c, d] = (0, s.useState)(!1),
            [u, p] = (0, s.useState)(!1),
            g = oj("particleAuth"),
            M = async () => {
              var i, o, l;
              try {
                let r =
                  null === (o = e.current) || void 0 === o
                    ? void 0
                    : null === (i = o.value) || void 0 === i
                    ? void 0
                    : i.trim();
                if (r) {
                  if (r) {
                    if (!tq.test(r)) throw Error(t.emailFormatError);
                  } else throw Error(t.enterEmail);
                  p(!0),
                    await (null == g
                      ? void 0
                      : g.auth.getConnectCaptcha({ email: r })),
                    n("captcha", { value: r, type: "email" });
                }
              } catch (e) {
                let n =
                  (null == e
                    ? void 0
                    : null === (l = e.extra) || void 0 === l
                    ? void 0
                    : l[0]) ||
                  e.message ||
                  ("string" == typeof e ? e : t.networkError);
                n.includes("Network Error") && (n = t.networkError), r(n);
              }
              p(!1);
            },
            h = (0, s.useMemo)(() => !l || !tq.test(l) || u, [l, u]),
            x = (0, s.useMemo)(
              () => (null == i ? void 0 : i.hideContinueButton),
              [null == i ? void 0 : i.hideContinueButton]
            );
          return (0, C.jsxs)(ll, {
            children: [
              (0, C.jsxs)(la, {
                children: [
                  (0, C.jsx)(lc, {
                    placeholder: t.email,
                    ref: e,
                    error: o,
                    onChange: (n) => {
                      r(""), a((n.target.value || "").trim());
                    },
                    onKeyDown: (n) => {
                      "Enter" === n.key &&
                        (n.preventDefault(), !u && tq.test(l) && M());
                    },
                    onFocus: () => {
                      d(!0);
                    },
                    onBlur: () => {
                      d(!1);
                    },
                  }),
                  x &&
                    (0, C.jsx)(ls, {
                      onClick: () => {
                        !u && tq.test(l) && M();
                      },
                      disabled: h,
                      $canClick: (null == l ? void 0 : l.length) >= 1,
                      $isError: !!o,
                      children: (0, C.jsx)(iS, {
                        logo: (0, C.jsx)("div", {
                          className: "icon-0x7ff",
                          children: (0, C.jsx)(iv, {}),
                        }),
                        connecting: u,
                        inset: 0,
                        width: 30,
                        height: 30,
                      }),
                    }),
                ],
              }),
              o &&
                (0, C.jsxs)(ld, {
                  children: [
                    (0, C.jsx)("div", { children: (0, C.jsx)(id, {}) }),
                    (0, C.jsx)("div", { children: o }),
                  ],
                }),
              !x &&
                (0, C.jsx)(rh, {
                  style: { marginTop: 16 },
                  onClick: M,
                  loading: u,
                  disabled: h,
                  children: t.continue,
                }),
            ],
          });
        },
        lp = () => {
          let { navigate: n } = oh(),
            e = it(),
            { appearance: t } = sd(),
            i = o8(),
            o = re("passkeySmartWallet");
          return t.collapsePasskeyButton
            ? (0, C.jsx)(rh, {
                style: { marginTop: 16 },
                onClick: () => {
                  n("login-passkey");
                },
                children: e.continueWithSmartWalletPasskey,
              })
            : (0, C.jsxs)("div", {
                children: [
                  (0, C.jsx)(rh, {
                    style: { marginTop: 16 },
                    onClick: () => {
                      oW()
                        ? (n("passkey-setup"), oB())
                        : o && i(o, { passkeyParams: { isRegistering: !0 } });
                    },
                    children: e.createNewPasskey,
                  }),
                  (0, C.jsx)(rh, {
                    style: { marginTop: 16 },
                    color: "secondary",
                    onClick: () => {
                      i(o, { passkeyParams: { isRegistering: !1 } });
                    },
                    children: e.loginWithPasskey,
                  }),
                ],
              });
        },
        lg = (n, e) => {
          (0, s.useEffect)(() => {
            let t = (t) => {
              e.every((n) => n.current && !n.current.contains(t.target)) && n();
            };
            return (
              document.addEventListener("mousedown", t),
              () => {
                document.removeEventListener("mousedown", t);
              }
            );
          }, [n, e]);
        },
        lM = {
          "--pcm-overlay-background": "rgba(0,0,0,0.4)",
          "--pcm-modal-box-shadow": "0px 6px 20px 6px rgba(0, 0, 0, 0.1)",
          "--pcm-body-background": "#1C1D22",
          "--pcm-body-background-secondary": "#41424A",
          "--pcm-body-background-tertiary": "#232529",
          "--pcm-body-color": "#ffffff",
          "--pcm-body-color-secondary": "#8B8EA1",
          "--pcm-body-color-tertiary": "#42444B",
          "--pcm-body-action-color": "#808080",
          "--pcm-button-border-color": "#292B36",
          "--pcm-accent-color": "#A257FA",
          "--pcm-button-font-weight": "500",
          "--pcm-button-hover-shadow": "0px 2px 4px rgba(255, 255, 255, 0.05)",
          "--pcm-primary-button-color": "#000000",
          "--pcm-primary-button-bankground": "#FFFFFF",
          "--pcm-primary-button-hover-background": "#f5f5f5",
          "--pcm-secondary-button-color": "#FFFFFF",
          "--pcm-secondary-button-bankground": "#41424A",
          "--pcm-secondary-button-hover-background": "#5A5B66",
        },
        lC = {
          "--pcm-overlay-background": "rgba(71, 88, 107, 0.24)",
          "--pcm-modal-box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
          "--pcm-body-background": "#ffffff",
          "--pcm-body-background-secondary": "#EFF0F2",
          "--pcm-body-background-tertiary": "#F9F9FA",
          "--pcm-body-color": "#181B1E",
          "--pcm-body-color-secondary": "#8B8EA1",
          "--pcm-body-color-tertiary": "#DCDFE6",
          "--pcm-body-action-color": "#999999",
          "--pcm-button-border-color": "#EAECF0",
          "--pcm-accent-color": "#A257FA",
          "--pcm-button-font-weight": "500",
          "--pcm-button-hover-shadow": "0px 2px 4px rgba(0, 0, 0, 0.05)",
          "--pcm-primary-button-color": "#ffffff",
          "--pcm-primary-button-bankground": "#181B1E",
          "--pcm-primary-button-hover-background": "#353738",
          "--pcm-secondary-button-color": "#181B1E",
          "--pcm-secondary-button-bankground": "#EFF0F2",
          "--pcm-secondary-button-hover-background": "#D9DBDD",
        },
        lh = { base: { dark: lM, light: lC } },
        lx = (n) => {
          var e;
          let t =
            null !== (e = null == n ? void 0 : n.mode) && void 0 !== e
              ? e
              : t1();
          "auto" === t && (t = t1());
          let i = "light" === t ? lC : lM;
          i = lj({ ...ly.default, ...i }, (null == n ? void 0 : n.theme) || {});
          let o = {};
          return (
            (o.colorAccent = i["--pcm-accent-color"]),
            (o.colorPrimary = i["--pcm-body-background"]),
            (o.colorOnPrimary = i["--pcm-primary-button-color"]),
            (o.primaryButtonBackgroundColors = [
              i["--pcm-primary-button-bankground"],
              i["--pcm-primary-button-hover-background"],
            ]),
            (o.primaryIconButtonBackgroundColors = [
              i["--pcm-accent-color"],
              i["--pcm-accent-color"],
            ]),
            (o.primaryIconTextColor = i["--pcm-secondary-button-color"]),
            (o.primaryButtonTextColor = i["--pcm-primary-button-color"]),
            (o.cancelButtonBackgroundColor =
              i["--pcm-secondary-button-bankground"]),
            (o.backgroundColors = [
              i["--pcm-body-background-secondary"],
              [
                [i["--pcm-body-background"], i["--pcm-body-background"]],
                [i["--pcm-body-background"], i["--pcm-body-background"]],
              ],
            ]),
            (o.messageColors = [
              i["--pcm-success-color"],
              i["--pcm-error-color"],
            ]),
            (o.borderGlowColors = [
              i["--pcm-accent-color"],
              i["--pcm-body-color"],
            ]),
            (o.modalMaskBackgroundColor = i["--pcm-overlay-background"]),
            (o.cardBorderRadius = parseInt(i["--pcm-rounded-xl"])),
            {
              themeType: t,
              customStyle: { [t]: o },
              language: null == n ? void 0 : n.language,
            }
          );
        },
        lj = (n, e) => {
          let t = { ...n };
          return (
            Object.keys(e).forEach((n) => {
              Object.prototype.hasOwnProperty.call(e, n) &&
                "" !== e[n] &&
                (t[n] = e[n]);
            }),
            t
          );
        },
        lf = (n) => {
          var e;
          let t =
            null !== (e = null == n ? void 0 : n.mode) && void 0 !== e
              ? e
              : t1();
          "auto" === t && (t = t1());
          let i = "light" === t ? lC : lM;
          return {
            primaryBtnColor: (i = lj(
              { ...ly.default, ...i },
              (null == n ? void 0 : n.theme) || {}
            ))["--pcm-primary-button-color"],
            primaryBtnBackgroundColor: i["--pcm-primary-button-bankground"],
            textColor: i["--pcm-body-color"],
            secondaryTextColor: i["--pcm-body-color-secondary"],
            themeBackgroundColor: i["--pcm-body-background"],
            iconBorderColor: i["--pcm-button-border-color"],
            accentColor: i["--pcm-accent-color"],
            inputBackgroundColor: i["--pcm-body-background-secondary"],
            inputBorderColor: i["--pcm-button-border-color"],
            inputPlaceholderColor: i["--pcm-body-color-tertiary"],
            cardBorderColor: i["--pcm-button-border-color"],
            cardUnclickableBackgroundColor: i["--pcm-body-background-tertiary"],
            cardUnclickableBorderColor: i["--pcm-button-border-color"],
            cardDividerColor: i["--pcm-button-border-color"],
            tagBackgroundColor: i["--pcm-body-background-secondary"],
            modalBackgroundColor: i["--pcm-body-background"],
            tipsBackgroundColor: i["--pcm-body-background-secondary"],
            primaryBtnBorderRadius: i["--pcm-rounded-lg"],
            cardBorderRadius: i["--pcm-rounded-md"],
            modalBorderRadius: i["--pcm-rounded-lg"],
          };
        },
        ly = {
          default: {
            "--pcm-font-family":
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,\n    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',\n    'Segoe UI Symbol'",
            "--pcm-overlay-backdrop-filter": "blur(6px)",
            "--pcm-rounded-sm": "4px",
            "--pcm-rounded-md": "8px",
            "--pcm-rounded-lg": "11px",
            "--pcm-rounded-xl": "22px",
            "--pcm-rounded-full": "9999px",
            "--pcm-error-color": "#EA4335",
            "--pcm-error-background": oP("#EA4335", 0.2),
            "--pcm-success-color": "#58C08F",
            "--pcm-success-background": oP("#58C08F", 0.2),
            "--pcm-warning-color": "#F59E0A",
            "--pcm-warning-background": oP("#F59E0A", 0.2),
            "--pcm-wallet-lable-color": "#33C759",
            "--pcm-wallet-lable-background": oP("#33C759", 0.2),
          },
        },
        lm = { light: lh.base.light, dark: lh.base.dark },
        lw = (n, e) => {
          let t = e ? " !important" : "";
          return (0, x.AH)(
            eB(),
            Object.keys(n).map((e) => {
              let i = n[e];
              return i && "".concat(e, ":").concat(i).concat(t, ";");
            })
          );
        },
        lI = {
          default: lw(ly.default),
          light: lw(lm.light),
          dark: lw(lm.dark),
        },
        lN = (0, x.I4)(M.P.div)(
          eG(),
          lI.default,
          (n) =>
            "light" === n.$useMode
              ? lI.light
              : "dark" === n.$useMode
              ? lI.dark
              : (0, x.AH)(eR(), lI.light, lI.dark),
          (n) => {
            if (n.$useTheme) return lw(n.$useTheme, !0);
          },
          (n) => {
            if (n.$useTheme) {
              let e = {};
              return (
                n.$useTheme["--pcm-success-color"] &&
                  (e["--pcm-success-background"] = oP(
                    n.$useTheme["--pcm-success-color"],
                    0.2
                  )),
                n.$useTheme["--pcm-warning-color"] &&
                  (e["--pcm-warning-background"] = oP(
                    n.$useTheme["--pcm-warning-color"],
                    0.2
                  )),
                n.$useTheme["--pcm-error-color"] &&
                  (e["--pcm-error-background"] = oP(
                    n.$useTheme["--pcm-error-color"],
                    0.2
                  )),
                n.$useTheme["--pcm-wallet-lable-color"] &&
                  (e["--pcm-wallet-lable-background"] = oP(
                    n.$useTheme["--pcm-wallet-lable-color"],
                    0.2
                  )),
                lw(e, !0)
              );
            }
          }
        ),
        lD = [
          "AC",
          "AD",
          "AE",
          "AF",
          "AG",
          "AI",
          "AL",
          "AM",
          "AO",
          "AR",
          "AS",
          "AT",
          "AU",
          "AW",
          "AX",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BL",
          "BM",
          "BN",
          "BO",
          "BQ",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CC",
          "CD",
          "CF",
          "CG",
          "CH",
          "CI",
          "CK",
          "CL",
          "CM",
          "CN",
          "CO",
          "CR",
          "CU",
          "CV",
          "CW",
          "CX",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "EH",
          "ER",
          "ES",
          "ET",
          "FI",
          "FJ",
          "FK",
          "FM",
          "FO",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GF",
          "GG",
          "GH",
          "GI",
          "GL",
          "GM",
          "GN",
          "GP",
          "GQ",
          "GR",
          "GT",
          "GU",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IM",
          "IN",
          "IO",
          "IQ",
          "IR",
          "IS",
          "IT",
          "JE",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KP",
          "KR",
          "KW",
          "KY",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MF",
          "MG",
          "MH",
          "MK",
          "ML",
          "MM",
          "MN",
          "MO",
          "MP",
          "MQ",
          "MR",
          "MS",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NC",
          "NE",
          "NF",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NU",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PF",
          "PG",
          "PH",
          "PK",
          "PL",
          "PM",
          "PR",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RE",
          "RO",
          "RS",
          "RU",
          "RW",
          "SA",
          "SB",
          "SC",
          "SD",
          "SE",
          "SG",
          "SH",
          "SI",
          "SJ",
          "SK",
          "SL",
          "SM",
          "SN",
          "SO",
          "SR",
          "SS",
          "ST",
          "SV",
          "SX",
          "SY",
          "SZ",
          "TA",
          "TC",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TK",
          "TL",
          "TM",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VA",
          "VC",
          "VE",
          "VG",
          "VI",
          "VN",
          "VU",
          "WF",
          "WS",
          "XK",
          "YE",
          "YT",
          "ZA",
          "ZM",
          "ZW",
        ],
        lv = [
          ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
          ["Albania (Shqip\xebri)", "al", "355"],
          ["Algeria (‫الجزائر‬‎)", "dz", "213"],
          ["American Samoa", "as", "1684"],
          ["Andorra", "ad", "376"],
          ["Angola", "ao", "244"],
          ["Anguilla", "ai", "1264"],
          ["Antigua and Barbuda", "ag", "1268"],
          ["Argentina", "ar", "54"],
          ["Armenia (Հայաստան)", "am", "374"],
          ["Aruba", "aw", "297"],
          ["Australia", "au", "61"],
          ["Austria (\xd6sterreich)", "at", "43"],
          ["Azerbaijan (Azərbaycan)", "az", "994"],
          ["Bahamas", "bs", "1242"],
          ["Bahrain (‫البحرين‬‎)", "bh", "973"],
          ["Bangladesh (বাংলাদেশ)", "bd", "880"],
          ["Barbados", "bb", "1246"],
          ["Belarus (Беларусь)", "by", "375"],
          ["Belgium (Belgi\xeb)", "be", "32"],
          ["Belize", "bz", "501"],
          ["Benin (B\xe9nin)", "bj", "229"],
          ["Bermuda", "bm", "1441"],
          ["Bhutan (འབྲུག)", "bt", "975"],
          ["Bolivia", "bo", "591"],
          ["Bosnia and Herzegovina", "ba", "387"],
          ["Botswana", "bw", "267"],
          ["Brazil (Brasil)", "br", "55"],
          ["British Indian Ocean Territory", "io", "246"],
          ["British Virgin Islands", "vg", "1284"],
          ["Brunei", "bn", "673"],
          ["Bulgaria (България)", "bg", "359"],
          ["Burkina Faso", "bf", "226"],
          ["Burundi (Uburundi)", "bi", "257"],
          ["Cambodia (កម្ពុជា)", "kh", "855"],
          ["Cameroon (Cameroun)", "cm", "237"],
          ["Canada", "ca", "1"],
          ["Cape Verde (Kabu Verdi)", "cv", "238"],
          ["Caribbean Netherlands", "bq", "599"],
          ["Cayman Islands", "ky", "1345"],
          ["Central African Republic", "cf", "236"],
          ["Chad (Tchad)", "td", "235"],
          ["Chile", "cl", "56"],
          ["China (中国)", "cn", "86"],
          ["Christmas Island", "cx", "61"],
          ["Cocos (Keeling) Islands", "cc", "61"],
          ["Colombia", "co", "57"],
          ["Comoros (‫جزر القمر‬‎)", "km", "269"],
          ["Congo (DRC)", "cd", "243"],
          ["Congo (Republic)", "cg", "242"],
          ["Cook Islands", "ck", "682"],
          ["Costa Rica", "cr", "506"],
          ["C\xf4te d’Ivoire", "ci", "225"],
          ["Croatia (Hrvatska)", "hr", "385"],
          ["Cuba", "cu", "53"],
          ["Cura\xe7ao", "cw", "599"],
          ["Cyprus (Κύπρος)", "cy", "357"],
          ["Czech Republic (Česk\xe1 republika)", "cz", "420"],
          ["Denmark (Danmark)", "dk", "45"],
          ["Djibouti", "dj", "253"],
          ["Dominica", "dm", "1767"],
          ["Dominican Republic", "do", "1"],
          ["Ecuador", "ec", "593"],
          ["Egypt (‫مصر‬‎)", "eg", "20"],
          ["El Salvador", "sv", "503"],
          ["Equatorial Guinea", "gq", "240"],
          ["Eritrea", "er", "291"],
          ["Estonia (Eesti)", "ee", "372"],
          ["Ethiopia", "et", "251"],
          ["Falkland Islands (Islas Malvinas)", "fk", "500"],
          ["Faroe Islands (F\xf8royar)", "fo", "298"],
          ["Fiji", "fj", "679"],
          ["Finland (Suomi)", "fi", "358"],
          ["France", "fr", "33"],
          ["French Guiana", "gf", "594"],
          ["French Polynesia", "pf", "689"],
          ["Gabon", "ga", "241"],
          ["Gambia", "gm", "220"],
          ["Georgia (საქართველო)", "ge", "995"],
          ["Germany (Deutschland)", "de", "49"],
          ["Ghana (Gaana)", "gh", "233"],
          ["Gibraltar", "gi", "350"],
          ["Greece (Ελλάδα)", "gr", "30"],
          ["Greenland (Kalaallit Nunaat)", "gl", "299"],
          ["Grenada", "gd", "1473"],
          ["Guadeloupe", "gp", "590"],
          ["Guam", "gu", "1671"],
          ["Guatemala", "gt", "502"],
          ["Guernsey", "gg", "44"],
          ["Guinea (Guin\xe9e)", "gn", "224"],
          ["Guinea-Bissau (Guin\xe9 Bissau)", "gw", "245"],
          ["Guyana", "gy", "592"],
          ["Haiti", "ht", "509"],
          ["Honduras", "hn", "504"],
          ["Hong Kong (香港)", "hk", "852"],
          ["Hungary (Magyarorsz\xe1g)", "hu", "36"],
          ["Iceland (\xcdsland)", "is", "354"],
          ["India (भारत)", "in", "91"],
          ["Indonesia", "id", "62"],
          ["Iran (‫ایران‬‎)", "ir", "98"],
          ["Iraq (‫العراق‬‎)", "iq", "964"],
          ["Ireland", "ie", "353"],
          ["Isle of Man", "im", "44"],
          ["Israel (‫ישראל‬‎)", "il", "972"],
          ["Italy (Italia)", "it", "39"],
          ["Jamaica", "jm", "1876"],
          ["Japan (日本)", "jp", "81"],
          ["Jersey", "je", "44"],
          ["Jordan (‫الأردن‬‎)", "jo", "962"],
          ["Kazakhstan (Казахстан)", "kz", "7"],
          ["Kenya", "ke", "254"],
          ["Kiribati", "ki", "686"],
          ["Kosovo", "xk", "383"],
          ["Kuwait (‫الكويت‬‎)", "kw", "965"],
          ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
          ["Laos (ລາວ)", "la", "856"],
          ["Latvia (Latvija)", "lv", "371"],
          ["Lebanon (‫لبنان‬‎)", "lb", "961"],
          ["Lesotho", "ls", "266"],
          ["Liberia", "lr", "231"],
          ["Libya (‫ليبيا‬‎)", "ly", "218"],
          ["Liechtenstein", "li", "423"],
          ["Lithuania (Lietuva)", "lt", "370"],
          ["Luxembourg", "lu", "352"],
          ["Macau (澳門)", "mo", "853"],
          ["Macedonia (FYROM) (Македонија)", "mk", "389"],
          ["Madagascar (Madagasikara)", "mg", "261"],
          ["Malawi", "mw", "265"],
          ["Malaysia", "my", "60"],
          ["Maldives", "mv", "960"],
          ["Mali", "ml", "223"],
          ["Malta", "mt", "356"],
          ["Marshall Islands", "mh", "692"],
          ["Martinique", "mq", "596"],
          ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
          ["Mauritius (Moris)", "mu", "230"],
          ["Mayotte", "yt", "262"],
          ["Mexico (M\xe9xico)", "mx", "52"],
          ["Micronesia", "fm", "691"],
          ["Moldova (Republica Moldova)", "md", "373"],
          ["Monaco", "mc", "377"],
          ["Mongolia (Монгол)", "mn", "976"],
          ["Montenegro (Crna Gora)", "me", "382"],
          ["Montserrat", "ms", "1664"],
          ["Morocco (‫المغرب‬‎)", "ma", "212"],
          ["Mozambique (Mo\xe7ambique)", "mz", "258"],
          ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
          ["Namibia (Namibi\xeb)", "na", "264"],
          ["Nauru", "nr", "674"],
          ["Nepal (नेपाल)", "np", "977"],
          ["Netherlands (Nederland)", "nl", "31"],
          ["New Caledonia (Nouvelle-Cal\xe9donie)", "nc", "687"],
          ["New Zealand", "nz", "64"],
          ["Nicaragua", "ni", "505"],
          ["Niger (Nijar)", "ne", "227"],
          ["Nigeria", "ng", "234"],
          ["Niue", "nu", "683"],
          ["Norfolk Island", "nf", "672"],
          ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
          ["Northern Mariana Islands", "mp", "1670"],
          ["Norway (Norge)", "no", "47"],
          ["Oman (‫عُمان‬‎)", "om", "968"],
          ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
          ["Palau", "pw", "680"],
          ["Palestine (‫فلسطين‬‎)", "ps", "970"],
          ["Panama (Panam\xe1)", "pa", "507"],
          ["Papua New Guinea", "pg", "675"],
          ["Paraguay", "py", "595"],
          ["Peru (Per\xfa)", "pe", "51"],
          ["Philippines", "ph", "63"],
          ["Poland (Polska)", "pl", "48"],
          ["Portugal", "pt", "351"],
          ["Puerto Rico", "pr", "1"],
          ["Qatar (‫قطر‬‎)", "qa", "974"],
          ["R\xe9union (La R\xe9union)", "re", "262"],
          ["Romania (Rom\xe2nia)", "ro", "40"],
          ["Russia (Россия)", "ru", "7"],
          ["Rwanda", "rw", "250"],
          ["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)", "bl", "590"],
          ["Saint Helena", "sh", "290"],
          ["Saint Kitts and Nevis", "kn", "1869"],
          ["Saint Lucia", "lc", "1758"],
          ["Saint Martin", "mf", "590"],
          ["Saint Pierre and Miquelon", "pm", "508"],
          ["Saint Vincent and the Grenadines", "vc", "1784"],
          ["Samoa", "ws", "685"],
          ["San Marino", "sm", "378"],
          ["S\xe3o Tom\xe9 and Pr\xedncipe", "st", "239"],
          ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
          ["Senegal (S\xe9n\xe9gal)", "sn", "221"],
          ["Serbia (Србија)", "rs", "381"],
          ["Seychelles", "sc", "248"],
          ["Sierra Leone", "sl", "232"],
          ["Singapore", "sg", "65"],
          ["Sint Maarten", "sx", "1721"],
          ["Slovakia (Slovensko)", "sk", "421"],
          ["Slovenia (Slovenija)", "si", "386"],
          ["Solomon Islands", "sb", "677"],
          ["Somalia (Soomaaliya)", "so", "252"],
          ["South Africa", "za", "27"],
          ["South Korea (대한민국)", "kr", "82"],
          ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
          ["Spain (Espa\xf1a)", "es", "34"],
          ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
          ["Sudan (‫السودان‬‎)", "sd", "249"],
          ["Suriname", "sr", "597"],
          ["Svalbard and Jan Mayen", "sj", "47"],
          ["Swaziland", "sz", "268"],
          ["Sweden (Sverige)", "se", "46"],
          ["Switzerland (Schweiz)", "ch", "41"],
          ["Syria (‫سوريا‬‎)", "sy", "963"],
          ["Taiwan (台灣)", "tw", "886"],
          ["Tajikistan", "tj", "992"],
          ["Tanzania", "tz", "255"],
          ["Thailand (ไทย)", "th", "66"],
          ["Timor-Leste", "tl", "670"],
          ["Togo", "tg", "228"],
          ["Tokelau", "tk", "690"],
          ["Tonga", "to", "676"],
          ["Trinidad and Tobago", "tt", "1868"],
          ["Tunisia (‫تونس‬‎)", "tn", "216"],
          ["Turkey (T\xfcrkiye)", "tr", "90"],
          ["Turkmenistan", "tm", "993"],
          ["Turks and Caicos Islands", "tc", "1649"],
          ["Tuvalu", "tv", "688"],
          ["U.S. Virgin Islands", "vi", "1340"],
          ["Uganda", "ug", "256"],
          ["Ukraine (Україна)", "ua", "380"],
          ["United Arab Emirates", "ae", "971"],
          ["United Kingdom", "gb", "44"],
          ["United States", "us", "1"],
          ["Uruguay", "uy", "598"],
          ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
          ["Vanuatu", "vu", "678"],
          ["Vatican City (Citt\xe0 del Vaticano)", "va", "39"],
          ["Venezuela", "ve", "58"],
          ["Vietnam (Việt Nam)", "vn", "84"],
          ["Wallis and Futuna", "wf", "681"],
          ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212"],
          ["Yemen (‫اليمن‬‎)", "ye", "967"],
          ["Zambia", "zm", "260"],
          ["Zimbabwe", "zw", "263"],
          ["\xc5land Islands", "ax", "358"],
        ],
        lk = x.I4.div(e$(), (n) => {
          let { top: e } = n;
          return e || 46;
        }),
        lL = x.I4.div(eJ()),
        lT = x.I4.div(eK(), (n) => {
          let { selected: e } = n;
          return (
            e &&
            "\n    .chain-name {\n      color: #a257fa;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 34px;\n      left: 0;\n      top: 0px;\n      background-color: var(--pcm-accent-color);\n      opacity: 0.2;\n      border-radius: var(--pcm-rounded-sm);\n    }\n  "
          );
        }),
        lb = x.I4.div(eX()),
        lA = x.I4.div(eq()),
        lz = x.I4.div(
          e1(),
          (n) => {
            let { index: e, $source: t } = n;
            return "countryList" === t ? 46 * e + 8 : 36 * e + 9;
          },
          (n) => {
            let { $source: e } = n;
            return "countryList" === e ? "46px" : "34px";
          },
          (n) => {
            let { index: e } = n;
            return -1 === e ? "none" : "block";
          }
        ),
        lE = (0, s.forwardRef)((n, e) => {
          let {
              trigger: t,
              content: i,
              dropdownWidth: o,
              dropdownHeight: r,
              offsetX: l = 0,
              offsetY: a = 0,
              onChange: c,
            } = n,
            [d, u] = (0, s.useState)(!1),
            p = (0, s.useRef)(null),
            g = (0, s.useRef)(null),
            M = () => {
              if (p.current && g.current) {
                let n = p.current.getBoundingClientRect();
                window.innerHeight - n.bottom < r
                  ? (g.current.style.top = "".concat(n.top - r - a, "px"))
                  : (g.current.style.top = "".concat(n.bottom + a, "px")),
                  (g.current.style.left = "".concat(n.left, "px"));
              }
            };
          (0, s.useEffect)(
            () => (
              d &&
                (M(),
                window.addEventListener("scroll", M, !0),
                window.addEventListener("resize", M),
                document.addEventListener("mousedown", x)),
              () => {
                window.removeEventListener("scroll", M, !0),
                  window.removeEventListener("resize", M),
                  document.removeEventListener("mousedown", x);
              }
            ),
            [d, l]
          );
          let h = () => {
              u(!d), c && c(!d);
            },
            x = (n) => {
              g.current &&
                !g.current.contains(n.target) &&
                p.current &&
                !p.current.contains(n.target) &&
                h();
            };
          return (
            (0, s.useImperativeHandle)(e, () => ({ toggleDropdown: h })),
            (0, C.jsxs)(C.Fragment, {
              children: [
                (0, C.jsx)("div", {
                  ref: p,
                  onClick: h,
                  className: "aaaaaaa",
                  children: t,
                }),
                d &&
                  (0, N.createPortal)(
                    (0, C.jsx)("div", {
                      ref: g,
                      style: {
                        transform: "translateX(-11px)",
                        width: "".concat(o, "px"),
                        height: "".concat(r, "px"),
                        position: "fixed",
                        opacity: 1,
                        zIndex: 0x16345785d89fc20,
                      },
                      children: i,
                    }),
                    document.body
                  ),
              ],
            })
          );
        }),
        lO = x.I4.div(e0()),
        lS = x.I4.div(
          e2(),
          (n) => {
            let { error: e } = n;
            return e
              ? "var(--pcm-error-background)"
              : "var(--pcm-body-background-tertiary)";
          },
          (n) => {
            let { $inputFocus: e } = n;
            return e
              ? "outline: 1px solid var(--pcm-focus-color, var(--pcm-accent-color));"
              : "";
          }
        ),
        lU = x.I4.div(e4()),
        lZ = x.I4.label(e3(), (n) => {
          let { error: e } = n;
          return e ? "#EA4335" : "#000";
        }),
        lF = x.I4.div(e5()),
        lP = x.I4.div(e6()),
        lQ = x.I4.div(e9()),
        lV = x.I4.div(e7()),
        lH = x.I4.div(
          e8(),
          (n) => {
            let { $maxHeight: e } = n;
            return e || 300;
          },
          (n) => {
            let { listposition: e } = n;
            return "top" === e ? "bottom: 56px;" : "top: 20px;";
          }
        ),
        lY = x.I4.div(tn(), (n) => {
          let { $hoverBgColor: e } = n;
          return e || "var(--pcm-body-color-tertiary)";
        }),
        l_ = x.I4.input(te()),
        lW = x.I4.div(tt()),
        lB = x.I4.div(ti()),
        lR = x.I4.span(to()),
        lG = x.I4.div(tr()),
        l$ = x.I4.div(tl()),
        lJ = () => {
          var n;
          let { appearance: e } = sd(),
            { navigate: t } = oh(),
            i = it(),
            [o, r] = (0, s.useState)([]),
            [l, a] = (0, s.useState)(""),
            [c, d] = (0, s.useState)(!1),
            [u, p] = (0, s.useState)(""),
            [g, M] = (0, s.useState)(""),
            [h, x] = (0, s.useState)(!1),
            [j, f] = (0, s.useState)("bottom"),
            [y, m] = (0, s.useState)(300),
            [w, N] = (0, s.useState)(-1),
            [D, v] = (0, s.useState)(!1),
            k = (0, s.useRef)(null),
            L = (0, s.useRef)(null),
            T = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            A = (0, s.useRef)(null),
            z = (0, s.useRef)(),
            E = (0, s.useRef)(null),
            O = oj("particleAuth"),
            S = async () => {
              try {
                if (l) {
                  let n = o[1],
                    r = o[2];
                  if (r) {
                    if (l) {
                      if (oF(n, r, l, i)) {
                        x(!0);
                        let n = await (null == O
                          ? void 0
                          : O.auth.getCloudflareTurnstileResponse({
                              theme: e.mode || "lgiht",
                              getContainer: b.current,
                              language: e.language || "en",
                            }));
                        await (null == O
                          ? void 0
                          : O.auth.getConnectCaptcha({
                              phone: "+".concat(r).concat(l),
                              cf_turnstile_response: n,
                            })),
                          t("captcha", {
                            value: "+".concat(r).concat(l),
                            type: "phone",
                          });
                      }
                    } else throw Error(i.enterPhoneNumber);
                  } else throw Error("Please select a country code");
                }
              } catch (t) {
                var n;
                let e =
                  (null == t
                    ? void 0
                    : null === (n = t.extra) || void 0 === n
                    ? void 0
                    : n[0]) ||
                  t.message ||
                  ("string" == typeof t ? t : i.networkError);
                e.includes("phone must be a valid")
                  ? (e = i.invalidOrIncorrectNumberMistype)
                  : e.includes("Network Error") && (e = i.networkError),
                  M(e);
              }
              x(!1);
            },
            U = (0, s.useMemo)(() => {
              let n = lD;
              return (
                (null == e ? void 0 : e.filterCountryCallingCode) &&
                  (n = null == e ? void 0 : e.filterCountryCallingCode(lD)),
                null == n || n.length,
                n
                  .map((n) =>
                    lv.find((e) => {
                      var t;
                      return (
                        (null === (t = e[1]) || void 0 === t
                          ? void 0
                          : t.toLowerCase()) ===
                        (null == n ? void 0 : n.toLowerCase())
                      );
                    })
                  )
                  .filter((n) => !!n)
              );
            }, []),
            Z = (0, s.useMemo)(
              () =>
                U.filter((n) =>
                  n.join("+").toLowerCase().includes(u.toLowerCase())
                ),
              [U, u]
            ),
            F = (0, s.useMemo)(
              () => (null == e ? void 0 : e.hideContinueButton),
              [e]
            ),
            P = (0, s.useMemo)(() => {
              try {
                if (!o[1] || !o[2] || !l) return !0;
                return !oF(o[1], o[2], l, i);
              } catch (n) {}
              return !0;
            }, [o, l, i]),
            Q = (0, s.useMemo)(() => {
              var n;
              return (function (n, e) {
                if (!n) return "";
                if (
                  (3 === (n = n.replace(/^#/, "")).length &&
                    (n = n
                      .split("")
                      .map((n) => n + n)
                      .join("")),
                  !/^[0-9A-Fa-f]{6}$/.test(n))
                )
                  throw Error("Invalid hex color format");
                let t = parseInt(n.slice(0, 2), 16),
                  i = parseInt(n.slice(2, 4), 16),
                  o = parseInt(n.slice(4, 6), 16);
                return "rgba("
                  .concat(t, ", ")
                  .concat(i, ", ")
                  .concat(o, ", ")
                  .concat(e, ")");
              })(
                (null === (n = e.theme) || void 0 === n
                  ? void 0
                  : n["--pcm-accent-color"]) || "#A257FA",
                0.1
              );
            }, [e]);
          return (
            lg(() => {
              d(!1);
            }, [k, T]),
            (0, s.useEffect)(() => {
              c && p("");
            }, [c]),
            (0, s.useEffect)(() => {
              let n =
                  navigator.languages && navigator.languages.length
                    ? navigator.languages[0]
                    : navigator.language,
                e = null == n ? void 0 : n.split("-"),
                t =
                  (e || []).length > 1
                    ? null == e
                      ? void 0
                      : e[1]
                    : null == e
                    ? void 0
                    : e[0];
              if (U.length && t && t.length > 0) {
                let n =
                  lv.find((n) => {
                    var e;
                    return (
                      (null == n
                        ? void 0
                        : null === (e = n[1]) || void 0 === e
                        ? void 0
                        : e.toUpperCase()) === t
                    );
                  }) || [];
                n &&
                U.find((e) => {
                  var t, i;
                  return (
                    (null === (t = e[1]) || void 0 === t
                      ? void 0
                      : t.toLowerCase()) ===
                    (null == n
                      ? void 0
                      : null === (i = n[1]) || void 0 === i
                      ? void 0
                      : i.toLowerCase())
                  );
                })
                  ? r(n)
                  : r(U[0]);
              }
            }, [U]),
            (0, s.useEffect)(() => {
              let { topDistance: n, bottomDistance: e } =
                (function (n) {
                  if (!n.current) return null;
                  let e = n.current,
                    t = e.parentElement;
                  if (!t) return null;
                  let i = e.getBoundingClientRect(),
                    o = t.getBoundingClientRect(),
                    r = i.top - o.top,
                    l = o.bottom - i.bottom;
                  return {
                    width: i.width,
                    height: i.height,
                    topDistance: r,
                    bottomDistance: l,
                  };
                })(A) || {};
              if ((e && n && e > n) || (e || 0) > 200) {
                f("bottom");
                let n = (e || 0) + 40;
                m(n > 300 ? 300 : n);
              } else {
                f("top");
                let e = (n || 0) - 10;
                m(e > 300 ? 300 : e);
              }
            }, []),
            (0, C.jsxs)(lO, {
              ref: A,
              children: [
                (0, C.jsxs)(la, {
                  children: [
                    (0, C.jsx)(lS, {
                      error: g,
                      $inputFocus: D,
                      children: (0, C.jsxs)(lU, {
                        children: [
                          (0, C.jsx)(lF, {
                            children: (0, C.jsxs)(lP, {
                              children: [
                                (0, C.jsx)(lE, {
                                  ref: E,
                                  onChange: () => {
                                    p(""), N(-1);
                                  },
                                  trigger: (0, C.jsxs)(lQ, {
                                    children: [
                                      (0, C.jsx)("div", {
                                        children: (0, I.A)("".concat(o[1])),
                                      }),
                                      (0, C.jsx)(lV, {
                                        children: (0, C.jsx)(iu, {}),
                                      }),
                                    ],
                                  }),
                                  content: (0, C.jsx)(lN, {
                                    $useTheme: null == e ? void 0 : e.theme,
                                    $useMode: null == e ? void 0 : e.mode,
                                    suppressHydrationWarning: !0,
                                    children: (0, C.jsxs)(lH, {
                                      ref: T,
                                      listposition: j,
                                      $maxHeight: y,
                                      children: [
                                        U.length > 6 &&
                                          (0, C.jsx)(lY, {
                                            className: "search-input-wrap",
                                            onClick: (n) => {
                                              n.stopPropagation();
                                            },
                                            children: (0, C.jsx)("div", {
                                              className: "wrap",
                                              children: (0, C.jsx)(l_, {
                                                ref: L,
                                                autoComplete: "off",
                                                type: "text",
                                                placeholder:
                                                  i.searchByNameOrCode,
                                                onChange: (n) => {
                                                  var e;
                                                  p(
                                                    (null == n
                                                      ? void 0
                                                      : null ===
                                                          (e = n.target) ||
                                                        void 0 === e
                                                      ? void 0
                                                      : e.value) || ""
                                                  );
                                                },
                                              }),
                                            }),
                                          }),
                                        Z && Z.length
                                          ? (0, C.jsxs)(lL, {
                                              style: {
                                                flex: 1,
                                                overflowY: "auto",
                                                maxHeight: "280px",
                                              },
                                              children: [
                                                (0, C.jsx)(lz, {
                                                  index: w,
                                                  $source: "countryList",
                                                }),
                                                Z.map((n, e) =>
                                                  (0, C.jsxs)(
                                                    lY,
                                                    {
                                                      onClick: () => {
                                                        var e, t;
                                                        r(n),
                                                          M(""),
                                                          d(!1),
                                                          null == E ||
                                                            null ===
                                                              (t = E.current) ||
                                                            void 0 === t ||
                                                            null ===
                                                              (e =
                                                                t.toggleDropdown) ||
                                                            void 0 === e ||
                                                            e.call(t);
                                                      },
                                                      $hoverBgColor: Q,
                                                      onMouseEnter: () => {
                                                        clearTimeout(z.current),
                                                          N(e);
                                                      },
                                                      onMouseLeave: () => {
                                                        z.current = setTimeout(
                                                          () => {
                                                            N(-1);
                                                          },
                                                          100
                                                        );
                                                      },
                                                      children: [
                                                        (0, C.jsxs)(lW, {
                                                          children: [
                                                            (0, C.jsx)(lB, {
                                                              children: (0,
                                                              I.A)(
                                                                "".concat(n[1])
                                                              ),
                                                            }),
                                                            (0, C.jsx)(lR, {
                                                              children: n[0],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.jsx)(lG, {
                                                          children: "+" + n[2],
                                                        }),
                                                      ],
                                                    },
                                                    ""
                                                      .concat(n[0], "-")
                                                      .concat(n[1], "-")
                                                      .concat(n[2])
                                                  )
                                                ),
                                              ],
                                            })
                                          : (0, C.jsx)(l$, {
                                              children: i.noData,
                                            }),
                                      ],
                                    }),
                                  }),
                                  offsetY: 20,
                                  dropdownWidth:
                                    ((null == A
                                      ? void 0
                                      : null === (n = A.current) || void 0 === n
                                      ? void 0
                                      : n.clientWidth) || 300) - 2,
                                  dropdownHeight: 300,
                                  offsetX: 0,
                                }),
                                (0, C.jsxs)("span", { children: ["+", o[2]] }),
                              ],
                            }),
                          }),
                          (0, C.jsx)(lZ, {
                            error: g,
                            children: (0, C.jsx)("input", {
                              placeholder: i.phoneNumber,
                              onChange: (n) => {
                                var e;
                                a(
                                  (null === (e = n.target.value) || void 0 === e
                                    ? void 0
                                    : e.trim()) || ""
                                ),
                                  M("");
                              },
                              onKeyDown: (n) => {
                                "Enter" !== n.key ||
                                  P ||
                                  (n.preventDefault(), S());
                              },
                              onFocus: () => {
                                v(!0);
                              },
                              onBlur: () => {
                                v(!1);
                              },
                            }),
                          }),
                        ],
                      }),
                    }),
                    F &&
                      (0, C.jsx)(ls, {
                        onClick: () => {
                          h || P || S();
                        },
                        disabled: P,
                        $canClick: (null == l ? void 0 : l.length) >= 1,
                        $isError: !!g,
                        children: (0, C.jsx)(iS, {
                          logo: (0, C.jsx)("div", {
                            className: "icon-0x7ff",
                            children: (0, C.jsx)(iv, {}),
                          }),
                          connecting: h,
                          inset: 0,
                          width: 30,
                          height: 30,
                        }),
                      }),
                  ],
                }),
                g &&
                  (0, C.jsxs)(ld, {
                    children: [
                      (0, C.jsx)("div", { children: (0, C.jsx)(id, {}) }),
                      (0, C.jsx)("div", { children: g }),
                    ],
                  }),
                (0, C.jsx)("div", {
                  ref: b,
                  children:
                    !F &&
                    (0, C.jsx)(rh, {
                      style: { marginTop: 16 },
                      onClick: S,
                      loading: h,
                      disabled: P,
                      children: i.continue,
                    }),
                }),
              ],
            })
          );
        },
        lK = (0, x.I4)(M.P.img)(ta()),
        lX = (0, x.I4)(M.P.div)(ts()),
        lq = (n, e, t) => {
          if (n) t.includes(e) || t.push(e);
          else {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1);
          }
        },
        l1 = (n) => {
          let { toggleEmailOrPhone: e, setToggleEmailOrPhone: t } = n,
            i = it();
          return (0, C.jsxs)(lX, {
            children: [
              (0, C.jsx)("span", {
                children: "phone" === e ? i.preferEmail : i.preferPhone,
              }),
              (0, C.jsx)("span", {
                onClick: () => {
                  t((n) => ("email" === n ? "phone" : "email"));
                },
                children: "phone" === e ? i.useEmail : i.usePhone,
              }),
            ],
          });
        };
      function l0(n) {
        return n.state.chainId;
      }
      var l2 = () => {
          let { config: n } = sa(),
            { connector: e } = t3();
          return (0, s.useMemo)(() => {
            let t = null == e ? void 0 : e.walletConnectorType;
            if (t) {
              let e = n.getWalletConnector(t);
              if (e) return e.chains;
            }
            return n.chains;
          }, [e, n]);
        },
        l4 = [];
      function l3(n) {
        if ("reconnecting" === n.state.status) return l4;
        let e = [...n.state.connections.values()],
          t = n.state.current;
        return (e.sort((n, e) =>
          n.connector.uid === t ? -1 : e.connector.uid === t ? 1 : 0
        ),
        t0(l4, e))
          ? l4
          : ((l4 = e), e);
      }
      function l5() {
        let { config: n } = sa();
        return (0, s.useSyncExternalStore)(
          (e) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n.subscribe(() => l3(n), t, { equalityFn: t0 });
            })(n, { onChange: e }),
          () => l3(n),
          () => l3(n)
        );
      }
      async function l6(n, e) {
        var t;
        let { connector: i } = e,
          o = n.state.connections.get(i.uid);
        if (!o) throw new j.gC();
        return (
          await (null === (t = n.storage) || void 0 === t
            ? void 0
            : t.setItem("recentConnectorId", i.id)),
          n.setState((n) => ({ ...n, current: i.uid })),
          { accounts: o.accounts, chainId: o.chainId }
        );
      }
      async function l9(n, e) {
        var t, i;
        let { addEthereumChainParameter: o, chainId: r } = e,
          l = n.state.connections.get(
            null !==
              (i =
                null === (t = e.connector) || void 0 === t ? void 0 : t.uid) &&
              void 0 !== i
              ? i
              : n.state.current
          );
        if (l) {
          let n = l.connector;
          if (!n.switchChain) throw new j.VF({ connector: n });
          return await n.switchChain({
            addEthereumChainParameter: o,
            chainId: r,
          });
        }
        let a = n.chains.find((n) => n.id === r);
        if (!a) throw new j.nk();
        return n.setState((n) => ({ ...n, chainId: r })), a;
      }
      var l7 = (n) => {
          let { config: e } = sa(),
            {
              status: t,
              data: i,
              error: o,
              mutate: r,
              mutateAsync: l,
            } = od(async (n) => await l9(e, n), n);
          return {
            status: t,
            data: i,
            error: o,
            switchChain: r,
            switchChainAsync: l,
          };
        },
        l8 = () => {
          let n = l5(),
            e = rn(),
            { config: t } = sa(),
            { lastConnectorId: i } = oc();
          return (0, s.useMemo)(() => {
            let o = [];
            for (let l of n) {
              let n = l.connector.id,
                a = e.find((e) => {
                  var t;
                  return (
                    e.id === n ||
                    (null === (t = e.groupId) || void 0 === t
                      ? void 0
                      : t
                          .split(",")
                          .map((n) => n.trim())
                          .includes(n))
                  );
                });
              if (a) {
                if ("particleAuth" === l.connector.type) {
                  var r;
                  let n =
                    sp[
                      null === (r = t.getWalletConnector("particleAuth")) ||
                      void 0 === r
                        ? void 0
                        : r.auth.getLatestAuthType()
                    ];
                  n && (a.icon = (0, C.jsx)(n, {}));
                } else if (
                  "walletConnect" === a.connector.id &&
                  i &&
                  i !== a.connector.id
                ) {
                  let n = e.find((n) => {
                    var e;
                    return (
                      n.id === i ||
                      (null === (e = n.groupId) || void 0 === e
                        ? void 0
                        : e
                            .split(",")
                            .map((n) => n.trim())
                            .includes(i))
                    );
                  });
                  (null == n ? void 0 : n.icon) && (a.icon = n.icon);
                }
                o.push({
                  accounts: l.accounts,
                  chainId: l.chainId,
                  walletProps: a,
                });
              }
            }
            return o;
          }, [n, e, t, i]);
        },
        an = (n) => {
          let {
              visible: e,
              setVisible: t,
              clickAwayElements: i,
              maxHeight: o,
              supportChain: r = !0,
              top: l,
            } = n,
            a = l2(),
            c = (function () {
              let { config: n } = sa();
              return (0, s.useSyncExternalStore)(
                (e) =>
                  (function (n, e) {
                    let { onChange: t } = e;
                    return n.subscribe((n) => n.chainId, t);
                  })(n, { onChange: e }),
                () => l0(n),
                () => l0(n)
              );
            })(),
            { switchChainAsync: d, status: u } = l7(),
            [p] = l8(),
            { switchAccountAsync: x } = (function (n) {
              let { config: e } = sa(),
                {
                  mutate: t,
                  mutateAsync: i,
                  ...o
                } = od(async (n) => await l6(e, n), void 0);
              return {
                ...o,
                connectors: l5().map((n) => n.connector),
                switchAccount: t,
                switchAccountAsync: i,
              };
            })(),
            j = oM(),
            { connectAsync: f } = ou(),
            y = l5(),
            [m, w] = (0, s.useState)(-1),
            [I, N] = (0, s.useState)(),
            D = (0, s.useRef)(null),
            v = (0, s.useRef)(),
            k = (0, s.useRef)(null),
            L = (0, s.useRef)(null),
            T = (0, s.useMemo)(
              () =>
                !!(
                  p &&
                  "particleAuth" === p.walletProps.connector.walletConnectorType
                ),
              [p]
            ),
            b = (0, s.useMemo)(() => (r ? c : -1), [c, r]),
            A = (0, s.useMemo)(() => I === b, [I, b]),
            z = (0, s.useMemo)(() => {
              if (!a || null == a || !a.length || !b) return "";
              {
                let n = a.find((n) => n.id === b);
                return n ? (0, g.Wc)(n) : "";
              }
            }, [a, b]);
          return (
            (0, s.useEffect)(() => {
              A && e && (t(!1), N(void 0));
            }, [A, e, t]),
            (0, s.useEffect)(() => {}, [b]),
            lg(() => {
              t(!1);
            }, [D, ...i]),
            (0, s.useEffect)(() => {
              setTimeout(() => {
                if (e && k.current && L.current) {
                  let n = k.current,
                    e = L.current,
                    t = n.clientHeight,
                    i = e.clientHeight,
                    o = e.offsetTop,
                    r = n.scrollTop;
                  (o < r || o + i > r + t) && (n.scrollTop = o - t / 2 + i / 2);
                }
              }, 50);
            }, [e, b]),
            (0, C.jsx)(lk, {
              ref: D,
              top: l || 46,
              children: (0, C.jsx)(h.N, {
                children:
                  e &&
                  (0, C.jsx)(M.P.div, {
                    style: { overflow: "hidden" },
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    children: (0, C.jsxs)(lL, {
                      ref: k,
                      style: { maxHeight: o || 320 },
                      children: [
                        (0, C.jsx)(lz, { index: m }),
                        a.map((n) =>
                          (0, C.jsxs)(
                            lT,
                            {
                              selected: b === n.id,
                              ref: b === n.id ? L : null,
                              onClick: async () => {
                                try {
                                  if (n.id === b) return;
                                  if ((N(n.id), T && (0, g.Wc)(n) !== z)) {
                                    let t = (0, g.GV)(n)
                                        ? "particleEVM"
                                        : "particleSolana",
                                      o = j.find((n) => n.id === t);
                                    if (await o.isAuthorized()) {
                                      if (y.some((n) => n.connector.id === t))
                                        await x({ connector: o });
                                      else {
                                        await f({
                                          connector: o,
                                          chainId: n.id,
                                        });
                                        return;
                                      }
                                    } else {
                                      var e, i;
                                      let t = (0, g.GV)(n)
                                        ? null === (e = window.particle) ||
                                          void 0 === e
                                          ? void 0
                                          : e.ethereum
                                        : null === (i = window.particle) ||
                                          void 0 === i
                                        ? void 0
                                        : i.solana;
                                      await t.connect(),
                                        await f({
                                          connector: o,
                                          chainId: n.id,
                                        });
                                      return;
                                    }
                                  }
                                  await d({ chainId: n.id });
                                } catch (n) {
                                  t(!1), N(void 0);
                                }
                              },
                              onMouseEnter: () => {
                                clearTimeout(v.current),
                                  w(a.findIndex((e) => e.id === n.id));
                              },
                              onMouseLeave: () => {
                                v.current = setTimeout(() => {
                                  w(-1);
                                }, 100);
                              },
                              children: [
                                (0, C.jsx)("div", {
                                  style: { marginRight: "10px" },
                                  children: (0, C.jsx)(iS, {
                                    inset: 0,
                                    width: 20,
                                    height: 20,
                                    connecting: !!(
                                      !A &&
                                      "loading" === u &&
                                      n.id === I
                                    ),
                                    logo: (0, C.jsx)("img", {
                                      src: (0, g.NO)(n),
                                      alt: n.name,
                                    }),
                                  }),
                                }),
                                (0, C.jsx)(lA, { children: r3(n) }),
                                (0, C.jsx)(lb, {
                                  children: b === n.id && (0, C.jsx)(ih, {}),
                                }),
                              ],
                            },
                            n.id
                          )
                        ),
                      ],
                    }),
                  }),
              }),
            })
          );
        };
      x.I4.div(tc()),
        x.I4.div(td()),
        x.I4.div(
          tu(),
          (n) => (n.selected ? "pointer" : "default"),
          (n) =>
            n.selected &&
            "\n    &:hover {\n      background-color: var(--pcm-body-background-secondary);\n    }\n  "
        ),
        x.I4.img(tp()),
        x.I4.div(tg()),
        x.I4.div(tM()),
        x.I4.div(tC()),
        x.I4.div(th()),
        x.I4.div(tx());
      var ae = x.I4.div(tj()),
        at = x.I4.div(tf()),
        ai = (n) => {
          let { spin: e, ...t } = n,
            i = (0, f.s)(),
            [o, r] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              let n;
              let t = async () => {
                o &&
                  (n = await i.start({
                    rotate: [0, 360],
                    transition: { repeat: 1 / 0, duration: 1, ease: "linear" },
                  }));
              };
              return (
                e ? (r(!0), t()) : (r(!1), i.stop()),
                () => {
                  n && n.stop();
                }
              );
            }, [e, i, o]),
            (0, C.jsx)(at, {
              children: (0, C.jsxs)(M.P.svg, {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...t,
                animate: i,
                children: [
                  (0, C.jsx)("path", {
                    d: "M18.6187 5.63377C18.3947 5.52181 18.0589 5.63377 17.9469 5.96963L17.4991 7.20111C16.8274 5.52181 15.8198 4.17837 14.2525 3.28275C12.3493 2.16321 10.2221 1.7154 8.09503 2.27517C5.07229 2.94689 2.83323 5.18595 2.04955 8.20869C1.9376 8.54455 2.16151 8.76846 2.38541 8.88041C2.72127 8.88041 2.94518 8.76846 3.05713 8.4326C3.72885 5.74572 5.74401 3.73056 8.43089 3.17079C10.3341 2.72298 12.2373 3.05884 13.8047 4.06642C15.1481 4.85009 16.1557 6.08158 16.7154 7.53697L15.372 6.97721C15.1481 6.86525 14.8122 6.97721 14.7003 7.31307C14.5883 7.53697 14.7003 7.87283 14.9242 7.98479L17.1633 8.88041C17.2752 8.99237 17.3872 8.99237 17.4991 8.99237H17.6111C17.6111 8.99237 17.6111 8.99237 17.723 8.99237C17.835 8.99237 17.9469 8.88041 17.9469 8.76846L18.9545 6.19353C19.0665 5.96963 18.8426 5.74572 18.6187 5.63377Z",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: "0.3",
                  }),
                  (0, C.jsx)("path", {
                    d: "M17.6111 11.1195C17.3872 11.0076 17.0513 11.2315 17.0513 11.4554C16.3796 14.1423 14.3644 16.1574 11.6776 16.7172C9.77434 17.165 7.87114 16.8291 6.30379 15.8216C4.96035 15.0379 3.95277 13.8064 3.393 12.351L4.73644 12.9108C4.96035 13.0227 5.29621 12.9108 5.40816 12.5749C5.52012 12.351 5.40816 12.0151 5.18426 11.9032L2.83324 11.1195C2.72128 11.1195 2.60933 11.0076 2.49738 11.0076H2.38542C2.38542 11.0076 2.38542 11.0076 2.27347 11.0076C2.16152 11.1195 2.04956 11.2315 2.04956 11.3434L1.04198 13.8064C0.930029 14.0303 1.04198 14.3662 1.37784 14.4781C1.60175 14.5901 1.93761 14.4781 2.04956 14.1423L2.49738 12.9108C3.1691 14.4781 4.17668 15.8216 5.74402 16.7172C7.64723 17.8367 9.77434 18.2845 11.9015 17.7248C14.9242 17.053 17.2752 14.702 17.9469 11.6793C18.0589 11.4554 17.835 11.2315 17.6111 11.1195Z",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: "0.3",
                  }),
                ],
              }),
            })
          );
        },
        ao = () => {
          let { config: n } = sa(),
            e = (0, s.useMemo)(() => {
              let e = n.plugins.find((n) => "wallet" === n.id);
              if (e) return e;
            }, []),
            t = (0, s.useMemo)(
              () =>
                (null == e
                  ? void 0
                  : e.getPlugin().walletOptions.widgetIntegration) !==
                "embedded",
              [e]
            );
          return e
            ? {
                openWallet: e.openWallet.bind(e),
                destory: e.destory.bind(e),
                getWalletIFrame: e.getWalletIFrame.bind(e),
                isCanOpen: t,
              }
            : null;
        },
        ar = () => {
          let { connector: n } = t3(),
            e = (0, s.useMemo)(
              () =>
                (null == n ? void 0 : n.walletConnectorType) === "particleAuth",
              [n]
            ),
            t = (0, s.useMemo)(() => {
              var n, t;
              return e &&
                "particle" in window &&
                (null === (n = window.particle) || void 0 === n
                  ? void 0
                  : n._internal)
                ? null === (t = window) || void 0 === t
                  ? void 0
                  : t.particle
                : null;
            }, [e]),
            i = (0, s.useCallback)(
              (n) =>
                function () {
                  for (
                    var i = arguments.length, o = Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  if (!e || !t || !t._internal || !t._internal[n])
                    throw Error(
                      "The current wallet is not a particle wallet or particle is not initialized"
                    );
                  return (null == t ? void 0 : t._internal[n])(...o);
                },
              [e, t]
            );
          return {
            needRestoreWallet: () => {
              var n, e, t;
              return !!(null === (t = window) || void 0 === t
                ? void 0
                : null === (e = t.particle) || void 0 === e
                ? void 0
                : null === (n = e._internal) || void 0 === n
                ? void 0
                : n.needRestoreWallet);
            },
            hasMasterPassword: i("hasMasterPassword"),
            hasPaymentPassword: i("hasPaymentPassword"),
            openAccountAndSecurity: i("openAccountAndSecurity"),
            openChangeMasterPassword: i("openChangeMasterPassword"),
            openChangePaymentPassword: i("openChangePaymentPassword"),
            openLinkLoginAccount: i("openLinkLoginAccount"),
            openRestoreByMasterPassword: i("openRestoreByMasterPassword"),
            openSetMasterPassword: i("openSetMasterPassword"),
            openSetSecurityAccount: i("openSetSecurityAccount"),
            openSetPaymentPassword: i("openSetPaymentPassword"),
            getUserInfo: i("getUserInfo"),
          };
        },
        al = async function (n) {
          var e, t;
          let i,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (o.connector) {
            let { connector: n } = o,
              [e, t] = await Promise.all([n.getAccounts(), n.getChainId()]);
            i = { accounts: e, chainId: t, connector: n };
          } else i = n.state.connections.get(n.state.current);
          if (!i) throw new j.gC();
          let r = null !== (e = o.chainId) && void 0 !== e ? e : i.chainId,
            l = i.connector;
          if ("solana" !== l.chainType) throw new j.uc();
          let a = await l.getProvider(),
            s = null !== (t = o.account) && void 0 !== t ? t : i.accounts[0],
            c = n.chains.find((n) => n.id === r),
            d = n
              .getWalletConnector(l.walletConnectorType)
              .getClient((null == c ? void 0 : c.id) || 101);
          if (
            o.account &&
            !i.accounts.some((n) => n.toLowerCase() === s.toLowerCase())
          )
            throw new j.aj({ address: s, connector: l });
          return {
            publicKey: a.publicKey,
            chain: c,
            signTransaction: async (n) => await a.signTransaction(n),
            signAllTransactions: async (n) => await a.signAllTransactions(n),
            async sendTransaction(n) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return "particleAuth" === l.walletConnectorType
                ? await a.signAndSendTransaction(n)
                : await (0, j.fD)(a, n, d, e);
            },
            async signMessage(n) {
              let { signature: e } = await a.signMessage(n);
              return { signature: e };
            },
            switchChain: async (n) => await l.switchChain({ chainId: n }),
          };
        };
      async function aa(n) {
        var e, t;
        let i,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (o.connector) {
          let { connector: n } = o,
            [e, t] = await Promise.all([n.getAccounts(), n.getChainId()]);
          i = { accounts: e, chainId: t, connector: n };
        } else i = n.state.connections.get(n.state.current);
        if (!i) throw new j.gC();
        let r = null !== (e = o.chainId) && void 0 !== e ? e : i.chainId,
          l = i.connector;
        if ("evm" !== l.chainType) throw new j.uc();
        let a = (0, L.J)(
          null !== (t = o.account) && void 0 !== t ? t : i.accounts[0]
        );
        a.address = (0, d.b)(a.address);
        let s = n.chains.find((n) => n.id === r),
          c = await i.connector.getProvider({ chainId: r });
        if (
          o.account &&
          !i.accounts.some((n) => n.toLowerCase() === a.address.toLowerCase())
        )
          throw new j.aj({ address: a.address, connector: l });
        return (0, v.U)({
          account: a,
          chain: s,
          name: "Connector Client",
          transport: (n) => (0, k.I)(c)({ ...n, retryCount: 0 }),
        });
      }
      async function as(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = await aa(n, e);
        return t.extend(D.D), t.extend(D.D);
      }
      var ac = async (n) => {
          let { connections: e, config: t } = n,
            i = [];
          for (let n of e)
            if (n.connector.walletConnectorType) {
              if ("evm" === n.connector.chainType) {
                let e = await as(t, { connector: n.connector }),
                  o = { ...n, getWalletClient: () => e };
                i.push(o);
              } else {
                let e = await al(t, { connector: n.connector }),
                  o = { ...n, getWalletClient: () => e };
                i.push(o);
              }
            }
          return i;
        },
        ad = (0, s.createContext)(null),
        au = (n) => {
          let { children: e } = n,
            t = l5(),
            { config: i } = sa(),
            { data: o, mutate: r } = od(ac);
          return (
            (0, s.useEffect)(() => {
              r({ connections: t, config: i });
            }, [t]),
            (0, C.jsx)(ad.Provider, {
              value: { wallets: o || [] },
              children: e,
            })
          );
        },
        ap = () => {
          let n = s.useContext(ad);
          if (!n) throw Error("Web3 Hook must be inside a Provider.");
          return n;
        },
        ag = () => {
          let { wallets: n } = ap();
          return n;
        },
        aM = x.I4.div(ty()),
        aC = x.I4.div(tm()),
        ah = x.I4.div(tw()),
        ax = x.I4.div(tI(), (n) => (n.selected ? "pointer" : "default")),
        aj = x.I4.img(tN()),
        af = x.I4.div(tD()),
        ay = x.I4.div(tv()),
        am = x.I4.div(tk());
      x.I4.div(tL());
      var aw = x.I4.div(tT()),
        aI = x.I4.img(tb()),
        aN = x.I4.div(tA()),
        aD = x.I4.div(tz()),
        av = x.I4.div(tE());
      x.I4.div(tO());
      var ak = x.I4.div(tU(), (n) => {
          let { $disconnectLoading: e } = n;
          return e && (0, x.AH)(tS());
        }),
        aL = x.I4.div(tZ()),
        aT = x.I4.div(tF()),
        ab = x.I4.div(tP()),
        aA = x.I4.div(tQ()),
        az = x.I4.div(tV()),
        aE = () =>
          (0, C.jsxs)("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, C.jsx)("circle", {
                cx: "13",
                cy: "13",
                r: "13",
                fill: "#FF4E17",
              }),
              (0, C.jsx)("path", {
                d: "M17.2338 11.8092C17.481 11.3088 17.6534 10.6811 17.6534 9.89991C17.6534 8.82821 17.225 7.85814 16.4468 7.16819C15.6791 6.4874 14.6403 6.12762 13.4429 6.12762L9.31666 6.1084C8.52021 6.1084 7.87451 6.7541 7.87451 7.55054V19.7801H15.0929C17.7883 19.7801 19.3638 17.5317 19.3638 15.5037C19.3638 13.963 18.5081 12.5532 17.2338 11.8092ZM13.4426 7.18223C15.3797 7.18223 16.5988 8.34333 16.5988 9.89991C16.5988 11.989 15.0245 12.9444 13.4316 12.9444C11.9352 12.9444 10.7027 11.7119 10.7027 9.80165V8.74704C10.7027 8.05465 10.2886 7.43306 9.64775 7.2283V7.18223H13.4426Z",
                fill: "white",
              }),
            ],
          }),
        aO = () => {
          let { foreground: n, background: e } = su();
          return (0, C.jsx)("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, C.jsxs)("g", {
              children: [
                (0, C.jsx)("path", {
                  d: "M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z",
                  fill: e,
                }),
                (0, C.jsx)("path", {
                  d: "M11.3805 8.99351C10.8458 9.22228 10.5585 9.57339 10.4787 10.0415C10.4149 10.4166 10.4601 10.6587 10.5319 10.8236C10.6064 10.9912 10.7421 11.1534 10.9761 11.3183C11.4869 11.6748 12.2609 11.9062 13.2344 12.1828C13.2611 12.1908 13.285 12.1988 13.3116 12.2041C14.1814 12.4515 15.2268 12.7521 15.9955 13.2867C16.4131 13.5766 16.7908 13.965 17.0223 14.4864C17.2563 15.013 17.3095 15.6035 17.1978 16.2499C17.0036 17.3804 16.2588 18.1571 15.2879 18.572C14.3463 18.9764 13.1839 19.0482 11.9976 18.862H11.9922C11.3539 18.7583 10.3244 18.4072 9.66211 18.1811C9.53443 18.1358 9.4174 18.0986 9.32164 18.0667C8.88008 17.9151 8.64068 17.4336 8.78698 16.9867C8.93328 16.5399 9.4174 16.3005 9.86427 16.4467C9.99461 16.4893 10.1356 16.5372 10.2872 16.5904C10.9628 16.8191 11.7874 17.1011 12.2662 17.1782C13.2451 17.3299 14.0617 17.2448 14.6203 17.0054C15.155 16.7766 15.4396 16.4255 15.522 15.9573C15.5859 15.5823 15.5406 15.3402 15.4688 15.1753C15.3943 15.0077 15.2587 14.8454 15.0246 14.6805C14.5139 14.3241 13.7399 14.0927 12.7663 13.816C12.7397 13.8081 12.7158 13.8001 12.6892 13.7948C11.8193 13.5474 10.774 13.2468 10.0052 12.7122C9.58763 12.4222 9.20992 12.0339 8.9785 11.5125C8.74442 10.9858 8.69122 10.3953 8.80294 9.74895L9.64083 9.89525L8.80028 9.75161C8.99446 8.62113 9.73925 7.84441 10.7101 7.42946C11.6518 7.02514 12.8142 6.95332 14.0005 7.13952C14.3463 7.19272 15.3943 7.39488 15.7721 7.49595C16.2269 7.61565 16.4956 8.08381 16.3759 8.53866C16.2562 8.99351 15.788 9.26217 15.3332 9.14247C15.0352 9.06267 14.0537 8.87116 13.7345 8.82328C12.753 8.669 11.939 8.75678 11.3778 8.99618L11.3805 8.99351Z",
                  fill: n,
                }),
              ],
            }),
          });
        },
        aS = () => {
          let { foreground: n, background: e } = su();
          return (0, C.jsxs)("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, C.jsx)("circle", { cx: "13", cy: "13", r: "13", fill: e }),
              (0, C.jsx)("g", {
                clipPath: "url(#clip0_1960_350)",
                children: (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15.716 13.5326L19.8432 17.8054C19.8936 17.8558 19.9328 17.9174 19.9608 17.9846C19.9888 18.0518 20 18.1246 20 18.1918C20 18.2646 19.9888 18.3374 19.9608 18.4046C19.9328 18.4718 19.8936 18.5334 19.8488 18.5838L19.5464 18.8974C19.4624 18.987 19.3504 19.0486 19.2272 19.071C19.1488 19.0822 19.0648 19.0766 18.9864 19.0486C18.908 19.0206 18.8408 18.9758 18.7848 18.9142L13.7448 13.7006C13.6552 13.611 13.588 13.5046 13.5376 13.3814C13.4928 13.2638 13.4648 13.135 13.4648 13.0062C13.4648 12.8774 13.4872 12.7486 13.5376 12.631C13.5824 12.5134 13.6552 12.407 13.7448 12.3118L18.7848 7.09818C18.8352 7.04778 18.8912 7.00858 18.9584 6.98058C19.02 6.95258 19.0928 6.94138 19.16 6.94138C19.2272 6.94138 19.3 6.95818 19.3616 6.98058C19.4232 7.00858 19.4848 7.04778 19.5352 7.09818L19.8488 7.42858C19.8992 7.47898 19.9384 7.54058 19.9664 7.60778C19.9944 7.67498 20.0056 7.74778 20.0056 7.81498C20.0056 7.88778 19.9944 7.96057 19.9664 8.02217C19.9384 8.08938 19.8992 8.15097 19.8488 8.20138L15.7216 12.4742C15.5872 12.6142 15.5088 12.8046 15.5088 13.0062C15.5088 13.2022 15.5872 13.3982 15.7216 13.5382L15.716 13.5326ZM10.284 12.4742L6.1568 8.20138C6.1064 8.15097 6.0672 8.08938 6.0392 8.02217C6.0112 7.95498 6 7.88218 6 7.80937C6 7.73658 6.0112 7.66378 6.0392 7.59658C6.0672 7.52938 6.1064 7.46778 6.1568 7.41738L6.4592 7.10378C6.5432 7.01418 6.6552 6.95258 6.7784 6.93018C6.8568 6.91898 6.9408 6.93018 7.0192 6.95258C7.0976 6.98058 7.1648 7.02538 7.2208 7.08698L12.2552 12.3006C12.3448 12.3902 12.412 12.4966 12.4624 12.6198C12.5072 12.7374 12.5352 12.8662 12.5352 12.995C12.5352 13.1238 12.5128 13.2526 12.4624 13.3702C12.4176 13.4878 12.3448 13.5942 12.2552 13.6894L7.2208 18.903C7.1704 18.9534 7.1144 18.9926 7.0472 19.0206C6.9856 19.0486 6.9128 19.0598 6.8456 19.0598C6.7784 19.0598 6.7056 19.043 6.644 19.0206C6.5824 18.9926 6.5208 18.9534 6.4704 18.903L6.1568 18.5782C6.1064 18.5278 6.0672 18.4662 6.0392 18.399C6.0112 18.3318 6 18.259 6 18.1862C6 18.1134 6.0112 18.0406 6.0392 17.979C6.0672 17.9118 6.1064 17.8502 6.1568 17.7998L10.284 13.527C10.4184 13.387 10.4968 13.1966 10.4968 12.995C10.4968 12.7934 10.4184 12.603 10.284 12.463V12.4742Z",
                  fill: n,
                }),
              }),
              (0, C.jsx)("defs", {
                children: (0, C.jsx)("clipPath", {
                  id: "clip0_1960_350",
                  children: (0, C.jsx)("rect", {
                    width: "14",
                    height: "14",
                    fill: e,
                    transform: "translate(6 6)",
                  }),
                }),
              }),
            ],
          });
        },
        aU = () =>
          (0, C.jsxs)("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, C.jsx)("rect", {
                width: "26",
                height: "26",
                rx: "13",
                fill: "url(#paint0_linear_1960_362)",
              }),
              (0, C.jsxs)("g", {
                clipPath: "url(#clip0_1960_362)",
                children: [
                  (0, C.jsx)("path", {
                    d: "M17.6472 13.6556L13.2169 6.12328C13.1955 6.08609 13.1644 6.05511 13.1269 6.03346C13.0893 6.01182 13.0466 6.00028 13.0031 6C12.9595 5.99973 12.9167 6.01074 12.8789 6.03191C12.8411 6.05308 12.8096 6.08367 12.7877 6.12059L11.4609 8.37761C11.4174 8.45148 11.3945 8.53529 11.3945 8.62061C11.3945 8.70592 11.4174 8.78972 11.4609 8.86361L14.3497 13.7775C14.3932 13.8514 14.4558 13.9128 14.5311 13.9555C14.6065 13.9981 14.6919 14.0206 14.7789 14.0205H17.4326C17.476 14.0203 17.5187 14.009 17.5563 13.9877C17.5938 13.9663 17.6251 13.9356 17.6468 13.8987C17.6685 13.8617 17.68 13.8199 17.68 13.7772C17.6801 13.7346 17.6688 13.6926 17.6472 13.6556Z",
                    fill: "white",
                  }),
                  (0, C.jsx)("path", {
                    d: "M6.03416 17.5932L10.4644 10.0608C10.4862 10.0239 10.5174 9.99326 10.555 9.97197C10.5926 9.95066 10.6353 9.93945 10.6787 9.93945C10.7221 9.93945 10.7648 9.95066 10.8024 9.97197C10.84 9.99326 10.8713 10.0239 10.893 10.0608L12.2205 12.3158C12.264 12.3898 12.2868 12.4737 12.2868 12.5591C12.2868 12.6446 12.264 12.7285 12.2205 12.8025L9.33166 17.7163C9.28834 17.7903 9.2259 17.8517 9.15065 17.8944C9.07539 17.937 8.99 17.9594 8.9031 17.9593H6.24878C6.20506 17.9595 6.16206 17.9484 6.12415 17.927C6.08624 17.9056 6.05479 17.8747 6.03298 17.8375C6.01118 17.8003 5.99979 17.7581 6 17.7152C6.00021 17.6723 6.012 17.6302 6.03416 17.5932Z",
                    fill: "white",
                  }),
                  (0, C.jsx)("path", {
                    d: "M10.8923 17.957H19.7529C19.7963 17.9569 19.839 17.9456 19.8766 17.9243C19.9142 17.9029 19.9454 17.8722 19.9671 17.8352C19.9888 17.7982 20.0002 17.7563 20.0002 17.7136C20.0002 17.6709 19.9886 17.629 19.9668 17.5921L18.6413 15.3358C18.5978 15.2618 18.5353 15.2004 18.4599 15.1578C18.3846 15.1151 18.2991 15.0927 18.2121 15.0928H12.4344C12.3474 15.0927 12.262 15.1151 12.1866 15.1578C12.1113 15.2004 12.0487 15.2618 12.0052 15.3358L10.6784 17.5921C10.6566 17.629 10.6451 17.6709 10.645 17.7136C10.645 17.7563 10.6563 17.7982 10.678 17.8352C10.6997 17.8722 10.7309 17.9029 10.7685 17.9243C10.8062 17.9456 10.8488 17.9569 10.8923 17.957Z",
                    fill: "white",
                  }),
                ],
              }),
              (0, C.jsxs)("defs", {
                children: [
                  (0, C.jsxs)("linearGradient", {
                    id: "paint0_linear_1960_362",
                    x1: "1.5",
                    y1: "2.5",
                    x2: "24.1815",
                    y2: "24.269",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, C.jsx)("stop", { stopColor: "#05D5FF" }),
                      (0, C.jsx)("stop", {
                        offset: "0.723958",
                        stopColor: "#363FF9",
                      }),
                      (0, C.jsx)("stop", { offset: "1", stopColor: "#5533FF" }),
                    ],
                  }),
                  (0, C.jsx)("clipPath", {
                    id: "clip0_1960_362",
                    children: (0, C.jsx)("rect", {
                      width: "14.0002",
                      height: "11.9585",
                      fill: "white",
                      transform: "translate(6 6)",
                    }),
                  }),
                ],
              }),
            ],
          }),
        aZ = () =>
          (0, C.jsxs)("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, C.jsx)("circle", {
                cx: "13",
                cy: "13",
                r: "13",
                fill: "url(#paint0_linear_1960_370)",
              }),
              (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.7367 18.1034C20.6055 17.1031 21.0845 15.8232 21.0855 14.4983C21.085 13.9812 21.012 13.4667 20.869 12.9697C19.9757 9.83384 16.5386 8.16373 13.5044 9.39005C12.9865 9.59946 12.5232 9.89787 12.0748 10.227C11.5335 10.6298 10.9158 10.7496 10.2523 10.6298C9.74016 10.5376 9.28352 10.3205 8.84373 10.0644C8.61963 9.93467 8.4495 9.72876 8.36447 9.48419C8.34532 9.43143 8.33229 9.37557 8.31927 9.31948C8.31007 9.28024 8.30088 9.2409 8.28975 9.20242C8.17831 8.82634 7.93888 8.50109 7.61283 8.28313C7.28684 8.06517 6.89455 7.96824 6.50456 8.00917C6.11457 8.05009 5.75104 8.22629 5.47714 8.50718C5.20359 8.78807 5.03659 9.15594 5.00594 9.54694C4.90518 10.7534 6.10349 11.6724 7.24282 11.2568C7.39945 11.1967 7.56728 11.1717 7.73505 11.1838C7.90247 11.1959 8.06488 11.2446 8.21161 11.3265C8.53418 11.493 8.83914 11.6912 9.12223 11.9183C9.82019 12.4908 10.1634 13.2093 10.0826 14.1237C10.0313 14.7697 10.1026 15.4196 10.2929 16.0391C10.6649 17.3106 11.4829 18.4054 12.5963 19.1228C13.7102 19.8401 15.0452 20.1319 16.3567 19.9447C17.6683 19.7575 18.8685 19.1038 19.7367 18.1034ZM13.2469 12.9793C12.942 13.4358 12.7786 13.9726 12.7786 14.5217C12.7796 15.2572 13.0723 15.9622 13.5917 16.4827C14.1116 17.0031 14.8159 17.2964 15.5513 17.2984C16.1004 17.2991 16.6376 17.1368 17.0947 16.8322C17.5518 16.5276 17.9078 16.0943 18.1187 15.5871C18.3292 15.0799 18.3843 14.5217 18.2781 13.983C18.1714 13.4443 17.9073 12.9494 17.5192 12.5608C17.131 12.1722 16.6366 11.9074 16.0978 11.8C15.559 11.6926 15.0013 11.7472 14.4936 11.9571C13.9865 12.1671 13.5524 12.5228 13.2469 12.9793Z",
                fill: "white",
              }),
              (0, C.jsx)("defs", {
                children: (0, C.jsxs)("linearGradient", {
                  id: "paint0_linear_1960_370",
                  x1: "3.5",
                  y1: "5",
                  x2: "25.3312",
                  y2: "20.3152",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, C.jsx)("stop", { stopColor: "#020115" }),
                    (0, C.jsx)("stop", { offset: "1", stopColor: "#562ABE" }),
                  ],
                }),
              }),
            ],
          }),
        aF = () => {
          let { foreground: n, background: e } = su();
          return (0, C.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            children: [
              (0, C.jsx)("rect", {
                width: "26",
                height: "26",
                rx: "13",
                fill: e,
              }),
              (0, C.jsx)("path", {
                d: "M11.7447 16.3854V13.5893C11.7447 11.6915 11.7556 9.79376 11.7338 7.89598C11.7338 7.47214 11.8572 7.36279 12.2779 7.37183C13.5917 7.40165 14.9073 7.37183 16.2211 7.3881C18.4154 7.41521 20.2923 8.82138 20.8336 10.8547C20.9406 11.2617 20.9967 11.6802 21.0004 12.1009C21.0167 14.1795 21.0004 16.258 21.0167 18.3365C21.0167 18.7296 20.9179 18.8787 20.5099 18.8462C20.0425 18.818 19.5739 18.8165 19.1063 18.8417C18.7899 18.8552 18.6783 18.7368 18.682 18.4242C18.6937 17.3397 18.6747 16.2553 18.6965 15.1708C18.7037 14.7976 18.5858 14.6729 18.2077 14.6855C17.408 14.7108 16.6065 14.6855 15.8059 14.7009C15.4332 14.709 15.3235 14.578 15.3951 14.2165C15.4951 13.6869 15.7734 13.2073 16.1842 12.8569C16.5949 12.5065 17.1134 12.3065 17.6537 12.2898C17.9702 12.2826 18.2884 12.2898 18.5922 12.2898C18.8352 11.5759 18.3637 10.5312 17.5948 10.1616C17.2232 9.9953 16.8251 9.89557 16.4188 9.86696C15.8639 9.81816 15.3008 9.87781 14.7432 9.84437C14.3279 9.81907 14.2427 9.98083 14.2454 10.3649C14.2618 13.0001 14.2454 15.6362 14.2672 18.2705C14.2672 18.7341 14.1357 18.8588 13.6787 18.848C12.3803 18.8173 11.0801 18.8417 9.77989 18.8354C7.09784 18.8218 5.00879 16.7568 4.99428 14.0846C4.98249 12.006 4.99972 9.92751 4.9834 7.84899C4.9834 7.46943 5.09583 7.34291 5.47574 7.37093C5.92844 7.40304 6.38275 7.40576 6.8358 7.37906C7.22206 7.35647 7.32543 7.51552 7.32361 7.87791C7.31152 9.94077 7.31152 12.0036 7.32361 14.0665C7.32905 15.2522 8.01181 16.1278 9.07538 16.3393C9.28515 16.3731 9.49764 16.3874 9.71007 16.3818C10.3638 16.3881 11.0248 16.3854 11.7447 16.3854Z",
                fill: n,
              }),
            ],
          });
        },
        aP = () =>
          (0, C.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, C.jsx)("path", {
                d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                fill: "#0052FF",
              }),
              (0, C.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M3.59961 11.9996C3.59961 16.6388 7.36041 20.3996 11.9996 20.3996C16.6388 20.3996 20.3996 16.6388 20.3996 11.9996C20.3996 7.36041 16.6388 3.59961 11.9996 3.59961C7.36041 3.59961 3.59961 7.36041 3.59961 11.9996ZM9.85295 9.29294C9.54366 9.29294 9.29294 9.54366 9.29294 9.85295V14.1463C9.29294 14.4556 9.54366 14.7063 9.85295 14.7063H14.1463C14.4556 14.7063 14.7063 14.4556 14.7063 14.1463V9.85295C14.7063 9.54366 14.4556 9.29294 14.1463 9.29294H9.85295Z",
                fill: "white",
              }),
            ],
          }),
        aQ = (n) =>
          ({
            BICONOMY: aE,
            SIMPLE: aO,
            CYBERCONNECT: aS,
            LIGHT: aU,
            XTERIO: aZ,
            UNIVERSAL: aF,
            COINBASE: aP,
          }[n]),
        aV = x.I4.div(
          tH(),
          (n) => n.width,
          (n) => n.height
        ),
        aH = x.I4.div(tY()),
        aY = x.I4.div(
          t_(),
          (n) => n.width,
          (n) => n.height
        ),
        a_ = (n) => {
          let { size: e = 20, aaName: t = "" } = n,
            [i] = l8(),
            o = (0, s.useMemo)(() => Math.floor(e / 1.6), [e]),
            r = aQ(t);
          return (0, C.jsx)(aV, {
            width: e,
            height: e,
            children: (0, C.jsxs)(
              aH,
              {
                children: [
                  (0, C.jsx)(r, {}),
                  (0, C.jsx)(aY, {
                    width: o,
                    height: o,
                    children:
                      (null == i ? void 0 : i.walletProps.icon) &&
                      (0, s.cloneElement)(
                        null == i ? void 0 : i.walletProps.icon,
                        { width: o, height: o }
                      ),
                  }),
                ],
              },
              t
            ),
          });
        },
        aW = (n) => {
          let { size: e = 20 } = n,
            [t] = l8();
          return (0, C.jsx)(aV, {
            width: e,
            height: e,
            children:
              (null == t ? void 0 : t.walletProps.icon) &&
              (0, s.cloneElement)(null == t ? void 0 : t.walletProps.icon, {
                width: e,
                height: e,
              }),
          });
        },
        aB = (0, x.I4)(M.P.div)(tW());
      (0, x.I4)(M.P.div)(tB());
      var aR = (0, x.I4)(M.P.div)(tR()),
        aG = x.I4.div(tG()),
        a$ = {
          connected: ["wallet-info", "receive"],
          disconnected: [
            "signup",
            "connectors",
            "captcha",
            "connecting",
            "download-app",
            "select-chain",
            "walletconnect",
            "passkey-setup",
            "login-passkey",
          ],
        },
        aJ = [...a$.connected, ...a$.disconnected],
        aK = [
          {
            title: "signupTitle",
            path: "signup",
            element: () => {
              let { config: n } = sa(),
                [e, t] = (0, s.useState)("email"),
                i = it(),
                { appearance: o } = sd(),
                { currentMode: r } = su(),
                l = (0, s.useMemo)(() => {
                  var e;
                  let t = null == o ? void 0 : o.connectorsOrder;
                  t || (t = ["email", "phone", "social", "wallet", "passkey"]);
                  let i =
                      (null === (e = n.getWalletConnector("particleAuth")) ||
                      void 0 === e
                        ? void 0
                        : e.supportAuthTypes) || [],
                    r = i.includes("email"),
                    l = i.includes("phone"),
                    a = i.filter((n) => ri(n)).length > 0,
                    s = n.getWalletConnector("evmWallet"),
                    c = n.getWalletConnector("solanaWallet"),
                    d =
                      null == s
                        ? void 0
                        : s.connectors.some(
                            (n) => "passkeySmartWallet" === n.id
                          ),
                    u = !!((s && s.connectors.length > (d ? 1 : 0)) || c),
                    p =
                      !!(n.plugins.some((n) => "aa" === n.id) && d) &&
                      "as-social" !== o.collapsePasskeyButton;
                  return (
                    lq(r, "email", t),
                    lq(l, "phone", t),
                    lq(a, "social", t),
                    lq(u, "wallet", t),
                    lq(p, "passkey", t),
                    t
                  );
                }, [
                  null == o ? void 0 : o.connectorsOrder,
                  o.collapsePasskeyButton,
                  n.walletConnectors,
                ]);
              (0, s.useEffect)(() => {
                let n = l.find((n) => "email" === n || "phone" === n);
                n && t(n);
              }, [l]);
              let a = (0, s.useMemo)(() => {
                  if (null == o ? void 0 : o.splitEmailAndPhone)
                    return {
                      email: (0, C.jsx)(lu, {}),
                      phone: (0, C.jsx)(lJ, {}),
                      social: (0, C.jsx)(rg, {}),
                      wallet: (0, C.jsx)(rx, {}),
                      passkey: (0, C.jsx)(lp, {}),
                    };
                  let n = (0, C.jsx)(C.Fragment, {
                    children:
                      "email" === e ? (0, C.jsx)(lu, {}) : (0, C.jsx)(lJ, {}),
                  });
                  return {
                    email: n,
                    phone: n,
                    social: (0, C.jsx)(rg, {}),
                    wallet: (0, C.jsx)(rx, {}),
                    passkey: (0, C.jsx)(lp, {}),
                  };
                }, [null == o ? void 0 : o.splitEmailAndPhone, e]),
                c = (0, C.jsx)(l1, {
                  toggleEmailOrPhone: e,
                  setToggleEmailOrPhone: t,
                }),
                d = (0, s.useMemo)(() => {
                  let n = l.indexOf("email"),
                    e = l.indexOf("phone"),
                    t =
                      !(null == o ? void 0 : o.splitEmailAndPhone) &&
                      -1 != n &&
                      -1 != e,
                    r = t && n < e ? "phone" : "email",
                    d = t && n < e ? "email" : "phone",
                    u = t && n < e ? e : n;
                  return l.map((n, e) => {
                    if (t && r === n) return;
                    let o = a[n],
                      p = t && 0 === u ? 1 : 0;
                    return (0, C.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          e > p &&
                            1 !== l.length &&
                            (0, C.jsx)(lr, { children: i.or }),
                          o,
                          t && d === n && c,
                        ],
                      },
                      "".concat(n, "-").concat(e)
                    );
                  });
                }, [a, l, null == o ? void 0 : o.splitEmailAndPhone, c]),
                u = (0, s.useMemo)(
                  () =>
                    (null == o ? void 0 : o.logo)
                      ? "string" == typeof (null == o ? void 0 : o.logo)
                        ? null == o
                          ? void 0
                          : o.logo
                        : r
                        ? o.logo[r]
                        : void 0
                      : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA5IiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMjA5IDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMF82NzY2KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTkuOTMwMSAyMi40NzlDNTkuODE0OSAyMy43MDk1IDU5LjE1NiAyNC44MjUzIDU4LjEzMTkgMjUuNTI0M0M1Ni45MzUzIDI2LjMyNjEgNTUuNTEyNyAyNi43MjY1IDU0LjA3MTQgMjYuNjY3MkM1Mi40NjA1IDI2Ljc1MDQgNTAuODc2MSAyNi4yMzQgNDkuNjI2OCAyNS4yMTg1QzQ4LjUxNTggMjQuMjQwNyA0Ny45MDcgMjIuODE2NSA0Ny45Njk0IDIxLjM0MThDNDcuOTA2NyAxOS44NjU0IDQ4LjUxNTQgMTguNDM5NCA0OS42MjY4IDE3LjQ1OTRDNTAuODc1MiAxNi40NDI1IDUyLjQ1OTcgMTUuOTI1MyA1NC4wNzA4IDE2LjAwODdDNTUuNDkzNyAxNS45NTI3IDU2Ljg5OTUgMTYuMzMzNyA1OC4wOTczIDE3LjEwMDFDNTkuMTAxNiAxNy43MzQ4IDU5Ljc2MTMgMTguNzg5OCA1OS44ODk4IDE5Ljk2N0w1Ny4xMTAyIDE5Ljk2N0M1Ni45NjY5IDE5LjM4NCA1Ni41OTkgMTguODgwNiA1Ni4wODYgMTguNTY1NEM1NS40NzAyIDE4LjIyNDYgNTQuNzcxMyAxOC4wNjEyIDU0LjA2NzUgMTguMDkzM0M1My4xNzkgMTguMDQ1NCA1Mi4zMDkgMTguMzU5MSA1MS42NTc0IDE4Ljk2MjNDNTEuMDQ4MSAxOS42MDA2IDUwLjczMDQgMjAuNDYwOCA1MC43NzkxIDIxLjMzOTlDNTAuNzMxMyAyMi4yMTczIDUxLjA0OTggMjMuMDc1NCA1MS42NTkzIDIzLjcxMTFDNTIuMzEyNyAyNC4zMTM2IDUzLjE4NCAyNC42MjYxIDU0LjA3MzMgMjQuNTc2OUM1NC44MjUxIDI0LjYxMjkgNTUuNTY5OSAyNC40MTk1IDU2LjIwODIgMjQuMDIyN0M1Ni43MzQgMjMuNjcxOSA1Ny4wNzQ5IDIzLjEwNTggNTcuMTM3NyAyMi40NzlMNTkuOTMwMSAyMi40NzlaTTIyLjIyODEgMTYuMjc1N1YyNi4zOTc3TDI0Ljc3NCAyNi4zOTcxVjIyLjY2NzZMMjcuNzE4NyAyMi42Njc2QzI4LjIzMDMgMjIuNjAyMyAyOC43NDUzIDIyLjc1OTQgMjkuMTMyMiAyMy4wOTg5QzI5LjQzNjkgMjMuNjU3MSAyOS41NjI5IDI0LjI5NDYgMjkuNDkzMyAyNC45MjYxVjI1LjYxMDNDMjkuNDkyNCAyNS43NTMzIDI5LjUwOTggMjUuODk1OSAyOS41NDUxIDI2LjAzNDZDMjkuNTc3OCAyNi4xNjI2IDI5LjYzIDI2LjI4NDkgMjkuNyAyNi4zOTcxSDMyLjU1NzdDMzIuMjU1MSAyNi4wNTAxIDMyLjA3NjMgMjUuMjQ5MyAzMi4wMjEyIDIzLjk5NDZDMzIuMDE3IDIzLjg3NjEgMzIuMDEyNSAyMy43ODI3IDMyLjAwNzggMjMuNzE0M0MzMi4wMjIxIDIzLjIwODcgMzEuOTEyMyAyMi43MDcyIDMxLjY4NzcgMjIuMjUzNUMzMS40NDg5IDIxLjkzMzYgMzEuMTE5NyAyMS42OTE4IDMwLjc0MjIgMjEuNTU5QzMxLjI1MyAyMS4zNzI4IDMxLjY4OTYgMjEuMDI3MSAzMS45ODY3IDIwLjU3MzVDMzIuMjg5OCAyMC4xMDQ2IDMyLjQ0NTggMTkuNTU2NiAzMi40MzQ4IDE4Ljk5OTJDMzIuNDk0OCAxOC4xOTM1IDMyLjEzMTUgMTcuNDE0MiAzMS40NzQ1IDE2LjkzOTVDMzAuNTYyIDE2LjQzMDUgMjkuNTE5MyAxNi4xOTk2IDI4LjQ3NiAxNi4yNzU3SDIyLjIyODFaTTAgMTYuMjc1N1YyNi4zOTc3SDIuNTUxMDJWMjMuMTYwN0w2LjAyMzg2IDIzLjE2MDdDNy4wMjg4OCAyMy4yMjEgOC4wMTg5OSAyMi44OTY0IDguNzkxMjYgMjIuMjUzNUM5LjQ3NTc1IDIxLjU5NSA5LjgzODQyIDIwLjY3MjcgOS43ODQ3OCAxOS43MjY4QzkuODM4MDcgMTguNzc4MyA5LjQ3NTY2IDE3Ljg1MzQgOC43OTEyNiAxNy4xOTEyQzguMDIxMTggMTYuNTQzNiA3LjAzMDI0IDE2LjIxNTggNi4wMjM4NiAxNi4yNzU3SDBaTTQuODg4ODcgMjEuMTgyNUgyLjU1MTAyVjE4LjM1SDUuMDUyNzVDNS42Mzk1IDE4LjI5NjIgNi4yMjk3NyAxOC40MDUxIDYuNzU4MTIgMTguNjY0N0M3LjA4MzM4IDE4LjkzNDEgNy4yNTE1OSAxOS4zNDc2IDcuMjA2MjMgMTkuNzY2M0M3LjI0NTY0IDIwLjE5NjIgNy4wNDgyNSAyMC42MTM3IDYuNjkwMjcgMjAuODU3NkM2LjEyODE4IDIxLjExOTMgNS41MDc0NyAyMS4yMzEyIDQuODg4ODcgMjEuMTgyNVpNMTQuMjExNSAyMi4yMDk1SDE2LjkwMDFMMTUuNTM0IDE5LjA4MTRMMTQuMjExNSAyMi4yMDk1Wk0xNC40OTU3IDE2LjI3NTdMOS42NzI3NSAyNi4zOTc3TDEyLjQyNTQgMjYuMzk3N0wxMy4zNDAyIDI0LjI1NThIMTcuODE3NUwxOC43NDU3IDI2LjM5NzdIMjEuNTc4NEwxNi45NDM2IDE2LjI3NTdIMTQuNDk1N1pNMjQuNzc0IDIwLjU5NDVIMjcuNjU0N0MyOC4yMDQ3IDIwLjYzNTcgMjguNzU2NCAyMC41NDA1IDI5LjI2MDIgMjAuMzE3NEMyOS41NzQ5IDIwLjEyMzUgMjkuNzU0IDE5Ljc3MDggMjkuNzI0MyAxOS40MDM4QzI5Ljc1NzggMTkuMDU3NCAyOS41ODk1IDE4LjcyMjMgMjkuMjkxIDE4LjU0MTJDMjguNzM0MSAxOC4zMzE2IDI4LjEzNzUgMTguMjQ3NCAyNy41NDQgMTguMjk0NkgyNC43NzY2TDI0Ljc3NCAyMC41OTQ1Wk0zOS4wNzk2IDE4LjMyMlYyNi4zOTc3SDM2LjU0OVYxOC4zMjJIMzMuMDY5OFYxNi4yNzU3SDQyLjU1OTVWMTguMzIySDM5LjA3OTZaTTQzLjY1OTMgMTYuMjc1N1YyNi4zOTc3SDQ2LjIxMDNWMTYuMjc1N0g0My42NTkzWk02MS42MzU1IDE2LjI3NTdWMjYuNDAwM0w2OS40MTk4IDI2LjM5NzdWMjQuMjY5Mkg2NC4xODY1VjE2LjI3NTdINjEuNjM1NVpNNzAuOTc0MSAyNi40MDAzVjE2LjI3NTdIODAuMDAwM1YxOC4zMjJINzMuNTI1MVYyMC4wMzMySDc5LjI5NDhWMjIuMDkyOUg3My41MjUxVjI0LjI2OTJIODAuMDAyOFYyNi4zOTc3TDcwLjk3NDEgMjYuNDAwM1pNODYuODA0NSAxNi4yNzU3VjI2LjQwMDNMODkuMjM4MyAyNi4zOTc3VjE5LjE5MUw5NC4zNjg2IDI2LjM5NzdIOTcuNDYzMVYxNi4yNzU3SDk1LjAxNTFWMjMuNDExMUw4OS45MzM2IDE2LjI3NTdIODYuODA0NVpNOTkuNzQ2NSAyNi40MDAzVjE2LjI3NTdIMTA4Ljc3M1YxOC4zMjJIMTAyLjI5N1YyMC4wMzMySDEwOC4wNjdWMjIuMDkyOUgxMDIuMjk3VjI0LjI2OTJIMTA4Ljc3N1YyNi4zOTc3TDk5Ljc0NjUgMjYuNDAwM1pNMTE1LjIzMiAyNi4zOTc3VjE4LjMyMkgxMTguNzExVjE3LjE5OEwxMjEuNjU1IDI2LjM5NzdIMTI0LjE2N0wxMjYuNzE4IDE5LjAyNzJMMTI5LjE1IDI2LjM5NzdIMTMxLjc0M0wxMzUuMDM3IDE2LjI3NTdIMTMyLjM4OUwxMzAuMzA2IDIzLjA5MjVMMTI3Ljk5NSAxNi4yNzU3SDEyNS40ODVMMTIzLjA5MiAyMy4wOTI1TDEyMS4wNjQgMTYuMjc1N0gxMTguNzExVjE3LjE5OEwxMTguNDE2IDE2LjI3NTdIMTA5LjIyMVYxOC4zMjJIMTEyLjcwMVYyNi4zOTc3SDExNS4yMzJaTTE0My45MDMgMjMuNzExOEMxNDMuMjUzIDI0LjMxMzQgMTQyLjM4NSAyNC42MjYgMTQxLjQ5OSAyNC41Nzc2TDE0MS41MDEgMjQuNTc2OUMxNDAuNjExIDI0LjYyNjYgMTM5LjczOSAyNC4zMTQxIDEzOS4wODUgMjMuNzExMUMxMzguNDc2IDIzLjA3NTQgMTM4LjE1NyAyMi4yMTczIDEzOC4yMDUgMjEuMzM5OUMxMzguMTU3IDIwLjQ1ODcgMTM4LjQ3NiAxOS41OTY5IDEzOS4wODkgMTguOTU4NEMxNDAuNDgyIDE3LjgwMDggMTQyLjUwOCAxNy43OTk1IDE0My45MDIgMTguOTU1M0MxNDQuNTEyIDE5LjU5NjQgMTQ0LjgyOSAyMC40NTkyIDE0NC43OCAyMS4zNDA1QzE0NC44MjggMjIuMjE3NCAxNDQuNTEgMjMuMDc1MiAxNDMuOTAzIDIzLjcxMThaTTEzNS40MDEgMjEuMzM5OUMxMzUuMzM5IDE5Ljg2NDEgMTM1Ljk0OCAxOC40Mzg5IDEzNy4wNTkgMTcuNDU5NEMxMzkuNjk5IDE1LjUyNTkgMTQzLjI5NiAxNS41MjU5IDE0NS45MzYgMTcuNDU5NEMxNDcuMDQzIDE4LjQ0MTEgMTQ3LjY0OSAxOS44NjU1IDE0Ny41ODcgMjEuMzM5OUMxNDcuNjQ5IDIyLjgxMzIgMTQ3LjA0NCAyNC4yMzY2IDE0NS45MzYgMjUuMjE2NkMxNDMuMjk1IDI3LjE0NjUgMTM5LjcgMjcuMTQ2NSAxMzcuMDU5IDI1LjIxNjZDMTM1Ljk0OCAyNC4yMzg3IDEzNS4zMzkgMjIuODE0NiAxMzUuNDAxIDIxLjMzOTlaTTE1NC43NjUgMjAuNTkzOUgxNTEuODg1TDE1MS44ODMgMTguMjk0TDE1NC42NTUgMTguMjk0QzE1NS4yNDggMTguMjQ2OCAxNTUuODQ1IDE4LjMzMSAxNTYuNDAyIDE4LjU0MDVDMTU2LjcgMTguNzIxNyAxNTYuODY4IDE5LjA1NjcgMTU2LjgzNSAxOS40MDMxQzE1Ni44NjUgMTkuNzcwMiAxNTYuNjg1IDIwLjEyMjkgMTU2LjM3MSAyMC4zMTY3QzE1NS44NjcgMjAuNTM5OSAxNTUuMzE1IDIwLjYzNTEgMTU0Ljc2NSAyMC41OTM5Wk0xNDkuMzM0IDI2LjM5NzFWMTYuMjc1N0gxNTUuNTg1QzE1Ni42MjcgMTYuMiAxNTcuNjY5IDE2LjQzMDkgMTU4LjU4MSAxNi45Mzk1QzE1OS4yMzggMTcuNDE0MiAxNTkuNjAxIDE4LjE5MzUgMTU5LjU0MiAxOC45OTkyQzE1OS41NTIgMTkuNTU2NiAxNTkuMzk2IDIwLjEwNDYgMTU5LjA5MyAyMC41NzM1QzE1OC43OTcgMjEuMDI2NSAxNTguMzYyIDIxLjM3MjIgMTU3Ljg1MiAyMS41NTlDMTU4LjIzIDIxLjY5MTggMTU4LjU1OSAyMS45MzM2IDE1OC43OTggMjIuMjUzNUMxNTkuMDIyIDIyLjcwNzIgMTU5LjEzMiAyMy4yMDg3IDE1OS4xMTggMjMuNzE0M0MxNTkuMTIyIDIzLjc4MjcgMTU5LjEyNyAyMy44NzYxIDE1OS4xMzEgMjMuOTk0NkMxNTkuMTg2IDI1LjI0OTMgMTU5LjM2NSAyNi4wNTAxIDE1OS42NjggMjYuMzk3MUgxNTYuODA3QzE1Ni43MzcgMjYuMjg0OSAxNTYuNjg1IDI2LjE2MjYgMTU2LjY1MiAyNi4wMzQ2QzE1Ni42MTcgMjUuODk1OSAxNTYuNTk5IDI1Ljc1MzMgMTU2LjYgMjUuNjEwM1YyNC45MjYxQzE1Ni42NyAyNC4yOTQ2IDE1Ni41NDQgMjMuNjU3MSAxNTYuMjM5IDIzLjA5ODlDMTU1Ljg1MiAyMi43NTk0IDE1NS4zMzcgMjIuNjAyMyAxNTQuODI2IDIyLjY2NzZMMTUxLjg4MSAyMi42Njc2VjI2LjM5NzFMMTQ5LjMzNCAyNi4zOTcxWk0xNjEuMzg4IDE2LjI3NTdWMjYuMzk3MUwxNjMuOTM5IDI2LjM5NzdWMjIuODkzN0wxNjUuMjMyIDIxLjc1NzhMMTY4LjkyNiAyNi4zOTc3SDE3Mi4wNDhMMTY3LjAyIDIwLjIwNEwxNzEuNDk3IDE2LjI3NTdIMTY4LjIxN0wxNjMuOTM5IDIwLjE2MTlWMTYuMjc1N0gxNjEuMzg4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzBfNjc2NikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODMuODc2IDEuMDgxNzRDMTgzLjAyOCAyLjI1Njg5IDE4My4yODUgMy44OTEyMiAxODQuNDUyIDQuNzUzMjlIMTg0LjQ0NUMxODUuMDA0IDUuMTY0MTQgMTg1LjcwNiA1LjMzMzk4IDE4Ni4zOTIgNS4yMjQ1OEMxODcuMDc4IDUuMTE1MTggMTg3LjY5MSA0LjczNTczIDE4OC4wOTQgNC4xNzE2MkMxODguOTQxIDIuOTk2NDggMTg4LjY4NCAxLjM2MjE1IDE4Ny41MTcgMC41MDAwOEMxODYuOTU5IDAuMDkxNjQ2MyAxODYuMjU5IC0wLjA3Njc1NjQgMTg1LjU3NCAwLjAzMjU3MDJDMTg0Ljg5IDAuMTQxODk3IDE4NC4yNzggMC41MTk4MjIgMTgzLjg3NiAxLjA4MTc0Wk0xODkuNDgxIDQuMjU5NTRDMTg4LjYzNCAzLjA4NDMxIDE4OC44OTEgMS40NTAyNiAxOTAuMDU4IDAuNTg3OTk4QzE5MC42MTcgMC4xNzc0ODkgMTkxLjMxOCAwLjAwNzg2Mzc1IDE5Mi4wMDUgMC4xMTcyNDdDMTkyLjY5MSAwLjIyNjYzIDE5My4zMDQgMC42MDU4NDUgMTkzLjcwNiAxLjE2OTY2QzE5NC41NTMgMi4zNDQ4OSAxOTQuMjk3IDMuOTc4OTUgMTkzLjEzIDQuODQxMjFDMTkyLjU3MSA1LjI1MTg5IDE5MS44NyA1LjQyMTYyIDE5MS4xODMgNS4zMTIyM0MxOTAuNDk3IDUuMjAyODQgMTg5Ljg4NCA0LjgyMzUgMTg5LjQ4MSA0LjI1OTU0Wk0xNzguMTQzIDMuNDc1OTJDMTc3LjY5NCA0Ljg1MDc1IDE3OC40NDIgNi4zMjg3NCAxNzkuODE5IDYuNzg4NzlMMTc5LjgxNyA2Ljc4ODc3QzE4MC4wNzggNi44NzQ0NSAxODAuMzUxIDYuOTE4MTIgMTgwLjYyNiA2LjkxODEyQzE4MS43NjIgNi45MTM2OCAxODIuNzY1IDYuMTc5MjcgMTgzLjEwNyA1LjEwMTE0QzE4My41NTcgMy43MjY0NyAxODIuODA5IDIuMjQ4MzEgMTgxLjQzMiAxLjc4ODI3QzE4MC43NzEgMS41NzQzMyAxODAuMDUyIDEuNjMyMzEgMTc5LjQzNCAxLjk0OTNDMTc4LjgxNiAyLjI2NjI5IDE3OC4zNTEgMi44MTU5NyAxNzguMTQzIDMuNDc1OTJaTTE5NC40MTQgNS4zNTUzNEMxOTMuOTY2IDMuOTgwNTEgMTk0LjcxMyAyLjUwMjUyIDE5Ni4wOSAyLjA0MjQ3QzE5Ni43NTEgMS44Mjg3MyAxOTcuNDcxIDEuODg2ODEgMTk4LjA4OCAyLjIwMzc4QzE5OC43MDYgMi41MjA3NSAxOTkuMTcxIDMuMDcwMzIgMTk5LjM3OSAzLjczMDEyQzE5OS44MjggNS4xMDQ5NSAxOTkuMDggNi41ODI5NCAxOTcuNzAzIDcuMDQyOTlDMTk3LjQ0MyA3LjEyNzg1IDE5Ny4xNyA3LjE3MDg3IDE5Ni44OTYgNy4xNzA0QzE5NS43NjEgNy4xNjYwMyAxOTQuNzU4IDYuNDMyNTkgMTk0LjQxNCA1LjM1NTM0Wk0xNzYuMDM1IDQuOTEwMDFDMTc0LjU4NSA0LjkxODQzIDE3My40MTYgNi4wOTU1MyAxNzMuNDI2IDcuNTM4NjRDMTczLjQxNiA4Ljk4MTc1IDE3NC41ODUgMTAuMTU4OSAxNzYuMDM1IDEwLjE2NzNDMTc3LjQ5NCAxMC4xNjczIDE3OC42NzYgOC45OTA0IDE3OC42NzYgNy41Mzg2NEMxNzguNjc2IDYuMDg2ODkgMTc3LjQ5NCA0LjkxMDAxIDE3Ni4wMzUgNC45MTAwMVpNMTk4Ljc0MSA3LjkzM0MxOTguNzI4IDYuODY3MDIgMTk5LjM2NCA1Ljg5ODc5IDIwMC4zNDkgNS40ODE4N0MyMDEuMzM1IDUuMDY0OTUgMjAyLjQ3NyA1LjI4MTkyIDIwMy4yMzkgNi4wMzExM0MyMDQuMDAxIDYuNzgwMzQgMjA0LjIzMyA3LjkxMzQyIDIwMy44MjYgOC44OTk1OUMyMDMuNDE5IDkuODg1NzUgMjAyLjQ1NCAxMC41Mjk3IDIwMS4zODMgMTAuNTI5OEMxOTkuOTMzIDEwLjUzODYgMTk4Ljc1IDkuMzc1ODYgMTk4Ljc0MiA3LjkzM0gxOTguNzQxWk0xODkuMzQxIDcuNzcyNDVDMTg4LjY0MiA4LjI5MDUgMTg4LjQ4OCA5LjI2OTc5IDE4OC45OTQgOS45NzU1MUMxODkuMjM2IDEwLjMxMzUgMTg5LjYwMyAxMC41NDA4IDE5MC4wMTQgMTAuNjA2NUMxOTAuNDI2IDEwLjY3MjEgMTkwLjg0NiAxMC41NzA2IDE5MS4xODIgMTAuMzI0NkMxOTEuODgxIDkuODA2NTkgMTkyLjAzNSA4LjgyNzMgMTkxLjUyOCA4LjEyMTU4QzE5MS4yODcgNy43ODM4OSAxOTAuOTE5IDcuNTU2NzYgMTkwLjUwOCA3LjQ5MTEzQzE5MC4wOTcgNy40MjU0OSAxODkuNjc2IDcuNTI2ODQgMTg5LjM0MSA3Ljc3MjQ1Wk0xODUuODEgMTAuMzM1NUMxODUuMTExIDkuODE3NDIgMTg0Ljk1NyA4LjgzODEzIDE4NS40NjMgOC4xMzI0MUMxODUuNzA1IDcuNzk0NzIgMTg2LjA3MiA3LjU2NzU5IDE4Ni40ODMgNy41MDE5NkMxODYuODk1IDcuNDM2MzIgMTg3LjMxNSA3LjUzNzY3IDE4Ny42NTEgNy43ODMyOEMxODguMzQ5IDguMzAxMzMgMTg4LjUwMyA5LjI4MDYyIDE4Ny45OTcgOS45ODYzNEMxODcuNzU2IDEwLjMyNDMgMTg3LjM4OCAxMC41NTE3IDE4Ni45NzcgMTAuNjE3M0MxODYuNTY1IDEwLjY4MyAxODYuMTQ1IDEwLjU4MTQgMTg1LjgxIDEwLjMzNTVaTTE5My4xNCA4LjYzNzYyQzE5Mi4zMTQgOC45MTM1NSAxOTEuODY1IDkuNzk5OTYgMTkyLjEzNCAxMC42MjQ3QzE5Mi4zNCAxMS4yNzE1IDE5Mi45NDIgMTEuNzEyIDE5My42MjMgMTEuNzE0OEMxOTMuNzg4IDExLjcxNDcgMTkzLjk1MSAxMS42ODg0IDE5NC4xMDggMTEuNjM3QzE5NC45MzQgMTEuMzYxMSAxOTUuMzgyIDEwLjQ3NDcgMTk1LjExNCA5LjY0OTk2QzE5NC45ODkgOS4yNTM5OCAxOTQuNzEgOC45MjQxOSAxOTQuMzM5IDguNzM0MDRDMTkzLjk2OCA4LjU0Mzg5IDE5My41MzcgOC41MDkxNyAxOTMuMTQgOC42Mzc2MlpNMTgyLjg5MSAxMS42Njk1QzE4Mi4wNjUgMTEuMzkzMyAxODEuNjE3IDEwLjUwNjYgMTgxLjg4NiA5LjY4MTgxQzE4Mi4wMTEgOS4yODU4MyAxODIuMjkgOC45NTYwNCAxODIuNjYxIDguNzY1ODlDMTgzLjAzMSA4LjU3NTc0IDE4My40NjMgOC41NDEwMiAxODMuODYgOC42Njk0OEMxODQuNjg2IDguOTQ1MTIgMTg1LjEzNSA5LjgzMTc5IDE4NC44NjUgMTAuNjU2NkMxODQuNjYgMTEuMzAzMyAxODQuMDU4IDExLjc0MzkgMTgzLjM3NiAxMS43NDY2QzE4My4yMTEgMTEuNzQ2OCAxODMuMDQ4IDExLjcyMDggMTgyLjg5MSAxMS42Njk1Wk0yMDIuMTIyIDExLjc0MDlDMjAxLjY3MyAxMy4xMTU3IDIwMi40MjEgMTQuNTkzNyAyMDMuNzk4IDE1LjA1MzdMMjAzLjgwMSAxNS4wNTM3QzIwNC4wNiAxNS4xMzg5IDIwNC4zMzIgMTUuMTgyNSAyMDQuNjA0IDE1LjE4MzFDMjA1Ljc0MSAxNS4xNzg2IDIwNi43NDQgMTQuNDQ0MiAyMDcuMDg2IDEzLjM2NjFDMjA3LjUzNiAxMS45OTE0IDIwNi43ODggMTAuNTEzMyAyMDUuNDExIDEwLjA1MzJDMjA0Ljc1IDkuODM5NDcgMjA0LjAzMSA5Ljg5NzUzIDIwMy40MTMgMTAuMjE0NUMyMDIuNzk1IDEwLjUzMTUgMjAyLjMzIDExLjA4MSAyMDIuMTIyIDExLjc0MDlaTTE5Ny4wODIgMTQuNjAzM0MxOTYuODEzIDE1LjQyODEgMTk3LjI2MiAxNi4zMTQ1IDE5OC4wODggMTYuNTkwNEwxOTguMDg4IDE2LjU5MDVDMTk4LjI0NCAxNi42NDE1IDE5OC40MDcgMTYuNjY3NSAxOTguNTcxIDE2LjY2NzVDMTk5LjI1MyAxNi42NjQ4IDE5OS44NTQgMTYuMjI0MiAyMDAuMDYgMTUuNTc3NEMyMDAuMzI5IDE0Ljc1MjcgMTk5Ljg4MSAxMy44NjYgMTk5LjA1NCAxMy41OTA0QzE5OC42NTggMTMuNDYyMyAxOTguMjI2IDEzLjQ5NzMgMTk3Ljg1NiAxMy42ODc2QzE5Ny40ODYgMTMuODc3OCAxOTcuMjA3IDE0LjIwNzUgMTk3LjA4MiAxNC42MDMzWk0xODIuNjE0IDE1Ljg0NzZDMTgyLjYyMiAxNS4zOTIgMTgyLjk5OCAxNS4wMjc5IDE4My40NTYgMTUuMDMyOEMxODMuOTEzIDE1LjAzNzcgMTg0LjI4MSAxNS40MDk3IDE4NC4yNzkgMTUuODY1M0MxODQuMjc2IDE2LjMyMSAxODMuOTA1IDE2LjY4OTEgMTgzLjQ0NyAxNi42ODkyQzE4My4yMjQgMTYuNjg3MyAxODMuMDExIDE2LjU5NzMgMTgyLjg1NSAxNi40Mzg5QzE4Mi42OTkgMTYuMjgwNSAxODIuNjEyIDE2LjA2NjkgMTgyLjYxNCAxNS44NDVWMTUuODQ3NlpNMjA0LjcyNCAyMC4wNzg1QzIwMy41NTcgMTkuMjE2NCAyMDMuMyAxNy41ODIxIDIwNC4xNDcgMTYuNDA2OUMyMDQuNTUgMTUuODQzMSAyMDUuMTYzIDE1LjQ2MzkgMjA1Ljg0OSAxNS4zNTQ1QzIwNi41MzUgMTUuMjQ1MSAyMDcuMjM3IDE1LjQxNDggMjA3Ljc5NiAxNS44MjUzQzIwOC45NjMgMTYuNjg3MyAyMDkuMjIgMTguMzIxNyAyMDguMzcyIDE5LjQ5NjhDMjA3Ljk3IDIwLjA2MDkgMjA3LjM1NyAyMC40NDA0IDIwNi42NzEgMjAuNTQ5OEMyMDUuOTg0IDIwLjY1OTIgMjA1LjI4MyAyMC40ODkzIDIwNC43MjQgMjAuMDc4NVpNMTkzLjQ2NSAyMC40NTA1QzE5My4wOTEgMjAuNzI2MSAxOTMuMDA5IDIxLjI0OTIgMTkzLjI4IDIxLjYyNTNDMTkzLjQwOSAyMS44MDU1IDE5My42MDUgMjEuOTI2NiAxOTMuODI0IDIxLjk2MTZDMTk0LjA0MyAyMS45OTY2IDE5NC4yNjggMjEuOTQyNCAxOTQuNDQ2IDIxLjgxMTRDMTk0LjgyIDIxLjUzNTYgMTk0LjkwMiAyMS4wMTI4IDE5NC42MzIgMjAuNjM2NkMxOTQuNTAzIDIwLjQ1NjQgMTk0LjMwNyAyMC4zMzUzIDE5NC4wODcgMjAuMzAwM0MxOTMuODY4IDIwLjI2NTMgMTkzLjY0NCAyMC4zMTk0IDE5My40NjUgMjAuNDUwNVpNMTk4LjQxNyAyMi45NTM3QzE5Ny45MSAyMi4yNDc5IDE5OC4wNjQgMjEuMjY4NiAxOTguNzYzIDIwLjc1MDZDMTk5LjA5OCAyMC41MDQ4IDE5OS41MTkgMjAuNDAzNCAxOTkuOTMgMjAuNDY5QzIwMC4zNDIgMjAuNTM0NiAyMDAuNzA5IDIwLjc2MTkgMjAwLjk1IDIxLjA5OTdDMjAxLjQ1NyAyMS44MDU0IDIwMS4zMDMgMjIuNzg0NyAyMDAuNjA0IDIzLjMwMjhDMjAwLjI2OSAyMy41NDg2IDE5OS44NDggMjMuNjUgMTk5LjQzNyAyMy41ODQ0QzE5OS4wMjYgMjMuNTE4NyAxOTguNjU4IDIzLjI5MTUgMTk4LjQxNyAyMi45NTM3Wk0yMDQuMDYyIDI1LjE0NDZDMjAzLjIxNCAyMy45Njk1IDIwMy40NzEgMjIuMzM1MSAyMDQuNjM4IDIxLjQ3MzFDMjA1LjE5NyAyMS4wNjM2IDIwNS44OTggMjAuODk0NiAyMDYuNTgzIDIxLjAwMzlDMjA3LjI2OCAyMS4xMTMzIDIwNy44ODEgMjEuNDkxOCAyMDguMjgzIDIyLjA1NDdDMjA5LjEzIDIzLjIzIDIwOC44NzQgMjQuODY0IDIwNy43MDcgMjUuNzI2M0MyMDcuMTQ4IDI2LjEzNzEgMjA2LjQ0NyAyNi4zMDcgMjA1Ljc2IDI2LjE5NzZDMjA1LjA3NCAyNi4wODgyIDIwNC40NjEgMjUuNzA4NyAyMDQuMDU4IDI1LjE0NDZMMjA0LjA2MiAyNS4xNDQ2Wk0xOTguMTIgMjMuOTEyNUMxOTcuMjk0IDI0LjE4ODQgMTk2Ljg0NSAyNS4wNzQ4IDE5Ny4xMTQgMjUuODk5NkMxOTcuMzIgMjYuNTQ2NSAxOTcuOTIyIDI2Ljk4NzIgMTk4LjYwNCAyNi45ODk2QzE5OC43NjggMjYuOTg5NSAxOTguOTMxIDI2Ljk2MzIgMTk5LjA4OCAyNi45MTE5QzE5OS45MTMgMjYuNjM1NyAyMDAuMzYyIDI1Ljc0OTQgMjAwLjA5MyAyNC45MjQ4QzE5OS45NjggMjQuNTI5IDE5OS42ODkgMjQuMTk5MyAxOTkuMzE4IDI0LjAwOTJDMTk4Ljk0OCAyMy44MTkgMTk4LjUxNiAyMy43ODQyIDE5OC4xMiAyMy45MTI1Wk0xODguMzczIDI3LjAyMjFDMTg3Ljk5OSAyNi43NDY0IDE4Ny45MTcgMjYuMjIzNSAxODguMTg4IDI1Ljg0NzNDMTg4LjMxNiAyNS42NjcyIDE4OC41MTIgMjUuNTQ2IDE4OC43MzIgMjUuNTExQzE4OC45NTEgMjUuNDc2MSAxODkuMTc1IDI1LjUzMDIgMTg5LjM1NCAyNS42NjEzQzE4OS43MjggMjUuOTM3IDE4OS44MSAyNi40NTk5IDE4OS41MzkgMjYuODM2MUMxODkuNDEgMjcuMDE2MiAxODkuMjE0IDI3LjEzNzQgMTg4Ljk5NSAyNy4xNzI0QzE4OC43NzYgMjcuMjA3MyAxODguNTUyIDI3LjE1MzIgMTg4LjM3MyAyNy4wMjIxWk0xODYuNDQzIDI1LjY3NjZDMTg2LjA2OSAyNS45NTE1IDE4NS45ODUgMjYuNDc0NSAxODYuMjU2IDI2Ljg1MTRMMTg2LjI1OCAyNi44NTE0QzE4Ni4zODYgMjcuMDMxNyAxODYuNTgyIDI3LjE1MyAxODYuODAyIDI3LjE4OEMxODcuMDIxIDI3LjIyMjkgMTg3LjI0NiAyNy4xNjg3IDE4Ny40MjUgMjcuMDM3NEMxODcuNzk4IDI2Ljc2MTcgMTg3Ljg4IDI2LjIzODggMTg3LjYxIDI1Ljg2MjZDMTg3LjQ4MSAyNS42ODI1IDE4Ny4yODUgMjUuNTYxMyAxODcuMDY2IDI1LjUyNjNDMTg2Ljg0NiAyNS40OTE0IDE4Ni42MjIgMjUuNTQ1NSAxODYuNDQzIDI1LjY3NjZaTTIwMS44NzEgMjkuNzU1OUMyMDEuNDIyIDI4LjM4MTIgMjAyLjE2OSAyNi45MDMgMjAzLjU0NiAyNi40NDNDMjA0LjIwNyAyNi4yMjkxIDIwNC45MjcgMjYuMjg3IDIwNS41NDUgMjYuNjA0QzIwNi4xNjIgMjYuOTIxIDIwNi42MjcgMjcuNDcwNyAyMDYuODM1IDI4LjEzMDZDMjA3LjI4NCAyOS41MDU1IDIwNi41MzYgMzAuOTgzNSAyMDUuMTYgMzEuNDQzNUMyMDQuODk5IDMxLjUyODQgMjA0LjYyNiAzMS41NzE0IDIwNC4zNTIgMzEuNTcwOUMyMDMuMjE3IDMxLjU2NjMgMjAyLjIxNCAzMC44MzI5IDIwMS44NzEgMjkuNzU1OVpNMTkyLjE5NiAyOS45MDgxQzE5MS45MjcgMzAuNzMyOSAxOTIuMzc2IDMxLjYxOTMgMTkzLjIwMiAzMS44OTUyQzE5My4zNTggMzEuOTQ2NSAxOTMuNTIyIDMxLjk3MjggMTkzLjY4NiAzMS45NzI5QzE5NC4zNjggMzEuOTcwNCAxOTQuOTcgMzEuNTI5OCAxOTUuMTc1IDMwLjg4MjlDMTk1LjQ0NCAzMC4wNTgxIDE5NC45OTUgMjkuMTcxNyAxOTQuMTY5IDI4Ljg5NThDMTkzLjc3MyAyOC43Njc1IDE5My4zNDEgMjguODAyMyAxOTIuOTcxIDI4Ljk5MjVDMTkyLjYgMjkuMTgyNiAxOTIuMzIxIDI5LjUxMjMgMTkyLjE5NiAyOS45MDgxWk0xODEuOTQ4IDMwLjkxNDdDMTgxLjY3OSAzMC4wOSAxODIuMTI4IDI5LjIwMzYgMTgyLjk1NCAyOC45Mjc2QzE4My4zNSAyOC43OTk2IDE4My43ODIgMjguODM0NyAxODQuMTUzIDI5LjAyNTFDMTg0LjUyMyAyOS4yMTU0IDE4NC44MDIgMjkuNTQ1MyAxODQuOTI3IDI5Ljk0MTJDMTg1LjE5NiAzMC43NjYgMTg0Ljc0NyAzMS42NTI0IDE4My45MjEgMzEuOTI4M0MxODMuNzY1IDMxLjk3OTcgMTgzLjYwMSAzMi4wMDYgMTgzLjQzNiAzMi4wMDYxQzE4Mi43NTUgMzIuMDAyOSAxODIuMTUzIDMxLjU2MTggMTgxLjk0OCAzMC45MTQ3Wk0xODkuMDY0IDMwLjU3ODNDMTg4LjU1OSAzMS4yODM2IDE4OC43MTMgMzIuMjYxIDE4OS40MSAzMi43Nzg4TDE4OS40MSAzMi43ODE0QzE4OS43NDYgMzMuMDI3MyAxOTAuMTY2IDMzLjEyODkgMTkwLjU3OCAzMy4wNjMzQzE5MC45ODkgMzIuOTk3NiAxOTEuMzU3IDMyLjc3MDMgMTkxLjU5OCAzMi40MzIzQzE5Mi4xMDQgMzEuNzI2NiAxOTEuOTUgMzAuNzQ3MyAxOTEuMjUxIDMwLjIyOTJDMTkwLjkxNiAyOS45ODM0IDE5MC40OTYgMjkuODgyIDE5MC4wODQgMjkuOTQ3NkMxODkuNjczIDMwLjAxMzMgMTg5LjMwNSAzMC4yNDA1IDE4OS4wNjQgMzAuNTc4M1pNMTg1LjUzMiAzMi40NDEyQzE4NS4wMjYgMzEuNzM1NSAxODUuMTggMzAuNzU2MiAxODUuODc5IDMwLjIzODFDMTg2LjIxNCAyOS45OTI0IDE4Ni42MzUgMjkuODkwOSAxODcuMDQ2IDI5Ljk1NjVDMTg3LjQ1NyAzMC4wMjIyIDE4Ny44MjUgMzAuMjQ5NCAxODguMDY2IDMwLjU4NzNDMTg4LjU3NSAzMS4yOTI1IDE4OC40MjEgMzIuMjczNCAxODcuNzIgMzIuNzkwM0MxODcuMzg0IDMzLjAzNjMgMTg2Ljk2NCAzMy4xMzc4IDE4Ni41NTIgMzMuMDcyMkMxODYuMTQxIDMzLjAwNjUgMTg1Ljc3NCAzMi43NzkyIDE4NS41MzIgMzIuNDQxMlpNMTc1LjY0MSAzMC40NjYyQzE3NC4xOTEgMzAuNDU3IDE3My4wMDggMzEuNjE5OSAxNzMgMzMuMDYzQzE3My4wMDggMzQuNTA2MSAxNzQuMTkxIDM1LjY2ODkgMTc1LjY0MSAzNS42NTk4QzE3Ny4wODIgMzUuNjU5OCAxNzguMjUxIDM0LjQ5NzEgMTc4LjI1MSAzMy4wNjNDMTc4LjI1MSAzMS42Mjg4IDE3Ny4wODIgMzAuNDY2MiAxNzUuNjQxIDMwLjQ2NjJaTTE5OC4zOCAzMy40NjE4QzE5OC4zOTggMzIuMDMxOSAxOTkuNTc0IDMwLjg4NTMgMjAxLjAxMSAzMC44OTdDMjAyLjQ0NyAzMC45MDg2IDIwMy42MDQgMzIuMDc0MiAyMDMuNTk5IDMzLjUwNDFDMjAzLjU5MyAzNC45MzQxIDIwMi40MjYgMzYuMDkwMyAyMDAuOTkgMzYuMDkwNEMxOTkuNTM5IDM2LjA4MiAxOTguMzcxIDM0LjkwNDkgMTk4LjM4IDMzLjQ2MThaTTE3OS4zMjEgMzMuOTU0OUMxNzcuOTQ0IDM0LjQxNDkgMTc3LjE5NiAzNS44OTMxIDE3Ny42NDYgMzcuMjY3OEMxNzcuOTg5IDM4LjM0NDkgMTc4Ljk5MSAzOS4wNzg0IDE4MC4xMjcgMzkuMDgyOEMxODAuNDAxIDM5LjA4MzMgMTgwLjY3NCAzOS4wNDAzIDE4MC45MzQgMzguOTU1NEMxODIuMzExIDM4LjQ5NTQgMTgzLjA1OSAzNy4wMTc0IDE4Mi42MSAzNS42NDI2QzE4Mi40MDIgMzQuOTgyNyAxODEuOTM3IDM0LjQzMzEgMTgxLjMxOSAzNC4xMTYyQzE4MC43MDEgMzMuNzk5MiAxNzkuOTgyIDMzLjc0MTIgMTc5LjMyMSAzMy45NTQ5Wk0xOTUuNTk3IDM5LjIwOTZDMTk0LjIyMSAzOC43NDk2IDE5My40NzMgMzcuMjcxNiAxOTMuOTIyIDM1Ljg5NjhDMTk0LjEzIDM1LjIzNzUgMTk0LjU5NCAzNC42ODg1IDE5NS4yMTIgMzQuMzcxN0MxOTUuODI5IDM0LjA1NDkgMTk2LjU0OCAzMy45OTY2IDE5Ny4yMDggMzQuMjA5N0MxOTguNTg1IDM0LjY2OTggMTk5LjMzMyAzNi4xNDc5IDE5OC44ODMgMzcuNTIyNkMxOTguNTQxIDM4LjYwMDcgMTk3LjUzOCAzOS4zMzUyIDE5Ni40MDIgMzkuMzM5NkMxOTYuMTI4IDM5LjMzODkgMTk1Ljg1NyAzOS4yOTUxIDE5NS41OTcgMzkuMjA5NlpNMTgzLjg5OSAzNi4xNTczQzE4Mi43MzIgMzcuMDE5NCAxODIuNDc1IDM4LjY1MzcgMTgzLjMyMyAzOS44Mjg5SDE4My4zMTlDMTgzLjcyMiA0MC4zOTMgMTg0LjMzNSA0MC43NzI0IDE4NS4wMjEgNDAuODgxOEMxODUuNzA3IDQwLjk5MTIgMTg2LjQwOSA0MC44MjE0IDE4Ni45NjggNDAuNDEwNUMxODguMTM1IDM5LjU0ODUgMTg4LjM5MiAzNy45MTQxIDE4Ny41NDQgMzYuNzM5QzE4Ny4xNDIgMzYuMTc2MSAxODYuNTI5IDM1Ljc5NzUgMTg1Ljg0NCAzNS42ODgyQzE4NS4xNTkgMzUuNTc4OCAxODQuNDU4IDM1Ljc0NzggMTgzLjg5OSAzNi4xNTczWk0xODguOTMyIDM2LjgyNjNDMTg4LjA4NCAzOC4wMDE0IDE4OC4zNDEgMzkuNjM1NyAxODkuNTA4IDQwLjQ5NzhDMTkwLjA2NyA0MC45MDc2IDE5MC43NjggNDEuMDc2OSAxOTEuNDUzIDQwLjk2NzVDMTkyLjEzOSA0MC44NTgxIDE5Mi43NTEgNDAuNDc5MyAxOTMuMTUzIDM5LjkxNjJDMTk0LjAwMSAzOC43NDEgMTkzLjc0NCAzNy4xMDY3IDE5Mi41NzcgMzYuMjQ0NkMxOTIuMDE4IDM1LjgzNTEgMTkxLjMxNyAzNS42NjYxIDE5MC42MzIgMzUuNzc1NUMxODkuOTQ3IDM1Ljg4NDggMTg5LjMzNCAzNi4yNjM0IDE4OC45MzIgMzYuODI2M1pNMTc5Ljk1MyAyNi44NzExQzE3OS4zNjEgMjcuMTIxOSAxNzguOTggMjcuNzAzOCAxNzguOTg4IDI4LjM0NDFDMTc4Ljk5NCAyOS4yMTAzIDE3OS43MDQgMjkuOTA4IDE4MC41NzQgMjkuOTAyNEMxODEuMjE4IDI5LjkwMjMgMTgxLjc5NyAyOS41MTU0IDE4Mi4wNDIgMjguOTIzQzE4Mi4yODYgMjguMzMwNiAxODIuMTQ3IDI3LjY1IDE4MS42ODkgMjcuMjAwMUMxODEuMjMxIDI2Ljc1MDMgMTgwLjU0NSAyNi42MjAzIDE3OS45NTMgMjYuODcxMVpNMTk0Ljk3IDI4LjI5NUMxOTQuOTgxIDI3LjQzNzEgMTk1LjY4NyAyNi43NDk3IDE5Ni41NDkgMjYuNzU3MUMxOTcuNDExIDI2Ljc2NDYgMTk4LjEwNSAyNy40NjQyIDE5OC4xMDEgMjguMzIyMUMxOTguMDk3IDI5LjE4MDEgMTk3LjM5NyAyOS44NzM2IDE5Ni41MzUgMjkuODczN0MxOTUuNjY1IDI5Ljg2ODEgMTk0Ljk2NCAyOS4xNjEzIDE5NC45NyAyOC4yOTVaTTE4NC4yOTUgMjYuMDMwMkMxODQuMTUxIDI1LjU5MDIgMTg0LjM5MSAyNS4xMTcyIDE4NC44MzEgMjQuOTdDMTg1LjA0MyAyNC45MDE0IDE4NS4yNzMgMjQuOTE5OCAxODUuNDcxIDI1LjAyMTRDMTg1LjY2OSAyNS4xMjI5IDE4NS44MTcgMjUuMjk4OSAxODUuODg0IDI1LjUxMDNDMTg2LjAyNyAyNS45NTAzIDE4NS43ODggMjYuNDIzMiAxODUuMzQ3IDI2LjU3MDRDMTg1LjI2NSAyNi41OTc2IDE4NS4xNzggMjYuNjExNSAxODUuMDkxIDI2LjYxMThDMTg0LjcyNyAyNi42MTEyIDE4NC40MDUgMjYuMzc1OSAxODQuMjk1IDI2LjAzMDJaTTE4OS45MDQgMjUuNDY1N0MxODkuNzYgMjUuOTA1NyAxOTAgMjYuMzc4NiAxOTAuNDQgMjYuNTI1OEwxOTAuNDM4IDI2LjUyNThDMTkwLjUyMiAyNi41NTM0IDE5MC42MSAyNi41NjczIDE5MC42OTggMjYuNTY3MkMxOTEuMDYyIDI2LjU2NTggMTkxLjM4MyAyNi4zMzA3IDE5MS40OTMgMjUuOTg1NkMxOTEuNjM2IDI1LjU0NTYgMTkxLjM5NyAyNS4wNzI2IDE5MC45NTYgMjQuOTI1NEMxOTAuNzQ1IDI0Ljg1NjggMTkwLjUxNCAyNC44NzUyIDE5MC4zMTcgMjQuOTc2OEMxOTAuMTE5IDI1LjA3ODMgMTg5Ljk3IDI1LjI1NDQgMTg5LjkwNCAyNS40NjU3Wk0xODMuMTg1IDIzLjg1MjRDMTgyLjg3IDIzLjk4NjkgMTgyLjY2NyAyNC4yOTc4IDE4Mi42NzMgMjQuNjM5NEMxODIuNjc3IDI1LjEwMDMgMTgzLjA1NSAyNS40NzA4IDE4My41MTggMjUuNDY3NkMxODMuODYyIDI1LjQ2NzYgMTg0LjE3MSAyNS4yNjEgMTg0LjMwMSAyNC45NDQ5QzE4NC40MzEgMjQuNjI4OCAxODQuMzU2IDI0LjI2NTggMTg0LjExMSAyNC4wMjYyQzE4My44NjcgMjMuNzg2NiAxODMuNTAxIDIzLjcxNzkgMTgzLjE4NSAyMy44NTI0Wk0xOTEuNDE1IDI0LjU3QzE5MS40MjMgMjQuMTE0NCAxOTEuNzk5IDIzLjc1MDMgMTkyLjI1NiAyMy43NTUyQzE5Mi43MTQgMjMuNzYgMTkzLjA4MiAyNC4xMzIxIDE5My4wOCAyNC41ODc3QzE5My4wNzcgMjUuMDQzNCAxOTIuNzA1IDI1LjQxMTUgMTkyLjI0OCAyNS40MTE1QzE5MS43ODQgMjUuNDA3IDE5MS40MTIgMjUuMDMwMiAxOTEuNDE2IDI0LjU2OTNMMTkxLjQxNSAyNC41N1pNMTkzLjExNCAyMi4xODY2QzE5Mi42NzQgMjIuMzMzOCAxOTIuNDM1IDIyLjgwNjkgMTkyLjU3OSAyMy4yNDY3TDE5Mi41NzkgMjMuMjQ2MUMxOTIuNjg5IDIzLjU5MTkgMTkzLjAxMSAyMy44Mjc0IDE5My4zNzUgMjMuODI4NEMxOTMuNDYyIDIzLjgyODEgMTkzLjU0OCAyMy44MTQxIDE5My42MzEgMjMuNzg3QzE5NC4wNzIgMjMuNjM5OCAxOTQuMzExIDIzLjE2NjcgMTk0LjE2NyAyMi43MjY4QzE5NC4xIDIyLjUxNTUgMTkzLjk1MiAyMi4zMzk0IDE5My43NTQgMjIuMjM3OUMxOTMuNTU2IDIyLjEzNjQgMTkzLjMyNiAyMi4xMTc5IDE5My4xMTQgMjIuMTg2NlpNMTk4LjQwNiAxNy41NDQ4QzE5Ny45IDE4LjI1MDUgMTk4LjA1NCAxOS4yMjk4IDE5OC43NTMgMTkuNzQ3OEMxOTkuMDg4IDE5Ljk5MzYgMTk5LjUwOSAyMC4wOTUxIDE5OS45MiAyMC4wMjk0QzIwMC4zMzEgMTkuOTYzOCAyMDAuNjk5IDE5LjczNjUgMjAwLjk0IDE5LjM5ODdDMjAxLjQ0NyAxOC42OTMgMjAxLjI5MyAxNy43MTM3IDIwMC41OTQgMTcuMTk1NkMyMDAuMjU4IDE2Ljk0OTkgMTk5LjgzOCAxNi44NDg0IDE5OS40MjcgMTYuOTE0QzE5OS4wMTUgMTYuOTc5NyAxOTguNjQ4IDE3LjIwNjkgMTk4LjQwNiAxNy41NDQ4Wk0xOTMuNDQ5IDE5Ljg2NzZDMTkzLjA3NiAxOS41OTE5IDE5Mi45OTMgMTkuMDY5IDE5My4yNjQgMTguNjkyOEMxOTMuMzkzIDE4LjUxMjcgMTkzLjU4OSAxOC4zOTE1IDE5My44MDggMTguMzU2NUMxOTQuMDI3IDE4LjMyMTYgMTk0LjI1MiAxOC4zNzU3IDE5NC40MyAxOC41MDY4QzE5NC44MDQgMTguNzgyMyAxOTQuODg3IDE5LjMwNTQgMTk0LjYxNiAxOS42ODE2QzE5NC40ODcgMTkuODYxOSAxOTQuMjkxIDE5Ljk4MzIgMTk0LjA3MSAyMC4wMTgyQzE5My44NTIgMjAuMDUzMSAxOTMuNjI3IDE5Ljk5ODkgMTkzLjQ0OCAxOS44Njc2SDE5My40NDlaTTE5Mi41MzQgMTcuMDgxQzE5Mi4zOTEgMTcuNTIwOSAxOTIuNjMgMTcuOTkzOSAxOTMuMDcxIDE4LjE0MTFWMTguMTM5MkMxOTMuMTU1IDE4LjE2NjggMTkzLjI0MyAxOC4xODA4IDE5My4zMzEgMTguMTgwNkMxOTMuNjk1IDE4LjE3ODkgMTk0LjAxNiAxNy45NDM4IDE5NC4xMjUgMTcuNTk4OUMxOTQuMjY3IDE3LjE1OSAxOTQuMDI3IDE2LjY4NzEgMTkzLjU4NyAxNi41NDA3QzE5My4zNzUgMTYuNDcyIDE5My4xNDUgMTYuNDkwNSAxOTIuOTQ3IDE2LjU5MkMxOTIuNzQ5IDE2LjY5MzUgMTkyLjYwMSAxNi44Njk2IDE5Mi41MzQgMTcuMDgxWk0xOTEuMzM0IDE1Ljc3M0MxOTEuMzI5IDE1LjQzMTUgMTkxLjUzMSAxNS4xMjA1IDE5MS44NDcgMTQuOTg2QzE5Mi4xNjIgMTQuODUxNSAxOTIuNTI4IDE0LjkyMDIgMTkyLjc3MyAxNS4xNTk4QzE5My4wMTcgMTUuMzk5NCAxOTMuMDkyIDE1Ljc2MjQgMTkyLjk2MiAxNi4wNzg1QzE5Mi44MzIgMTYuMzk0NyAxOTIuNTIzIDE2LjYwMTIgMTkyLjE4IDE2LjYwMTJDMTkxLjcxNyAxNi42MDQ0IDE5MS4zMzggMTYuMjMzOSAxOTEuMzM0IDE1Ljc3M1pNMTg0LjIwNSAxNC40Mjc1QzE4NC4wNjEgMTQuODY3MyAxODQuMyAxNS4zNDAxIDE4NC43NCAxNS40ODc2TDE4NC43NDQgMTUuNDg3NkMxODQuODI2IDE1LjUxNDYgMTg0LjkxMiAxNS41Mjg2IDE4NC45OTggMTUuNTI5QzE4NS4zNjIgMTUuNTI3NiAxODUuNjgzIDE1LjI5MjUgMTg1Ljc5MyAxNC45NDc0QzE4NS45MzcgMTQuNTA3NSAxODUuNjk4IDE0LjAzNDQgMTg1LjI1NyAxMy44ODcyQzE4NS4wNDYgMTMuODE4NiAxODQuODE1IDEzLjgzNyAxODQuNjE3IDEzLjkzODVDMTg0LjQyIDE0LjA0MDEgMTg0LjI3MSAxNC4yMTYxIDE4NC4yMDUgMTQuNDI3NVpNMTg5LjgxMSAxNC45MDI4QzE4OS42NjcgMTQuNDYyOSAxODkuOTA2IDEzLjk4OTggMTkwLjM0NyAxMy44NDI2QzE5MC41NTggMTMuNzc0IDE5MC43ODkgMTMuNzkyNCAxOTAuOTg3IDEzLjg5MzlDMTkxLjE4NCAxMy45OTU1IDE5MS4zMzMgMTQuMTcxNSAxOTEuMzk5IDE0LjM4MjlDMTkxLjU0MyAxNC44MjI3IDE5MS4zMDQgMTUuMjk1OCAxOTAuODY0IDE1LjQ0M0MxOTAuNzgxIDE1LjQ3MDIgMTkwLjY5NCAxNS40ODQxIDE5MC42MDcgMTUuNDg0NEMxOTAuMjQ0IDE1LjQ4MjQgMTg5LjkyNCAxNS4yNDc0IDE4OS44MTQgMTQuOTAyOEgxODkuODExWk0xODYuMzQgMTQuNzUyNEMxODUuOTY3IDE0LjQ3NjcgMTg1Ljg4NCAxMy45NTM4IDE4Ni4xNTUgMTMuNTc3NkMxODYuMjg1IDEzLjM5ODMgMTg2LjQ4IDEzLjI3NzkgMTg2LjY5OSAxMy4yNDI5QzE4Ni45MTggMTMuMjA4IDE4Ny4xNDIgMTMuMjYxNSAxODcuMzIyIDEzLjM5MTZDMTg3LjY5NSAxMy42NjcxIDE4Ny43NzggMTQuMTkwMiAxODcuNTA3IDE0LjU2NjRDMTg3LjM3OCAxNC43NDY1IDE4Ny4xODIgMTQuODY3NyAxODYuOTYzIDE0LjkwMjZDMTg2Ljc0MyAxNC45Mzc2IDE4Ni41MTkgMTQuODgzNSAxODYuMzQgMTQuNzUyNFpNMTg4LjI3NiAxMy4zNzY5QzE4Ny45MDIgMTMuNjUxNSAxODcuODE4IDE0LjE3NDIgMTg4LjA4OCAxNC41NTExTDE4OC4wOTEgMTQuNTUxN0MxODguMjIgMTQuNzMxOSAxODguNDE2IDE0Ljg1MyAxODguNjM1IDE0Ljg4OEMxODguODU0IDE0LjkyMyAxODkuMDc5IDE0Ljg2ODggMTg5LjI1NyAxNC43Mzc4QzE4OS42MzEgMTQuNDYyIDE4OS43MTMgMTMuOTM5MiAxODkuNDQyIDEzLjU2M0MxODkuMzEzIDEzLjM4MzcgMTg5LjExNyAxMy4yNjMyIDE4OC44OTggMTMuMjI4M0MxODguNjc5IDEzLjE5MzQgMTg4LjQ1NSAxMy4yNDY5IDE4OC4yNzYgMTMuMzc2OVpNMTc4Ljk1OSAxMi4yNjc4QzE3OC45NyAxMS40MDk5IDE3OS42NzYgMTAuNzIyNCAxODAuNTM4IDEwLjcyOTlDMTgxLjQgMTAuNzM3MyAxODIuMDk0IDExLjQzNjkgMTgyLjA5IDEyLjI5NDlDMTgyLjA4NiAxMy4xNTI4IDE4MS4zODYgMTMuODQ2NCAxODAuNTI0IDEzLjg0NjVDMTc5LjY1NCAxMy44NDA4IDE3OC45NTMgMTMuMTM0IDE3OC45NTkgMTIuMjY3OFpNMTk1Ljg2NyAxMC43NDU2QzE5NS4yNzUgMTAuOTk2NCAxOTQuODk0IDExLjU3ODMgMTk0LjkwMiAxMi4yMTg3QzE5NC45MDggMTMuMDg0OSAxOTUuNjE4IDEzLjc4MjcgMTk2LjQ4OCAxMy43NzdDMTk3LjEzMSAxMy43NzcyIDE5Ny43MTEgMTMuMzkwNSAxOTcuOTU2IDEyLjc5ODFDMTk4LjIgMTIuMjA1NyAxOTguMDYxIDExLjUyNSAxOTcuNjAzIDExLjA3NUMxOTcuMTQ1IDEwLjYyNSAxOTYuNDU5IDEwLjQ5NDkgMTk1Ljg2NyAxMC43NDU2WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzBfNjc2NikiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfNjc2NiIgeDE9IjE4Ny41NCIgeTE9IjE2IiB4Mj0iMTY4LjY5IiB5Mj0iLTM4LjcwNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg2NERFQiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjg5NjU1IiBzdG9wLWNvbG9yPSIjRTY0QkUwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YzNTBEQSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMF82NzY2IiB4MT0iMjA5LjE3NCIgeTE9IjAuNjg5NjI4IiB4Mj0iMTczLjI5OSIgeTI9IjAuMTYxNjg1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NjRERUIiLz4KPHN0b3Agb2Zmc2V0PSIwLjY4OTY1NSIgc3RvcC1jb2xvcj0iI0U2NEJFMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGMzUwREEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8wXzY3NjYiPgo8cmVjdCB3aWR0aD0iMjA4Ljg3MiIgaGVpZ2h0PSI0MSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                  [r, o.logo]
                );
              return (0, C.jsxs)(i0, {
                children: [
                  (null == o ? void 0 : o.logo) !== !1 &&
                    (0, C.jsx)(lK, { src: u }),
                  d,
                ],
              });
            },
          },
          {
            title: "connectorsTitle",
            path: "connectors",
            element: (n) => {
              let { type: e = "wallet" } = n;
              return (0, C.jsx)(i0, {
                style: { paddingTop: "30px" },
                children:
                  "wallet" == e
                    ? (0, C.jsx)(rx, { expandList: !0 })
                    : (0, C.jsx)(rg, { expandList: !0 }),
              });
            },
          },
          {
            title: "captchaTitle",
            path: "captcha",
            element: (n) => {
              let { value: e, type: t } = n,
                i = it(),
                { config: o } = sa(),
                { error: r, showError: l } = ii(),
                a = oC(
                  (0, g.GV)(o.chains[0]) ? "particleEVM" : "particleSolana"
                ),
                { connectAsync: c } = ou(),
                { appearance: d } = sd(),
                [u, p] = (0, s.useState)(!1),
                M = (0, s.useRef)(null),
                h = oj("particleAuth"),
                { navigate: x } = oh(),
                j = async (n) => {
                  await c({ connector: a, authParams: n });
                },
                f = async (n) => {
                  try {
                    if (u) return;
                    if (6 === n.length) {
                      if (/![^0-9]/.test(n)) throw Error(i.incorrectCode);
                      {
                        p(!0);
                        let i = {
                          code: n,
                          ...("phone" === t ? { phone: e } : { email: e }),
                        };
                        if (i.code) {
                          if (!i.phone && !i.email)
                            throw Error(
                              "Please enter the phone number or email"
                            );
                        } else
                          throw Error("Please enter the verification code");
                        await j(i);
                      }
                    } else l("");
                  } catch (e) {
                    var o;
                    let n =
                      (null == e
                        ? void 0
                        : null === (o = e.extra) || void 0 === o
                        ? void 0
                        : o[0]) ||
                      e.message ||
                      ("string" == typeof e ? e : i.networkError);
                    n.includes("Invalid code")
                      ? (n = i.invalidCode)
                      : n.includes("Code is deleted")
                      ? (n = i.codeDeleted)
                      : n.includes("Network Error") && (n = i.networkError),
                      4011 === e.code
                        ? (x("signup"), setTimeout(() => l(n)))
                        : l(n);
                  }
                  p(!1);
                },
                y = async () => {
                  let n = "";
                  "phone" === t &&
                    (n = await (null == h
                      ? void 0
                      : h.auth.getCloudflareTurnstileResponse({
                          theme: d.mode || "lgiht",
                          language: d.language || "en",
                          getContainer: M.current,
                        })));
                  let i =
                    "phone" === t
                      ? { phone: e, cf_turnstile_response: n }
                      : { email: e };
                  await (null == h ? void 0 : h.auth.getConnectCaptcha(i));
                };
              return (0, C.jsx)(i0, {
                style: { padding: "12px 2px 8px" },
                children: (0, C.jsxs)(of, {
                  ref: M,
                  children: [
                    (0, C.jsx)(ow, {
                      children: (0, C.jsx)(iS, {
                        width: 70,
                        height: 70,
                        inset: 2,
                        logo: (0, C.jsx)(oN, {
                          children:
                            "phone" === t
                              ? (0, C.jsx)(is, {})
                              : (0, C.jsx)(ic, {}),
                        }),
                      }),
                    }),
                    (0, C.jsxs)(oI, {
                      children: [
                        (0, C.jsx)(oy, { children: i.verificationCode }),
                        (0, C.jsx)(om, { children: e }),
                      ],
                    }),
                    (0, C.jsx)(iH, {
                      allowedCharacters: "numeric",
                      length: 6,
                      placeholder: " ",
                      onChange: f,
                      error: r || "",
                    }),
                    (0, C.jsx)(ol, { reSendCode: y }),
                  ],
                }),
              });
            },
          },
          {
            path: "connecting",
            element: (n) => {
              var e;
              let { wallet: t, authParams: i, passkeyParams: o } = n,
                r = it(),
                [l, a] = (0, s.useState)(o6.CONNECTING),
                c = (0, f.E)(),
                { config: d } = sa(),
                {
                  uri: u,
                  requestUri: p,
                  available: g,
                  error: M,
                } = oX(
                  null == t
                    ? void 0
                    : null === (e = t.connector) || void 0 === e
                    ? void 0
                    : e.id
                ),
                x = oK(),
                { updateLastConnectorId: j } = oc(),
                { openW3m: y, error: m } = (function () {
                  let { connectAsync: n } = ou(),
                    { config: e } = sa(),
                    t = oj("evmWallet"),
                    { updateLastConnectorId: i } = oc(),
                    [o, r] = (0, s.useState)();
                  return {
                    error: o,
                    openW3m: async () => {
                      if ((r(void 0), t && t.w3mConnector)) {
                        let o = document.createElement("style");
                        (o.innerHTML =
                          "w3m-modal, wcm-modal{ --wcm-z-index: 2147483647; --w3m-z-index:2147483647; }"),
                          document.head.appendChild(o);
                        try {
                          let o = t._internal.connectors.setup(t.w3mConnector);
                          (o = e._internal.connectors.setup(o)),
                            await n({ connector: o }),
                            i("walletConnect");
                        } catch (n) {
                          r(n);
                        } finally {
                          document.head.removeChild(o);
                        }
                      }
                    },
                  };
                })(),
                { isConnected: w } = t3(),
                I = (0, s.useCallback)((n) => {
                  if (n) {
                    if (n.code)
                      switch (n.code) {
                        case -32002:
                          a(o6.NOTCONNECTED);
                          break;
                        case 4001:
                          a(o6.REJECTED);
                          break;
                        default:
                          a(o6.FAILED);
                      }
                    else
                      n.message &&
                        ("User rejected request" === n.message
                          ? a(o6.REJECTED)
                          : a(o6.FAILED));
                  }
                }, []),
                { connect: N } = ou(
                  (0, s.useMemo)(
                    () => ({
                      onMutate: (n) => {
                        let { connector: e } = n;
                        e ? a(o6.CONNECTING) : a(o6.UNAVAILABLE);
                      },
                      onSettled: (n, e) => {
                        I(e);
                      },
                    }),
                    [I]
                  )
                ),
                D = (0, s.useMemo)(
                  () => "passkeySmartWallet" === t.connector.id,
                  [t]
                ),
                v = (0, s.useMemo)(() => {
                  var n, e, r;
                  let l = t.icon;
                  if (null == i ? void 0 : i.socialType) {
                    let n = sp[i.socialType];
                    l = (0, C.jsx)(n, {});
                  }
                  let a = D
                    ? {
                        isRegistering:
                          null !== (n = null == o ? void 0 : o.isRegistering) &&
                          void 0 !== n &&
                          n,
                      }
                    : void 0;
                  return {
                    id: t.id,
                    name: t.name,
                    shortName:
                      null !== (e = t.shortName) && void 0 !== e ? e : t.name,
                    icon: l,
                    iconShape:
                      null !== (r = t.iconShape) && void 0 !== r ? r : "circle",
                    iconShouldShrink: t.iconShouldShrink,
                    isAuth: !!(null == i ? void 0 : i.socialType),
                    passkey: a,
                  };
                }, [t, i, o, D]),
                k = (0, s.useMemo)(
                  () =>
                    (null == t ? void 0 : t.downloadUrls)
                      ? {
                          name: Object.keys(
                            null == t ? void 0 : t.downloadUrls
                          )[0],
                          label:
                            Object.keys(t.downloadUrls)[0]
                              .charAt(0)
                              .toUpperCase() +
                            Object.keys(t.downloadUrls)[0].slice(1),
                          url:
                            null == t
                              ? void 0
                              : t.downloadUrls[Object.keys(t.downloadUrls)[0]],
                        }
                      : void 0,
                  [t]
                ),
                L = async () => {
                  c.stop(), c.set("initial"), await c.start("animate");
                },
                T = () => {
                  if (
                    (a(o6.CONNECTING),
                    x &&
                      "evm" === t.connector.chainType &&
                      t.getWalletConnectDeeplink &&
                      !oG(t.connector.id) &&
                      !t.isInstalled)
                  ) {
                    if (o$(t.connector.id)) {
                      y();
                      return;
                    }
                    if (g) {
                      p();
                      return;
                    }
                  }
                  if (
                    (null == t ? void 0 : t.isInstalled) &&
                    (null == t ? void 0 : t.connector)
                  ) {
                    if (null == i ? void 0 : i.socialType) {
                      var n;
                      null === (n = d.storage) ||
                        void 0 === n ||
                        n.setItem("recentConnectorId", t.connector.id),
                        j(t.connector.id);
                    }
                    N({
                      connector: null == t ? void 0 : t.connector,
                      authParams: i,
                      passkeyParams: o,
                    });
                  } else a(o6.UNAVAILABLE);
                };
              (0, s.useEffect)(() => {
                let n = setTimeout(T, 200);
                return () => {
                  clearTimeout(n);
                };
              }, []),
                (0, s.useEffect)(() => {
                  u &&
                    x &&
                    "evm" === t.connector.chainType &&
                    t.getWalletConnectDeeplink &&
                    oV(t.getWalletConnectDeeplink(u));
                }, [u]),
                (0, s.useEffect)(() => {
                  x && M && I(M);
                }, [M, I]),
                (0, s.useEffect)(() => {
                  x && o$(t.connector.id) && m && I(m);
                }, [m, I]),
                (0, s.useEffect)(
                  () => () => {
                    w ||
                      d.setState((n) => ({
                        ...n,
                        status: n.current ? "connected" : "disconnected",
                      }));
                  },
                  [w]
                );
              let b = (0, s.useMemo)(() => {
                  let n = v.shortName || v.name || "Wallet";
                  return l == o6.CONNECTED
                    ? r.connectingConnected
                    : l == o6.FAILED
                    ? r.connectingFailed
                    : l == o6.REJECTED
                    ? r.connectingRejected
                    : l == o6.NOTCONNECTED
                    ? r.connectingNotconnected.format(n)
                    : l == o6.UNAVAILABLE
                    ? k
                      ? r.connectingUnavailable
                      : oJ(v.id)
                      ? r.connectingPasskeyUnavailable
                      : r.connectingInstall.format(n)
                    : r.connectingRequest;
                }, [l, r, v, k]),
                A = (0, s.useMemo)(() => {
                  let n = v.shortName || v.name || "Wallet";
                  return l == o6.CONNECTED
                    ? r.connectingConnectedDesc
                    : l == o6.FAILED
                    ? r.connectingFailedDesc
                    : l == o6.REJECTED
                    ? r.connectingRejectedDesc
                    : l == o6.NOTCONNECTED
                    ? r.connectingNotconnectedDesc.format(n)
                    : l == o6.UNAVAILABLE
                    ? k
                      ? r.connectingUnavailableDesc.format(n, k.label)
                      : oJ(v.id)
                      ? r.connectingPasskeyUnavailableDesc
                      : r.connectingInstallDesc.format(n)
                    : v.isAuth
                    ? r.connectingRequestAuthDesc
                    : v.passkey
                    ? v.passkey.isRegistering
                      ? r.setupPasskeyPrompt
                      : r.passkeyPrompt
                    : r.connectingRequestDesc;
                }, [l, r, v, k]);
              return (
                (0, s.useEffect)(() => {
                  b && L();
                }, [b]),
                (0, C.jsx)(i0, {
                  children: (0, C.jsxs)(oq, {
                    children: [
                      (0, C.jsxs)(o2, {
                        $shake: l === o6.FAILED || l === o6.REJECTED,
                        $circle: "circle" === v.iconShape,
                        children: [
                          (0, C.jsx)(h.N, {
                            children:
                              (l === o6.FAILED || l === o6.REJECTED) &&
                              (0, C.jsx)(o4, {
                                "aria-label": "Retry",
                                initial: { opacity: 0, scale: 0.8 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0.8 },
                                whileTap: { scale: 0.9 },
                                transition: { duration: 0.1 },
                                onClick: T,
                                children: (0, C.jsx)(o3, {
                                  children: (0, C.jsx)(iC, {}),
                                }),
                              }),
                          }),
                          "circle" === v.iconShape
                            ? (0, C.jsx)(iS, {
                                logo:
                                  l === o6.UNAVAILABLE
                                    ? (0, C.jsx)("div", {
                                        style: {
                                          transform: D
                                            ? "scale(1)"
                                            : "scale(1.14)",
                                          position: "relative",
                                          width: "100%",
                                        },
                                        children: v.icon,
                                      })
                                    : (0, C.jsx)(C.Fragment, {
                                        children: v.icon,
                                      }),
                                smallLogo: v.iconShouldShrink,
                                connecting: l === o6.CONNECTING,
                                unavailable: l === o6.UNAVAILABLE,
                              })
                            : (0, C.jsx)(oT, {
                                logo:
                                  l === o6.UNAVAILABLE
                                    ? (0, C.jsx)("div", {
                                        style: {
                                          position: "relative",
                                          width: "60px",
                                          height: "60px",
                                        },
                                        children: (0, C.jsx)("div", {
                                          style: { transform: "scale(0.75)" },
                                          children: v.icon,
                                        }),
                                      })
                                    : (0, C.jsx)(C.Fragment, {
                                        children: v.icon,
                                      }),
                                connecting: l === o6.CONNECTING,
                              }),
                        ],
                      }),
                      (0, C.jsxs)(o5, {
                        variants: o9,
                        initial: "animate",
                        animate: c,
                        children: [
                          (0, C.jsx)("div", { children: b }),
                          (0, C.jsx)("span", { children: A }),
                        ],
                      }),
                    ],
                  }),
                })
              );
            },
          },
          {
            path: "download-app",
            element: (n) => {
              var e;
              let { wallet: t } = n,
                i = it(),
                [o, r] = (0, s.useState)(),
                l = (0, s.useMemo)(
                  () =>
                    (null == t ? void 0 : t.downloadUrls)
                      ? Object.keys(t.downloadUrls)
                          .map((n) => {
                            var e;
                            let o =
                              (null == t
                                ? void 0
                                : null === (e = t.downloadUrls) || void 0 === e
                                ? void 0
                                : e[n]) || "";
                            return (
                              "braveWallet" === t.id &&
                                "website" === n &&
                                (n = "brave"),
                              {
                                icon: ry(n),
                                name: n,
                                install: i.installExtension.format(
                                  (null == n
                                    ? void 0
                                    : n.charAt(0).toUpperCase()) +
                                    (null == n ? void 0 : n.slice(1))
                                ),
                                url: o,
                              }
                            );
                          })
                          .filter((n) =>
                            "braveWallet" === t.id
                              ? !["ios", "android"].includes(n.name)
                              : !["ios", "android", "website"].includes(n.name)
                          )
                      : [],
                  [t, i]
                );
              return (
                (0, s.useEffect)(() => {
                  let { website: n } =
                    (null == t ? void 0 : t.downloadUrls) || {};
                  (null == l ? void 0 : l.length)
                    ? r("List")
                    : n
                    ? r("QRCode")
                    : r("Unavailable");
                }, [t, l]),
                (0, C.jsx)(i0, {
                  style: { marginTop: 0 },
                  children: (0, C.jsxs)(rA, {
                    children: [
                      "List" === o &&
                        (0, C.jsx)(rz, {
                          children: null == t ? void 0 : t.icon,
                        }),
                      (0, C.jsx)(rE, {
                        children: i.installToConnect.format(
                          (null == t ? void 0 : t.name) || ""
                        ),
                      }),
                      "List" === o &&
                        (0, C.jsx)(rO, { children: i.selectPreferredOptions }),
                      (0, C.jsx)("div", {
                        style: { display: "List" !== o ? "none" : "block" },
                        children: (0, C.jsx)(rS, {
                          children: l.map((n, e) => {
                            var t;
                            return (0, C.jsxs)(
                              rs,
                              {
                                onClick: () => window.open(n.url, "_blank"),
                                children: [
                                  (0, C.jsxs)("div", {
                                    className: "btn-wrap",
                                    children: [
                                      null === (t = n.icon) || void 0 === t
                                        ? void 0
                                        : t.call(n),
                                      n.install,
                                    ],
                                  }),
                                  (0, C.jsx)(ra, {
                                    children: (0, C.jsx)(ia, {}),
                                  }),
                                ],
                              },
                              e
                            );
                          }),
                        }),
                      }),
                      "QRCode" === o &&
                        (0, C.jsx)("div", {
                          style: { padding: "30px" },
                          children: (0, C.jsx)(rb, {
                            value:
                              null == t
                                ? void 0
                                : null === (e = t.downloadUrls) || void 0 === e
                                ? void 0
                                : e.website,
                            ecl: "H",
                            image: null == t ? void 0 : t.icon,
                          }),
                        }),
                      (0, C.jsxs)(C.Fragment, {
                        children: [
                          "List" === o &&
                            (0, C.jsx)(rU, {
                              children: i.refreshPageOnceInstalled,
                            }),
                          "QRCode" === o &&
                            (0, C.jsx)(rU, {
                              children: i.walletOnlyAvailableOnMobile,
                            }),
                        ],
                      }),
                    ],
                  }),
                })
              );
            },
          },
          {
            title: "scanWithPhone",
            path: "walletconnect",
            element: (n) => {
              var e;
              let { wallet: t } = n,
                { navigate: i } = oh(),
                o = it(),
                r = oK(),
                {
                  uri: l = "",
                  requestUri: a,
                  error: c,
                } = oX(
                  null == t
                    ? void 0
                    : null === (e = t.connector) || void 0 === e
                    ? void 0
                    : e.id
                ),
                { config: d } = sa(),
                { isConnected: u } = t3();
              (0, s.useEffect)(() => {
                a();
              }, []),
                (0, s.useEffect)(
                  () => () => {
                    u ||
                      d.setState((n) => ({
                        ...n,
                        status: n.current ? "connected" : "disconnected",
                      }));
                  },
                  [u]
                );
              let p = (0, s.useMemo)(
                () => !r && (null == t ? void 0 : t.id) !== "walletConnect",
                [t, r]
              );
              return (0, C.jsx)(i0, {
                style: { marginTop: 0 },
                children: (0, C.jsxs)(aB, {
                  children: [
                    (0, C.jsx)(rb, {
                      value:
                        l && t.getWalletConnectDeeplink
                          ? t.getWalletConnectDeeplink(l)
                          : l,
                      failed: !!c,
                      failedCallback: () => {
                        a();
                      },
                      image: null == t ? void 0 : t.icon,
                    }),
                    !!l &&
                      (0, C.jsxs)(aR, {
                        children: [
                          (0, C.jsx)(rX, {
                            variant: "button",
                            string: l,
                            children: o.copyQRURI,
                          }),
                          p &&
                            (0, C.jsx)(rh, {
                              style: {
                                background: "none",
                                borderColor: "var(--pcm-button-border-color)",
                              },
                              onClick: () => {
                                i("download-app", { wallet: t });
                              },
                              children: (0, C.jsxs)(i7, {
                                gap: 8,
                                style: {
                                  color: "var(--pcm-body-color-secondary)",
                                },
                                children: [(0, C.jsx)(iM, {}), o.getWallet],
                              }),
                            }),
                        ],
                      }),
                    (0, C.jsx)(aG, { children: o.scanQRCode }),
                  ],
                }),
              });
            },
          },
          {
            title: "selectChainTitle",
            path: "select-chain",
            element: (n) => {
              var e, t, i;
              let { walletData: o } = n,
                r = it(),
                l = o8();
              return (0, C.jsx)(i0, {
                style: { marginTop: 0 },
                children: (0, C.jsxs)(rA, {
                  children: [
                    (0, C.jsx)(rz, {
                      children:
                        !!(null == o
                          ? void 0
                          : null === (t = o.props) || void 0 === t
                          ? void 0
                          : null === (e = t[0]) || void 0 === e
                          ? void 0
                          : e.icon) &&
                        (0, s.cloneElement)(
                          null == o
                            ? void 0
                            : null === (i = o.props) || void 0 === i
                            ? void 0
                            : i[0].icon,
                          {}
                        ),
                    }),
                    (0, C.jsxs)(rE, {
                      style: { marginBottom: "40px" },
                      children: [
                        (0, C.jsx)("div", {
                          children: r.walletSupportsMultipleChains,
                        }),
                        (0, C.jsx)("div", { children: r.selectChainToConnect }),
                      ],
                    }),
                    (0, C.jsx)(rS, {
                      children: o.props.map((n, e) =>
                        (0, C.jsxs)(
                          rs,
                          {
                            onClick: () => l(n),
                            children: [
                              (0, C.jsxs)(i8, {
                                gap: 10,
                                children: [
                                  li[n.connector.chainType](),
                                  (0, C.jsx)("div", {
                                    className: "label",
                                    style: { fontSize: 14 },
                                    children:
                                      n.connector.chainType.toUpperCase(),
                                  }),
                                ],
                              }),
                              n.isInstalled &&
                                (0, C.jsx)(rl, {
                                  $customLable: !1,
                                  children: r.installed,
                                }),
                              (0, C.jsx)(ra, { children: (0, C.jsx)(ia, {}) }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
              });
            },
          },
          {
            title: () => {
              var n, e;
              let t = l2(),
                { chainId: i } = t3(),
                o = r2(),
                r = r4(),
                l =
                  null == o
                    ? void 0
                    : null === (e = o.smartAccountContract) || void 0 === e
                    ? void 0
                    : null === (n = e.name) || void 0 === n
                    ? void 0
                    : n.toUpperCase(),
                a = (0, s.useMemo)(() => {
                  if (!i || !r || !t) return "";
                  let n = t.find((n) => n.id === i);
                  if (!n || !n.blockExplorers) return "";
                  let e = n.blockExplorers.default.url;
                  return (0, g.ES)(n)
                    ? "".concat(e, "/account/").concat(r)
                    : "".concat(e, "/address/").concat(r);
                }, [i, r, t]);
              return (0, C.jsx)(aT, {
                children: (0, C.jsx)(aC, {
                  children:
                    !!r &&
                    (0, C.jsxs)(C.Fragment, {
                      children: [
                        l
                          ? (0, C.jsx)(a_, { size: 26, aaName: l })
                          : (0, C.jsx)(aW, { size: 26 }),
                        (0, C.jsx)(rX, { string: r, children: oQ(r || "--") }),
                        (0, C.jsx)(az, {
                          children: (0, C.jsx)(iN, {
                            style: a
                              ? { cursor: "pointer" }
                              : { cursor: "not-allowed", opacity: 0.4 },
                            onClick: () => {
                              a && window.open(a, "_blank");
                            },
                          }),
                        }),
                      ],
                    }),
                }),
              });
            },
            path: "wallet-info",
            element: () => {
              var n;
              let e = l2(),
                { chain: t, chainId: i, isConnected: o } = t3(),
                r = it(),
                l = l2(),
                [a] = l8(),
                c = (function () {
                  let n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    { chainId: e } = n,
                    { config: t } = sa();
                  return (function (n) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      t = e.chainId || n.state.chainId,
                      i = n.chains.find((n) => n.id === t);
                    if (!i) return null;
                    let o = n.getWalletConnector("particleAuth");
                    return o
                      ? o.getClient(t)
                      : (0, g.GV)(i)
                      ? n.getWalletConnector("evmWallet").getClient(t)
                      : n.getWalletConnector("solanaWallet").getClient(t);
                  })(t, { chainId: e });
                })(),
                [d] = ag(),
                {
                  openAccountAndSecurity: u,
                  openLinkLoginAccount: p,
                  getUserInfo: M,
                  openSetSecurityAccount: h,
                } = ar(),
                x = ao(),
                j = r4(),
                { close: f, navigate: y } = oh(),
                { disconnectAsync: m } = r1({ onSettled(n, e) {} }),
                [w, I] = (0, s.useState)(!1),
                [N, D] = (0, s.useState)(!1),
                [v, k] = (0, s.useState)(null),
                L = (0, s.useRef)(),
                T = (0, s.useRef)(null),
                [b, A] = (0, s.useState)(!1),
                z = (0, s.useMemo)(() => {
                  if (!e || null == e || !e.length || !i) return "";
                  {
                    let n = e.find((n) => n.id === i);
                    return n ? (0, g.Wc)(n) : "";
                  }
                }, [e, i]),
                E = (0, s.useMemo)(
                  () => l.some((n) => n.id === (null == t ? void 0 : t.id)),
                  [t, l]
                ),
                O = async () => {
                  var n, e;
                  if (!z) return;
                  let i =
                    "evm" === z
                      ? { address: j }
                      : null == d
                      ? void 0
                      : null === (e = d.getWalletClient) || void 0 === e
                      ? void 0
                      : null === (n = e.call(d)) || void 0 === n
                      ? void 0
                      : n.publicKey;
                  j &&
                    i &&
                    c &&
                    c
                      .getBalance(i)
                      .then((n) => {
                        var e;
                        let { decimals: i = 1 } =
                            (null == t ? void 0 : t.nativeCurrency) || {},
                          o = oY(BigInt(n), i, 5) || "0";
                        k(o);
                        let r =
                          null ===
                            (e = ""
                              .concat(null == t ? void 0 : t.id, "-")
                              .concat(j, "-balance")) || void 0 === e
                            ? void 0
                            : e.toLowerCase();
                        localStorage.setItem(r, o);
                      })
                      .catch((n) => {});
                },
                S = (0, s.useMemo)(
                  () =>
                    !!(
                      a &&
                      "particleAuth" ===
                        a.walletProps.connector.walletConnectorType
                    ),
                  [a]
                ),
                U = () => {
                  var n;
                  let e =
                    null ===
                      (n = ""
                        .concat(null == t ? void 0 : t.id, "-")
                        .concat(j, "-balance")) || void 0 === n
                      ? void 0
                      : n.toLowerCase();
                  return localStorage.getItem(e) || "0";
                },
                { appearance: Z } = sd(),
                F = (0, s.useMemo)(() => {
                  if (j)
                    return (function (n, e) {
                      var t, i;
                      let o =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "USD",
                        r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : "light",
                        l =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : "en-US",
                        a = {
                          1: ["Ethereum", "ETH"],
                          10: ["Optimism", "ETH"],
                          56: ["Binance Smart Chain", "BNB"],
                          101: ["Solana", "SOL"],
                          137: ["Polygon", "MATIC"],
                          204: ["opBNB", "BNB"],
                          324: ["Zksync", "ETH"],
                          5e3: ["Mantle", "MNT"],
                          8453: ["Base", "ETH"],
                          42161: ["Arbitrum One", "ETH"],
                          42220: ["Celo", "CELO"],
                          43114: ["Avalanche", "AVAX"],
                          0x2b6653dc: ["Tron", "TRX"],
                        };
                      if (!n || !e || !a[n]) return "";
                      let s =
                          (null === (t = a[n]) || void 0 === t
                            ? void 0
                            : t[0]) || "",
                        c = new URLSearchParams({
                          walletAddress: e,
                          fiatCoin: o,
                          cryptoCoin:
                            (null === (i = a[n]) || void 0 === i
                              ? void 0
                              : i[1]) || "ETH",
                          chainName: s,
                          showBackButton: !1,
                          theme: r,
                          language: l,
                        }).toString();
                      return ""
                        .concat("https://ramp.particle.network", "/?")
                        .concat(c);
                    })(i, j, "", Z.mode);
                }, [j, i, Z.mode]);
              return (
                (0, s.useEffect)(() => {
                  j && t && c && d && (k(U()), O());
                }, [j, c, t, d]),
                (0, s.useEffect)(() => {
                  (null == t ? void 0 : t.id) && j && k(U());
                }, [null == t ? void 0 : t.id, j, v]),
                (0, C.jsx)(i0, {
                  children: (0, C.jsxs)(aM, {
                    children: [
                      (0, C.jsxs)(ah, {
                        children: [
                          (0, C.jsx)(ax, {
                            ref: T,
                            selected: (null == l ? void 0 : l.length) > 1 || !E,
                            onClick: () => {
                              ((null == l ? void 0 : l.length) > 1 || !E) &&
                                D(!N);
                            },
                            children:
                              o &&
                              (0, C.jsxs)(C.Fragment, {
                                children: [
                                  E
                                    ? (0, C.jsxs)(C.Fragment, {
                                        children: [
                                          t &&
                                            (0, C.jsx)(aj, {
                                              src: (0, g.NO)(t),
                                              alt: "",
                                            }),
                                          (0, C.jsx)(aL, { children: r3(t) }),
                                        ],
                                      })
                                    : (0, C.jsxs)(ae, {
                                        children: [
                                          (0, C.jsx)(ig, {}),
                                          r.switchNetwork,
                                        ],
                                      }),
                                  ((null == l ? void 0 : l.length) > 1 || !E) &&
                                    (0, C.jsx)(af, {
                                      children: (0, C.jsx)(iu, {
                                        width: 12,
                                        height: 12,
                                        spin: !!N,
                                        color: E
                                          ? "var(--pcm-body-color-secondary)"
                                          : "var(--pcm-error-color)",
                                      }),
                                    }),
                                ],
                              }),
                          }),
                          E &&
                            (0, C.jsxs)(ay, {
                              children: [
                                (0, C.jsxs)(am, {
                                  children: [
                                    v || 0,
                                    " \xa0",
                                    null == t
                                      ? void 0
                                      : null ===
                                          (n = t.nativeCurrency.symbol) ||
                                        void 0 === n
                                      ? void 0
                                      : n.replace("tBNB", "BNB"),
                                  ],
                                }),
                                (0, C.jsx)(ai, {
                                  style: { cursor: "pointer" },
                                  spin: w,
                                  onClick: async () => {
                                    clearTimeout(L.current);
                                    let n = new Date().getTime();
                                    I(!0), await O();
                                    let e = 1e3 - (new Date().getTime() - n);
                                    L.current = setTimeout(
                                      () => {
                                        I(!1);
                                      },
                                      e > 0 ? e : 0
                                    );
                                  },
                                }),
                              ],
                            }),
                          (0, C.jsx)(an, {
                            visible: N,
                            setVisible: D,
                            clickAwayElements: [T],
                            maxHeight: 200,
                            supportChain: E,
                            top: 50,
                          }),
                        ],
                      }),
                      (0, C.jsxs)(aw, {
                        children: [
                          (0, C.jsx)(ru, {
                            $isDisabled: !F,
                            $felxRow: !1,
                            onClick: () => {
                              if (!F) return;
                              let n = parseInt(
                                  (0.8 * window.innerHeight).toString()
                                ),
                                e = 0.6 * n;
                              e > 1e3 && (e = 1e3),
                                e > window.innerWidth &&
                                  (e = parseInt(
                                    (0.9 * window.innerWidth).toString()
                                  )),
                                (function (n, e, t, i) {
                                  let o = screen.width / 2 - t / 2,
                                    r = screen.height / 2 - i / 2;
                                  window.open(
                                    n,
                                    e,
                                    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
                                      t +
                                      ", height=" +
                                      i +
                                      ", top=" +
                                      r +
                                      ", left=" +
                                      o
                                  );
                                })(F, "Particle Network", e, n),
                                f();
                            },
                            children: (0, C.jsxs)(i7, {
                              style: { width: "100%", gap: "6px" },
                              children: [
                                (0, C.jsx)(ij, {
                                  className: aI,
                                  style: { width: "20px" },
                                }),
                                (0, C.jsx)(aN, { children: r.buy }),
                              ],
                            }),
                          }),
                          (0, C.jsx)(ru, {
                            $felxRow: !1,
                            $isDisabled: !j || !t,
                            onClick: () => {
                              y("receive");
                            },
                            children: (0, C.jsxs)(i7, {
                              style: { width: "100%", gap: "6px" },
                              children: [
                                (0, C.jsx)(iy, {
                                  className: aI,
                                  style: { width: "18px" },
                                }),
                                (0, C.jsx)(aN, { children: r.receive }),
                              ],
                            }),
                          }),
                          x &&
                            x.isCanOpen &&
                            (0, C.jsx)(ru, {
                              $felxRow: !1,
                              $isDisabled: !j,
                              onClick: () => {
                                x.openWallet(), f();
                              },
                              children: (0, C.jsxs)(i7, {
                                style: { width: "100%", gap: "6px" },
                                children: [
                                  (0, C.jsx)(im, {
                                    className: aI,
                                    style: { width: "20px" },
                                  }),
                                  (0, C.jsx)(aN, { children: r.wallet }),
                                ],
                              }),
                            }),
                          S &&
                            (0, C.jsx)(ru, {
                              $felxRow: !1,
                              onClick: () => {
                                u(), f();
                              },
                              children: (0, C.jsxs)(i7, {
                                style: { width: "100%", gap: "6px" },
                                children: [
                                  (0, C.jsx)(ix, {
                                    className: aI,
                                    style: { width: "20px" },
                                  }),
                                  (0, C.jsx)(aN, {
                                    children: r.accountAndSecurity,
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                      (0, C.jsx)(aD, {
                        children: (0, C.jsxs)(on, {
                          children: [
                            S
                              ? (0, C.jsx)(ak, {
                                  onClick: () => {
                                    let { email: n, phone: e } =
                                      M().security_account || {};
                                    n || e ? p() : h(), f();
                                  },
                                  children: (0, C.jsxs)(i8, {
                                    gap: 5,
                                    children: [
                                      (0, C.jsx)(iw, { className: aI }),
                                      (0, C.jsx)(av, {
                                        children: r.linkLoginAccount,
                                      }),
                                    ],
                                  }),
                                })
                              : (0, C.jsx)("div", {}),
                            (0, C.jsx)(ak, {
                              $disconnectLoading: b,
                              children: (0, C.jsxs)(i8, {
                                gap: 5,
                                onClick: () => {
                                  A(!0),
                                    m().finally(() => {
                                      setTimeout(() => {
                                        A(!1);
                                      }, 300);
                                    });
                                },
                                children: [
                                  (0, C.jsxs)(ab, {
                                    children: [
                                      b &&
                                        (0, C.jsx)(aA, {
                                          children: (0, C.jsx)(iS, {
                                            width: 16,
                                            inset: 0,
                                            height: 16,
                                            logo: (0, C.jsx)(C.Fragment, {}),
                                          }),
                                        }),
                                      (0, C.jsx)(iI, { className: aI }),
                                    ],
                                  }),
                                  (0, C.jsx)(av, { children: r.disconnect }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              );
            },
          },
          {
            title: "receive",
            path: "receive",
            element: () => {
              let { chain: n } = t3(),
                e = r4(),
                t = it();
              return (0, C.jsx)(i0, {
                style: { marginTop: 0 },
                children: (0, C.jsxs)(r5, {
                  children: [
                    (0, C.jsx)(r6, {
                      children: t.onlySupport.format(r3(n) || ""),
                    }),
                    (0, C.jsx)(
                      r9,
                      {
                        children:
                          (null == n ? void 0 : n.id) &&
                          (0, C.jsx)(rb, {
                            ecl: "H",
                            value: e,
                            image: (0, C.jsx)("img", { src: (0, g.NO)(n) }),
                          }),
                      },
                      null == n ? void 0 : n.id
                    ),
                    (0, C.jsx)(r7, { children: e }),
                    (0, C.jsx)(r8, {
                      children: (0, C.jsx)(rX, {
                        variant: "button",
                        string: e,
                        children: t.copyAddress,
                      }),
                    }),
                  ],
                }),
              });
            },
          },
          {
            title: "setupPasskey",
            path: "passkey-setup",
            element: () => {
              let n = it(),
                e = o8(),
                t = re("passkeySmartWallet");
              return (0, C.jsx)(i0, {
                children: (0, C.jsxs)(rP, {
                  children: [
                    (0, C.jsx)(rQ, { children: n.passkeyStorageInfo }),
                    (0, C.jsxs)(rV, {
                      children: [
                        (0, C.jsxs)(rH, {
                          children: [
                            (0, C.jsx)(ik, {}),
                            (0, C.jsxs)(rY, {
                              children: [
                                (0, C.jsx)(r_, {
                                  children: n.convenientAndFast,
                                }),
                                (0, C.jsx)(rW, {
                                  children: n.biometricTransactionInfo,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)(rH, {
                          children: [
                            (0, C.jsx)(iL, {}),
                            (0, C.jsxs)(rY, {
                              children: [
                                (0, C.jsx)(r_, {
                                  children: n.increasedSecurity,
                                }),
                                (0, C.jsx)(rW, {
                                  children: n.passkeySecurityInfo,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(rB, {
                      children: [
                        (0, C.jsx)(id, {}),
                        (0, C.jsx)(rR, { children: n.passkeyDeletionWarning }),
                      ],
                    }),
                    (0, C.jsx)(rh, {
                      onClick: () => {
                        e(t, { passkeyParams: { isRegistering: !0 } });
                      },
                      children: n.setupPasskey,
                    }),
                  ],
                }),
              });
            },
          },
          {
            title: "usePasskeyToLogin",
            path: "login-passkey",
            element: () => {
              let n = it(),
                { navigate: e } = oh(),
                t = o8(),
                i = re("passkeySmartWallet"),
                o = (n) => {
                  if (i) t(i, { passkeyParams: { isRegistering: n } });
                  else throw Error("Passkey is not configured.");
                };
              return (0, C.jsxs)(i0, {
                children: [
                  (0, C.jsx)(rZ, { children: (0, C.jsx)(iT, {}) }),
                  (0, C.jsx)(rF, { children: n.usePasskeyToLoginSmartAccount }),
                  (0, C.jsxs)(C.Fragment, {
                    children: [
                      (0, C.jsx)(rh, {
                        style: { marginTop: 16 },
                        onClick: () => {
                          oW() ? (e("passkey-setup"), oB()) : o(!0);
                        },
                        children: n.createNewPasskey,
                      }),
                      (0, C.jsx)(rh, {
                        style: { marginTop: 16 },
                        onClick: () => {
                          o(!1);
                        },
                        color: "secondary",
                        children: n.loginWithPasskey,
                      }),
                    ],
                  }),
                ],
              });
            },
          },
        ],
        aX = (n) => {
          let e = aK.find((e) => e.path === n);
          if (!e) throw Error("route path undefined");
          return e;
        },
        aq = { path: "signup" },
        a1 = (0, p.vt)((n) => ({
          route: aq,
          setRoute: (e) => {
            "string" == typeof e ? n({ route: { path: e } }) : n({ route: e });
          },
        }));
      function a0(n) {
        let e = (function () {
          let n = (0, s.useRef)(null);
          function e(e) {
            if (!n.current) return;
            let t = n.current.querySelectorAll(
                '\n        a[href]:not(:disabled),\n        button:not(:disabled),\n        textarea:not(:disabled),\n        input[type="text"]:not(:disabled),\n        input[type="radio"]:not(:disabled),\n        input[type="checkbox"]:not(:disabled),\n        select:not(:disabled)\n      '
              ),
              i = t[0],
              o = t[t.length - 1];
            ("Tab" === e.key || 9 === e.keyCode) &&
              (e.shiftKey
                ? document.activeElement === i &&
                  (o.focus(), e.preventDefault())
                : document.activeElement === o &&
                  (i.focus(), e.preventDefault()));
          }
          return (
            (0, s.useEffect)(
              () => (
                n.current &&
                  (n.current.addEventListener("keydown", e),
                  n.current.focus({ preventScroll: !0 })),
                () => {
                  n.current && n.current.removeEventListener("keydown", e);
                }
              ),
              []
            ),
            n
          );
        })();
        return (
          (0, s.useEffect)(() => {
            e.current && e.current.focus({ preventScroll: !0 });
          }, []),
          (0, C.jsx)("div", { ref: e, tabIndex: 0, children: n.children })
        );
      }
      var a2 = (n) => {
          let { onClick: e } = n;
          return (0, C.jsxs)("svg", {
            onClick: e,
            width: "171",
            height: "16",
            viewBox: "0 0 171 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M37.0801 10.4463C37.8076 10.4463 38.4326 10.0996 38.7647 9.51367H38.8428V10.3535H39.6436V3H38.8037V5.91992H38.7305C38.4326 5.34374 37.8125 4.99707 37.0801 4.99707C35.7422 4.99707 34.8682 6.07129 34.8682 7.72168C34.8682 9.37696 35.7324 10.4463 37.0801 10.4463ZM0 10.3535V3.30762H2.66113C3.99414 3.30762 4.91699 4.24511 4.91699 5.58789C4.91699 6.90624 3.97461 7.83887 2.65137 7.83887H0.878906V10.3535H0ZM2.43164 4.08887H0.878906V7.05762H2.43164C3.43262 7.05762 4.01367 6.5205 4.01367 5.58789C4.01367 4.62109 3.45215 4.08887 2.43164 4.08887ZM8.4082 10.4463C9.90719 10.4463 10.835 9.41114 10.835 7.72168C10.835 6.02735 9.90719 4.99707 8.4082 4.99707C6.90918 4.99707 5.98145 6.02735 5.98145 7.72168C5.98145 9.41114 6.90918 10.4463 8.4082 10.4463ZM6.85059 7.72168C6.85059 8.9668 7.41211 9.68945 8.4082 9.68945C9.40429 9.68945 9.96579 8.9668 9.96579 7.72168C9.96579 6.47168 9.40429 5.75391 8.4082 5.75391C7.41211 5.75391 6.85059 6.47168 6.85059 7.72168ZM18.7744 5.08984H17.9297L16.8945 9.29883H16.8164L15.6397 5.08984H14.834L13.6572 9.29883H13.5791L12.544 5.08984H11.6943L13.169 10.3535H14.0186L15.1904 6.28125H15.2686L16.4453 10.3535H17.2998L18.7744 5.08984ZM22.0264 9.7041C22.7051 9.7041 23.1641 9.45507 23.3838 8.99121H24.2236C23.9795 9.88964 23.1592 10.4463 22.0068 10.4463C20.5469 10.4463 19.6338 9.3916 19.6338 7.72656C19.6338 6.07128 20.5615 4.99707 22.0068 4.99707C23.4277 4.99707 24.292 6.00781 24.292 7.64355V7.96582H20.5078V8.00488C20.5518 9.04492 21.1328 9.7041 22.0264 9.7041ZM21.9971 5.73926C22.832 5.73926 23.3887 6.3545 23.4082 7.28711H20.5078C20.5713 6.3545 21.1572 5.73926 21.9971 5.73926ZM26.4502 10.3535H25.6104V5.08984H26.4111V5.87109H26.4893C26.6455 5.35839 27.251 4.99707 27.9492 4.99707C28.0859 4.99707 28.2617 5.00683 28.3692 5.02148V5.86133C28.3008 5.8418 27.9981 5.8125 27.832 5.8125C27.0313 5.8125 26.4502 6.34961 26.4502 7.0918V10.3535ZM32.9053 8.99121C32.6856 9.45507 32.2266 9.7041 31.5479 9.7041C30.6543 9.7041 30.0733 9.04492 30.0293 8.00488V7.96582H33.8135V7.64355C33.8135 6.00781 32.9492 4.99707 31.5283 4.99707C30.083 4.99707 29.1553 6.07128 29.1553 7.72656C29.1553 9.3916 30.0684 10.4463 31.5283 10.4463C32.6807 10.4463 33.501 9.88964 33.7451 8.99121H32.9053ZM32.9297 7.28711C32.9102 6.3545 32.3535 5.73926 31.5186 5.73926C30.6787 5.73926 30.0928 6.3545 30.0293 7.28711H32.9297ZM38.8233 7.72168C38.8233 6.51563 38.2275 5.75391 37.2754 5.75391C36.3184 5.75391 35.7373 6.4961 35.7373 7.72168C35.7373 8.95215 36.3135 9.68945 37.2754 9.68945C38.2324 9.68945 38.8233 8.9375 38.8233 7.72168ZM46.9531 10.3535C48.4522 10.3535 49.3408 9.61622 49.3408 8.37598C49.3408 7.44336 48.7305 6.78418 47.7686 6.66211V6.58398C48.4473 6.46191 48.9844 5.79786 48.9844 5.06543C48.9844 3.98633 48.1934 3.30762 46.8994 3.30762H44.2041V10.3535H46.9531ZM46.7139 4.08398H45.083V6.34473H46.4893C47.5537 6.34473 48.0957 5.96387 48.0957 5.2168C48.0957 4.49903 47.5879 4.08398 46.7139 4.08398ZM45.083 9.57715V7.10156H46.7383C47.8613 7.10156 48.4375 7.5166 48.4375 8.33203C48.4375 9.14746 47.8809 9.57715 46.8213 9.57715H45.083ZM52.9199 10.6758C52.4707 11.8965 52.0508 12.2578 51.1182 12.2578C51.0059 12.2578 50.8594 12.248 50.7422 12.2285V11.5107C50.8447 11.5303 50.9766 11.5351 51.0938 11.5351C51.5772 11.5351 51.8408 11.3057 52.0606 10.6709L52.1582 10.3584L50.21 5.08984H51.1182L52.5635 9.4209H52.6416L54.082 5.08984H54.9756L52.9199 10.6758Z",
                fill: "var(--pcm-body-color-tertiary)",
              }),
              (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M108.143 10.7092C109.558 10.7092 110.599 9.87427 110.775 8.62183H109.795C109.619 9.33813 108.982 9.79077 108.143 9.79077C107 9.79077 106.288 8.86353 106.288 7.38696C106.288 5.90601 107 4.97876 108.138 4.97876C108.973 4.97876 109.61 5.47974 109.795 6.25757H110.775C110.617 4.96558 109.536 4.0603 108.138 4.0603C106.376 4.0603 105.282 5.33032 105.282 7.38696C105.282 9.43921 106.38 10.7092 108.143 10.7092ZM79.0771 10.5554V4.21411H81.5601C82.7993 4.21411 83.6519 5.07104 83.6519 6.32788C83.6519 7.56714 82.7729 8.41968 81.5293 8.41968H80.0615V10.5554H79.0771ZM81.3008 5.08423H80.0615V7.55396H81.3008C82.1489 7.55396 82.6455 7.1145 82.6455 6.32788C82.6455 5.52368 82.1665 5.08423 81.3008 5.08423ZM89.022 10.5554H90.0679L87.7783 4.21411H86.7192L84.4297 10.5554H85.4404L86.0249 8.87231H88.4419L89.022 10.5554ZM87.2729 5.36548H87.1982L86.2754 8.04614H88.1914L87.2729 5.36548ZM92.1553 5.07983H93.544C94.3042 5.07983 94.77 5.49731 94.77 6.18726C94.77 6.89478 94.3306 7.29907 93.5703 7.29907H92.1553V5.07983ZM93.544 8.13843H92.1553V10.5554H91.1709V4.21411H93.6802C94.959 4.21411 95.7808 4.97437 95.7808 6.16528C95.7808 7.01782 95.3238 7.71216 94.5503 7.97583L95.9741 10.5554H94.836L93.544 8.13843ZM99.7754 10.5554V5.1106H101.766V4.21411H96.7959V5.1106H98.791V10.5554H99.7754ZM103.955 4.21411V10.5554H102.97V4.21411H103.955ZM113.051 9.65015H116.022V10.5554H112.067V4.21411H113.051V9.65015ZM121.291 9.65894H118.25V7.7561H121.128V6.90356H118.25V5.1106H121.291V4.21411H117.266V10.5554H121.291V9.65894ZM126.129 6.05103V10.5554H125.171V4.21411H126.059L129.315 8.71851H129.386V4.21411H130.344V10.5554H129.456L126.2 6.05103H126.129ZM135.96 9.65894H132.919V7.7561H135.797V6.90356H132.919V5.1106H135.96V4.21411H131.935V10.5554H135.96V9.65894ZM139.972 5.1106V10.5554H138.988V5.1106H136.993V4.21411H141.963V5.1106H139.972ZM146.762 5.90161H146.823L148.186 10.5554H149.113L150.827 4.21411H149.803L148.643 9.07007H148.581L147.249 4.21411H146.335L145.013 9.07007H144.951L143.787 4.21411H142.763L144.472 10.5554H145.404L146.762 5.90161ZM151.754 7.38257C151.754 5.33472 152.896 4.0603 154.716 4.0603C156.544 4.0603 157.669 5.33911 157.669 7.38257C157.669 9.42163 156.553 10.7092 154.716 10.7092C152.874 10.7092 151.754 9.42603 151.754 7.38257ZM154.716 4.97876C155.92 4.97876 156.663 5.9104 156.663 7.38257C156.663 8.84595 155.92 9.79077 154.716 9.79077C153.499 9.79077 152.76 8.84595 152.76 7.38257C152.76 5.9104 153.52 4.97876 154.716 4.97876ZM161.374 5.07983H159.985V7.29907H161.4C162.16 7.29907 162.6 6.89478 162.6 6.18726C162.6 5.49731 162.134 5.07983 161.374 5.07983ZM159.985 8.13843H161.374L162.665 10.5554H163.804L162.38 7.97583C163.153 7.71216 163.61 7.01782 163.61 6.16528C163.61 4.97437 162.789 4.21411 161.51 4.21411H159V10.5554H159.985V8.13843ZM165.997 8.47241V10.5554H165.012V4.21411H165.997V7.18481H166.067L168.69 4.21411H169.855L167.403 6.96948L170.066 10.5554H168.835L166.708 7.677L165.997 8.47241Z",
                fill: "var(--pcm-body-color-tertiary)",
              }),
              (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M63.2445 0.422143C62.9138 0.880737 63.0139 1.51852 63.4694 1.85494L63.4666 1.85494C63.6848 2.01527 63.9587 2.08155 64.2265 2.03886C64.4944 1.99617 64.7337 1.84809 64.8907 1.62795C65.2214 1.16936 65.1213 0.53157 64.6658 0.195153C64.4478 0.0357644 64.1746 -0.0299537 63.9075 0.0127103C63.6403 0.0553743 63.4015 0.202857 63.2445 0.422143ZM65.4324 1.66226C65.1018 1.20363 65.2019 0.565954 65.6572 0.229463C65.8755 0.0692639 66.1493 0.00306878 66.4171 0.0457548C66.6849 0.0884409 66.9242 0.236427 67.0813 0.456453C67.4119 0.91508 67.3118 1.55276 66.8564 1.88925C66.6382 2.04952 66.3644 2.11575 66.0965 2.07306C65.8287 2.03037 65.5894 1.88234 65.4324 1.66226ZM61.0072 1.35646C60.8321 1.89298 61.1239 2.46975 61.6613 2.64928L61.6605 2.64928C61.7623 2.68271 61.8689 2.69975 61.9761 2.69975C62.4195 2.69802 62.811 2.41142 62.9447 1.99069C63.12 1.45423 62.8283 0.877388 62.2909 0.697863C62.0329 0.614373 61.7521 0.636999 61.511 0.760702C61.2699 0.884405 61.0885 1.09891 61.0072 1.35646ZM67.3576 2.08989C67.1825 1.55337 67.4743 0.976595 68.0117 0.797063C68.2696 0.71365 68.5504 0.736314 68.7914 0.860012C69.0325 0.983709 69.2138 1.19817 69.2951 1.45566C69.4703 1.99217 69.1784 2.56895 68.641 2.74848C68.5394 2.7816 68.4332 2.79839 68.3262 2.79821C67.883 2.7965 67.4916 2.51028 67.3576 2.08989ZM60.1845 1.9161C59.6186 1.91939 59.1625 2.37874 59.1661 2.94191C59.1625 3.50507 59.6186 3.96443 60.1845 3.96772C60.7538 3.96772 61.2153 3.50845 61.2153 2.94191C61.2153 2.37537 60.7538 1.9161 60.1845 1.9161ZM69.0463 3.0958C69.0412 2.67981 69.2891 2.30197 69.6739 2.13927C70.0587 1.97657 70.5041 2.06124 70.8015 2.35361C71.0989 2.64599 71.1894 3.08816 71.0306 3.47301C70.8718 3.85786 70.4952 4.10915 70.0771 4.10918C69.5113 4.11262 69.0498 3.65887 69.0465 3.0958H69.0463ZM65.3774 3.03315C65.1046 3.23532 65.0446 3.61748 65.2422 3.89288C65.3364 4.02478 65.4798 4.1135 65.6404 4.13912C65.8009 4.16474 65.965 4.12511 66.0959 4.02913C66.3687 3.82696 66.4288 3.4448 66.2311 3.1694C66.1368 3.03761 65.9934 2.94898 65.8329 2.92337C65.6724 2.89775 65.5083 2.9373 65.3774 3.03315ZM63.9993 4.03335C63.7265 3.83119 63.6664 3.44903 63.8641 3.17362C63.9584 3.04184 64.1018 2.95321 64.2623 2.92759C64.4228 2.90198 64.5869 2.94153 64.7178 3.03738C64.9906 3.23954 65.0506 3.62171 64.853 3.89711C64.7588 4.029 64.6154 4.11773 64.4548 4.14335C64.2943 4.16897 64.1302 4.12933 63.9993 4.03335ZM66.8602 3.37078C66.5378 3.47846 66.3627 3.82437 66.4677 4.14622C66.5479 4.39862 66.7828 4.57054 67.0488 4.57161C67.1131 4.57158 67.1769 4.56134 67.2379 4.54128C67.5603 4.43361 67.7354 4.08769 67.6304 3.76584C67.5817 3.61131 67.4728 3.48261 67.3281 3.4084C67.1835 3.3342 67.015 3.32065 66.8602 3.37078ZM62.8603 4.55396C62.5379 4.44618 62.3629 4.10012 62.468 3.77827C62.5168 3.62374 62.6256 3.49504 62.7703 3.42083C62.915 3.34663 63.0835 3.33308 63.2383 3.38321C63.5607 3.49078 63.7359 3.83679 63.6308 4.15866C63.5505 4.41105 63.3157 4.58298 63.0496 4.58405C62.9853 4.58411 62.9214 4.57396 62.8603 4.55396ZM70.3657 4.58181C70.1905 5.11832 70.4824 5.6951 71.0198 5.87463L71.021 5.87463C71.1222 5.90786 71.228 5.92489 71.3346 5.9251C71.778 5.92337 72.1695 5.63677 72.3032 5.21604C72.4785 4.67958 72.1867 4.10274 71.6493 3.92321C71.3914 3.83979 71.1106 3.86245 70.8695 3.98615C70.6284 4.10984 70.447 4.3243 70.3657 4.58181ZM68.3987 5.69886C68.2937 6.02071 68.4688 6.36663 68.7912 6.47431L68.7913 6.47434C68.8522 6.49425 68.9159 6.50439 68.9798 6.50439C69.2458 6.50332 69.4807 6.33139 69.5609 6.079C69.666 5.75714 69.4909 5.41112 69.1685 5.30355C69.0137 5.25359 68.8453 5.26725 68.7007 5.34149C68.5562 5.41573 68.4474 5.5444 68.3987 5.69886ZM62.7523 6.18441C62.7552 6.00662 62.9019 5.86454 63.0806 5.86645C63.2592 5.86835 63.4028 6.01353 63.4019 6.19135C63.4009 6.36916 63.2558 6.51282 63.0771 6.51284C62.9901 6.51212 62.907 6.47698 62.8461 6.41518C62.7851 6.35338 62.7514 6.26999 62.7523 6.18342V6.18441ZM71.381 7.8355C70.9256 7.49908 70.8255 6.86129 71.1562 6.4027C71.3132 6.18268 71.5526 6.03469 71.8204 5.992C72.0882 5.94932 72.362 6.01551 72.5802 6.17571C73.0357 6.51213 73.1358 7.14992 72.8051 7.60851C72.6481 7.82865 72.4088 7.97672 72.1409 8.01942C71.8731 8.06211 71.5992 7.99583 71.381 7.8355ZM66.9871 7.98069C66.8412 8.08823 66.8091 8.29236 66.9149 8.43915C66.9651 8.50945 67.0416 8.55673 67.1272 8.57038C67.2128 8.58403 67.3003 8.5629 67.3701 8.51175C67.5159 8.40414 67.548 8.20011 67.4423 8.05329C67.3921 7.98299 67.3156 7.93571 67.23 7.92206C67.1444 7.90841 67.0569 7.92954 66.9871 7.98069ZM68.9196 8.95752C68.7219 8.68212 68.782 8.29996 69.0548 8.09779C69.1857 8.00188 69.3498 7.96229 69.5103 7.9879C69.6708 8.01352 69.8143 8.1022 69.9085 8.23404C70.1061 8.50944 70.0461 8.8916 69.7733 9.09377C69.6424 9.18968 69.4783 9.22928 69.3178 9.20366C69.1573 9.17804 69.0138 9.08936 68.9196 8.95752ZM71.1227 9.81253C70.792 9.35394 70.8921 8.71615 71.3475 8.37973C71.5657 8.21993 71.8392 8.15397 72.1067 8.19664C72.3742 8.23932 72.6133 8.38706 72.7704 8.60672C73.1009 9.06535 73.0009 9.70303 72.5455 10.0395C72.3273 10.1999 72.0535 10.2661 71.7856 10.2234C71.5178 10.1807 71.2784 10.0327 71.1214 9.81253L71.1227 9.81253ZM68.8037 9.3317C68.4813 9.43937 68.3062 9.78529 68.4112 10.1071C68.4915 10.3596 68.7264 10.5316 68.9926 10.5325C69.0567 10.5325 69.1205 10.5222 69.1814 10.5022C69.5037 10.3944 69.6787 10.0485 69.5737 9.72675C69.5249 9.57228 69.4161 9.44363 69.2715 9.36943C69.1269 9.29523 68.9584 9.28165 68.8037 9.3317ZM64.9996 10.5452C64.8539 10.4376 64.8217 10.2336 64.9274 10.0868C64.9777 10.0165 65.0542 9.96918 65.1397 9.95553C65.2253 9.94188 65.3128 9.963 65.3826 10.0142C65.5284 10.1218 65.5605 10.3258 65.4548 10.4726C65.4046 10.5429 65.3281 10.5902 65.2425 10.6038C65.1569 10.6175 65.0694 10.5964 64.9996 10.5452ZM64.2466 10.0201C64.1005 10.1274 64.0679 10.3315 64.1734 10.4786H64.1742C64.2244 10.549 64.3009 10.5963 64.3866 10.6099C64.4722 10.6236 64.5598 10.6024 64.6296 10.5512C64.7754 10.4436 64.8075 10.2395 64.7018 10.0927C64.6516 10.0224 64.5751 9.97514 64.4895 9.9615C64.4039 9.94784 64.3164 9.96897 64.2466 10.0201ZM70.2677 11.612C70.0924 11.0756 70.3842 10.4987 70.9216 10.3192C71.1795 10.2357 71.4603 10.2584 71.7015 10.3821C71.9426 10.5058 72.124 10.7203 72.2052 10.9778C72.3804 11.5143 72.0886 12.0911 71.5512 12.2706C71.4495 12.3038 71.3431 12.3206 71.2361 12.3204C70.793 12.3185 70.4017 12.0323 70.2677 11.612ZM66.4919 11.6715C66.387 11.9933 66.5621 12.3392 66.8844 12.4469C66.9454 12.4669 67.0091 12.4772 67.0733 12.4772C67.3393 12.4762 67.5743 12.3043 67.6544 12.0519C67.7594 11.73 67.5843 11.3841 67.2619 11.2764C67.1072 11.2264 66.9388 11.2399 66.7941 11.3141C66.6495 11.3883 66.5407 11.517 66.4919 11.6715ZM62.4922 12.0643C62.3873 11.7424 62.5624 11.3965 62.8847 11.2888C63.0396 11.2389 63.208 11.2526 63.3526 11.3269C63.4972 11.4011 63.606 11.5299 63.6548 11.6844C63.7597 12.0062 63.5846 12.3522 63.2623 12.4598C63.2012 12.4799 63.1374 12.4901 63.0731 12.4902C62.8071 12.4889 62.5723 12.3168 62.4922 12.0643ZM65.2695 11.933C65.0725 12.2082 65.1325 12.5896 65.4046 12.7917V12.7927C65.5355 12.8887 65.6996 12.9284 65.8602 12.9027C66.0207 12.8771 66.1642 12.7884 66.2583 12.6565C66.456 12.3811 66.3959 11.9989 66.1232 11.7968C65.9923 11.7008 65.8281 11.6613 65.6676 11.6869C65.5071 11.7125 65.3637 11.8012 65.2695 11.933ZM63.8911 12.66C63.6934 12.3846 63.7535 12.0024 64.0263 11.8002C64.1572 11.7043 64.3213 11.6647 64.4818 11.6904C64.6423 11.716 64.7858 11.8047 64.88 11.9365C65.0785 12.2117 65.0183 12.5945 64.7448 12.7962C64.6139 12.8922 64.4498 12.9318 64.2892 12.9062C64.1287 12.8806 63.9853 12.7919 63.8911 12.66ZM60.0308 11.8893C59.4649 11.8857 59.0033 12.3395 59 12.9026C59.0033 13.4658 59.4649 13.9196 60.0308 13.916C60.5933 13.916 61.0492 13.4623 61.0492 12.9026C61.0492 12.343 60.5933 11.8893 60.0308 11.8893ZM68.9054 13.0583C68.9122 12.5003 69.3712 12.0528 69.9319 12.0574C70.4927 12.0619 70.9442 12.5167 70.942 13.0748C70.9397 13.6328 70.4845 14.084 69.9237 14.0841C69.3578 14.0808 68.9018 13.6214 68.9054 13.0583ZM61.4669 13.2507C60.9295 13.4302 60.6378 14.0071 60.8131 14.5435C60.947 14.9639 61.3383 15.2501 61.7815 15.2518C61.8885 15.252 61.9948 15.2352 62.0965 15.2021C62.6339 15.0226 62.9257 14.4458 62.7506 13.9093C62.6692 13.6518 62.4878 13.4373 62.2468 13.3136C62.0057 13.1899 61.7249 13.1673 61.4669 13.2507ZM67.8193 15.3013C67.2819 15.1218 66.9901 14.545 67.1652 14.0085C67.2466 13.7512 67.4278 13.537 67.6687 13.4133C67.9096 13.2897 68.1901 13.267 68.4479 13.3501C68.9853 13.5297 69.277 14.1065 69.1017 14.643C68.9681 15.0637 68.5765 15.3503 68.1331 15.352C68.0265 15.3518 67.9206 15.3347 67.8193 15.3013ZM63.2535 14.1102C62.798 14.4466 62.698 15.0844 63.0287 15.543H63.0274C63.1844 15.7631 63.4237 15.9112 63.6916 15.9539C63.9594 15.9966 64.2333 15.9303 64.4515 15.77C64.907 15.4335 65.007 14.7958 64.6763 14.3372C64.5193 14.1175 64.2802 13.9698 64.0127 13.9271C63.7452 13.8844 63.4717 13.9504 63.2535 14.1102ZM65.2177 14.3712C64.887 14.8298 64.9871 15.4676 65.4426 15.804C65.6607 15.964 65.9343 16.03 66.2018 15.9873C66.4694 15.9446 66.7085 15.7968 66.8654 15.577C67.1961 15.1184 67.096 14.4807 66.6406 14.1442C66.4224 13.9844 66.1489 13.9185 65.8814 13.9612C65.6139 14.0038 65.3748 14.1516 65.2177 14.3712ZM61.7136 10.4863C61.4825 10.5841 61.3338 10.8112 61.337 11.0611C61.3392 11.3992 61.6164 11.6714 61.9561 11.6692C62.2072 11.6692 62.4335 11.5182 62.5288 11.287C62.6241 11.0558 62.5697 10.7902 62.391 10.6147C62.2122 10.4391 61.9446 10.3884 61.7136 10.4863ZM67.5742 11.042C67.5786 10.7072 67.8541 10.4389 68.1906 10.4418C68.527 10.4447 68.7978 10.7177 68.7964 11.0525C68.7949 11.3873 68.5218 11.658 68.1853 11.658C67.8456 11.6558 67.572 11.38 67.5742 11.042ZM63.4082 10.1581C63.3521 9.98641 63.4455 9.80185 63.6175 9.74441C63.7001 9.7176 63.79 9.72481 63.8672 9.76443C63.9443 9.80404 64.0024 9.87276 64.0283 9.95524C64.0843 10.1269 63.9909 10.3115 63.8189 10.3689C63.7866 10.3795 63.7529 10.385 63.719 10.3851C63.5767 10.3849 63.451 10.2931 63.4082 10.1581ZM65.5972 9.93783C65.5412 10.1095 65.6346 10.2941 65.8066 10.3515L65.8059 10.3515C65.8386 10.3623 65.8728 10.3677 65.9073 10.3677C66.0492 10.3671 66.1746 10.2754 66.2173 10.1407C66.2734 9.96901 66.18 9.78445 66.008 9.727C65.9254 9.7002 65.8355 9.70741 65.7584 9.74702C65.6812 9.78664 65.6232 9.85536 65.5972 9.93783ZM62.9751 9.30825C62.852 9.36073 62.7729 9.48208 62.7751 9.61537C62.7767 9.79523 62.9244 9.93982 63.1051 9.93858C63.2391 9.93856 63.3597 9.85796 63.4105 9.7346C63.4613 9.61123 63.432 9.46957 63.3366 9.37607C63.2411 9.28256 63.0983 9.25576 62.9751 9.30825ZM66.1871 9.58827C66.19 9.41048 66.3367 9.2684 66.5154 9.27031C66.694 9.27221 66.8376 9.41739 66.8367 9.59521C66.8357 9.77302 66.6906 9.91668 66.5119 9.9167C66.3312 9.91492 66.186 9.76789 66.1874 9.58803L66.1871 9.58827ZM66.8502 8.65819C66.6782 8.71562 66.5849 8.90025 66.6411 9.07189L66.6413 9.07164C66.6841 9.20659 66.8097 9.2985 66.9519 9.29888C66.9858 9.29877 67.0196 9.29331 67.0518 9.28272C67.2238 9.22528 67.3171 9.04065 67.2609 8.86901C67.235 8.78654 67.177 8.71782 67.0998 8.67821C67.0226 8.63859 66.9327 8.63138 66.8502 8.65819ZM68.9156 6.84674C68.7179 7.12214 68.778 7.5043 69.0508 7.70647C69.1817 7.80238 69.3458 7.84197 69.5063 7.81636C69.6668 7.79074 69.8103 7.70206 69.9045 7.57022C70.1021 7.29482 70.0421 6.91266 69.7693 6.71049C69.6384 6.61458 69.4743 6.57499 69.3138 6.6006C69.1533 6.62622 69.0098 6.7149 68.9156 6.84674ZM66.9809 7.75321C66.8351 7.6456 66.803 7.44157 66.9087 7.29475C66.9589 7.22445 67.0354 7.17717 67.121 7.16352C67.2066 7.14987 67.2941 7.171 67.3639 7.22215C67.5097 7.32969 67.5419 7.53382 67.4361 7.68061C67.3858 7.75098 67.3093 7.79831 67.2236 7.81196C67.138 7.82561 67.0504 7.80444 66.9806 7.75321H66.9809ZM66.6238 6.66574C66.5678 6.83744 66.6612 7.022 66.8332 7.07945V7.0787C66.866 7.08948 66.9003 7.09493 66.9349 7.09486C67.0767 7.09419 67.2019 7.00246 67.2447 6.86787C67.3002 6.69618 67.2065 6.51205 67.0346 6.45491C66.952 6.42811 66.8621 6.43532 66.7849 6.47494C66.7078 6.51455 66.6497 6.58327 66.6238 6.66574ZM66.1554 6.15532C66.1533 6.02203 66.2323 5.90068 66.3554 5.8482C66.4786 5.79572 66.6214 5.82251 66.7169 5.91602C66.8124 6.00952 66.8416 6.15118 66.7908 6.27455C66.7401 6.39792 66.6194 6.47851 66.4854 6.47853C66.3047 6.47977 66.157 6.33518 66.1554 6.15532ZM63.3729 5.63024C63.3169 5.80187 63.4102 5.9864 63.582 6.04394L63.5833 6.04394C63.6154 6.05448 63.6489 6.05994 63.6827 6.0601C63.8247 6.05954 63.95 5.96779 63.9928 5.83311C64.049 5.66147 63.9556 5.47684 63.7837 5.41941C63.7011 5.39261 63.6112 5.39982 63.534 5.43943C63.4569 5.47904 63.3988 5.54776 63.3729 5.63024ZM65.561 5.81571C65.5048 5.64407 65.5982 5.45944 65.7701 5.40201C65.8527 5.3752 65.9426 5.38241 66.0198 5.42203C66.0969 5.46164 66.155 5.53036 66.1809 5.61283C66.2371 5.78448 66.1437 5.9691 65.9718 6.02654C65.9395 6.03714 65.9058 6.04259 65.8718 6.0427C65.7301 6.04192 65.605 5.95022 65.5623 5.81571H65.561ZM64.2064 5.75704C64.0606 5.64943 64.0285 5.4454 64.1342 5.29858C64.1847 5.22862 64.2611 5.1816 64.3466 5.16797C64.4321 5.15435 64.5195 5.17523 64.5894 5.22598C64.7353 5.33351 64.7674 5.53765 64.6616 5.68444C64.6114 5.75474 64.5349 5.80202 64.4493 5.81567C64.3637 5.82932 64.2762 5.80819 64.2064 5.75704ZM64.9619 5.22026C64.8158 5.3274 64.7831 5.53141 64.8885 5.67847L64.8897 5.67872C64.9399 5.74902 65.0164 5.7963 65.102 5.80995C65.1876 5.8236 65.2751 5.80247 65.3449 5.75132C65.4907 5.64371 65.5228 5.43968 65.4171 5.29286C65.3666 5.2229 65.2902 5.17589 65.2047 5.16226C65.1192 5.14863 65.0318 5.16951 64.9619 5.22026ZM61.3255 4.78742C61.3299 4.45263 61.6054 4.18436 61.9419 4.18727C62.2783 4.19018 62.5491 4.46318 62.5477 4.79799C62.5462 5.1328 62.2731 5.40347 61.9366 5.4035C61.5969 5.40131 61.3233 5.12547 61.3255 4.78742ZM67.9246 4.19342C67.6935 4.29128 67.5448 4.51837 67.548 4.76827C67.5501 5.10629 67.8272 5.3786 68.1668 5.3764C68.418 5.37648 68.6443 5.22556 68.7397 4.99438C68.8351 4.76319 68.7808 4.49755 68.602 4.32195C68.4233 4.14634 68.1557 4.09557 67.9246 4.19342Z",
                fill: "var(--pcm-body-color-tertiary)",
              }),
            ],
          });
        },
        a4 = x.I4.div(t$()),
        a3 = () => {
          let n = (0, s.useCallback)(() => {
            window.open("https://particle.network", "_blank");
          }, []);
          return (0, C.jsx)(a4, { children: (0, C.jsx)(a2, { onClick: n }) });
        },
        a5 = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect,
        a6 = (n) => {
          let { children: e } = n;
          return (
            a5(() => {
              let n = {
                  overflow: document.body.style.overflow,
                  position: document.body.style.position,
                  touchAction: document.body.style.touchAction,
                  paddingRight: document.body.style.paddingRight,
                },
                e = getComputedStyle(document.body),
                t =
                  parseInt(e.marginRight) +
                  parseInt(e.paddingRight) +
                  parseInt(e.borderRight) +
                  parseInt(e.marginLeft) +
                  parseInt(e.paddingLeft) +
                  parseInt(e.borderLeft),
                i = window.innerWidth - document.body.offsetWidth - t;
              return (
                document.documentElement.style.setProperty(
                  "--pcm-scrollbar-width",
                  "".concat(i, "px")
                ),
                (document.body.style.overflow = "hidden"),
                (document.body.style.position = "relative"),
                (document.body.style.touchAction = "none"),
                () => {
                  document.documentElement.style.removeProperty(
                    "--pcm-scrollbar-width"
                  ),
                    (document.body.style.overflow = n.overflow),
                    (document.body.style.position = n.position),
                    (document.body.style.touchAction = n.touchAction);
                }
              );
            }, []),
            (0, C.jsx)(C.Fragment, { children: e })
          );
        },
        a9 = "2.0.15",
        a7 = (n) => {
          let { selector: e, children: t } = (n = {
              selector: "__PARTICLE_CONNECTKIT__",
              ...n,
            }),
            i = (0, s.useRef)(null),
            [o, r] = (0, s.useState)(!1);
          return ((0, s.useEffect)(() => {
            let n = "#" + (null == e ? void 0 : e.replace(/^#/, ""));
            if (((i.current = document.querySelector(n)), !i.current)) {
              let n = document.createElement("div");
              n.setAttribute("id", e),
                n.setAttribute("data-connectkit-version", "".concat(a9)),
                document.body.appendChild(n),
                (i.current = n);
            }
            r(!0);
          }, [e]),
          i.current && o)
            ? (0, N.createPortal)(t, i.current)
            : null;
        },
        a8 = (n) => {
          let { children: e, open: t, title: i, onClose: o, onBack: r } = n,
            l = a1((n) => n.route),
            { appearance: a } = sd(),
            c = oZ(),
            d = a.inlineSelectorId,
            { error: u } = ii(),
            [p, g] = (0, T.A)({
              timeout: 160,
              preEnter: !0,
              mountOnEnter: !0,
              unmountOnExit: !0,
            }),
            M = !("exited" === p || "unmounted" === p),
            x = "preEnter" === p || "exiting" !== p;
          (0, s.useEffect)(() => {
            g(t);
          }, [t]);
          let j = (0, s.useRef)(null),
            [f, y] = (0, s.useState)({ width: void 0, height: void 0 }),
            m = (n) => {
              let e = {
                width: (null == n ? void 0 : n.offsetWidth) || void 0,
                height: (null == n ? void 0 : n.offsetHeight) || void 0,
              };
              y({
                width: "".concat(o_(null == e ? void 0 : e.width), "px"),
                height: "".concat(o_(null == e ? void 0 : e.height), "px"),
              });
            },
            w = (0, s.useCallback)((n) => {
              n && ((j.current = n), m(n));
            }, []),
            I = (0, s.useMemo)(
              () => ({ "--height": f.height, "--width": f.width }),
              [f]
            );
          (0, s.useEffect)(() => {
            j.current && m(j.current);
          }, [l.path]),
            (0, s.useEffect)(() => {
              let n = j.current;
              if (!n) return;
              let e = new b.A((e) => {
                for (let t of e) t.target === n && m(j.current);
              });
              return (
                e.observe(n),
                () => {
                  e.unobserve(n);
                }
              );
            }, [j.current]),
            (0, s.useEffect)(() => {
              if (!M) {
                y({ width: void 0, height: void 0 });
                return;
              }
              if (!1 !== a.isDismissable) {
                let n = (n) => {
                  "Escape" === n.key && o && o();
                };
                return (
                  document.addEventListener("keydown", n),
                  () => {
                    document.removeEventListener("keydown", n);
                  }
                );
              }
            }, [M, o, a.isDismissable]);
          let N = (0, C.jsx)(lN, {
            $useTheme: null == a ? void 0 : a.theme,
            $useMode: null == a ? void 0 : a.mode,
            children: (0, C.jsxs)(i$, {
              style: {
                pointerEvents: x ? "auto" : "none",
                position: d ? "relative" : void 0,
              },
              children: [
                !d &&
                  (0, C.jsx)(iJ, {
                    $active: x,
                    onClick: !1 !== a.isDismissable ? o : void 0,
                  }),
                (0, C.jsx)(iK, {
                  style: I,
                  initial: !1,
                  $positionInside: !!d,
                  children: (0, C.jsxs)(iX, {
                    className: "".concat(x && "active"),
                    initial: !1,
                    $positionInside: !!d,
                    children: [
                      (0, C.jsxs)(i2, {
                        children: [
                          (0, C.jsx)(h.N, {
                            children:
                              r &&
                              (0, C.jsx)(i4, {
                                onClick: r,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: {
                                  duration: c ? 0 : 0.1,
                                  delay: c ? 0.01 : 0,
                                },
                                children: (0, C.jsx)(il, {}),
                              }),
                          }),
                          o &&
                            !d &&
                            (0, C.jsx)(i3, {
                              onClick: o,
                              children: (0, C.jsx)(ir, {}),
                            }),
                        ],
                      }),
                      i &&
                        (0, C.jsx)(i5, {
                          children:
                            "string" == typeof i ? i : (0, C.jsx)(i, {}),
                        }),
                      (0, C.jsx)(iq, {
                        children: (0, C.jsxs)(i1, {
                          ref: w,
                          children: [
                            (0, C.jsx)(i9, {
                              $display: !!u,
                              children: (0, C.jsxs)(i6, {
                                children: [(0, C.jsx)(ig, {}), u],
                              }),
                            }),
                            e,
                            (0, C.jsx)(a3, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
          return (
            M &&
            (0, C.jsx)(C.Fragment, {
              children: d
                ? (0, C.jsx)(a7, { selector: d, children: N })
                : (0, C.jsx)(a7, {
                    children: (0, C.jsx)(a0, {
                      children: (0, C.jsx)(a6, { children: N }),
                    }),
                  }),
            })
          );
        },
        sn = () => {
          let { setOpen: n, open: e } = io(),
            { route: t } = a1(),
            { navigate: i } = oh(),
            o = it(),
            { hideError: r } = ii(),
            { isConnected: l } = t3();
          (0, s.useEffect)(() => {
            n(!1);
          }, [l, n]),
            (0, s.useEffect)(() => {
              r();
            }, [t, r]);
          let {
              element: a,
              title: c,
              state: d,
            } = (0, s.useMemo)(() => ({ ...aX(t.path), state: t.state }), [t]),
            u = (0, s.useCallback)(() => {
              n(!1);
            }, [n]),
            p = (0, s.useCallback)(() => {
              i("signup");
            }, [i]),
            g = (0, s.useMemo)(
              () => "signup" !== t.path && "wallet-info" !== t.path,
              [t.path]
            );
          return (0, C.jsx)(a8, {
            open: e,
            onClose: u,
            title: "string" == typeof c ? o[c] : c,
            onBack: g ? p : void 0,
            children: (0, C.jsx)(a, { ...d }),
          });
        },
        se = (n) =>
          n
            .filter(
              (n, e, t) =>
                t.findIndex(
                  (e) => e.id === n.id && e.chainType === n.chainType
                ) === e
            )
            .filter((n, e, t) => {
              if ("solana" === n.chainType || n.id.includes(".")) return !0;
              let i = Object.keys(oR).find(
                (e) =>
                  -1 !==
                  e
                    .split(",")
                    .map((n) => n.trim())
                    .indexOf(n.id)
              );
              if (i && i.includes(",")) {
                let n = i
                  .split(",")
                  .map((n) => n.trim())
                  .filter((n) => n.includes("."));
                return !t.find((e) => n.includes(e.id));
              }
              return !0;
            });
      async function st(n) {
        var e, t;
        let i,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (r && r === n.uid) return [];
        let l = r ? "reconnecting" : void 0;
        (r = n.uid),
          n.setState((n) => ({
            ...n,
            status: n.current || l ? "reconnecting" : "connecting",
          }));
        let a = [];
        if (null === (e = o.connectors) || void 0 === e ? void 0 : e.length)
          a.push(...o.connectors);
        else {
          let e = n.connectors;
          a.push(...se(e));
        }
        try {
          i = await (null === (t = n.storage) || void 0 === t
            ? void 0
            : t.getItem("recentConnectorId"));
        } catch (n) {}
        let s = {};
        for (let [, e] of n.state.connections) s[e.connector.id] = 1;
        i && (s[i] = 0);
        let c =
            Object.keys(s).length > 0
              ? [...a].sort((n, e) => {
                  var t, i;
                  return (
                    (null !== (t = s[n.id]) && void 0 !== t ? t : 10) -
                    (null !== (i = s[e.id]) && void 0 !== i ? i : 10)
                  );
                })
              : a,
          d = !1,
          u = [],
          p = [];
        for (let e of c) {
          let t = await e.getProvider().catch(() => void 0);
          if (!t || p.some((n) => n === t) || !(await e.isAuthorized()))
            continue;
          let i = await e.connect({ isReconnecting: !0 }).catch(() => null);
          i &&
            (e.emitter.off("connect", n._internal.events.connect),
            e.emitter.on("change", n._internal.events.change),
            e.emitter.on("disconnect", n._internal.events.disconnect),
            n.setState((n) => {
              let t = new Map(d ? n.connections : new Map()).set(e.uid, {
                accounts: i.accounts,
                chainId: i.chainId,
                connector: e,
              });
              return { ...n, current: d ? n.current : e.uid, connections: t };
            }),
            u.push({ accounts: i.accounts, chainId: i.chainId, connector: e }),
            p.push(t),
            (d = !0));
        }
        return (
          ("reconnecting" === n.state.status ||
            "connecting" === n.state.status) &&
            (d
              ? n.setState((n) => ({ ...n, status: "connected" }))
              : n.setState((n) => ({
                  ...n,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (r = void 0),
          u
        );
      }
      var si = (0, s.createContext)(null),
        so = (n) => {
          let { reconnectOnMount: e } = n,
            { config: t } = sa(),
            i = l5(),
            o = t3(),
            { appearance: r } = sd(),
            a = r0((n) => n.setSmartAccount),
            c = async (n, e) => {
              var i, o, r;
              let l = n.filter((n) => n.connector && n.connector.getProvider);
              for (let n of e)
                l.length
                  ? await (null === (i = n.onConnect) || void 0 === i
                      ? void 0
                      : i.call(n, l))
                  : await (null === (o = n.onDisconnect) || void 0 === o
                      ? void 0
                      : o.call(n));
              let s = t.plugins.find((n) => "aa" === n.id);
              a(
                null !== (r = null == s ? void 0 : s.smartAccount) &&
                  void 0 !== r
                  ? r
                  : null
              );
            };
          (0, s.useEffect)(() => {}, [o]);
          let d = (0, s.useRef)(!1),
            { onMount: u } = (function (n, e) {
              let { reconnectOnMount: t } = e;
              return {
                async onMount() {
                  t
                    ? st(n)
                    : n.storage &&
                      n.setState((n) => ({ ...n, connections: new Map() }));
                },
              };
            })(t, { reconnectOnMount: e });
          d.current || ((d.current = !0), (l = t.uid), u()),
            (0, s.useEffect)(() => {
              t.uid !== l && ((l = t.uid), u());
            }, [t.uid, u]);
          let p = (0, s.useMemo)(() => {
            let n = t.plugins.find((n) => "wallet" === n.id);
            if (n) return n;
          }, [t.plugins]);
          return (
            (0, s.useEffect)(() => {
              if (p) {
                let n = t.plugins.find((n) => "aa" === n.id),
                  e = n ? n.erc4337 : void 0;
                p.init({ erc4337: e });
              }
            }, [p, t.plugins]),
            (0, s.useEffect)(() => {
              if (p) {
                let n = lx(r);
                p.overrideWalletOption({ ...n, language: r.language });
              }
            }, [r, p]),
            (0, s.useEffect)(() => {
              c(i, t.plugins);
            }, [i, t.plugins]),
            (0, C.jsx)(si.Provider, { value: {}, children: n.children })
          );
        },
        sr = (0, s.createContext)(null),
        sl = (n) => {
          if (s.useContext(sr))
            throw Error(
              "Multiple, nested usages of ConnectKitProvider detected. Please use only one."
            );
          let { children: e, config: t, reconnectOnMount: i = !0 } = n,
            { appearance: o } = sd(t),
            { AuthCoreContextProvider: r, authOptions: l } = (0,
            s.useMemo)(() => {
              var n, e, i;
              let r = t.getWalletConnector("particleAuth"),
                l = t.plugins.find((n) => "aa" === n.id),
                a = l ? l.erc4337 : void 0,
                c =
                  null !== (e = null == o ? void 0 : o.mode) && void 0 !== e
                    ? e
                    : t1();
              return (
                "auto" === c && (c = t1()),
                {
                  AuthCoreContextProvider:
                    null !==
                      (i = null == r ? void 0 : r.AuthCoreContextProvider) &&
                    void 0 !== i
                      ? i
                      : s.Fragment,
                  authOptions: r
                    ? {
                        options: {
                          themeType: c,
                          ...r.authOptions,
                          customStyle: {
                            ...(null === (n = r.authOptions) || void 0 === n
                              ? void 0
                              : n.customStyle),
                            theme: { [c]: lf(o) },
                          },
                          erc4337: a,
                        },
                      }
                    : void 0,
                }
              );
            }, [t, o]),
            a = { options: t.options, config: t };
          return (0, s.createElement)(
            sr.Provider,
            { value: a },
            (0, C.jsx)(C.Fragment, {
              children: (0, C.jsx)(r, {
                ...l,
                children: (0, C.jsxs)(au, {
                  children: [
                    e,
                    (0, C.jsx)(so, {
                      reconnectOnMount: i,
                      children: (0, C.jsx)(sn, {}),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        sa = () => {
          let n = s.useContext(sr);
          if (!n) throw Error("ConnectKit Hook must be inside a Provider.");
          return n;
        },
        ss = {};
      function sc(n) {
        let e = { ...n.appearanceStore.getState() };
        return t0(ss, e) ? ss : ((ss = e), e);
      }
      function sd(n) {
        if (!n) {
          let { config: e } = sa();
          n = e;
        }
        let e = (0, s.useCallback)(
          (e) => {
            n.appearanceStore.setState(e || {}, !0);
          },
          [n.appearanceStore]
        );
        return {
          appearance: (0, s.useSyncExternalStore)(
            n.appearanceStore.subscribe,
            () => sc(n),
            () => sc(n)
          ),
          setAppearance: e,
        };
      }
      var su = () => {
          let [n, e] = (0, s.useState)(),
            { appearance: t } = sd();
          return (
            (0, s.useEffect)(() => {
              (null == t ? void 0 : t.mode) &&
              (null == t ? void 0 : t.mode) !== "auto"
                ? e(null == t ? void 0 : t.mode)
                : e(t1());
            }, [null == t ? void 0 : t.mode]),
            {
              foreground: (0, s.useMemo)(
                () => ("dark" === n ? "#000000" : "#ffffff"),
                [n]
              ),
              background: (0, s.useMemo)(
                () => ("dark" === n ? "#ffffff" : "#000000"),
                [n]
              ),
              currentMode: n,
            }
          );
        },
        sp = {
          apple: () => {
            let { background: n } = su();
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 31 31",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M23.2154 16.3638C23.2404 14.2641 24.402 12.3195 26.2756 11.21C25.089 9.58753 23.1654 8.59733 21.092 8.53768C18.9062 8.32293 16.7953 9.77841 15.6837 9.77841C14.572 9.77841 12.8359 8.54961 10.9998 8.5854C8.57664 8.65698 6.36583 9.94543 5.19173 11.9735C2.68116 16.1252 4.55472 22.2334 6.96537 25.5858C8.16445 27.2322 9.57587 29.0694 11.412 28.9978C13.2106 28.9262 13.8851 27.9003 16.0584 27.9003C18.2317 27.9003 18.8438 28.9978 20.7173 28.962C22.6533 28.9262 23.8649 27.3157 25.0265 25.6455C25.8884 24.4763 26.5628 23.1759 27 21.804C24.7018 20.8734 23.2154 18.726 23.2029 16.3519L23.2154 16.3638Z",
                  fill: n,
                }),
                (0, C.jsx)("path", {
                  d: "M19.6679 6.33057C20.7171 5.12563 21.2417 3.56278 21.1168 1.99994C19.5055 2.16696 18.0191 2.8947 16.945 4.06385C15.8958 5.20914 15.3587 6.71233 15.4586 8.23939C17.0948 8.25132 18.6437 7.55937 19.6679 6.3425V6.33057Z",
                  fill: n,
                }),
              ],
            });
          },
          discord: () =>
            (0, C.jsx)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, C.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.1948 17.8025C21.2387 19.2638 19.3423 20.1492 17.4765 20.7288C17.0145 20.0975 16.6068 19.4233 16.2533 18.7163C16.9235 18.4618 17.5693 18.148 18.1835 17.7778C18.0244 17.658 17.8661 17.5328 17.7113 17.405C14.0398 19.1397 10.0032 19.1397 6.28758 17.405C6.13322 17.5335 5.97559 17.658 5.81431 17.7778C6.4241 18.1436 7.06921 18.4589 7.74236 18.7141C7.38886 19.4233 6.97784 20.0954 6.51803 20.7277C4.65442 20.147 2.75951 19.2617 0.804519 17.8025C0.404784 13.5263 1.20462 9.18711 4.15239 4.73615C5.61481 4.05172 7.17916 3.55369 8.8156 3.27118C9.01765 3.63269 9.2572 4.12052 9.41884 4.50788C11.1241 4.24685 12.8453 4.24685 14.5826 4.50788C14.7443 4.12052 14.9791 3.63269 15.179 3.27118C16.8132 3.55369 18.3765 4.04917 19.8378 4.7325C22.3935 8.54528 23.664 12.8452 23.1955 17.8029L23.1948 17.8025ZM10.2776 12.8659C10.298 11.5975 9.38316 10.5574 8.24803 10.5574C7.1129 10.5574 6.21732 11.5986 6.21732 12.8659C6.21732 14.1332 7.1322 15.1722 8.24803 15.1722C9.36387 15.1722 10.2798 14.1321 10.2776 12.8659ZM17.7801 12.8659C17.8005 11.5975 16.8857 10.5574 15.7505 10.5574C14.6154 10.5574 13.7198 11.5986 13.7198 12.8659C13.7198 14.1332 14.6347 15.1722 15.7505 15.1722C16.8664 15.1722 17.7801 14.1321 17.7801 12.8659Z",
                fill: "#5865F2",
              }),
            }),
          facebook: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 31 31",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M13.0833 29.8389C6.23611 28.6306 1 22.6694 1 15.5C1 7.525 7.525 1 15.5 1C23.475 1 30 7.525 30 15.5C30 22.6694 24.7639 28.6306 17.9167 29.8389L17.1111 29.1944H13.8889L13.0833 29.8389Z",
                  fill: "#0D89F0",
                }),
                (0, C.jsx)("path", {
                  d: "M21.1391 19.5277L21.7835 15.5H17.9168V12.6805C17.9168 11.5527 18.3196 10.6666 20.0918 10.6666H21.9446V6.96108C20.8974 6.79997 19.7696 6.63885 18.7224 6.63885C15.4196 6.63885 13.0835 8.65274 13.0835 12.2777V15.5H9.4585V19.5277H13.0835V29.7583C13.8891 29.9194 14.6946 30 15.5002 30C16.3057 30 17.1113 29.9194 17.9168 29.7583V19.5277H21.1391Z",
                  fill: "white",
                }),
                (0, C.jsx)("defs", {
                  children: (0, C.jsxs)("linearGradient", {
                    id: "paint0_linear_1609_510",
                    x1: "15.5",
                    y1: "28.9963",
                    x2: "15.5",
                    y2: "1",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, C.jsx)("stop", { stopColor: "#0062E0" }),
                      (0, C.jsx)("stop", { offset: "1", stopColor: "#19AFFF" }),
                    ],
                  }),
                }),
              ],
            }),
          github: () => {
            let { foreground: n, background: e } = su();
            return (0, C.jsxs)("svg", {
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("rect", {
                  width: "22",
                  height: "22",
                  rx: "11",
                  fill: n,
                }),
                (0, C.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.999 0C4.92483 0 0 4.92483 0 11.0003C0 15.8603 3.15154 19.9829 7.52264 21.4382C8.07299 21.5388 8.27355 21.1991 8.27355 20.9074C8.27355 20.6467 8.2641 19.9546 8.25869 19.0369C5.19899 19.7013 4.55342 17.562 4.55342 17.562C4.05304 16.2918 3.33184 15.9535 3.33184 15.9535C2.3331 15.2708 3.40747 15.2843 3.40747 15.2843C4.51156 15.3627 5.0923 16.4181 5.0923 16.4181C6.07348 18.0989 7.66715 17.6134 8.29381 17.3325C8.39375 16.6214 8.67737 16.1365 8.99205 15.8617C6.54956 15.5841 3.98146 14.6401 3.98146 10.425C3.98146 9.22435 4.41026 8.24249 5.11391 7.47334C5.00046 7.19512 4.62298 6.07686 5.22128 4.5622C5.22128 4.5622 6.14506 4.26643 8.24654 5.68992C9.12373 5.44614 10.0651 5.32392 11.0003 5.31987C11.9343 5.32392 12.8756 5.44614 13.7541 5.68992C15.8543 4.26643 16.776 4.5622 16.776 4.5622C17.3763 6.07686 16.9989 7.19512 16.8854 7.47334C17.5904 8.24249 18.0165 9.22435 18.0165 10.425C18.0165 14.6509 15.4444 15.5808 12.9938 15.8529C13.3888 16.1926 13.7406 16.8638 13.7406 17.8902C13.7406 19.3603 13.7271 20.5468 13.7271 20.9074C13.7271 21.2018 13.925 21.5442 14.4834 21.4368C18.8512 19.9789 22 15.859 22 11.0003C22 4.92483 17.0745 0 10.999 0Z",
                  fill: e,
                }),
              ],
            });
          },
          google: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M22.5012 12.2332C22.5012 11.3699 22.4297 10.7399 22.275 10.0865H12.2155V13.9832H18.1202C18.0012 14.9515 17.3583 16.4099 15.9297 17.3898L15.9097 17.5203L19.0903 19.935L19.3107 19.9565C21.3344 18.1249 22.5012 15.4298 22.5012 12.2332Z",
                  fill: "#4285F4",
                }),
                (0, C.jsx)("path", {
                  d: "M12.2147 22.5C15.1075 22.5 17.5361 21.5666 19.3099 19.9567L15.929 17.3899C15.0242 18.0083 13.8099 18.4399 12.2147 18.4399C9.38142 18.4399 6.97669 16.6083 6.11947 14.0766L5.99382 14.0871L2.68656 16.5954L2.64331 16.7132C4.40519 20.1433 8.02423 22.5 12.2147 22.5Z",
                  fill: "#34A853",
                }),
                (0, C.jsx)("path", {
                  d: "M6.1201 14.0766C5.89391 13.4233 5.76301 12.7232 5.76301 11.9999C5.76301 11.2765 5.89391 10.5766 6.1082 9.92325L6.1022 9.78411L2.75349 7.23547L2.64393 7.28655C1.91777 8.7099 1.5011 10.3083 1.5011 11.9999C1.5011 13.6916 1.91777 15.2899 2.64393 16.7132L6.1201 14.0766Z",
                  fill: "#FBBC05",
                }),
                (0, C.jsx)("path", {
                  d: "M12.2148 5.55997C14.2267 5.55997 15.5838 6.41163 16.3576 7.12335L19.3814 4.23C17.5243 2.53834 15.1076 1.5 12.2148 1.5C8.02426 1.5 4.4052 3.85665 2.64331 7.28662L6.10759 9.92332C6.97672 7.39166 9.38146 5.55997 12.2148 5.55997Z",
                  fill: "#EB4335",
                }),
              ],
            }),
          linkedin: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 31 31",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("circle", {
                  cx: "15.4998",
                  cy: "15.5",
                  r: "14.2083",
                  fill: "#0A66C2",
                }),
                (0, C.jsx)("path", {
                  d: "M9.44931 11.34C10.5014 11.34 11.3542 10.4872 11.3542 9.43515C11.3542 8.38312 10.5014 7.53027 9.44931 7.53027C8.39728 7.53027 7.54443 8.38312 7.54443 9.43515C7.54443 10.4872 8.39728 11.34 9.44931 11.34Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M13.0987 12.7478H16.2557V14.194C16.2557 14.194 17.1124 12.4806 19.4434 12.4806C21.5227 12.4806 23.2452 13.505 23.2452 16.6271V23.211H19.9736V17.4249C19.9736 15.5831 18.9903 15.3806 18.241 15.3806C16.686 15.3806 16.4198 16.7219 16.4198 17.6652V23.211H13.0987V12.7478Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M7.78878 12.7478H11.1099V23.211H7.78878V12.7478Z",
                  fill: "white",
                }),
              ],
            }),
          microsoft: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("rect", {
                  x: "12.9231",
                  y: "12.923",
                  width: "9.23077",
                  height: "9.23077",
                  fill: "#FEBA08",
                }),
                (0, C.jsx)("rect", {
                  x: "1.84619",
                  y: "12.923",
                  width: "9.23077",
                  height: "9.23077",
                  fill: "#05A6F0",
                }),
                (0, C.jsx)("rect", {
                  x: "12.9231",
                  y: "1.84613",
                  width: "9.23077",
                  height: "9.23077",
                  fill: "#80BC06",
                }),
                (0, C.jsx)("rect", {
                  x: "1.84619",
                  y: "1.84613",
                  width: "9.23077",
                  height: "9.23077",
                  fill: "#F25325",
                }),
              ],
            }),
          twitch: () =>
            (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M19.4583 11.6875L16.375 14.7709H13.2917L10.5937 17.4688V14.7709H7.125V3.20837H19.4583V11.6875Z",
                  fill: "white",
                }),
                (0, C.jsx)("path", {
                  d: "M6.35417 1.66663L2.5 5.52079V19.3958H7.125V23.25L10.9792 19.3958H14.0625L21 12.4583V1.66663H6.35417ZM19.4583 11.6875L16.375 14.7708H13.2917L10.5937 17.4687V14.7708H7.125V3.20829H19.4583V11.6875Z",
                  fill: "#9146FF",
                }),
                (0, C.jsx)("path", {
                  d: "M17.1458 5.90625H15.6041V10.5312H17.1458V5.90625Z",
                  fill: "#9146FF",
                }),
                (0, C.jsx)("path", {
                  d: "M12.9062 5.90625H11.3645V10.5312H12.9062V5.90625Z",
                  fill: "#9146FF",
                }),
              ],
            }),
          twitter: () => {
            let { foreground: n, background: e } = su();
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M20.7738 3.31128L6.10893 20.6888H3.22681L17.8069 3.31128H20.7738Z",
                  fill: e,
                }),
                (0, C.jsx)("path", {
                  d: "M19.8914 19.8411H16.1272L4.11694 4.15896H7.97682L19.8914 19.8411Z",
                  fill: n,
                  stroke: e,
                  strokeWidth: "1.69536",
                }),
              ],
            });
          },
          email: () => {
            let { background: n } = su();
            return (0, C.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, C.jsx)("path", {
                  d: "M20.7094 15.5529V8.0907L16.9219 11.9852L20.7094 15.5517M14.3171 14.6618C13.6995 15.3003 12.8591 15.6583 11.9833 15.6561C11.102 15.6561 10.272 15.3028 9.64837 14.6618L7.61689 12.5723L3.2572 16.6801V17.3682C3.2572 18.2685 3.96895 19.0001 4.84357 19.0001H19.123C19.9976 19.0001 20.7094 18.2685 20.7094 17.3694V16.6584L16.3597 12.562L14.3182 14.6606",
                  fill: n,
                }),
                (0, C.jsx)("path", {
                  d: "M19.1554 5H4.87591C4.00241 5 3.29179 5.73168 3.29179 6.63075V6.97137L10.243 14.1193C10.7171 14.6055 11.3474 14.8739 12.0167 14.8739C12.6872 14.8739 13.3175 14.6055 13.7905 14.1193L20.7428 6.97137V6.63075C20.7428 5.73168 20.0289 5 19.1554 5ZM3.2572 8.09059V15.5734L7.05464 11.9954L3.2572 8.09059Z",
                  fill: n,
                }),
              ],
            });
          },
          phone: () => {
            let { background: n } = su();
            return (0, C.jsx)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, C.jsx)("path", {
                d: "M19.2575 19.772C19.2575 20.158 19.1785 20.5171 19.0206 20.8492C18.8628 21.1812 18.6458 21.4746 18.3696 21.7294C18.0933 21.9843 17.7697 22.185 17.3987 22.3317C17.0277 22.4785 16.6292 22.5518 16.2029 22.5518H7.79705C7.37086 22.5518 6.97228 22.4785 6.6013 22.3317C6.23035 22.185 5.90674 21.9843 5.6305 21.7294C5.35423 21.4746 5.1372 21.1812 4.97935 20.8492C4.82147 20.5171 4.74255 20.158 4.74255 19.772V4.25124C4.74255 3.86515 4.82147 3.50223 4.97935 3.16248C5.1372 2.82271 5.35423 2.52543 5.6305 2.27061C5.90674 2.01579 6.23035 1.81503 6.6013 1.66831C6.97228 1.5216 7.37086 1.44824 7.79705 1.44824H16.2029C16.6292 1.44824 17.0277 1.5216 17.3987 1.66831C17.7697 1.81503 18.0933 2.01579 18.3696 2.27061C18.6458 2.52543 18.8628 2.82271 19.0206 3.16248C19.1785 3.50223 19.2575 3.86515 19.2575 4.25124V19.772ZM17.3395 5.36317H6.63683V18.6368H17.3395V5.36317ZM11.9882 19.2855C11.6567 19.2855 11.3686 19.4013 11.1239 19.633C10.8792 19.8646 10.7569 20.1504 10.7569 20.4901C10.7569 20.8144 10.8792 21.0963 11.1239 21.3356C11.3686 21.575 11.6567 21.6947 11.9882 21.6947C12.3354 21.6947 12.6275 21.575 12.8643 21.3356C13.101 21.0963 13.2195 20.8144 13.2195 20.4901C13.2195 20.1504 13.101 19.8646 12.8643 19.633C12.6275 19.4013 12.3354 19.2855 11.9882 19.2855ZM13.8824 3.39413C13.8824 3.27058 13.843 3.17406 13.764 3.10455C13.6851 3.03506 13.5983 3.00032 13.5036 3.00032H10.4964C10.4175 3.00032 10.3346 3.03506 10.2478 3.10455C10.161 3.17406 10.1176 3.27058 10.1176 3.39413C10.1176 3.51768 10.157 3.61419 10.236 3.68369C10.3149 3.75318 10.4017 3.78794 10.4964 3.78794H13.5036C13.5983 3.78794 13.6851 3.75318 13.764 3.68369C13.843 3.61419 13.8824 3.51768 13.8824 3.39413Z",
                fill: n,
              }),
            });
          },
          passkeySmartWallet: () =>
            (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "17",
              height: "17",
              viewBox: "0 0 17 17",
              fill: "none",
              children: [
                (0, C.jsx)("path", {
                  d: "M2.91377 5.05466C2.91371 4.36537 3.09213 3.68782 3.43168 3.08796C3.77122 2.4881 4.2603 1.98638 4.85131 1.63166C5.44232 1.27694 6.11511 1.0813 6.80418 1.06379C7.49324 1.04628 8.1751 1.2075 8.78336 1.53174C9.39162 1.85599 9.90556 2.33222 10.2751 2.91405C10.6447 3.49589 10.8573 4.16352 10.8923 4.85192C10.9272 5.54032 10.7833 6.22604 10.4746 6.84232C10.1658 7.45859 9.70275 7.98442 9.13046 8.3686C9.98877 8.68836 10.768 9.18958 11.4148 9.83804C11.5955 10.0187 11.6879 10.2683 11.689 10.5244C11.6921 11.1598 11.69 11.7962 11.689 12.4316L11.6868 13.577V14.343C11.6868 14.4839 11.6309 14.6191 11.5312 14.7187C11.4316 14.8183 11.2965 14.8743 11.1556 14.8743H1.29664C1.1921 14.8695 1.08952 14.8442 0.994783 14.7997C0.900046 14.7552 0.81501 14.6925 0.744544 14.6151C0.674077 14.5378 0.619564 14.4473 0.584126 14.3488C0.548687 14.2503 0.533019 14.1458 0.538018 14.0413C0.597591 12.7941 1.02187 11.5918 1.75827 10.5834C2.49467 9.57504 3.5108 8.80495 4.68071 8.3686C4.13673 8.00376 3.69096 7.51058 3.3828 6.9326C3.07463 6.35463 2.91355 5.70966 2.91377 5.05466Z",
                  fill: "#D745FF",
                }),
                (0, C.jsx)("path", {
                  d: "M16.7324 7.30484C16.7324 8.23347 16.2564 9.05053 15.535 9.52547C15.4955 9.55052 15.4629 9.585 15.4401 9.62581C15.4173 9.66662 15.405 9.71247 15.4043 9.75922V10.3861C15.4043 10.4573 15.3767 10.5242 15.3267 10.5742L14.9485 10.9524C14.9361 10.9647 14.9263 10.9794 14.9196 10.9955C14.9129 11.0117 14.9095 11.029 14.9095 11.0464C14.9095 11.0639 14.9129 11.0812 14.9196 11.0973C14.9263 11.1135 14.9361 11.1281 14.9485 11.1405L15.3267 11.5187C15.3767 11.5687 15.4043 11.6356 15.4043 11.7057V11.9512C15.4043 12.0223 15.3767 12.0893 15.3267 12.1392L14.9485 12.5175C14.9361 12.5298 14.9263 12.5445 14.9196 12.5606C14.9129 12.5767 14.9095 12.594 14.9095 12.6115C14.9095 12.629 14.9129 12.6463 14.9196 12.6624C14.9263 12.6785 14.9361 12.6932 14.9485 12.7055L15.3267 13.0838C15.3767 13.1337 15.4043 13.2007 15.4043 13.2718V13.5768C15.4046 13.6429 15.3799 13.7066 15.3352 13.7553L14.4852 14.6903C14.4334 14.7473 14.3703 14.7929 14.2999 14.8241C14.2294 14.8553 14.1532 14.8714 14.0762 14.8714C13.9991 14.8714 13.9229 14.8553 13.8525 14.8241C13.782 14.7929 13.7189 14.7473 13.6671 14.6903L12.8171 13.7553C12.7724 13.7066 12.7478 13.6429 12.748 13.5768V9.75922C12.7475 9.71245 12.7352 9.66656 12.7124 9.62574C12.6896 9.58491 12.6569 9.55045 12.6174 9.52547C12.2332 9.27299 11.9211 8.92511 11.7116 8.51587C11.5022 8.10663 11.4025 7.65004 11.4224 7.19074C11.4423 6.73144 11.5811 6.28517 11.8251 5.89557C12.0692 5.50597 12.4101 5.18638 12.8147 4.96806C13.2193 4.74973 13.6736 4.64015 14.1332 4.65003C14.5929 4.6599 15.042 4.7889 15.4369 5.0244C15.8317 5.2599 16.1586 5.59385 16.3857 5.99357C16.6128 6.3933 16.7323 6.84512 16.7324 7.30484ZM14.873 6.90641C14.873 6.69506 14.7891 6.49237 14.6396 6.34293C14.4902 6.19349 14.2875 6.10953 14.0762 6.10953C13.8648 6.10953 13.6621 6.19349 13.5127 6.34293C13.3633 6.49237 13.2793 6.69506 13.2793 6.90641C13.2793 7.11775 13.3633 7.32044 13.5127 7.46988C13.6621 7.61932 13.8648 7.70328 14.0762 7.70328C14.2875 7.70328 14.4902 7.61932 14.6396 7.46988C14.7891 7.32044 14.873 7.11775 14.873 6.90641Z",
                  fill: "#D745FF",
                }),
              ],
            }),
        };
      x.I4.div(tJ()), x.I4.div(tK()), (0, x.I4)(M.P.div)(tX());
      var sg = function () {
          let { onConnect: n, onDisconnect: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { navigate: t, close: i, isOpen: o } = oh(),
            { isConnected: r } = t3();
          return {
            isOpen: o,
            setOpen: (n) => {
              n ? t(r ? "wallet-info" : "signup") : i();
            },
          };
        },
        sM = (n) => {
          var e, t;
          let {
            walletConnectors: i,
            chains: o,
            projectId: r,
            clientKey: l,
            appId: a,
            plugins: s,
          } = n;
          if (!i.length) throw Error("Please set at least one connector.");
          if (!o.length) throw Error("Please set at least one chain.");
          if (
            (null === (e = n.initialChainId) || void 0 === e
              ? void 0
              : e.evm) &&
            o.some(g.GV) &&
            !o.find((e) => {
              var t;
              return (
                e.id ===
                (null === (t = n.initialChainId) || void 0 === t
                  ? void 0
                  : t.evm)
              );
            })
          )
            throw Error("`chains` not includes `initialChainId.evm`");
          if (
            (null === (t = n.initialChainId) || void 0 === t
              ? void 0
              : t.solana) &&
            o.some(g.ES) &&
            !o.find((e) => {
              var t;
              return (
                e.id ===
                (null === (t = n.initialChainId) || void 0 === t
                  ? void 0
                  : t.solana)
              );
            })
          )
            throw Error("`chains` not includes `initialChainId.solana`");
          let c = (0, j.wE)({
            storage:
              "undefined" != typeof window && window.localStorage
                ? window.localStorage
                : j.Qy,
          });
          function d() {
            return {
              chainId: o[0].id,
              connections: new Map(),
              current: null,
              status: "disconnected",
            };
          }
          let u = Number(a9.replaceAll(".", "")),
            p = (0, z.y)(
              (0, A.eh)(
                c
                  ? (0, A.Zr)(d, {
                      migrate: (n, e) => n,
                      name: "store",
                      partialize: (n) => ({
                        connections: {
                          __type: "Map",
                          value: Array.from(n.connections.entries()).map(
                            (n) => {
                              let [e, t] = n,
                                {
                                  id: i,
                                  name: o,
                                  type: r,
                                  uid: l,
                                  chainType: a,
                                } = t.connector;
                              return [
                                e,
                                {
                                  ...t,
                                  connector: {
                                    id: i,
                                    name: o,
                                    type: r,
                                    uid: l,
                                    chainType: a,
                                  },
                                },
                              ];
                            }
                          ),
                        },
                        chainId: n.chainId,
                        current: n.current,
                      }),
                      storage: c,
                      version: u,
                    })
                  : d
              )
            );
          function M(n) {
            p.setState((e) => {
              var t, i;
              let o = e.connections.get(n.uid);
              return o
                ? {
                    ...e,
                    connections: new Map(e.connections).set(n.uid, {
                      accounts:
                        null !== (t = n.accounts) && void 0 !== t
                          ? t
                          : o.accounts,
                      chainId:
                        null !== (i = n.chainId) && void 0 !== i
                          ? i
                          : o.chainId,
                      connector: o.connector,
                    }),
                  }
                : e;
            });
          }
          async function C(n) {
            let e = p.getState().status;
            if ("connecting" === e || "reconnecting" === e) return;
            let t = x.getState().find((e) => e.uid === n.uid);
            t &&
              (await t.isAuthorized()) &&
              p.setState((e) => {
                let t = x.getState().find((e) => e.uid === n.uid);
                return t
                  ? (t.emitter.listenerCount("change") ||
                      t.emitter.on("change", M),
                    t.emitter.listenerCount("disconnect") ||
                      t.emitter.on("disconnect", h),
                    c.setItem("recentConnectorId", t.id),
                    {
                      ...e,
                      connections: new Map(e.connections).set(n.uid, {
                        accounts: n.accounts,
                        chainId: n.chainId,
                        connector: t,
                      }),
                      current: n.uid,
                      status: "connected",
                    })
                  : e;
              });
          }
          function h(n) {
            p.setState((e) => {
              let t = e.connections.get(n.uid);
              if (t) {
                let n = t.connector;
                n.emitter.listenerCount("change") &&
                  t.connector.emitter.off("change", M),
                  n.emitter.listenerCount("disconnect") &&
                    t.connector.emitter.off("disconnect", h);
              }
              if ((e.connections.delete(n.uid), 0 === e.connections.size))
                return {
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                };
              let i = e.connections.values().next().value;
              return {
                ...e,
                connections: new Map(e.connections),
                current: i.connector.uid,
              };
            });
          }
          let x = (0, z.y)(() => []),
            f = (n) => (n.emitter.listenerCount("connect"), n),
            y = i.map((n) => {
              let e = n({
                  chains: o,
                  storage: c,
                  projectId: r,
                  clientKey: l,
                  appId: a,
                }),
                t = e.connectors.map(f);
              return (
                x.setState((n) => [...n, ...t], !0),
                e.store.subscribe((n) => {
                  let e = new Map();
                  for (let n of x.getState()) e.set(n.id, !0);
                  let t = [];
                  for (let i of n) e.has(i.id) || t.push(i);
                  t.length && x.setState((n) => [...n, ...t], !0);
                }),
                e
              );
            });
          p.subscribe(
            (n) => {
              var e;
              let { connections: t, current: i } = n;
              return i
                ? null === (e = t.get(i)) || void 0 === e
                  ? void 0
                  : e.chainId
                : void 0;
            },
            (n) => {
              if (o.some((e) => e.id === n))
                return p.setState((e) => ({
                  ...e,
                  chainId: null != n ? n : e.chainId,
                }));
            }
          );
          let m =
              null == s
                ? void 0
                : s.map(function (n) {
                    return n({
                      projectConfig: { projectId: r, clientKey: l, appId: a },
                      chains: o,
                    });
                  }),
            w = (0, j.Ld)(),
            I = n.appearance || {},
            N = (0, z.y)(() => I);
          return {
            get uid() {
              return w;
            },
            get plugins() {
              return m || [];
            },
            get options() {
              return n;
            },
            get chains() {
              return o;
            },
            get connectors() {
              return x.getState();
            },
            get appearanceStore() {
              return N;
            },
            storage: c,
            get walletConnectors() {
              return y;
            },
            getWalletConnector: (n) => {
              let e = y.find((e) => e.type === n);
              if (e) return e;
            },
            get state() {
              return p.getState();
            },
            setState(n) {
              let e;
              e = "function" == typeof n ? n(p.getState()) : n;
              let t = d();
              "object" != typeof e && (e = t),
                Object.keys(t).some((n) => !(n in e)) && (e = t),
                p.setState(e, !0);
            },
            subscribe: (n, e, t) =>
              p.subscribe(
                n,
                e,
                t ? { ...t, fireImmediately: t.emitImmediately } : void 0
              ),
            _internal: {
              connectors: { setup: f, subscribe: (n) => x.subscribe(n) },
              events: { change: M, connect: C, disconnect: h },
            },
          };
        };
    },
  },
]);
