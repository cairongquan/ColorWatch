  export function createPixelByData(e) {
    let {
      color: t,
      colorSecondary: r,
      logo: i,
      canvas: n,
      active: a,
      renderScale: l = 2,
      transitionSpeed: s = 1,
      theme: o
    } = e;

    function C(e) {
      let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.replace("0x", "#"));
      return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
    }

    function y(e, t, r) {
      return e <= t ? t : e >= r ? r : e
    }


    performance.now();

    let L = 0,
      c = !1,
      d = 0,
      u = [],
      h = [],
      f = [];
    for (let e = 0; e < i.length; e++) {
      u[e] = [],
        h[e] = [],
        f[e] = [];
      for (let t = 0; t < i[e].length; t++)
        u[e][t] = Math.random(),
        h[e][t] = y(Math.random(), .1, .9),
        f[e][t] = 0
    }
    let p = .1 * s,
      g = "dark" === o ? "#ffffff" : "#000000",
      _ = C(g),
      m = C(t || g),
      x = r ? C(r) : m,
      v = r ? 1 : .5;

    function b() {
      if (performance.now(),
        L = requestAnimationFrame(b),
        !(null == a ? void 0 : a.current) && 0 === d && c)
        return;
      let e = n.getContext("2d");
      if (!e)
        return;
      let t = Math.ceil(performance.now() / 90),
        r = n.clientWidth * l,
        s = n.clientHeight * l;
      n.width = r,
        n.height = s;
      let o = Math.min(r / i[0].length, s / i.length);
      e.clearRect(0, 0, r, s),
        d = 0;
      for (let r = 0; r < i.length; r++)
        for (let n = 0; n < i[r].length; n++) {
          var C, g;
          let l;
          let s = u[r][n],
            L = h[r][n],
            c = y(.5 * Math.sin(t * s) + 1, 0, 1),
            b = f[r][n];
          b > d && (d = b),
            f[r][n] = (null == a ? void 0 : a.current) ? Math.min(b + p * L, 1) : Math.max(b - p * L, 0);
          let j = {
              color: y(2 * b, 0, 1),
              alpha: b
            },
            w = m.map(e => {
              var t, r;
              return t = _[0],
                (1 - (r = j.color)) * t + r * e
            }),
            k = x.map(e => {
              var t, r;
              return t = _[0],
                (1 - (r = j.color)) * t + r * e
            }),
            M = (1 - (C = j.color)) * 0 + 1 * C,
            N = (1 - (g = j.alpha)) * 1 + g * c,
            V = `${w[0]},${w[1]},${w[2]}`,
            E = `${k[0]},${k[1]},${k[2]}`;
          switch (i[r][n]) {
            case 1:
              l = `rgba(${V},${N})`;
              break;
            case 2:
              l = `rgba(${E},${N * v})`;
              break;
            case 3:
              l = `rgba(255,255,255, ${2 * N * M})`;
              break;
            default:
              continue
          }
          e.fillStyle = l
          e.fillRect(n * o + o / 2, r * o + o / 2, o / 2, o * 0.5, o * 0.5);

          // e.beginPath(),
          //   e.arc(n * o + o / 2, r * o + o / 2, o / 2, 0, 2 * Math.PI),
          //   e.fillStyle = l,
          //   e.fill()
        }
      // c = !0
    }
    return {
      start: () => requestAnimationFrame(b),
      stop: () => cancelAnimationFrame(L)
    }
  }
