import { defineComponent as v, ref as m, onMounted as E, createVNode as l, reactive as Ne, createTextVNode as I, createBlock as Ve, openBlock as k, Transition as Be, withCtx as De, createElementBlock as w, createCommentVNode as B, createElementVNode as x, withModifiers as Te, normalizeStyle as F, renderSlot as O, toDisplayString as R, computed as V, mergeProps as D, Fragment as $e, withDirectives as $, vShow as K, provide as ve, getCurrentInstance as _e, inject as ge, onBeforeUnmount as Ke, cloneVNode as Pe, watch as ye, onUnmounted as Ee, resolveComponent as je, isVNode as Re, render as Ae, nextTick as Le } from "vue";
const ze = () => ({
  percent: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: "#FF6E4E"
  }
}), qe = ze(), W = /* @__PURE__ */ v({
  name: "cBar",
  props: qe,
  setup(e) {
    const o = m("0%");
    return E(() => {
      o.value = "0%", setTimeout(() => {
        o.value = Number(e.percent) > 100 ? "100%" : Number(e.percent) + "%";
      }, 1e3);
    }), () => l("div", {
      className: "c-progress-bar"
    }, [l("span", {
      style: {
        width: o.value,
        backgroundColor: e.color
      }
    }, null)]);
  }
});
W.install = (e) => {
  e.component(W.name, W);
};
const He = () => ({
  text: String,
  backgroundColor: String,
  textColor: String,
  disabled: {
    type: Boolean,
    defalut: !1
  },
  size: {
    type: String,
    default: "default"
  },
  type: {
    type: String,
    default: "primary"
  },
  href: String
});
function Fe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var be = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Se;
function Ue() {
  return Se || (Se = 1, function(e) {
    (function() {
      var o = {}.hasOwnProperty;
      function n() {
        for (var s = "", a = 0; a < arguments.length; a++) {
          var i = arguments[a];
          i && (s = t(s, c(i)));
        }
        return s;
      }
      function c(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return n.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var a = "";
        for (var i in s)
          o.call(s, i) && s[i] && (a = t(a, i));
        return a;
      }
      function t(s, a) {
        return a ? s ? s + " " + a : s + a : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(be)), be.exports;
}
var We = Ue();
const j = /* @__PURE__ */ Fe(We), Ye = He(), Y = /* @__PURE__ */ v({
  name: "cButton",
  props: Ye,
  emits: ["onClick"],
  setup(e, {
    emit: o
  }) {
    const n = j("c-btn", {
      [`c-btn-${e.type}`]: e.type,
      [`c-btn-${e.size}`]: e.size,
      "c-btn-disabled": e.disabled
    }), c = Ne({
      backgroundColor: e.backgroundColor,
      color: e.textColor
    }), t = () => {
      o("onClick");
    };
    return () => {
      const {
        href: s,
        text: a
      } = e;
      return s ? l("a", {
        href: s,
        className: n,
        style: c
      }, [a || ""]) : l("div", {
        className: n,
        style: c,
        onClick: t
      }, [a || ""]);
    };
  }
});
Y.install = (e) => {
  e.component(Y.name, Y);
};
const Ge = () => ({
  text: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: "#fff"
  },
  backgroungColor: {
    type: String,
    default: "#448FF2"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}), Je = Ge(), G = /* @__PURE__ */ v({
  name: "cButtonFooter",
  props: Je,
  emits: ["onClick"],
  setup(e, {
    emit: o
  }) {
    const n = j("c-button-footer", {
      "c-button-footer_disabled": e.disabled
    }), c = Ne({
      backgroundColor: e.disabled ? "#D0D0D0" : e.backgroungColor,
      color: e.textColor
    }), t = () => {
      o("onClick");
    };
    return () => l("h1", {
      className: n,
      style: c,
      onClick: t
    }, [e.text]);
  }
});
G.install = (e) => {
  e.component(G.name, G);
};
const Qe = () => ({
  percent: {
    type: String,
    default: "0"
  }
}), Xe = Qe(), J = /* @__PURE__ */ v({
  name: "cCircle",
  props: Xe,
  setup(e) {
    const o = m(!0), n = m(""), c = m(!0), t = m(0), s = m(!1);
    return E(() => {
      const a = Number(e.percent);
      let i = 0;
      if (a >= 100)
        o.value = !1, n.value = "100%";
      else {
        const u = setInterval(() => {
          i >= a ? (t.value = a, clearInterval(u)) : i > 50 && (s.value = !0, c.value = !1), t.value = i, i++;
        }, 50);
      }
    }), () => l("div", {
      className: "c-circle"
    }, [o.value && l("div", {
      className: "c-circle-process"
    }, [l("div", {
      className: ["circle", {
        "clip-auto": s
      }]
    }, [l("div", {
      className: "percent left",
      style: {
        transform: "rotate(" + (360 - 18 / 5 * Number(t.value)) + "deg)"
      }
    }, null), l("div", {
      className: ["percent right", {
        width0: c
      }]
    }, null)]), l("div", {
      className: "num"
    }, [l("span", null, [t.value]), I("%")])]), !o.value && l("div", {
      className: "c-circle-status"
    }, [l("div", {
      className: "circle"
    }, null), l("div", {
      className: "num"
    }, [n.value])])]);
  }
});
J.install = (e) => {
  e.component(J.name, J);
};
const ke = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [c, t] of o)
    n[c] = t;
  return n;
}, Ze = {
  name: "cConfirm",
  props: {
    isShow: {
      type: Boolean,
      default: !0
    },
    type: {
      type: Number,
      default: 1
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showBtn: {
      type: Boolean,
      default: !0
    },
    showCancelBtn: {
      type: Boolean,
      default: !0
    },
    cancelBtnStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    confirmBtnStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    innerStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    showMask: {
      type: Boolean,
      default: !0
    },
    maskColor: {
      type: String,
      default: "rgba(0,0,0,0.4)"
    }
  },
  data() {
    return {
      openConfirm: !1,
      closeImg: "closeImg"
    };
  },
  created() {
    this.openConfirm = this.isShow;
  },
  methods: {
    show() {
      this.openConfirm = !0;
    },
    hide() {
      this.openConfirm = !1;
    },
    cancel() {
      this.hide(), this.$emit("cancel");
    },
    confirm() {
      this.hide(), this.$emit("confirm");
    },
    closeConfirm(e) {
      e.target.children.length && e.target.children[0].getAttribute("class") && e.target.children[0].getAttribute("class").indexOf("confirm-content") > -1 && this.hide();
    },
    closeImgFn() {
      this.hide(), this.$emit("cancel");
    }
  }
}, et = {
  key: 0,
  className: "c-confirm-container"
}, tt = {
  key: 0,
  className: "confirm-content"
}, nt = { className: "confirm-inner" }, lt = {
  key: 0,
  className: "confirm-content-footer"
}, at = { key: 1 }, st = {
  key: 1,
  className: "confirm-content confirm-content2"
}, ot = { className: "confirm-header" }, ct = { className: "confirm-content-body" }, rt = {
  key: 0,
  className: "confirm-content-footer2"
}, it = { key: 1 }, ut = {
  key: 2,
  className: "confirm-content confirm-content3"
}, dt = { className: "confirm-close" }, mt = ["src"];
function ft(e, o, n, c, t, s) {
  return k(), Ve(Be, { name: "c-confirm" }, {
    default: De(() => [
      n.isShow ? (k(), w("div", et, [
        x("div", {
          className: "screen-fixed confirm-wrapper",
          onClick: o[5] || (o[5] = Te((a) => s.closeConfirm(a), ["prevent"]))
        }, [
          n.type == 1 ? (k(), w("div", tt, [
            x("div", nt, [
              x("div", {
                className: "confirm-content-body",
                style: F(n.innerStyle)
              }, [
                O(e.$slots, "inner")
              ], 4),
              n.showBtn ? (k(), w("div", lt, [
                n.showCancelBtn ? (k(), w("div", {
                  key: 0,
                  onClick: o[0] || (o[0] = (...a) => s.cancel && s.cancel(...a)),
                  className: "operate-btn left"
                }, R(n.cancelText), 1)) : B("", !0),
                x("div", {
                  onClick: o[1] || (o[1] = (...a) => s.confirm && s.confirm(...a)),
                  className: "operate-btn"
                }, R(n.confirmText), 1)
              ])) : B("", !0),
              n.showBtn ? B("", !0) : (k(), w("div", at, [
                O(e.$slots, "btn")
              ]))
            ])
          ])) : B("", !0),
          n.type == 2 ? (k(), w("div", st, [
            x("div", ot, [
              O(e.$slots, "header")
            ]),
            x("div", {
              className: "confirm-inner",
              style: F(n.innerStyle)
            }, [
              x("div", ct, [
                O(e.$slots, "inner")
              ]),
              n.showBtn ? (k(), w("div", rt, [
                n.showCancelBtn ? (k(), w("div", {
                  key: 0,
                  onClick: o[2] || (o[2] = (...a) => s.cancel && s.cancel(...a)),
                  className: "operate-btn left",
                  style: F(n.cancelBtnStyle)
                }, R(n.cancelText), 5)) : B("", !0),
                x("div", {
                  onClick: o[3] || (o[3] = (...a) => s.confirm && s.confirm(...a)),
                  className: "operate-btn right",
                  style: F(n.confirmBtnStyle)
                }, R(n.confirmText), 5)
              ])) : B("", !0),
              n.showBtn ? B("", !0) : (k(), w("div", it, [
                O(e.$slots, "btn")
              ]))
            ], 4)
          ])) : B("", !0),
          n.type == 3 ? (k(), w("div", ut, [
            x("div", {
              className: "confirm-inner",
              style: F(n.innerStyle)
            }, [
              O(e.$slots, "inner")
            ], 4),
            x("div", dt, [
              x("img", {
                src: t.closeImg,
                alt: "",
                onClick: o[4] || (o[4] = (...a) => s.closeImgFn && s.closeImgFn(...a))
              }, null, 8, mt)
            ])
          ])) : B("", !0)
        ]),
        n.showMask && n.isShow ? (k(), w("div", {
          key: 0,
          className: "screen-fixed c-confirm-mask",
          style: F({ backgroundColor: n.maskColor })
        }, null, 4)) : B("", !0)
      ])) : B("", !0)
    ]),
    _: 3
  });
}
const Q = /* @__PURE__ */ ke(Ze, [["render", ft]]);
Q.install = (e) => {
  e.component(Q.name, Q);
};
const pt = () => ({
  title: {
    default: ""
  }
}), ht = pt(), X = /* @__PURE__ */ v({
  name: "cHeaderBack",
  props: ht,
  emits: ["onBack"],
  setup(e, o) {
    const n = () => {
      o.emit("onBack");
    };
    return () => l("header", {
      className: "c-header-back"
    }, [l("i", {
      className: "icon_left",
      onClick: n
    }, null), l("div", {
      className: "ellipsis"
    }, [e.title])]);
  }
});
X.install = (e) => {
  e.component(X.name, X);
};
const Me = () => ({
  disabled: Boolean,
  size: {
    type: String,
    default: "sm"
  },
  prepend: String,
  append: String,
  style: Object,
  modelValue: {
    type: String || Object,
    default: ""
  },
  onChange: {
    type: Function
  },
  onKeydown: {
    type: Function
  }
}), vt = Me(), A = /* @__PURE__ */ v({
  name: "cInput",
  props: vt,
  emits: ["update:modelValue", "change", "keydown"],
  setup(e, {
    emit: o,
    attrs: n
  }) {
    const c = V(() => ({
      "c-input-wrapper": !0,
      [`input-size-${e.size}`]: e.size,
      "is-disabled": e.disabled,
      "input-group": e.prepend || e.append,
      "input-group-append": !!e.append,
      "input-group-prepend": !!e.prepend
    })), t = (s) => {
      s.target.value !== e.modelValue && (o("update:modelValue", s.target.value), o("change", s.target.value));
    };
    return () => {
      const {
        prepend: s,
        disabled: a,
        append: i,
        style: u,
        ...p
      } = e;
      return l("div", {
        style: u,
        className: c.value
      }, [s && l("div", {
        className: "c-input-group-prepend"
      }, [s]), l("input", D(p, n, {
        value: e.modelValue,
        onInput: t,
        className: "c-input-inner",
        disabled: a
      }), null), i && l("div", {
        className: "c-input-group-append"
      }, [I(" "), i])]);
    };
  }
});
A.install = (e) => {
  e.component(A.name, A);
};
const gt = () => ({
  value: {
    type: String,
    default: ""
  },
  label: {
    default: "",
    type: String
  },
  length: {
    default: 20,
    type: Number
  },
  placeholder: {
    default: "请输入密码",
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  showToggle: {
    type: Boolean,
    default: !0
  }
}), yt = gt(), bt = {
  name: "cInputPassword",
  props: yt,
  data() {
    return {
      showPwd: {
        type: Boolean,
        default: !0
      },
      invisible: !1
    };
  },
  methods: {
    _input() {
      this.$emit("onInput", this.$refs.input.value);
    },
    _blur() {
      this.$emit("onBlur", this.$refs.input.value);
    },
    focus() {
      this.$refs.input.focus();
    },
    val() {
      return this.$refs.input.value;
    },
    toggle() {
      const e = this.$refs.input.value;
      this.showPwd = !this.showPwd, this.invisible = !this.invisible, setTimeout(() => {
        this.$refs.input.value = e;
      }, 0);
    }
  }
}, Nt = { className: "c-input-password" }, kt = ["value", "length", "placeholder", "className"], Ct = ["value", "length", "placeholder", "className"], St = ["className"];
function wt(e, o, n, c, t, s) {
  return k(), w("div", Nt, [
    x("span", null, R(e.label), 1),
    t.showPwd ? (k(), w("input", {
      key: 0,
      type: "password",
      ref: "input",
      value: e.value,
      onInput: o[0] || (o[0] = (a) => s._input()),
      onBlur: o[1] || (o[1] = (a) => s._blur()),
      length: e.length,
      placeholder: e.placeholder,
      autocapitalize: "off",
      className: { "c-input-password_disabled": e.disabled }
    }, null, 40, kt)) : B("", !0),
    t.showPwd ? B("", !0) : (k(), w("input", {
      key: 1,
      type: "text",
      ref: "input",
      value: e.value,
      onInput: o[2] || (o[2] = (a) => s._input()),
      onBlur: o[3] || (o[3] = (a) => s._blur()),
      length: e.length,
      placeholder: e.placeholder,
      autocapitalize: "off",
      className: { "c-input-password_disabled": e.disabled }
    }, null, 40, Ct)),
    e.showToggle ? (k(), w("em", {
      key: 2,
      className: "pwd-eye",
      onClick: o[4] || (o[4] = (...a) => s.toggle && s.toggle(...a))
    }, null, 8, St)) : B("", !0)
  ]);
}
const Z = /* @__PURE__ */ ke(bt, [["render", wt]]);
Z.install = (e) => {
  e.component(Z.name, Z);
};
const xt = () => ({
  modelValue: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  halfChecked: {
    type: Boolean,
    default: !1
  },
  bgColor: {
    type: String,
    default: "#fff"
  },
  borderColor: {
    type: String,
    default: "#fff"
  },
  round: {
    // 是否是圆角
    type: Boolean,
    default: !1
  },
  onChange: Function
}), It = xt(), L = /* @__PURE__ */ v({
  name: "cCheckBox",
  props: It,
  emits: ["update:modelValue", "onChange"],
  setup(e, {
    emit: o,
    slots: n
  }) {
    const c = m(e.modelValue), t = V(() => {
      let i = "c-checkbox";
      return e.disabled && (i += " disabled"), c.value && (i += " checked"), i;
    }), s = (i) => {
      i.stopPropagation(), e.disabled || (c.value = !c.value, o("update:modelValue", c.value), o("onChange", c.value));
    }, a = V(() => ({
      backgroundColor: e.bgColor,
      borderColor: e.borderColor,
      borderRadius: e.round ? "50%" : "2px"
    }));
    return () => {
      var i;
      return l("div", {
        className: t.value,
        onClick: s
      }, [l("div", {
        className: "inner",
        style: a.value
      }, null), l("div", {
        className: "content"
      }, [(i = n.default) == null ? void 0 : i.call(n)])]);
    };
  }
});
L.install = (e) => {
  e.component(L.name, L);
};
const Bt = {
  name: "cSwitch",
  props: {
    color: {
      type: String,
      default: "#a0a0a0"
    },
    activeColor: {
      type: String,
      default: "#448ff2"
    },
    checked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      on: !1,
      showText: "",
      colorStyle: {}
    };
  },
  watch: {
    checked(e) {
      this.on = e;
    },
    on(e) {
      this.colorStyle = {
        backgroundColor: e ? this.activeColor : this.color,
        borderColor: e ? this.activeColor : this.color,
        boxShadow: e ? this.activeColor + " 0px 0px 0px 12px inset" : this.color + " 0px 0px 0px 12px inset"
      };
    }
  },
  methods: {
    toggle() {
      this.on = !this.on, this.$emit("onSwitch", this.on);
    },
    val() {
      return this.on;
    }
  },
  created() {
    this.colorStyle = {
      backgroundColor: this.on ? this.activeColor : this.color,
      borderColor: this.on ? this.activeColor : this.color,
      boxShadow: this.on ? this.activeColor + " 0px 0px 0px 12px inset" : this.color + " 0px 0px 0px 12px inset"
    };
  },
  mounted() {
    this.checked ? this.on = !0 : this.on = !1;
  }
}, Tt = ["className"], _t = ["checked"], Pt = ["className"];
function jt(e, o, n, c, t, s) {
  return k(), w("label", {
    className: "c-switch-wrap",
    onClick: o[0] || (o[0] = Te((...a) => s.toggle && s.toggle(...a), ["prevent"]))
  }, [
    x("input", {
      type: "checkbox",
      style: { display: "none" },
      checked: t.on
    }, null, 8, _t),
    x("span", {
      className: "c-switch-box",
      style: F(t.colorStyle)
    }, o[1] || (o[1] = [
      x("small", { className: "switcher" }, null, -1)
    ]), 12, Pt)
  ], 8, Tt);
}
const ee = /* @__PURE__ */ ke(Bt, [["render", jt]]);
ee.install = (e) => {
  e.component(ee.name, ee);
};
const Ft = () => ({
  avatar: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  rightText: {
    type: String,
    default: ""
  },
  rightArrowShow: {
    type: Boolean,
    default: !0
  },
  rightArrowIcon: {
    type: String,
    default: ""
  }
}), Mt = Ft(), te = /* @__PURE__ */ v({
  name: "cItem",
  props: Mt,
  emits: ["onClick"],
  setup(e, o) {
    const n = () => {
      o.emit("onClick");
    };
    return () => l("div", {
      className: "c-cell-item",
      onClick: n
    }, [l("div", {
      className: "cell-left"
    }, [e.avatar && l("img", {
      src: e.avatar,
      className: "cell-left-icon"
    }, null), l("div", {
      className: "cell-left-info"
    }, [l("div", {
      className: "cell-left-title"
    }, [e.title]), e.description && l("div", {
      className: "cell-left-desc"
    }, [e.description])])]), l("div", {
      className: "cell-right"
    }, [l("span", {
      className: "right-text"
    }, [e.rightText]), e.rightArrowShow && l("em", {
      className: "icon"
    }, null)])]);
  }
});
te.install = (e) => {
  e.component(te.name, te);
};
const Ot = () => ({
  color: {
    type: String,
    default: "#6284e2"
  },
  styleLoading: {
    type: Object,
    default() {
      return {};
    }
  },
  type: {
    type: String,
    default: "dot"
  },
  huanLeftColor: {
    type: String,
    default: "#6284e2"
  },
  huanRightColor: {
    type: String,
    default: "#6284e2"
  }
}), Vt = Ot(), ne = /* @__PURE__ */ v({
  name: "cHeaderBack",
  props: Vt,
  setup(e, o) {
    const n = {
      backgroundColor: e.color
    }, c = {
      borderLeftColor: e.huanLeftColor,
      borderRightColor: e.huanRightColor
    };
    return () => l($e, null, [e.type === "dot" && l("div", {
      className: "c-loading",
      style: e.styleLoading
    }, [l("div", {
      className: "loading-container container1"
    }, [l("div", {
      className: "circle1",
      style: n
    }, null), l("div", {
      className: "circle2",
      style: n
    }, null), l("div", {
      className: "circle3",
      style: n
    }, null), l("div", {
      className: "circle4",
      style: n
    }, null)]), l("div", {
      className: "loading-container container2"
    }, [l("div", {
      className: "circle1",
      style: n
    }, null), l("div", {
      className: "circle2",
      style: n
    }, null), l("div", {
      className: "circle3",
      style: n
    }, null), l("div", {
      className: "circle4",
      style: n
    }, null)]), l("div", {
      className: "loading-container container3"
    }, [l("div", {
      className: "circle1",
      style: n
    }, null), l("div", {
      className: "circle2",
      style: n
    }, null), l("div", {
      className: "circle3",
      style: n
    }, null), l("div", {
      className: "circle4",
      style: n
    }, null)])]), e.type === "huan" && l("div", {
      className: "c-loading c-loading-huan"
    }, [l("div", {
      style: c
    }, null), l("div", {
      style: c
    }, null), l("div", {
      style: c
    }, null), l("div", {
      style: c
    }, null)])]);
  }
});
ne.install = (e) => {
  e.component(ne.name, ne);
};
const Dt = () => ({
  isShow: {
    type: Boolean,
    default: !1
  },
  showMask: {
    type: Boolean,
    default: !0
  },
  position: {
    type: String,
    default: "left"
  }
}), $t = Dt(), le = /* @__PURE__ */ v({
  name: "cDrawer",
  props: $t,
  emits: ["maskClick"],
  setup(e, o) {
    const n = (c) => {
      c.stopPropagation(), o.emit("maskClick");
    };
    return () => {
      var c, t;
      return $(l("section", {
        className: "c-drawer-container"
      }, [l("div", {
        className: ["drawer-inner", {
          "drawer-inner_left": e.position === "left",
          "drawer-inner_right": e.position === "right"
        }]
      }, [(t = (c = o.slots).default) == null ? void 0 : t.call(c)]), e.showMask && l("div", {
        className: "drawer-mask",
        onClick: n
      }, null)]), [[K, e.isShow]]);
    };
  }
});
le.install = (e) => {
  e.component(le.name, le);
};
const Kt = "formItemkey", Oe = "formKey", ae = /* @__PURE__ */ v({
  name: "cForm",
  props: {
    model: {
      type: Object,
      required: !0
    },
    rules: Object
  },
  setup(e, {
    emit: o,
    slots: n
  }) {
    const c = [], t = (u) => {
      c.push(u);
    }, s = (u) => {
      if (c.length) {
        const p = c.findIndex((y) => y.id == u);
        p > -1 && c.splice(p, 1);
      }
    };
    ve(Oe, {
      model: e.model,
      rules: e.rules,
      addItem: t,
      removeItem: s
    });
    const a = (u) => {
      const p = c.filter((y) => y.prop).every((y) => y.validate(e.model[y.prop]));
      return u && u(p), !0;
    }, i = _e();
    return Object.assign(i == null ? void 0 : i.proxy, {
      validate: a
    }), () => l("div", {
      className: "c-form"
    }, [n.default()]);
  }
});
ae.install = (e) => {
  e.component(ae.name, ae);
};
let Et = 0;
function Rt() {
  return "form-item-" + Et++;
}
const se = /* @__PURE__ */ v({
  name: "FormItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    },
    rules: {
      type: [Object, Array]
    }
  },
  setup(e, {
    emit: o,
    slots: n
  }) {
    const c = m(""), t = Rt(), s = ge(Oe);
    E(() => {
      s == null || s.addItem({
        id: t,
        prop: e.prop,
        validate: i
      });
    }), Ke(() => {
      s == null || s.removeItem(t);
    });
    const a = (b) => {
      const f = e.rules || (s == null ? void 0 : s.rules[e.prop]);
      if (f) {
        const C = Array.isArray(f) ? f : [f];
        return b ? C.filter((g) => g.trigger === b) : C;
      }
      return [];
    }, i = (b, f) => ((f || a()).forEach((S) => {
      S.validateFunc.validate(b).then((g) => !0).catch((g) => (c.value = g.errors, !1));
    }), !0);
    ve(Kt, {
      handleInputChange: (b) => {
        const f = a("input");
        i(b, f);
      },
      handleInputBlur: (b) => {
        const f = a("blur");
        i(b, f);
      }
    });
    const y = () => n.label ? n.label() : l("label", {
      className: "item-label"
    }, [e.label]);
    return () => l("div", {
      className: "c-form-item"
    }, [y(), l("div", {
      className: "item-content"
    }, [l("div", {
      className: "item-control-wrap"
    }, [n.default()]), $(l("p", {
      className: "item-error"
    }, [c.value]), [[K, c]])])]);
  }
});
se.install = (e) => {
  e.component(se.name, se);
};
const Ce = "menuKey", At = () => ({
  defaultIndex: {
    type: String,
    default: "0"
  },
  type: {
    type: String,
    default: "horizontal"
  },
  onSelect: Function
}), Lt = () => ({
  index: {
    type: String,
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}), zt = () => ({
  index: String,
  title: String
}), qt = At(), oe = /* @__PURE__ */ v({
  name: "cMenu",
  props: qt,
  setup(e, {
    emit: o,
    slots: n,
    attrs: c
  }) {
    const t = m(e.defaultIndex), s = (u) => {
      t.value = u, e.onSelect && e.onSelect(u);
    }, a = m({
      index: t.value,
      onSelect: s,
      type: e.type
    });
    ve(Ce, a.value), ve("changeIndex", (u) => {
      console.log("changeIndex", u), a.value.index = u;
    });
    const i = () => n.default().map((u, p) => {
      if (u.type.name === "cMenuItem" || u.type.name === "cSubMenu")
        return Pe(u, {
          index: p.toString()
        });
      console.error("Warning:Menu's child must be cMenuItem or cSubMenu");
    });
    return () => {
      const {
        type: u
      } = e, p = j("c-menu", {
        "menu-vertical": u === "vertical",
        "menu-horizontal": u !== "vertical"
      });
      return l("ul", D(c, {
        className: p
      }), [i()]);
    };
  }
});
oe.install = (e) => {
  e.component(oe.name, oe);
};
const Ht = Lt(), z = /* @__PURE__ */ v({
  name: "cMenuItem",
  props: Ht,
  setup(e, {
    emit: o,
    slots: n,
    attrs: c
  }) {
    const t = ge(Ce), s = ge("changeIndex");
    return () => {
      const {
        index: a,
        disabled: i
      } = e, u = () => {
        i || (s(a), t != null && t.onSelect && t.onSelect(a));
      };
      return l("li", D(c, {
        className: ["menu-item", {
          "is-disabled": i,
          "is-active": (t == null ? void 0 : t.index) == a
        }],
        onClick: u
      }), [n.default()]);
    };
  }
});
z.playName = "cMenuItem";
z.install = (e) => {
  e.component(z.name, z);
};
const Ut = zt(), ce = /* @__PURE__ */ v({
  name: "cSubMenu",
  props: Ut,
  setup(e, {
    emit: o,
    attrs: n,
    slots: c
  }) {
    const t = ge(Ce), s = m(!1), a = Ne({
      "c-submenu": !0,
      "menu-opened": (t == null ? void 0 : t.type) !== "vertical" ? s.value : !s.value
    }), i = (f) => {
      f.preventDefault(), a["menu-opened"] = !a["menu-opened"];
    };
    let u;
    const p = (f, C) => {
      clearTimeout(u), f.preventDefault(), u = setTimeout(() => {
        a["menu-opened"] = C;
      }, 100);
    }, y = (t == null ? void 0 : t.type) === "vertical" ? {
      onClick: i
    } : {}, b = (t == null ? void 0 : t.type) !== "vertical" ? {
      onMouseenter: (f) => {
        p(f, !0);
      },
      onMouseleave: (f) => {
        p(f, !1);
      }
    } : {};
    return () => {
      const f = () => {
        const r = c.default().map((d, h) => {
          if (d.type.name === "cMenuItem")
            return Pe(d, {
              index: `${e.index}-${h.toString()}`
            });
          console.error("must be a cMenuItem");
        });
        return l("ul", {
          className: a
        }, [r]);
      }, {
        index: C,
        title: S
      } = e, g = j("menu-item submenu-item", {
        "is-active": t.index.split("-")[0] === C
      });
      return l("li", D(n, {
        key: C,
        className: g
      }, b), [l("div", D({
        className: "submenu-title"
      }, y, {
        onClick: i
      }), [S]), f()]);
    };
  }
});
ce.install = (e) => {
  e.component(ce.name, ce);
};
const Wt = () => ({
  name: String
}), Yt = () => ({
  modelValue: {
    type: String,
    default: ""
  }
}), Gt = Yt(), re = /* @__PURE__ */ v({
  name: "cTabs",
  props: Gt,
  emits: ["update:modelValue", "click"],
  setup(e, {
    emit: o,
    slots: n
  }) {
    const c = m(e.modelValue);
    ye(() => e.modelValue, (a) => {
      c.value = a;
    });
    const t = (a) => {
      c.value !== a && (o("update:modelValue", a), o("click", a), c.value = a);
    }, s = () => n.default().map((a, i) => {
      const u = a.props.name === c.value ? "active" : "";
      return l("div", {
        className: "c-tab-item " + u,
        onClick: t.bind(null, a.props.name)
      }, [a.children.title ? a.children.title() : a.props.name]);
    });
    return () => l("div", {
      className: "c-tabs"
    }, [l("div", {
      className: "navs"
    }, [s()]), n.default()]);
  }
});
re.install = (e) => {
  e.component(re.name, re);
};
const Jt = Wt(), ie = /* @__PURE__ */ v({
  name: "cTabItem",
  props: Jt,
  setup(e, {
    emit: o,
    slots: n
  }) {
    return () => {
      var s, a;
      const c = (s = _e()) == null ? void 0 : s.parent, t = ((a = c == null ? void 0 : c.props) == null ? void 0 : a.modelValue) === e.name;
      return $(l("div", {
        className: "pane"
      }, [n.default()]), [[K, t]]);
    };
  }
});
ie.install = (e) => {
  e.component(ie.name, ie);
};
const Qt = () => ({
  ...Me(),
  fetchSuggestions: {
    type: Function,
    required: !0
  },
  onSelect: Function,
  renderOption: Function
});
function Xt(e, o) {
  const n = (c) => {
    !e.value || e.value.contains(c.target) || o();
  };
  E(() => {
    document.addEventListener("click", n);
  }), Ee(() => {
    document.removeEventListener("click", n);
  });
}
const Zt = Qt(), ue = /* @__PURE__ */ v({
  name: "AutoComplete",
  props: Zt,
  components: {
    cInput: A
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: o,
    attrs: n
  }) {
    const c = m([]), t = m(!1), s = m(e.modelValue), a = m(-1), i = m(), u = m(!0);
    Xt(i, () => {
      c.value = [];
    }), ye(() => e.modelValue, ((r, d = 500) => {
      let h = null;
      return (...T) => {
        h && clearInterval(h), h = setTimeout(() => {
          r.apply(this, T), h = null;
        }, d);
      };
    })((r) => {
      if (u.value) {
        console.log(u.value);
        const d = e.fetchSuggestions(r);
        d instanceof Promise ? (t.value = !0, d.then((h) => {
          t.value = !1, c.value = h;
        })) : c.value = d, a.value = -1;
      }
    }), {
      immediate: !0
    });
    const y = (r) => {
      u.value = !0, r !== e.modelValue && o("update:modelValue", r);
    }, b = (r) => {
      u.value = !1, s.value = r.value, c.value = [], e.onSelect && e.onSelect(r);
    }, f = (r) => e.renderOption ? e.renderOption(r) : r.value, C = () => l("ul", {
      className: "c-suggestion-list"
    }, [c.value.map((r, d) => {
      const h = j("suggestion-item", {
        "is-active": d === a.value
      });
      return l("li", {
        key: d,
        className: h,
        onClick: b.bind(null, r)
      }, [f(r)]);
    })]), S = (r) => {
      r < 0 && (r = 0), r >= c.value.length && (r = c.value.length - 1), a.value = r;
    }, g = (r) => {
      switch (console.log(r.keyCode), r.keyCode) {
        case 13:
          c.value[a.value] && b(c.value[a.value]);
          break;
        case 38:
          S(a.value - 1);
          break;
        case 40:
          S(a.value + 1);
          break;
        case 27:
          c.value = [];
          break;
      }
    };
    return () => {
      const {
        onSelect: r,
        modelValue: d,
        style: h
      } = e;
      return l("div", {
        className: "c-auto-complete",
        style: h,
        ref: i
      }, [l(je("c-Input"), D(n, {
        modelValue: s.value,
        onChange: y,
        onKeydown: g
      }), null), t.value && l("ul", null, [l("span", {
        className: "iconfont icon-loading spinner"
      }, null)]), c.value.length > 0 && C()]);
    };
  }
});
ue.install = (e) => {
  e.component(ue.name, ue);
};
const en = () => ({
  timer: {
    type: Number,
    default: 60
  },
  showNum: {
    // 是否显示数字
    type: Boolean,
    default: !0
  }
}), tn = en(), de = /* @__PURE__ */ v({
  name: "cTimeCircle",
  props: tn,
  emits: ["onEnd"],
  setup(e, o) {
    const n = m(!1), c = m(!0), t = m(0), s = m(e.timer), a = j("circle", {
      "clip-auto": n.value
    }), i = j("percent right", {
      wth0: c.value
    });
    return E(() => {
      const u = setInterval(() => {
        if (t.value >= 360) {
          clearInterval(u), t.value = 360, o.emit("onEnd");
          return;
        } else t.value >= 180 && (n.value = !0, c.value = !1);
        t.value += 360 / e.timer, s.value--;
      }, 1e3);
    }), () => l("div", {
      className: "c-time-circle"
    }, [l("div", {
      className: a
    }, [l("div", {
      className: "percent left",
      style: {
        transform: "rotate(" + (360 - t.value) + "deg)"
      }
    }, null), l("div", {
      className: i
    }, null)]), l("div", {
      className: "num"
    }, [$(l("span", null, [s.value, I("s")]), [[K, e.showNum]])])]);
  }
});
de.install = (e) => {
  e.component(de.name, de);
};
const nn = () => ({
  date: {
    type: String,
    default: "2023-10-16 10:15:26"
  },
  bgColor: {
    type: String,
    default: "#fd7e10"
  },
  textColor: {
    type: String,
    default: "#fff"
  },
  type: {
    type: Number,
    default: 1
  }
}), ln = nn(), me = /* @__PURE__ */ v({
  name: "cTimeOut",
  props: ln,
  setup(e) {
    const o = m({
      day: "",
      hour: "",
      minute: "",
      second: ""
    }), n = V(() => ({
      color: e.textColor,
      background: e.bgColor
    })), c = m(null), t = (a) => (a < 10 && (a = "0" + a), a), s = (a, i, u, p, y, b) => {
      const S = new Date(a, i - 1, u, p, y, b) - /* @__PURE__ */ new Date(), g = parseInt((S / 1e3 / 60 / 60 / 24).toString(), 10), r = parseInt((S / 1e3 / 60 / 60 % 24).toString(), 10);
      let d = parseInt((S / 1e3 / 60 % 60).toString(), 10), h = parseInt((S / 1e3 % 60).toString(), 10);
      d = t(d), h = t(h), o.value = {
        day: g.toString(),
        hour: r.toString(),
        minute: d.toString(),
        second: h.toString()
      };
    };
    return E(() => {
      clearInterval(c), c.value = setInterval(() => {
        if (Date.parse(e.date) < Date.parse((/* @__PURE__ */ new Date()).toString()))
          clearInterval(c);
        else {
          const a = new Date(e.date);
          s(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
        }
      }, 1e3);
    }), () => l("section", {
      className: "c-time-count"
    }, [e.type === 1 && l("div", {
      className: "type1"
    }, [l("span", {
      className: "timer",
      style: n.value
    }, [o.value.day, I("天")]), l("span", {
      className: "dot"
    }, [I(" : ")]), l("span", {
      className: "timer",
      style: n.value
    }, [o.value.hour, I("时")]), l("span", {
      className: "dot"
    }, [I(" : ")]), l("span", {
      className: "timer",
      style: n.value
    }, [o.value.minute, I("分")]), l("span", {
      className: "dot"
    }, [I(" : ")]), l("span", {
      className: "timer",
      style: n.value
    }, [o.value.second, I("秒")])]), e.type === 2 && l("div", {
      className: "type2"
    }, [l("span", {
      className: "timer",
      style: n.value
    }, [o.value.day]), l("span", {
      className: "dot"
    }, [I("天")]), l("span", {
      className: "timer",
      style: n.value
    }, [o.value.hour]), l("span", {
      className: "dot"
    }, [I("时")]), l("span", {
      className: "timer",
      style: n.value
    }, [o.value.minute]), l("span", {
      className: "dot"
    }, [I("分")]), l("span", {
      className: "timer",
      style: n.value
    }, [o.value.second]), l("span", {
      className: "dot"
    }, [I("秒")])])]);
  }
});
me.install = (e) => {
  e.component(me.name, me);
};
const an = () => ({
  source: {
    type: Array,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: !1
  },
  checkStrictly: {
    type: Boolean,
    default: !1
  },
  render: Function,
  lazyLoad: Function
}), sn = () => ({
  node: {
    type: Object,
    required: !0
  },
  showCheckbox: {
    type: Boolean,
    default: !1
  },
  checkStrictly: {
    type: Boolean,
    default: !1
  },
  onCheckChange: Function,
  iconSlot: Function,
  render: Function,
  onSelectChange: Function,
  onToggleExpand: Function
}), on = () => ({
  node: {
    type: Object,
    required: !0
  },
  render: {
    type: Function,
    required: !0
  }
}), cn = on(), rn = /* @__PURE__ */ v({
  name: "RenderNode",
  props: cn,
  setup(e, {
    emit: o
  }) {
    return () => e.render(e.node);
  }
});
function un(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Re(e);
}
const dn = sn(), we = /* @__PURE__ */ v({
  name: "TreeNode",
  props: dn,
  emits: ["toggle-expand", "select-change", "check-change"],
  components: {
    cCheckbox: L
  },
  setup(e, {
    emit: o,
    expose: n
  }) {
    const c = V(() => {
      var s, a;
      let t = !1;
      if (!e.checkStrictly && ((s = e.node) != null && s.hasChildren)) {
        console.log("props:", e.checkStrictly, (a = e.node) == null ? void 0 : a.hasChildren);
        const {
          children: i
        } = e.node, u = i.filter((p) => p.checked);
        t = u.length > 0 && u.length < i.length;
      }
      return t;
    });
    return n({
      node: e.node,
      // halfchecked变量 只有给方法才是响应式的
      halfChecked: () => c.value
    }), () => {
      const {
        node: t,
        render: s,
        iconSlot: a,
        showCheckbox: i
      } = e, u = (g) => {
        o("check-change", [g, e.node]);
      }, p = () => {
        o("toggle-expand", e.node);
      }, y = () => {
        var g;
        return l("div", {
          className: ["node-arrow", (g = e.node) != null && g.expanded ? "expanded" : ""]
        }, [t.hasChildren ? a ? a(t == null ? void 0 : t.loading) : t != null && t.loading ? l("i", {
          className: "iconfont iconloading ico-loading"
        }, null) : l("i", {
          className: "iconfont iconExpand"
        }, null) : null]);
      }, b = j("node-title", {
        disabled: t == null ? void 0 : t.disabled,
        selected: (t == null ? void 0 : t.selected) && !i
      }), f = (g) => {
        g.stopPropagation(), g.preventDefault(), t != null && t.disabled || o("select-change", e.node);
      }, C = () => s ? l(rn, {
        render: s,
        node: t
      }, null) : l("div", {
        className: b
      }, [t.name]), S = () => {
        if (i) {
          let g;
          return l(je("c-Checkbox"), {
            disabled: t == null ? void 0 : t.disabled,
            modelValue: t == null ? void 0 : t.checked,
            halfChecked: c.value,
            onChange: u,
            className: "node-content node-checkbox"
          }, un(g = C()) ? g : {
            default: () => [g]
          });
        }
        return l("div", {
          onClick: f,
          className: "node-content node-text"
        }, [C()]);
      };
      return l("div", {
        className: "c-tree-node",
        style: {
          paddingLeft: t.level * 18 + "px"
        },
        key: t.nodeKey,
        onClick: p
      }, [y(), S()]);
    };
  }
});
var H = {}, U = {}, xe;
function mn() {
  if (xe) return U;
  xe = 1, Object.defineProperty(U, "__esModule", { value: !0 });
  function e(o) {
    var n = Object.prototype.toString, c = {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Object]": "object",
      "[object Map]": "map",
      "[object Set]": "set",
      "[object Symbol]": "symbol"
    };
    return c[n.call(o)];
  }
  return U.default = e, U;
}
var Ie;
function fn() {
  if (Ie) return H;
  Ie = 1, Object.defineProperty(H, "__esModule", { value: !0 });
  var e = mn();
  function o(n) {
    var c = e.default(n), t, s, a;
    if (c === "array")
      t = [];
    else if (c === "object")
      t = {};
    else
      return n;
    if (c === "array") {
      for (s = 0, a = n.length; s < a; s++)
        t.push(o(n[s]));
      return t;
    } else if (c === "object") {
      for (s in n)
        t[s] = o(n[s]);
      return t;
    }
  }
  return H.default = o, H;
}
var pn = fn();
const hn = /* @__PURE__ */ Fe(pn);
function vn(e, o) {
  const n = (c) => {
    c.length && c.forEach((t) => {
      t.checked = e, t.children.length && n(t.children);
    });
  };
  n(o.children);
}
function gn(e, o) {
  const n = (c) => {
    if (c.parentKey) {
      const t = o.find(
        (s) => s.nodeKey === c.parentKey
      );
      if (t) {
        const s = !t.children.some(
          (a) => !a.checked
        );
        s !== t.checked && (t.checked = s, n(t));
      }
    }
  };
  n(e);
}
const yn = an(), fe = /* @__PURE__ */ v({
  name: "cTree",
  props: yn,
  components: {
    TreeNode: we
  },
  emits: ["select-change", "check-change"],
  setup(e, {
    emit: o,
    slots: n,
    expose: c
  }) {
    const t = m([]), s = m(!1), a = m("");
    function i(r) {
      const d = [], h = (T, N = 0, M = null) => T.map((_) => {
        const P = {
          ..._,
          level: N,
          loading: !1,
          disabled: _.disabled || !1,
          expanded: _.expanded || !1,
          selected: _.selected || !1,
          checked: _.checked || (M == null ? void 0 : M.checked) || !1,
          hasChildren: _.hasChildren || !1,
          parentKey: (M == null ? void 0 : M.nodeKey) || null,
          //除开顶级node都有
          children: _.children || []
        };
        return P.selected && (a.value = P.nodeKey), d.push(P), P.children.length && _.expanded && (P.children = h(P.children, N + 1, P)), P;
      });
      return r.length && h(r), d;
    }
    ye(() => e.source, (r) => {
      t.value = i(r);
    }, {
      immediate: !0
    });
    const u = (r, d) => {
      const h = d != null && d.length ? d : hn(r.children);
      r.children = h.map((N) => ({
        ...N,
        level: N.level || r.level + 1,
        loading: !1,
        disabled: N.disabled || !1,
        expanded: N.expanded || !1,
        selected: N.selected || !1,
        // false也是和法治  不能用  ?? 更严格的或  只有前面是null和undefined才会走到后面去
        checked: N.checked || !1,
        hasChildren: N.hasChildren || !1,
        parentKey: r.nodeKey || null,
        //除开顶级node都有
        children: N.children || []
      }));
      const T = t.value.findIndex((N) => N.nodeKey === r.nodeKey);
      T > -1 && (t.value.splice(T + 1, 0, ...r.children), console.log("flatList:", t.value));
    }, p = (r) => {
      const d = [], h = (T) => {
        T.children.length && T.children.forEach((N) => {
          d.push(N.nodeKey), N.expanded && (N.expanded = !1, h(N));
        });
      };
      h(r), d.length && (t.value = t.value.filter((T) => !d.includes(T.nodeKey)));
    };
    c({
      getSelectedNode: () => t.value.find((r) => r.selected),
      getCheckedNodes: () => t.value.filter((r) => r.checked),
      getHalfCheckedNodes: () => y.value.filter((r) => r.halfChecked()).map((r) => r.node)
    });
    const y = m([]), b = (r, d) => {
      d && (y.value[r] = d);
    }, f = (r) => {
      s.value || (r.expanded = !r.expanded, r.expanded ? r.children.length ? u(r) : e.lazyLoad && r.hasChildren ? (r.loading = !0, s.value = !0, e.lazyLoad(r, (d) => {
        console.log("懒加载后的children:", d), d.length && u(r, d), r.loading = !1, s.value = !1;
      })) : (r.expanded = !r.expanded, console.error("没有children且懒加载数据也没有")) : p(r));
    }, C = (r) => {
      if (r.selected = !r.selected, a.value === r.nodeKey)
        a.value = "";
      else {
        const d = t.value.findIndex((h) => h.nodeKey === a.value);
        d > -1 && (t.value[d].selected = !1), a.value = r.nodeKey;
      }
      o("select-change", r);
    }, S = ([r, d]) => {
      d.checked = r, console.log("checkStrick", e.checkStrictly), e.checkStrictly || (vn(r, d), gn(d, t.value)), o("check-change", d);
    }, g = () => t.value.map((r, d) => l(we, {
      key: r.nodeKey,
      node: r,
      onToggleExpand: f,
      onSelectChange: C,
      render: e.render,
      iconSlot: n.icon,
      showCheckbox: e.showCheckbox,
      onCheckChange: S,
      checkStrictly: e.checkStrictly,
      ref: b.bind(null, d)
    }, null));
    return () => l("div", {
      className: "c-tree-wrap"
    }, [l("div", {
      className: "c-tree"
    }, [g()])]);
  }
});
fe.install = (e) => {
  e.component(fe.name, fe);
};
const pe = /* @__PURE__ */ v({
  name: "cSpace",
  props: {
    height: {
      type: String,
      default: "20px"
    },
    showLine: {
      type: Boolean,
      default: !1
    },
    bgColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e, o) {
    return () => {
      const {
        height: n,
        bgColor: c,
        showLine: t
      } = e, s = V(() => ({
        height: n,
        background: c
      }));
      return l("div", {
        className: "c-space",
        style: s.value
      }, [t && l("div", {
        className: "c-space_line"
      }, null)]);
    };
  }
});
pe.install = (e) => {
  e.component(pe.name, pe);
};
const he = /* @__PURE__ */ v({
  props: {
    title: {
      type: String
    }
  },
  emits: ["click"],
  setup(e, o) {
    const n = () => {
      o.emit("click");
    };
    return () => {
      var c;
      return l("div", {
        className: "c-card",
        onClick: n
      }, [l("div", {
        className: "c-card_title"
      }, [e == null ? void 0 : e.title]), l("div", {
        className: "c-card_body"
      }, [(c = o.slots) == null ? void 0 : c.default()])]);
    };
  }
});
he.install = (e) => {
  e.component(he.name, he);
};
const q = /* @__PURE__ */ v({
  name: "cToast",
  props: {
    msg: {
      // 提示信息
      type: String,
      default: "msg"
    },
    delay: {
      // 显示的时长
      type: Number,
      default: 2e3
    },
    onEnd: {
      type: Function
    },
    showMask: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, o) {
    const n = m(!1), c = () => {
      n.value = !0;
    }, t = () => {
      n.value = !1;
    };
    return o.expose({
      open: c,
      close: t
    }), () => l(Be, {
      name: "c-toast"
    }, {
      default: () => [$(l("div", {
        className: "c-toast"
      }, [l("div", {
        className: "c-toast-msg"
      }, [e.msg]), $(l("div", {
        className: "c-toast-mask"
      }, null), [[K, e.showMask]])]), [[K, n.value]])]
    });
  }
});
q.install = (e) => {
  e.component(q.name, q);
};
function kn({
  msg: e,
  delay: o,
  showMask: n = !1,
  onEnd: c
}) {
  const t = l(q, { msg: e, delay: o, showMask: n, onEnd: c }), s = document.createElement("div");
  return Ae(t, s), document.body.append(s), Le(() => {
    var a, i;
    (i = (a = t.component) == null ? void 0 : a.exposed) == null || i.open(), setTimeout(() => {
      var u, p;
      (p = (u = t.component) == null ? void 0 : u.exposed) == null || p.close(), c && c(), setTimeout(() => {
        document.body.removeChild(s);
      }, 300);
    }, o);
  }), t;
}
function Cn(e, o = 200) {
  const n = m(e);
  return ye(() => n.value, (c) => {
    let t = null;
    return function() {
      t && clearTimeout(t), t = window.setTimeout(() => {
        n.value = c, t = null;
      }, o);
    };
  }, {
    immediate: !0
  }), n.value;
}
const bn = [
  W,
  Y,
  G,
  J,
  Q,
  X,
  A,
  Z,
  L,
  ee,
  te,
  ne,
  le,
  ae,
  se,
  oe,
  z,
  ce,
  re,
  ie,
  ue,
  de,
  me,
  fe,
  pe,
  he,
  q
];
function Sn(e) {
  bn.forEach((o) => {
    e.component(o.name, o);
  });
}
export {
  ue as cAutoComplete,
  W as cBar,
  Y as cButton,
  G as cButtonFooter,
  he as cCard,
  L as cCheckBox,
  J as cCircle,
  Q as cConfirm,
  le as cDrawer,
  ae as cForm,
  se as cFormItem,
  X as cHeaderBack,
  A as cInput,
  Z as cInputPassword,
  te as cItem,
  ne as cLoading,
  oe as cMenu,
  z as cMenuItem,
  pe as cSpace,
  ce as cSubItem,
  ee as cSwitch,
  ie as cTabItem,
  re as cTabs,
  de as cTimeCircle,
  me as cTimeOut,
  q as cToast,
  fe as cTree,
  Sn as default,
  Xt as useClickOutside,
  Cn as useDebounce,
  kn as useToast
};
