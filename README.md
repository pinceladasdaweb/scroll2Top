# scroll2Top
> scroll2Top function that uses requestAnimationFrame and easing for animation

## Getting Started

```bash
# Get the latest snapshot
$ git clone git@github.com:pinceladasdaweb/scroll2Top.git
```

## Demo

View demo [here](http://pinceladasdaweb.com.br/blog/uploads/scroll2Top/)

## How to use?

scroll2Top is a [Vanilla JS](http://vanilla-js.com/) plugin with no dependencies. Include the [`scroll2Top.min.js`](build/scroll2Top.min.js) before your ```</body>``` tag:

```html
<script src="path/to/scroll2Top.min.js"></script>
```

And use it:

```html
<script>
    var btn    = document.querySelector('#btn'),
        target = document.querySelector('p').offsetTop;

    btn.addEventListener('click', function(e){
        e.preventDefault();

        scroll2Top(target, function () {
            alert('Hello!!!')
        }, 1400);
    });
</script>
```

scroll2Top supports AMD, CommomJS and Browser.

## Options

The script expect the following options:

| Value                              | Description                                                                  |
| ---------------------------------- |:----------------------------------------------------------------------------:|
| **to**                             | Integer. Required. How far to offset the scrolling anchor location in pixels |
| **callback**                       | Optional. Function to run after scrolling                                    |
| **duration**                       | Integer. Optional. How fast to complete the scroll in milliseconds           |

## Browser Support

![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

Do you need support for older browsers? Add a [requestAnimationFrame polyfill](https://gist.github.com/paulirish/1579671).

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/scroll2Top/releases) for detailed changelog.

## License
[MIT](LICENSE)