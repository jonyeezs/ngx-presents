# NGx❇︎Presents🍿🎦

Create a slides presentation using [Angular][ngHome]

## Who is this for?

* If you don't want to spend money on PowerPoint
* I'm a coder; I hate WYSIWYG GUIs.
* If you're more comfortable working in an Angular environment
* Want the power of HTML, CSS, JS in your presentation

## How does this work?

Of course with [Angular][ngHome] and good old-fashion [Angular-CLI](https://github.com/angular/angular-cli)

### Other tech-stack

1. [SASS](http://sass-lang.com)

## How To

### Add slides?

1. Run `ng g m ../slides/slide-name -m slides.module.ts --spec=false`.
1. Run `ng g c slides/slide-name -m slides/slide-name/slide-name.module.ts --spec=false --export`.
1. Add `Route` to [slide-route-config.ts](src/app/slides/slide-route-config.ts) according to the transition order.

### Start presenting

* Run `npm start`

### Tips

* For component style placing i recommend this approach:
  1. [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for high level 2-D grid layout
  2. [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) for detailed 1-D layout


[ngHome]: https://angular.io