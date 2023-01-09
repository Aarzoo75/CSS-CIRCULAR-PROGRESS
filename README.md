# CSS Circular Progress Indicator
A lightweight and responsive circular progress indicator using conic gradients and custom properties.

### Installation
To use this progress indicator, simply include the `css/progress-indicator.css` file in your project and apply the `.progress-indicator` class to a div element.

```HTML
<div class="RadialProgress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

<input type="range" value="25" min="0" max="100" />
```

### Customization
You can customize the appearance of the progress indicator using custom properties.

#### Size
To adjust the size of the progress indicator, use the `--size` custom property. The default size is `100px`.

```CSS
.progress-indicator {
  --size: 200px;
}
```

#### Color
To change the color of the progress indicator, use the `--color` custom property. The default color is `#333`.

```CSS
.progress-indicator {
  --color: #f00;
}
```

#### Progress
To set the progress of the indicator, use the `--progress` custom property. The default progress is `0`.

```CSS
.progress-indicator {
  --progress: 50;
}
```

### Compatibility
This progress indicator uses conic gradients, which are supported in most modern browsers including Chrome, Firefox, and Safari. It may not work in older browsers or Internet Explorer.
