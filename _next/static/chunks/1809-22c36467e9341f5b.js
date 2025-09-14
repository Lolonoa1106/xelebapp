(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1809],
  {
    47790: () => {},
    14805: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => l, R: () => i });
      var a = s(95155),
        r = s(5565);
      let i = (e) => {
          let {
            socialVerified: t,
            socialLinks: s = {},
            iconSize: i = 10,
            className: l = "",
            isMyAgent: n = !1,
          } = e;
          if (1 !== t)
            return n
              ? 2 === t
                ? (0, a.jsx)("span", {
                    className: "h-4 flex flex-row items-center gap-1",
                    children: (0, a.jsx)("span", {
                      className: "text-red-500",
                      children: "Admin Rejected",
                    }),
                  })
                : (0, a.jsx)("span", {
                    className: "h-4 flex flex-row items-center gap-1",
                    children: (0, a.jsx)("span", {
                      className: "text-yellow-500",
                      children: "Review Pending",
                    }),
                  })
              : (0, a.jsx)("span", { className: "h-4" });
          let o = [
            s.telegram
              ? { url: s.telegram, icon: "/images/telegram.svg" }
              : null,
            s.twitter ? { url: s.twitter, icon: "/images/twitter.png" } : null,
            s.website ? { url: s.website, icon: "/images/website.svg" } : null,
            s.discord ? { url: s.discord, icon: "/images/discord.svg" } : null,
            s.instagram
              ? { url: s.instagram, icon: "/images/instagram.svg" }
              : null,
          ].filter((e) => null !== e);
          return o.length
            ? (0, a.jsx)("span", {
                className: "flex flex-row gap-2 mt-1 ".concat(l),
                children: o.map((e, t) =>
                  (0, a.jsx)(
                    "a",
                    {
                      "aria-label": "Social link to ".concat(e.url),
                      className: "focus:outline-none",
                      href: e.url,
                      rel: "noopener noreferrer",
                      tabIndex: 0,
                      target: "_blank",
                      children: (0, a.jsx)("span", {
                        className:
                          "rounded-lg border border-white/10 flex items-center justify-center p-1 transition hover:border-[#7fffd4] ".concat(
                            l || ""
                          ),
                        children: (0, a.jsx)(r.default, {
                          alt: e.url,
                          height: i,
                          src: e.icon,
                          width: i,
                        }),
                      }),
                    },
                    t
                  )
                ),
              })
            : (0, a.jsx)("span", { className: "h-4" });
        },
        l = i;
    },
    18830: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var a = s(95155);
      s(12115);
      let r = "w-2 h-2 bg-white rounded-sm absolute z-10",
        i = (e) => {
          let { children: t, style: s, className: i } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative mt-5 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent border border-white/20 p-7 flex flex-col items-center gap-6 shadow-xl ".concat(
                i
              ),
            style: s,
            children: [
              (0, a.jsx)("div", { className: "".concat(r, " left-0 top-0 ") }),
              (0, a.jsx)("div", { className: "".concat(r, " right-0 top-0 ") }),
              (0, a.jsx)("div", {
                className: "".concat(r, " left-0 bottom-0 "),
              }),
              (0, a.jsx)("div", {
                className: "".concat(r, " right-0 bottom-0 "),
              }),
              t,
            ],
          });
        };
    },
    41913: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => D });
      var a = s(95155),
        r = s(21963),
        i = s(5565),
        l = s(12115),
        n = s(62338),
        o = s(69606),
        c = s(43415),
        d = s(18830),
        m = s(14805);
      let x = (e) => {
        let { previewImage: t, name: s, ticker: r, bio: i, socials: l } = e;
        return (0, a.jsxs)(d.A, {
          children: [
            (0, a.jsx)("div", {
              className:
                "w-36 h-36 rounded-xl overflow-hidden bg-[#23223A] flex items-center justify-center border border-white/30",
              children: t
                ? (0, a.jsx)("img", {
                    alt: "Preview",
                    className: "w-full h-full object-cover",
                    src: t,
                  })
                : (0, a.jsx)("span", {
                    className: "text-neutral-500 text-4xl",
                    children: "+",
                  }),
            }),
            (0, a.jsxs)("div", {
              className: "w-full flex flex-col  gap-1 text-center",
              children: [
                (0, a.jsx)("span", {
                  className:
                    "text-white font-bold text-xl truncate w-full text-center",
                  children: s || "AI Influencer Name",
                }),
                (0, a.jsx)("span", {
                  className: "text-[#98EC2D] font-semibold text-base",
                  children: r || "TICKER",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "w-full text-neutral-400 text-base text-center min-h-[48px] line-clamp-3",
              children:
                i ||
                "Brief description of your AI Influencer to introduce it to others.",
            }),
            (0, a.jsx)("div", {
              className: "w-full flex justify-center mt-1 text-center",
              children: (0, a.jsx)("div", {
                className: "mx-auto",
                children: (0, a.jsx)(m.R, {
                  className: "gap-3",
                  iconSize: 16,
                  socialLinks: l || {},
                  socialVerified: 1,
                }),
              }),
            }),
          ],
        });
      };
      var u = s(4637),
        h = s(38684),
        p = s(90908),
        f = s(93317);
      let g = (0, p.PA)((e) => {
          let {
            errors: t,
            previewImage: s,
            getRootProps: r,
            getInputProps: i,
            isDragActive: l,
            isEditMode: n,
          } = e;
          return (
            (0, p.iz)(() => ({})),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, a.jsx)("span", {
                      className: "opacity-70 text-xl",
                      children: "[ FILL THE INFO ]",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-white font-semibold text-base mt-5",
                      children: "AI Influencer Profile Picture",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full flex items-center bg-black/20 mt-[-10px] rounded-2xl p-6 gap-6 shadow-lg",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex-shrink-0",
                      children: (0, a.jsxs)("div", {
                        ...r(),
                        className:
                          "w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-white/20 bg-[#181A20] flex items-center justify-center cursor-pointer shadow-md ".concat(
                            l ? "border-blue-500 bg-[#1a1c24]" : ""
                          ),
                        children: [
                          (0, a.jsx)("input", { ...i() }),
                          s
                            ? (0, a.jsx)("img", {
                                alt: "Profile preview",
                                className: "w-full h-full object-cover",
                                src: s,
                              })
                            : (0, a.jsx)("span", {
                                className: "text-neutral-500 text-3xl",
                                children: "+",
                              }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex-1 flex flex-col justify-center",
                      children: [
                        (0, a.jsxs)("span", {
                          className: "text-xs text-neutral-400",
                          children: [
                            "Supported file types: Square images (JPG or PNG),",
                            (0, a.jsx)("br", {}),
                            "minimum 400\xd7400px, maximum size 5MB.",
                          ],
                        }),
                        t.profilePicture &&
                          (0, a.jsx)("span", {
                            className: "text-red-500 text-xs mt-1",
                            children: t.profilePicture.message,
                          }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden md:block h-16 w-px bg-white/10 mx-6",
                    }),
                    (0, a.jsx)("div", {
                      ...r(),
                      children: (0, a.jsx)(f.r, {
                        className: "px-4 font-light",
                        leftIcon: (0, a.jsx)(h.A, { size: 20 }),
                        type: "button",
                        variant: "upload",
                        onPress: () => {
                          var e;
                          return null ===
                            (e =
                              document.querySelector('input[type="file"]')) ||
                            void 0 === e
                            ? void 0
                            : e.click();
                        },
                        children: "Upload",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(u.y, {}),
              ],
            })
          );
        }),
        b = [
          { id: "helpful", label: "Helpful" },
          { id: "friendly", label: "Friendly" },
          { id: "patient", label: "Patient" },
          { id: "honest", label: "Honest" },
          { id: "creative", label: "Creative" },
          { id: "analytical", label: "Analytical" },
          { id: "efficient", label: "Efficient" },
          { id: "humorous", label: "Humorous" },
          { id: "precise", label: "Precise" },
          { id: "enthusiastic", label: "Enthusiastic" },
          { id: "empathetic", label: "Empathetic" },
          { id: "knowledgeable", label: "Knowledgeable" },
        ],
        v = [
          {
            id: "twitter",
            name: "Twitter",
            icon: "/images/twitter.png",
            description: "Connect your X/Twitter account",
            placeholder: "https://x.com/username",
            pattern: "^https://x\\.com/[a-zA-Z0-9_]+$",
          },
          {
            id: "telegram",
            name: "Telegram",
            icon: "/images/telegram.svg",
            description: "Connect to Telegram group/channel",
            placeholder: "https://t.me/yourgroup",
            label: "Group/Channel Link",
            pattern: "^https://t\\.me/[a-zA-Z0-9_]+$",
          },
          {
            id: "discord",
            name: "Discord",
            icon: "/images/discord.svg",
            description: "Connect your Discord server",
            placeholder: "https://discord.gg/invite",
            pattern: "^https://discord\\.gg/[a-zA-Z0-9]+$",
          },
          {
            id: "instagram",
            name: "Instagram",
            icon: "/images/instagram.svg",
            description: "Connect to Instagram",
            placeholder: "https://instagram.com/username",
            pattern: "^https://instagram\\.com/[a-zA-Z0-9_]+$",
          },
        ],
        j = {
          formalCasual: 50,
          seriousHumorous: 50,
          conciseDetailed: 50,
          neutralOpinionated: 50,
        };
      var w = s(89683);
      let N = (e) => {
        let { control: t, errors: s } = e;
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, a.jsxs)("label", {
              className: "text-white font-semibold gap-2 flex",
              children: [
                "Social Media",
                " ",
                (0, a.jsx)(r.R, {
                  classNames: { base: "bg-transparent border border-white/30" },
                  color: "default",
                  size: "sm",
                  variant: "flat",
                  children: "optional",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "flex flex-col gap-3",
              children: v.map((e) => {
                var r, l;
                return (0, a.jsxs)(
                  "div",
                  {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-6 h-6 bg-[#181A20] rounded-md flex items-center justify-center",
                            children: (0, a.jsx)(i.default, {
                              alt: e.name,
                              height: 15,
                              src: e.icon,
                              width: 15,
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "text-white text-sm font-semibold",
                            children: e.name,
                          }),
                          (0, a.jsx)("span", {
                            className: "text-xs text-neutral-400",
                            children: e.description,
                          }),
                        ],
                      }),
                      (0, a.jsx)(o.xI, {
                        control: t,
                        name: "socials.".concat(e.id),
                        render: (t) => {
                          var s;
                          let { field: r } = t;
                          return (0, a.jsx)(w.w, {
                            ...r,
                            classNames: {
                              input:
                                "bg-[#181A20] border-[#23223A] text-white placeholder:text-neutral-400",
                            },
                            placeholder: e.placeholder,
                            value:
                              null !== (s = r.value) && void 0 !== s ? s : "",
                          });
                        },
                      }),
                      (null === (r = s.socials) || void 0 === r
                        ? void 0
                        : r[e.id]) &&
                        (0, a.jsx)("span", {
                          className: "text-red-500 text-xs",
                          children:
                            null === (l = s.socials[e.id]) || void 0 === l
                              ? void 0
                              : l.message,
                        }),
                    ],
                  },
                  e.id
                );
              }),
            }),
          ],
        });
      };
      var y = s(85060),
        k = s(43500),
        A = s(20764);
      let C = c.z.object({
          profilePicture: c.z.string().min(1, "Profile picture is required"),
          bio: c.z
            .string()
            .min(1, "Bio is required")
            .min(5, "Bio must be at least 5 characters")
            .max(2e3, "Bio must be 2000 characters or less"),
          socials: c.z.object({
            twitter: c.z
              .string()
              .refine(
                (e) => !e || /^https:\/\/x\.com\/[a-zA-Z0-9_]+$/.test(e),
                "Invalid Twitter URL format"
              )
              .optional(),
            telegram: c.z
              .string()
              .refine(
                (e) => !e || /^https:\/\/t\.me\/[a-zA-Z0-9_]+$/.test(e),
                "Invalid Telegram URL format"
              )
              .optional(),
            discord: c.z
              .string()
              .refine(
                (e) => !e || /^https:\/\/discord\.gg\/[a-zA-Z0-9]+$/.test(e),
                "Invalid Discord URL format"
              )
              .optional(),
            website: c.z
              .string()
              .refine(
                (e) =>
                  !e ||
                  /^https:\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/.test(
                    e
                  ),
                "Invalid website URL format"
              )
              .optional(),
            instagram: c.z
              .string()
              .refine(
                (e) =>
                  !e || /^https:\/\/instagram\.com\/[a-zA-Z0-9_]+$/.test(e),
                "Invalid Instagram URL format"
              )
              .optional(),
          }),
          personalityTraits: c.z
            .array(c.z.string())
            .min(1, "Please select at least one personality trait")
            .max(5, "You can select up to 5 personality traits"),
          communicationStyle: c.z.object({
            formalCasual: c.z.number().min(0).max(100),
            seriousHumorous: c.z.number().min(0).max(100),
            conciseDetailed: c.z.number().min(0).max(100),
            neutralOpinionated: c.z.number().min(0).max(100),
          }),
          knowledgeBase: c.z.string(),
        }),
        T = (e, t, s, a) => {
          let [r, i] = (0, l.useState)(t.profilePicture || null),
            [n, d] = (0, l.useState)(t.topics || []),
            [m, x] = (0, l.useState)(t.personalityTraits || []),
            u = C.extend({
              tokenAddress: c.z
                .string()
                .refine(
                  (t) =>
                    e !== k.CREATE_AGENT_MODES.EXIST_TOKEN ||
                    A.Zv.utils.isAddress(t),
                  "Invalid token address"
                )
                .optional(),
              personalityTraits: c.z
                .array(c.z.string())
                .refine(
                  (t) =>
                    e === k.CREATE_AGENT_MODES.EXIST_TOKEN ||
                    (t.length >= 1 && t.length <= 5),
                  "Please select between 1 and 5 personality traits"
                ),
              communicationStyle: c.z
                .object({
                  formalCasual: c.z.number().min(0).max(100),
                  seriousHumorous: c.z.number().min(0).max(100),
                  conciseDetailed: c.z.number().min(0).max(100),
                  neutralOpinionated: c.z.number().min(0).max(100),
                })
                .refine((e) => (k.CREATE_AGENT_MODES.EXIST_TOKEN, !0)),
              knowledgeBase: c.z
                .string()
                .refine(
                  (t) => e === k.CREATE_AGENT_MODES.EXIST_TOKEN || !!t,
                  "Please select a knowledge base"
                ),
            }),
            {
              control: h,
              handleSubmit: p,
              formState: { errors: f },
              setValue: g,
              watch: b,
            } = (0, o.mN)({
              resolver: (0, y.u)(u),
              defaultValues: {
                profilePicture: t.profilePicture || "",
                bio: t.bio || "",
                socials: t.socials || {},
                personalityTraits: t.personalityTraits || [],
                communicationStyle: t.communicationStyle || j,
                knowledgeBase: t.knowledgeBase || "gpt-4o",
              },
            });
          return {
            previewImage: r,
            setPreviewImage: i,
            selectedTopics: n,
            setSelectedTopics: d,
            selectedTraits: m,
            setSelectedTraits: x,
            control: h,
            handleSubmit: p,
            errors: f,
            setValue: g,
            watch: b,
            onSubmit: (e) => {
              s && s("step3", e), a && a();
            },
          };
        };
      var E = s(47058);
      let I = (e) => {
        let { control: t } = e;
        return (0, a.jsx)("div", {
          className: "flex flex-col gap-3",
          children: [
            {
              labelLeft: "Formal",
              labelRight: "Casual",
              name: "communicationStyle.formalCasual",
            },
            {
              labelLeft: "Serious",
              labelRight: "Humorous",
              name: "communicationStyle.seriousHumorous",
            },
            {
              labelLeft: "Concise",
              labelRight: "Detailed",
              name: "communicationStyle.conciseDetailed",
            },
            {
              labelLeft: "Neutral",
              labelRight: "Opinionated",
              name: "communicationStyle.neutralOpinionated",
            },
          ].map((e) => {
            let { labelLeft: s, labelRight: r, name: i } = e;
            return (0, a.jsxs)(
              "div",
              {
                className:
                  "bg-[#404040] rounded-xl px-6 py-2 flex items-center shadow-lg",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-white w-20",
                    children: s,
                  }),
                  (0, a.jsx)(o.xI, {
                    control: t,
                    name: i,
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsx)(E.f, {
                        className: "flex-1 mx-4",
                        value: isNaN(t.value) ? 50 : t.value,
                        onChange: (e) => t.onChange(e),
                      });
                    },
                  }),
                  (0, a.jsx)("span", {
                    className: "text-white w-20 text-right",
                    children: r,
                  }),
                ],
              },
              i
            );
          }),
        });
      };
      var S = s(81572);
      let F = (e) => {
          let { selectedTraits: t, toggleTrait: s, error: r } = e;
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("label", {
                className: "text-white font-semibold",
                children: "Personality (Select up to 5)",
              }),
              (0, a.jsx)("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2",
                children: b.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)(S.A, {
                          classNames: { base: "border-[#23223A]" },
                          color: "success",
                          isSelected: t.includes(e.id),
                          onValueChange: () => s(e.id),
                        }),
                        (0, a.jsx)("span", {
                          className: "text-white cursor-pointer text-sm",
                          onClick: () => s(e.id),
                          children: (0, a.jsx)("p", {
                            className: t.includes(e.id) ? "text-success" : "",
                            children: e.label,
                          }),
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              r &&
                (0, a.jsx)("span", {
                  className: "text-red-500 text-xs mt-1",
                  children: r,
                }),
            ],
          });
        },
        P = (e) => {
          let { formData: t, mode: s } = e,
            r = [
              {
                id: "profilePicture",
                label: "AI Influencer Profile Picture",
                active: !!t.profilePicture,
              },
              { id: "bio", label: "AI Influencer Overview", active: !!t.bio },
              {
                id: "personalityTraits",
                label: "Personality",
                active:
                  Array.isArray(t.personalityTraits) &&
                  t.personalityTraits.length > 0,
              },
              {
                id: "communicationStyle",
                label: "Communication Style",
                active: !0,
              },
              {
                id: "knowledgeBase",
                label: "Knowledge base",
                active: !!t.knowledgeBase,
              },
            ];
          return (0, a.jsxs)("div", {
            className: "mt-6 rounded-2xl p-4",
            children: [
              (0, a.jsx)("div", {
                className: "text-white font-semibold mb-2",
                children: "Required fields",
              }),
              (0, a.jsx)("ul", {
                className:
                  "relative pl-6 text-xs text-neutral-400 space-y-4 before:absolute before:top-3 before:left-2 before:bottom-3 before:w-px before:bg-[#444]",
                children: r.map((e) =>
                  (0, a.jsxs)(
                    "li",
                    {
                      className: "relative flex items-center gap-2",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "absolute -left-[21px] w-3 h-3 rounded-full border-2 ".concat(
                              e.active
                                ? "bg-[white] border-[white]"
                                : "bg-[#232323] border-[#444]"
                            ),
                        }),
                        (0, a.jsx)("span", {
                          className: e.active
                            ? "text-white"
                            : "text-neutral-400",
                          children: e.label,
                        }),
                      ],
                    },
                    e.label
                  )
                ),
              }),
            ],
          });
        };
      var z = s(31539);
      c.z.object({
        profilePicture: c.z.string().min(1, "Profile picture is required"),
        bio: c.z
          .string()
          .min(1, "Bio is required")
          .min(5, "Bio must be at least 5 characters")
          .max(2e3, "Bio must be 2000 characters or less"),
        socials: c.z.object({
          twitter: c.z
            .string()
            .refine(
              (e) => !e || /^https:\/\/x\.com\/[a-zA-Z0-9_]+$/.test(e),
              "Invalid Twitter URL format"
            )
            .optional(),
          telegram: c.z
            .string()
            .refine(
              (e) => !e || /^https:\/\/t\.me\/[a-zA-Z0-9_]+$/.test(e),
              "Invalid Telegram URL format"
            )
            .optional(),
          discord: c.z
            .string()
            .refine(
              (e) => !e || /^https:\/\/discord\.gg\/[a-zA-Z0-9]+$/.test(e),
              "Invalid Discord URL format"
            )
            .optional(),
          website: c.z
            .string()
            .refine(
              (e) =>
                !e ||
                /^https:\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/.test(
                  e
                ),
              "Invalid website URL format"
            )
            .optional(),
          instagram: c.z
            .string()
            .refine(
              (e) => !e || /^https:\/\/instagram\.com\/[a-zA-Z0-9_]+$/.test(e),
              "Invalid Instagram URL format"
            )
            .optional(),
        }),
        personalityTraits: c.z
          .array(c.z.string())
          .min(1, "Please select at least one personality trait")
          .max(5, "You can select up to 5 personality traits"),
        communicationStyle: c.z.object({
          formalCasual: c.z.number().min(0).max(100),
          seriousHumorous: c.z.number().min(0).max(100),
          conciseDetailed: c.z.number().min(0).max(100),
          neutralOpinionated: c.z.number().min(0).max(100),
        }),
        knowledgeBase: c.z.string(),
      });
      let D = (e) => {
        var t, s;
        let {
            mode: c,
            onNextStep: d,
            onGoBack: m,
            step3FormValues: u = {},
            step2FormValues: h,
            updateFormValues: p,
            isEditMode: b,
          } = e,
          v = (0, l.useRef)(null),
          [j, y] = (0, l.useState)(!1),
          {
            previewImage: k,
            setPreviewImage: A,
            selectedTopics: C,
            setSelectedTopics: E,
            selectedTraits: S,
            setSelectedTraits: D,
            control: B,
            handleSubmit: R,
            errors: L,
            setValue: _,
            watch: O,
            onSubmit: V,
          } = T(c, u, p, d),
          q = (0, l.useCallback)(
            (e) => {
              let t = e[0];
              if (t) {
                let e = new FileReader();
                (e.onload = (e) => {
                  var s;
                  let a = new window.Image();
                  (a.onload = () => {
                    let e = document.createElement("canvas"),
                      s = e.getContext("2d");
                    (e.width = 400),
                      (e.height = 400),
                      null == s || s.drawImage(a, 0, 0, 400, 400);
                    let r = e.toDataURL(t.type);
                    A(r), _("profilePicture", r, { shouldValidate: !0 });
                  }),
                    (a.src =
                      null === (s = e.target) || void 0 === s
                        ? void 0
                        : s.result);
                }),
                  e.readAsDataURL(t);
              }
            },
            [_]
          ),
          {
            getRootProps: X,
            getInputProps: M,
            isDragActive: U,
          } = (0, n.VB)({
            onDrop: q,
            accept: { "image/*": [".png", ".jpg", ".jpeg", ".gif"] },
            maxFiles: 1,
            multiple: !1,
          }),
          K = O("bio"),
          W = O("socials");
        return (0, a.jsxs)("div", {
          className: "min-h-screen flex flex-col items-center justify-center",
          children: [
            (0, a.jsx)("div", {
              className:
                "w-full max-w-6xl flex flex-col md:flex-row gap-8 bg-transparent",
              children: (0, a.jsx)("div", {
                className:
                  "flex-1 flex flex-col gap-6 bg-[#2C2C2E] rounded-2xl p-6 md:p-10 relative border border-white/10",
                children: (0, a.jsxs)("div", {
                  className: "flex flex-col md:flex-row gap-8",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex-1",
                      children: (0, a.jsxs)("form", {
                        ref: v,
                        className: "flex flex-col gap-6",
                        id: "form-step-3",
                        onSubmit: R(V),
                        children: [
                          (0, a.jsx)(g, {
                            control: B,
                            errors: L,
                            getInputProps: M,
                            getRootProps: X,
                            isDragActive: U,
                            isEditMode: b,
                            mode: c,
                            previewImage: k,
                            setValue: _,
                            watch: O,
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, a.jsxs)("label", {
                                className: "text-white font-semibold",
                                children: [
                                  "AI Influencer Overview ",
                                  "(".concat(K.trim().length, "/2000)"),
                                ],
                              }),
                              (0, a.jsx)(o.xI, {
                                control: B,
                                name: "bio",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, a.jsx)(z.K, {
                                    ...t,
                                    placeholder:
                                      "Write a brief description of your AI Influencer to introduce it to others",
                                    maxLength: 2e3,
                                    minRows: 5,
                                  });
                                },
                              }),
                              (0, a.jsx)("label", {
                                className: "text-white font-semibold",
                              }),
                              L.bio &&
                                (0, a.jsx)("span", {
                                  className: "text-red-500 text-xs",
                                  children: L.bio.message,
                                }),
                              2e3 == K.trim().length &&
                                (0, a.jsx)("span", {
                                  className: "text-red-500 text-xs",
                                  children:
                                    " Bio must be 2000 characters or less",
                                }),
                            ],
                          }),
                          (0, a.jsx)(F, {
                            error:
                              null === (t = L.personalityTraits) || void 0 === t
                                ? void 0
                                : t.message,
                            selectedTraits: S,
                            toggleTrait: (e) => {
                              let t = S.includes(e)
                                ? S.filter((t) => t !== e)
                                : S.length < 5
                                ? [...S, e]
                                : S;
                              D(t),
                                _("personalityTraits", t, {
                                  shouldValidate: !0,
                                });
                            },
                          }),
                          (0, a.jsx)(I, { control: B }),
                          (0, a.jsxs)("div", {
                            className: "border-t border-white/20 pt-4",
                            children: [
                              (0, a.jsxs)("button", {
                                className:
                                  "flex items-center gap-3 text-[#57F76B] font-semibold hover:opacity-80 transition-opacity",
                                type: "button",
                                onClick: () => {
                                  y(!j);
                                },
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-6 h-6 rounded-full bg-[#57F76B] flex items-center justify-center transition-transform duration-200 ".concat(
                                        j ? "rotate-180" : ""
                                      ),
                                    children: (0, a.jsx)("svg", {
                                      className: "text-black",
                                      fill: "none",
                                      height: "18",
                                      viewBox: "0 0 24 24",
                                      width: "18",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, a.jsx)("path", {
                                        d: "M6 9L12 15L18 9",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("span", {
                                    children: "Additional Information",
                                  }),
                                ],
                              }),
                              j &&
                                (0, a.jsxs)("div", {
                                  className:
                                    "mt-4 space-y-6 animate-in slide-in-from-top-2 duration-200",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex flex-col gap-2",
                                      children: [
                                        (0, a.jsxs)("label", {
                                          className:
                                            "text-white font-semibold flex items-center gap-2",
                                          children: [
                                            "AI Influencer Website",
                                            (0, a.jsx)(r.R, {
                                              classNames: {
                                                base: "bg-transparent border border-white/30",
                                              },
                                              color: "default",
                                              size: "sm",
                                              variant: "flat",
                                              children: "optional",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)(o.xI, {
                                          control: B,
                                          name: "socials.website",
                                          render: (e) => {
                                            let { field: t } = e;
                                            return (0, a.jsx)(w.w, {
                                              ...t,
                                              classNames: {
                                                input:
                                                  "bg-[#181A20] border-[#23223A] text-white placeholder:text-neutral-400",
                                              },
                                              placeholder:
                                                "Website of your AI Influencer",
                                            });
                                          },
                                        }),
                                        (null === (s = L.socials) ||
                                        void 0 === s
                                          ? void 0
                                          : s.website) &&
                                          (0, a.jsx)("span", {
                                            className: "text-red-500 text-xs",
                                            children: L.socials.website.message,
                                          }),
                                      ],
                                    }),
                                    (0, a.jsx)(N, { control: B, errors: L }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "w-full flex-col md:w-[300px] flex-shrink-0 hidden lg:flex",
                      children: [
                        (0, a.jsx)("span", {
                          className: "opacity-70 text-xl",
                          children: "[ PREVIEW ]",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-white font-semibold text-base mt-5",
                          children: "Preview of your AI Influencer card",
                        }),
                        (0, a.jsx)("div", {
                          className: "mt-[-10px]",
                          children: (0, a.jsx)(x, {
                            bio: K,
                            name: h.name,
                            previewImage: k,
                            socials: W,
                            ticker: h.ticker,
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "mt-8",
                          children: (0, a.jsx)(P, {
                            formData: {
                              profilePicture: k || "",
                              bio: O("bio"),
                              personalityTraits: O("personalityTraits"),
                              knowledgeBase: O("knowledgeBase"),
                            },
                            mode: c,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex justify-between w-full max-w-6xl mt-8",
              children: [
                m
                  ? (0, a.jsx)(f.r, {
                      className: "px-4 flex gap-2 font-light text-lg shadow-lg",
                      leftIcon: (0, a.jsx)(i.default, {
                        alt: "Next",
                        height: 25,
                        quality: 100,
                        src: "/images/backIcon.png",
                        width: 25,
                      }),
                      variant: "neon",
                      onPress: m,
                      children: "BACK",
                    })
                  : (0, a.jsx)("div", {}),
                (0, a.jsx)("button", {
                  form: "form-step-3",
                  type: "submit",
                  children: (0, a.jsx)(f.r, {
                    className: "px-4 flex gap-2 font-light text-lg shadow-lg",
                    leftIcon: (0, a.jsx)(i.default, {
                      alt: "Next",
                      height: 25,
                      quality: 100,
                      src: "/images/nextIcon.png",
                      width: 25,
                    }),
                    variant: "neon",
                    children: "NEXT",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    53886: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => O });
      var a = s(95155),
        r = s(90908),
        i = s(5565),
        l = s(12115),
        n = s(69912),
        o = s(6983),
        c = s(80795),
        d = s(85060),
        m = s(69606),
        x = s(43415),
        u = s(41848),
        h = s(95408),
        p = s(47058),
        f = s(31539),
        g = s(93317);
      let b = (0, r.PA)((e) => {
          let {
            util: t,
            isAdded: s,
            isEditMode: r = !1,
            onToggleForm: l,
            isFormExpanded: n,
            formContent: o,
            statusChips: c,
          } = e;
          return (0, a.jsxs)(
            "div",
            {
              className:
                "w-full flex flex-col bg-black/20 rounded-2xl p-4 gap-4 shadow-lg border border-white/10",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-start gap-4",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "rounded-xl overflow-hidden flex items-center justify-center bg-[#181A20] border border-white/20 flex-shrink-0",
                      children: (0, a.jsx)(i.default, {
                        alt: t.name,
                        height: 60,
                        src: t.image,
                        width: 60,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex-1 flex flex-col min-w-0",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 mb-1",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "text-white font-semibold text-base truncate lg:flex-shrink-0",
                              children: t.displayName,
                            }),
                            (0, a.jsx)("div", {
                              className: "flex flex-wrap items-center gap-2",
                              children: c,
                            }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className: "text-neutral-400 text-xs line-clamp-2",
                          children: t.desc,
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden lg:block lg:flex-shrink-0",
                      children: s
                        ? (0, a.jsx)(g.r, {
                            className: "cursor-pointer",
                            variant: "neon",
                            onPress: l,
                            children: n ? "Hide" : "Edit",
                          })
                        : (0, a.jsx)(g.r, {
                            variant: "upload",
                            onPress: l,
                            children: n ? "Cancel" : "Add",
                          }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "w-full lg:hidden",
                  children: s
                    ? (0, a.jsx)(g.r, {
                        className: "cursor-pointer w-full",
                        variant: "neon",
                        onPress: l,
                        children: n ? "Hide" : "Edit",
                      })
                    : (0, a.jsx)(g.r, {
                        className: "w-full",
                        variant: "upload",
                        onPress: l,
                        children: n ? "Cancel" : "Add",
                      }),
                }),
                n &&
                  (0, a.jsx)("div", {
                    className:
                      "w-full flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200",
                    children: o,
                  }),
              ],
            },
            t.name
          );
        }),
        v = () => {
          let e = (0, r.iz)(() => ({ originalValues: null })),
            t = (t, s) => {
              if (!e.originalValues) return [];
              let a = [];
              return (
                (s || Object.keys(t)).forEach((s) => {
                  let r = e.originalValues[s],
                    i = t[s],
                    l = !1;
                  if ("object" == typeof r && "object" == typeof i && r && i) {
                    let e = {};
                    Object.keys(i).forEach((t) => {
                      void 0 !== r[t] && (e[t] = r[t]);
                    }),
                      (l = JSON.stringify(e) !== JSON.stringify(i));
                  } else l = JSON.stringify(r) !== JSON.stringify(i);
                  l && a.push(s);
                }),
                a
              );
            },
            s = (e, s) => {
              let a = t(e, null == s ? void 0 : s.fieldsToTrack),
                r = a.length > 0;
              return {
                hasNewPurchase:
                  null != s && !!s.hasQuantity && (e.quantity || 0) > 0,
                hasConfigUpdates: r,
                changedFields: a,
              };
            };
          return {
            setOriginalValues: (t) => {
              e.originalValues = JSON.parse(JSON.stringify(t));
            },
            getChangedFields: t,
            buildEditInfo: s,
            handleSubmit: (e, t, a, r, i) => {
              if (r) {
                let r = s(e, i);
                t(a, e, r);
              } else t(a, e);
            },
            hasOriginalValues: !!e.originalValues,
          };
        },
        j = x.z
          .object({
            feeToken: x.z.string().min(1, "Message price token is required"),
            msgPrice: x.z.number(),
            duration: x.z
              .number()
              .min(3, "Duration must be at least 3 days")
              .max(30, "Duration cannot exceed 30 days"),
            creatorFeePercentage: x.z
              .number()
              .min(0, "Creator fee percentage must be at least 0%")
              .max(10, "Creator fee percentage cannot exceed 10%"),
            aiConfigs: x.z.object({
              personal: x.z
                .string()
                .min(1, "Description is required")
                .max(1e4, "Description must be 10000 characters or less"),
              winTrigger: x.z
                .string()
                .min(1, "Win trigger is required")
                .max(1e4, "Win trigger must be 10000 characters or less"),
            }),
          })
          .superRefine((e, t) => {
            "WBNB" === e.feeToken
              ? e.msgPrice < 0.001 &&
                t.addIssue({
                  code: x.z.ZodIssueCode.custom,
                  message: "Message price must be at least 0.001 for BNB",
                  path: ["msgPrice"],
                })
              : e.msgPrice < 5 &&
                t.addIssue({
                  code: x.z.ZodIssueCode.custom,
                  message: "Message price must be at least 5",
                  path: ["msgPrice"],
                });
          }),
        w = x.z.object({
          aiConfigs: x.z.object({
            personal: x.z
              .string()
              .min(1, "Description is required")
              .max(1e4, "Description must be 10000 characters or less"),
          }),
        }),
        N = (0, r.PA)((e) => {
          var t, s, n, x, N, y;
          let {
              util: k,
              isEditMode: A = !1,
              isAdded: C,
              onAdd: T,
              token: E,
              existingData: I,
            } = e,
            S = (0, r.iz)(() => ({ isFormExpanded: !1 })),
            F = v(),
            P = A ? w : j,
            {
              control: z,
              handleSubmit: D,
              formState: { errors: B, isValid: R },
              watch: L,
              reset: _,
            } = (0, m.mN)({
              resolver: (0, d.u)(P),
              defaultValues: A
                ? {
                    aiConfigs: {
                      personal:
                        (null == I
                          ? void 0
                          : null === (t = I.aiConfigs) || void 0 === t
                          ? void 0
                          : t.personal) || "",
                      winTrigger:
                        (null == I
                          ? void 0
                          : null === (s = I.aiConfigs) || void 0 === s
                          ? void 0
                          : s.winTrigger) || "",
                    },
                  }
                : {
                    ...(A
                      ? {}
                      : {
                          feeToken: (null == I ? void 0 : I.feeToken) || "XCX",
                          msgPrice: (null == I ? void 0 : I.msgPrice) || 5,
                          duration: (null == I ? void 0 : I.duration) || 3,
                          creatorFeePercentage:
                            (null == I ? void 0 : I.creatorFeePercentage) || 0,
                        }),
                    aiConfigs: {
                      personal:
                        (null == I
                          ? void 0
                          : null === (n = I.aiConfigs) || void 0 === n
                          ? void 0
                          : n.personal) || "",
                      winTrigger:
                        (null == I
                          ? void 0
                          : null === (x = I.aiConfigs) || void 0 === x
                          ? void 0
                          : x.winTrigger) || "",
                    },
                  },
              mode: "onChange",
            });
          (0, l.useEffect)(() => {
            C || (S.isFormExpanded = !1);
          }, [C]),
            (0, l.useEffect)(() => {
              if (A && I) {
                var e;
                let t = {
                  aiConfigs: {
                    personal:
                      (null == I
                        ? void 0
                        : null === (e = I.aiConfigs) || void 0 === e
                        ? void 0
                        : e.personal) || "",
                  },
                };
                F.setOriginalValues(t);
              }
            }, [A, I]);
          let O = () => {
              C || (S.isFormExpanded = !S.isFormExpanded);
            },
            V = L("aiConfigs.personal"),
            q = L("aiConfigs.winTrigger"),
            X = !A,
            M = X
              ? {
                  feeToken: L("feeToken"),
                  msgPrice: L("msgPrice"),
                  duration: L("duration"),
                  creatorFeePercentage: L("creatorFeePercentage"),
                }
              : null,
            U = [
              { key: "XCX", label: "XCX", icon: "/images/xcx.png" },
              { key: "WBNB", label: "BNB", icon: "/images/bnb.png" },
            ];
          E.isFinishBonding == h.v3.ADDED_LIQUID &&
            U.push({ key: "TOKEN", label: E.symbol, icon: E.icon });
          let K = (0, a.jsxs)("form", {
            className: "space-y-4",
            onSubmit: D((e) => {
              F.handleSubmit(e, T, k, A, {
                fieldsToTrack: ["aiConfigs"],
                hasQuantity: !1,
              }),
                (S.isFormExpanded = !1);
            }),
            children: [
              X &&
                M &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsx)("label", {
                      className: "text-white font-semibold text-sm",
                      children: "Message Price *",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex gap-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, a.jsx)(m.xI, {
                              control: z,
                              name: "msgPrice",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsx)(u.HG, {
                                  required: !0,
                                  thousandSeparator: !0,
                                  allowNegative: !1,
                                  "aria-label": "Message price",
                                  className:
                                    "bg-black/30 border-2 text-white placeholder:text-neutral-400 rounded-xl md:text-base focus:outline-none py-[7px] px-4 border-white/20 w-[300px]",
                                  decimalScale: 6,
                                  name: "msgPrice",
                                  placeholder: "0.001",
                                  value: t.value || "",
                                  onValueChange: (e) => {
                                    let { value: s, floatValue: a } = e;
                                    s &&
                                      "." !== s[s.length - 1] &&
                                      t.onChange(a || 0);
                                  },
                                });
                              },
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                (0, a.jsxs)("span", {
                                  className: "text-neutral-400 text-xs mt-1",
                                  children: [
                                    "Minimum:",
                                    " ",
                                    "WBNB" === M.feeToken
                                      ? "0.001 BNB"
                                      : "5 " +
                                        ("XCX" === M.feeToken
                                          ? "XCX"
                                          : E.symbol),
                                  ],
                                }),
                                X &&
                                  B.msgPrice &&
                                  (0, a.jsx)("span", {
                                    className: "text-red-400 text-xs",
                                    children: B.msgPrice.message,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "",
                          children: [
                            (0, a.jsx)(m.xI, {
                              control: z,
                              name: "feeToken",
                              render: (e) => {
                                let { field: t } = e;
                                return (0, a.jsx)(o.d, {
                                  "aria-label": "Select message price token",
                                  classNames: {
                                    trigger:
                                      "rounded-xl px-4 py-2 text-base border border-white/20 text-white min-w-[120px] font-semibold bg-black/30",
                                    base: "border border-white/20 rounded-xl w-[120px]",
                                    listbox: "min-w-[120px]",
                                    popoverContent: "min-w-[120px]",
                                  },
                                  items: U,
                                  maxListboxHeight: 350,
                                  renderValue: (e) =>
                                    e.map((e) =>
                                      e.data
                                        ? (0, a.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                (0, a.jsx)(i.default, {
                                                  alt: e.data.label,
                                                  className: "rounded-full",
                                                  height: 20,
                                                  src: e.data.icon,
                                                  width: 20,
                                                }),
                                                e.data.label,
                                              ],
                                            },
                                            e.key
                                          )
                                        : null
                                    ),
                                  selectedKeys: [t.value],
                                  onSelectionChange: (e) => {
                                    let s = Array.from(e)[0];
                                    s && t.onChange(s, { shouldValidate: !0 });
                                  },
                                  children: (e) =>
                                    (0, a.jsx)(
                                      c.y,
                                      {
                                        children: (0, a.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, a.jsx)(i.default, {
                                              alt: e.label,
                                              className: "rounded-full",
                                              height: 20,
                                              src: e.icon,
                                              width: 20,
                                            }),
                                            e.label,
                                          ],
                                        }),
                                      },
                                      e.key
                                    ),
                                });
                              },
                            }),
                            X &&
                              B.feeToken &&
                              (0, a.jsx)("span", {
                                className: "text-red-400 text-xs",
                                children: B.feeToken.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              X &&
                M &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-white font-semibold text-sm",
                          children: "Duration *",
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-[#FFE38F] text-sm font-light",
                          children: [M.duration, " days"],
                        }),
                      ],
                    }),
                    (0, a.jsx)(m.xI, {
                      control: z,
                      name: "duration",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsx)(p.f, {
                          className:
                            "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FFE38F] [&_.slider-track]:to-[#00D4AA] [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#4A4A4C]",
                          max: 30,
                          min: 3,
                          step: 1,
                          value: t.value,
                          onChange: (e) => t.onChange(e),
                        });
                      },
                    }),
                    X &&
                      B.duration &&
                      (0, a.jsx)("span", {
                        className: "text-red-400 text-xs",
                        children: B.duration.message,
                      }),
                  ],
                }),
              X &&
                M &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-white font-semibold text-sm",
                          children: "Creator Fee Percentage",
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-[#FFE38F] text-sm font-light",
                          children: [M.creatorFeePercentage, "%"],
                        }),
                      ],
                    }),
                    (0, a.jsx)(m.xI, {
                      control: z,
                      name: "creatorFeePercentage",
                      render: (e) => {
                        let { field: t } = e;
                        return (0, a.jsx)(p.f, {
                          className:
                            "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FFE38F] [&_.slider-track]:to-[#00D4AA] [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#4A4A4C]",
                          max: 10,
                          min: 0,
                          step: 1,
                          value: t.value,
                          onChange: (e) => t.onChange(e),
                        });
                      },
                    }),
                    X &&
                      B.creatorFeePercentage &&
                      (0, a.jsx)("span", {
                        className: "text-red-400 text-xs",
                        children: B.creatorFeePercentage.message,
                      }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsxs)("label", {
                    className: "text-white font-semibold text-sm",
                    children: [
                      "Description * ",
                      "(".concat((V || "").trim().length, "/10000)"),
                    ],
                  }),
                  (0, a.jsx)(m.xI, {
                    control: z,
                    name: "aiConfigs.personal",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsx)(f.K, {
                        ...t,
                        classNames: {
                          input:
                            "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                        },
                        maxLength: 1e4,
                        minRows: 4,
                        placeholder: "Describe the challenge utility...",
                      });
                    },
                  }),
                  (null === (N = B.aiConfigs) || void 0 === N
                    ? void 0
                    : N.personal) &&
                    (0, a.jsx)("span", {
                      className: "text-red-400 text-xs",
                      children: B.aiConfigs.personal.message,
                    }),
                  1e4 === (V || "").trim().length &&
                    (0, a.jsx)("span", {
                      className: "text-red-400 text-xs",
                      children: "Personal must be 10000 characters or less",
                    }),
                ],
              }),
              X && M
                ? (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, a.jsxs)("label", {
                        className: "text-white font-semibold text-sm",
                        children: [
                          "Win Trigger * ",
                          "(".concat((q || "").trim().length, "/10000)"),
                        ],
                      }),
                      (0, a.jsx)(m.xI, {
                        control: z,
                        name: "aiConfigs.winTrigger",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsx)(f.K, {
                            ...t,
                            classNames: {
                              input:
                                "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                            },
                            maxLength: 1e4,
                            minRows: 4,
                            placeholder:
                              "Describe the win trigger conditions...",
                          });
                        },
                      }),
                      (null === (y = B.aiConfigs) || void 0 === y
                        ? void 0
                        : y.winTrigger) &&
                        (0, a.jsx)("span", {
                          className: "text-red-400 text-xs",
                          children: B.aiConfigs.winTrigger.message,
                        }),
                      1e4 === (q || "").trim().length &&
                        (0, a.jsx)("span", {
                          className: "text-red-400 text-xs",
                          children:
                            "Win trigger must be 10000 characters or less",
                        }),
                    ],
                  })
                : A && q
                ? (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        className: "text-white font-semibold text-sm",
                        children: "Win Trigger (Read-only)",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "bg-black/20 border-2 border-white/10 rounded-xl p-3 text-neutral-300 text-sm",
                        children: q,
                      }),
                    ],
                  })
                : null,
              (0, a.jsx)("div", {
                className: "flex justify-end pt-2",
                children: (0, a.jsx)(g.r, {
                  type: "submit",
                  variant: "neon",
                  className: "px-6 font-medium",
                  children: C ? "Update" : "Confirm Add",
                }),
              }),
            ],
          });
          return (0, a.jsx)(b, {
            util: k,
            isAdded: C,
            isEditMode: A,
            onToggleForm: () => {
              C ? (S.isFormExpanded = !S.isFormExpanded) : O();
            },
            isFormExpanded: S.isFormExpanded,
            formContent: K,
          });
        });
      var y = s(21963),
        k = s(90490),
        A = s(37725),
        C = s(98176),
        T = s(32895);
      let E = (e) => {
        let {
            token: t,
            onConnect: s,
            onDisconnect: i,
            connectedAccount: n,
            isConnecting: o = !1,
            className: c = "",
          } = e,
          d = (0, r.iz)(() => ({ isLoading: !1, error: null, popup: null })),
          m = async () => {
            if (!d.isLoading && !o)
              try {
                (d.isLoading = !0), (d.error = null);
                let e = await fetch(
                  ""
                    .concat(h.H$, "/xauth/twitter/init?token=")
                    .concat(encodeURIComponent(t)),
                  {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }
                );
                if (!e.ok)
                  throw Error("Failed to initialize Twitter authentication");
                let { authUrl: a } = await e.json(),
                  r = window.open(
                    a,
                    "twitterAuth",
                    "width=500,height=600,scrollbars=yes,resizable=yes"
                  );
                if (!r)
                  throw Error(
                    "Popup was blocked. Please allow popups for this site."
                  );
                d.popup = r;
                let i = setInterval(() => {
                    r.closed &&
                      (clearInterval(i),
                      d.isLoading &&
                        (console.log("Popup closed by user"),
                        (d.error = "Authentication was cancelled"),
                        (d.isLoading = !1),
                        (d.popup = null),
                        window.removeEventListener("message", l)));
                  }, 1e3),
                  l = (e) => {
                    if (
                      (console.log(
                        "Received message:",
                        e.data,
                        "from:",
                        e.origin
                      ),
                      !e.data ||
                        !e.data.type ||
                        e.origin !== window.location.origin)
                    ) {
                      console.log(
                        "Ignoring message from different origin or invalid format"
                      );
                      return;
                    }
                    if ("TWITTER_AUTH_SUCCESS" === e.data.type) {
                      console.log("Twitter auth success:", e.data.credentials);
                      let t = e.data.credentials;
                      s(t),
                        (d.isLoading = !1),
                        (d.error = null),
                        d.popup && !d.popup.closed && d.popup.close(),
                        (d.popup = null),
                        window.removeEventListener("message", l),
                        clearInterval(i);
                    } else
                      "TWITTER_AUTH_ERROR" === e.data.type &&
                        (console.log("Twitter auth error:", e.data.error),
                        (d.error = e.data.error || "Authentication failed"),
                        (d.isLoading = !1),
                        d.popup && !d.popup.closed && d.popup.close(),
                        (d.popup = null),
                        window.removeEventListener("message", l),
                        clearInterval(i));
                  };
                window.addEventListener("message", l);
              } catch (e) {
                console.error("Twitter connect error:", e),
                  (d.error =
                    e instanceof Error
                      ? e.message
                      : "Failed to connect Twitter account"),
                  (d.isLoading = !1),
                  C.g.push({ children: (0, T.fh)(e), variant: "error" });
              }
          };
        return ((0, l.useEffect)(
          () => () => {
            d.popup && !d.popup.closed && d.popup.close();
          },
          []
        ),
        n)
          ? (0, a.jsx)("div", {
              className: "flex flex-col gap-2 ".concat(c),
              children: (0, a.jsxs)("div", {
                className:
                  "flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-xl",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center",
                        children: (0, a.jsx)("span", {
                          className: "text-green-400 text-sm font-semibold",
                          children: "X",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-white font-medium text-sm",
                            children: "Connected",
                          }),
                          (0, a.jsxs)("span", {
                            className: "text-green-400 text-xs",
                            children: ["@", n.screenName],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(g.r, {
                    className: "text-xs",
                    variant: "bordered",
                    onPress: () => {
                      i();
                    },
                    children: "Disconnect",
                  }),
                ],
              }),
            })
          : (0, a.jsxs)("div", {
              className: "flex flex-col gap-2 ".concat(c),
              children: [
                (0, a.jsx)(g.r, {
                  className: "w-full",
                  isDisabled: d.isLoading || o,
                  variant: "upload",
                  onPress: m,
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                      (d.isLoading || o) &&
                        (0, a.jsx)("div", {
                          className:
                            "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                        }),
                      (0, a.jsx)("span", {
                        children:
                          d.isLoading || o
                            ? "Connecting..."
                            : "Connect Twitter Account",
                      }),
                    ],
                  }),
                }),
                d.error &&
                  (0, a.jsx)("div", {
                    className:
                      "text-red-400 text-xs mt-1 p-2 bg-red-500/10 border border-red-500/30 rounded-lg",
                    children: d.error,
                  }),
                (0, a.jsx)("div", {
                  className: "text-neutral-400 text-xs",
                  children:
                    "Click to securely connect your Twitter account via OAuth. Your credentials are never stored on our servers.",
                }),
              ],
            });
      };
      var I = s(97412),
        S = s(13186);
      let F = [
          "Meme",
          "Alpha",
          "Airdrop",
          "Whales",
          "Rugpull",
          "WAGMI",
          "AI Influencer",
          "Generative Art",
          "Metaverse",
          "Staking",
          "Quest",
          "Giveaway",
          "MissAI",
          "Xeleb",
          "BNB Chain",
        ],
        P = [
          {
            title: "Meme Content",
            content:
              "Post funny NFT/crypto memes with Gen Z slang and emojis to entertain the community.",
          },
          {
            title: "Educational Nuggets",
            content:
              "Share simple, bite-sized explanations about NFT, staking, and Web3 basics.",
          },
          {
            title: "Market Alpha",
            content:
              "Give hot takes on NFT/crypto trends, price moves, and degen insights.",
          },
          {
            title: "Community Engagement",
            content:
              "Write posts that ask questions, polls, or start discussions to engage followers.",
          },
          {
            title: "Project Narrative",
            content:
              "Highlight MissAI/Xeleb updates, campaign milestones, and product features.",
          },
          {
            title: "Call-to-Action",
            content:
              "Create short posts encouraging users to mint, stake, or join campaigns with clear CTAs.",
          },
        ],
        z = [
          { value: 900, label: "Every 15 minutes" },
          { value: 1800, label: "Every 30 minutes" },
          { value: 3600, label: "Every 1 hour" },
          { value: 7200, label: "Every 2 hours" },
          { value: 10800, label: "Every 3 hours" },
          { value: 21600, label: "Every 6 hours" },
          { value: 43200, label: "Every 12 hours" },
          { value: 86400, label: "Every 24 hours" },
          { value: 172800, label: "Every 2 days" },
          { value: 259200, label: "Every 3 days" },
          { value: 604800, label: "Every 7 days" },
        ],
        D = x.z.object({
          quantity: x.z
            .number()
            .min(1, "Number of posts must be greater than 0"),
          aiConfigs: x.z.object({
            topics: x.z
              .array(x.z.string())
              .min(1, "At least one topic is required")
              .max(5, "Maximum 5 topics allowed"),
            draftIdea: x.z
              .string()
              .min(1, "Draft idea is required")
              .max(1e3, "Draft idea must be 1000 characters or less"),
          }),
          twitterCredentials: x.z.object({
            accessToken: x.z
              .string()
              .min(1, "Twitter access token is required"),
            accessTokenSecret: x.z
              .string()
              .min(1, "Twitter access token secret is required"),
            screenName: x.z.string().min(1, "Twitter screen name is required"),
            userId: x.z.string().min(1, "Twitter user ID is required"),
            appCredentialId: x.z
              .string()
              .min(1, "App credential ID is required"),
          }),
          timeDiffSeconds: x.z
            .number()
            .min(900, "Minimum interval is 15 minutes (900 seconds)")
            .max(604800, "Maximum interval is 7 days (604800 seconds)"),
        }),
        B = x.z.object({
          quantity: x.z
            .number()
            .min(0, "Quantity must be 0 or greater")
            .optional(),
          aiConfigs: x.z.object({
            topics: x.z
              .array(x.z.string())
              .min(1, "At least one topic is required")
              .max(5, "Maximum 5 topics allowed"),
            draftIdea: x.z
              .string()
              .min(1, "Draft idea is required")
              .max(1e3, "Draft idea must be 1000 characters or less"),
          }),
          twitterCredentials: x.z.object({
            accessToken: x.z
              .string()
              .min(1, "Twitter access token is required"),
            accessTokenSecret: x.z
              .string()
              .min(1, "Twitter access token secret is required"),
            screenName: x.z.string().min(1, "Twitter screen name is required"),
            userId: x.z.string().min(1, "Twitter user ID is required"),
            appCredentialId: x.z
              .string()
              .min(1, "App credential ID is required"),
          }),
          timeDiffSeconds: x.z
            .number()
            .min(900, "Minimum interval is 15 minutes (900 seconds)")
            .max(604800, "Maximum interval is 7 days (604800 seconds)"),
        }),
        R = (0, r.PA)((e) => {
          var t, s, i, n, x, h, p;
          let {
              util: f,
              isEditMode: j = !1,
              isAdded: w,
              onAdd: N,
              token: C,
              existingData: T,
            } = e,
            R = (0, r.iz)(() => ({
              isFormExpanded: !1,
              currentStatus: null,
              isLoadingStatus: !1,
              topicsInput: "",
              showTemplates: !0,
            })),
            L = (0, l.useRef)(null),
            _ = v(),
            O = (0, m.mN)({
              resolver: (0, d.u)(j ? B : D),
              mode: "onChange",
              defaultValues: {
                quantity: j ? 0 : (null == T ? void 0 : T.quantity) || 1,
                aiConfigs: {
                  topics:
                    (null == T
                      ? void 0
                      : null === (t = T.aiConfigs) || void 0 === t
                      ? void 0
                      : t.topics) || [],
                  draftIdea:
                    (null == T
                      ? void 0
                      : null === (s = T.aiConfigs) || void 0 === s
                      ? void 0
                      : s.draftIdea) || "",
                },
                twitterCredentials: {
                  accessToken: "",
                  accessTokenSecret: "",
                  screenName: "",
                  userId: "",
                  appCredentialId: "",
                },
                timeDiffSeconds:
                  (null == T ? void 0 : T.timeDiffSeconds) || 3600,
              },
            }),
            {
              control: V,
              handleSubmit: q,
              setValue: X,
              watch: M,
              formState: { errors: U },
            } = O,
            K = M("aiConfigs.topics");
          (0, l.useEffect)(() => {
            j &&
              C.address &&
              (async () => {
                R.isLoadingStatus = !0;
                try {
                  await I.A.requestAccessToken();
                  let s = await (0, S.Rq)({ address: C.address });
                  if (((R.currentStatus = s), s.configs)) {
                    var e, t;
                    let a = {
                      twitterCredentials: s.configs.twitterCredentials || {
                        accessToken: "",
                        accessTokenSecret: "",
                        screenName: "",
                        userId: "",
                        appCredentialId: "",
                      },
                      aiConfigs: {
                        topics:
                          (null === (e = s.configs.aiConfigs) || void 0 === e
                            ? void 0
                            : e.topics) || [],
                        draftIdea:
                          (null === (t = s.configs.aiConfigs) || void 0 === t
                            ? void 0
                            : t.draftIdea) || "",
                      },
                      timeDiffSeconds: s.configs.timeDiffSeconds || 3600,
                    };
                    _.setOriginalValues(a),
                      X("twitterCredentials", a.twitterCredentials),
                      X("aiConfigs.topics", a.aiConfigs.topics),
                      X("aiConfigs.draftIdea", a.aiConfigs.draftIdea),
                      X("timeDiffSeconds", a.timeDiffSeconds);
                  }
                } catch (e) {
                  console.error("Failed to load auto-x-post status:", e);
                }
                R.isLoadingStatus = !1;
              })();
          }, [j, C.address, X]);
          let W = () => {
              let e = R.topicsInput.trim();
              if (
                e &&
                K.length < 5 &&
                e.length <= 30 &&
                (X("aiConfigs.topics", [...K, e]),
                (0, A.h5)(() => {
                  R.topicsInput = "";
                }),
                L.current)
              ) {
                var t, s;
                null === (t = (s = L.current).blur) ||
                  void 0 === t ||
                  t.call(s);
              }
            },
            H = (e) => {
              X(
                "aiConfigs.topics",
                K.filter((t, s) => s !== e)
              );
            },
            G = (e) => {
              X("aiConfigs.draftIdea", e.content), (R.showTemplates = !1);
            },
            Z =
              j &&
              R.currentStatus &&
              (0, a.jsx)(a.Fragment, {
                children:
                  "oauth-error" === R.currentStatus.status
                    ? (0, a.jsx)(y.R, {
                        className: "flex-shrink-0",
                        color: "danger",
                        size: "sm",
                        variant: "flat",
                        children: "OAuth Error - Reconnect Required",
                      })
                    : (0, a.jsxs)(y.R, {
                        className: "flex-shrink-0",
                        color:
                          R.currentStatus.currentQuantity > 0
                            ? "primary"
                            : "default",
                        size: "sm",
                        variant: "flat",
                        children: [
                          R.currentStatus.currentQuantity,
                          " posts remaining",
                        ],
                      }),
              }),
            $ = R.isLoadingStatus
              ? (0, a.jsxs)("div", {
                  className: "flex items-center justify-center py-8",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "w-6 h-6 border-2 border-white/20 border-t-[#57F76B] rounded-full animate-spin",
                    }),
                    (0, a.jsx)("span", {
                      className: "ml-2 text-neutral-400",
                      children: "Loading current settings...",
                    }),
                  ],
                })
              : (0, a.jsxs)("form", {
                  className: "space-y-4",
                  onSubmit: q((e) => {
                    _.handleSubmit(e, N, f, j, {
                      fieldsToTrack: [
                        "aiConfigs",
                        "twitterCredentials",
                        "timeDiffSeconds",
                      ],
                      hasQuantity: !0,
                    }),
                      (R.isFormExpanded = !1);
                  }),
                  children: [
                    j &&
                      (null === (i = R.currentStatus) || void 0 === i
                        ? void 0
                        : i.status) === "oauth-error" &&
                      (0, a.jsx)("div", {
                        className:
                          "p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-start gap-3",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0",
                              children: (0, a.jsx)("span", {
                                className: "text-white text-xs font-bold",
                                children: "!",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                (0, a.jsx)("h4", {
                                  className:
                                    "text-orange-400 font-semibold text-sm mb-1",
                                  children:
                                    "Auto-posting Suspended - Authentication Error",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-orange-200/80 text-xs leading-relaxed mb-3",
                                  children:
                                    "Your X (Twitter) connection has expired or been revoked. Auto-posting is currently paused. Please reconnect your X account below to resume automatic posting.",
                                }),
                                R.currentStatus.errorMessage &&
                                  (0, a.jsxs)("p", {
                                    className: "text-orange-300/60 text-xs",
                                    children: [
                                      "Error: ",
                                      R.currentStatus.errorMessage,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsxs)("label", {
                          className: "text-white font-semibold text-sm",
                          children: [
                            j ? "Purchase Additional Posts" : "Number of Posts",
                            " *",
                          ],
                        }),
                        (0, a.jsx)(m.xI, {
                          control: V,
                          name: "quantity",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsx)(u.HG, {
                              allowNegative: !1,
                              className:
                                "bg-black/30 border-2 text-white placeholder:text-neutral-400 rounded-xl md:text-base focus:outline-none py-[7px] px-4 border-white/20 w-full",
                              decimalScale: 0,
                              placeholder: j
                                ? "Additional posts to purchase"
                                : "Number of posts",
                              value: t.value || "",
                              onValueChange: (e) => {
                                let s = e.floatValue || 0;
                                t.onChange(s), O.trigger("quantity");
                              },
                            });
                          },
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            j &&
                              (0, a.jsxs)("span", {
                                className: "text-neutral-400 text-xs",
                                children: [
                                  "Current remaining: ",
                                  (null === (n = R.currentStatus) ||
                                  void 0 === n
                                    ? void 0
                                    : n.currentQuantity) || 0,
                                  " ",
                                  "posts",
                                ],
                              }),
                            U.quantity &&
                              (0, a.jsx)("span", {
                                className: "text-red-400 text-xs",
                                children: U.quantity.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-white font-semibold text-sm",
                          children: "Connect Twitter Account *",
                        }),
                        (0, a.jsx)(m.xI, {
                          control: V,
                          name: "twitterCredentials",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)(E, {
                                  connectedAccount: t.value.screenName
                                    ? { screenName: t.value.screenName }
                                    : null,
                                  token: C.address,
                                  onConnect: (e) => {
                                    t.onChange(e);
                                  },
                                  onDisconnect: () => {
                                    t.onChange({
                                      accessToken: "",
                                      accessTokenSecret: "",
                                      screenName: "",
                                      userId: "",
                                      appCredentialId: "",
                                    });
                                  },
                                }),
                                U.twitterCredentials &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-red-400 text-xs mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded-lg",
                                    children:
                                      "Please connect your Twitter account",
                                  }),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-white font-semibold text-sm",
                          children: "Keywords (Max 5) *",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-2 mb-2",
                          children: [
                            (0, a.jsx)(k.H, {
                              ref: L,
                              allowsCustomValue: !0,
                              className: "flex-1",
                              classNames: {
                                base: "bg-black/30 border-2 border-white/20 data-[hover=true]:border-white/40 data-[focus=true]:border-white/60 rounded-xl min-h-[40px]",
                                listbox: "bg-black/90 border border-white/20",
                                listboxWrapper: "max-h-[200px]",
                                popoverContent:
                                  "bg-black/90 border border-white/20",
                              },
                              inputProps: {
                                classNames: {
                                  input:
                                    "text-white placeholder:text-neutral-400 md:text-base",
                                  innerWrapper: "py-[7px] bg-transparent",
                                  inputWrapper: "bg-[#18181A]",
                                },
                                maxLength: 30,
                              },
                              inputValue: R.topicsInput,
                              selectedKey: null,
                              placeholder: "Enter a keyword",
                              variant: "flat",
                              menuTrigger: "focus",
                              onInputChange: (e) => {
                                (0, A.h5)(() => {
                                  R.topicsInput = e;
                                });
                              },
                              onKeyDown: (e) => {
                                "Enter" === e.key &&
                                  R.topicsInput.trim() &&
                                  !e.nativeEvent.isComposing &&
                                  (e.preventDefault(), W());
                              },
                              onSelectionChange: (e) => {
                                if (e && "string" == typeof e) {
                                  let a = e.trim();
                                  if (
                                    a &&
                                    K.length < 5 &&
                                    a.length <= 30 &&
                                    (X("aiConfigs.topics", [...K, a]),
                                    (0, A.h5)(() => {
                                      R.topicsInput = "";
                                    }),
                                    L.current)
                                  ) {
                                    var t, s;
                                    null === (t = (s = L.current).blur) ||
                                      void 0 === t ||
                                      t.call(s);
                                  }
                                }
                              },
                              children: F.filter((e) =>
                                e
                                  .toLowerCase()
                                  .includes(R.topicsInput.toLowerCase())
                              ).map((e) => (0, a.jsx)(c.y, { children: e }, e)),
                            }),
                            (0, a.jsx)(g.r, {
                              className: "px-4",
                              isDisabled:
                                !R.topicsInput.trim() ||
                                K.length >= 5 ||
                                R.topicsInput.trim().length > 30,
                              type: "button",
                              variant: "upload",
                              onPress: W,
                              children: "Add",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "flex flex-wrap gap-2",
                          children: K.map((e, t) =>
                            (0, a.jsx)(
                              y.R,
                              {
                                color: "primary",
                                size: "sm",
                                variant: "flat",
                                onClose: () => H(t),
                                children: e,
                              },
                              t
                            )
                          ),
                        }),
                        (null === (x = U.aiConfigs) || void 0 === x
                          ? void 0
                          : x.topics) &&
                          (0, a.jsx)("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: U.aiConfigs.topics.message,
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, a.jsxs)("label", {
                              className: "text-white font-semibold text-sm",
                              children: [
                                "Draft Ideas & Instructions * (",
                                (null === (h = M("aiConfigs.draftIdea")) ||
                                void 0 === h
                                  ? void 0
                                  : h.length) || 0,
                                "/1000)",
                              ],
                            }),
                            (0, a.jsx)("button", {
                              className:
                                "text-xs px-3 py-1 text-neutral-300 hover:text-neutral-100 underline underline-offset-2 transition-colors",
                              type: "button",
                              onClick: () =>
                                (R.showTemplates = !R.showTemplates),
                              children: R.showTemplates
                                ? "Hide Templates"
                                : "Show Templates",
                            }),
                          ],
                        }),
                        (0, a.jsx)(m.xI, {
                          control: V,
                          name: "aiConfigs.draftIdea",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsx)("textarea", {
                              ...t,
                              className:
                                "bg-black/30 border-2 text-white placeholder:text-neutral-400 rounded-xl md:text-base focus:outline-none py-2 px-4 border-white/20 w-full resize-none",
                              maxLength: 1e3,
                              placeholder:
                                "Provide ideas, themes, or specific instructions for the AI to generate posts about...",
                              rows: 4,
                            });
                          },
                        }),
                        R.showTemplates &&
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col gap-2 p-3 bg-black/20 border border-white/10 rounded-xl",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "text-neutral-300 text-xs font-medium",
                                children: "Click a template to insert:",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-2",
                                children: P.map((e) =>
                                  (0, a.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "p-3 bg-black/30 border border-white/20 rounded-lg cursor-pointer hover:border-white/40 transition-colors",
                                      onClick: () => G(e),
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "text-white font-medium text-sm mb-1",
                                          children: e.title,
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "text-neutral-400 text-xs line-clamp-2",
                                          children: e.content,
                                        }),
                                      ],
                                    },
                                    e.title
                                  )
                                ),
                              }),
                            ],
                          }),
                        (null === (p = U.aiConfigs) || void 0 === p
                          ? void 0
                          : p.draftIdea) &&
                          (0, a.jsx)("span", {
                            className: "text-red-400 text-xs",
                            children: U.aiConfigs.draftIdea.message,
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-white font-semibold text-sm",
                          children: "Posting Interval *",
                        }),
                        (0, a.jsx)(m.xI, {
                          control: V,
                          name: "timeDiffSeconds",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsx)(o.d, {
                              className: "w-full",
                              classNames: {
                                trigger:
                                  "bg-black/30 border-2 border-white/20 data-[hover=true]:border-white/40 data-[focus=true]:border-white/60 rounded-xl min-h-[40px]",
                                value: "text-white",
                                popoverContent:
                                  "bg-black/90 border border-white/20",
                                listbox: "bg-black/90",
                              },
                              placeholder: "Select posting interval",
                              selectedKeys: t.value ? [t.value.toString()] : [],
                              onSelectionChange: (e) => {
                                let s = Array.from(e)[0];
                                s && t.onChange(parseInt(s.toString()));
                              },
                              children: z.map((e) =>
                                (0, a.jsx)(
                                  c.y,
                                  {
                                    className:
                                      "text-white data-[hover=true]:bg-white/10",
                                    children: e.label,
                                  },
                                  e.value.toString()
                                )
                              ),
                            });
                          },
                        }),
                        U.timeDiffSeconds &&
                          (0, a.jsx)("span", {
                            className: "text-red-400 text-xs",
                            children: U.timeDiffSeconds.message,
                          }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex justify-end pt-2",
                      children: (0, a.jsx)(g.r, {
                        className: "px-6 font-medium",
                        type: "submit",
                        variant: "neon",
                        children: w ? "Update" : "Confirm Add",
                      }),
                    }),
                  ],
                });
          return (0, a.jsx)(b, {
            util: f,
            isAdded: w,
            isEditMode: j,
            onToggleForm: () => {
              R.isFormExpanded = !R.isFormExpanded;
            },
            isFormExpanded: R.isFormExpanded,
            formContent: $,
            statusChips: Z,
          });
        });
      var L = s(18830);
      let _ = async (e) =>
          (await h.ok.get("/marketplace/listUtilities", e)).data,
        O = (0, r.PA)((e) => {
          let {
              onNextStep: t,
              onGoBack: s,
              mode: o,
              formValues: c,
              updateFormValues: d,
            } = e,
            [m, x] = (0, l.useState)(""),
            u = () => {
              var e;
              return (null == c
                ? void 0
                : null === (e = c.step4) || void 0 === e
                ? void 0
                : e.utilities) && 0 !== b.utilities.length
                ? Object.keys(c.step4.utilities)
                    .map((e) => b.utilities.find((t) => t.name === e))
                    .filter((e) => void 0 !== e)
                : [];
            },
            [p, f] = (0, l.useState)(!0),
            b = (0, r.iz)(() => ({ utilities: [], isLoading: !0 }));
          (0, l.useEffect)(() => {
            (async () => {
              let e = await _({}),
                t = [];
              for (let s of e) t.push(s);
              (b.utilities = t), (b.isLoading = !1);
            })();
          }, []);
          let v = b.utilities.filter(
              (e) =>
                e.displayName.toLowerCase().includes(m.toLowerCase()) ||
                e.desc.toLowerCase().includes(m.toLowerCase())
            ),
            j = (e) => {
              var t;
              if (
                null == c
                  ? void 0
                  : null === (t = c.step4) || void 0 === t
                  ? void 0
                  : t.utilities
              ) {
                let t = { ...c.step4.utilities };
                delete t[e], null == d || d("step4", { utilities: t });
              }
            },
            w = (e) => {
              var t;
              let s =
                null == c
                  ? void 0
                  : null === (t = c.step4.utilities) || void 0 === t
                  ? void 0
                  : t[e.name];
              if (!s) return 0;
              let a = s.isEditMode;
              return "quantity-based" === e.type ? s.quantity || 0 : a ? 0 : 1;
            },
            y = (e) =>
              u().reduce((t, s) => {
                let a = w(s);
                return "number" == typeof s.price[e] ? t + s.price[e] * a : t;
              }, 0),
            k = y(h.jR.WBNB),
            A = y(h.jR.XCX),
            C = (e, t, s) => {
              var a;
              null == d ||
                d("step4", {
                  utilities: {
                    ...(null == c ? void 0 : c.step4.utilities),
                    [e.name]: {
                      ...((null == c
                        ? void 0
                        : null === (a = c.step4.utilities) || void 0 === a
                        ? void 0
                        : a[e.name]) || {}),
                      ...t,
                      price: e.price,
                      displayName: e.displayName,
                      type: e.type,
                      isEditted: !0,
                      ...(s && { editInfo: s }),
                    },
                  },
                });
            };
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center ",
            children: [
              (0, a.jsx)("div", {
                className: "w-full max-w-6xl flex flex-col bg-transparent",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row gap-8 bg-[#2C2C2E] rounded-2xl p-6 md:p-10 border border-white/10",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex-1 flex flex-col gap-6 min-w-0",
                      children: [
                        (0, a.jsx)("span", {
                          className: "opacity-70 text-xl mb-2",
                          children: "[ UTILITY LIBRARY ]",
                        }),
                        (0, a.jsx)("label", {
                          className: "text-white font-semibold text-base mb-2",
                          children: "Search Utility",
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative mb-4",
                          children: [
                            (0, a.jsx)("input", {
                              className:
                                "w-full bg-[#181A20] border border-[#23223A] text-white rounded-xl px-4 py-3 pr-10 focus:outline-none placeholder:text-neutral-400",
                              placeholder: "Search by name or description...",
                              value: m,
                              onChange: (e) => x(e.target.value),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400",
                              children: (0, a.jsx)("svg", {
                                fill: "none",
                                height: "18",
                                viewBox: "0 0 24 24",
                                width: "18",
                                children: (0, a.jsx)("path", {
                                  d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z",
                                  stroke: "#888",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-neutral-400 text-xs mb-2",
                          children: [
                            "Add Utility",
                            " ",
                            (0, a.jsx)("span", {
                              className:
                                "bg-transparent border border-white/30 rounded px-2 py-0.5 ml-2 text-xs",
                              children: "OPTIONAL",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "flex flex-col gap-4 mb-8",
                          children:
                            0 === v.length
                              ? (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-center py-12 px-6 bg-[#181A20] border border-white/10 rounded-xl",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: "/images/noVestingIcon.png",
                                      alt: "No utilities found",
                                      className: "w-16 h-16 mb-4",
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-white font-semibold text-lg mb-2",
                                      children: "No utilities found",
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-neutral-400 text-sm text-center max-w-xs",
                                      children: m
                                        ? 'No utilities match "'.concat(
                                            m,
                                            '". Try adjusting your search terms.'
                                          )
                                        : "No utilities are currently available. Check back later for new utilities.",
                                    }),
                                    m &&
                                      (0, a.jsx)("button", {
                                        onClick: () => x(""),
                                        className:
                                          "mt-4 px-4 py-2 bg-[#57F76B] text-black font-medium rounded-lg hover:bg-[#4ADE80] transition-colors",
                                        children: "Clear search",
                                      }),
                                  ],
                                })
                              : v.map((e) => {
                                  var t, s, r, i, l;
                                  let n =
                                    (null == c
                                      ? void 0
                                      : c.step4.utilities[e.name]) &&
                                    (null == c
                                      ? void 0
                                      : null ===
                                          (t = c.step4.utilities[e.name]) ||
                                        void 0 === t
                                      ? void 0
                                      : t.isEditMode);
                                  return "challenge" === e.name
                                    ? (0, a.jsx)(
                                        N,
                                        {
                                          existingData:
                                            null == c
                                              ? void 0
                                              : c.step4.utilities.challenge,
                                          isAdded:
                                            null != c &&
                                            null !== (r = c.step4) &&
                                            void 0 !== r &&
                                            null !== (s = r.utilities) &&
                                            void 0 !== s &&
                                            !!s[e.name],
                                          isEditMode: n,
                                          token: {
                                            symbol:
                                              (null == c
                                                ? void 0
                                                : c.step2.ticker) || "",
                                            icon:
                                              (null == c
                                                ? void 0
                                                : c.step3.profilePicture) || "",
                                            isFinishBonding:
                                              (null == c
                                                ? void 0
                                                : c.step2.isFinishBonding) || 0,
                                          },
                                          util: e,
                                          onAdd: (e, t, s) => C(e, t, s),
                                        },
                                        e.name
                                      )
                                    : "auto-x-post" === e.name
                                    ? (0, a.jsx)(
                                        R,
                                        {
                                          existingData:
                                            null == c
                                              ? void 0
                                              : c.step4.utilities[
                                                  "auto-x-post"
                                                ],
                                          isAdded:
                                            null != c &&
                                            null !== (l = c.step4) &&
                                            void 0 !== l &&
                                            null !== (i = l.utilities) &&
                                            void 0 !== i &&
                                            !!i[e.name],
                                          isEditMode: n,
                                          token: {
                                            address:
                                              (null == c
                                                ? void 0
                                                : c.step6.tokenAddress) || "",
                                            symbol:
                                              (null == c
                                                ? void 0
                                                : c.step2.ticker) || "",
                                            icon:
                                              (null == c
                                                ? void 0
                                                : c.step3.profilePicture) || "",
                                            isFinishBonding:
                                              (null == c
                                                ? void 0
                                                : c.step2.isFinishBonding) || 0,
                                          },
                                          util: e,
                                          onAdd: (e, t, s) => C(e, t, s),
                                        },
                                        e.name
                                      )
                                    : null;
                                }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "max-w-[340px] w-full min-w-0 flex-shrink flex flex-col gap-4",
                      children: [
                        (0, a.jsx)("span", {
                          className: "opacity-70 text-xl mb-2",
                          children: "[ ADDED UTILITY ]",
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-white font-semibold text-base mb-2",
                          children: [u().length, " Utilities added"],
                        }),
                        u().length > 0
                          ? (0, a.jsx)("div", {
                              className: "flex flex-col mb-4",
                              children: u().map((e) => {
                                var t;
                                let s =
                                  (null == c
                                    ? void 0
                                    : c.step4.utilities[e.name]) &&
                                  (null == c
                                    ? void 0
                                    : null ===
                                        (t = c.step4.utilities[e.name]) ||
                                      void 0 === t
                                    ? void 0
                                    : t.isEditMode);
                                return (0, a.jsx)(
                                  L.A,
                                  {
                                    style: { padding: 20 },
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center gap-3 w-full justify-between",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            " rounded-lg overflow-hidden flex items-center justify-center bg-[#181A20] border border-white/20",
                                          children: (0, a.jsx)(i.default, {
                                            alt: e.name,
                                            height: 60,
                                            src: e.image,
                                            width: 60,
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "flex-1 min-w-0",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "text-white font-semibold text-sm truncate",
                                              children: e.displayName,
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "block text-xs text-[#57F76B] font-bold",
                                              children: "XELEB",
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "flex justify-end",
                                              children: (0, a.jsx)(g.r, {
                                                className:
                                                  "px-0 text-xs h-8 font-light",
                                                disabled: s,
                                                variant: "white",
                                                onPress: () => j(e.name),
                                                children: "Remove",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  e.name
                                );
                              }),
                            })
                          : null,
                        (0, a.jsxs)("div", {
                          className:
                            "bg-[#181A20] rounded-xl p-4 flex flex-col gap-2 border border-white/10",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "text-white font-semibold text-sm mb-2",
                              children: "Calculated Utility Fee",
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex flex-col gap-1 text-xs",
                              children: [
                                u().map((e) => {
                                  let t = w(e),
                                    s = e.price[p ? h.jR.WBNB : h.jR.XCX];
                                  return (0, a.jsxs)(
                                    "div",
                                    {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className: "text-neutral-300",
                                          children: [
                                            e.displayName || e.name,
                                            "quantity-based" === e.type &&
                                              t > 1 &&
                                              " (\xd7".concat(t, ")"),
                                          ],
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "text-neutral-100",
                                          children: ""
                                            .concat((0, T.KT)(s * t, 2), " ")
                                            .concat(p ? "BNB" : "XCX"),
                                        }),
                                      ],
                                    },
                                    e.name
                                  );
                                }),
                                (0, a.jsx)("div", {
                                  className: "border-t border-white/10 my-2",
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-between font-bold text-base",
                                  children: [
                                    (0, a.jsx)("span", { children: "Total" }),
                                    (0, a.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "text-[#57F76B]",
                                          children: p
                                            ? "".concat((0, T.KT)(k, 2), " BNB")
                                            : "".concat(
                                                (0, T.KT)(A, 2),
                                                " XCX"
                                              ),
                                        }),
                                        (0, a.jsx)("button", {
                                          "aria-label": "Switch to ".concat(
                                            p ? "XCX" : "BNB",
                                            " display"
                                          ),
                                          className:
                                            "p-1.5 rounded-lg b hover:bg-[#2C2C2E] transition-colors duration-200 ",
                                          tabIndex: 0,
                                          onClick: () => f(!p),
                                          onKeyDown: (e) => {
                                            ("Enter" === e.key ||
                                              " " === e.key) &&
                                              (e.preventDefault(), f(!p));
                                          },
                                          children: (0, a.jsx)(n.A, {
                                            className: "w-4 h-4",
                                            color: "#00FF80",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex justify-between w-full max-w-6xl mt-8",
                children: [
                  (0, a.jsx)(g.r, {
                    className: "px-4 flex gap-2 font-light text-lg shadow-lg",
                    leftIcon: (0, a.jsx)(i.default, {
                      alt: "Back",
                      height: 25,
                      quality: 100,
                      src: "/images/backIcon.png",
                      width: 25,
                    }),
                    variant: "neon",
                    onPress: s,
                    children: "BACK",
                  }),
                  (0, a.jsx)(g.r, {
                    className: "px-4 flex gap-2 font-light text-lg shadow-lg",
                    leftIcon: (0, a.jsx)(i.default, {
                      alt: "Next",
                      height: 25,
                      quality: 100,
                      src: "/images/nextIcon.png",
                      width: 25,
                    }),
                    variant: "neon",
                    onPress: t,
                    children: "NEXT",
                  }),
                ],
              }),
            ],
          });
        });
    },
    96103: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => A });
      var a = s(95155),
        r = s(14688),
        i = s(1661),
        l = s(27657),
        n = s(93248),
        o = s(6983),
        c = s(80795),
        d = s(27421),
        m = s(29605),
        x = s(90908),
        u = s(5565),
        h = s(12115),
        p = s(46280),
        f = s(43500),
        g = s(13186),
        b = s(93317),
        v = s(98176),
        j = s(95408),
        w = s(20764),
        N = s(97412),
        y = s(32895);
      let k = (0, x.PA)((e) => {
          let {
              isOpen: t,
              onClose: s,
              onStep1Complete: o,
              onStep2Complete: c,
              isEditMode: d,
            } = e,
            [m, x] = (0, h.useState)(1),
            [u, p] = (0, h.useState)(!1),
            [f, g] = (0, h.useState)(!1),
            [b, j] = (0, h.useState)(!1),
            [w, N] = (0, h.useState)(!1),
            k = async () => {
              p(!0);
              try {
                await o(), j(!0), p(!1), x(2);
              } catch (e) {
                throw (await (0, y.Cu)(3e3), p(!1), e);
              }
            },
            A = async () => {
              g(!0);
              try {
                await c(), N(!0), g(!1);
              } catch (e) {
                throw (await (0, y.Cu)(3e3), g(!1), e);
              }
            };
          return (
            (0, h.useEffect)(() => {
              t &&
                (async () => {
                  try {
                    await k(), await A();
                  } catch (e) {
                    v.g.push({ children: (0, y.fh)(e), variant: "error" });
                  }
                  s();
                })();
            }, [t]),
            (0, a.jsx)(r.Y, {
              classNames: {
                base: "bg-transparent",
                wrapper: "backdrop-blur-[5px] bg-black/30",
                backdrop: "bg-black/0",
              },
              isOpen: t,
              size: "2xl",
              onClose: () => {
                u || f || (x(1), j(!1), N(!1), s());
              },
              children: (0, a.jsxs)(i.g, {
                className:
                  "bg-[#242426] border border-[#5D5D60] rounded-2xl mx-4",
                children: [
                  (0, a.jsx)(l.c, {
                    className:
                      "flex justify-center items-center px-6 py-4 border-b border-[#4A4A4C]",
                    children: (0, a.jsx)("h2", {
                      className: "text-2xl font-bold",
                      children: "Launch Process",
                    }),
                  }),
                  (0, a.jsxs)(n.h, {
                    className: "py-6",
                    children: [
                      (0, a.jsx)("div", {
                        className: "w-full bg-white/10 rounded-full h-2 mb-6",
                        children: (0, a.jsx)("div", {
                          className:
                            "bg-[#57F76B] h-2 rounded-full transition-all duration-500 ease-in-out",
                          style: { width: "".concat((m - 1) * 50, "%") },
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "p-4 rounded-lg border-1 ".concat(
                              1 === m
                                ? "border-[#57F76B] bg-[#57F76B]/10"
                                : b
                                ? "border-[#57F76B] bg-[#57F76B]/20"
                                : "border-white/20 bg-white/5"
                            ),
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ".concat(
                                        b
                                          ? "bg-[#57F76B] text-black"
                                          : 1 === m
                                          ? "bg-[#57F76B] text-black"
                                          : "bg-white/20 text-white"
                                      ),
                                    children: b ? "✓" : "1",
                                  }),
                                  (0, a.jsx)("h3", {
                                    className: "text-lg font-semibold ".concat(
                                      b
                                        ? "text-[#57F76B]"
                                        : 1 === m
                                        ? "text-[#57F76B]"
                                        : "text-white"
                                    ),
                                    children: d
                                      ? "Update Agent"
                                      : "Create Agent",
                                  }),
                                  u &&
                                    (0, a.jsx)("div", {
                                      className: "ml-auto",
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "w-5 h-5 border-2 border-white/20 border-t-[#57F76B] rounded-full animate-spin",
                                      }),
                                    }),
                                  b &&
                                    !u &&
                                    (0, a.jsx)("div", {
                                      className:
                                        "ml-auto text-[#57F76B] text-lg",
                                      children: "✓",
                                    }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className: "text-neutral-300 text-sm",
                                children: b
                                  ? d
                                    ? "Agent updated successfully!"
                                    : "Agent created successfully!"
                                  : d
                                  ? "Updating your AI agent..."
                                  : "Creating your AI agent on the blockchain...",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "p-4 rounded-lg border-1 ".concat(
                              2 === m
                                ? "border-[#57F76B] bg-[#57F76B]/10"
                                : w
                                ? "border-[#57F76B] bg-[#57F76B]/20"
                                : "border-white/20 bg-white/5"
                            ),
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ".concat(
                                        w
                                          ? "bg-[#57F76B] text-black"
                                          : 2 === m
                                          ? "bg-[#57F76B] text-black"
                                          : "bg-white/20 text-white"
                                      ),
                                    children: w ? "✓" : "2",
                                  }),
                                  (0, a.jsx)("h3", {
                                    className: "text-lg font-semibold ".concat(
                                      w
                                        ? "text-[#57F76B]"
                                        : 2 === m
                                        ? "text-[#57F76B]"
                                        : "text-white"
                                    ),
                                    children: d
                                      ? "Buy/Update Utilities"
                                      : "Buy Utilities",
                                  }),
                                  f &&
                                    (0, a.jsx)("div", {
                                      className: "ml-auto",
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "w-5 h-5 border-2 border-white/20 border-t-[#57F76B] rounded-full animate-spin",
                                      }),
                                    }),
                                  w &&
                                    !f &&
                                    (0, a.jsx)("div", {
                                      className:
                                        "ml-auto text-[#57F76B] text-lg",
                                      children: "✓",
                                    }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className: "text-neutral-300 text-sm",
                                children: w
                                  ? "Utilities purchased successfully!"
                                  : "Purchasing utilities for your agent...",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }),
        A = (0, x.PA)((e) => {
          let {
              onNextStep: t,
              onGoBack: s,
              formValues: r,
              updateFormValues: i,
              mode: l,
              isEditMode: n,
            } = e,
            A = { ...j.gp };
          (l === f.CREATE_AGENT_MODES.EXIST_TOKEN || n) &&
            (A = { WBNB: 0, XCX: 0 });
          let [C, T] = (0, h.useState)("WBNB"),
            [E, I] = (0, h.useState)(!1),
            S = 0;
          for (let e of Object.keys(r.step4.utilities || {})) {
            let t = r.step4.utilities[e],
              s = j.jR[C],
              a = !1,
              i = 0;
            if (t.isEditMode) {
              var F;
              (null === (F = t.editInfo) || void 0 === F
                ? void 0
                : F.hasNewPurchase) &&
                t.quantity > 0 &&
                ((a = !0), (i = t.quantity));
            } else (a = !0), (i = t.quantity || 1);
            a && (S += (t.price[s] || 0) * i);
          }
          let P = A[C] + S,
            z = (0, x.iz)(() => ({
              isLoading: !1,
              balance: 0,
              isAutoTriggerBonding: !0,
            })),
            D = async (e, t) => {
              if (((z.balance = 0), "WBNB" === e)) {
                let e = await w.Zv.eth.getBalance(t.walletAddress);
                z.balance = Math.floor(1e5 * (0, y.GI)(e.toString(), 18)) / 1e5;
              } else {
                let s = await w.Ay.callContractFunc({
                  contractName: "ERC20",
                  functionName: "balanceOf",
                  params: [t.walletAddress],
                  options: { contractAddress: j.jR[e] },
                });
                z.balance = Math.floor(1e3 * (0, y.GI)(s.toString(), 18)) / 1e3;
              }
            };
          (0, h.useEffect)(() => {
            (async () => {
              if (N.A.account)
                try {
                  await D(C, N.A.account);
                } catch (e) {
                  console.log(e);
                }
            })();
          }, [C, N.A.account]);
          let B = async () => {
              if (r.step6.tokenAddress) return;
              let e = j.jR[r.step2.pairingToken],
                t = A[C],
                s = j.jR[C],
                a = w.Zv.utils.randomBytes(32),
                l = "",
                n = 0,
                o = 0,
                c = [];
              for (let e of r.step2.devVestingParams) o += e.devPercent;
              let d = 0;
              for (let e = 0; e < r.step2.devVestingParams.length; e++) {
                let t = r.step2.devVestingParams[e],
                  s = Math.floor(((t.devPercent / o) * 1e6) / 100);
                e === r.step2.devVestingParams.length - 1 && (s = 1e4 - d),
                  (d += s),
                  c.push({
                    devAddress: t.devAddress,
                    devPercent: s,
                    cliffPeriod: t.cliffPeriod * j.Bd,
                    vestingTime: t.vestingTime * j.Bd,
                    unlockPercent: Math.floor((1e4 * t.unlockPercent) / 100),
                  });
              }
              if ("XCX" === C) {
                var x;
                let e = await w.Ay.callContractFunc({
                  contractName: "ERC20",
                  functionName: "allowance",
                  params: [
                    null === (x = N.A.account) || void 0 === x
                      ? void 0
                      : x.walletAddress,
                    j.jR.CONTROLLER,
                  ],
                  options: { contractAddress: s },
                });
                m.gH
                  .from(e)
                  .lt(m.gH.from(w.Zv.utils.toWei(t.toString(), "ether"))) &&
                  (await w.Ay.sendContractFunc({
                    contractName: "ERC20",
                    functionName: "approve",
                    params: [
                      j.jR.CONTROLLER,
                      w.Zv.utils.toWei(t.toString(), "ether"),
                    ],
                    options: { contractAddress: s },
                  }));
              }
              for (;;) {
                try {
                  n++,
                    console.log({ tryCount: n }),
                    (a = w.Zv.utils.randomBytes(32));
                  let t = await w.Ay.callContractFunc({
                    contractName: "CONTROLLER",
                    functionName: "isSaltValid",
                    params: [e, r.step2.name, r.step2.ticker, a],
                  });
                  if (t.isValid) {
                    l = t.predicted;
                    break;
                  }
                } catch (e) {
                  console.log(e);
                }
                await (0, y.Cu)(1e3);
              }
              if (!l) throw Error("Something went wrong, please try again");
              await N.A.requestAccessToken();
              let u = {
                  name: r.step2.name,
                  symbol: r.step2.ticker,
                  decimals: 18,
                  totalSupply: 1e9,
                  image: r.step3.profilePicture,
                  desc: r.step3.bio,
                  socialLinks: r.step3.socials,
                  agentConfig: {
                    bio: r.step3.bio,
                    traits: r.step3.personalityTraits,
                    style: {
                      formal: r.step3.communicationStyle.formalCasual,
                      serious: r.step3.communicationStyle.seriousHumorous,
                      concise: r.step3.communicationStyle.conciseDetailed,
                      neutral: r.step3.communicationStyle.neutralOpinionated,
                    },
                    llm: r.step3.knowledgeBase,
                  },
                },
                h = (await (0, g.Lh)(u)).data.id;
              if (!h) throw Error("Something wrong, please try again later!");
              await w.Ay.sendContractFunc({
                contractName: "CONTROLLER",
                functionName: "createToken",
                params: [
                  e,
                  r.step2.name,
                  r.step2.ticker,
                  z.isAutoTriggerBonding,
                  a,
                  h,
                  Math.floor((1e4 * o) / 100).toString(),
                  c,
                ],
                options: {
                  value:
                    "WBNB" === C ? w.Zv.utils.toWei(t.toString(), "ether") : 0,
                },
              }),
                i("step6", { tokenAddress: l.toLowerCase() }),
                v.g.push({
                  children: "Influencer created successfully",
                  variant: "success",
                });
            },
            R = async () => {
              try {
                (z.isLoading = !0), await B(), null == t || t();
              } catch (e) {
                v.g.push({ children: (0, y.fh)(e), variant: "error" });
              }
              z.isLoading = !1;
            },
            L = async () => {
              if (!r.step6.tokenAddress)
                throw Error("Something went wrong, please try again");
              await N.A.requestAccessToken();
              let e = {
                token: r.step6.tokenAddress,
                image: r.step3.profilePicture,
                desc: r.step3.bio,
                socialLinks: r.step3.socials,
                agentConfig: {
                  bio: r.step3.bio,
                  traits: r.step3.personalityTraits,
                  style: {
                    formal: r.step3.communicationStyle.formalCasual,
                    serious: r.step3.communicationStyle.seriousHumorous,
                    concise: r.step3.communicationStyle.conciseDetailed,
                    neutral: r.step3.communicationStyle.neutralOpinionated,
                  },
                  llm: r.step3.knowledgeBase,
                },
              };
              await (0, g.U8)(e),
                v.g.push({
                  children: "Influencer updated successfully",
                  variant: "success",
                });
            },
            _ = async () => {
              try {
                (z.isLoading = !0), await L(), null == t || t();
              } catch (e) {
                v.g.push({ children: (0, y.fh)(e), variant: "error" });
              }
              z.isLoading = !1;
            },
            O = (e, t) => {
              let s = {};
              return (
                t.allowedFields &&
                  t.allowedFields.forEach((t) => {
                    void 0 !== e[t] && (s[t] = e[t]);
                  }),
                t.addFieldTransforms &&
                  Object.keys(t.addFieldTransforms).forEach((a) => {
                    s[a] = t.addFieldTransforms[a](e);
                  }),
                s
              );
            },
            V = (e, t, s) => {
              var a;
              let r = {};
              s.allowedFields &&
                s.allowedFields.forEach((t) => {
                  void 0 !== e[t] && (r[t] = e[t]);
                }),
                s.addFieldTransforms &&
                  Object.keys(s.addFieldTransforms).forEach((t) => {
                    r[t] = s.addFieldTransforms[t](e);
                  });
              let i = {};
              return (
                null === (a = t.changedFields) ||
                  void 0 === a ||
                  a.forEach((e) => {
                    void 0 !== r[e] && (i[e] = r[e]);
                  }),
                i
              );
            },
            q = (e) => {
              var t, s, a;
              return (
                (null === (t = e.editInfo) || void 0 === t
                  ? void 0
                  : t.hasConfigUpdates) &&
                (null === (a = e.editInfo) || void 0 === a
                  ? void 0
                  : null === (s = a.changedFields) || void 0 === s
                  ? void 0
                  : s.length) > 0
              );
            },
            X = {
              challenge: {
                allowedFields: [
                  "aiConfigs",
                  "msgPrice",
                  "duration",
                  "creatorFeePercentage",
                ],
                addFieldTransforms: {
                  feeToken: (e) =>
                    "TOKEN" === e.feeToken
                      ? r.step6.tokenAddress.toLowerCase()
                      : j.jR[e.feeToken],
                  duration: (e) =>
                    "STAGING" === j.xv ? 900 : 86400 * e.duration,
                },
              },
              "auto-x-post": {
                allowedFields: [
                  "quantity",
                  "aiConfigs",
                  "twitterCredentials",
                  "timeDiffSeconds",
                ],
              },
            },
            M = async () => {
              if (!r.step6.tokenAddress)
                throw Error(
                  "Something went wrong, please try purchase utilities manually later"
                );
              for (;;) {
                try {
                  if (
                    (await (0, g.mW)({ address: r.step6.tokenAddress })).address
                  )
                    break;
                } catch (e) {
                  console.log(e);
                }
                await (0, y.Cu)(3e3);
              }
              let e = j.jR[C];
              "TOKEN" === C && (e = r.step6.tokenAddress.toLowerCase());
              let s = r.step4.utilities,
                a = {},
                i = {};
              if (
                (Object.entries(s).forEach((e) => {
                  let [t, s] = e,
                    r = X[t] || {};
                  if (s.isEditMode) {
                    let e = s.editInfo;
                    (null == e ? void 0 : e.hasNewPurchase) &&
                      s.quantity > 0 &&
                      (a[t] = O(s, r)),
                      q(s) && (i[t] = V(s, e, r));
                  } else a[t] = O(s, r);
                }),
                Object.keys(i).length > 0 &&
                  (await (0, g.vq)({
                    token: r.step6.tokenAddress,
                    utilities: i,
                  }),
                  v.g.push({
                    children: "Utilities updated successfully!",
                    variant: "success",
                  })),
                Object.keys(a).length > 0)
              ) {
                await N.A.requestAccessToken();
                let t = await (0, g.T5)({
                  token: r.step6.tokenAddress,
                  payToken: e,
                  utilities: a,
                });
                if ("XCX" === C) {
                  var l;
                  let e = await w.Ay.callContractFunc({
                    contractName: "ERC20",
                    functionName: "allowance",
                    params: [
                      null === (l = N.A.account) || void 0 === l
                        ? void 0
                        : l.walletAddress,
                      j.jR.MARKETPLACE,
                    ],
                    options: { contractAddress: t.payToken },
                  });
                  m.gH.from(e).lt(m.gH.from(t.totalPayAmountAsWei)) &&
                    (await w.Ay.sendContractFunc({
                      contractName: "ERC20",
                      functionName: "approve",
                      params: [j.jR.MARKETPLACE, t.totalPayAmountAsWei],
                      options: { contractAddress: t.payToken },
                    }));
                }
                await w.Ay.sendContractFunc({
                  contractName: "MARKETPLACE",
                  functionName: "payBill",
                  params: [
                    t.token,
                    t.billId,
                    t.payToken,
                    t.totalPayAmountAsWei,
                    t.expiredAt,
                    t.signature,
                  ],
                  options: { value: "WBNB" === C ? t.totalPayAmountAsWei : 0 },
                }),
                  v.g.push({
                    children: "Utilities purchased successfully!",
                    variant: "success",
                  });
              }
              null == t || t();
            },
            U = async () => {
              try {
                if (
                  ((z.isLoading = !0),
                  await N.A.requestAccessToken(),
                  !r.step2.projectPitchFile)
                )
                  throw Error("Project pitch file is required");
                let e = await (0, g.a_)({
                    file: r.step2.projectPitchFile,
                    wallet: N.A.account.walletAddress,
                  }),
                  s = {
                    address: r.step2.tokenAddress,
                    projectPitch: e.data.publicUrl,
                    name: r.step2.name,
                    symbol: r.step2.ticker,
                    liquidityProvision: r.step2.liquidityProvision,
                    contactInfo: r.step2.contactInfo,
                    image: r.step3.profilePicture,
                    desc: r.step3.bio,
                    socialLinks: r.step3.socials,
                    agentConfig: {
                      bio: r.step3.bio,
                      traits: r.step3.personalityTraits,
                      style: {
                        formal: r.step3.communicationStyle.formalCasual,
                        serious: r.step3.communicationStyle.seriousHumorous,
                        concise: r.step3.communicationStyle.conciseDetailed,
                        neutral: r.step3.communicationStyle.neutralOpinionated,
                      },
                      llm: r.step3.knowledgeBase,
                    },
                  };
                (await (0, g.sv)(s)).data.id,
                  v.g.push({
                    children: "Influencer created successfully",
                    variant: "success",
                  }),
                  null == t || t();
              } catch (e) {
                v.g.push({ children: (0, y.fh)(e), variant: "error" });
              }
              z.isLoading = !1;
            },
            K = Object.keys(r.step4.utilities).length > 0;
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center ",
            children: [
              (0, a.jsxs)("div", {
                className: "w-full max-w-3xl flex flex-col bg-transparent",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex flex-col gap-4 bg-[#2C2C2E] rounded-2xl p-6 md:p-10",
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex flex-col gap-4 w-full justify-center items-center",
                      children: [
                        (0, a.jsxs)("h1", {
                          className: "text-xl font-bold",
                          children: [
                            "Create Token:",
                            " ",
                            (0, a.jsxs)("span", {
                              className: "text-[#57F76B]",
                              children: [r.step2.name, " $", r.step2.ticker],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex-1 flex flex-col gap-4 min-w-0 w-full",
                          children: [
                            (0, a.jsx)("div", {
                              className: "flex flex-col gap-4",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "bg-[#181A20] rounded-xl p-4 flex flex-col gap-2 border border-white/10",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center mb-2 gap-4",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-neutral-300 text-sm",
                                        children: "Balance",
                                      }),
                                      (0, a.jsxs)("span", {
                                        className:
                                          " text-white font-semibold text-base flex items-center gap-2",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            className:
                                              "text-right whitespace-nowrap",
                                            children: [
                                              (0, y.KT)(z.balance, 2),
                                              " ",
                                              C,
                                            ],
                                          }),
                                          (0, a.jsx)(o.d, {
                                            "aria-label": "Select token",
                                            classNames: {
                                              trigger:
                                                "bg-[#23223A] rounded px-2 py-1 text-xs border-white/10  text-white min-w-[60px]",
                                              base: "border border-white/10 rounded w-[100px]",
                                              listbox: "min-w-[100px]",
                                              popoverContent: "min-w-[100px]",
                                            },
                                            items: [
                                              { key: "WBNB", label: "BNB" },
                                              { key: "XCX", label: "XCX" },
                                            ],
                                            maxListboxHeight: 350,
                                            selectedKeys: [C],
                                            onSelectionChange: (e) => {
                                              let t = Array.from(e)[0];
                                              t && T(t);
                                            },
                                            children: (e) =>
                                              (0, a.jsx)(
                                                c.y,
                                                { children: e.label },
                                                e.key
                                              ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-1 text-xs",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "text-neutral-300",
                                            children: n
                                              ? "AI Influencer Update"
                                              : "AI Influencer Creation",
                                          }),
                                          (0, a.jsxs)("span", {
                                            className: "text-neutral-100",
                                            children: [
                                              (0, y.KT)(A[C], 2),
                                              " ",
                                              C,
                                            ],
                                          }),
                                        ],
                                      }),
                                      S > 0 &&
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex justify-between items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "text-neutral-300",
                                              children: "Utility Fee",
                                            }),
                                            (0, a.jsxs)("span", {
                                              className: "text-neutral-100",
                                              children: [
                                                (0, y.KT)(S, 2),
                                                " ",
                                                C,
                                              ],
                                            }),
                                          ],
                                        }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "border-t border-white/10 my-2",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between font-bold text-base",
                                        children: [
                                          (0, a.jsx)("span", {
                                            children: "Total",
                                          }),
                                          (0, a.jsxs)("span", {
                                            className: "text-[#57F76B]",
                                            children: [
                                              "~",
                                              (0, y.KT)(P, 2),
                                              " ",
                                              C,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            l === f.CREATE_AGENT_MODES.STANDARD &&
                              !n &&
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between bg-[#181A20] rounded-xl px-4 py-3 mb-2",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, a.jsx)("input", {
                                        checked: z.isAutoTriggerBonding,
                                        className: "accent-[#57F76B] w-5 h-5",
                                        type: "checkbox",
                                        onChange: (e) => {
                                          z.isAutoTriggerBonding =
                                            e.target.checked;
                                        },
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-white font-semibold",
                                        children: "Auto Start Bonding",
                                      }),
                                      (0, a.jsx)(d.I, {
                                        showArrow: !0,
                                        classNames: {
                                          base: "bg-[#23223A] border border-white/20 text-white",
                                          content: "text-sm p-3 max-w-xs",
                                        },
                                        content:
                                          "When enabled, bonding will automatically start immediately after token creation. This allows users to start trading your token right away. If disabled, you'll need to manually start bonding later.",
                                        placement: "top",
                                        children: (0, a.jsx)(p.TBY, {
                                          className:
                                            "w-5 h-5 text-neutral-400 cursor-help hover:text-white transition-colors",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-xs ".concat(
                                      z.isAutoTriggerBonding
                                        ? "text-[#57F76B] text-bold"
                                        : "text-neutral-400"
                                    ),
                                    children: z.isAutoTriggerBonding
                                      ? "ENABLED"
                                      : "DISABLED",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "w-full max-w-3xl mt-6 text-center text-white/50 pb-6",
                    children: [
                      (0, a.jsx)("div", { children: "[ DISCLAIMER ]" }),
                      (0, a.jsxs)("div", {
                        className: "text-neutral-400 text-sm",
                        children: [
                          "By creating this influencer, you confirm that it complies with our",
                          " ",
                          (0, a.jsx)("span", {
                            className: "text-white font-bold",
                            children: (0, a.jsx)("a", {
                              className: "text-white",
                              href: "/policies/term-of-use",
                              target: "_blank",
                              children: "Terms of Use",
                            }),
                          }),
                          " ",
                          "and you are responsible for its content and behavior. Once created, your influencer will be publicly accessible unless set to private mode.",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-center w-full max-w-3xl mt-8 gap-8",
                    children: [
                      (0, a.jsx)(b.r, {
                        className:
                          "px-4 flex gap-2 font-light text-lg shadow-lg hover:!bg-transparent hover:!text-[#57F76B]",
                        leftIcon: (0, a.jsx)(u.default, {
                          alt: "Back",
                          height: 25,
                          quality: 100,
                          src: "/images/backIconGreen.png",
                          width: 25,
                        }),
                        variant: "upload",
                        onPress: s,
                        children: "BACK",
                      }),
                      (0, a.jsx)(b.r, {
                        className:
                          "px-4 flex gap-2 font-light text-lg shadow-lg",
                        isLoading: z.isLoading,
                        leftIcon: (0, a.jsx)(u.default, {
                          alt: "Next",
                          height: 25,
                          quality: 100,
                          src: "/images/nextIcon.png",
                          width: 25,
                        }),
                        variant: "neon",
                        onPress:
                          l === f.CREATE_AGENT_MODES.STANDARD
                            ? () => {
                                K ? I(!0) : n ? _() : R();
                              }
                            : U,
                        children:
                          l === f.CREATE_AGENT_MODES.STANDARD
                            ? n
                              ? "UPDATE"
                              : "PAY AND LAUNCH"
                            : "LAUNCH",
                      }),
                    ],
                  }),
                ],
              }),
              E &&
                (0, a.jsx)(k, {
                  isEditMode: n,
                  isOpen: E,
                  onClose: () => I(!1),
                  onStep1Complete: n ? L : B,
                  onStep2Complete: M,
                }),
            ],
          });
        });
    },
    28964: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => p });
      var a = s(95155),
        r = s(58803),
        i = s.n(r),
        l = s(90908),
        n = s(5565),
        o = s(67396),
        c = s(12115),
        d = s(43500),
        m = s(18830),
        x = s(80667),
        u = s(93317),
        h = s(34373);
      let p = (0, l.PA)((e) => {
        let { formValues: t, mode: s, onNextStep: r, isEditMode: l } = e,
          [p, f] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(
            () => (
              (x.A.isShowGreenBg = !0),
              () => {
                x.A.isShowGreenBg = !1;
              }
            ),
            []
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "min-h-[calc(100vh-200px)] flex flex-col items-center",
                children: [
                  (0, a.jsx)("div", {
                    className: "w-full flex justify-center mt-28",
                    children: (0, a.jsx)("img", {
                      alt: "Xeleb Logo",
                      className: "w-[1000px] max-w-full",
                      src: "/images/congratulationText.png",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "jsx-5fa33874f4342d0c relative z-20 flex flex-col items-center text-center max-w-xl w-full px-4 mt-28",
                    children: [
                      (0, a.jsxs)("p", {
                        className:
                          "jsx-5fa33874f4342d0c text-base md:text-lg text-[#CFCFCF] mb-8",
                        children: [
                          "Your",
                          " ",
                          (0, a.jsx)("span", {
                            className:
                              "jsx-5fa33874f4342d0c text-[#57F76B] font-bold",
                            children: ""
                              .concat(t.step2.name, " $")
                              .concat(t.step2.ticker),
                          }),
                          " ",
                          s == d.CREATE_AGENT_MODES.EXIST_TOKEN
                            ? "Influencer has been successfully created and is now under review. Our team will contact you shortly with next steps."
                            : l
                            ? "Influencer has been successfully updated."
                            : "Influencer has been launched, Please wait 30 seconds for your influencer to start!",
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "jsx-5fa33874f4342d0c w-full flex justify-center mb-8",
                        children: (0, a.jsx)("div", {
                          className:
                            "jsx-5fa33874f4342d0c p-2 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-[5px]",
                          children: (0, a.jsx)(m.A, {
                            className: "border-dotted bg-none mt-0",
                            style: { marginTop: 0 },
                            children: (0, a.jsxs)("div", {
                              style:
                                s === d.CREATE_AGENT_MODES.EXIST_TOKEN
                                  ? { justifyContent: "center" }
                                  : {},
                              className:
                                "jsx-5fa33874f4342d0c flex items-center rounded-2xl min-w-[350px] max-w-full gap-8",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "jsx-5fa33874f4342d0c flex items-center gap-4",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "jsx-5fa33874f4342d0c rounded-xl overflow-hidden",
                                      children: (0, a.jsx)(n.default, {
                                        alt: t.step2.name,
                                        className: "rounded-xl object-cover",
                                        height: 80,
                                        quality: 100,
                                        src: t.step3.profilePicture,
                                        width: 80,
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "jsx-5fa33874f4342d0c flex-1 flex flex-col items-start justify-center min-w-0",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "jsx-5fa33874f4342d0c flex items-center gap-2 mb-1",
                                          children: (0, a.jsx)("span", {
                                            className:
                                              "jsx-5fa33874f4342d0c text-white text-lg font-semibold truncate",
                                            children: t.step2.name,
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "jsx-5fa33874f4342d0c flex items-center gap-2",
                                          children: (0, a.jsxs)("span", {
                                            className:
                                              "jsx-5fa33874f4342d0c text-[#A3A3A3] text-base font-medium tracking-widest",
                                            children: ["$", t.step2.ticker],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s === d.CREATE_AGENT_MODES.STANDARD
                                  ? (0, a.jsx)("div", {
                                      className:
                                        "jsx-5fa33874f4342d0c flex justify-end gap-4 flex-1",
                                      children: (0, a.jsx)(u.r, {
                                        as: o.default,
                                        href: "/token/".concat(
                                          t.step6.tokenAddress
                                        ),
                                        rel: "noopener noreferrer",
                                        variant: "upload",
                                        children: "View Details",
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsx)(i(), {
                        id: "5fa33874f4342d0c",
                        children:
                          "@-webkit-keyframes gradient-border{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient-border{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient-border{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient-border{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.animate-gradient.jsx-5fa33874f4342d0c{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-border 3s ease infinite;-moz-animation:gradient-border 3s ease infinite;-o-animation:gradient-border 3s ease infinite;animation:gradient-border 3s ease infinite}",
                      }),
                      s === d.CREATE_AGENT_MODES.EXIST_TOKEN
                        ? (0, a.jsx)(u.r, {
                            as: o.default,
                            className: "text-sm mb-6 px-4 shadow-lg font-light",
                            href: "/",
                            leftIcon: (0, a.jsx)(n.default, {
                              alt: "Next",
                              height: 30,
                              quality: 100,
                              src: "/images/nextIcon.png",
                              width: 30,
                            }),
                            rel: "noopener noreferrer",
                            variant: "neon",
                            children: "GO TO MARKETPLACE",
                          })
                        : null,
                      (0, a.jsx)("p", {
                        className:
                          "jsx-5fa33874f4342d0c text-white text-2xl mb-4",
                        children: "Share your creation",
                      }),
                      (0, a.jsxs)("button", {
                        "aria-label": "Share",
                        tabIndex: 0,
                        onClick: () => {
                          f(!0);
                        },
                        onKeyDown: (e) => {
                          ("Enter" === e.key || " " === e.key) &&
                            (e.preventDefault(), f(!0));
                        },
                        className:
                          "jsx-5fa33874f4342d0c px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 text-xs transition-colors bg-white/10 text-white border border-white/20 backdrop-blur-md backdrop-saturate-150 shadow-sm hover:bg-white/15 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                        children: [
                          (0, a.jsx)("img", {
                            alt: "Share",
                            src: "/images/share.svg",
                            className: "jsx-5fa33874f4342d0c h-5 w-5 invert",
                          }),
                          (0, a.jsx)("p", {
                            className: "jsx-5fa33874f4342d0c text-lg ml-1",
                            children: "SHARE",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(h.A, {
                isOpen: p,
                token: {
                  name: t.step2.name,
                  symbol: t.step2.ticker,
                  address: t.step6.tokenAddress,
                  images: [t.step3.profilePicture],
                },
                onClose: () => f(!1),
              }),
            ],
          })
        );
      });
    },
    43500: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          CREATE_AGENT_MODES: () => ee,
          PAIRING_TOKEN_OPTIONS: () => et,
          default: () => ea,
          defaultFormValues: () => es,
        });
      var a = s(95155),
        r = s(90908),
        i = s(12115),
        l = s(5565),
        n = s(93317);
      let o = (0, r.PA)((e) => {
        let { onNextStep: t } = e;
        return (0, a.jsx)("div", {
          className: "",
          children: (0, a.jsxs)("div", {
            className:
              "min-h-[calc(100vh-200px)] flex flex-col items-center mt-28",
            children: [
              (0, a.jsx)("img", {
                alt: "Launch Your AI Influencer",
                className: "w-[1000px] max-w-full",
                src: "/images/launchAIText.png",
              }),
              (0, a.jsxs)("div", {
                className:
                  "relative z-20 flex flex-col items-center text-center max-w-2xl w-full px-4 mt-10",
                children: [
                  (0, a.jsxs)("p", {
                    className: "text-base md:text-lg text-[#CFCFCF] mb-8",
                    children: [
                      "Create your AI Influencer by completing the form below.",
                      (0, a.jsx)("br", {}),
                      "Your AI Influencer's token will be initialized as a BEP-20 token and can be traded on the Xeleb Protocol. It will launch on PancakeSwap once the funding is successful and the launch milestone is reached.",
                      (0, a.jsx)("span", {
                        className: "block mt-2",
                        children: "Your journey with AI starts here!",
                      }),
                    ],
                  }),
                  (0, a.jsx)(n.r, {
                    className: "h-14 text-lg mb-6 shadow-lg font-light",
                    leftIcon: (0, a.jsx)(l.default, {
                      alt: "Next",
                      height: 30,
                      quality: 100,
                      src: "/images/nextIcon.png",
                      width: 30,
                    }),
                    variant: "neon",
                    onPress: t,
                    children: "BUILD NOW",
                  }),
                  (0, a.jsxs)("p", {
                    className: "text-xs text-[#A3A3A3] mt-2",
                    children: [
                      "By continuing, you agree to our",
                      " ",
                      (0, a.jsx)("a", {
                        className:
                          "underline hover:text-[#B2FF6A] transition-colors font-bold",
                        href: "/policies/term-of-use",
                        target: "_blank",
                        children: "Terms of Use",
                      }),
                      " ",
                      "and",
                      " ",
                      (0, a.jsx)("a", {
                        className:
                          "underline hover:text-[#B2FF6A] transition-colors font-bold",
                        href: "/policies/privacy",
                        target: "_blank",
                        children: "Privacy Policy",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      });
      var c = s(4637),
        d = s(6983),
        m = s(80795),
        x = s(85060),
        u = s(86659),
        h = s(14081),
        p = s(79715),
        f = s(38684),
        g = s(62338),
        b = s(69606),
        v = s(43415),
        j = s(70719),
        w = s.n(j),
        N = s(77594),
        y = s(20764),
        k = s(89683),
        A = s(13186),
        C = s(87412);
      let T = (0, r.PA)((e) => {
        var t, s;
        let {
            control: l,
            errors: n,
            setValue: o,
            mode: c,
            watch: d,
            tokenAddress: m,
            layout: x = "grid",
          } = e,
          u = d("name");
        d("ticker");
        let h = (0, r.iz)(() => ({
            isLoadingTicker: !1,
            loadingTickerError: "",
            nameCheckError: "",
            tickerCheckError: "",
          })),
          [p, f] = (0, i.useState)(!1),
          [g, v] = (0, i.useState)(!1),
          j = (0, i.useMemo)(
            () =>
              w()(async (e, t) => {
                v(!0), f(!0), (e.loadingTickerError = "");
                try {
                  if (t && y.Zv.utils.isAddress(t.toLowerCase())) {
                    let e = await y.Ay.multiCallContractFunc({
                      items: [
                        {
                          contractName: "ERC20",
                          functionName: "name",
                          params: [],
                          contractAddress: t,
                        },
                        {
                          contractName: "ERC20",
                          functionName: "symbol",
                          params: [],
                          contractAddress: t,
                        },
                      ],
                    });
                    o("name", e[0], { shouldValidate: !0 }),
                      o("ticker", e[1], { shouldValidate: !0 });
                  }
                } catch (t) {
                  console.error(t),
                    (e.loadingTickerError =
                      "Cannot load token name and symbol"),
                    o("name", ""),
                    o("ticker", "");
                }
                (e.isLoadingTicker = !1), v(!1), f(!1);
              }, 1e3),
            [o]
          );
        (0, i.useEffect)(() => {
          (async () => {
            m && c === ee.EXIST_TOKEN && ((h.isLoadingTicker = !0), j(h, m));
          })();
        }, [m, c, j]);
        let T = async (e) => {
            if ((f(!0), !e)) {
              (h.nameCheckError = ""), f(!1);
              return;
            }
            if (e.length > 20) {
              (h.nameCheckError = "Name must be 20 characters or less"), f(!1);
              return;
            }
            try {
              (await (0, A.Hw)({ name: e }))
                ? (h.nameCheckError =
                    "This name already exists. Please choose another.")
                : (h.nameCheckError = "");
            } catch (e) {
              h.nameCheckError = "Failed to check name. Please try again.";
            } finally {
              f(!1);
            }
          },
          E = (0, C.d)(T, 700),
          I = async (e) => {
            if ((v(!0), !e)) {
              (h.tickerCheckError = ""), v(!1);
              return;
            }
            if (e.length > 10) {
              (h.tickerCheckError = "Ticker must be 10 characters or less"),
                v(!1);
              return;
            }
            try {
              (await (0, A.cH)({ symbol: e }))
                ? (h.tickerCheckError =
                    "This ticker already exists. Please choose another.")
                : (h.tickerCheckError = "");
            } catch (e) {
              h.tickerCheckError = "Failed to check ticker. Please try again.";
            } finally {
              v(!1);
            }
          },
          S = (0, C.d)(I, 700),
          F = c === ee.EXIST_TOKEN;
        return (0, a.jsxs)("div", {
          className:
            "grid" === x
              ? "grid grid-cols-1 md:grid-cols-2 gap-4"
              : "flex flex-col gap-4",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center justify-between gap-2",
                  children: (0, a.jsx)("label", {
                    className: "text-white font-semibold",
                    children: "Name",
                  }),
                }),
                (0, a.jsx)(b.xI, {
                  control: l,
                  name: "name",
                  render: (e) => {
                    let { field: t } = e;
                    return (0, a.jsx)(k.w, {
                      disabled: F,
                      ...t,
                      classNames: {
                        input: h.isLoadingTicker
                          ? "bg-black/30 border-white/20 text-white/50 placeholder:text-neutral-400 animate-pulse"
                          : F
                          ? "bg-black/20 border-white/10 text-white/50 placeholder:text-neutral-500"
                          : "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                      },
                      endContent: p
                        ? (0, a.jsx)(N.A, {
                            className: "animate-spin w-4 h-4 text-blue-400",
                          })
                        : void 0,
                      maxLength: 20,
                      placeholder: h.isLoadingTicker
                        ? "Loading..."
                        : "Enter name",
                      onChange: (e) => {
                        t.onChange(e), F || (f(!0), E(e.target.value));
                      },
                    });
                  },
                }),
                (n.name ||
                  h.loadingTickerError ||
                  h.nameCheckError ||
                  (u && u.length > 20)) &&
                  (0, a.jsx)("span", {
                    className: "text-red-400 text-xs",
                    children: [
                      null === (t = n.name) || void 0 === t
                        ? void 0
                        : t.message,
                      h.loadingTickerError,
                      h.nameCheckError,
                    ]
                      .filter((e, t, s) => e && s.indexOf(e) === t)
                      .join(" "),
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, a.jsx)("label", {
                  className: "text-white font-semibold",
                  children: "Ticker",
                }),
                (0, a.jsx)(b.xI, {
                  control: l,
                  name: "ticker",
                  render: (e) => {
                    let { field: t } = e;
                    return (0, a.jsx)(k.w, {
                      disabled: F,
                      ...t,
                      classNames: {
                        input: F
                          ? "bg-black/20 border-white/10 text-white/50 placeholder:text-neutral-500"
                          : "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                      },
                      endContent: g
                        ? (0, a.jsx)(N.A, {
                            className: "animate-spin w-4 h-4 text-blue-400",
                          })
                        : void 0,
                      maxLength: 10,
                      placeholder: "Enter ticker",
                      onChange: (e) => {
                        let s = e.target.value.toUpperCase();
                        t.onChange(s), F || (v(!0), S(s));
                      },
                    });
                  },
                }),
                (n.ticker || h.tickerCheckError) &&
                  (0, a.jsx)("span", {
                    className: "text-red-400 text-xs",
                    children: [
                      null === (s = n.ticker) || void 0 === s
                        ? void 0
                        : s.message,
                      h.tickerCheckError,
                    ]
                      .filter((e, t, s) => e && s.indexOf(e) === t)
                      .join(" "),
                  }),
              ],
            }),
          ],
        });
      });
      var E = s(43414),
        I = s(23947),
        S = s(72026),
        F = s(93038),
        P = s(82935),
        z = s(26743),
        D = s(32895);
      let B = (e) => {
        let {
          fields: t,
          totalDevPercent: s,
          handleRemove: r,
          openModal: i,
        } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "flex flex-col pt-2",
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsxs)("div", {
                  className:
                    "flex justify-between md:items-center flex-col md:flex-row gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-[#59FF7F] font-semibold text-lg",
                          children: "Developer Share",
                        }),
                        (0, a.jsxs)("span", {
                          className: "text-white/70 text-sm",
                          children: [
                            "".concat(
                              0 === t.length
                                ? "No developer share set. "
                                : "".concat(
                                    t.length,
                                    " devevelopers share set. "
                                  ),
                              "Total: "
                            ),
                            (0, a.jsxs)("span", {
                              className: "text-white font-semibold",
                              children: [s, "%"],
                            }),
                            (0, a.jsx)("span", { children: " (max 15%)" }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(n.r, {
                        className:
                          s < 15
                            ? "border-[#59FF7F] text-[#59FF7F] hover:bg-[#59FF7F]/10"
                            : "",
                        disabled: s >= 15,
                        variant: "bordered",
                        onPress: i,
                        children: "Add a Dev Share",
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsx)("div", {
                  className: "overflow-x-auto",
                  children:
                    0 === t.length
                      ? null
                      : (0, a.jsxs)(E.j, {
                          "aria-label": "Dev Team Vesting Table",
                          classNames: {
                            wrapper:
                              "bg-[#242426] min-w-[600px] md:min-w-full text-xs text-left text-neutral-300 p-0 mt-5 border border-[#454548]",
                            th: "bg-[#242426] text-xs uppercase text-neutral-400 px-2 py-2 md:px-4 md:py-3 first:rounded-tl-lg last:rounded-tr-lg",
                            td: "px-2 py-2 md:px-4 md:py-3 text-white",
                            tr: "border-b border-[#454548] last:border-0",
                          },
                          children: [
                            (0, a.jsxs)(I.X, {
                              children: [
                                (0, a.jsx)(S.e, { children: "Address" }),
                                (0, a.jsx)(S.e, { children: "Percent" }),
                                (0, a.jsx)(S.e, { children: "Cliff (mo)" }),
                                (0, a.jsx)(S.e, { children: "Vesting (mo)" }),
                                (0, a.jsx)(S.e, { children: "Unlock %" }),
                                (0, a.jsx)(S.e, { children: "" }),
                              ],
                            }),
                            (0, a.jsx)(F.E, {
                              children: t.map((e, t) =>
                                (0, a.jsxs)(
                                  P.s,
                                  {
                                    children: [
                                      (0, a.jsx)(z.w, {
                                        className:
                                          "font-mono text-neutral-400 max-w-[120px] truncate",
                                        title: e.devAddress,
                                        children: (0, D.uV)(e.devAddress, 4, 4),
                                      }),
                                      (0, a.jsxs)(z.w, {
                                        children: [e.devPercent, "%"],
                                      }),
                                      (0, a.jsx)(z.w, {
                                        children: e.cliffPeriod,
                                      }),
                                      (0, a.jsx)(z.w, {
                                        children: e.vestingTime,
                                      }),
                                      (0, a.jsxs)(z.w, {
                                        children: [e.unlockPercent, "%"],
                                      }),
                                      (0, a.jsx)(z.w, {
                                        children: (0, a.jsx)("button", {
                                          className:
                                            "text-black bg-white px-2 py-1 rounded-full",
                                          type: "button",
                                          onClick: () => r(t),
                                          children: "Delete",
                                        }),
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                            }),
                          ],
                        }),
                }),
              }),
            ],
          }),
        });
      };
      var R = s(14688),
        L = s(1661),
        _ = s(27657),
        O = s(93248),
        V = s(47058);
      let q = (e) => {
        let {
          isOpen: t,
          onClose: s,
          onConfirm: r,
          modalForm: i,
          maxDevPercent: l,
          modalError: o,
          onModalChange: c,
        } = e;
        return (0, a.jsx)(R.Y, {
          className: "z-[100]",
          classNames: {
            base: "bg-transparent",
            wrapper: "backdrop-blur-[5px] bg-black/30",
            backdrop: "bg-black/0",
          },
          isOpen: t,
          placement: "center",
          scrollBehavior: "inside",
          shouldBlockScroll: !1,
          onOpenChange: s,
          children: (0, a.jsxs)(L.g, {
            className:
              "bg-[#39393C] border border-[#5D5D60] rounded-2xl max-w-[500px] mx-4",
            children: [
              (0, a.jsx)(_.c, {
                className:
                  "flex justify-center items-center px-6 py-4 border-b border-[#4A4A4C]",
                children: (0, a.jsx)("span", {
                  className: "text-[#57F76B] text-lg font-medium text-center",
                  children: "Add Dev Share",
                }),
              }),
              (0, a.jsxs)(O.h, {
                className: "px-6 py-6 space-y-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-white text-sm font-medium mb-3",
                            children: "Develover Wallet Address",
                          }),
                          (0, a.jsx)(k.w, {
                            placeholder: "0x000...",
                            value: i.devAddress,
                            onChange: (e) => c("devAddress", e.target.value),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                              (0, a.jsx)("label", {
                                className: "text-white text-sm font-medium",
                                children: "Developer Percent",
                              }),
                              (0, a.jsxs)("span", {
                                className: "text-[#FFE38F] text-sm font-light",
                                children: [i.devPercent, "% total supply"],
                              }),
                            ],
                          }),
                          (0, a.jsx)(V.f, {
                            className:
                              "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FFE38F] [&_.slider-track]:to-[#00D4AA] [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#4A4A4C]",
                            max: l,
                            min: 0.5,
                            step: 0.5,
                            value: i.devPercent,
                            onChange: (e) => c("devPercent", e),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                              (0, a.jsx)("label", {
                                className: "text-white text-sm font-medium",
                                children: "Cliff Period",
                              }),
                              (0, a.jsxs)("span", {
                                className: "text-[#FFE38F] text-sm font-light",
                                children: [
                                  i.cliffPeriod,
                                  " month",
                                  1 !== i.cliffPeriod ? "s" : "",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(V.f, {
                            className:
                              "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FFE38F] [&_.slider-track]:to-[#00D4AA] [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#4A4A4C]",
                            max: 12,
                            min: 0,
                            step: 1,
                            value: i.cliffPeriod,
                            onChange: (e) => c("cliffPeriod", e),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                              (0, a.jsx)("label", {
                                className: "text-white text-sm font-medium",
                                children:
                                  "Vesting Time (Start at finish Bonding Curve with Cliff Period)",
                              }),
                              (0, a.jsxs)("span", {
                                className: "text-[#FFE38F] text-sm font-light",
                                children: [
                                  i.vestingTime,
                                  " month",
                                  1 !== i.vestingTime ? "s" : "",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(V.f, {
                            className:
                              "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FFE38F] [&_.slider-track]:to-[#00D4AA] [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#4A4A4C]",
                            max: 24,
                            min: 1,
                            step: 1,
                            value: i.vestingTime,
                            onChange: (e) => c("vestingTime", e),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                              (0, a.jsx)("label", {
                                className: "text-white text-sm font-medium",
                                children: "Unlock Percent",
                              }),
                              (0, a.jsxs)("span", {
                                className: "text-[#FFE38F] text-sm font-light",
                                children: [i.unlockPercent, "%"],
                              }),
                            ],
                          }),
                          (0, a.jsx)(V.f, {
                            className:
                              "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FFE38F] [&_.slider-track]:to-[#00D4AA] [&_.slider-thumb]:bg-white [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-[#4A4A4C]",
                            max: 100,
                            min: 0,
                            step: 1,
                            value: i.unlockPercent,
                            onChange: (e) => c("unlockPercent", e),
                          }),
                        ],
                      }),
                      o &&
                        (0, a.jsx)("div", {
                          className:
                            "text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-700",
                          children: o,
                        }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, a.jsx)(n.r, {
                      variant: "neon",
                      onClick: r,
                      children: (0, a.jsx)("span", {
                        className: "font-medium",
                        children: "CONFIRM",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var X = s(95408);
      let M = v.z.object({
          devAddress: v.z.string().min(1, "Dev address is required"),
          devPercent: v.z
            .number()
            .min(0.01, "Dev percent must be greater than 0"),
          cliffPeriod: v.z.number().min(0, "Cliff period must be 0 or more"),
          vestingTime: v.z.number().min(1, "Vesting time must be at least 1"),
          unlockPercent: v.z
            .number()
            .min(0, "Unlock percent must be 0 or more"),
        }),
        U = v.z.object({
          name: v.z
            .string()
            .min(1, "Name is required")
            .max(20, "Name must be 20 characters or less")
            .superRefine(async (e, t) => {
              e &&
                (await (0, A.Hw)({ name: e })) &&
                t.addIssue({
                  code: v.z.ZodIssueCode.custom,
                  message: "This name already exists. Please choose another.",
                });
            }),
          ticker: v.z
            .string()
            .min(1, "Ticker is required")
            .min(3, "Ticker must be at least 3 characters")
            .max(10, "Ticker must be 10 characters or less")
            .refine((e) => e === e.toUpperCase(), {
              message: "Ticker must be uppercase",
            })
            .superRefine(async (e, t) => {
              e &&
                (await (0, A.cH)({ symbol: e })) &&
                t.addIssue({
                  code: v.z.ZodIssueCode.custom,
                  message: "This ticker already exists. Please choose another.",
                });
            }),
          pairingToken: v.z.string().min(1, "Pairing token is required"),
          devVestingParams: v.z.array(M),
        }),
        K = v.z.object({
          tokenAddress: v.z
            .string()
            .min(1, "Token contract address is required")
            .regex(/^0x[a-fA-F0-9]{40}$/, "Invalid contract address format"),
          name: v.z
            .string()
            .min(1, "Name is required")
            .superRefine(async (e, t) => {
              e &&
                (await (0, A.Hw)({ name: e })) &&
                t.addIssue({
                  code: v.z.ZodIssueCode.custom,
                  message: "This name already exists. Please choose another.",
                });
            }),
          ticker: v.z
            .string()
            .min(1, "Ticker is required")
            .superRefine(async (e, t) => {
              e &&
                (await (0, A.cH)({ symbol: e })) &&
                t.addIssue({
                  code: v.z.ZodIssueCode.custom,
                  message: "This ticker already exists. Please choose another.",
                });
            }),
          projectPitchFile: v.z
            .any()
            .refine((e) => null != e, {
              message: "Project pitch file is required",
            }),
          liquidityProvision: v.z
            .number()
            .min(1, "Liquidity provision must be greater than 0"),
          contactInfo: v.z.string().email("Please enter a valid email address"),
        }),
        W = (e) => {
          if (!e)
            return (0, a.jsx)(u.A, { className: "text-neutral-400", size: 24 });
          let t = e.type;
          return t.includes("pdf")
            ? (0, a.jsx)(h.A, { className: "text-red-400", size: 24 })
            : t.includes("word")
            ? (0, a.jsx)(h.A, { className: "text-blue-400", size: 24 })
            : t.startsWith("image/")
            ? (0, a.jsx)(p.A, { className: "text-green-400", size: 24 })
            : (0, a.jsx)(u.A, { className: "text-neutral-400", size: 24 });
        },
        H = (0, r.PA)((e) => {
          var t, s, r, o, u, h, p, v, j, w;
          let {
              onNextStep: N,
              mode: A,
              changeMode: C,
              formValues: E,
              updateFormValues: I,
            } = e,
            [S, F] = (0, i.useState)(!1),
            [P, z] = (0, i.useState)({
              devAddress: "",
              devPercent: 0.5,
              cliffPeriod: 0,
              vestingTime: 1,
              unlockPercent: 0,
            }),
            [D, R] = (0, i.useState)(""),
            [L, _] = (0, i.useState)(!1),
            O = (0, b.mN)({
              resolver: (0, x.u)(U),
              defaultValues: {
                name:
                  (null == E
                    ? void 0
                    : null === (t = E.step2) || void 0 === t
                    ? void 0
                    : t.name) || "",
                ticker:
                  (null == E
                    ? void 0
                    : null === (s = E.step2) || void 0 === s
                    ? void 0
                    : s.ticker) || "",
                pairingToken:
                  (null == E
                    ? void 0
                    : null === (r = E.step2) || void 0 === r
                    ? void 0
                    : r.pairingToken) || "WBNB",
                devVestingParams:
                  (null == E
                    ? void 0
                    : null === (o = E.step2) || void 0 === o
                    ? void 0
                    : o.devVestingParams) || [],
              },
            }),
            V = (0, b.mN)({
              resolver: (0, x.u)(K),
              defaultValues: {
                tokenAddress:
                  (null == E
                    ? void 0
                    : null === (u = E.step2) || void 0 === u
                    ? void 0
                    : u.tokenAddress) || "",
                name:
                  (null == E
                    ? void 0
                    : null === (h = E.step2) || void 0 === h
                    ? void 0
                    : h.name) || "",
                ticker:
                  (null == E
                    ? void 0
                    : null === (p = E.step2) || void 0 === p
                    ? void 0
                    : p.ticker) || "",
                projectPitchFile:
                  (null == E
                    ? void 0
                    : null === (v = E.step2) || void 0 === v
                    ? void 0
                    : v.projectPitchFile) || null,
                liquidityProvision:
                  (null == E
                    ? void 0
                    : null === (j = E.step2) || void 0 === j
                    ? void 0
                    : j.liquidityProvision) || 0,
                contactInfo:
                  (null == E
                    ? void 0
                    : null === (w = E.step2) || void 0 === w
                    ? void 0
                    : w.contactInfo) || "",
              },
            }),
            {
              fields: M,
              append: H,
              remove: G,
            } = (0, b.jz)({ control: O.control, name: "devVestingParams" }),
            Z = M.reduce((e, t) => e + t.devPercent, 0),
            $ = (0, i.useMemo)(
              () => (e) => {
                if (e && e[0]) {
                  let t = e[0];
                  V.setValue("projectPitchFile", t, { shouldValidate: !0 });
                }
              },
              [V]
            ),
            {
              getRootProps: Y,
              getInputProps: Q,
              isDragActive: J,
            } = (0, g.VB)({
              onDrop: $,
              accept: {
                "application/pdf": [".pdf"],
                "application/msword": [".doc"],
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                  [".docx"],
                "image/jpeg": [".jpg", ".jpeg"],
                "image/png": [".png"],
              },
              maxFiles: 1,
              maxSize: 0xa00000,
              multiple: !1,
            }),
            es = (e) => {
              null == I || I("step2", { ...e, mode: ee.STANDARD }), N();
            },
            ea = (e) => {
              let t = V.watch("projectPitchFile");
              null == I ||
                I("step2", { ...e, mode: ee.EXIST_TOKEN, projectPitchFile: t }),
                N();
            };
          return (0, a.jsxs)("div", {
            className: "min-h-[calc(100vh-200px)] flex flex-col items-center",
            children: [
              (0, a.jsx)("div", {
                className:
                  "w-full max-w-4xl bg-[#242426] border border-white/10 rounded-2xl p-8",
                children: (0, a.jsxs)("div", {
                  className: "flex flex-col gap-4 w-full",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-[#57F76B] text-xl font-medium",
                      children: "Tokenize Setup",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "cursor-pointer rounded-2xl p-6 border transition-all relative shadow-lg border-[#5D5D60] ".concat(
                          A === ee.STANDARD ? "bg-[#39393C]" : ""
                        ),
                      onClick: () => {
                        C(ee.STANDARD);
                      },
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center relative z-10",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "w-4 h-4 min-w-4 min-h-4 aspect-square rounded-full border-2 mr-3 flex items-center justify-center transition-all flex-shrink-0 ".concat(
                                  A === ee.STANDARD
                                    ? "border-[#59FF7F] bg-[#59FF7F]"
                                    : "border-[#59FF7F] bg-transparent"
                                ),
                              children:
                                A === ee.STANDARD &&
                                (0, a.jsx)("span", {
                                  className:
                                    "w-2 h-2 bg-black rounded-full block",
                                }),
                            }),
                            (0, a.jsx)("span", {
                              className: "font-bold text-lg text-white",
                              children:
                                "Create a Token to launch your AI Influencer",
                            }),
                          ],
                        }),
                        A === ee.STANDARD &&
                          (0, a.jsxs)("div", {
                            className: "relative z-10 space-y-4 mt-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-2xl bg-[#454548] backdrop-blur-md px-6 py-3 flex flex-col gap-x-6 gap-y-1 text-sm text-white/90 mb-4 border border-white/15",
                                children: [
                                  (0, a.jsxs)("span", {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Tokenomics:",
                                      }),
                                      " Public Sale 65%",
                                      (0, a.jsx)("span", {
                                        className: "mx-2",
                                        children: "|",
                                      }),
                                      "Liquidity Pool 15%",
                                    ],
                                  }),
                                  (0, a.jsxs)("span", {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Mechanism:",
                                      }),
                                      " Launch a brand new token directly.",
                                    ],
                                  }),
                                  (0, a.jsxs)("span", {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Fee:",
                                      }),
                                      " ",
                                      X.gp.WBNB,
                                      " BNB or",
                                      " ",
                                      X.gp.XCX,
                                      " XCX non-refundable creation fee.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)(T, {
                                control: O.control,
                                errors: O.formState.errors,
                                layout: "grid",
                                mode: A,
                                setValue: O.setValue,
                                watch: O.watch,
                              }),
                              (0, a.jsx)(c.y, {}),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between w-full gap-1 rounded-xl flex-col md:flex-row",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-white font-semibold text-sm",
                                        children: "Select the Pairing Token",
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-neutral-400 text-xs mt-1",
                                        children:
                                          "This token will be used to swap for your token in trading.",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-[#FFD166] text-xs",
                                        children:
                                          "Use $XCX for lower trading fees.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex items-center gap-2 mt-1",
                                    children: (0, a.jsx)(b.xI, {
                                      control: O.control,
                                      name: "pairingToken",
                                      render: (e) => {
                                        let { field: t } = e;
                                        return (0, a.jsx)(d.d, {
                                          "aria-label": "Select pairing token",
                                          classNames: {
                                            trigger:
                                              "rounded-xl px-4 py-2 text-base border border-white/20 text-white min-w-[100px] font-semibold",
                                            base: "border border-white/20 rounded-xl w-[120px]",
                                            listbox: "min-w-[120px]",
                                            popoverContent: "min-w-[120px]",
                                          },
                                          items: et,
                                          maxListboxHeight: 350,
                                          renderValue: (e) =>
                                            e.map((e) => {
                                              let t = et.find(
                                                (t) => t.key === e.key
                                              );
                                              return t
                                                ? (0, a.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        (0, a.jsx)(l.default, {
                                                          alt: t.label,
                                                          height: 20,
                                                          src: t.icon,
                                                          width: 20,
                                                        }),
                                                        t.label,
                                                      ],
                                                    },
                                                    e.key
                                                  )
                                                : null;
                                            }),
                                          selectedKeys: [t.value],
                                          onSelectionChange: (e) => {
                                            let s = Array.from(e)[0];
                                            s &&
                                              (t.onChange(s),
                                              null == I ||
                                                I("step2", {
                                                  ...(null == E
                                                    ? void 0
                                                    : E.step2),
                                                  pairingToken: s,
                                                }));
                                          },
                                          children: (e) =>
                                            (0, a.jsx)(
                                              m.y,
                                              {
                                                children: (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)(l.default, {
                                                      alt: e.label,
                                                      height: 20,
                                                      src: e.icon,
                                                      width: 20,
                                                    }),
                                                    e.label,
                                                  ],
                                                }),
                                              },
                                              e.key
                                            ),
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              O.formState.errors.pairingToken &&
                                (0, a.jsx)("span", {
                                  className: "text-red-400 text-xs",
                                  children:
                                    O.formState.errors.pairingToken.message,
                                }),
                              (0, a.jsx)(c.y, {}),
                              (0, a.jsx)(B, {
                                fields: M,
                                handleRemove: (e) => {
                                  G(e);
                                },
                                openModal: () => {
                                  z({
                                    devAddress: "",
                                    devPercent: 0.5,
                                    cliffPeriod: 0,
                                    vestingTime: 1,
                                    unlockPercent: 0,
                                  }),
                                    R(""),
                                    F(!0);
                                },
                                totalDevPercent: Z,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative rounded-2xl p-6 border transition-all shadow-lg border-[#5D5D60] "
                          .concat(
                            A === ee.EXIST_TOKEN ? "bg-[#39393C]" : "",
                            " "
                          )
                          .concat(
                            L
                              ? "cursor-pointer"
                              : "opacity-60 cursor-not-allowed"
                          ),
                      onClick: () => {
                        L && C(ee.EXIST_TOKEN);
                      },
                      children: [
                        !L &&
                          (0, a.jsx)("div", {
                            className: "absolute top-4 right-4 z-20",
                            children: (0, a.jsx)("span", {
                              className:
                                "bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white text-xs font-bold px-3 py-1 rounded-full",
                              children: "COMING SOON",
                            }),
                          }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center relative z-10",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "w-4 h-4 min-w-4 min-h-4 aspect-square rounded-full border-2 mr-3 flex items-center justify-center transition-all flex-shrink-0 ".concat(
                                  A === ee.EXIST_TOKEN
                                    ? "border-[#59FF7F] bg-[#59FF7F]"
                                    : L
                                    ? "border-[#59FF7F] bg-transparent"
                                    : "border-[#5D5D60] bg-transparent"
                                ),
                              children:
                                A === ee.EXIST_TOKEN &&
                                (0, a.jsx)("span", {
                                  className:
                                    "w-2 h-2 bg-black rounded-full block",
                                }),
                            }),
                            (0, a.jsx)("span", {
                              className: "font-bold text-lg ".concat(
                                L ? "text-white" : "text-white/70"
                              ),
                              children:
                                "Use existing Token to launch your AI Influencer",
                            }),
                          ],
                        }),
                        !L &&
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-0 bg-black/20 rounded-2xl z-10",
                          }),
                        !L &&
                          (0, a.jsx)("div", {
                            className:
                              "mt-4 p-4 bg-gradient-to-r from-[#FF6B6B]/10 to-[#FF8E53]/10 border border-[#FF6B6B]/20 rounded-xl",
                            children: (0, a.jsx)("p", {
                              className: "text-white/80 text-sm",
                              children:
                                "This feature is currently under development and will be available soon.",
                            }),
                          }),
                        L &&
                          A === ee.EXIST_TOKEN &&
                          (0, a.jsxs)("div", {
                            className: "relative z-10 space-y-4 mt-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, a.jsx)("label", {
                                    className: "text-white font-semibold",
                                    children: "Token Contract Address",
                                  }),
                                  (0, a.jsx)(b.xI, {
                                    control: V.control,
                                    name: "tokenAddress",
                                    render: (e) => {
                                      let { field: t } = e;
                                      return (0, a.jsx)(k.w, {
                                        ...t,
                                        classNames: {
                                          input:
                                            "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                                        },
                                        placeholder: "0x...",
                                      });
                                    },
                                  }),
                                  V.formState.errors.tokenAddress &&
                                    (0, a.jsx)("span", {
                                      className: "text-red-400 text-xs",
                                      children:
                                        V.formState.errors.tokenAddress.message,
                                    }),
                                  (0, a.jsx)("p", {
                                    className: "text-white/70 text-xs",
                                    children:
                                      "The agent name will be populated based on the token address",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(T, {
                                control: V.control,
                                errors: V.formState.errors,
                                layout: "grid",
                                mode: A,
                                setValue: V.setValue,
                                tokenAddress: V.watch("tokenAddress"),
                                watch: V.watch,
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, a.jsx)("label", {
                                    className: "text-white font-semibold",
                                    children: "Agent Project Pitch",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "w-full flex items-center bg-black/20 rounded-2xl p-4 gap-4 flex-col md:flex-row text-center md:text-left",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "flex-shrink-0",
                                        children: (0, a.jsxs)("div", {
                                          ...Y(),
                                          className:
                                            "w-12 h-12 rounded-xl border border-white/20 bg-black/30 flex items-center justify-center cursor-pointer ".concat(
                                              J
                                                ? "border-blue-400 bg-blue-400/10"
                                                : ""
                                            ),
                                          children: [
                                            (0, a.jsx)("input", {
                                              id: "project-pitch-upload-input",
                                              ...Q(),
                                            }),
                                            W(V.watch("projectPitchFile")),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          V.watch("projectPitchFile")
                                            ? (0, a.jsx)("span", {
                                                className:
                                                  "text-white truncate font-medium",
                                                children:
                                                  V.watch("projectPitchFile")
                                                    .name,
                                              })
                                            : (0, a.jsx)("span", {
                                                className: "text-neutral-400",
                                                children: "No file selected",
                                              }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "text-xs text-neutral-400 mt-1",
                                            children:
                                              "Supported file types: DOC, PDF, JPG or PNG, maximum size 50MB.",
                                          }),
                                          V.formState.errors.projectPitchFile &&
                                            (0, a.jsx)("span", {
                                              className:
                                                "text-red-500 text-xs mt-1",
                                              children:
                                                V.formState.errors
                                                  .projectPitchFile.message,
                                            }),
                                        ],
                                      }),
                                      (0, a.jsx)(n.r, {
                                        className:
                                          "px-4 font-light w-full md:w-auto",
                                        leftIcon: (0, a.jsx)(f.A, { size: 16 }),
                                        type: "button",
                                        variant: "upload",
                                        onPress: () => {
                                          var e;
                                          null ===
                                            (e = document.querySelector(
                                              'input[id="project-pitch-upload-input"]'
                                            )) ||
                                            void 0 === e ||
                                            e.click(),
                                            W(V.watch("projectPitchFile"));
                                        },
                                        children: "Upload",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, a.jsx)("label", {
                                    className: "text-white font-semibold",
                                    children: "Liquidity Provision",
                                  }),
                                  (0, a.jsx)(b.xI, {
                                    control: V.control,
                                    name: "liquidityProvision",
                                    render: (e) => {
                                      let { field: t } = e;
                                      return (0, a.jsx)(k.w, {
                                        ...t,
                                        classNames: {
                                          input:
                                            "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                                        },
                                        placeholder: "999999",
                                        type: "number",
                                        value: t.value.toString(),
                                        onChange: (e) =>
                                          t.onChange(Number(e.target.value)),
                                      });
                                    },
                                  }),
                                  V.formState.errors.liquidityProvision &&
                                    (0, a.jsx)("span", {
                                      className: "text-red-400 text-xs",
                                      children:
                                        V.formState.errors.liquidityProvision
                                          .message,
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, a.jsx)("label", {
                                    className: "text-white font-semibold",
                                    children: "Contact Info",
                                  }),
                                  (0, a.jsx)(b.xI, {
                                    control: V.control,
                                    name: "contactInfo",
                                    render: (e) => {
                                      let { field: t } = e;
                                      return (0, a.jsx)(k.w, {
                                        ...t,
                                        classNames: {
                                          input:
                                            "bg-black/30 border-white/20 text-white placeholder:text-neutral-400",
                                        },
                                        placeholder: "Enter your email address",
                                      });
                                    },
                                  }),
                                  V.formState.errors.contactInfo &&
                                    (0, a.jsx)("span", {
                                      className: "text-red-400 text-xs",
                                      children:
                                        V.formState.errors.contactInfo.message,
                                    }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "mt-12 flex justify-center w-full",
                children: (0, a.jsx)(n.r, {
                  className: "h-12 text-lg font-light shadow-lg",
                  leftIcon: (0, a.jsx)(l.default, {
                    alt: "Next",
                    height: 30,
                    quality: 100,
                    src: "/images/nextIcon.png",
                    width: 30,
                  }),
                  variant: "neon",
                  onPress: () => {
                    A === ee.STANDARD
                      ? O.handleSubmit(es)()
                      : V.handleSubmit(ea)();
                  },
                  children: "NEXT",
                }),
              }),
              S &&
                (0, a.jsx)(q, {
                  isOpen: S,
                  maxDevPercent: 15 - Z,
                  modalError: D,
                  modalForm: P,
                  onClose: () => F(!1),
                  onConfirm: () => {
                    if (!P.devAddress) {
                      R("Dev address is required");
                      return;
                    }
                    if (!y.Zv.utils.isAddress(P.devAddress)) {
                      R("Invalid EVM address");
                      return;
                    }
                    if (
                      M.some(
                        (e) =>
                          e.devAddress.toLowerCase() ===
                          P.devAddress.toLowerCase()
                      )
                    ) {
                      R("This wallet address has already been added");
                      return;
                    }
                    let e = 15 - Z;
                    if (P.devPercent <= 0 || P.devPercent > e) {
                      R("Dev percent must be between 0.5 and ".concat(e));
                      return;
                    }
                    if (Z + P.devPercent > 15) {
                      R("Total dev percent cannot exceed 15%");
                      return;
                    }
                    H(P), F(!1);
                  },
                  onModalChange: (e, t) => {
                    z((s) => ({ ...s, [e]: t }));
                  },
                }),
            ],
          });
        });
      var G = s(41913),
        Z = s(53886),
        $ = s(96103),
        Y = s(28964),
        Q = s(1917);
      let J = [
          { label: "Intro" },
          { label: "Payout Configuration" },
          { label: "AI Influencer Details" },
          { label: "Utility Setup" },
          { label: "Launch AI Influencer" },
          { label: "Review" },
        ],
        ee = { STANDARD: "STANDARD", EXIST_TOKEN: "EXIST_TOKEN" },
        et = [
          { key: "XCX", label: "$XCX", icon: "/images/xcx.png" },
          { key: "WBNB", label: "$BNB", icon: "/images/bnb.png" },
        ],
        es = {
          step2: {
            mode: ee.STANDARD,
            name: "",
            ticker: "",
            liquidityProvision: 0,
            contactInfo: "",
            projectPitchFile: null,
            tokenAddress: "",
            pairingToken: "XCX",
            devVestingParams: [],
            isFinishBonding: 0,
          },
          step3: {
            profilePicture: "",
            topics: [],
            bio: "",
            socials: {
              twitter: "",
              telegram: "",
              discord: "",
              website: "",
              instagram: "",
            },
            personalityTraits: [],
            communicationStyle: {
              formalCasual: 50,
              seriousHumorous: 50,
              conciseDetailed: 50,
              neutralOpinionated: 50,
            },
            knowledgeBase: "GPT4_MINI",
          },
          step4: { utilities: {} },
          step6: { tokenAddress: "" },
        },
        ea = (0, r.PA)(() => {
          let e = (0, r.iz)(() => ({
            currentStep: 1,
            formValues: es,
            updateFormValues: (t, s) => {
              e.formValues[t] = s;
            },
          }));
          return (0, a.jsx)(Q.A, {
            children: (0, a.jsxs)("div", {
              className: "w-full h-full flex flex-col justify-start my-10",
              children: [
                [1, 6].includes(e.currentStep)
                  ? null
                  : (0, a.jsxs)("div", {
                      className: "w-full flex flex-col items-center mb-12",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-4xl text-white mb-6 text-center",
                          children: J[e.currentStep - 1].label,
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "flex flex-row items-center justify-center gap-x-0 gap-y-4",
                          children: J.map((t, s) => {
                            if ([1, 6].includes(s + 1)) return null;
                            let r = s + 1 <= e.currentStep;
                            return (0, a.jsxs)(
                              i.Fragment,
                              {
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "flex flex-col items-center",
                                    style: {
                                      cursor:
                                        s + 1 < e.currentStep
                                          ? "pointer"
                                          : "default",
                                    },
                                    onClick: () => {
                                      s + 1 < e.currentStep &&
                                        (e.currentStep = s + 1);
                                    },
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "relative flex items-center justify-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "w-2 h-2 rounded-full bg-white",
                                        }),
                                        r &&
                                          (0, a.jsx)("div", {
                                            className:
                                              "absolute w-5 h-5 rounded-full border-2 border-[#F0B90B]",
                                          }),
                                      ],
                                    }),
                                  }),
                                  s < J.length - 2 &&
                                    (0, a.jsx)("div", {
                                      "aria-hidden": !0,
                                      className: "flex items-center w-16",
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "h-px w-full bg-gradient-to-r from-white/30 via-white/80 to-white/30",
                                      }),
                                    }),
                                ],
                              },
                              t.label
                            );
                          }),
                        }),
                      ],
                    }),
                1 === e.currentStep &&
                  (0, a.jsx)(o, {
                    onNextStep: () => {
                      e.currentStep = 2;
                    },
                  }),
                2 === e.currentStep &&
                  (0, a.jsx)(H, {
                    changeMode: (t) => {
                      e.formValues.step2.mode = t;
                    },
                    formValues: e.formValues,
                    mode: e.formValues.step2.mode,
                    updateFormValues: e.updateFormValues,
                    onNextStep: () => {
                      e.currentStep = 3;
                    },
                  }),
                3 === e.currentStep &&
                  (0, a.jsx)(G.A, {
                    mode: e.formValues.step2.mode,
                    step2FormValues: e.formValues.step2,
                    step3FormValues: e.formValues.step3,
                    updateFormValues: e.updateFormValues,
                    onGoBack: () => {
                      e.currentStep = 2;
                    },
                    onNextStep: () => {
                      e.currentStep = 4;
                    },
                  }),
                4 === e.currentStep &&
                  (0, a.jsx)(Z.A, {
                    formValues: e.formValues,
                    mode: e.formValues.step2.mode,
                    updateFormValues: e.updateFormValues,
                    onGoBack: () => {
                      e.currentStep = 3;
                    },
                    onNextStep: () => {
                      e.currentStep = 5;
                    },
                  }),
                5 === e.currentStep &&
                  (0, a.jsx)($.A, {
                    formValues: e.formValues,
                    mode: e.formValues.step2.mode,
                    updateFormValues: e.updateFormValues,
                    onGoBack: () => {
                      e.currentStep = 4;
                    },
                    onNextStep: () => {
                      e.currentStep = 6;
                    },
                  }),
                6 === e.currentStep &&
                  (0, a.jsx)(Y.A, {
                    formValues: e.formValues,
                    mode: e.formValues.step2.mode,
                    onNextStep: () => {
                      e.currentStep = 2;
                    },
                  }),
              ],
            }),
          });
        });
    },
    34373: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var a = s(95155),
        r = s(12115),
        i = s(5565),
        l = s(98176);
      let n = (e) => {
        let { isOpen: t, onClose: s, token: n } = e,
          [o, c] = (0, r.useState)(!1),
          d = () =>
            "".concat(window.location.origin, "/token/").concat(n.address),
          m = () => {
            let e = "$".concat(n.symbol, " (").concat(n.name, ")");
            d();
            let t = [
                "\uD83D\uDE80 Just launched my AI agent ".concat(
                  e,
                  " on @xelebofficial !\nIt’s live—come test it and tell me what to build next\n#Xeleb #OwnYourAI #AIInfluence\n"
                ),
                "\uD83D\uDC51 I own an AI influencer now: ".concat(
                  e,
                  " on @xelebofficial .\nTry it, chat with it, and see how creators can earn.\n#XCX #Xeleb #OwnAIToEarn\n"
                ),
                "From meme → AI agent in minutes \uD83E\uDD16\nMeet ".concat(
                  e,
                  " on @xelebofficial and roast/test it here:\n#Xeleb #AIagents #DegensBuild\n"
                ),
                "I just created ".concat(
                  e,
                  " on @xelebofficial.\nDrop ideas in replies. I'll train it with the best prompts!\n#Xeleb #OwnYourAI\n"
                ),
                "Live now: ".concat(
                  e,
                  " (built on @xelebofficial).\nIf you like it, RT + share your agent too!\n#Xeleb #AIInfluence #OwnAIToEarn\n"
                ),
                "I built ".concat(
                  e,
                  " on @xelebofficial in 3 mins: create → tokenize → share.\nComment your agent links. let’s test each other’s creations!\n#Xeleb #XCXtoken\n"
                ),
              ],
              s = Math.floor(Math.random() * t.length);
            return t[s];
          },
          x = [
            {
              id: "embed",
              name: "Embed",
              icon: "/images/embed.svg",
              color: "bg-white",
              action: () => {
                navigator.clipboard.writeText(
                  '<iframe src="'.concat(
                    d(),
                    '" width="100%" height="600" frameborder="0"></iframe>'
                  )
                ),
                  l.g.push({
                    children: (0, a.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: "Embed code copied!",
                    }),
                    variant: "success",
                  });
              },
            },
            {
              id: "twitter",
              name: "X",
              icon: "/images/twitter.png",
              color: "bg-black",
              action: () => {
                let e = "https://x.com/intent/post?url="
                  .concat(encodeURIComponent(d()), "&text=")
                  .concat(
                    encodeURIComponent(m()),
                    "&&related=Xeleb,Crypto,Token,AiAgent"
                  );
                window.open(e, "_blank", "width=600,height=400");
              },
            },
            {
              id: "facebook",
              name: "Facebook",
              icon: "/images/facebook.svg",
              color: "bg-blue-600",
              action: () => {
                let e = "https://www.facebook.com/sharer/sharer.php?u="
                  .concat(encodeURIComponent(d()), "&quote=")
                  .concat(encodeURIComponent(m()), "&hashtag=")
                  .concat(
                    encodeURIComponent("#Xeleb #AIInfluence #OwnAIToEarn")
                  );
                window.open(e, "_blank", "width=600,height=400");
              },
            },
            {
              id: "instagram",
              name: "Instagram",
              icon: "/images/instagram.svg",
              color: "bg-gradient-to-r from-purple-500 to-pink-500",
              action: () => {
                let e = "https://www.instagram.com/create/story/?url="
                  .concat(encodeURIComponent(d()), "&quote=")
                  .concat(encodeURIComponent(m()));
                window.open(e, "_blank", "width=600,height=400");
              },
            },
            {
              id: "telegram",
              name: "Telegram",
              icon: "/images/telegram.svg",
              color: "bg-blue-500",
              action: () => {
                let e = "https://t.me/share/url?url="
                  .concat(encodeURIComponent(d()), "&text=")
                  .concat(encodeURIComponent(m()));
                window.open(e, "_blank");
              },
            },
            {
              id: "discord",
              name: "Discord",
              icon: "/images/discord.svg",
              color: "bg-indigo-600",
              action: () => {
                let e = "https://discord.com/channels/@me?content=".concat(
                  encodeURIComponent("".concat(m(), " ").concat(d()))
                );
                window.open(e, "_blank", "width=600,height=400");
              },
            },
          ],
          u = async () => {
            try {
              await navigator.clipboard.writeText(d()),
                c(!0),
                l.g.push({
                  children: (0, a.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: "Link copied to clipboard!",
                  }),
                  variant: "success",
                }),
                setTimeout(() => c(!1), 2e3);
            } catch (e) {
              l.g.push({
                children: (0, a.jsx)("div", {
                  className: "flex items-center gap-2",
                  children: "Failed to copy link",
                }),
                variant: "error",
              });
            }
          };
        return t
          ? (0, a.jsx)("div", {
              className:
                "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
              children: (0, a.jsxs)("div", {
                className:
                  "bg-[#1A1A1A] rounded-xl border border-white/20 max-w-md w-full mx-4",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-between p-6 border-b border-white/10",
                    children: [
                      (0, a.jsxs)("h3", {
                        className: "text-white font-semibold text-lg",
                        children: ["Share ", n.symbol],
                      }),
                      (0, a.jsx)("button", {
                        "aria-label": "Close",
                        className:
                          "text-white/60 hover:text-white transition-colors",
                        onClick: s,
                        children: (0, a.jsx)("svg", {
                          fill: "none",
                          height: "24",
                          viewBox: "0 0 24 24",
                          width: "24",
                          children: (0, a.jsx)("path", {
                            d: "M18 6L6 18M6 6L18 18",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "p-6",
                    children: [
                      (0, a.jsx)("h4", {
                        className: "text-white font-medium mb-4",
                        children: "Share",
                      }),
                      (0, a.jsx)("div", {
                        className: "flex gap-3 overflow-x-auto pb-2",
                        children: x.map((e) =>
                          (0, a.jsxs)(
                            "button",
                            {
                              "aria-label": "Share on ".concat(e.name),
                              className:
                                "flex flex-col items-center gap-2 min-w-[60px] group",
                              onClick: e.action,
                              children: [
                                (0, a.jsx)("div", {
                                  className: "w-12 h-12 rounded-full ".concat(
                                    e.color,
                                    " flex items-center justify-center group-hover:scale-110 transition-transform"
                                  ),
                                  children: (0, a.jsx)(i.default, {
                                    alt: e.name,
                                    className: "w-6 h-6",
                                    height: 24,
                                    src: e.icon,
                                    width: 24,
                                  }),
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-white/80 text-xs",
                                  children: e.name,
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "p-6 border-t border-white/10",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)("input", {
                          readOnly: !0,
                          className:
                            "flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm",
                          type: "text",
                          value: d(),
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors ".concat(
                              o
                                ? "bg-green-600 text-white"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            ),
                          onClick: u,
                          children: o ? "Copied!" : "Copy",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null;
      };
    },
    1917: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var a = s(95155),
        r = s(44087),
        i = s(90908),
        l = s(93317),
        n = s(97412);
      let o = (0, i.PA)((e) => {
        let { children: t } = e,
          { setOpen: s } = (0, r.hS)(),
          {
            isConnecting: o,
            isReconnecting: c,
            address: d,
            connector: m,
            isConnected: x,
            chainId: u,
            status: h,
          } = (0, r.F7)();
        return ((0, i.iz)(() => ({ isLoading: !0 })),
        o || c || n.A.isLoadingSessionFromLocal)
          ? (0, a.jsx)("div", {
              className: "w-full h-full flex items-center justify-center",
              children: (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "w-12 h-12 border-4 border-neutral-400 border-t-white rounded-full animate-spin",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-neutral-400",
                    children: "Please wait...",
                  }),
                ],
              }),
            })
          : n.A.account
          ? (0, a.jsx)(a.Fragment, { children: t })
          : (0, a.jsxs)("div", {
              className:
                "w-full h-full flex flex-col items-center justify-center p-8",
              children: [
                (0, a.jsx)("div", {
                  className: "flex w-full justify-center py-20",
                  children: (0, a.jsx)("img", {
                    alt: "Staking",
                    className: "w-[900px] md:max-w-full max-w-[80%]",
                    src: "/images/connectWalletText.png",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "bg-[#242426] border border-white/10 rounded-2xl p-8 max-w-2xl w-full text-center flex flex-col items-center gap-3",
                  children: [
                    (0, a.jsx)("img", {
                      alt: "Staking",
                      className: "w-[100px] md:max-w-full max-w-[80%]",
                      src: "/images/walletIcon.png",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-white mb-3 font-bold",
                      children: "Please connect your wallet to continue",
                    }),
                    (0, a.jsx)(l.r, {
                      className: "!px-8 text-base",
                      variant: "neon",
                      onPress: () => s(!0),
                      children: "Connect Wallet",
                    }),
                  ],
                }),
              ],
            });
      });
    },
    89683: (e, t, s) => {
      "use strict";
      s.d(t, { w: () => r });
      var a = s(65624);
      let r = (0, s(64150).d)(a.r, {
        variants: {
          color: {
            glow: {
              inputWrapper:
                "bg-[#202020] border border-white/30 transition-all focus-within:border-[#57F76B] focus-within:shadow-[0_0_0_2px_#98EC2D66]",
              input: "text-white placeholder:text-neutral-400 bg-transparent",
            },
          },
        },
        defaultVariants: { color: "glow" },
      });
    },
    47058: (e, t, s) => {
      "use strict";
      s.d(t, { f: () => i });
      var a = s(95155),
        r = s(96090);
      let i = (e) => {
        let {
          value: t,
          onChange: s,
          min: i = 0,
          max: l = 100,
          step: n = 1,
          className: o = "",
        } = e;
        return (0, a.jsxs)(r.bL, {
          className: "relative flex items-center w-full h-8 ".concat(o),
          max: l,
          min: i,
          step: n,
          value: [t],
          onValueChange: (e) => {
            let [t] = e;
            return s(t);
          },
          children: [
            (0, a.jsx)(r.CC, {
              className:
                "relative h-2 w-full rounded-full bg-white/20 overflow-hidden",
              children: (0, a.jsx)(r.Q6, {
                className:
                  "absolute h-full rounded-full bg-gradient-to-r from-[#FFE68D] to-[#FFB1B0]",
              }),
            }),
            (0, a.jsx)(r.zi, {
              className:
                "block w-4 h-4 rounded-full bg-white shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition-transform",
            }),
          ],
        });
      };
    },
    31539: (e, t, s) => {
      "use strict";
      s.d(t, { K: () => r });
      var a = s(72891);
      let r = (0, s(64150).d)(a.P, {
        variants: {
          color: {
            glow: {
              inputWrapper:
                "bg-[#202020] border border-white/30 transition-all focus-within:border-[#57F76B] focus-within:shadow-[0_0_0_2px_#98EC2D66]",
              input: "text-white placeholder:text-neutral-400 bg-transparent",
            },
          },
        },
        defaultVariants: { color: "glow" },
      });
    },
    87412: (e, t, s) => {
      "use strict";
      s.d(t, { d: () => r });
      var a = s(12115);
      let r = (e, t) => {
        let s = (0, a.useRef)();
        return (0, a.useCallback)(
          function () {
            for (var a = arguments.length, r = Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            s.current && clearTimeout(s.current),
              (s.current = setTimeout(() => {
                e(...r);
              }, t));
          },
          [e, t]
        );
      };
    },
    32895: (e, t, s) => {
      "use strict";
      s.d(t, {
        Cu: () => x,
        GI: () => m,
        KT: () => c,
        Oi: () => u,
        Ro: () => p,
        VV: () => h,
        fh: () => n,
        o3: () => d,
        uV: () => o,
      });
      var a = s(13691),
        r = s.n(a);
      let i = s(4014);
      i.config({ EXPONENTIAL_AT: 200 });
      let l = (e, t) => Math.floor(1 / e).toString().length + (t ? t - 1 : 3),
        n = (e) => {
          if (
            e.innerError &&
            e.innerError.message &&
            e.innerError.message.includes("rpc")
          ) {
            let t = e.innerError.message.match(/"message": "Error:(.+)",/gim);
            if (t && t.length > 0) return t[0];
          }
          if ("string" == typeof e) return e;
          let t = (e && e.data && e.data.message) || (e && e.message);
          return (
            "string" != typeof t &&
              (t = Array.isArray(t)
                ? t.join("\n")
                : "Something wrong, please try again later"),
            t.toString()
          );
        },
        o = (e, t, s) =>
          e
            ? ""
                .concat(e.slice(0, t || 18), "...")
                .concat(0 === s ? "" : e.slice(-(s || 8)))
            : "",
        c = function (e, t) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0;
          if (1e-5 > Math.abs((e = +e))) {
            if (e > 0) return "﹤0.00001";
            e = 0;
          }
          if (s) return e.toExponential(t || 3);
          let r = void 0 !== t ? l(e, t) : l(e, 2);
          0 === t && (r = 0), r > (a || 5) && (r = a || 5);
          let i = +"10e".concat(r - 1);
          return (Number(Math.round(e * i) / i) || 0).toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: r > 18 ? 18 : r,
          });
        },
        d = (e, t) => {
          let s = Math.abs(e);
          return s >= 1e9
            ? c(e / 1e9, 2) + "B"
            : s >= 1e6
            ? c(e / 1e6, 2) + "M"
            : s >= 1e3
            ? c(e / 1e3, 2) + "K"
            : c(e, t || 0);
        },
        m = (e, t) => {
          let s = new i(e),
            a = new i(10).pow(t),
            r = s.dividedBy(a);
          return Number((r = r.dp(6, i.ROUND_FLOOR)).toFixed(6));
        },
        x = (e) =>
          new Promise((t, s) => {
            setTimeout(() => {
              t(null);
            }, e);
          }),
        u = (e) => {
          let t = r()(e);
          return 24 > r()().diff(t, "hours")
            ? t.fromNow()
            : t.format("DD/MM/YYYY HH:mm:ss");
        },
        h = (e) =>
          e
            .split(" ")
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(" "),
        p = (e) =>
          "string" == typeof e || "bigint" == typeof e ? Number(e) : e;
    },
  },
]);
