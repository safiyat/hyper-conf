"use strict";
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
    config: {
        // choose either `'stable'` for receiving highly polished,
        // or `'canary'` for less polished but more frequent updates
        updateChannel: 'stable',
        // default font size in pixels for all tabs
        fontSize: 12,
        // font family with optional fallbacks
        fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        // default font weight: 'normal' or 'bold'
        fontWeight: 'normal',
        // font weight for bold characters: 'normal' or 'bold'
        fontWeightBold: 'bold',
        // line height as a relative unit
        lineHeight: 1,
        // letter spacing as a relative unit
        letterSpacing: 0,
        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: 'rgba(248,28,229,0.8)',
        // terminal text color under BLOCK cursor
        cursorAccentColor: '#000',
        // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        // cursorShape: 'UNDERLINE',
        cursorShape: 'BLOCK',
        // set to `true` (without backticks and without quotes) for blinking cursor
        cursorBlink: true,
        // color of the text
        foregroundColor: '#000000',
        // terminal background color
        // opacity is only supported on macOS
        backgroundColor: '#ffffdd',
        // terminal selection color
        selectionColor: '#000000',
        // border color (window, tabs)
        borderColor: '#333',
        // custom CSS to embed in the main window
        css: '',
        // custom CSS to embed in the terminal window
        termCSS: '',
        // set custom startup directory (must be an absolute path)
        workingDirectory: '',
        // if you're using a Linux setup which show native menus, set to false
        // default: `true` on Linux, `true` on Windows, ignored on macOS
        showHamburgerMenu: '',
        // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
        // additionally, set to `'left'` if you want them on the left, like in Ubuntu
        // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
        showWindowControls: '',
        // custom padding (CSS format, i.e.: `top right bottom left`)
        padding: '12px 14px',
        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        colors: {
            black: '#000000',
            red: '#C51E14',
            green: '#1DC121',
            yellow: '#C7C329',
            blue: '#0A2FC4',
            magenta: '#C839C5',
            cyan: '#20C5C6',
            white: '#C7C7C7',
            lightBlack: '#686868',
            lightRed: '#FD6F6B',
            lightGreen: '#67F86F',
            lightYellow: '#FFFA72',
            lightBlue: '#6A76FB',
            lightMagenta: '#FD7CFC',
            lightCyan: '#68FDFE',
            lightWhite: '#FFFFFF',
            limeGreen: '#32CD32',
            lightCoral: '#F08080',
        },
        // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
        // if left empty, your system's login shell will be used by default
        //
        // Windows
        // - Make sure to use a full path if the binary name doesn't work
        // - Remove `--login` in shellArgs
        //
        // Windows Subsystem for Linux (WSL) - previously Bash on Windows
        // - Example: `C:\\Windows\\System32\\wsl.exe`
        //
        // Git-bash on Windows
        // - Example: `C:\\Program Files\\Git\\bin\\bash.exe`
        //
        // PowerShell on Windows
        // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
        //
        // Cygwin
        // - Example: `C:\\cygwin64\\bin\\bash.exe`
        shell: '',
        // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
        // by default `['--login']` will be used
        shellArgs: ['--login'],
        // for environment variables
        env: {},
        // Supported Options:
        //  1. 'SOUND' -> Enables the bell as a sound
        //  2. false: turns off the bell
        bell: 'SOUND',
        // An absolute file path to a sound file on the machine.
        bellSoundURL: '/Users/safiyat/GitHub/hyper-conf/Tink.mp3',
        // The number of rows to be persisted in terminal buffer for scrolling. Default: 1000
        scrollback: 99999,
        // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
        copyOnSelect: false,
        // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
        defaultSSHApp: false,
        // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
        // selection is present (`true` by default on Windows and disables the context menu feature)
        quickEdit: false,
        // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
        // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
        // (inside tmux or vim with mouse mode enabled for example).
        macOptionSelectionMode: 'vertical',
        // Whether to use the WebGL renderer. Set it to false to use canvas-based
        // rendering (slower, but supports transparent backgrounds)
        webGLRenderer: false,
        // keypress required for weblink activation: [ctrl|alt|meta|shift]
        // todo: does not pick up config changes automatically, need to restart terminal :/
        webLinksActivationKey: 'meta',
        // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
        disableLigatures: true,
        // set to true to disable auto updates
        disableAutoUpdates: false,
        // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
        screenReaderMode: false,
        // set to true to preserve working directory when creating splits or tabs
        preserveCWD: true,
        // for advanced config flags please refer to https://hyper.is/#cfg

        // Plugin Configuration
        // hyperBorder: {
        //     borderWidth: 10
        // }
        paneNavigation: {
          debug: false,
          hotkeys: {
            navigation: {
              up: 'ctrl+alt+up',
              down: 'ctrl+alt+down',
              left: 'ctrl+alt+left',
              right: 'ctrl+alt+right'
            },
            // completed with 1-9 digits
            jump_prefix: 'ctrl+alt',
            // Added to jump and navigation hotkeys for pane permutation
            permutation_modifier: 'shift',
            // maximize: 'meta+enter'
            maximize: 'meta+shift+enter'
          },
          // Show pane number
          showIndicators: true,
          // Will be completed with pane number
          indicatorPrefix: '^⌥',
          // Added to indicator <div>
          indicatorStyle: {
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '10px'
          },
          focusOnMouseHover: false,
          // Set to 1 to disable inactive panes dimming
          inactivePaneOpacity: 0.5
        }
    },
    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    plugins: ['hyperborder', 'hypercwd', 'hyper-search', 'hyper-pane'],
    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [],
    keymaps: {
      "window:devtools": "command+alt+i",
      "window:reload": "command+shift+r",
      "window:reloadFull": "command+shift+f5",
      "window:preferences": "command+,",
      "zoom:reset": "command+0",
      "zoom:in": [
        "command+plus",
        "command+="
      ],
      "zoom:out": "command+-",
      "window:new": "command+n",
      "window:minimize": "command+m",
      // "window:zoom": "ctrl+alt+command+m",
      // Setting it to the default on iTerm 2.
      "window:zoom": "command+shift+0",
      // "window:toggleFullScreen": "command+ctrl+f",
      // Setting it to the default on iTerm 2.
      "window:toggleFullScreen": "command+enter",
      "window:close": "command+shift+w",
      "tab:new": "command+t",
      "tab:next": [
        "command+shift+]",
        "command+shift+right",
        "command+alt+right",
        "ctrl+tab"
      ],
      "tab:prev": [
        "command+shift+[",
        "command+shift+left",
        "command+alt+left",
        "ctrl+shift+tab"
      ],
      "tab:jump:prefix": "command",
      "pane:next": "command+]",
      "pane:prev": "command+[",
      "pane:splitRight": "command+d",
      "pane:splitDown": "command+shift+d",
      "pane:close": "command+w",
      "editor:undo": "command+z",
      "editor:redo": "command+y",
      "editor:cut": "command+x",
      "editor:copy": "command+c",
      "editor:paste": "command+v",
      "editor:selectAll": "command+a",
      "editor:search": "command+f",
      "editor:search-close": "esc",
      "editor:movePreviousWord": "alt+left",
      "editor:moveNextWord": "alt+right",
      "editor:moveBeginningLine": "command+left",
      "editor:moveEndLine": "command+right",
      "editor:deletePreviousWord": "alt+backspace",
      "editor:deleteNextWord": "alt+delete",
      "editor:deleteBeginningLine": "command+backspace",
      "editor:deleteEndLine": "command+delete",
      "editor:clearBuffer": "command+k",
      "editor:break": "ctrl+c",
      "plugins:update": "command+shift+u"
  },
};
//# sourceMappingURL=config-default.js.map
