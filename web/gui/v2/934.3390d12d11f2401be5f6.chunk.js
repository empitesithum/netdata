!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3b57f47e-141f-40f3-96c3-da040471e2c8",e._sentryDebugIdIdentifier="sentry-dbid-3b57f47e-141f-40f3-96c3-da040471e2c8")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"98a095546e2e8e6579f90b03f0dc1ad121cedcce"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[934],{64934:function(e,n,t){t.r(n),t.d(n,{Trust:function(){return d}});var r=t(29439),o=(t(74916),t(64765),t(69826),t(41539),t(31672),t(2490),t(59461),t(15306),t(92222),t(67294)),a=t(17563),c=t(15557),i=t(1043),l=t(78266),d=function(){var e=(0,o.useMemo)((function(){var e=window.location.search,n=a.parse(e);return[n.redirect_uri,n.agent_uri]})),n=(0,r.Z)(e,2),t=n[0],d=n[1],u=(0,i.So)(),f=(0,r.Z)(u,3),s=f[0],g=f[1],b=f[2],m=(0,i.aJ)({},[s]),p=(0,r.Z)(m,2),w=p[0],y=p[1];return(0,o.useEffect)((function(){var e=w.find((function(e){return e.url===d}));e&&location.replace("/api/v1/auth/account/origins/".concat(e.id,"/redirect?redirect_uri=").concat(encodeURIComponent(t),"&agent_uri=").concat(encodeURIComponent(d)))}),[t,d,w]),o.createElement(c.Layer,{full:!0},o.createElement(c.Flex,{"data-testid":"trust",alignItems:"center",justifyContent:"center",column:!0,width:"100%",height:"100%",background:"mainBackground",gap:4},o.createElement(l.H,{animate:b}),o.createElement(c.Text,{textAlign:"center"},"Do you trust ",o.createElement(c.Text,{strong:!0},d),"?"),o.createElement(c.Flex,{column:!0,gap:2,alignItems:"center"},o.createElement(c.TextBig,null,"Authorizing this URL will allow it to request your Netdata data."),o.createElement(c.Flex,{gap:2},o.createElement(c.Button,{flavour:"borderless",onClick:function(){return window.location.replace(decodeURIComponent(t))},disabled:y||b},"Cancel"),o.createElement(c.Button,{onClick:function(){return g(d)},disabled:y||b,isLoading:y||b},"Yes")))))};n.default=d}}]);