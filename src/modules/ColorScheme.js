export default class ColorScheme {
  constructor(toggler) {
    const { mediaText } = window.document.styleSheets[1].cssRules[2].media;
    this.mediaText = mediaText;
    this.toggler = document.querySelector(toggler);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  static themeReplace(theme, [arg1, arg2]) {
    window.document.styleSheets[1].cssRules[2].media.mediaText = theme.replace(
      arg1,
      arg2,
    );
  }

  toggleTheme() {
    const regExp = /(?<=:\s)dark+/;
    const themes = ['dark', 'light'];

    if (this.mediaText.match(regExp)) {
      ColorScheme.themeReplace(this.mediaText, themes);
    } else {
      ColorScheme.themeReplace(this.mediaText, themes.reverse());
    }
    this.reload();
  }

  addToggleEvent() {
    this.toggler.addEventListener('click', this.toggleTheme);
  }

  reload() {
    const { mediaText } = window.document.styleSheets[1].cssRules[2].media;
    this.mediaText = mediaText;
  }

  init() {
    if (this.toggler) {
      this.addToggleEvent();
    }
  }
}
