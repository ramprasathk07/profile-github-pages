/* @ds-bundle: {"format":3,"namespace":"RamPrasathPortfolioDesignSystem_321ff2","components":[{"name":"BlogCard","sourcePath":"components/content/BlogCard.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"PlanRepo","sourcePath":"components/content/PlanRepo.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"TimelineEntry","sourcePath":"components/content/TimelineEntry.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionDivider","sourcePath":"components/core/SectionDivider.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/content/BlogCard.jsx":"9a5820975edc","components/content/Callout.jsx":"c844ca13c1d8","components/content/PlanRepo.jsx":"bfeeee9b940f","components/content/ProjectCard.jsx":"844bae7e5f3d","components/content/TimelineEntry.jsx":"064984764acf","components/core/ArrowLink.jsx":"a63c2f3174c5","components/core/Button.jsx":"61dd66f41466","components/core/Card.jsx":"092957b233ed","components/core/Eyebrow.jsx":"29e2ae62ff7d","components/core/SectionDivider.jsx":"37de76a939e3","components/core/Stat.jsx":"ce0f68298390","components/core/Tabs.jsx":"998f34eeaf7b","components/core/Tag.jsx":"da5f572c36f7","ui_kits/portfolio/About.jsx":"c078fd0c746c","ui_kits/portfolio/Blog.jsx":"0a358183659d","ui_kits/portfolio/Projects.jsx":"7ebeccd9b883","ui_kits/portfolio/WorkInProgress.jsx":"a4f34484813a","ui_kits/portfolio/app.jsx":"c742a1ecc5e0","ui_kits/portfolio/blogdata.jsx":"3611106802fc","ui_kits/portfolio/util.jsx":"5f3df5008a25"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RamPrasathPortfolioDesignSystem_321ff2 = window.RamPrasathPortfolioDesignSystem_321ff2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BlogCard.jsx
try { (() => {
/**
 * BlogCard — a single entry in the blog index. Minimal, Thinking-Machines
 * style: topic kicker, serif title, dek, and a date · reading-time meta line.
 */
function BlogCard({
  title,
  dek,
  topic = null,
  date,
  readingTime = null,
  href = '#',
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      padding: '28px 0',
      borderBottom: '1px solid var(--hairline)',
      ...style
    }
  }, topic && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--clay)',
      marginBottom: '12px'
    }
  }, topic), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: '28px',
      lineHeight: 1.18,
      letterSpacing: '-0.015em',
      color: 'var(--ink)',
      textDecoration: hover ? 'underline' : 'none',
      textDecorationColor: 'var(--clay)',
      textUnderlineOffset: '4px',
      textDecorationThickness: '1px'
    }
  }, title), dek && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      lineHeight: 1.55,
      color: 'var(--ink-muted)',
      marginTop: '12px',
      maxWidth: '60ch'
    }
  }, dek), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-faint)',
      marginTop: '16px',
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", null, date), readingTime && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, readingTime))));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
/**
 * Callout — an inset note for the prose / blog body. Left clay rule,
 * raised paper background. For asides, key results, or rules.
 */
function Callout({
  children,
  label = null,
  tone = 'neutral',
  style = {}
}) {
  const TONES = {
    neutral: {
      bar: 'var(--clay)',
      bg: 'var(--paper-raised)'
    },
    info: {
      bar: 'var(--cobalt)',
      bg: 'var(--cobalt-wash)'
    },
    positive: {
      bar: 'var(--positive)',
      bg: 'var(--positive-wash)'
    }
  };
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `2px solid ${t.bar}`,
      background: t.bg,
      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
      padding: '16px 20px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: t.bar,
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArrowLink — a text link with a trailing arrow that nudges on hover.
 * The portfolio's signature "see projects →" affordance.
 */
function ArrowLink({
  children,
  href = '#',
  tone = 'accent',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'ink' ? 'var(--ink)' : 'var(--clay)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 600,
      color,
      textDecoration: 'none',
      borderBottom: hover ? `1px solid ${tone === 'ink' ? 'var(--ink)' : 'var(--clay)'}` : '1px solid transparent',
      paddingBottom: '1px',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '6px 12px',
    fontSize: '13px',
    gap: '6px'
  },
  md: {
    padding: '9px 16px',
    fontSize: '14px',
    gap: '7px'
  },
  lg: {
    padding: '12px 22px',
    fontSize: '15px',
    gap: '8px'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    border: '1px solid var(--ink)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ink)',
    border: '1px solid var(--hairline-strong)'
  },
  accent: {
    background: 'var(--clay)',
    color: '#fff',
    border: '1px solid var(--clay)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-muted)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: {
    background: 'var(--ink-muted)'
  },
  secondary: {
    background: 'var(--paper-raised)',
    borderColor: 'var(--ink-faint)'
  },
  accent: {
    background: 'var(--clay-hover)',
    borderColor: 'var(--clay-hover)'
  },
  ghost: {
    background: 'var(--paper-raised)',
    color: 'var(--ink)'
  }
};

/**
 * Button — the primary action control. Ink-filled by default; restrained.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const Tag = href ? 'a' : as;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    ...s,
    ...v,
    gap: s.gap,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.05em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.05em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — paper surface with a hairline border. The base container for
 * content blocks. `interactive` adds a subtle lift + clay border on hover.
 */
function Card({
  children,
  interactive = false,
  surface = 'page',
  padding = '24px',
  style = {},
  as = 'div',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const SURFACES = {
    page: 'var(--surface-page)',
    raised: 'var(--paper-raised)',
    pure: 'var(--paper-pure)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: SURFACES[surface] || SURFACES.page,
      border: '1px solid var(--hairline)',
      borderColor: interactive && hover ? 'var(--clay)' : 'var(--hairline)',
      borderRadius: 'var(--radius-md)',
      padding,
      transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — mono uppercase kicker, optionally numbered like "// 01 — about".
 */
function Eyebrow({
  children,
  index = null,
  slash = true,
  tone = 'muted',
  style = {},
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--clay)' : tone === 'strong' ? 'var(--ink)' : 'var(--ink-faint)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11.5px',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), (slash || index != null) && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)'
    }
  }, slash ? '//' : '', index != null ? ` ${String(index).padStart(2, '0')}` : ''), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionDivider.jsx
try { (() => {
/**
 * SectionDivider — a full-width hairline with an optional mono label,
 * echoing the "// 01 — about" section markers in the portfolio.
 */
function SectionDivider({
  label = null,
  index = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11.5px',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)'
    }
  }, "//", index != null ? ` ${String(index).padStart(2, '0')}` : ''), ' ', label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--hairline)'
    }
  }));
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Stat — a large serif figure with a mono label. For "2+ years", "#1", etc.
 */
function Stat({
  value,
  label,
  accent = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: '46px',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: accent ? 'var(--clay)' : 'var(--ink)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      marginTop: '10px',
      maxWidth: '16ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — text-style navigation tabs with a clay underline on the active tab.
 * Matches the portfolio's top nav. Controlled via `value` / `onChange`.
 */
function Tabs({
  items = [],
  value,
  onChange = () => {},
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      borderBottom: '1px solid var(--hairline)',
      ...style
    }
  }, items.map(it => {
    const key = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const active = key === value;
    return /*#__PURE__*/React.createElement(TabButton, {
      key: key,
      active: active,
      label: label,
      onClick: () => onChange(key)
    });
  }));
}
function TabButton({
  active,
  label,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": active,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: active ? 600 : 500,
      color: active ? 'var(--ink)' : hover ? 'var(--ink-muted)' : 'var(--ink-faint)',
      padding: '11px 13px 12px',
      position: 'relative',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '13px',
      right: '13px',
      bottom: '-1px',
      height: '2px',
      background: 'var(--clay)',
      transform: active ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small technical chip for stacks, tools, topics (e.g. "vLLM", "GRPO").
 */
function Tag({
  children,
  tone = 'neutral',
  mono = true,
  style = {},
  ...rest
}) {
  const TONES = {
    neutral: {
      background: 'var(--paper-raised)',
      color: 'var(--ink-muted)',
      border: '1px solid var(--hairline)'
    },
    accent: {
      background: 'var(--clay-wash)',
      color: 'var(--clay-hover)',
      border: '1px solid transparent'
    },
    cobalt: {
      background: 'var(--cobalt-wash)',
      color: 'var(--cobalt)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-muted)',
      border: '1px solid var(--hairline-strong)'
    }
  };
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: '11.5px',
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: mono ? '0.01em' : '0.01em',
      padding: '4px 8px',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/PlanRepo.jsx
try { (() => {
function GitHubMark({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
  }));
}
function RepoButton({
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: '11.5px',
      fontWeight: 600,
      color: hover ? 'var(--paper)' : 'var(--ink)',
      background: hover ? 'var(--ink)' : 'transparent',
      border: '1px solid ' + (hover ? 'var(--ink)' : 'var(--hairline-strong)'),
      borderRadius: 'var(--radius-sm)',
      padding: '4px 9px',
      textDecoration: 'none',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(GitHubMark, {
    size: 13
  }), " code");
}
const STATUS = {
  flagship: {
    label: '★ FLAGSHIP',
    color: 'var(--clay-hover)',
    bg: 'var(--clay-wash)'
  },
  active: {
    label: 'IN PROGRESS',
    color: 'var(--positive)',
    bg: 'var(--positive-wash)'
  },
  research: {
    label: 'RESEARCH',
    color: 'var(--cobalt)',
    bg: 'var(--cobalt-wash)'
  },
  next: {
    label: 'QUEUED',
    color: 'var(--warning)',
    bg: 'var(--warning-wash)'
  },
  planned: {
    label: 'PLANNED',
    color: 'var(--ink-faint)',
    bg: 'var(--paper-raised)'
  }
};

/**
 * PlanRepo — a roadmap entry for the Work-in-Progress tab. Rank number,
 * repo name, status pill, timeline, the working signal, and domain tags.
 * Started repos show a progress bar; not-yet-started ones blur their
 * description (name-only "coming soon" treatment). A `repo` URL renders a
 * compact GitHub "code" button.
 */
function PlanRepo({
  rank,
  name,
  status = 'planned',
  timeline,
  signal,
  domains = [],
  progress = null,
  repo = null,
  blurred = false,
  style = {}
}) {
  const s = STATUS[status] || STATUS.planned;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      gap: '20px',
      padding: '24px 0',
      borderBottom: '1px solid var(--hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: '34px',
      color: blurred ? 'var(--ink-ghost)' : 'var(--ink-faint)',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, String(rank).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      color: s.color,
      background: s.bg,
      padding: '3px 7px',
      borderRadius: 'var(--radius-xs)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, repo && /*#__PURE__*/React.createElement(RepoButton, {
    href: repo
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-faint)'
    }
  }, timeline))), blurred ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      filter: 'blur(4.5px)',
      userSelect: 'none',
      pointerEvents: 'none',
      opacity: 0.7
    },
    "aria-hidden": "true"
  }, signal), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--ink-ghost)'
    }
  }), "details coming soon")) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: '10px'
    }
  }, signal), progress != null && !blurred && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '5px',
      background: 'var(--paper-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progress + '%',
      height: '100%',
      background: 'var(--clay)',
      borderRadius: 'var(--radius-pill)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-faint)'
    }
  }, progress, "%")), domains.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-ghost)'
    }
  }, "domains"), domains.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: "outline"
  }, t)))));
}
Object.assign(__ds_scope, { PlanRepo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PlanRepo.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function GitHubMark({
  size = 15
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
  }));
}

/**
 * ProjectCard — a repository / project entry: optional badge, title, blurb,
 * tag row, links, and a primary "View code" GitHub button.
 * The core unit of the Projects grid.
 */
function ProjectCard({
  title,
  blurb,
  tags = [],
  badge = null,
  badgeTone = 'accent',
  links = [],
  repo = null,
  icon = null,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)',
      border: '1px solid var(--hairline)',
      borderColor: hover ? 'var(--clay)' : 'var(--hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '22px 22px 20px',
      transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateY(-2px)' : 'none',
      height: '100%',
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: badgeTone
  }, badge)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: '22px',
      letterSpacing: '-0.01em',
      color: 'var(--ink)',
      lineHeight: 1.15,
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.9em'
    }
  }, icon), title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: '10px',
      flex: 1
    }
  }, blurb), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '16px'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, t))), (links.length > 0 || repo) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginTop: '16px',
      paddingTop: '14px',
      borderTop: '1px solid var(--hairline)',
      flexWrap: 'wrap'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: 500,
      color: 'var(--clay)',
      textDecoration: 'none',
      letterSpacing: '0.01em'
    }
  }, l.label, " \u2197")), repo && /*#__PURE__*/React.createElement("a", {
    href: repo,
    target: "_blank",
    rel: "noreferrer",
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12.5px',
      fontWeight: 600,
      color: hover ? 'var(--paper)' : 'var(--ink)',
      background: hover ? 'var(--ink)' : 'transparent',
      border: '1px solid ' + (hover ? 'var(--ink)' : 'var(--hairline-strong)'),
      borderRadius: 'var(--radius-sm)',
      padding: '6px 11px',
      textDecoration: 'none',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(GitHubMark, {
    size: 14
  }), " View code")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineEntry.jsx
try { (() => {
/**
 * TimelineEntry — one role in the experience timeline: title, org, dates,
 * a one-line summary, bullets, and a tech tag row. Left clay rule + node.
 */
function TimelineEntry({
  role,
  org,
  summary,
  dates,
  bullets = [],
  tags = [],
  last = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '22px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0,
      width: '11px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      background: 'var(--paper)',
      border: '2px solid var(--clay)',
      marginTop: '5px'
    }
  }), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1px',
      flex: 1,
      background: 'var(--hairline-strong)',
      marginTop: '4px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : '40px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: '21px',
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, role, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)'
    }
  }, "\xB7 ", org)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-faint)',
      whiteSpace: 'nowrap',
      letterSpacing: '0.02em'
    }
  }, dates)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13.5px',
      color: 'var(--ink-faint)',
      marginTop: '4px'
    }
  }, summary), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '14px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '9px'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      paddingLeft: '18px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      color: 'var(--clay)'
    }
  }, "\u25B8"), b))), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '16px'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: "outline"
  }, t)))));
}
Object.assign(__ds_scope, { TimelineEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineEntry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* About — the home view: hero, profile, stats, experience, stack, achievements, research, education. */

function HeroJson() {
  const j = PROFILE.ramjson;
  const line = (k, v, last) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cobalt)'
    }
  }, "\"", k, "\""), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, ":"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-hover)'
    }
  }, JSON.stringify(v)), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, ","));
  const keys = Object.keys(j);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '11px 14px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--clay)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--warning)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--positive)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-faint)',
      marginLeft: 6
    }
  }, "~/whoami \xB7 cat ram.json")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      lineHeight: 1.85,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, '{'), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 18
    }
  }, keys.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, line(k, j[k], i === keys.length - 1)))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, '}', /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4,
      animation: 'blink 1.1s steps(1) infinite',
      color: 'var(--clay)'
    }
  }, "\u2588"))));
}
function About({
  onNav
}) {
  const {
    Button,
    Tag,
    Stat,
    SectionDivider,
    ArrowLink,
    TimelineEntry
  } = DS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 28,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-muted)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--positive)',
      boxShadow: '0 0 0 3px var(--positive-wash)'
    }
  }), PROFILE.status), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.45fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(44px, 6vw, 72px)',
      fontWeight: 300,
      lineHeight: 1.02,
      letterSpacing: '-0.025em'
    }
  }, PROFILE.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: 26,
      maxWidth: '54ch'
    }
  }, PROFILE.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "\u2192",
    onClick: () => onNav('projects')
  }, "See projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('contact')
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 28,
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    style: {
      color: 'var(--ink-muted)',
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 15
  }), " github"), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.linkedin,
    style: {
      color: 'var(--ink-muted)',
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 15
  }), " linkedin"), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + PROFILE.email,
    style: {
      color: 'var(--ink-muted)',
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), " email"))), /*#__PURE__*/React.createElement(HeroJson, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      marginTop: 56,
      paddingTop: 36,
      borderTop: '1px solid var(--hairline)',
      flexWrap: 'wrap'
    }
  }, STATS.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
    key: i,
    value: s.value,
    label: s.label,
    accent: s.accent
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    index: 1,
    label: "profile",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-prose",
    style: {
      maxWidth: '70ch'
    }
  }, PROFILE_PROSE.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      marginTop: i ? '1.1em' : 0
    }
  }, p)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 56px'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    index: 2,
    label: "experience",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, EXPERIENCE.map((e, i) => /*#__PURE__*/React.createElement(TimelineEntry, _extends({
    key: i
  }, e, {
    last: i === EXPERIENCE.length - 1
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 56px'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    index: 3,
    label: "stack",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '28px 40px'
    }
  }, STACK.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      marginBottom: 14
    }
  }, g.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, g.items.map((it, j) => /*#__PURE__*/React.createElement(Tag, {
    key: j
  }, it))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 56px'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    index: 4,
    label: "achievements",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16
    }
  }, ACHIEVEMENTS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      letterSpacing: '0.1em',
      color: 'var(--clay)',
      marginBottom: 14
    }
  }, a.kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.2,
      color: 'var(--ink)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: 12
    }
  }, a.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 64px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 56
    },
    className: "re-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionDivider, {
    index: 5,
    label: "research",
    style: {
      marginBottom: 32
    }
  }), RESEARCH.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingBottom: 24,
      marginBottom: 24,
      borderBottom: i < RESEARCH.length - 1 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 19,
      lineHeight: 1.25,
      color: 'var(--ink)'
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--clay)',
      margin: '8px 0 10px'
    }
  }, r.venue), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-muted)'
    }
  }, r.body)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionDivider, {
    index: 6,
    label: "education",
    style: {
      marginBottom: 32
    }
  }), EDUCATION.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--ink)'
    }
  }, e.school), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-muted)',
      marginTop: 4
    }
  }, e.degree)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--ink-faint)',
      whiteSpace: 'nowrap'
    }
  }, e.when))))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Blog.jsx
try { (() => {
/* Blog — minimal index (Thinking Machines style) + full post reader. */

function BlogIndex({
  onOpen
}) {
  const {
    BlogCard
  } = DS;
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '56px 0 64px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "writing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px, 5vw, 52px)',
      fontWeight: 300,
      letterSpacing: '-0.025em',
      marginTop: 16,
      lineHeight: 1.04
    }
  }, "Notes from the serving layer."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: 18,
      maxWidth: '58ch'
    }
  }, "Deep dives on LLM inference, quantization, post-training, and the systems that make models fast. Written while building them.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(featured.slug),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      appearance: 'none',
      cursor: 'pointer',
      background: 'var(--paper-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '30px 30px 26px',
      margin: '40px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--clay)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-xs)'
    }
  }, "Featured"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, featured.topic)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--ink-muted)',
      marginTop: 14
    }
  }, featured.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-faint)',
      marginTop: 18,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, featured.date), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, featured.readingTime))), /*#__PURE__*/React.createElement("div", null, rest.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p.slug,
    topic: p.topic,
    title: p.title,
    dek: p.dek,
    date: p.date,
    readingTime: p.readingTime,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p.slug);
    }
  }))));
}

/* ----- post reader ----- */
function BlogPost({
  slug,
  onBack
}) {
  const post = POSTS.find(p => p.slug === slug);
  const isFull = slug === 'vllm-internals';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '40px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--ink-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " all writing"), /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, post.topic), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px, 4.6vw, 48px)',
      fontWeight: 300,
      letterSpacing: '-0.025em',
      lineHeight: 1.07,
      marginTop: 18
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--ink-muted)',
      marginTop: 22
    }
  }, post.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 28,
      paddingBottom: 28,
      borderBottom: '1px solid var(--hairline)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--ink)',
      color: 'var(--paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 15
    }
  }, "R"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Ram Prasath K"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-faint)'
    }
  }, post.date, " \xB7 ", post.readingTime)))), isFull ? /*#__PURE__*/React.createElement(VllmPost, null) : /*#__PURE__*/React.createElement(DraftNotice, {
    post: post
  }));
}
function DraftNotice({
  post
}) {
  const {
    Callout,
    Tag
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-body"
  }, /*#__PURE__*/React.createElement("p", null, "This essay is in progress. It accompanies the ", /*#__PURE__*/React.createElement("b", null, post.topic.toLowerCase()), " work currently underway \u2014 drafts go up as the experiments close, so the writing always reflects shipped numbers rather than promises.")), /*#__PURE__*/React.createElement(Callout, {
    label: "status \xB7 drafting",
    style: {
      marginTop: 28
    }
  }, "Want an early read? The repo and W&B report land first; the writeup follows. Reach out and I'll send the working notes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, post.topic), /*#__PURE__*/React.createElement(Tag, null, "in progress")));
}

/* ---- the one fully-written sample essay ---- */
function VllmPost() {
  const {
    Callout
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    className: "post-body",
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("p", null, "A single A100 running a 7B model with naive autoregressive decoding serves a handful of concurrent requests before it falls over. The same GPU, running ", /*#__PURE__*/React.createElement("b", null, "vLLM"), ", serves an order of magnitude more \u2014 at lower latency. Almost none of that gain comes from a faster matmul. It comes from ", /*#__PURE__*/React.createElement("i", null, "how memory is managed"), "."), /*#__PURE__*/React.createElement("p", null, "This post walks through the three ideas that make that true: paged attention, the block manager, and continuous batching. None of them are exotic; together they change what a single GPU can do."), /*#__PURE__*/React.createElement("h2", null, "The problem is the KV cache, not the weights"), /*#__PURE__*/React.createElement("p", null, "During generation, every token attends to every token before it. To avoid recomputing those keys and values at each step, we cache them \u2014 the ", /*#__PURE__*/React.createElement("b", null, "KV cache"), ". For a long context and a large batch, this cache dwarfs the model weights. It is also the thing that grows, unpredictably, as each sequence decodes to a different length."), /*#__PURE__*/React.createElement("p", null, "Classic serving stacks pre-allocate a contiguous block per sequence sized to the maximum length. That wastes most of it. A request that stops at 60 tokens still holds memory for 2,048. Internal fragmentation alone can leave more than half the cache unusable."), /*#__PURE__*/React.createElement(Callout, {
    label: "the key insight"
  }, "Treat the KV cache like virtual memory. Pages, not contiguous arrays. The model never sees a sequence's memory as fragmented \u2014 a lookup table hides the indirection."), /*#__PURE__*/React.createElement("h2", null, "PagedAttention"), /*#__PURE__*/React.createElement("p", null, "PagedAttention borrows the operating-system trick directly. The cache is carved into fixed-size ", /*#__PURE__*/React.createElement("b", null, "blocks"), " \u2014 say 16 tokens each. A sequence's logical tokens map to physical blocks through a per-sequence block table. Blocks need not be contiguous; they need not even be in order. The attention kernel is taught to gather across them."), /*#__PURE__*/React.createElement(Figure, {
    label: "figure 1",
    caption: "A sequence's logical KV positions (top) map through a block table to non-contiguous physical blocks (bottom). Allocation happens one block at a time, on demand.",
    ratio: "16 / 8"
  }), /*#__PURE__*/React.createElement("p", null, "The payoff is twofold. Memory is allocated lazily, one block at a time, so a short generation never reserves space it won't use \u2014 fragmentation drops to under a block per sequence. And because blocks are just handles, two sequences that share a prefix can share the ", /*#__PURE__*/React.createElement("i", null, "same physical blocks"), " until they diverge. That is how prompt caching and parallel sampling become nearly free."), /*#__PURE__*/React.createElement("h2", null, "The block manager"), /*#__PURE__*/React.createElement("p", null, "Someone has to hand out and reclaim those blocks. The ", /*#__PURE__*/React.createElement("b", null, "block manager"), " is a small allocator: a free list of physical blocks, the per-sequence block tables, and reference counts so shared blocks are only freed when the last owner is done. Copy-on-write handles the moment two shared sequences finally diverge \u2014 the shared block is duplicated, each owner gets its own copy, and decoding continues."), /*#__PURE__*/React.createElement("p", null, "When the GPU runs out of blocks under load, the manager can ", /*#__PURE__*/React.createElement("b", null, "preempt"), ": evict a sequence's blocks (recompute or swap them to host memory) and resume it later. The scheduler decides who gets evicted. This is what lets the server accept more requests than fit at once without crashing."), /*#__PURE__*/React.createElement("h2", null, "Continuous batching"), /*#__PURE__*/React.createElement("p", null, "Static batching waits for a batch to fill, runs all sequences to completion, then starts the next. The slowest sequence holds everyone hostage and the GPU idles on padding. ", /*#__PURE__*/React.createElement("b", null, "Continuous batching"), " instead schedules at the granularity of a single decode step: finished sequences leave the batch immediately and waiting requests join on the very next iteration."), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    label: "why it compounds"
  }, "Paged memory makes a sequence cheap to add or drop mid-flight. Continuous batching exploits that to keep the GPU saturated. Neither works nearly as well without the other."), /*#__PURE__*/React.createElement("p", null, "The scheduler runs a simple loop: admit as many waiting requests as there are free blocks for, run one decode step across the whole live batch, retire anything that hit a stop token, and preempt if memory gets tight. Throughput stops being limited by the unlucky long sequence and starts tracking the GPU's actual compute."), /*#__PURE__*/React.createElement("h2", null, "What this means in practice"), /*#__PURE__*/React.createElement("p", null, "When you profile a vLLM deployment, the levers that matter are the ones these mechanisms expose: block size (granularity vs. overhead), the fraction of GPU memory handed to the cache, and how aggressively the scheduler admits and preempts. Quantizing the weights buys you headroom; quantizing the KV cache \u2014 the work in ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "TripleQuant"), " \u2014 buys you more of the resource that was actually scarce all along."), /*#__PURE__*/React.createElement("p", null, "That is the whole trick. Not a faster kernel \u2014 a better accountant."), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--hairline)',
      margin: '44px 0 28px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--ink-faint)'
    }
  }, "Building a from-scratch version of this \u2014 block manager, scheduler, speculative decoding \u2014 as Inferno-Core. Notes in the Work in Progress tab."));
}
function Blog() {
  const [slug, setSlug] = React.useState(null);
  React.useEffect(() => {
    window.scrollTo && window.scrollTo(0, 0);
  }, [slug]);
  if (slug) return /*#__PURE__*/React.createElement(BlogPost, {
    slug: slug,
    onBack: () => setSlug(null)
  });
  return /*#__PURE__*/React.createElement(BlogIndex, {
    onOpen: setSlug
  });
}
Object.assign(window, {
  Blog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
/* Projects — filterable repo grid. */

function Projects() {
  const {
    ProjectCard
  } = DS;
  const [filter, setFilter] = React.useState('all');
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat.includes(filter));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 0 64px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: '64ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "// 03 \u2014 repos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px, 5vw, 52px)',
      fontWeight: 300,
      letterSpacing: '-0.025em',
      marginTop: 16,
      lineHeight: 1.04
    }
  }, "Selected work."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: 18
    }
  }, PROJECTS.length, " repositories \u2014 multi-agent supply-chain security, quantization, GRPO RL loops, sparse MoE from scratch, and hackathon wins.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      margin: '32px 0 36px',
      paddingBottom: 24,
      borderBottom: '1px solid var(--hairline)'
    }
  }, PROJECT_FILTERS.map(f => {
    const active = f === filter;
    return /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        appearance: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.02em',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (active ? 'var(--ink)' : 'var(--hairline-strong)'),
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? 'var(--paper)' : 'var(--ink-muted)',
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, f);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
      gap: 16
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    badge: p.badge,
    badgeTone: p.badgeTone,
    icon: p.icon,
    title: p.title,
    blurb: p.blurb,
    tags: p.tags,
    links: p.links,
    repo: p.repo
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 28,
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(DS.ArrowLink, {
    href: PROFILE.github,
    tone: "ink"
  }, "see all repositories on github")));
}
Object.assign(window, {
  Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkInProgress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Work in Progress — the 5-month master plan, as an editorial roadmap. */

function WorkInProgress() {
  const {
    PlanRepo,
    Callout,
    Tag
  } = DS;
  const P = PLAN;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 0 64px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: '66ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "// the plan"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-faint)',
      border: '1px solid var(--hairline)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-xs)'
    }
  }, P.version, " \xB7 ", P.window)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px, 5vw, 52px)',
      fontWeight: 300,
      letterSpacing: '-0.025em',
      lineHeight: 1.04
    }
  }, "What I'm building next."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.62,
      color: 'var(--ink-muted)',
      marginTop: 20
    }
  }, "A live, public roadmap \u2014 not a wishlist. Six repositories, ranked by hiring impact, executed over five months. This is the working plan; it changes as experiments close.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    label: "north star"
  }, P.northStar)), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(DS.SectionDivider, {
    label: "priority stack",
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink-faint)',
      margin: '14px 0 8px'
    }
  }, "Ranked by impact. The top two are underway with live progress; the rest are scoped and queued \u2014 names out, details landing as each kicks off."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, P.stack.map(r => /*#__PURE__*/React.createElement(PlanRepo, _extends({
    key: r.rank
  }, r))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(DS.SectionDivider, {
    label: "the career asset \xB7 TripleQuant benchmark",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      maxWidth: '64ch',
      marginBottom: 22
    }
  }, P.benchmark.note), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, P.benchmark.cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: i === 0 ? 'left' : 'right',
      padding: '12px 16px',
      borderBottom: '1px solid var(--hairline-strong)',
      color: 'var(--ink-faint)',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      fontSize: 10.5,
      whiteSpace: 'nowrap',
      background: 'var(--paper-raised)'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, P.benchmark.rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      textAlign: ci === 0 ? 'left' : 'right',
      padding: '11px 16px',
      borderBottom: ri < P.benchmark.rows.length - 1 ? '1px solid var(--hairline)' : 'none',
      color: ci === 0 ? 'var(--ink)' : 'var(--ink-faint)',
      fontWeight: ci === 0 ? 600 : 400,
      whiteSpace: 'nowrap',
      background: ri === 0 ? 'var(--clay-wash)' : 'transparent'
    }
  }, cell)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(DS.SectionDivider, {
    label: "IssueFix-RL \xB7 the controlled experiment",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      maxWidth: '64ch'
    }
  }, "Same model, same dataset, same reward \u2014 only the algorithm changes. A genuine controlled comparison across five post-training methods on GitHub issue resolution."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      margin: '22px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-ghost)'
    }
  }, "reward = "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#E08A6C'
    }
  }, "0.6\xB7test_pass"), " + 0.1\xB7syntax + 0.1\xB7lint + 0.1\xB7compile + 0.1\xB7minimal_patch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: 12
    }
  }, P.methods.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--clay)'
    }
  }, m.m), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ink-muted)',
      marginTop: 8
    }
  }, m.watch))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(DS.SectionDivider, {
    label: "month-by-month",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, P.months.map((mo, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: 28,
      padding: '24px 0',
      borderBottom: i < P.months.length - 1 ? '1px solid var(--hairline)' : 'none'
    },
    className: "month-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--ink)'
    }
  }, mo.m), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--ink-faint)',
      marginTop: 4
    }
  }, mo.when)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 12
    }
  }, mo.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, mo.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--ink-muted)',
      paddingLeft: 18,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      color: 'var(--clay)'
    }
  }, "\u25B8"), it)))))))));
}
Object.assign(window, {
  WorkInProgress
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkInProgress.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app.jsx
try { (() => {
/* App shell — top nav, tab routing, contact footer. */

const TABS = [{
  value: 'about',
  label: 'about'
}, {
  value: 'blog',
  label: 'blog'
}, {
  value: 'wip',
  label: 'work in progress'
}, {
  value: 'projects',
  label: 'projects'
}];
function Nav({
  tab,
  setTab
}) {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(251,249,244,0.86)',
      backdropFilter: 'saturate(140%) blur(10px)',
      WebkitBackdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      height: 'var(--nav-height)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab('about'),
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--clay)'
    }
  }, "~/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      fontWeight: 300,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, "ram ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "prasath"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 2,
      marginLeft: 18
    },
    className: "nav-tabs"
  }, TABS.map(t => {
    const active = t.value === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => setTab(t.value),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--ink)' : 'var(--ink-faint)',
        padding: '8px 12px',
        position: 'relative',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: -1,
        height: 2,
        background: 'var(--clay)',
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--ink-faint)'
    },
    className: "nav-status"
  }, "open to roles"), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "GitHub",
    title: "View code on GitHub",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      color: 'var(--ink)',
      border: '1px solid var(--hairline-strong)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--paper-raised)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 17
  })), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#",
    variant: "secondary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 13
    })
  }, "resume.pdf"))));
}
function Footer({
  innerRef
}) {
  return /*#__PURE__*/React.createElement("footer", {
    ref: innerRef,
    style: {
      borderTop: '1px solid var(--hairline)',
      background: 'var(--paper-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "// let's ship"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 4.6vw, 48px)',
      fontWeight: 300,
      letterSpacing: '-0.025em',
      marginTop: 18,
      lineHeight: 1.05,
      maxWidth: '16ch'
    }
  }, "Open to inference, agentic AI & MLOps roles."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-muted)',
      marginTop: 18,
      maxWidth: '50ch'
    }
  }, "Hit me up if you're shipping LLMs into production. Fast to reach, faster to ship."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 34,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + PROFILE.email,
    style: {
      color: 'var(--ink)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), " ", PROFILE.email), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.linkedin,
    style: {
      color: 'var(--ink)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 15
  }), " linkedin"), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    style: {
      color: 'var(--ink)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 15
  }), " github")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--ink-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD ", PROFILE.location, " \xB7 ", PROFILE.phone), /*#__PURE__*/React.createElement("span", null, "\xA9 Ram Prasath K \xB7 ", new Date().getFullYear()))));
}
function App() {
  const [tab, setTab] = React.useState('about');
  const footerRef = React.useRef(null);
  const topRef = React.useRef(null);
  const nav = dest => {
    if (dest === 'contact') {
      if (footerRef.current) window.scrollTo({
        top: footerRef.current.offsetTop - 40,
        behavior: 'smooth'
      });
      return;
    }
    setTab(dest);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: topRef
  }, /*#__PURE__*/React.createElement(Nav, {
    tab: tab,
    setTab: t => {
      setTab(t);
      window.scrollTo({
        top: 0
      });
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '0 32px',
      minHeight: '60vh'
    }
  }, tab === 'about' && /*#__PURE__*/React.createElement(About, {
    onNav: nav
  }), tab === 'blog' && /*#__PURE__*/React.createElement(Blog, null), tab === 'wip' && /*#__PURE__*/React.createElement(WorkInProgress, null), tab === 'projects' && /*#__PURE__*/React.createElement(Projects, null)), /*#__PURE__*/React.createElement(Footer, {
    innerRef: footerRef
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/blogdata.jsx
try { (() => {
/* Blog index + featured post content + 5-month plan data. text/babel. */

const POSTS = [{
  slug: 'vllm-internals',
  topic: 'Inference',
  title: 'How vLLM works internally — a deep dive',
  dek: 'PagedAttention, continuous batching, and the block manager, from first principles — and why they let one GPU serve far more requests than naive decoding.',
  date: 'Jun 2026',
  readingTime: '12 min read',
  featured: true
}, {
  slug: 'triplequant',
  topic: 'Quantization',
  title: 'TripleQuant: benchmarking Qwen2.5-VL across three quant backends',
  dek: 'A single controlled table comparing llmcompressor, modelopt, and torchAO on prefill latency, decode TPS, VRAM, and OCR accuracy — the comparison that did not exist.',
  date: 'May 2026',
  readingTime: '9 min read'
}, {
  slug: 'issuefix-rl',
  topic: 'Post-training',
  title: 'IssueFix-RL: SFT vs DPO vs PPO vs GRPO vs DR-GRPO on real GitHub issues',
  dek: 'Same model, same data, same reward — only the algorithm changes. What KL divergence and entropy actually tell you about policy stability.',
  date: 'Apr 2026',
  readingTime: '14 min read'
}, {
  slug: 'mini-vllm',
  topic: 'Systems',
  title: 'A mini-vLLM from scratch: block manager, scheduler, speculative decoding',
  dek: 'Building Inferno-Core — the smallest serving engine that still does the things that matter: paged KV, continuous batching, prefix caching, and a draft model.',
  date: 'Mar 2026',
  readingTime: '11 min read'
}, {
  slug: 'attention-kernels',
  topic: 'Kernels',
  title: 'Writing attention kernels: PyTorch → Triton → TileLang → CUDA',
  dek: 'One attention variant, four implementations, one performance table. Where each abstraction earns its keep and where it stops paying off.',
  date: 'Feb 2026',
  readingTime: '13 min read'
}];

/* ---- 5-Month Master Plan (Work in Progress) ---- */
const PLAN = {
  version: 'v5',
  window: 'Jun – Oct 2026',
  northStar: 'Land a Research Engineer / AI Systems / LLM Inference role at 30–50 LPA+ (or international equivalent) by Month 5. Two flagship assets drive this: TripleQuant-VLM — the most comprehensive Qwen2.5-VL quantization benchmark published — and IssueFix-RL, a rigorous RLHF comparison that opens research-lab doors inference work alone cannot.',
  stack: [{
    rank: 1,
    name: 'TripleQuant-VLM',
    status: 'flagship',
    timeline: 'Month 1–2',
    progress: 45,
    repo: 'https://github.com/ramprasathk07/TripleQuant-VLM',
    signal: '3-backend quant benchmark (AWQ, TurboQuant KV, Triton attention) on Qwen2.5-VL — the inference-depth flagship. v0.1 baseline + W4A16 table already shipping.',
    domains: ['quantization', 'inference', 'vllm', 'vlm']
  }, {
    rank: 2,
    name: 'IssueFix-RL',
    status: 'research',
    timeline: 'Month 3–4',
    progress: 20,
    repo: 'https://github.com/ramprasathk07/IssueFix-RL',
    signal: 'Controlled RLHF comparison — SFT vs DPO vs PPO vs GRPO vs DR-GRPO on real GitHub issues. SFT stage underway; reward harness scaffolded.',
    domains: ['rlhf', 'post-training', 'grpo', 'lora']
  }, {
    rank: 3,
    name: 'Inferno-Core',
    status: 'planned',
    timeline: 'Month 2–3',
    blurred: true,
    signal: 'Mini-vLLM from scratch: block manager, FCFS scheduler, continuous batching, prefix caching, speculative decoding.',
    domains: ['inference', 'systems', 'serving']
  }, {
    rank: 4,
    name: 'XFinite-OCR',
    status: 'planned',
    timeline: 'Month 1',
    blurred: true,
    repo: 'https://github.com/ramprasathk07/XF-ocr.github.io',
    signal: 'Production VLM serving — Cloudflare Tunnel, Redis, Prometheus. Deployed, observable, OpenAI-compatible.',
    domains: ['mlops', 'serving', 'vlm']
  }, {
    rank: 5,
    name: 'Attention Systems Lab',
    status: 'planned',
    timeline: 'Month 3–5',
    blurred: true,
    signal: 'PyTorch → Triton → TileLang → CUDA. MHA, GQA, Mamba, DeltaNet — one variant, four implementations, one table.',
    domains: ['kernels', 'cuda', 'triton']
  }, {
    rank: 6,
    name: 'Tiny Foundation Lab',
    status: 'planned',
    timeline: 'Month 5',
    blurred: true,
    signal: 'Transformer vs Mamba vs RWKV vs Liquid NN from scratch on TinyStories — architecture breadth.',
    domains: ['architecture', 'pretraining']
  }],
  months: [{
    m: 'Month 1',
    when: 'Jun 2026',
    title: 'Foundation + close TripleQuant v0.1',
    items: ['FP16 baseline smoke run + W&B wiring', 'W4A16 / W8A8 / W8A16 comparison table', 'Qwen2.5-VL OCR run with CER/WER — the differentiator', 'Tag v0.1, XFinite production polish, publish Blog 1']
  }, {
    m: 'Month 2',
    when: 'Jul 2026',
    title: 'TripleQuant full stack',
    items: ['modelopt FP8 / NVFP4 + TRT-LLM .engine export', 'torchAO int4 + double quant + autoquant', 'vLLM vs TRT-LLM throughput comparison', 'TurboQuant KV cache Python reference']
  }, {
    m: 'Month 3',
    when: 'Aug 2026',
    title: 'Inferno-Core + start IssueFix-RL',
    items: ['Block manager, FCFS scheduler, continuous batching', 'Prefix caching → LMCache benchmark arc', 'IssueFix-RL: SFT stage on HumanEvalFix / MBPP', 'One vLLM / SGLang OSS PR']
  }, {
    m: 'Month 4',
    when: 'Sep 2026',
    title: 'IssueFix-RL comparison matrix',
    items: ['DPO preference pairs, then PPO / GRPO / DR-GRPO', 'Execution-based composite reward + ablations', 'SWE-Bench-Lite holdout-repo evaluation', 'KL divergence + entropy analysis writeup']
  }, {
    m: 'Month 5',
    when: 'Oct 2026',
    title: 'Depth + breadth + close',
    items: ['Attention Systems Lab kernel progression', 'Tiny Foundation Models from scratch on TinyStories', 'Portfolio + blog consolidation', 'Targeted applications round']
  }],
  benchmark: {
    note: 'The career asset. This table does not exist anywhere for Qwen2.5-VL — publishing it, even partially filled, is the report that gets noticed.',
    cols: ['Config', 'Decode TPS', 'VRAM GB', 'CER Δ vs FP16', 'Serving'],
    rows: [['FP16 baseline', '—', '—', 'baseline', 'vLLM'], ['llmcompressor W4A16', '·', '·', '·', 'vLLM'], ['llmcompressor W8A8', '·', '·', '·', 'vLLM'], ['modelopt FP8', '·', '·', '·', 'vLLM'], ['modelopt NVFP4', '·', '·', '·', 'vLLM'], ['modelopt → TRT-LLM', '·', '·', '·', 'TRT-LLM'], ['torchAO int4wo', '·', '·', '·', 'torch.compile'], ['W4A16 + TurboQuant KV', '·', '·', '·', 'vLLM']]
  },
  reward: 'reward = 0.6·test_pass + 0.1·syntax + 0.1·lint + 0.1·compile + 0.1·minimal_patch',
  methods: [{
    m: 'SFT',
    watch: 'Baseline pass rate; training loss'
  }, {
    m: 'DPO',
    watch: 'Policy shift vs SFT; reward margin'
  }, {
    m: 'PPO',
    watch: 'Clip fraction; KL trajectory; advantage variance'
  }, {
    m: 'GRPO',
    watch: 'Group reward variance; KL; entropy'
  }, {
    m: 'DR-GRPO',
    watch: 'Reward stability vs GRPO; policy-collapse risk'
  }]
};
Object.assign(window, {
  POSTS,
  PLAN
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/blogdata.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/util.jsx
try { (() => {
/* Shared helpers + data for the portfolio UI kit.
   Loaded as text/babel; attaches everything to window. */

const DS = window.RamPrasathPortfolioDesignSystem_321ff2;

/* ---- Lucide icon wrapper (line icons, currentColor, 1em) ---- */
function Icon({
  name,
  size = 16,
  stroke = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      try {
        window.lucide.createIcons({
          attrs: {
            'stroke-width': stroke
          },
          root: ref.current
        });
      } catch (e) {}
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: 'currentColor',
      ...style
    },
    className: "lucide-host"
  });
}

/* ---- Figure placeholder (editorial research-paper style) ---- */
function Figure({
  caption,
  label = 'figure',
  ratio = '16 / 9',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '36px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--paper-raised)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 11px, rgba(27,26,22,0.025) 11px, rgba(27,26,22,0.025) 12px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-ghost)'
    }
  }, label)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-faint)',
      marginTop: 12,
      lineHeight: 1.5,
      textAlign: 'center'
    }
  }, caption));
}

/* ============================ DATA ============================ */

const PROFILE = {
  name: 'Ram Prasath K',
  role: 'ML Engineer',
  location: 'Pune, India',
  email: 'ramk612000@gmail.com',
  phone: '(+91) 9943933752',
  github: 'https://github.com/ramprasathk07',
  linkedin: 'https://www.linkedin.com/in/ramprasathk07/',
  status: 'currently @ Ubisoft India · open to inference / agentic AI roles',
  headline: 'Building LLMs at the metal.',
  tagline: 'ML Engineer with 2+ years shipping production LLM/VLM inference, multi-agent systems, and edge AI. Quantization on RTX 4090 / MI300X, ReAct + MCP orchestration, and diffusion-transformer Vision-Action models for autonomous gameplay agents.',
  ramjson: {
    role: 'ML Engineer',
    focus: ['LLM', 'VLM', 'agents'],
    gpus: ['4090', 'Pro 6000', 'MI300X'],
    quant: 'W4A16 | W8A8 | AWQ',
    tuning: 'SFT|LoRA|QLoRA|DPO|GRPO',
    status: 'shipping'
  }
};
const STATS = [{
  value: '2+',
  label: 'years in production AI'
}, {
  value: '#1',
  label: "Mistral AI Hackathon '26",
  accent: true
}, {
  value: '85%',
  label: 'Nemotron Nano reasoning'
}];
const PROFILE_PROSE = ['I work on the serving and fine-tuning layer of modern LLMs — vLLM with W8A8 and W4A16 quantization, multi-agent orchestration on Google ADK + MCP, and inference profiling for tokens/sec, TTFT, and cost-per-request under tight GPU budgets.', 'At Ubisoft India I build diffusion-transformer Vision-Action models for autonomous gameplay agents. Before that at Ninestars I shipped a Qwen-VL based OCR pipeline (Seq2Seq correction, NER) and a multi-agent platform with ReAct, self-reflection, and hierarchical delegation. At Bosch I owned a ResNet-SE voice biometrics system end-to-end onto NXP edge silicon.', 'I won #1 at the Mistral AI Worldwide Hackathon 2026 with Mistral Raid — an LLM-driven dungeon crawler boss that adapts to your voice. I am an IEEE-published author and hold a patent in voice-driven AI.'];
const EXPERIENCE = [{
  role: 'Jr. R&D Engineer',
  org: 'Ubisoft India Studios',
  summary: 'Game AI & QC — Vision-Action models for autonomous agents',
  dates: 'Oct 2025 — present',
  bullets: ['Building EagleEye Snap, a geometry-driven clipping detector analyzing mesh and triangle-level intersections across 3D game assets; fine-tuning Qwen-VL to classify intentional vs. unintentional clipping.', 'Built Changelist Reader, an internal RAG system over Anvil/Perforce history for natural-language regression tracing — adding hybrid retrieval + reranking + LLM query rewriting.', 'Sole engineer to build and diagnose the NVIDIA NitroGen (VLA / Gr00t-N1-class) fine-tuning pipeline for Ubisoft game environments.'],
  tags: ['PyTorch', 'Diffusion Transformers', 'Vision-Action', 'C++', 'C#', 'Anvil', 'P4V']
}, {
  role: 'Data Science Engineer',
  org: 'Ninestars Information Technologies',
  summary: 'R&D — production AI: OCR, document intelligence, multi-agent automation',
  dates: 'Jul 2024 — Sep 2025',
  bullets: ['Optimized VLM inference via vLLM + W8A8 / W4A16 quantization on RTX 4090; profiled tokens/sec, TTFT, and throughput under tight GPU memory.', 'Built end-to-end OCR/IE pipelines on Qwen-VL / Qwen2.5-VL + a custom Seq2Seq corrector — −20% manual review, +15% NER precision.', 'Architected a multi-agent platform on Google ADK + MCP (GPT-OSS-20B, Ollama, vLLM) with ReAct, self-reflection, hierarchical delegation, and W&B observability.'],
  tags: ['vLLM', 'Google ADK', 'MCP', 'GPT-OSS-20B', 'Qwen-VL', 'YOLO', 'RT-DETR', 'AWS', 'W&B']
}, {
  role: 'AI/ML Research Engineer (Intern)',
  org: 'Bosch Global Software Technologies',
  summary: 'HMI — 11-month research → NXP edge deployment',
  dates: 'Aug 2023 — Jul 2024',
  bullets: ['Built a ResNet-SE automotive voice authentication system with anti-spoofing — 95% accuracy, 4% EER under real-world noise.', 'Trained multilingual speech models on VoxCeleb / IndicSuperb; exported via ONNX / TFLite for NXP edge hardware.', 'Collaborated with HMI + embedded teams to scope latency/memory budgets and ship validated models on-target.'],
  tags: ['PyTorch', 'Torchaudio', 'ResNet-SE', 'ONNX', 'TFLite', 'NXP Edge']
}];
const STACK = [{
  group: 'Languages',
  items: ['Python', 'C++', 'C#', 'SQL']
}, {
  group: 'ML Serving',
  items: ['vLLM', 'FastAPI', 'Flask', 'Docker', 'AWS', 'MCP Servers', 'OpenAI-compat APIs']
}, {
  group: 'Agentic Systems',
  items: ['Google ADK', 'MCP', 'ReAct', 'Self-Reflection', 'Hierarchical Delegation', 'RAG']
}, {
  group: 'Model Optimization',
  items: ['W8A8', 'W4A16', 'AWQ', 'ONNX', 'TFLite', 'Distillation', 'QAT']
}, {
  group: 'Fine-tuning',
  items: ['PyTorch', 'HF Transformers', 'SFT', 'LoRA', 'QLoRA', 'DPO', 'GRPO', 'FSDP']
}, {
  group: 'Eval & Observability',
  items: ['tokens/sec', 'TTFT', 'cost/req', 'W&B', 'LLM-as-judge', 'Langfuse']
}, {
  group: 'Data & Storage',
  items: ['PostgreSQL', 'pgvector', 'Neo4j', 'Qdrant']
}, {
  group: 'GPUs / Hardware',
  items: ['RTX 4090', 'RTX Pro 6000', 'AMD MI300X', 'NXP Edge']
}];
const ACHIEVEMENTS = [{
  kicker: 'WINNER · #1',
  title: 'Mistral AI Worldwide Hackathon 2026',
  body: 'Online track — Mistral Raid: an AI dungeon crawler with adaptive LLM bosses, Voxtral STT, and real-time combat telemetry.'
}, {
  kicker: 'AMD × UNSLOTH × PYTORCH',
  title: 'Synthetic Data AI Agents Challenge',
  body: 'Fine-tuned QA agents with Synthetic-Data-Kit on AMD Instinct MI300X — SFT, LoRA, QLoRA, DPO on next-gen GPU.'
}, {
  kicker: 'NVIDIA · KAGGLE',
  title: 'Nemotron Reasoning Challenge',
  body: 'Improved Nemotron-3-Nano reasoning to 85% — synthetic data curation, SFT + LoRA + GRPO on RTX Pro 6000.'
}];
const RESEARCH = [{
  title: 'Appearance-Trajectory Network for Video Anomaly Detection',
  venue: 'ICCCNT 2024 · IEEE · IIT Mandi',
  body: 'Memory-augmented CNN for unsupervised video surveillance — 82% AUC (appearance), 84.9% AUC (skeleton), with integrated video captioning.'
}, {
  title: 'Simultaneous Voice Auth + Intent/Entity Classification',
  venue: 'Patent No. 202441102999 · filed Dec 2024',
  body: 'Voice authentication combined with real-time intent + entity classification for secure, context-aware decision automation.'
}];
const EDUCATION = [{
  school: 'IIT Madras',
  degree: 'BSc Data Science & Applications (Online)',
  when: 'Dec 2024'
}, {
  school: 'Amrita Vishwa Vidyapeetham',
  degree: 'M.Tech Data Science · School of AI · CGPA 8.5/10',
  when: 'Jun 2024'
}, {
  school: 'SASTRA Deemed University',
  degree: 'B.Tech Mechanical Engineering',
  when: 'Jun 2022'
}];
const GH = 'https://github.com/ramprasathk07/';
const PROJECTS = [{
  cat: ['featured', 'agents', 'security'],
  badge: '★ NEW · FLAGSHIP',
  badgeTone: 'solid',
  icon: '🛡️',
  title: 'Sentinel-AI',
  blurb: 'Autonomous multi-agent supply-chain security for every Pull Request — running 100% on your own infrastructure. Eight specialized agents work as a coordinated immune system across Detect → Validate → Patch.',
  tags: ['Google ADK', 'A2A', 'Ollama', 'vLLM', 'Multi-Agent'],
  repo: GH + 'Sentinel-AI-Prod'
}, {
  cat: ['featured', 'hackathon', 'agents'],
  badge: '🏆 WINNER · #1',
  badgeTone: 'accent',
  icon: '⚔️',
  title: 'Mistral Raid',
  blurb: 'Dungeon crawler where the boss runs on Mistral AI. Four models powering four agents; Voxtral transcribes your voice and the boss generates personalized taunts + attack mechanics, voiced by ElevenLabs.',
  tags: ['Mistral LLM ×4', 'Voxtral STT', 'ElevenLabs', 'Phaser 3'],
  links: [{
    label: 'live demo',
    href: GH + 'mistral-raid'
  }],
  repo: GH + 'mistral-raid'
}, {
  cat: ['featured', 'quantization', 'llm'],
  badge: 'AWQ + KV cache',
  badgeTone: 'cobalt',
  title: 'TripleQuant-VLM',
  blurb: 'AWQ weight quantization + TurboQuant KV cache + Triton attention for Qwen2.5-VL. vLLM serving, CER/WER OCR eval, and test-time training (TTT) adaptation.',
  tags: ['AWQ', 'TurboQuant KV', 'Triton', 'vLLM', 'Qwen2.5-VL'],
  repo: GH + 'TripleQuant-VLM'
}, {
  cat: ['featured', 'agents', 'rag'],
  badge: '★ NEW · private RAG',
  badgeTone: 'accent',
  icon: '📚',
  title: 'LEANN',
  blurb: 'RAG on everything — 97% storage savings while running a fast, accurate, 100% private RAG application on your personal device. No data leaves the machine.',
  tags: ['RAG', 'On-device', 'Vector Index', 'Privacy'],
  repo: GH + 'LEANN'
}, {
  cat: ['agents', 'hackathon'],
  badge: "Meta OpenEnv Hackathon '26",
  badgeTone: 'neutral',
  icon: '🦅',
  title: 'PatchHawk',
  blurb: 'Autonomous DevSecOps agent driven by GRPO. The reward is tied directly to patch success inside a real Docker execution sandbox — closing detection → validation → remediation through grounded RL.',
  tags: ['GRPO', 'OpenEnv', 'Docker Sandbox', 'RL', 'W&B'],
  repo: GH + 'PatchHawk'
}, {
  cat: ['llm', 'fine-tuning'],
  badge: 'from scratch · ~20B sparse',
  badgeTone: 'neutral',
  title: 'Differential Transformer MoE',
  blurb: '18–22B sparse MoE (~6B active/token) from scratch on AMD MI300X. 48 layers, 64 routed + 2 shared experts, differential attention, MLA, YaRN RoPE to 8K, custom FP8 kernels.',
  tags: ['MoE', 'FP8', 'MI300X', 'MLA', 'YaRN', 'Custom Kernels'],
  repo: GH + 'Differential-MOE'
}, {
  cat: ['vision'],
  badge: 'unified trainer',
  badgeTone: 'neutral',
  title: 'simple_yolo_detr',
  blurb: 'Single-config, unified training + inference for the full YOLO (v3 → v11) and DETR family (DETR, Conditional, Deformable, DETA, RT-DETR, YOLOS). ONNX export, one dispatcher script.',
  tags: ['YOLO v3-v11', 'DETR', 'RT-DETR', 'DETA', 'ONNX'],
  repo: GH + 'simple_yolo_detr'
}, {
  cat: ['fine-tuning', 'hackathon'],
  badge: 'Kaggle · NVIDIA',
  badgeTone: 'neutral',
  title: 'Nemotron Reasoning',
  blurb: 'Fine-tuning Nemotron-3-Nano-30B on ~7.5k logic/math/bit-manipulation puzzles via Unsloth + SFT + LoRA (rank 32, RSLoRA). vLLM submission pipeline, auto-packaging.',
  tags: ['Nemotron 30B', 'Unsloth', 'LoRA', 'RSLoRA', 'vLLM'],
  repo: GH + 'Kaggle-Nemotron'
}, {
  cat: ['llm', 'quantization'],
  badge: 'production VLM',
  badgeTone: 'neutral',
  title: 'XFINITE-OCR',
  blurb: 'vLLM-powered VLM inference with an OpenAI-compatible API. Decoding-time inference controls for OCR robustness; profiling tokens/sec, TTFT, and throughput across batches and context lengths.',
  tags: ['vLLM', 'VLM', 'OpenAI API', 'Profiling'],
  repo: GH + 'XF-ocr.github.io'
}, {
  cat: ['fine-tuning', 'llm'],
  badge: 'SFT → GRPO',
  badgeTone: 'neutral',
  title: 'FineTuning-LLMs',
  blurb: 'Pipeline turning a plain base LLM into a reasoning model — SFT on curated chain-of-thought, then GRPO with curriculum rewards to unlock logic and problem-solving.',
  tags: ['SFT', 'GRPO', 'CoT', 'Reasoning'],
  repo: GH + 'FineTuning-LLMs'
}, {
  cat: ['llm'],
  badge: 'from scratch',
  badgeTone: 'neutral',
  title: 'Mini-LLaMa From Scratch',
  blurb: 'An LLM from scratch compared against LLaMa — RoPE, RMSNorm, grouped-query attention.',
  tags: ['PyTorch', 'LLaMa', 'RoPE', 'GQA'],
  repo: GH + 'Mini-LLaMa-From-Scratch'
}, {
  cat: ['quantization'],
  badge: 'GPU kernels',
  badgeTone: 'neutral',
  title: 'Triton Practice',
  blurb: 'Hands-on Triton kernels — matmul, fused attention, flash variants. GPU performance work.',
  tags: ['Triton', 'CUDA', 'FlashAttention'],
  repo: GH + 'Triton-practice'
}, {
  cat: ['agents'],
  badge: 'STT · TTS',
  badgeTone: 'neutral',
  title: 'LLM VoiceChat',
  blurb: 'An LLM chatbot wired with realtime STT + TTS for voice-driven conversation.',
  tags: ['LLM', 'STT', 'TTS', 'Python'],
  repo: GH + 'LLM_voicechat'
}, {
  cat: ['llm'],
  badge: '16MB challenge',
  badgeTone: 'neutral',
  title: 'Parameter Golf',
  blurb: 'The smallest LM that fits in 16MB. Minimize L(N) under a fixed sparse parameter budget — every parameter justified by validation density.',
  tags: ['Tiny LM', 'Efficiency'],
  repo: GH + 'parameter-golf'
}, {
  cat: ['vision'],
  badge: 'audio · speaker ID',
  badgeTone: 'neutral',
  title: 'ResNet-SE Fine-tune',
  blurb: 'Fine-tuning a ResNet-SE backbone in PyTorch for speaker recognition / voice biometric tasks.',
  tags: ['PyTorch', 'ResNet-SE', 'Speaker ID'],
  repo: GH + 'ResNet_SE'
}];
const PROJECT_FILTERS = ['all', 'featured', 'agents', 'security', 'rag', 'llm', 'quantization', 'fine-tuning', 'vision', 'hackathon'];
Object.assign(window, {
  DS,
  Icon,
  Figure,
  PROFILE,
  STATS,
  PROFILE_PROSE,
  EXPERIENCE,
  STACK,
  ACHIEVEMENTS,
  RESEARCH,
  EDUCATION,
  PROJECTS,
  PROJECT_FILTERS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/util.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.PlanRepo = __ds_scope.PlanRepo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.TimelineEntry = __ds_scope.TimelineEntry;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();
