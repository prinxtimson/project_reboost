<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <base href="/">
  <meta charset="utf-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
  <meta content="Project Supreme" name="description">
  <meta content="Adekola Ayoola" name="author">
  <meta content="Adekola Ayoola<adadekola@gmail.com>" name="developer">
  <meta content="Tritek,Nigeria,Enterprise,Application,Laravel,Php,Admin,Webapp,Java,Angular,Dashboard,Typescript"
    name="keyword">
  <link href="/assets/favicon.ico" rel="shortcut icon">
  <link href="/assets/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57">
  <link href="/assets/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60">
  <link href="/assets/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
  <link href="/assets/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
  <link href="/assets/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
  <link href="/assets/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
  <link href="/assets/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">
  <link href="/assets/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
  <link href="/assets/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">
  <link href="/assets/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png">
  <link href="/assets/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
  <link href="/assets/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png">
  <link href="/assets/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
  <link href="/assets/manifest.json" rel="manifest">
  <meta content="#ffffff" name="msapplication-TileColor">
  <meta content="/assets/ms-icon-144x144.png" name="msapplication-TileImage">
  <meta content="#ffffff" name="theme-color">
  <title>Tritek Careers</title>
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <style>
  @-webkit-keyframes fa-spin {
    0% {
      transform: rotate(0)
    }

    to {
      transform: rotate(359deg)
    }
  }

  @charset "UTF-8";

  :root {
    --surface-a: #ffffff;
    --surface-b: #f4f4f4;
    --surface-c: #eaeaea;
    --surface-d: #c8c8c8;
    --surface-e: #ffffff;
    --surface-f: #ffffff;
    --text-color: #333333;
    --text-color-secondary: #848484;
    --primary-color: #007ad9;
    --primary-color-text: #ffffff;
    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    --surface-0: #ffffff;
    --surface-50: #eef1f2;
    --surface-100: #dde2e4;
    --surface-200: #bbc5ca;
    --surface-300: #98a8af;
    --surface-400: #768b95;
    --surface-500: #546e7a;
    --surface-600: #435862;
    --surface-700: #324249;
    --surface-800: #222c31;
    --surface-900: #111618;
    --content-padding: .571rem 1rem;
    --inline-spacing: .5rem
  }

  * {
    box-sizing: border-box
  }

  :root {
    --blue-50: #f3f8fc;
    --blue-100: #c6dcef;
    --blue-200: #98c1e3;
    --blue-300: #6ba5d7;
    --blue-400: #3d8aca;
    --blue-500: #106ebe;
    --blue-600: #0e5ea2;
    --blue-700: #0b4d85;
    --blue-800: #093d69;
    --blue-900: #062c4c;
    --green-50: #f7fbf6;
    --green-100: #d6ead1;
    --green-200: #b6d9ad;
    --green-300: #96c889;
    --green-400: #76b765;
    --green-500: #56a641;
    --green-600: #498d37;
    --green-700: #3c742e;
    --green-800: #2f5b24;
    --green-900: #22421a;
    --yellow-50: #fffcf5;
    --yellow-100: #fdefcd;
    --yellow-200: #fbe3a6;
    --yellow-300: #f9d67f;
    --yellow-400: #f8ca57;
    --yellow-500: #f6bd30;
    --yellow-600: #d1a129;
    --yellow-700: #ac8422;
    --yellow-800: #87681a;
    --yellow-900: #624c13;
    --cyan-50: #f4fbfd;
    --cyan-100: #ccebf5;
    --cyan-200: #a4dbed;
    --cyan-300: #7ccce5;
    --cyan-400: #54bcdd;
    --cyan-500: #2cacd5;
    --cyan-600: #2592b5;
    --cyan-700: #1f7895;
    --cyan-800: #185f75;
    --cyan-900: #124555;
    --pink-50: #fdf4f9;
    --pink-100: #f6cce0;
    --pink-200: #eea3c7;
    --pink-300: #e77aae;
    --pink-400: #df5296;
    --pink-500: #d8297d;
    --pink-600: #b8236a;
    --pink-700: #971d58;
    --pink-800: #771745;
    --pink-900: #561032;
    --indigo-50: #f4f6fd;
    --indigo-100: #ccd3f5;
    --indigo-200: #a4b0ed;
    --indigo-300: #7c8de5;
    --indigo-400: #546add;
    --indigo-500: #2c47d5;
    --indigo-600: #253cb5;
    --indigo-700: #1f3295;
    --indigo-800: #182775;
    --indigo-900: #121c55;
    --teal-50: #f6fbfa;
    --teal-100: #d1eae5;
    --teal-200: #add9d1;
    --teal-300: #89c8bd;
    --teal-400: #65b7a8;
    --teal-500: #41a694;
    --teal-600: #378d7e;
    --teal-700: #2e7468;
    --teal-800: #245b51;
    --teal-900: #1a423b;
    --orange-50: #fff9f5;
    --orange-100: #fde4cd;
    --orange-200: #fbcfa6;
    --orange-300: #f9ba7f;
    --orange-400: #f8a457;
    --orange-500: #f68f30;
    --orange-600: #d17a29;
    --orange-700: #ac6422;
    --orange-800: #874f1a;
    --orange-900: #623913;
    --bluegray-50: #f7f8f9;
    --bluegray-100: #dae0e3;
    --bluegray-200: #bdc7cd;
    --bluegray-300: #a0aeb6;
    --bluegray-400: #8295a0;
    --bluegray-500: #657c8a;
    --bluegray-600: #566975;
    --bluegray-700: #475761;
    --bluegray-800: #38444c;
    --bluegray-900: #283237;
    --purple-50: #f9f8fd;
    --purple-100: #e1dff7;
    --purple-200: #cac5f1;
    --purple-300: #b2abeb;
    --purple-400: #9b92e4;
    --purple-500: #8378de;
    --purple-600: #6f66bd;
    --purple-700: #5c549b;
    --purple-800: #48427a;
    --purple-900: #343059
  }

  @-webkit-keyframes p-fadein {
    0% {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }

  @-webkit-keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2.5)
    }
  }

  @charset "UTF-8";

  @-webkit-keyframes fa-spin {
    0% {
      transform: rotate(0)
    }

    to {
      transform: rotate(359deg)
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(0);
      opacity: 0
    }

    25% {
      -webkit-transform: scale(0);
      opacity: .1
    }

    50% {
      -webkit-transform: scale(.1);
      opacity: .3
    }

    75% {
      -webkit-transform: scale(.5);
      opacity: .5
    }

    to {
      -webkit-transform: scale(1);
      opacity: 0
    }
  }

  @-webkit-keyframes taskHighlighter {
    0% {
      background: #feeb99
    }

    to {
      background: #fff
    }
  }

  @charset "UTF-8";

  :root {
    --blue: #293986;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #f86c6b;
    --orange: #f8cb00;
    --yellow: #ffc107;
    --green: #4dbd74;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #73818f;
    --gray-dark: #2f353a;
    --light-blue: #63c2de;
    --gold: #ccae2c;
    --primary: #293986;
    --secondary: #63c2de;
    --success: #4dbd74;
    --info: #73818f;
    --warning: #ffc107;
    --danger: #f86c6b;
    --light: #f0f3f5;
    --dark: #2f353a;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #23282c;
    text-align: left;
    background-color: #e9ebf8
  }

  @-webkit-keyframes progress-bar-stripes {
    0% {
      background-position: 1rem 0
    }

    to {
      background-position: 0 0
    }
  }

  @-webkit-keyframes spinner-border {
    to {
      transform: rotate(360deg)
    }
  }

  @-webkit-keyframes spinner-grow {
    0% {
      transform: scale(0)
    }

    50% {
      opacity: 1
    }
  }

  @media print {

    *,
    *:before,
    *:after {
      text-shadow: none !important;
      box-shadow: none !important
    }

    @page {
      size: a3
    }

    body {
      min-width: 992px !important
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }

  @media all and (-ms-high-contrast: none) {
    html {
      display: flex;
      flex-direction: column
    }
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh
  }

  @-webkit-keyframes opacity {
    0% {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }

  @media (min-width: 576px) {
    @-webkit-keyframes opacity {
      0% {
        opacity: 0
      }

      to {
        opacity: 1
      }
    }
  }

  @media (min-width: 768px) {
    @-webkit-keyframes opacity {
      0% {
        opacity: 0
      }

      to {
        opacity: 1
      }
    }
  }

  @media (min-width: 992px) {
    @-webkit-keyframes opacity {
      0% {
        opacity: 0
      }

      to {
        opacity: 1
      }
    }
  }

  @media (min-width: 1200px) {
    @-webkit-keyframes opacity {
      0% {
        opacity: 0
      }

      to {
        opacity: 1
      }
    }
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
  }
  </style>
  <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'"><noscript>
    <link rel="stylesheet" href="styles.css">
  </noscript>
</head>

<body class="antialiased" >
  <div class="app" id="app"></div>
  <!-- App Loading... -->
  <script src="{{ asset('js/app.js') }}" ></script>
  <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
  <!-- <script src="runtime.js" type="module"></script>
  <script src="polyfills.js" type="module"></script>
  <script src="scripts.js" defer></script>
  <script src="main.js" type="module"></script> -->
</body>

</html>