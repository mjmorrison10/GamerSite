module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
      spacing: {
        x45: "45px",
        x60: "60px",
        x150: "150px",
        x300: "300px",
        x500: "500px",
        x580: "580px",
        x730: "730px",
        x790: "790px",
        98: "28rem",
        100: "32rem",
        102: "36rem",
        104: "40rem",
        105.75: "43.75rem",
        106: "44rem",
      },
      backgroundImage: (theme) => ({
        "flappybird-pipe": "url(./Mobile/flappybird-pipe.png)",
        "flappy-bird": "url(./Mobile/flappy-bird.png)",
        "bottom-background": "url(./Mobile/bottom-background.png)",
        "fb-game-background": "url(./Mobile/fb-game-background.png)",
        blackjack:
          "url(https://pl.sterlingcdn.com/wp-content/uploads/sites/3/2018/07/blackjack-classic-background.jpg)",
      }),
      colors: {
        "orange-50": "hsl(26, 100%, 96%)",
        "orange-100": "hsl(26, 96%, 89%)",
        "orange-200": "hsl(26, 97%, 77%)",
        "orange-300": "hsl(24, 97%, 65%)",
        "orange-400": "hsl(22, 96%, 56%)",
        "orange-500": "hsl(20, 92%, 50%)",
        "orange-600": "hsl(18, 95%, 44%)",
        "orange-700": "hsl(17, 90%, 37%)",
        "orange-800": "hsl(16, 84%, 31%)",
        "orange-900": "hsl(15, 77%, 26%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
